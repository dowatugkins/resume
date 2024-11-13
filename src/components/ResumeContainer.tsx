/**
 * Copyright (c) 2020-present, Doug Watkins Development.
 * All rights reserved.
 * @author Doug Watkins
 * @module src/components/ResumeContainer
 */

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import HeaderCard from './common/HeaderCard';
import InfoBox from './InfoBox';
import { ListItem } from '../config/constants';
import { colors } from '../config/theme';
import useWindowSize from '../hooks/useWindowSize';

type PropsType = {
  list: ListItem[];
  onOpenInfoBox: Function;
  isOpen: boolean;
  initialIndex: number;
};

function ResumeContainer(props: PropsType) {
  const { list, onOpenInfoBox, isOpen } = props;
  const { height = 0 } = useWindowSize();

  const [currentIndex, setCurrentIndex] = useState(props.initialIndex);
  const [rightIndicies, setRightIndicies] = useState([0, 1, 2, 3]);
  const [leftIndicies, setLeftIndicies] = useState([
    0,
    list.length - 1,
    list.length - 2,
    list.length - 3,
  ]);

  const moveLeft = useCallback(() => {
    console.log('moving left');
    let left = [...leftIndicies];
    let right = [...rightIndicies];
    right.unshift(currentIndex === 0 ? list.length - 1 : currentIndex - 1);
    right.pop();

    const lastLeft = left[left.length - 1];
    left.shift();
    left.push(lastLeft === 0 ? list.length - 1 : lastLeft - 1);

    setRightIndicies(right);
    setLeftIndicies(left);
    console.log({ left, right });

    const newIndex = currentIndex === 0 ? list.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, leftIndicies, list.length, rightIndicies]);

  const moveRight = useCallback(() => {
    console.log('moving right');
    let left = [...leftIndicies];
    let right = [...rightIndicies];
    left.unshift(currentIndex === list.length - 1 ? 0 : currentIndex + 1);
    left.pop();

    const lastRight = right[right.length - 1];
    right.shift();
    right.push(lastRight === list.length - 1 ? 0 : lastRight + 1);

    setRightIndicies(right);
    setLeftIndicies(left);
    console.log({ left, right });

    const newIndex = currentIndex === list.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, leftIndicies, list.length, rightIndicies]);

  useEffect(() => {
    const handleKeyPress = ({ key }: { key: string }) => {
      switch (key) {
        case 'ArrowLeft':
          moveLeft();
          break;
        case 'ArrowRight':
          moveRight();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress, true);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [moveLeft, moveRight]);

  return (
    <motion.div
      layout
      style={{ flex: 1, flexDirection: 'column' }}
    >
      <div style={{ flexGrow: 1 }}>
        <motion.div
          className="left-nav-button"
          whileHover={{
            color: colors.white,
          }}
          style={{
            color: colors.main,
            padding: 20,
            position: 'fixed',
            width: 80,
            height: '100%',
            zIndex: 1000,
            justifyContent: 'center',
          }}
          onClick={(event) => {
            event.stopPropagation();
            moveLeft();
          }}
        >
          <div
            style={{
              position: 'fixed',
              top: 300,
            }}
          >
            <ArrowBackIosNewOutlinedIcon
              sx={{
                fontSize: 80,
              }}
              style={{ zIndex: -100 }}
            />
          </div>
        </motion.div>
        {list.map((item, index) => {
          const focusLevel =
            index === currentIndex
              ? '1'
              : leftIndicies.includes(index)
              ? `${leftIndicies.indexOf(index) + 1}`
              : rightIndicies.includes(index)
              ? `${rightIndicies.indexOf(index) + 1}`
              : 'offscreen';
          const displaySide =
            index === currentIndex
              ? 'center'
              : leftIndicies.includes(index)
              ? 'left'
              : rightIndicies.includes(index)
              ? 'right'
              : 'offscreen';
          return (
            <AnimatePresence>
              <HeaderCard
                isOpen={isOpen}
                onOpenInfoBox={onOpenInfoBox}
                focusLevel={focusLevel}
                displaySide={displaySide}
                key={item?.tagline}
                item={item}
              />
            </AnimatePresence>
          );
        })}
        <motion.div
          whileHover={{
            color: colors.white,
          }}
          style={{
            position: 'fixed',
            padding: 20,
            right: 0,
            color: colors.main,
            width: 80,
            height: '100%',
            zIndex: 1000,
            justifyContent: 'center',
          }}
          onClick={(event) => {
            event.stopPropagation();
            moveRight();
          }}
        >
          <motion.div style={{ position: 'fixed', top: 300 }}>
            <ArrowForwardIosOutlinedIcon
              sx={{
                fontSize: 80,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        style={{ flexShrink: 1 }}
        layout
      >
        <InfoBox
          item={list[currentIndex]}
          isOpen={isOpen}
          list={list}
          currentIndex={currentIndex}
          onMoveLeft={moveLeft}
          onMoveRight={moveRight}
        />
      </motion.div>
    </motion.div>
  );
}

export default ResumeContainer;
