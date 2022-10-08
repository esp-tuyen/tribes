import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  personal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 97,
    height: 94,
    shadowColor: Colours.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    backgroundColor: Colours.WHITE,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  personal_line: {
    backgroundColor: Colours.RED[500],
    height: 4,
    width: 97,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  personal_name: {
    marginTop: 8,
    fontSize: 11,
    color: Colours.BACKGROUND[600],
  },
});

export default styles;
