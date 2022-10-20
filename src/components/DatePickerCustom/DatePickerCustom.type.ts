import { ModernDatepickerProps } from 'react-native-modern-datepicker';

export interface DatePickerCustomProps extends ModernDatepickerProps {
  isVisible?: boolean;
  onClose?: () => void;
}
