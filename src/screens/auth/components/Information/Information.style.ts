import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  information: {
    alignItems: 'center',
  },
  information_text: {
    fontSize: 20,
    color: Colours.BACKGROUND[700],
    fontWeight: 'bold',
    lineHeight: 30,
  },
  information_image: {
    position: 'relative',
    alignItems: 'center',
    marginVertical: 36,
  },
  information_inputs: {
    width: '100%',
    paddingHorizontal: 16,
  },
  information_image_avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  information_image_icon: {
    position: 'absolute',
    left: 40,
    top: 40,
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  information_image_icon_background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: Colours.BACKGROUND[600],
    borderRadius: 100,
    opacity: 0.5,
  },
  information_radio_list: {
    width: '100%',
    justifyContent: 'center',
    marginVertical: 24,
    paddingHorizontal: 16,
  },
  information_radio_title: {
    fontSize: 11,
    marginBottom: 8,
    marginLeft: 10,
    color: Colours.BACKGROUND[300],
  },
  information_line: {
    borderWidth: 0.5,
    borderColor: Colours.BACKGROUND[100],
    marginHorizontal: -16,
    marginBottom: 8,
  },
  information_btn: {
    marginHorizontal: 16,
  },
});

export default styles;
