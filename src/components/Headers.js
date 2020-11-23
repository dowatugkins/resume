/**
 * Copyright (c) 2020-present, Doug Watkins Development.
 * All rights reserved.
 * @author Doug Watkins
 * @module src/components/Headers
 */

import React, { useState, useEffect } from 'react';

import HeaderCard from './common/HeaderCard';
import InfoBox from './InfoBox';

function Headers(props) {
  const { list, onIndexChange, onOpenInfoBox, isOpen } = props;

  const [currentIndex, setCurrentIndex] = useState(props.initialIndex);
  const [rightIndicies, setRightIndicies] = useState([0, 1, 2, 3]);
  const [leftIndicies, setLeftIndicies] = useState([0, list.length - 1, list.length - 2, list.length - 3]);
  const [moveDirection, setMoveDirection] = useState('none');

  useEffect(() => {
    return () => {};
  }, []);

  const moveLeft = () => {
    let left = [...leftIndicies];
    let right = [...rightIndicies];
    right.unshift(currentIndex === 0 ? list.length - 1 : currentIndex - 1);
    right.pop();

    const lastLeft = left[left.length - 1];
    left.shift();
    left.push(lastLeft === 0 ? list.length - 1 : lastLeft - 1);

    setRightIndicies(right);
    setLeftIndicies(left);

    const newIndex = currentIndex === 0 ? list.length - 1 : currentIndex - 1;
    onIndexChange(newIndex);
    setCurrentIndex(newIndex);
    setMoveDirection('left');
  }

  const moveRight = () => {
    let left = [...leftIndicies];
    let right = [...rightIndicies];
    console.log(right);
    left.unshift(currentIndex === list.length - 1 ? 0 : currentIndex + 1);
    left.pop();
    console.log(right);
    console.log(currentIndex);

    const lastRight = right[right.length - 1];
    right.shift();
    right.push(lastRight === list.length - 1 ? 0 : lastRight + 1);

    setRightIndicies(right);
    setLeftIndicies(left);

    const newIndex = currentIndex === list.length - 1 ? 0 : currentIndex + 1;
    onIndexChange(newIndex);
    setCurrentIndex(newIndex);
    setMoveDirection('right');
  }

  return (
    <>
      <div className={`header-card-list ${isOpen}`}>
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
              displaySide === 'center' ? index === currentIndex ? () => moveRight() : moveDirection === 'right' ? () => moveRight() : () => moveLeft() :
                () => moveLeft();
          return (
            <HeaderCard isOpen={isOpen} onOpenInfoBox={onOpenInfoBox} onClick={direction} moveDirection={moveDirection} focusLevel={focusLevel} displaySide={displaySide} key={index} item={item} />
          )
        })
      }
      </div>
      <InfoBox item={list[currentIndex]} isOpen={isOpen} list={list} currentIndex={currentIndex} onMoveLeft={moveLeft} onMoveRight={moveRight}/>
    </>
  );
};

export default Headers;
