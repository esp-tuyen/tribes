import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  favourite: {},
  favourite_skip: {
    fontSize: 11,
    color: Colours.BACKGROUND[300],
    textAlign: 'right',
    marginBottom: 15,
  },
  favourite_title_list: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favourite_icon: {
    marginRight: 16,
  },
  favourite_title: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
    color: Colours.BACKGROUND[700],
  },
  favourite_description: {
    marginTop: 24,
    marginBottom: 8,
    fontSize: 13,
    color: Colours.BACKGROUND[500],
    lineHeight: 20,
  },
  favourite_selected: {
    fontSize: 12,
    fontWeight: '600',
    color: Colours.BACKGROUND[400],
    marginBottom: 42,
  },
  favourite_list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  favourite_item: {
    width: '25%',
    alignItems: 'center',
    marginVertical: 8,
  },
  favourite_item_name: {
    fontSize: 10,
    color: Colours.BACKGROUND[600],
    marginTop: 4,
  },
  favourite_item_image: {
    position: 'relative',
    width: 56,
  },
  favourite_item_image_avatar: {
    width: 56,
    height: 56,
    borderRadius: 100,
  },
  favourite_item_image_icon: {
    position: 'absolute',
    left: '30%',
    top: '35%',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  favourite_item_image_overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: Colours.BACKGROUND[600],
    borderRadius: 100,
    opacity: 0.5,
  },
});

export default styles;
