// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from 'react';
import styled from '@emotion/styled';
import { ActionButton, IButtonStyles } from 'office-ui-fabric-react/lib/components/Button';
import { FluentTheme } from '@uifabric/fluent-theme';
import formatMessage from 'format-message';

export const ButtonContainer = styled.div({
  borderTop: `1px solid ${FluentTheme.palette.neutralLight}`,
  width: '100%',
});

export const actionButtonStyles: IButtonStyles = {
  root: {
    fontSize: FluentTheme.fonts.small.fontSize,
    fontWeight: FluentTheme.fonts.small.fontWeight,
    color: FluentTheme.palette.themePrimary,
    paddingLeft: 8,
    height: 20,
  },
};

type Props = {
  disabled?: boolean;
  onClick: React.MouseEventHandler<unknown>;
};

export const AddButton = ({ children, onClick, disabled }: React.PropsWithChildren<Props>) => {
  return (
    <ButtonContainer>
      <ActionButton data-testid="add-button" disabled={disabled} styles={actionButtonStyles} onClick={onClick}>
        {children ?? formatMessage('Add new')}
      </ActionButton>
    </ButtonContainer>
  );
};
