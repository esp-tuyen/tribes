import React from 'react';
import DatePicker from 'react-native-modern-datepicker';
import Modal from 'react-native-modal';
import { Pressable, View } from 'react-native';

import styles from './DatePickerCustom.style';
import { DatePickerCustomProps } from './DatePickerCustom.type';

const DatePickerCustom: React.FC<DatePickerCustomProps> = props => {
  const { isVisible, onClose, ...rest } = props;
  return (
    <Modal isVisible={isVisible} style={styles.date_picker_modal}>
      <Pressable style={styles.date_picker_overlay} onPress={onClose} />
      <View>
        <DatePicker
          options={styles.date_picker_options}
          current={new Date().toISOString()}
          selected={new Date().toISOString()}
          mode="calendar"
          style={styles.date_picker}
          {...rest}
        />
      </View>
    </Modal>
  );
};

export default DatePickerCustom;
