import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  home_header: {
    paddingTop: 6,
    backgroundColor: Colours.WHITE,
  },
  home_header_list: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  home_header_icons: {
    flexDirection: 'row',
  },
  home_header_icon: {
    marginLeft: 16,
  },
  home_header_image: {},
  home_header_select: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  home_header_select_text: {
    marginHorizontal: 8,
  },
});

export default styles;
