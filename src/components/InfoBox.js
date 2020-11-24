/**
 * Copyright (c) 2020-present, Doug Watkins Development.
 * All rights reserved.
 * @author Doug Watkins
 * @module src/components/InfoBox
 */

import React from 'react';

import { get } from '../config/utilities';
import Timeline from './Timeline';
import './InfoBox.css';
import useWindowSize from '../hooks/useWindowSize';

function InfoBox(props) {
  const { width } = useWindowSize();

  const { isOpen, item, currentIndex, list, onMoveLeft, onMoveRight } = props;

  const imageStyle = {
    width: 300,
    height: 300,
    objectFit: 'contain'
  };

  const infoBoxTopMobile = width > 683 ? '220px' :
    width > 645 ? '220px' :
      width > 567 ? '250px' :
        width > 480 ? '260px' :
          width > 430 ? '280px' :
            width > 402 ? '295px' :
              width > 355 ? '315px' :
                '335px';

  return width > 960 ? (
    <div className={`info-box box-${isOpen}`}>
      <Timeline item={item} currentIndex={currentIndex} listLength={list.length} onMoveLeft={onMoveLeft} onMoveRight={onMoveRight}/>
      <div className={'info-box-text-container'}>
        <div className={'info-box-left'}>
          <p className={'info-title info-text'}>{get(item, 'footer.title', '')}</p>
          <p className={'info-text-left info-text'}>{get(item, 'footer.leftText', '')}</p>
        </div>
        <img src={get(item, 'footer.image')} className={'info-image'} alt="" style={imageStyle}/>
        <div className={'info-box-right'}>
          <p className={'info-text-right info-text'}>{get(item, 'footer.rightText', '')}</p>
          <ul className={'info-box-list'}>
            {get(item, 'footer.list', []).map((listItem, index) => {
              return (
                <div key={index} className={'list-item-row'}>
                  <i className={`material-icons list-item-icon`}>whatshot</i>
                  <li className={'info-box-list-item'}>{listItem}</li>
                </div>
            )})}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div className={`info-box-mobile box-${isOpen}`}>
      <Timeline item={item} currentIndex={currentIndex} listLength={list.length} onMoveLeft={onMoveLeft} onMoveRight={onMoveRight}/>
      <div className={'info-box-text-container-mobile'} style={{ top: infoBoxTopMobile }}>
        <div className={'info-box-left-mobile'}>
          <p className={'info-title info-text'}>{get(item, 'footer.title', '')}</p>
          <p className={'info-text-left info-text'}>{get(item, 'footer.leftText', '') + get(item, 'footer.rightText', '')}</p>
          <img src={get(item, 'footer.image')} className={'info-image-mobile'} alt="" style={imageStyle}/>
          <ul className={'info-box-list-mobile'}>
            {get(item, 'footer.list', []).map((listItem, index) => {
              return (
                <div key={index} className={'list-item-row'}>
                  <i className={`material-icons list-item-icon`}>whatshot</i>
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
