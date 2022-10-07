import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  order_list: {
    marginHorizontal: -8,
  },
  order_verical: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  order_item: {
    position: 'relative',
    width: 160,
    borderRadius: 8,
    marginHorizontal: 4,
    borderWidth: 0.5,
    borderColor: Colours.BACKGROUND[100],
  },
  order_item_vertical: {
    width: '47.5%',
    marginVertical: 8,
  },
  order_verified: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: 8,
    zIndex: 1,
    backgroundColor: Colours.GREEN[500],
    padding: 4,
  },
  order_verified_text: {
    fontSize: 9,
    color: Colours.WHITE,
    marginLeft: 4,
    fontWeight: '600',
  },
  order_image: {
    width: '100%',
    height: 84,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'cover',
  },
  order_info: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  order_info_name: {
    fontSize: 12,
    fontWeight: '600',
    color: Colours.BACKGROUND[600],
  },
  order_info_reviews: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  order_info_star: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colours.RED[500],
    marginHorizontal: 4,
  },
  order_info_review: {
    fontSize: 9,
    color: Colours.BACKGROUND[600],
  },
  order_info_round: {
    width: 2,
    height: 2,
    backgroundColor: Colours.BACKGROUND[200],
    marginHorizontal: 6,
  },
  order_info_followers: {
    fontSize: 9,
    color: Colours.BACKGROUND[500],
  },
  order_info_tags: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  order_info_tag: {
    fontSize: 9,
    color: Colours.BACKGROUND[400],
  },
  order_info_tag_brick: {
    borderWidth: 0.2,
    backgroundColor: Colours.BACKGROUND[200],
    marginHorizontal: 6,
  },
  order_line_through: {
    borderWidth: 0.5,
    borderColor: Colours.BACKGROUND[100],
    marginVertical: 8,
  },
  order_money: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  order_money_title: {
    marginRight: 8,
    fontSize: 8,
    color: Colours.BACKGROUND[600],
  },
  order_money_value: {
    fontSize: 11,
    fontWeight: '600',
    color: Colours.BACKGROUND[700],
  },
  order_highlights: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 6,
    marginHorizontal: -8,
  },
  order_highlight: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colours.BACKGROUND[50],
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 8,
    marginHorizontal: 4,
    marginVertical: 2,
  },
  order_highlight_icon: {
    marginRight: 4,
  },
  order_highlight_name: {
    fontSize: 9,
    color: Colours.BACKGROUND[500],
  },
});

export default styles;
