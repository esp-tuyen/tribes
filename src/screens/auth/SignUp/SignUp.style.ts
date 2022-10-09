import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  signUp: {},
  input_phone: {
    marginHorizontal: 16,
    marginTop: 36,
    marginBottom: 24,
  },
  input_password: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  signUp_checkbox_list: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  signUp_checkbox_list_checkbox: {
    transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }],
  },
  signUp_checkbox_list_text: {
    fontSize: 12,
    marginBottom: 4,
    color: Colours.BACKGROUND[500],
  },
  signUp_loginWidth: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUp_loginWidth_line: {
    width: 40,
    height: 1,
    borderWidth: 0.5,
    borderColor: Colours.BACKGROUND[200],
  },
  signUp_loginWidth_text: {
    marginHorizontal: 24,
    fontSize: 12,
    color: Colours.BACKGROUND[300],
  },
  signUp_icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  signUp_icon: {
    marginHorizontal: 12,
    width: 40,
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: Colours.BACKGROUND[100],
  },
  signUp_btn: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  signUp_not_account: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUp_not_account_text_left: {
    marginRight: 4,
    fontSize: 13,
    color: Colours.BACKGROUND[600],
  },
  signUp_not_account_text_right: {
    fontSize: 13,
    color: Colours.RED[500],
  },
});

export default styles;
