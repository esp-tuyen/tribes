import React from 'react';
import { SafeAreaView } from 'react-native';

import TextCustom from '~components/TextCustom';
import { AppScreens } from '~navigation/navigation.type';

import styles from './SignIn.style';

const SignIn: React.FC = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.signIn}>
      <TextCustom>Sign In</TextCustom>
    </SafeAreaView>
  );
};

export default SignIn;
