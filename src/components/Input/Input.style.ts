import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  form_input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colours.BACKGROUND[100],
    height: 52,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  form_input_list: {},
  input_placeholder: {
    color: Colours.BACKGROUND[300],
    fontSize: 11,
  },
  input: {
    flex: 1,
    fontSize: 13,
    fontWeight: '500',
  },
  icon: {
    paddingLeft: 10,
  },
});

export default styles;
