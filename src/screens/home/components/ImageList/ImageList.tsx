import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import HomeLayout from '../HomeLayout';
import TextCustom from '~components/TextCustom';
import { ImageListProps, IImage } from './ImageList.type';

import styles from './ImageList.style';

const ImageList: React.FC<ImageListProps> = ({ name, images }) => {
  const ImageItem = (imageItem: IImage) => (
    <TouchableOpacity style={styles.image_item}>
      <Image source={imageItem.image} style={styles.image_item_image} />
      <TextCustom style={styles.image_item_name}>{imageItem.name}</TextCustom>
    </TouchableOpacity>
  );

  return (
    <HomeLayout
      horizontal
      style={styles.image_list}
      title={name}
      isSeeMore
      isBackground>
      {images &&
        images.map((imageItem, index) => (
          <ImageItem
            key={index}
            image={imageItem.image}
            name={imageItem.name}
          />
        ))}
    </HomeLayout>
  );
};

export default ImageList;
