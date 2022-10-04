import { ButtonProps as BtnProps } from 'react-native';

export interface ButtonProps extends BtnProps {
  variant?: 'primary' | 'secondary';
}
