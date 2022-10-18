import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface LayoutProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  name?: string;
  onChangeType?: (value: boolean) => void;
  isTab?: boolean;
  footer?: React.ReactNode;
}
