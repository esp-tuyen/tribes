import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabScreens } from './navigation.type';
import { Home } from '~screens/home';
import Icon from '~components/Icon';
import { Colours } from '~styles';

const Tab = createBottomTabNavigator();

const BottomTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={BottomTabScreens.HOME}>
      {/* Home page */}
      <Tab.Screen
        name={BottomTabScreens.HOME}
        component={Home}
        options={{
          tabBarActiveTintColor: Colours.BACKGROUND[500],
          tabBarLabelStyle: {
            color: Colours.BACKGROUND[500],
            fontWeight: 'bold',
            fontSize: 13,
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
