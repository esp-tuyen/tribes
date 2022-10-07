import { ImageSourcePropType } from 'react-native';

export interface IPost {
  image: ImageSourcePropType;
  name: string;
  createAt: Date;
}

export interface PostListProps {
  name?: string;
  posts: IPost[];
}
