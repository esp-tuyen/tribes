import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  post_list: {
    marginHorizontal: -8,
  },
  post_item: {
    width: 168,
    borderRadius: 8,
    overflow: 'hidden',
    marginHorizontal: 4,
  },
  post_item_image: {
    resizeMode: 'cover',
    width: '100%',
    height: 126,
  },
  post_item_info: {
    backgroundColor: Colours.WHITE,
    paddingHorizontal: 6,
    paddingVertical: 8,
  },
  post_item_info_name: {
    fontSize: 12,
    fontWeight: '600',
    color: Colours.BACKGROUND[600],
    marginBottom: 4,
  },
  post_item_info_time: {
    fontSize: 8,
    color: Colours.BACKGROUND[400],
  },
});

export default styles;
