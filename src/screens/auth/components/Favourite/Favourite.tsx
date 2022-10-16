import React from 'react';

import { FavouriteProps } from './Favourite.type';

import styles from './Favourite.style';
import TextCustom from '~components/TextCustom';

const Favourite: React.FC<FavouriteProps> = () => {
  return <TextCustom style={styles.favourite}>Favourite</TextCustom>;
};

export default Favourite;
