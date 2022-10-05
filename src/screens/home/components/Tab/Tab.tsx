import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import HomeLayout from '../HomeLayout';
import { TabProps } from './Tab.type';
import BuyIcon from '~assets/images/svgs/buy.svg';
import EatIcon from '~assets/images/svgs/eat.svg';
import CameraIcon from '~assets/images/svgs/camera.svg';
import CarIcon from '~assets/images/svgs/car.svg';
import BedIcon from '~assets/images/svgs/bed.svg';
import TextCustom from '~components/TextCustom';

import styles from './Tab.style';

const Tab: React.FC<TabProps> = () => {
  const TabItem = ({
    icon: Icon,
    name,
  }: {
    icon: React.FC<SvgProps>;
    name: string;
  }) => (
    <View style={styles.tab}>
      <TouchableOpacity style={styles.tab_icon}>
        <Icon />
      </TouchableOpacity>
      <TextCustom style={styles.tab_title}>{name}</TextCustom>
    </View>
  );

  return (
    <HomeLayout title="Explore BESTS" horizontal>
      <View style={styles.tabs}>
        <TabItem icon={BuyIcon} name="Buy" />
        <TabItem icon={EatIcon} name="Eat" />
        <TabItem icon={CameraIcon} name="See & Do" />
        <TabItem icon={CarIcon} name="Transport" />
        <TabItem icon={BedIcon} name="Stay" />
        <TabItem icon={BuyIcon} name="Buy" />
        <TabItem icon={BuyIcon} name="Buy" />
        <TabItem icon={EatIcon} name="Eat" />
        <TabItem icon={CameraIcon} name="See & Do" />
      </View>
    </HomeLayout>
  );
};

export default Tab;
