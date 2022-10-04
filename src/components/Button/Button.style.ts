import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primary: {
    backgroundColor: Colours.RED[500],
    color: Colours.WHITE,
  },
  secondary: {
    backgroundColor: Colours.WHITE,
    color: Colours.RED[500],
  },
});

export default styles;
