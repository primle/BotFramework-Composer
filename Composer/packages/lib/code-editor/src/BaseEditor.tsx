// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import Editor, { EditorDidMount, EditorProps, Monaco, monaco } from '@monaco-editor/react';
import { NeutralColors, SharedColors } from '@uifabric/fluent-theme';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import { Link } from 'office-ui-fabric-react/lib/Link';
import formatMessage from 'format-message';
import { Diagnostic } from '@bfc/shared';
import { findErrors, combineSimpleMessage, findWarnings } from '@bfc/indexers';
import { CodeEditorSettings, assignDefined } from '@bfc/shared';

import { isElectron } from './utils';

/**
 * Taken from node_modules/monaco-editor/esm/vs/editor/editor.api.d.ts
 * to overcome jest related tests issues
 */
enum MonacoKeyCode {
  Escape = 9,
}

const defaultOptions = {
  scrollBeyondLastLine: false,
  scrollbar: {
    alwaysConsumeMouseWheel: false,
  },
  wordWrap: 'off',
  wordWrapColumn: 120,
  fontFamily: 'Courier',
  fontSize: '18px',
  fontWeight: 600,
  lineNumbers: 'off',
  quickSuggestions: false,
  minimap: {
    enabled: false,
    maxColumn: 0,
  },
  lineDecorationsWidth: 10,
  lineNumbersMinChars: 3,
  glyphMargin: false,
  folding: false,
  renderLineHighlight: 'none',
  formatOnType: true,
  fixedOverflowWidgets: true,
  links: isElectron() ? false : true, // disable in electron@8.2.4 before monaco editor can set target '_blank'
};

const styles = {
  container: ({ hovered, focused, error, warning, height, editorOptions }) => {
    let borderColor = NeutralColors.gray120;

    if (hovered) {
      borderColor = NeutralColors.gray160;
    }

    if (focused) {
      borderColor = SharedColors.cyanBlue10;
    }

    if (warning) {
      borderColor = SharedColors.yellow10;
    }

    if (error) {
      borderColor = SharedColors.red20;
    }

    let heightAdj = 0;

    if (error || warning) {
      heightAdj += 32;
    }

    return css`
      border-width: ${focused ? '2px' : '1px'};
      padding: ${focused ? 0 : '1px'};
      border-style: solid;
      border-color: ${borderColor};
      transition: border-color 0.1s linear;
      box-sizing: border-box;
      height: calc(${typeof height === 'string' ? height : `${height}px`} - ${heightAdj}px);
      > * {
        opacity: ${editorOptions?.readOnly && editorOptions?.fadedWhenReadOnly ? 0.4 : 1};
      }
      label: BaseEditor;
    `;
  },
  settings: css`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-bottom: 5px;

    label: BaseEditorSettings;
  `,
};

const mergeEditorSettings = (baseOptions: any, overrides: Partial<CodeEditorSettings> = {}) => {
  return {
    ...baseOptions,
    lineNumbers: overrides.lineNumbers ? 'on' : 'off',
    wordWrap: overrides.wordWrap ? 'on' : 'off',
    minimap: {
      enabled: overrides.minimap,
      maxColumn: overrides.minimap ? 120 : 0,
    },
    fontFamily: overrides?.fontSettings?.fontFamily,
    fontSize: overrides?.fontSettings?.fontSize,
    fontWeight: Number(overrides?.fontSettings?.fontWeight),
    fadedWhenReadOnly: overrides?.fadedWhenReadOnly !== undefined ? overrides.fadedWhenReadOnly : true,
  };
};

export type OnInit = (instance: Monaco) => void;

export interface BaseEditorProps extends EditorProps {
  diagnostics?: Diagnostic[]; // indexer generic diagnostic
  helpURL?: string;
  hidePlaceholder?: boolean;
  id?: string;
  onChange: (newValue: string, isFlush?: boolean) => void;
  onInit?: OnInit;
  placeholder?: string;
  value?: string;
  warningMessage?: string; // warning text show below editor
  errorMessage?: string; // error text show below editor
  editorSettings?: Partial<CodeEditorSettings>;
  onChangeSettings?: (settings: CodeEditorSettings) => void;
  onBlur?: (id: string) => void;
  onFocus?: (id: string) => void;
  styleOverrides?: SerializedStyles[];
  popExpandOptions?: { onEditorPopToggle?: (expanded: boolean) => void; popExpandTitle: string };
}

