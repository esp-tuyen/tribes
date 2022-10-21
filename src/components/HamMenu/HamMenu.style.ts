import { StyleSheet } from 'react-native';
import { Colours } from '~styles';

const styles = StyleSheet.create({
  menu: {
    position: 'relative',
  },
  menu_modal: {
    marginHorizontal: 0,
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
  },
  menu_overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  memu_body: {
    backgroundColor: Colours.WHITE,
    height: '100%',
    width: '75%',
    marginLeft: 'auto',
  },
  menu_image: {
    width: '100%',
    resizeMode: 'cover',
  },
  menu_btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 16,
  },
  menu_btn: {
    width: 120,
    height: 42,
    borderWidth: 1,
    borderColor: Colours.RED[500],
  },
  menu_item: {
    marginVertical: 8,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu_item_text: {
    marginLeft: 16,
    fontSize: 14,
    fontWeight: '500',
    color: Colours.PRIMARY[100],
  },
  menu_line: {
    borderWidth: 0.5,
    borderColor: Colours.BACKGROUND[100],
    marginHorizontal: -16,
    marginVertical: 8,
  },
  menu_profile: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 16,
  },
  menu_profile_image: {
    width: 52,
    height: 52,
    borderRadius: 100,
    marginRight: 24,
  },
  menu_profile_info: {
    justifyContent: 'space-around',
  },
  menu_profile_info_name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colours.BLACK,
  },
  menu_profile_info_link: {
    fontSize: 14,
    fontWeight: '500',
    color: Colours.BACKGROUND[400],
  },
});

export default styles;
