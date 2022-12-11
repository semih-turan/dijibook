import { Dimensions, StyleSheet } from 'react-native';
import { text, colors } from '~/configs';
const height = Dimensions.get('window').height;

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.20,
    height: height * 0.25,
    resizeMode: 'contain',
    flex: 2,
  },
  bookName: {
    width: width * 0.25,
    height: height * 0.1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: text.H9,
    color: 'black',
    flex: 1,
  },
});
