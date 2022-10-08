import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { IconProps } from 'react-native-vector-icons/Icon';

import colours from '~styles/colours';

import icoMoonConfig from './selection.json';

const IconSet = createIconSetFromIcoMoon(icoMoonConfig);

const Icon: React.FC<IconProps> = ({
  size = 24,
  color = colours.BLACK,
  ...rest
}) => <IconSet size={size} color={color} {...rest} />;

export default Icon;
