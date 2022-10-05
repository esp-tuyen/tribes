import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 139,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  banner_dot_container: {
    marginHorizontal: 0,
  },
  banner_dot: {
    width: 10,
    height: 10,
    borderRadius: 100,
    marginHorizontal: 4,
    backgroundColor: Colours.BACKGROUND[400],
  },
  banner_dot_acitve: {
    width: 20,
    height: 20,
    marginHorizontal: 4,
    backgroundColor: Colours.BACKGROUND[100],
  },
});

export default styles;
