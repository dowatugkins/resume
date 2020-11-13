/**
 * Copyright (c) 2020-present, Doug Watkins Development.
 * All rights reserved.
 * @author Doug Watkins
 * @module src/components/Headers
 */

import React, { useState, useEffect } from 'react';

import HeaderCard from './common/HeaderCard';
import { get } from '../config/utilities';

function Headers(props) {
  const [currentIndex, setCurrentIndex] = useState(props.initialIndex);
  const [leftIndicies, setLeftIndicies] = useState([]);
  const [rightIndicies, setRightIndicies] = useState([]);
  const [moveDirection, setMoveDirection] = useState('none');

  const displayList = [4, 3, 2, 1];

  const { list } = props;

  useEffect(() => {
    const left = [];
    const right = [];
    if (currentIndex === 0) {
      right.push(0);
      right.push(list.length - 1);
      right.push(list.length - 2);
      right.push(list.length - 3);
    } else if (currentIndex === 1) {
      right.push(1);
      right.push(0);
      right.push(list.length - 1);
      right.push(list.length - 2);
    } else if (currentIndex === 2) {
      right.push(2);
      right.push(1);
      right.push(0);
      right.push(list.length - 1);
    } else {
      right.push(currentIndex);
      right.push(currentIndex - 1);
      right.push(currentIndex - 2);
      right.push(currentIndex - 3);
    }
    console.log(right);
    if (currentIndex === list.length) {
      left.push(0);
      left.push(1);
      left.push(2);
      left.push(3);
    } else if (currentIndex === list.length - 1) {
      right.push(list.length);
      left.push(0);
      left.push(1);
      left.push(2);
    } else if (currentIndex === list.length - 2) {
      left.push(list.length - 1);
      right.push(list.length);
      left.push(0);
      left.push(1);
    } else {
      left.push(currentIndex);
      left.push(currentIndex + 1);
      left.push(currentIndex + 2);
      left.push(currentIndex + 3);
    }

    setLeftIndicies(left);
    setRightIndicies(right);

    return () => {};
  }, []);

  const moveLeft = () => {
    let left = [...leftIndicies];
    let right = [...rightIndicies];
    left.unshift(currentIndex === 0 ? list.length - 1 : currentIndex - 1);
    left.pop();

    const lastRight = right[right.length - 1];
    right.shift();
    right.push(lastRight === 0 ? list.length - 1 : lastRight - 1);

    setRightIndicies(right);
    setLeftIndicies(left);
    setCurrentIndex(currentIndex === 0 ? list.length - 1 : currentIndex - 1);
    setMoveDirection('left');
  }

  const moveRight = () => {
    let left = [...leftIndicies];
    let right = [...rightIndicies];
    console.log(right);
    right.unshift(currentIndex === list.length - 1 ? 0 : currentIndex + 1);
    right.pop();
    console.log(right);
    console.log(currentIndex);

    const lastLeft = left[left.length - 1];
    left.shift();
    left.push(lastLeft === list.length - 1 ? 0 : lastLeft + 1);

    setRightIndicies(right);
    setLeftIndicies(left);
    setCurrentIndex(currentIndex === list.length - 1 ? 0 : currentIndex + 1);
    setMoveDirection('right');
  }

  return (
    <div className={'header-card-list'}>
      {
      list.map((item, index) => {
        const focusLevel = index === currentIndex ? '1' :
          leftIndicies.includes(index) ? `${leftIndicies.indexOf(index) + 1}` :
            rightIndicies.includes(index) ? `${rightIndicies.indexOf(index) + 1}` :
              'offscreen';
        const displaySide = index === currentIndex ? 'center' :
          leftIndicies.includes(index) ? 'left' :
            rightIndicies.includes(index) ? 'right' :
              'offscreen';
        const direction = displaySide === 'left' ? () => moveLeft() :
          displaySide === 'right' ? () => moveRight() :
            displaySide === 'center' ? index === currentIndex ? () => moveLeft() : moveDirection === 'right' ? () => moveRight() : () => moveLeft() :
              () => moveLeft();
        return (
          <HeaderCard onClick={direction} moveDirection={moveDirection} focusLevel={focusLevel} displaySide={displaySide} key={index} item={item} />
        )
      })
    }
    </div>
  );
};

export default Headers;
