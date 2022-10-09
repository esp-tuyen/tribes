import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  header: {
    paddingTop: 6,
    backgroundColor: Colours.WHITE,
  },
  header_list: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  header_icons: {
    flexDirection: 'row',
  },
  header_icon: {
    marginLeft: 16,
  },
  header_image: {},
  header_select: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  header_select_text: {
    marginHorizontal: 8,
  },
});

export default styles;
