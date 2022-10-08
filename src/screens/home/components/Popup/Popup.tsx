import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

import Icon from '~components/Icon';
import { Colours } from '~styles';
import PopupImage from '~assets/images/pngs/popup.png';
import TextCustom from '~components/TextCustom';
import Button from '~components/Button';
import { AppScreens } from '~navigation/navigation.type';

import styles from './Popup.style';

const Popup: React.FC = () => {
  const [visibleModal, setVisibleModal] = useState(true);
  const nav = useNavigation<any>();

  const handleNavigate = (type: AppScreens.SIGN_IN | AppScreens.SIGN_UP) => {
    setVisibleModal(false);

    if (type === AppScreens.SIGN_IN) {
      nav.navigate(AppScreens.SIGN_IN);
    } else {
      nav.navigate(AppScreens.SIGN_UP);
    }
  };

  return (
    <Modal isVisible={visibleModal}>
      <View style={styles.popup}>
        <Image source={PopupImage} style={styles.popup_image} />
        <Icon
          name="cancel"
          style={styles.popup_icon}
          color={Colours.WHITE}
          size={30}
          onPress={() => setVisibleModal(false)}
        />
        <TextCustom style={styles.popup_text}>
          Log in or Sign up now to explore more with Tribes!
        </TextCustom>
        <View style={styles.popup_btns}>
          <Button
            title="Sign in"
            onPress={() => handleNavigate(AppScreens.SIGN_IN)}
          />
          <Button
            title="Sign up"
            variant="secondary"
            onPress={() => handleNavigate(AppScreens.SIGN_UP)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Popup;
