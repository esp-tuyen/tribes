import { StyleSheet } from 'react-native';

import { Colours } from '~styles';

const styles = StyleSheet.create({
  layout: {
    backgroundColor: Colours.WHITE,
  },
  layout_list: {
    height: '100%',
    justifyContent: 'space-between',
  },
  layout_children: {
    backgroundColor: Colours.WHITE,
  },
  layout_name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colours.BACKGROUND[700],
    textAlign: 'center',
    marginBottom: 24,
  },
  layout_tab_bdb: {
    borderBottomWidth: 4,
    borderBottomColor: Colours.BACKGROUND[600],
    marginBottom: -2,
  },
  layout_tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: Colours.BACKGROUND[100],
  },
  layout_tab: {
    paddingBottom: 8,
    fontSize: 14,
    fontWeight: '600',
    color: Colours.BACKGROUND[300],
  },
  layout_footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 24,
    marginHorizontal: 16,
    backgroundColor: Colours.BACKGROUND[50],
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  layout_footer_text: {
    marginLeft: 11,
    fontSize: 12,
    fontWeight: '600',
    color: Colours.BACKGROUND[600],
  },
});

export default styles;
