import { StyleSheet } from 'react-native';

import { Colours } from '~styles';

const styles = StyleSheet.create({
  layout: {
    backgroundColor: Colours.WHITE,
  },
  layout_list: {
    height: '100%',
  },
  layout_children: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 10,
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
    // position: 'absolute',
    // bottom: 0,
    // width: '100%',
    backgroundColor: Colours.WHITE,
    borderTopWidth: 0.5,
    borderTopColor: Colours.BACKGROUND[100],
    paddingTop: 8,
  },
});

export default styles;
