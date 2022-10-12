import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  sign_up: {},
  input_phone: {
    marginTop: 36,
    marginBottom: 24,
  },
  input_password: {
    marginBottom: 16,
  },
  sign_up_checkbox_list: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sign_up_checkbox_list_checkbox: {
    transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }],
  },
  sign_up_checkbox_list_text: {
    fontSize: 12,
    marginBottom: 4,
    color: Colours.BACKGROUND[500],
  },
  sign_up_loginWidth: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sign_up_loginWidth_line: {
    width: 40,
    height: 1,
    borderWidth: 0.5,
    borderColor: Colours.BACKGROUND[200],
  },
  sign_up_loginWidth_text: {
    marginHorizontal: 24,
    fontSize: 12,
    color: Colours.BACKGROUND[300],
  },
  sign_up_icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  sign_up_icon: {
    marginHorizontal: 12,
    width: 40,
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: Colours.BACKGROUND[100],
  },
  sign_up_btn: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  sign_up_not_account: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sign_up_not_account_text_left: {
    marginRight: 4,
    fontSize: 13,
    color: Colours.BACKGROUND[600],
  },
  sign_up_not_account_text_right: {
    fontSize: 13,
    color: Colours.RED[500],
  },
});

export default styles;
