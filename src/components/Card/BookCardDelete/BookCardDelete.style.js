import { Dimensions, StyleSheet } from 'react-native';

const height = Dimensions.get('window').height;

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  
  image: {
    width: width * 0.20,
    height: height * 0.25,
    resizeMode: 'contain',
  },
  bookName: {
    width: width * 0.25,
    height: height * 0.1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
