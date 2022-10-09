import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import Icon from '~components/Icon';
import { Colours } from '~styles';
import { InputProps } from './Input.type';

import styles from './Input.style';

const Input: React.FC<InputProps> = ({
  type = 'text',
  style,
  placeholder,
  onChangeText,
  value,
  defaultValue,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[style, styles.form_input]}>
      <TextInput
        value={value}
        defaultValue={defaultValue}
        secureTextEntry={showPassword ? false : type === 'password'}
        keyboardType={type === 'phone' ? 'phone-pad' : 'default'}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      {type === 'password' && (
        <Icon
          size={20}
          name="eye"
          style={styles.icon}
          color={Colours.BACKGROUND[300]}
          onPress={() => setShowPassword(!showPassword)}
        />
      )}
    </View>
  );
};

export default Input;
