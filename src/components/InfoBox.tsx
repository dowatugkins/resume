/**
 * Copyright (c) 2020-present, Doug Watkins Development.
 * All rights reserved.
 * @author Doug Watkins
 * @module src/components/InfoBox
 */

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Whatshot from '@mui/icons-material/WhatshotOutlined';

import Timeline from './Timeline';
import './InfoBox.css';
import useWindowSize from '../hooks/useWindowSize';
import { ListItem } from '../config/constants';
import { colors } from '../config/theme';

type PropsType = {
  isOpen: boolean;
  item: ListItem;
  currentIndex: number;
  list: ListItem[];
  onMoveLeft: Function;
  onMoveRight: Function;
};

type ImageType = {
  width: number;
  height: number;
};

const InfoBox = (props: PropsType) => {
  const { width, height = 0 } = useWindowSize();

  const { isOpen, item, currentIndex, list, onMoveLeft, onMoveRight } = props;

  const imageStyle: ImageType = {
    width: 300,
    height: 300,
  };

  const leftText = () => {
    const left = item?.footer?.leftText;
    const splitLeft = left.split('**');

    if (splitLeft.length > 0) {
      return (
        <span>
          {splitLeft[0]} <a href={item?.footer?.leftURL}>{splitLeft[1]}</a>{' '}
          {splitLeft[2]}
        </span>
      );
    }
    return left;
  };

  const rightText = () => {
    const right = item?.footer?.rightText;
    const splitRight = right.split('**');

    if (splitRight.length > 0) {
      return (
        <span>
          {splitRight[0]}{' '}
          <a href={item?.footer?.leftURL || ''}>{splitRight[1]}</a>{' '}
          {splitRight[2]}
        </span>
      );
    }
    return right;
  };

  if (!width) {
    return null;
  }

  const infoBoxTopMobile =
    width > 683
      ? '240px'
      : width > 645
      ? '220px'
      : width > 567
      ? '250px'
      : width > 480
      ? '260px'
      : width > 430
      ? '280px'
      : width > 402
      ? '295px'
      : width > 355
      ? '335px'
      : '335px';

  return width > 960 ? (
    <div className={`info-box box-${isOpen}`}>
      <Timeline
        isOpen={isOpen}
        item={item}
        currentIndex={currentIndex}
        listLength={list.length}
        onMoveLeft={onMoveLeft}
        onMoveRight={onMoveRight}
      />
      <AnimatePresence
        mode="popLayout"
        initial={false}
      >
        {isOpen ? (
          <motion.div
            key={'info-box'}
            layoutId="info-box"
            layoutDependency={isOpen}
            layout
            animate={{
              bottom: 0,
            }}
            initial={{
              bottom: -400,
            }}
            exit={{
              bottom: -400,
            }}
            className={'info-box-text-container'}
          >
            <div className={'info-box-left'}>
              <p className={'info-title info-text'}>{item?.footer?.title}</p>
              <p className={'info-text-left info-text'}>{leftText()}</p>
            </div>
            <img
              src={item?.footer?.image}
              className={'info-image'}
              alt=""
              style={imageStyle}
            />
            <div className={'info-box-right'}>
              <p className={'info-text-right info-text'}>{rightText()}</p>
              {(item?.footer?.list || []).map((listItem, index) => {
                return (
                  <div
                    key={index}
                    className={'list-item-row'}
                  >
                    <Whatshot
                      fontSize="small"
                      style={{ color: colors.main }}
                    />
                    <span className={'info-box-list-item'}>{listItem}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  ) : (
    <div className={`info-box box-${isOpen}`}>
      <Timeline
        isOpen={isOpen}
        item={item}
        currentIndex={currentIndex}
        listLength={list.length}
        onMoveLeft={onMoveLeft}
        onMoveRight={onMoveRight}
      />
      <AnimatePresence
        mode="popLayout"
        initial={false}
      >
        {isOpen ? (
          <motion.div
            key={'info-box'}
            layoutId="info-box"
            layoutScroll
            layoutDependency={isOpen}
            className={'info-box-text-container-mobile'}
          >
            <div className={'info-box-left-mobile'}>
              <p className={'info-title info-text'}>{item?.footer?.title}</p>
              <p className={'info-text-left info-text'}>
                {leftText()}
                {rightText()}
              </p>
              <img
                src={item?.footer?.image}
                className={'info-image-mobile'}
                alt=""
                style={imageStyle}
              />
              {(item?.footer?.list || []).map((listItem, index) => {
                return (
                  <div
                    key={index}
                    className={'list-item-row'}
                  >
                    <Whatshot
                      fontSize="large"
                      style={{ color: colors.main }}
                    />
                    <span className={'info-box-list-item'}>{listItem}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default InfoBox;
