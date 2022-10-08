import { ImageSourcePropType } from 'react-native';

export interface IImage {
  image: ImageSourcePropType;
  name: string;
}

export interface ImageListProps {
  name?: string;
  images: IImage[];
}
