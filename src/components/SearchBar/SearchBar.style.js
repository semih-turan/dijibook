import { Dimensions, StyleSheet } from 'react-native';
import colors from '~/configs/color';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    width: width * 0.7,
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
