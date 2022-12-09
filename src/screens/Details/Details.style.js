import { Dimensions, StyleSheet } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    display: 'flex',
    position: 'absolute',
  },
  upperContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    width: width * 0.3,
    height: height * 0.3,
  },
  lowerContainer: {
    flex: 10,
  },
  title: {
    marginBottom: 10,
    fontSize: 22,
  },
  text: {
    marginBottom: 50,
  },
});
