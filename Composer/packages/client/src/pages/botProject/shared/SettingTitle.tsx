// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FontSizes, FontWeights } from 'office-ui-fabric-react/lib/Styling';
import { SectionTitle } from '@bfc/ui-shared';

export const SettingTitle: React.FC = (props) => (
  <SectionTitle
    css={css`
      display: inline-block;
      font-size: ${FontSizes.large};
      font-weight: ${FontWeights.semibold};
      margin-top: 25px;
      margin-bottom: 5px;
    `}
    level={4}
    {...props}
  />
);
