import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '~components/Button';
import Input from '~components/Input';
import TextCustom from '~components/TextCustom';
import { FormOtpProps } from './FormOtp.type';
import { AppScreens } from '~navigation/navigation.type';

import styles from './FormOtp.style';

const FormOtp: React.FC<FormOtpProps> = ({
  description,
  onSubmit,
  showTextLogin = true,
  isPhone,
  value,
  textBtn,
}) => {
  const [otp, setOtp] = useState('');
  const [time, setTime] = useState(300);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const nav = useNavigation<any>();

  const handleSubmit = () => {
    if (!otp) {
      Alert.alert('WARNNING', 'Vui long nhap Otp');
      return;
    }

    onSubmit?.(otp);
  };

  const handleResend = () => setTime(300);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.form_otp}>
      <View style={styles.form_otp_text_list}>
        <TextCustom style={styles.form_otp_text_list_left}>
          An OTP has been sent to the {isPhone ? 'number' : 'email'}
        </TextCustom>
        <TextCustom style={styles.form_otp_text_list_right}>
          {isPhone && '+84'} {value}
        </TextCustom>
      </View>
      <TextCustom style={styles.form_otp_description}>{description}</TextCustom>

      <Input
        type="phone"
        value={otp}
        onChangeText={text => setOtp(text)}
        style={styles.form_otp_input}
        placeholder="Enter OTP"
      />
      <View style={styles.form_otp_resend}>
        <TextCustom style={styles.form_otp_resend_left}>
          {`${minutes < 10 ? `0${minutes}` : minutes}:${
            seconds < 10 ? `0${seconds}` : seconds
          }`}
        </TextCustom>
        <TextCustom onPress={handleResend} style={styles.form_otp_resend_right}>
          Resend
        </TextCustom>
      </View>
      <Button
        title={textBtn}
        style={styles.form_otp_btn}
        onPress={handleSubmit}
      />
      {showTextLogin && (
        <View style={styles.form_otp_already_account}>
          <TextCustom style={styles.form_otp_already_account_text_left}>
            Already have account?
          </TextCustom>
          <TextCustom
            style={styles.form_otp_already_account_text_right}
            onPress={() => nav.navigate(AppScreens.SIGN_IN)}>
            Log in now
          </TextCustom>
        </View>
      )}
    </View>
  );
};

export default FormOtp;
