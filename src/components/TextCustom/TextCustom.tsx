import React from 'react';
import { Text, TextProps } from 'react-native';

import styles from './TextCustomt.style';

const TextCustom: React.FC<TextProps> = props => {
  const { style, ...rest } = props;
  return <Text style={[styles.text, style]} {...rest} />;
};

export default TextCustom;
