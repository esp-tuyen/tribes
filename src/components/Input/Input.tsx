import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

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
    onPressIcon,
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={[style, styles.form_input]}>
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
          autoFocus={false}
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
          onPress={onPressIcon}
        />
      )}
    </View>
  );
};

export default Input;
