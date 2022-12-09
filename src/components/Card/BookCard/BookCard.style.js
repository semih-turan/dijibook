import { Dimensions, StyleSheet } from 'react-native';

const height = Dimensions.get('window').height;

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    width: width * 0.4,
    height: height * 0.35,
    marginVertical: height * 0.025,
    marginHorizontal: width * 0.025,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  image: {
    width: width * 0.25,
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
