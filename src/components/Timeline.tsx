/**
 * Copyright (c) 2020-present, Doug Watkins Development.
 * All rights reserved.
 * @author Doug Watkins
 * @module app/components/directory/Timeline
 */

import React, { useState, useEffect } from 'react';

import './Timeline.css';
import { ListItem, months } from '../config/constants';
import useWindowSize from '../hooks/useWindowSize';
import { motion } from 'framer-motion';

type PropsType = {
  item: ListItem;
  onMoveLeft: Function;
  onMoveRight: Function;
  currentIndex: number;
  listLength: number;
  isOpen: boolean;
};
function Timeline(props: PropsType) {
  const [hover, setHover] = useState(false);

  const { width = 0 } = useWindowSize();

  const { item, onMoveLeft, onMoveRight, currentIndex, listLength, isOpen } =
    props;
  const date = item?.date || new Date();

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  const elementSize = 245;
  const timelineWidth = (width || 0) - elementSize;

  useEffect(() => {}, []);

  return (
    <div className={'timeline-container'}>
      <div className={'timeline-bar left'} />
      <div
        className={`timeline-date-container ${hover ? 'hover' : 'no-hover'}`}
      >
        <p className={'timeline-date month'}>{month}</p>
        <p className={'timeline-date day'}>{day}</p>
        <p className={'timeline-date year'}>{year}</p>
      </div>
      <div className={'timeline-bar inner'} />
      <div
        className={`timeline-controls-container ${
          hover ? 'hover' : 'no-hover'
        }`}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <i
          className={'material-icons left-button'}
          onClick={() => onMoveLeft()}
        >
          keyboard_arrow_left
        </i>
        <i
          className={'material-icons right-button'}
          onClick={() => onMoveRight()}
        >
          keyboard_arrow_right
        </i>
      </div>
      <div className={'timeline-bar right'} />
      <motion.i
        initial={{
          transform: 'rotate(90deg)',
        }}
        animate={{
          left: timelineWidth
            ? (timelineWidth / (listLength + 1)) * currentIndex +
              (125 - 2 * currentIndex)
            : 0,
          bottom: isOpen ? (width > 960 ? 338 : 538) : 38,
        }}
        className={'material-icons timeline-tracker'}
        style={{
          color: '#0099ff',
        }}
      >
        label
      </motion.i>
    </div>
  );
}

export default Timeline;
