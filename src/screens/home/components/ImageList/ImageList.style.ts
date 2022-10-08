import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  image_list: {
    marginHorizontal: -8,
  },
  image_item: {
    position: 'relative',
    width: 168,
    height: 210,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  image_item_image: {
    resizeMode: 'cover',
  },
  image_item_name: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: Colours.WHITE,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
