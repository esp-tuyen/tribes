import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

import Header from '~components/Header';
import { LayoutProps } from './Layout.type';
import BagIcon from '~assets/images/svgs/bag.svg';
import TextCustom from '~components/TextCustom';

import styles from './Layout.style';
import { Colours, GlobalStyles } from '~styles';

const Layout: React.FC<LayoutProps> = ({
  children,
  style,
  name,
  onChangeType,
  isTab = true,
  isFooter = true,
}) => {
  const [isPhone, setIsPhone] = useState(true);

  useEffect(() => {
    onChangeType?.(isPhone);
  }, [isPhone, onChangeType]);

  return (
    <View style={styles.layout}>
      <SafeAreaView>
        <View style={styles.layout_list}>
          <Header isSearch={false} isLanguage={false} />
          <View style={[styles.layout_children, style]}>
            {name && <TextCustom style={styles.layout_name}>{name}</TextCustom>}
            {isTab && (
              <View style={styles.layout_tabs}>
                <TouchableOpacity
                  style={isPhone && styles.layout_tab_bdb}
                  onPress={() => setIsPhone(true)}>
                  <TextCustom
                    style={[
                      styles.layout_tab,
                      isPhone && { color: Colours.BACKGROUND[500] },
                    ]}>
                    Phone number
                  </TextCustom>
                </TouchableOpacity>
                <TouchableOpacity
                  style={!isPhone && styles.layout_tab_bdb}
                  onPress={() => setIsPhone(false)}>
                  <TextCustom
                    style={[
                      styles.layout_tab,
                      !isPhone && { color: Colours.BACKGROUND[500] },
                    ]}>
                    Email address
                  </TextCustom>
                </TouchableOpacity>
              </View>
            )}
            {children}
          </View>
          {isFooter ? (
            <View style={[GlobalStyles.globalStyle, styles.layout_footer]}>
              <BagIcon fontSize={20} />
              <TextCustom style={styles.layout_footer_text}>
                Log in / Sign up for Business
              </TextCustom>
            </View>
          ) : (
            <View></View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Layout;
