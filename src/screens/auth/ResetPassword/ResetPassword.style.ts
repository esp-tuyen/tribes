import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  reset_password: {},
  input_password: {
    marginBottom: 16,
  },
  reset_password_btn: {},
  reset_password_success: {},
  reset_password_success_text: {
    fontSize: 12,
    color: Colours.BACKGROUND[500],
    textAlign: 'center',
  },
  reset_password_success_image: {
    alignItems: 'center',
    marginVertical: 40,
  },
});

export default styles;
