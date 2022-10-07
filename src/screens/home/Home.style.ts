import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  home: {
    backgroundColor: Colours.WHITE,
  },
  home_line_through: {
    backgroundColor: Colours.BACKGROUND[50],
    height: 8,
  },
  home_load_more: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: Colours.RED[500],
    color: Colours.RED[500],
    borderRadius: 8,
    paddingVertical: 10,
    marginHorizontal: 16,
    marginVertical: 16,
    fontSize: 14,
    fontWeight: 'bold',
  },
  modal: {
    position: 'relative',
  },
  modal_image: {
    width: '100%',
    resizeMode: 'contain',
  },
  icon_close: {
    position: 'absolute',
    right: 30,
    top: 50,
    backgroundColor: 'transparent',
  },
  modal_text: {
    color: Colours.WHITE,
    position: 'absolute',
    top: 100,
    left: 40,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    width: '80%',
  },
  modal_buttons: {
    position: 'absolute',
    top: 200,
    left: 40,
    width: '80%',
    elevation: 100,
  },
});

export default styles;
