import React from 'react';
import { SafeAreaView } from 'react-native';

import TextCustom from '~components/TextCustom';
import { AppScreens } from '~navigation/navigation.type';

import styles from './SignUp.style';

const SignUp: React.FC = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.signUp}>
      <TextCustom>Sign Up</TextCustom>
    </SafeAreaView>
  );
};

export default SignUp;
