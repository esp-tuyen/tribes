import React from 'react';
import { View } from 'react-native';

import TextCustom from '~components/TextCustom';
import HomeLayout from '../HomeLayout';
import { OrderProps } from './Order.type';

import styles from './Order.style';

const Order: React.FC<OrderProps> = () => {
  const OrderItem = () => (
    <View>
      <TextCustom>Hello</TextCustom>
    </View>
  );

  return (
    <HomeLayout horizontal style={styles.order} isSeeMore>
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
    </HomeLayout>
  );
};

export default Order;
