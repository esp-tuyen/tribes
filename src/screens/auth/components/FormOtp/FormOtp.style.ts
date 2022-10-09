import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  form_otp: {},
  form_otp_text_list: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  form_otp_text_list_left: {
    fontSize: 12,
    color: Colours.BACKGROUND[500],
  },
  form_otp_text_list_right: {
    fontSize: 12,
    color: Colours.BACKGROUND[500],
    fontWeight: '600',
    marginLeft: 4,
  },
  form_otp_description: {
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 40,
    fontSize: 12,
    color: Colours.BACKGROUND[500],
  },
  form_otp_input: {
    marginHorizontal: 16,
  },
  form_otp_resend: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 32,
  },
  form_otp_resend_left: {
    fontSize: 12,
    color: Colours.BACKGROUND[600],
  },
  form_otp_resend_right: {
    fontSize: 12,
    color: Colours.BACKGROUND[400],
    fontWeight: '600',
  },
  form_otp_btn: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  form_otp_already_account: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  form_otp_already_account_text_left: {
    marginRight: 4,
    fontSize: 13,
    color: Colours.BACKGROUND[600],
  },
  form_otp_already_account_text_right: {
    fontSize: 13,
    color: Colours.RED[500],
  },
});

export default styles;
