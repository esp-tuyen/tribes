import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  research: {
    paddingVertical: 32,
  },
  research_name: {
    color: Colours.BACKGROUND[600],
    fontSize: 14,
    fontWeight: '600',
  },
  research_list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -5,
    marginTop: 6,
  },
  research_item: {
    marginHorizontal: 5,
    marginVertical: 4,
    fontSize: 11,
    color: Colours.RED[500],
  },
});

export default styles;
