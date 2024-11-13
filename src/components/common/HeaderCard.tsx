/**
 * Copyright (c) 2020-present, Doug Watkins Development.
 * All rights reserved.
 * @author Doug Watkins
 * @module src/components/common
 */
import React from 'react';
import { motion } from 'framer-motion';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

import './HeaderCard.css';
import useWindowSize from '../../hooks/useWindowSize';
import { ListItem } from '../../config/constants';
import { colors } from '../../config/theme';

type PropsType = {
  focusLevel: string;
  displaySide: string;
  onOpenInfoBox: Function;
  isOpen: boolean;
  item: ListItem;
};

type TopType = {
  [key: string]: number;
};

type IndexType = {
  [key: string]: number;
};

type BlurType = {
  [key: string]: string;
};

const TOP: TopType = {
  1: 130,
  2: 70,
  3: 20,
  4: -30,
  offscreen: -100,
};

const INDEX: IndexType = {
  1: 100,
  2: 40,
  3: 20,
  4: 2,
  offscreen: -100,
};

const BLUR: BlurType = {
  1: 'blur(0px)',
  2: 'blur(5px)',
  3: 'blur(10px)',
  4: 'blur(15px)',
  offscreen: 'blur(15px)',
};

function HeaderCard(props: PropsType) {
  const { width } = useWindowSize();

  const {
    focusLevel = 'offscreen',
    displaySide = 'center',
    onOpenInfoBox,
    isOpen,
    item,
  } = props;

  if (!width) {
    return null;
  }

  const imageSize =
    focusLevel === '1'
      ? width / 12
      : focusLevel === '2'
      ? width / 25
      : focusLevel === '3'
      ? width / 35
      : focusLevel === '4'
      ? width / 50
      : 0;

  const taglineSize =
    focusLevel === '1'
      ? width / 17
      : focusLevel === '2'
      ? width / 25
      : focusLevel === '3'
      ? width / 35
      : focusLevel === '4'
      ? width / 40
      : 0;

  const bylineSize =
    focusLevel === '1'
      ? width / 30
      : focusLevel === '2'
      ? width / 60
      : focusLevel === '3'
      ? width / 80
      : focusLevel === '4'
      ? width / 100
      : 0;

  const handleOpenBox = () => {
    onOpenInfoBox();
  };
  focusLevel !== 'offscreen' &&
    console.log({ displaySide, focusLevel, byline: item.tagline });
  return (
    <>
      {focusLevel !== 'offscreen' && (
        <motion.div
          key={item?.tagline}
          exit={{
            left: width / 2,
            top: -200,
          }}
          layout
          animate={{
            scale:
              focusLevel !== '1'
                ? 1 / ((Number.parseInt(focusLevel) || 4) / 2.3)
                : 1,
            top: TOP[focusLevel],
          }}
          className={`header-card-${focusLevel} display-side-${displaySide} header-card`}
          style={{
            filter: BLUR[focusLevel],
            width: focusLevel === '1' ? width : width / 2,
            left:
              displaySide === 'left'
                ? 50
                : displaySide === 'center'
                ? 0
                : undefined,
            right:
              displaySide === 'right'
                ? 50
                : displaySide === 'center'
                ? 0
                : undefined,
            zIndex: INDEX[focusLevel],
          }}
        >
          <motion.p
            layout
            style={{
              fontSize: taglineSize,
            }}
            className="tagline"
          >
            {item?.tagline || ''}
          </motion.p>
          <div className="bylineRow">
            <img
              className={`header-image`}
              src={item?.image || ''}
              alt=""
              style={{
                maxWidth: imageSize,
                maxHeight: imageSize,
                objectFit: 'contain',
              }}
            />
            <motion.p
              layout
              className="byline"
              style={{ fontSize: bylineSize }}
            >
              {item?.byline || ''}{' '}
              <motion.span
                layout
                whileHover={{
                  color: colors.white,
                }}
                style={{
                  fontWeight: 'bold',
                  opacity: focusLevel === '1' ? 1 : 0,
                  color: colors.main,
                }}
              >
                <ExpandCircleDownIcon
                  onClick={handleOpenBox}
                  fontSize="large"
                  style={{
                    position: 'relative',
                    top: 5,
                    transform: isOpen ? 'rotateZ(0deg)' : 'rotateZ(180deg)',
                  }}
                />
              </motion.span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default HeaderCard;
