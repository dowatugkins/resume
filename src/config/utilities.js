/**
 * Copyright (c) 2020-present, Doug Watkins Development.
 * All rights reserved.
 * @author Doug Watkins
 * @module src/config
 */
import { get as lGet } from 'lodash';

// Modified version of lodash.get which also catches null values
export const get = (obj, path, defaultValue) => {
  const retGet = lGet(obj, path, defaultValue);
  if (retGet === null) {
    return defaultValue;
  }
  return retGet;
};
