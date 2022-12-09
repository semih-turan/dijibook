import { Dimensions, StyleSheet } from 'react-native';
import colors from '~/configs/color';

const width = Dimensions.get('window').width * 0.8;

export default StyleSheet.create({
  container: {
    width: width,
    marginLeft: width * 0.125,
    marginTop: width * 0.05,
    marginBottom: width * 0.05,
    borderRadius: 15,
    backgroundColor: colors.gray,
  },
  input: {
    marginLeft: width * 0.05,
    marginVertical: width * 0.01,
    fontFamily: 'Montserrat-Medium',
  },
});
