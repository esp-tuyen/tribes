import React from 'react';
import { Text, Pressable } from 'react-native';

import styles from './Button.style';
import { ButtonProps } from './Button.type';

const Button: React.FC<ButtonProps> = props => {
  const { onPress, title = '', variant = 'primary' } = props;

  return (
    <Pressable style={[styles.button, styles[variant]]} onPress={onPress}>
      <Text style={[styles.text, styles[variant]]}>{title}</Text>
    </Pressable>
  );
};

export default Button;
