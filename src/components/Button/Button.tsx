import React from 'react';
import { Text, Pressable } from 'react-native';
import { GlobalStyles } from '~styles';

import styles from './Button.style';
import { ButtonProps } from './Button.type';

const Button: React.FC<ButtonProps> = props => {
  const { onPress, title = '', variant = 'primary', style } = props;

  return (
    <Pressable
      style={[GlobalStyles.globalStyle, styles.button, styles[variant], style]}
      onPress={onPress}>
      <Text style={[styles.text, styles[variant]]}>{title}</Text>
    </Pressable>
  );
};

export default Button;