const BaseEditor: React.FC<BaseEditorProps> = (props) => {
  const {
    onChange,
    editorDidMount,
    placeholder,
    hidePlaceholder,
    value,
    id,
    errorMessage,
    warningMessage,
    diagnostics = [],
    helpURL,
    height = '100%',
    onInit,
    editorSettings,
    onFocus,
    onBlur,
    styleOverrides = [],
    ...rest
  } = props;
  const baseOptions = useMemo(() => assignDefined(defaultOptions, props.options), [props.options]);
  const [editorOptions, setEditorOptions] = useState(mergeEditorSettings(baseOptions, editorSettings));

  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const editorRef = useRef<any>();

  // initialValue is designed to imporve local performance
  // it should be force updated if id change, or previous value is empty.
  // if editor is readOnly, we can take external value updates.
  const initialValue = useMemo(() => value || (hidePlaceholder ? '' : placeholder), [id, !!value]);

  const onEditorMount: EditorDidMount = (getValue, editor) => {
    editorRef.current = editor;

    if (typeof editorDidMount === 'function') {
      editorDidMount(getValue, editor);
    }

    editor.onDidDispose(() => {
      editorRef.current = undefined;
    });
  };

  useEffect(() => {
    monaco.init().then((instance) => {
      typeof onInit === 'function' && onInit(instance);
    });
  }, []);

  useEffect(() => {
    if (editorRef.current) {
      const onFocusListener = editorRef.current.onDidFocusEditorWidget(() => {
        onFocus && id && onFocus(id);
        setFocused(true);
      });

      const onBlurListener = editorRef.current.onDidBlurEditorWidget(() => {
        onBlur && id && onBlur(id);
        setFocused(false);
      });

      return () => {
        onFocusListener.dispose();
        onBlurListener.dispose();
      };
    }
  }, [editorRef.current, onBlur, onFocus]);

  useEffect(() => {
    if (editorRef.current) {
      const disposable = editorRef.current.onDidChangeModelContent((e) => {
        if (editorRef.current) {
          const newValue = editorRef.current.getValue();
          setTimeout(() => onChange(newValue, e.isFlush), 0);
        }
      });

      return () => {
        disposable.dispose();
      };
    }
  }, [onChange, editorRef.current]);

  // Add a command to escape from editor
  useEffect(() => {
    if (!editorRef.current) return;
    editorRef.current.addCommand(MonacoKeyCode.Escape, () => {
      (document.activeElement as HTMLElement)?.blur();
    });
  }, [editorRef.current]);

  const errorMsgFromDiagnostics = useMemo(() => {
    const errors = findErrors(diagnostics);
    return errors.length ? combineSimpleMessage(errors) : '';
  }, [diagnostics]);

  const warningMsgFromDiagnostics = useMemo(() => {
    const warnings = findWarnings(diagnostics);
    return warnings.length ? combineSimpleMessage(warnings) : '';
  }, [diagnostics]);

  const hasError = !!errorMessage || !!errorMsgFromDiagnostics;
  const hasWarning = !!warningMessage || !!warningMsgFromDiagnostics;

  const messageHelp = errorMessage || errorMsgFromDiagnostics || warningMessage || warningMsgFromDiagnostics;

  const syntaxLink = (
    <Link key="a" href={helpURL} rel="noopener noreferrer" target="_blank">
      {formatMessage('Refer to the syntax documentation here.')}
    </Link>
  );

  useEffect(() => {
    if (editorRef.current && editorSettings) {
      setEditorOptions(mergeEditorSettings(baseOptions, editorSettings));
    }
  }, [editorSettings]);

  return (
    <React.Fragment>
      <div
        css={[
          styles.container({
            hovered,
            focused,
            error: hasError,
            warning: hasWarning,
            height,
            editorOptions,
          }),
          ...styleOverrides,
        ]}
        data-testid="BaseEditor"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Editor
          {...rest}
          key={id}
          editorDidMount={onEditorMount}
          options={editorOptions}
          value={(editorOptions?.readOnly ? value : initialValue) || ''}
        />
      </div>
      {(hasError || hasWarning) && (
        <MessageBar
          isMultiline
          dismissButtonAriaLabel={formatMessage('Close')}
          messageBarType={hasError ? MessageBarType.error : hasWarning ? MessageBarType.warning : MessageBarType.info}
        >
          {messageHelp}
          {syntaxLink}
        </MessageBar>
      )}
    </React.Fragment>
  );
};

BaseEditor.defaultProps = {
  language: 'markdown',
  theme: 'vs',
};

export { BaseEditor };
