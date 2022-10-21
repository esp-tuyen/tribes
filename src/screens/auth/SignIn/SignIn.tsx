import React, { useState } from 'react';
import { Alert, Pressable, TouchableOpacity, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useSetRecoilState } from 'recoil';

import Input from '~components/Input';
import Layout from '../components/Layout';
import TextCustom from '~components/TextCustom';
import GoogleIcon from '~assets/images/svgs/logo-google.svg';
import FacebookIcon from '~assets/images/svgs/logo-facebook.svg';
import Button from '~components/Button';
import { AppScreens } from '~navigation/navigation.type';
import { AuthAtom } from '~services/auth';
import BagIcon from '~assets/images/svgs/bag.svg';

import styles from './SignIn.style';
import { GlobalStyles } from '~styles';

const SignIn: React.FC = ({ navigation }: any) => {
  const [isPhone, setIsPhone] = useState(false);
  const setIsLogin = useSetRecoilState(AuthAtom.isLogin);
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

      Alert.alert('SUCCESS', 'Đăng nhập thành công');
      setIsLogin(true);
      navigation.navigate(AppScreens.MAIN);
    } else {
      if (!value.email || !value.password) {
        Alert.alert('WARNNING', 'Vui lòng nhập đầy đủ các trường');
        return;
      }

      Alert.alert('SUCCESS', 'Đăng nhập thành công');
      setIsLogin(true);
      navigation.navigate(AppScreens.MAIN);
    }
  };

  return (
    <Layout
      style={styles.sign_in}
      name="Sign in"
      onChangeType={vlu => setIsPhone(vlu)}
      footer={
        <Pressable
          style={[GlobalStyles.globalStyle, styles.sign_in_footer_login]}
          onPress={() => navigation.navigate(AppScreens.SIGN_UP)}>
          <BagIcon fontSize={20} />
          <TextCustom style={styles.sign_in_footer_login_text}>
            Log in / Sign up for Business
          </TextCustom>
        </Pressable>
      }>
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
      </View>
      <View style={[GlobalStyles.globalStyle, styles.sign_in_list]}>
        <View style={styles.sign_in_remember}>
          <CheckBox boxType="square" style={styles.sign_in_remember_checkbox} />
          <TextCustom style={styles.sign_in_remember_text}>
            Remember me
          </TextCustom>
        </View>
        <TextCustom
          style={styles.sign_in_list_text}
          onPress={() => navigation.navigate(AppScreens.FORGOT_PASSWORD)}>
          Forgot password?
        </TextCustom>
      </View>
      <View style={styles.sign_in_loginWidth}>
        <TextCustom style={styles.sign_in_loginWidth_line}></TextCustom>
        <TextCustom style={styles.sign_in_loginWidth_text}>
          Or log in with
        </TextCustom>
        <TextCustom style={styles.sign_in_loginWidth_line}></TextCustom>
      </View>
      <View style={styles.sign_in_icons}>
        <TouchableOpacity style={styles.sign_in_icon}>
          <GoogleIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sign_in_icon}>
          <FacebookIcon />
        </TouchableOpacity>
      </View>
      <Button
        title="Log in"
        style={styles.sign_in_btn}
        onPress={handleSubmit}
      />
      <View style={styles.sign_in_not_account}>
        <TextCustom style={styles.sign_in_not_account_text_left}>
          No account yet?
        </TextCustom>
        <TextCustom
          style={styles.sign_in_not_account_text_right}
          onPress={() => navigation.navigate(AppScreens.SIGN_UP)}>
          Sign up now
        </TextCustom>
      </View>
    </Layout>
  );
};

export default SignIn;
