import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '~screens/auth/SignIn';
import { SignUp } from '~screens/auth';
import { AppScreens } from './navigation.type';
import BottomTabNavigation from './BottomTabNavigation';
import { ForgotPassword, ResetPassword } from '~screens/auth';

const Stack = createNativeStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={AppScreens.MAIN}>
      {/* Sign In */}
      <Stack.Screen name={AppScreens.SIGN_IN} component={SignIn} />

      {/* Sign Up */}
      <Stack.Screen name={AppScreens.SIGN_UP} component={SignUp} />

      {/* Forgot Password */}
      <Stack.Screen
        name={AppScreens.FORGOT_PASSWORD}
        component={ForgotPassword}
      />

      {/* Reset Password */}
      <Stack.Screen
        name={AppScreens.RESET_PASSWORD}
        component={ResetPassword}
      />

      <Stack.Screen name={AppScreens.MAIN} component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
