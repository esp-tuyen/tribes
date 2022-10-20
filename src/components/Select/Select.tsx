import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import Modal from 'react-native-modal';

import { SelectProps } from './select.type';
import TextCustom from '~components/TextCustom';
import Icon from '~components/Icon';

import styles from './Select.style';
import { Colours } from '~styles';

const Select: React.FC<SelectProps> = props => {
  const {
    options,
    defaultValue,
    onChange,
    value,
    style,
    placeholder,
    ...rest
  } = props;
  const [defaultValueSelect, setDefaultValueSelect] = useState<
    string | number | undefined
  >(defaultValue);
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View style={style}>
      <Pressable
        style={styles.select_form}
        onPress={() => options && setVisibleModal(true)}>
        <TextCustom
          style={
            (styles.select_form_text,
            {
              color:
                value || defaultValueSelect
                  ? Colours.BACKGROUND[600]
                  : Colours.BACKGROUND[300],
            })
          }>
          {value || defaultValueSelect || placeholder}
        </TextCustom>
        <Icon
          size={20}
          name="arrow-down"
          style={styles.select_form_icon}
          color={Colours.BACKGROUND[300]}
        />
      </Pressable>
      <Modal isVisible={visibleModal} style={styles.select_modal}>
        <Pressable
          style={styles.select_overlay}
          onPress={() => setVisibleModal(false)}
        />

        <Picker
          {...rest}
          style={styles.select}
          onValueChange={vlu => {
            onChange?.(vlu);
            setDefaultValueSelect(vlu);
            setVisibleModal(false);
          }}>
          {options?.map((option, index) => (
            <Picker.Item
              label={option.label}
              value={option.value}
              key={index}
            />
          ))}
        </Picker>
      </Modal>
    </View>
  );
};

export default Select;
