import { Colours } from '~styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  date_picker: {
    position: 'absolute',
    top: 25,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1,
    borderColor: Colours.BACKGROUND[100],
  },
  date_picker_modal: {
    marginHorizontal: 0,
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
  },
  date_picker_overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  date_picker_options: {
    backgroundColor: Colours.WHITE,
    textHeaderColor: Colours.GRAY[900],
    textDefaultColor: Colours.GRAY[400],
    selectedTextColor: Colours.WHITE,
    textSecondaryColor: Colours.BACKGROUND[600],
    borderColor: 'transparent',
    textHeaderFontSize: 18,
    mainColor: 'red',
  },
});

export default styles;
