import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  layout: {},
  layout_children: {
    marginTop: 16,
    marginBottom: 32,
  },
  layout_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    dalignItems: 'center',
  },
  layout_title_text: {
    fontSize: 16,
    color: Colours.BACKGROUND[700],
    fontWeight: 'bold',
  },
  layout_see_more: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  layout_see_more_text: {
    color: Colours.RED[500],
    fontWeight: '600',
    fontSize: 12,
  },
});

export default styles;
