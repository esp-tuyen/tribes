import { ButtonProps as BtnProps, StyleProp, ViewStyle } from 'react-native';

export interface ButtonProps extends BtnProps {
  variant?: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
}
