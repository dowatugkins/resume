/**
 * Copyright (c) 2020-present, Doug Watkins Development.
 * All rights reserved.
 * @author Doug Watkins
 * @module src/components/Headers
 */

import React, { useState, useEffect } from 'react';

import HeaderCard from './common/HeaderCard';

function Headers(props) {
  const [currentIndex, setCurrentIndex] = useState(props.initialIndex);
  const [leftIndicies, setLeftIndicies] = useState([]);
  const [rightIndicies, setRightIndicies] = useState([]);
  const [secondLevel, setSecondLevel] = useState([]);
  const [thirdLevel, setThirdLevel] = useState([]);
  const [fourthLevel, setFourthLevel] = useState([]);

  const { list } = props;

  useEffect(() => {
    const left = [];
    const right = [];
    if (currentIndex === 0) {
      left.push(list.length - 1);
      left.push(list.length - 2);
      left.push(list.length - 3);
      setSecondLevel([list.length - 1, 1]);
      setThirdLevel([list.length - 2, 2]);
      setFourthLevel([list.length - 3, 3]);
    } else if (currentIndex === 1) {
      left.push(0);
      left.push(list.length - 2);
      left.push(list.length - 1);
      setSecondLevel([0, 2]);
      setThirdLevel([list.length - 1, 3]);
      setFourthLevel([list.length - 2, 4]);
    } else if (currentIndex === 2) {
      left.push(list.length - 1);
      left.push(0);
      left.push(1);
      setSecondLevel([1, 3]);
      setThirdLevel([0, 4]);
      setFourthLevel([list.length - 1, 5]);
    } else {
      left.push(currentIndex - 1);
      left.push(currentIndex - 2);
      left.push(currentIndex - 3);
      setSecondLevel([currentIndex - 1,currentIndex + 1]);
      setThirdLevel([currentIndex - 2,currentIndex + 2]);
      setFourthLevel([currentIndex - 3,currentIndex + 3]);
    }
    left.sort();
    setLeftIndicies(left);

    if (currentIndex === list.length - 1) {
      right.push(1);
      right.push(2);
      right.push(0);
      setSecondLevel([list.length - 2, 0]);
      setThirdLevel([list.length - 3, 1]);
      setFourthLevel([list.length - 4, 2]);
    } else if (currentIndex === list.length - 2) {
      right.push(0);
      right.push(1);
      right.push(list.length - 1);
      setSecondLevel([list.length - 3, list.length - 1]);
      setThirdLevel([list.length - 4, 0]);
      setFourthLevel([list.length - 5, 1]);
    } else if (currentIndex === list.length - 3) {
      right.push(list.length - 1);
      right.push(0);
      right.push(list.length - 2);
      setSecondLevel([list.length - 4, list.length - 2]);
      setThirdLevel([list.length - 5, list.length - 1]);
      setFourthLevel([list.length - 6, 0]);
    } else {
      right.push(currentIndex + 1);
      right.push(currentIndex + 2);
      right.push(currentIndex + 3);
      setSecondLevel([currentIndex - 1,currentIndex + 1]);
      setThirdLevel([currentIndex - 2,currentIndex + 2]);
      setFourthLevel([currentIndex - 3,currentIndex + 3]);
    }
    right.sort();
    setRightIndicies(right);

  }, [currentIndex, list]);

  return (
    <div className={'header-card'}>
      {list.map((item, index) => {
        const focusLevel = currentIndex === index ? '1' :
          secondLevel.includes(index) ? '2' :
            thirdLevel.includes(index) ? '3' :
            fourthLevel.includes(index) ? '4' : 'offscreen';
        const displaySide = leftIndicies.includes(index) ? 'left' : rightIndicies.includes(index) ? 'right' : 'center';
        return (
          <HeaderCard focusLevel={focusLevel} displaySide={displaySide} item={item} key={index} />
        )
      })}
    </div>
  );
};

export default Headers;
