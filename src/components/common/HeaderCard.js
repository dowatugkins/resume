/**
 * Copyright (c) 2020-present, Doug Watkins Development.
 * All rights reserved.
 * @author Doug Watkins
 * @module src/components/common
 */
import React, { useEffect } from 'react';

import './HeaderCard.css';
import useWindowSize from '../../hooks/useWindowSize';
import { get } from '../../config/utilities';

function HeaderCard(props) {
  const { width = 1 } = useWindowSize();

  const {
    focusLevel = 'offscreen',
    displaySide = 'center',
    moveDirection,
    onOpenInfoBox,
    isOpen,
    item,
    onClick,
  } = props;

  useEffect(() => {

  }, []);

  const size = focusLevel === '1' ? width / 12 :
      focusLevel === '2' ? width / 25 :
        focusLevel === '3' ? width / 35 :
          focusLevel === '4' ? width / 50 :
            0;

  const taglineSize = focusLevel === '1' ? width / 17 :
      focusLevel === '2' ? width / 25 :
        focusLevel === '3' ? width / 35 :
          focusLevel === '4' ? width / 40 :
            0;

  const bylineSize = focusLevel === '1' ? width / 30 :
    focusLevel === '2' ? width / 60 :
      focusLevel === '3' ? width / 80 :
        focusLevel === '4' ? width / 100 :
          0;

  return (
    <div className={`header-card-${focusLevel} ${isOpen} display-side-${displaySide} ${moveDirection} header-card`} onClick={onClick}>
      <p className="tagline" style={{ fontSize: taglineSize }}>{get(item, 'tagline', '')}</p>
      <div className="bylineRow">
        {/* item.image */}
        <img className={`header-image`} src={get(item, 'image', '')} alt="" style={{ maxWidth: size, maxHeight: size, objectFit: 'contain' }}/>
        <p className="byline" style={{ fontSize: bylineSize }}>
          {get(item, 'byline', '')} {
            <i className={`material-icons open-button info-box-${isOpen}`} onClick={onOpenInfoBox}>keyboard_arrow_down</i>
          }
        </p>
      </div>
    </div>
  );
};

export default HeaderCard;
