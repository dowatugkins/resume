/**
 * Copyright (c) 2020-present, Doug Watkins Development.
 * All rights reserved.
 * @author Doug Watkins
 * @module src/components/InfoBox
 */

import React from 'react';

import { get } from '../config/utilities';

function InfoBox(props) {
  const { isOpen, item } = props;

  const imageStyle = {
    width: 300,
    height: 300,
  };

  return (
    <div className={`info-box box-${isOpen}`}>
      {/* timeline box */}
      <div className={'info-box-text-container'}>
        <div className={'info-box-left'}>
          <p className={'info-title info-text'}>{get(item, 'footer.title', '')}</p>
          <p className={'info-text-left info-text'}>{get(item, 'footer.leftText', '')}</p>
        </div>
        <img src={get(item, 'footer.image')} className={'info-image'} alt="" style={imageStyle}/>
        <div className={'info-box-right'}>
          <p className={'info-text-right info-text'}>{get(item, 'footer.rightText', '')}</p>
          <ul className={'info-box-list'}>
            {get(item, 'footer.list', []).map((listItem) => {
              return (
                <div className={'list-item-row'}>
                <i class={`material-icons list-item-icon`}>whatshot</i>
                <li className={'info-box-list-item'}>{listItem}</li>
              </div>
            )})}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
