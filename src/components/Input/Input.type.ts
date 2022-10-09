import { StyleProp, ViewStyle } from 'react-native';

export interface InputProps {
  type?: 'text' | 'password' | 'phone';
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  defaultValue?: string;
  value?: string;
}