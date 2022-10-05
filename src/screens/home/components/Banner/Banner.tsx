import React, { useState } from 'react';
import { Image, useWindowDimensions, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { bannerList } from '~constants';
import { BannerProps } from './Banner.type';

import styles from './Banner.style';

const Banner: React.FC<BannerProps> = () => {
  const [bannerActive, setBannerActive] = useState(0);
  const layout = useWindowDimensions();
  const itemWidth = layout.width - 50;

  return (
    <View>
      <Carousel
        loop
        style={styles.banner}
        vertical={false}
        layout="default"
        data={bannerList}
        renderItem={({ item, index }) => (
          <Image key={index} style={styles.banner} source={item} />
        )}
        sliderWidth={layout.width}
        itemWidth={itemWidth}
        onSnapToItem={index => setBannerActive(index)}
      />
      <Pagination
        dotsLength={bannerList.length}
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{ paddingVertical: 16 }}
        activeDotIndex={bannerActive}
        dotContainerStyle={styles.banner_dot_container}
        dotStyle={styles.banner_dot}
        inactiveDotStyle={styles.banner_dot_acitve}
      />
    </View>
  );
};

export default Banner;
