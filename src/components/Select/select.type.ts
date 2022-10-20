import { StyleProp, ViewStyle } from 'react-native';

export interface SelectProps {
  options?: {
    value: string;
    label: string;
  }[];
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange: (value: number | string) => void;
  style?: StyleProp<ViewStyle>;
}
