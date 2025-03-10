// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { css } from '@emotion/core';
import { FontSizes, FontWeights } from 'office-ui-fabric-react/lib/Styling';

export const customFieldLabel = {
  subComponentStyles: {
    label: {
      root: {
        fontWeight: FontWeights.regular,
        fontSize: FontSizes.small,
      },
    },
  },
};

export const showDesign = (show) => css`
  display: ${show ? 'block' : 'none'} !important;
  height: 100%;
`;

export const data = css`
  height: calc(100vh - 50px);

  label: RouteContent;
`;
