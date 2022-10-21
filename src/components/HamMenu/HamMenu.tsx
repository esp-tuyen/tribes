import React from 'react';
import { Pressable, View, Image, SafeAreaView } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

import { HamMenuProps, MenuItemProps } from './HamMenu.type';
import HeaderImage from '~assets/images/pngs/header-menu.png';
import Button from '~components/Button';
import { AppScreens } from '~navigation/navigation.type';
import TextCustom from '~components/TextCustom';
import CategoriesIcon from '~assets/images/svgs/categories-color.svg';
import DealIcon from '~assets/images/svgs/deal-color.svg';
import HeartIcon from '~assets/images/svgs/heart-color.svg';
import EditIcon from '~assets/images/svgs/edit-color.svg';
import SettingsIcon from '~assets/images/svgs/settings-color.svg';
import CodeIcon from '~assets/images/svgs/code-color.svg';
import WorkIcon from '~assets/images/svgs/work-color.svg';
import SupportIcon from '~assets/images/svgs/support-color.svg';
import FlagIcon from '~assets/images/svgs/flag-color.svg';
import AvatarImage from '~assets/images/pngs/avatar.png';
import LogoutIcon from '~assets/images/svgs/log-out.svg';

import styles from './HamMenu.style';
import { Colours, GlobalStyles } from '~styles';
import { useRecoilState } from 'recoil';
import { AuthAtom } from '~services/auth';

const HamMenu: React.FC<HamMenuProps> = ({ isVisible, onClose }) => {
  const nav = useNavigation<any>();
  const [isLogin, setIsLogin] = useRecoilState(AuthAtom.isLogin);

  const MenuItem: React.FC<MenuItemProps> = props => {
    const { icon, name, link, color, onPress } = props;

    return (
      <Pressable
        style={styles.menu_item}
        onPress={() => {
          onPress?.();
          link && nav.navigate(link);
        }}>
        {icon}
        <TextCustom style={[styles.menu_item_text, { color }]}>
          {name}
        </TextCustom>
      </Pressable>
    );
  };

  return (
    <Modal
      isVisible={isVisible}
      style={styles.menu_modal}
      animationIn="slideInRight"
      animationOut="slideOutRight">
      <Pressable style={styles.menu_overlay} onPress={onClose} />

      <View style={styles.memu_body}>
        <SafeAreaView>
          {!isLogin && <Image style={styles.menu_image} source={HeaderImage} />}

          <View style={GlobalStyles.globalStyle}>
            {isLogin ? (
              <View style={styles.menu_profile}>
                <Image source={AvatarImage} style={styles.menu_profile_image} />
                <View style={styles.menu_profile_info}>
                  <TextCustom style={styles.menu_profile_info_name}>
                    Anna Nhun
                  </TextCustom>
                  <TextCustom style={styles.menu_profile_info_link}>
                    See profile
                  </TextCustom>
                </View>
              </View>
            ) : (
              <View style={styles.menu_btns}>
                <Button
                  title="Log in"
                  onPress={() => {
                    nav.navigate(AppScreens.SIGN_IN);
                    onClose?.();
                  }}
                  style={styles.menu_btn}
                />
                <Button
                  title="Sign up"
                  variant="secondary"
                  onPress={() => {
                    nav.navigate(AppScreens.SIGN_UP);
                    onClose?.();
                  }}
                  style={styles.menu_btn}
                />
              </View>
            )}

            <MenuItem icon={<CategoriesIcon />} name="Categories" />
            <MenuItem icon={<DealIcon />} name="Saved deals" />
            <MenuItem icon={<HeartIcon />} name="Favourited" />

            <View style={styles.menu_line} />

            <MenuItem icon={<EditIcon />} name="Edit profile" />
            <MenuItem icon={<SettingsIcon />} name="Settings" />

            <View style={styles.menu_line} />

            <MenuItem icon={<CodeIcon />} name="Referral code" />
            <MenuItem icon={<WorkIcon />} name="Tribes for Businesses" />
            <MenuItem icon={<SupportIcon />} name="Support" />
            <MenuItem icon={<FlagIcon />} name="Language" />
            {isLogin && (
              <MenuItem
                icon={<LogoutIcon />}
                name="Log out"
                color={Colours.RED[500]}
                onPress={() => setIsLogin(false)}
              />
            )}
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default HamMenu;
