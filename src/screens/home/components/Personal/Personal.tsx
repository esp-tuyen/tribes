import React from 'react';
import { View } from 'react-native';

import { IPersonal } from './Personal.type';
import UserIcon from '~assets/images/svgs/user.svg';
import TextCustom from '~components/TextCustom';

import styles from './Personal.style';
import { GlobalStyles } from '~styles';

const Personal: React.FC<IPersonal> = ({ name }) => {
  return (
    <View style={GlobalStyles.globalStyle}>
      <View style={styles.personal_line}></View>
      <View style={styles.personal}>
        <UserIcon />
        <TextCustom style={styles.personal_name}>{name}</TextCustom>
      </View>
    </View>
  );
};

export default Personal;
