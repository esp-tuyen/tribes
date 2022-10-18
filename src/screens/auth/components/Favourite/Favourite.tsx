import React, { useState } from 'react';

import { FavouriteProps, IFavourite } from './Favourite.type';

import TextCustom from '~components/TextCustom';
import { Image, Pressable, View } from 'react-native';
import WaveIcon from '~assets/images/svgs/wave.svg';
import CheckIcon from '~assets/images/svgs/checked.svg';
import { favouriteList } from '~constants/common';

import { GlobalStyles } from '~styles';
import styles from './Favourite.style';

const Favourite: React.FC<FavouriteProps> = ({ onSubmit }) => {
  const [favourites] = useState<IFavourite[]>([...favouriteList]);
  const [selecteds, setSelecteds] = useState<string[]>([]);

  const handleSelected = (id: string) => {
    const _selecteds = [...selecteds];
    if (selecteds.includes(id)) {
      setSelecteds(_selecteds.filter(_selected => _selected !== id));
    } else {
      setSelecteds([...selecteds, id]);
    }
  };

  const FavoriteItem = (favourite: IFavourite) => (
    <Pressable
      style={styles.favourite_item}
      onPress={() => handleSelected(favourite.id)}>
      <View style={styles.favourite_item_image}>
        <Image
          source={favourite.image}
          style={styles.favourite_item_image_avatar}
        />
        {selecteds.includes(favourite.id) && (
          <React.Fragment>
            <View style={styles.favourite_item_image_overlay} />
            <View style={styles.favourite_item_image_icon}>
              <CheckIcon />
            </View>
          </React.Fragment>
        )}
      </View>
      <TextCustom style={styles.favourite_item_name}>
        {favourite.name}
      </TextCustom>
    </Pressable>
  );

  return (
    <View style={[GlobalStyles.globalStyle, styles.favourite]}>
      <TextCustom style={styles.favourite_skip} onPress={onSubmit}>
        Skip
      </TextCustom>
      <View style={styles.favourite_title_list}>
        <WaveIcon style={styles.favourite_icon} />
        <TextCustom style={styles.favourite_title}>Hello Anna Nhun,</TextCustom>
      </View>
      <TextCustom style={styles.favourite_title}>
        Tell us what are your interests
      </TextCustom>

      <TextCustom style={styles.favourite_description}>
        We'd like to bring you better and more curated content. Do let us know
        the categories that you're interested in! (Select a minimum of 8)
      </TextCustom>
      <TextCustom style={styles.favourite_selected}>
        Selected {selecteds.length}/{favourites.length}
      </TextCustom>

      <View style={styles.favourite_list}>
        {favourites.map(favourite => (
          <FavoriteItem
            key={favourite.id}
            name={favourite.name}
            id={favourite.id}
            image={favourite.image}
          />
        ))}
      </View>
    </View>
  );
};

export default Favourite;
