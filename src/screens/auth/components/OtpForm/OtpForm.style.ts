import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  otp_form: {},
  otp_form_text_list: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otp_form_text_list_left: {
    fontSize: 12,
    color: Colours.BACKGROUND[500],
  },
  otp_form_text_list_right: {
    fontSize: 12,
    color: Colours.BACKGROUND[500],
    fontWeight: '600',
    marginLeft: 4,
  },
  otp_form_description: {
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 40,
    fontSize: 12,
    color: Colours.BACKGROUND[500],
  },
  otp_form_input: {},
  otp_form_resend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 32,
  },
  otp_form_resend_left: {
    fontSize: 12,
    color: Colours.BACKGROUND[600],
  },
  otp_form_resend_right: {
    fontSize: 12,
    color: Colours.BACKGROUND[400],
    fontWeight: '600',
  },
  otp_form_btn: {
    marginBottom: 16,
  },
  otp_form_already_account: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otp_form_already_account_text_left: {
    marginRight: 4,
    fontSize: 13,
    color: Colours.BACKGROUND[600],
  },
  otp_form_already_account_text_right: {
    fontSize: 13,
    color: Colours.RED[500],
  },
});

export default styles;
