import { ImageSourcePropType } from 'react-native';

export interface FavouriteProps {
  onSubmit?: () => void;
}

export interface IFavourite {
  id: string;
  image: ImageSourcePropType;
  name: string;
}
