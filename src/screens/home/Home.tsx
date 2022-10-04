import React from 'react';
import { SafeAreaView } from 'react-native';

import TextCustom from '~components/TextCustom';
import { AppScreens } from '~navigation/navigation.type';

import styles from './Home.style';

const Home: React.FC = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.home}>
      <TextCustom>Home Page</TextCustom>
    </SafeAreaView>
  );
};

export default Home;
