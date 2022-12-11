import { Dimensions, StyleSheet } from 'react-native';
import { color } from '~/configs';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.yellow,
    alignItems: 'center',
  },
  formikContainer: {
    width: width * 0.8,
  },
});
