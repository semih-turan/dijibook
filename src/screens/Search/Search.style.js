import { Dimensions, StyleSheet } from 'react-native';
import { text } from '~/configs';
import { colors } from '~/themes';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: '#FBF5F4',
  },
  flatlist: {
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.01,
    marginBottom: height * 0.15,
  },
  searchbar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  barcode: {
    width: width * 0.1,
    marginLeft: width * 0.05,
    height: width * 0.15,
  },
  category: {
    flexDirection: 'row',
  },
  categoryItem: {
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    padding: 8,
    textAlign: 'center',
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: text.H9,
    color: colors.black,
    borderColor: colors.black,
  },
});
