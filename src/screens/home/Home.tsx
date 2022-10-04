import React, { useState } from 'react';
import { Image, SafeAreaView, View, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

import { HomeHeader } from './components';
import PopupImage from '~assets/images/pngs/popup.png';
import Icon from '~components/Icon';
import { Colours } from '~styles';

import styles from './Home.style';
import TextCustom from '~components/TextCustom';
import Button from '~components/Button';

const Home: React.FC = () => {
  const [visibleModal, setVisibleModal] = useState(true);

  return (
    <View style={styles.home}>
      <SafeAreaView>
        <ScrollView stickyHeaderIndices={[0]}>
          <HomeHeader />
        </ScrollView>
        <Modal isVisible={visibleModal}>
          <View style={styles.modal}>
            <Image source={PopupImage} style={styles.modal_image} />
            <Icon
              name="cancel"
              style={styles.icon_close}
              color={Colours.WHITE}
              size={30}
              onPress={() => setVisibleModal(false)}
            />
            <TextCustom style={styles.modal_text}>
              Log in or Sign up now to explore more with Tribes!
            </TextCustom>
            <View style={styles.modal_buttons}>
              <Button title="Sign in" />
              <Button title="Sign up" variant="secondary" />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
};

export default Home;
