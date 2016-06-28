'use strict';

/**
 * react-native-country-picker
 * @author xcarpentier<contact@xaviercarpentier.com>
 * @flow
 */

import React from 'react-native';
let {height, width} = React.Dimensions.get('window');

// remove the status bar height since the modal view does not cover this area
if (React.Platform.OS === 'android') {
  height = height - 24;
}

class Ratio {
  constructor() {}

  getWidthPercent(percentage: number): number {
    return (width * percentage) / 100;
  }

  getHeightPercent(percentage: number): number {
    return (height * percentage) / 100;
  }

  getPercent(percentage: number): number {
    return ((height + width) / 2 * percentage) / 100;
  }
}

module.exports = new Ratio();
