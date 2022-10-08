import React from 'react';
import { Image, View } from 'react-native';

import TextCustom from '~components/TextCustom';
import { ContentListProps, IContent } from './ContentList.type';
import SunImage from '~assets/images/pngs/sun.png';
import StarIcon from '~assets/images/svgs/star-2.svg';

import { GlobalStyles } from '~styles';
import styles from './ContentList.style';

const ContentList: React.FC<ContentListProps> = ({ name, contents }) => {
  const ContentItem = ({ content }: { content: IContent }) => (
    <View style={styles.content_item}>
      <StarIcon style={styles.content_item_icon} />
      <View style={styles.content_item_list}>
        <TextCustom style={styles.content_item_name}>{content.name}</TextCustom>
        <TextCustom style={styles.content_item_description}>
          {content.description}
        </TextCustom>
      </View>
    </View>
  );

  return (
    <View style={[GlobalStyles.globalStyle, styles.content]}>
      <Image style={styles.content_image} source={SunImage} />
      <TextCustom style={styles.content_title}>{name}</TextCustom>
      <View style={styles.content_list}>
        {contents.map((content, index) => (
          <ContentItem key={index} content={content} />
        ))}
      </View>
    </View>
  );
};

export default ContentList;
