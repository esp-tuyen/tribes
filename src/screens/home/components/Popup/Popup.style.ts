import { StyleSheet } from 'react-native';

import { Colours } from '~styles';

const styles = StyleSheet.create({
  popup: {
    position: 'relative',
  },
  popup_icon: {
    position: 'absolute',
    right: 30,
    top: 50,
    backgroundColor: 'transparent',
  },
  popup_image: {
    width: '100%',
    resizeMode: 'contain',
  },
  popup_text: {
    color: Colours.WHITE,
    position: 'absolute',
    top: 100,
    left: 40,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    width: '80%',
  },
  popup_btns: {
    position: 'absolute',
    top: 200,
    left: 40,
    width: '80%',
  },
});

export default styles;
