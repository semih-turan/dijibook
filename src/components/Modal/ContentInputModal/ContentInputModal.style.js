import { Dimensions, StyleSheet } from 'react-native';
const deviceSize = Dimensions.get('window');
import colors from '~/themes/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 15,
    marginHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: deviceSize.height / 4,
  },
  input_container: {
    flex: 1,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
