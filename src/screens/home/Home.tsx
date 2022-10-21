import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import { useRecoilValue } from 'recoil';

import { Banner, Tab } from './components';
import TextCustom from '~components/TextCustom';
import OrderList from './components/OrderList';
import { orders, images, posts, contents, researchs } from '~constants/common';
import ImageList from './components/ImageList';
import PostList from './components/PostList';
import Personal from './components/Personal';
import ContentList from './components/ContentList';
import ResearchList from './components/ResearchList';
import Popup from './components/Popup';
import Header from '~components/Header';
import { AuthAtom } from '~services/auth';

import styles from './Home.style';

const Home: React.FC = () => {
  const [offset, setOffset] = useState(2);
  const isLogin = useRecoilValue(AuthAtom.isLogin);

  const handleLoadMore = () => {
    if (offset < orders.length) {
      setOffset(offset + offset);
    }
  };

  return (
    <View style={styles.home}>
      <SafeAreaView>
        <ScrollView stickyHeaderIndices={[0]}>
          <Header />
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
          <ContentList
            name="A Curated Platform & Experience For The Muslim Lifestyle"
            contents={contents}
          />
          <ResearchList name="Top searches" researchs={researchs} />
        </ScrollView>

        <Popup isLogin={isLogin} />
      </SafeAreaView>
    </View>
  );
};

export default Home;
