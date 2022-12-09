import { Dimensions, StyleSheet } from 'react-native';
import { text } from '~/configs';
import { colors } from '~/themes';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  topContainer: {
    backgroundColor: colors.white,
  },
  container: {
    marginHorizontal: width * 0.05,
    backgroundColor: colors.white,
  },
  category: {
    flexDirection: 'row',
  },
  categoryItem: {
    marginHorizontal: 10,
    marginTop: height * 0.02,
    marginBottom: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    textAlign: 'center',
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: text.H9,
    color: colors.black,
    borderColor: colors.black,
  },
  flatlist: {},
});
