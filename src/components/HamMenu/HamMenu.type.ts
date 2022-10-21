import { AppScreens } from '~navigation/navigation.type';

export interface HamMenuProps {
  isVisible?: boolean;
  onClose?: () => void;
}

export interface MenuItemProps {
  icon: React.ReactNode;
  name: string;
  link?: AppScreens;
  color?: string;
  onPress?: () => void;
}
