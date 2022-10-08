import { StyleSheet } from 'react-native';

import { Colours } from '~styles';

const styles = StyleSheet.create({
  home: {
    backgroundColor: Colours.WHITE,
  },
  home_line_through: {
    backgroundColor: Colours.BACKGROUND[50],
    height: 8,
  },
  home_load_more: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: Colours.RED[500],
    color: Colours.RED[500],
    borderRadius: 8,
    paddingVertical: 10,
    marginHorizontal: 16,
    marginVertical: 16,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
