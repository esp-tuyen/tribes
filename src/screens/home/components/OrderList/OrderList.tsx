import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import TextCustom from '~components/TextCustom';
import HomeLayout from '../HomeLayout';
import { IOrder, OrderListProps } from './OrderList.type';
import { Colours, GlobalStyles } from '~styles';
import Icon from '~components/Icon';
import FireIcon from '~assets/images/svgs/fire.svg';

import styles from './OrderList.style';

const OrderList: React.FC<OrderListProps> = ({
  name,
  orders,
  isSeeMore = true,
  horizontal = true,
}) => {
  const OrderItem = ({ order }: { order: IOrder }) => (
    <TouchableOpacity
      style={[styles.order_item, !horizontal && styles.order_item_vertical]}>
      <View style={styles.order_verified}>
        <Icon name="check" color={Colours.WHITE} size={8} />
        <TextCustom style={styles.order_verified_text}>Verified</TextCustom>
      </View>

      <Image source={order.image} style={styles.order_image} />

      <View style={styles.order_info}>
        <TextCustom style={styles.order_info_name}>{order.name}</TextCustom>
        <View style={styles.order_info_reviews}>
          <Icon name="star" color={Colours.RED[500]} size={10} />
          <TextCustom style={styles.order_info_star}>
            {order.star.toFixed(1)}
          </TextCustom>
          <TextCustom style={styles.order_info_review}>
            ({order.people_review})
          </TextCustom>
          <TextCustom style={styles.order_info_round}></TextCustom>
          <TextCustom style={styles.order_info_followers}>
            {order.followers} followers
          </TextCustom>
        </View>

        <View style={styles.order_info_tags}>
          {order.tags.map((tag, index) => (
            <React.Fragment key={index}>
              <TextCustom style={styles.order_info_tag}>{tag}</TextCustom>
              {index !== order.tags.length - 1 && (
                <TextCustom style={styles.order_info_tag_brick}></TextCustom>
              )}
            </React.Fragment>
          ))}
        </View>

        <View style={styles.order_line_through}></View>

        <View style={styles.order_money}>
          <TextCustom style={styles.order_money_title}>From</TextCustom>
          <TextCustom style={styles.order_money_value}>
            $ {order.price}
          </TextCustom>
        </View>

        <View style={styles.order_highlights}>
          {order.highlights.map((highlight, index) => (
            <View key={index} style={styles.order_highlight}>
              {highlight.is_hot && (
                <FireIcon style={styles.order_highlight_icon} />
              )}
              <TextCustom style={styles.order_highlight_name}>
                {highlight.name}
              </TextCustom>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );

  if (horizontal) {
    return (
      <HomeLayout
        horizontal={horizontal}
        style={styles.order_list}
        title={name}
        isSeeMore={isSeeMore}>
        {orders &&
          orders.map(order => <OrderItem key={order.id} order={order} />)}
      </HomeLayout>
    );
  }

  return (
    <View style={[GlobalStyles.globalStyle, styles.order_verical]}>
      {orders &&
        orders.map(order => <OrderItem key={order.id} order={order} />)}
    </View>
  );
};

export default OrderList;
