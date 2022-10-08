import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    marginHorizontal: -16,
  },
  tab: {
    flexDirection: 'column',
    marginHorizontal: 16,
  },
  tab_icon: {
    alignSelf: 'center',
  },
  tab_title: {
    marginTop: 8,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 11,
    color: Colours.BACKGROUND[700],
  },
});

export default styles;
