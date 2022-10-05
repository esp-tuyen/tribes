import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { HomeHeaderProps } from './HomeHeader.type';
import LogoImage from '~assets/images/pngs/logo.png';
import LocationSVG from '~assets/images/svgs/location.svg';

import styles from './HomeHeader.style';
import Icon from '~components/Icon';
import TextCustom from '~components/TextCustom';
import { GlobalStyles } from '~styles';

const HomeHeader: React.FC<HomeHeaderProps> = () => {
  return (
    <View style={[GlobalStyles.globalStyle, styles.home_header]}>
      <View style={styles.home_header_list}>
        <Image style={styles.home_header_image} source={LogoImage} />
        <View style={styles.home_header_icons}>
          <TouchableOpacity>
            <Icon style={styles.home_header_icon} name="search" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.home_header_icon} name="menu" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.home_header_select}>
        <LocationSVG />
        <TextCustom style={styles.home_header_select_text}>
          Singapore
        </TextCustom>
        <Icon name="arrow-down" />
      </View>
    </View>
  );
};

export default HomeHeader;
