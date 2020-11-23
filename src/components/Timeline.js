/**
 * Copyright (c) 2020-present, Doug Watkins Development.
 * All rights reserved.
 * @author Doug Watkins
 * @module app/components/directory/Timeline
 */

import React, { useState, useEffect } from 'react';

import './Timeline.css';
import { months } from '../config/constants';
import { get } from '../config/utilities';
import useWindowSize from '../hooks/useWindowSize';

function Timeline(props) {
  const [hover, setHover] = useState(false);
  const [markerStyle, setMarkerStyle] = useState({});
  const [previousIndex, setPreviousIndex] = useState(-1);

  const { width } = useWindowSize();

  const { item, onMoveLeft, onMoveRight, currentIndex, listLength } = props;
  const date = get(item, 'date', new Date());

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  const elementSize = 215;
  const timelineWidth = width - elementSize;
  const constantMarkerStyle = {
    color: '#0099ff',
    position: 'absolute',
    top: 38,
    transform: 'rotate(90deg)',
    left: ((timelineWidth / listLength) * currentIndex) + (125 - (2 * currentIndex)),
  };

  // useEffect(() => {
  //   if (currentIndex !== previousIndex) {
  //     setPreviousIndex(currentIndex);
  //     setMarkerStyle({
  //       left: (timelineWidth / listLength) * currentIndex,
  //     });
  //   }
  // }, [currentIndex, markerStyle, previousIndex, listLength, timelineWidth]);

  return (
    <div className={'timeline-container'}>
      <div className={'timeline-bar left'} />
      <div className={`timeline-date-container ${hover ? 'hover' : 'no-hover'}`} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        <p className={'timeline-date month'}>{month}</p>
        <p className={'timeline-date day'}>{day}</p>
        <p className={'timeline-date year'}>{year}</p>
      </div>
      <div className={'timeline-bar inner'} />
      <div className={`timeline-controls-container ${hover ? 'hover' : 'no-hover'}`} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        <i className={'material-icons left-button'} onClick={() => onMoveLeft()}>keyboard_arrow_left</i>
        <i className={'material-icons right-button'} onClick={() => onMoveRight()}>keyboard_arrow_right</i>
      </div>
      <div className={'timeline-bar right'} />
      <i className={'material-icons timeline-bar-marker'} style={{ ...constantMarkerStyle, ...markerStyle }}>label</i>
    </div>
  );
};

export default Timeline;
