import React, { useState } from 'react';
import { Image, SafeAreaView, View, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

import { Banner, HomeHeader, Tab } from './components';
import PopupImage from '~assets/images/pngs/popup.png';
import Icon from '~components/Icon';
import TextCustom from '~components/TextCustom';
import Button from '~components/Button';
import OrderList from './components/OrderList';
import { orders, images, posts } from '~constants/common';
import ImageList from './components/ImageList';
import { Colours } from '~styles';

import styles from './Home.style';
import PostList from './components/PostList';
import Personal from './components/Personal';

const Home: React.FC = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [offset, setOffset] = useState(2);

  const handleLoadMore = () => {
    if (offset < orders.length) {
      setOffset(offset + offset);
    }
  };

  return (
    <View style={styles.home}>
      <SafeAreaView>
        <ScrollView stickyHeaderIndices={[0]}>
          <HomeHeader />
          <Banner />
          <Tab />
          <OrderList name="Exclusive Deals" orders={orders} />
          <ImageList name="Specially Curated For You" images={images} />
          <OrderList name="Where to Buy" orders={orders} />
          <OrderList name="Where to Eat" orders={orders} />
          <PostList name="Featured Articles" posts={posts} />
          <OrderList name="Where to Stay" orders={orders} />
          <OrderList name="What to Transport" orders={orders} />
          <OrderList name="What to See" orders={orders} />
          <View style={styles.home_line_through}></View>
          <Personal name="Tuyen" />
          <OrderList orders={[...orders].slice(0, offset)} horizontal={false} />
          {offset < orders.length && (
            <TextCustom style={styles.home_load_more} onPress={handleLoadMore}>
              Load more
            </TextCustom>
          )}
        </ScrollView>

        <Modal isVisible={visibleModal}>
          <View style={styles.modal}>
            <Image source={PopupImage} style={styles.modal_image} />
            <Icon
              name="cancel"
              style={styles.icon_close}
              color={Colours.WHITE}
              size={30}
              onPress={() => setVisibleModal(false)}
            />
            <TextCustom style={styles.modal_text}>
              Log in or Sign up now to explore more with Tribes!
            </TextCustom>
            <View style={styles.modal_buttons}>
              <Button title="Sign in" />
              <Button title="Sign up" variant="secondary" />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
};

export default Home;
