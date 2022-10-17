import { PickerProps } from '@react-native-community/picker/typings/Picker';

export interface SelectProps extends PickerProps {
  isVisible?: boolean;
  onClose?: () => void;
  options?: {
    value: string;
    label: string;
  }[];
}
