import { ImageSourcePropType } from 'react-native';

export interface IOrder {
  id: string;
  name: string;
  image: ImageSourcePropType;
  star: number;
  people_review: number;
  followers: number;
  tags: string[];
  price: number;
  highlights: {
    is_hot: boolean;
    name: string;
  }[];
}

export interface OrderListProps {
  name?: string;
  isSeeMore?: boolean;
  horizontal?: boolean;
  orders: IOrder[];
}
