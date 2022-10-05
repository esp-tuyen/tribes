import { StyleProp, ViewStyle } from 'react-native';

export interface LayoutProps {
  title?: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  isSeeMore?: boolean;
  horizontal?: boolean;
}
