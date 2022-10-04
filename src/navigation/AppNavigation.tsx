import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '~screens/home';
import SignIn from '~screens/auth/SignIn';
import { SignUp } from '~screens/auth';
import { AppScreens } from './navigation.type';

const Stack = createNativeStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={AppScreens.HOME}>
      {/* Home page */}
      <Stack.Screen name={AppScreens.HOME} component={Home} />

      {/* Sign In */}
      <Stack.Screen name={AppScreens.SIGN_IN} component={SignIn} />

      {/* Sign Up */}
      <Stack.Screen name={AppScreens.SIGN_UP} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
