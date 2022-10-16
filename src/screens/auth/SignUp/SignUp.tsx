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
import OtpForm from '../components/OtpForm';

import styles from './SignUp.style';
import { GlobalStyles } from '~styles';
import Information from '../components/Information';
import Favourite from '../components/Favourite';

const SignUp: React.FC = ({ navigation }: any) => {
  const [isPhone, setIsPhone] = useState(false);
  const setIsLogin = useSetRecoilState(AuthAtom.isLogin);
  const [step, setStep] = useState(2);
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
            <View style={GlobalStyles.globalStyle}>
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
              <View style={styles.sign_up_checkbox_list}>
                <CheckBox
                  boxType="square"
                  style={styles.sign_up_checkbox_list_checkbox}
                />
                <TextCustom style={styles.sign_up_checkbox_list_text}>
                  I have read & agree to the T&C of Tribes.
                </TextCustom>
              </View>
              <View style={styles.sign_up_checkbox_list}>
                <CheckBox
                  boxType="square"
                  style={styles.sign_up_checkbox_list_checkbox}
                />
                <TextCustom style={styles.sign_up_checkbox_list_text}>
                  I would like to rêcive special offers, promotion and other
                  information.
                </TextCustom>
              </View>
            </View>
            <View style={styles.sign_up_loginWidth}>
              <TextCustom style={styles.sign_up_loginWidth_line} />
              <TextCustom style={styles.sign_up_loginWidth_text}>
                Or log in with
              </TextCustom>
              <TextCustom style={styles.sign_up_loginWidth_line} />
            </View>
            <View style={styles.sign_up_icons}>
              <TouchableOpacity style={styles.sign_up_icon}>
                <GoogleIcon />
              </TouchableOpacity>
              <TouchableOpacity style={styles.sign_up_icon}>
                <FacebookIcon />
              </TouchableOpacity>
            </View>
            <Button
              title="Sign up"
              style={styles.sign_up_btn}
              onPress={handleSubmit}
            />
            <View style={styles.sign_up_not_account}>
              <TextCustom style={styles.sign_up_not_account_text_left}>
                Already have account?
              </TextCustom>
              <TextCustom
                style={styles.sign_up_not_account_text_right}
                onPress={() => navigation.navigate(AppScreens.SIGN_IN)}>
                Log in now
              </TextCustom>
            </View>
          </React.Fragment>
        );
      }
      case 1: {
        return (
          <OtpForm
            isPhone={isPhone}
            description="Please enter the OTP to the complete the registration."
            onSubmit={handleRegister}
            textBtn="Sign up"
            value={isPhone ? value.phone : value.email}
          />
        );
      }
      case 2: {
        return <Information onSubmit={() => setStep(3)} />;
      }
      case 3: {
        return <Favourite />;
      }
    }
  };

  return (
    <Layout
      style={styles.sign_up}
      name={step === 0 || step === 1 ? 'Sign up' : ''}
      onChangeType={vlu => setIsPhone(vlu)}
      isTab={step === 0}
      isFooter={step === 0 || step === 1}>
      {renderChildren()}
    </Layout>
  );
};

export default SignUp;
