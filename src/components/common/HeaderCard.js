/**
 * Copyright (c) 2020-present, Doug Watkins Development.
 * All rights reserved.
 * @author Doug Watkins
 * @module src/components/common
 */
import React, { useEffect } from 'react';

import './HeaderCard.css';
import { get } from '../../config/utilities';

function HeaderCard(props) {
  const {
    focusLevel = 'offscreen',
    displaySide = 'center',
    item,
  } = props;

  useEffect(() => {

  }, []);

  return (
    <div className={`header-card-${focusLevel} display-side-${displaySide} header-card`}>
      <p className="tagline">{get(item, 'tagline', '')}</p>
      <div className="bylineRow">
        {/* item.image */}
        <p className="byline">{get(item, 'byline', '')}</p>
        {/* open close button */}
      </div>
    </div>
  );
};

export default HeaderCard;
