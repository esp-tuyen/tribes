import React, { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';

import Icon from '~components/Icon';
import { InputProps } from './Input.type';
import TextCustom from '~components/TextCustom';

import styles from './Input.style';
import { Colours } from '~styles';

const Input: React.FC<InputProps> = props => {
  const {
    type = 'text',
    style,
    placeholder,
    onChangeText,
    value,
    defaultValue,
    name,
    onFocus,
    onBlur,
    icon,
    onPress,
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Pressable style={[style, styles.form_input]} onPress={onPress}>
      <View style={styles.form_input_list}>
        {name && isFocus && (
          <TextCustom style={styles.input_placeholder}>{name}</TextCustom>
        )}
        <TextInput
          value={value}
          defaultValue={defaultValue}
          secureTextEntry={showPassword ? false : type === 'password'}
          keyboardType={type === 'phone' ? 'phone-pad' : 'default'}
          style={styles.input}
          placeholder={isFocus ? '' : placeholder}
          onChangeText={onChangeText}
          onFocus={() => {
            setIsFocus(true);
            onFocus?.();
          }}
          onBlur={() => {
            setIsFocus(false);
            onBlur?.();
          }}
        />
      </View>
      {type === 'password' && (
        <Icon
          size={20}
          name="eye"
          style={styles.icon}
          color={Colours.BACKGROUND[300]}
          onPress={() => setShowPassword(!showPassword)}
        />
      )}
      {icon && (
        <Icon
          size={20}
          name={icon}
          style={styles.icon}
          color={Colours.BACKGROUND[300]}
        />
      )}
    </Pressable>
  );
};

export default Input;
