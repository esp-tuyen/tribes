import { StyleSheet } from 'react-native';

import { Colours } from '~styles';

const styles = StyleSheet.create({
  content: {
    position: 'relative',
    backgroundColor: Colours.PINK,
    paddingVertical: 32,
  },
  content_title: {
    color: Colours.BACKGROUND[700],
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  content_image: {
    position: 'absolute',
    right: 0,
  },
  content_list: {
    marginTop: 12,
    width: '100%',
  },
  content_item: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  content_item_icon: {},
  content_item_list: {
    marginHorizontal: 16,
  },
  content_item_name: {
    marginBottom: 8,
    color: Colours.BLACK,
    fontSize: 14,
    fontWeight: '600',
  },
  content_item_description: {
    fontSize: 13,
    color: Colours.BACKGROUND[500],
  },
});

export default styles;
