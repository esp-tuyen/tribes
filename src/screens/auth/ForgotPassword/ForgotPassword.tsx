import React, { useState } from 'react';
import { View } from 'react-native';

import Button from '~components/Button';
import Input from '~components/Input';
import { AppScreens } from '~navigation/navigation.type';
import OtpForm from '../components/OtpForm';
import Layout from '../components/Layout';

import styles from './ForgotPassword.style';
import { GlobalStyles } from '~styles';

const ForgotPassword: React.FC = ({ navigation }: any) => {
  const [isPhone, setIsPhone] = useState(false);
  const [step, setStep] = useState(0);
  const [value, setValue] = useState({
    phone: '',
    email: '',
    password: '',
  });

  const renderChildren = () => {
    switch (step) {
      case 0: {
        return (
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
            <Button
              title="Next"
              style={styles.forgot_password_btn}
              onPress={() => setStep(1)}
            />
          </View>
        );
      }

      case 1: {
        return (
          <OtpForm
            isPhone={isPhone}
            value={isPhone ? value.phone : value.email}
            description="Please check and enter your OTP."
            showTextLogin={false}
            onSubmit={() => navigation.navigate(AppScreens.RESET_PASSWORD)}
            textBtn="Next"
          />
        );
      }
    }
  };

  return (
    <Layout
      name="Forgot password"
      style={styles.forgot_password}
      onChangeType={vlu => setIsPhone(vlu)}
      isTab={step === 0}
      isFooter={false}>
      {renderChildren()}
    </Layout>
  );
};

export default ForgotPassword;
