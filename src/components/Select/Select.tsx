import React from 'react';
import { Pressable } from 'react-native';
import { Picker } from '@react-native-community/picker';
import Modal from 'react-native-modal';

import { SelectProps } from './select.type';

import styles from './Select.style';

const Select: React.FC<SelectProps> = props => {
  const { isVisible = false, onClose, options, onValueChange, ...rest } = props;

  return (
    <Modal isVisible={isVisible} style={styles.select_modal}>
      <Pressable style={styles.select_overlay} onPress={onClose} />

      <Picker
        {...rest}
        style={styles.select}
        onValueChange={(value, index) => {
          onValueChange?.(value, index);
          onClose?.();
        }}>
        {options?.map((option, index) => (
          <Picker.Item label={option.label} value={option.value} key={index} />
        ))}
      </Picker>
    </Modal>
  );
};

export default Select;
