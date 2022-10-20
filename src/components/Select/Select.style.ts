import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  select: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Colours.WHITE,
  },
  select_form: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colours.BACKGROUND[100],
  },
  select_form_text: {
    fontSize: 13,
    fontWeight: '500',
  },
  select_form_icon: {},
  select_overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  select_modal: {
    marginHorizontal: 0,
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
  },
});

export default styles;
