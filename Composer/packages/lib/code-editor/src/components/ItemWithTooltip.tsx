// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as React from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { HelpTooltipProps } from '@bfc/ui-shared';

import { HelpIconTooltip } from './HelpIconTooltip';

const containerTokens = { childrenGap: 4 };

type Props = {
  tooltipId: string;
  itemText: string | JSX.Element | JSX.Element[] | React.ReactNode;
  tooltipText: string | JSX.Element | JSX.Element[];
  tooltipProps?: Partial<HelpTooltipProps>;
};

const defaultRender = (text: string) => <Text variant="small">{text}</Text>;

export const ItemWithTooltip = React.memo(({ tooltipId, itemText, tooltipText: helpMessage, tooltipProps }: Props) => (
  <Stack horizontal tokens={containerTokens} verticalAlign="center">
    {typeof itemText === 'string' ? defaultRender(itemText) : itemText}
    <HelpIconTooltip helpMessage={helpMessage} tooltipId={tooltipId} tooltipProps={tooltipProps} />
  </Stack>
));
