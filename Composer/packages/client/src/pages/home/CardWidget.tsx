// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import React, { useState } from 'react';
import { Image, ImageFit, ImageLoadState } from 'office-ui-fabric-react/lib/Image';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { useId } from '@uifabric/react-hooks';

import defaultArticleCardCover from '../../images/defaultArticleCardCover.svg';
import defaultVideoCardCover from '../../images/defaultVideoCardCover.svg';

import { itemContainerWrapper } from './styles';
import * as home from './styles';

export interface CardWidgetProps {
  onClick?: () => void | Promise<void>;
  cardType: 'resource' | 'video' | 'article';
  imageCover: string;
  href?: string;
  target?: string;
  title: string | JSX.Element;
  content: string;
  styles?: {
    container?: SerializedStyles;
    title?: SerializedStyles;
    imageCover?: SerializedStyles;
    content?: SerializedStyles;
    moreLink?: SerializedStyles;
  };
  disabled?: boolean;
  forwardedRef?: (project: any) => void | Promise<void>;
  moreLinkText?: string;
  role?: string;
}

export const CardWidget: React.FC<CardWidgetProps> = ({
  onClick = undefined,
  href,
  target = '_blank',
  title,
  content,
  disabled,
  forwardedRef,
  imageCover,
  cardType,
  moreLinkText,
  ...rest
}) => {
  const defaultImageCover = cardType === 'video' ? defaultVideoCardCover : defaultArticleCardCover;
  const [appliedImageCover, setAppliedImageCover] = useState<string>(imageCover ?? defaultImageCover);
  const styles =
    rest.styles || cardType === 'resource'
      ? home.cardItem
      : imageCover
      ? home.mediaCardItem
      : home.mediaCardNoCoverItem;

  const onImageLoading = (state: ImageLoadState) => {
    if (state === ImageLoadState.error) {
      setAppliedImageCover(defaultImageCover);
    }
  };

  const labelId = useId('link-label');

  return (
    <div ref={forwardedRef} css={home.cardWrapper} {...rest}>
      <a
        aria-labelledBy={labelId}
        css={[itemContainerWrapper(disabled), styles.container]}
        href={href}
        target={target}
        onClick={async (e) => {
          if (onClick != null) {
            e.preventDefault();
            await onClick();
          }
        }}
      >
        <div css={styles.imageCover}>
          <Image
            className={'image-cover-img'}
            imageFit={ImageFit.contain}
            role="presentation"
            src={appliedImageCover}
            onLoadingStateChange={onImageLoading}
          />
        </div>
        <div id={labelId}>
          <div css={styles.title}>{title}</div>
          <div css={styles.content}>{content}</div>
        </div>
        {moreLinkText && (
          <Link aria-labelledBy={labelId} css={styles.moreLink} role="link">
            {moreLinkText}
          </Link>
        )}
      </a>
    </div>
  );
};
