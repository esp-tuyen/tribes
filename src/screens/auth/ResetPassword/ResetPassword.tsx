import React, { useState } from 'react';
import { Alert, Image, View } from 'react-native';

import Button from '~components/Button';
import Input from '~components/Input';
import TextCustom from '~components/TextCustom';
import { AppScreens } from '~navigation/navigation.type';
import Layout from '../components/Layout';
import SuccessImage from '~assets/images/pngs/change-password.png';

import styles from './ResetPassword.style';

const ResetPassword: React.FC = ({ navigation }: any) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [value, setValue] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = () => {
    if (!value.password || !value.confirmPassword) {
      Alert.alert('WARNNING', 'Vui lòng nhập đầy đủ các trường');
      return;
    }

    if (value.password !== value.confirmPassword) {
      Alert.alert(
        'WARNNING',
        'Mật khẩu hiện tại và xác nhận mật khẩu không giống nhau',
      );
      return;
    }

    setIsSuccess(true);
  };

  return (
    <Layout
      name={isSuccess ? 'Password changed' : 'Reset password'}
      style={styles.reset_password}
      isTab={false}
      isFooter={false}>
      {!isSuccess ? (
        <React.Fragment>
          <Input
            value={value.password}
            type="password"
            style={styles.input_password}
            placeholder="New password"
            onChangeText={text => setValue({ ...value, password: text })}
          />
          <Input
            value={value.confirmPassword}
            type="password"
            style={styles.input_password}
            placeholder="Confirm password"
            onChangeText={text => setValue({ ...value, confirmPassword: text })}
          />
          <Button
            title="Next"
            style={styles.reset_password_btn}
            onPress={handleSubmit}
          />
        </React.Fragment>
      ) : (
        <View style={styles.reset_password_success}>
          <TextCustom style={styles.reset_password_success_text}>
            Your password has been successfully changed
          </TextCustom>
          <View style={styles.reset_password_success_image}>
            <Image source={SuccessImage} />
          </View>
          <Button
            title="Next"
            style={styles.reset_password_btn}
            onPress={() => navigation.navigate(AppScreens.SIGN_IN)}
          />
        </View>
      )}
    </Layout>
  );
};

export default ResetPassword;
