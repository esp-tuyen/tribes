import React, { useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { useSetRecoilState } from 'recoil';
import CheckBox from '@react-native-community/checkbox';

import TextCustom from '~components/TextCustom';
import Layout from '../components/Layout';
import AuthAtom from '~services/auth';
import { AppScreens } from '~navigation/navigation.type';
import Input from '~components/Input';
import Button from '~components/Button';
import GoogleIcon from '~assets/images/svgs/logo-google.svg';
import FacebookIcon from '~assets/images/svgs/logo-facebook.svg';

import styles from './SignUp.style';
import FormOtp from '../components/FormOtp';

const SignUp: React.FC = ({ navigation }: any) => {
  const [isPhone, setIsPhone] = useState(false);
  const setIsLogin = useSetRecoilState(AuthAtom.isLogin);
  const [step, setStep] = useState(1);
  const [value, setValue] = useState({
    phone: '',
    email: '',
    password: '',
  });

  const handleSubmit = () => {
    if (isPhone) {
      if (!value.phone || !value.password) {
        Alert.alert('WARNNING', 'Vui lòng nhập đầy đủ các trường');
        return;
      }

      setStep(1);
    } else {
      if (!value.email || !value.password) {
        Alert.alert('WARNNING', 'Vui lòng nhập đầy đủ các trường');
        return;
      }

      setStep(1);
    }
  };

  const handleRegister = () => {
    Alert.alert('SUCCESS', 'Đăng ký thành công');
    setIsLogin(true);
    navigation.navigate(AppScreens.MAIN);
  };

  const renderChildren = () => {
    switch (step) {
      case 0: {
        return (
          <React.Fragment>
            {isPhone ? (
              <Input
                value={value.phone}
                type="phone"
                style={styles.input_phone}
                placeholder="Số điện thoại"
                onChangeText={text => setValue({ ...value, phone: text })}
              />
            ) : (
              <Input
                value={value.email}
                type="text"
                style={styles.input_phone}
                placeholder="Email"
                onChangeText={text => setValue({ ...value, email: text })}
              />
            )}
            <Input
              value={value.password}
              type="password"
              style={styles.input_password}
              placeholder="Password"
              onChangeText={text => setValue({ ...value, password: text })}
            />
            <View style={styles.signUp_checkbox_list}>
              <CheckBox
                boxType="square"
                style={styles.signUp_checkbox_list_checkbox}
              />
              <TextCustom style={styles.signUp_checkbox_list_text}>
                I have read & agree to the T&C of Tribes.
              </TextCustom>
            </View>
            <View style={styles.signUp_checkbox_list}>
              <CheckBox
                boxType="square"
                style={styles.signUp_checkbox_list_checkbox}
              />
              <TextCustom style={styles.signUp_checkbox_list_text}>
                I would like to rêcive special offers, promotion and other
                information.
              </TextCustom>
            </View>
            <View style={styles.signUp_loginWidth}>
              <TextCustom style={styles.signUp_loginWidth_line}></TextCustom>
              <TextCustom style={styles.signUp_loginWidth_text}>
                Or log in with
              </TextCustom>
              <TextCustom style={styles.signUp_loginWidth_line}></TextCustom>
            </View>
            <View style={styles.signUp_icons}>
              <TouchableOpacity style={styles.signUp_icon}>
                <GoogleIcon />
              </TouchableOpacity>
              <TouchableOpacity style={styles.signUp_icon}>
                <FacebookIcon />
              </TouchableOpacity>
            </View>
            <Button
              title="Sign up"
              style={styles.signUp_btn}
              onPress={handleSubmit}
            />
            <View style={styles.signUp_not_account}>
              <TextCustom style={styles.signUp_not_account_text_left}>
                Already have account?
              </TextCustom>
              <TextCustom
                style={styles.signUp_not_account_text_right}
                onPress={() => navigation.navigate(AppScreens.SIGN_IN)}>
                Log in now
              </TextCustom>
            </View>
          </React.Fragment>
        );
      }
      case 1: {
        return (
          <FormOtp
            isPhone={isPhone}
            description="Please enter the OTP to the complete the registration."
            onSubmit={handleRegister}
            textBtn="Sign up"
            value={isPhone ? value.phone : value.email}
          />
        );
      }
    }
  };

  return (
    <Layout
      style={styles.signUp}
      name="Sign up"
      onChangeType={vlu => setIsPhone(vlu)}
      isTab={step === 0}>
      {renderChildren()}
    </Layout>
  );
};

export default SignUp;
