import { Dimensions, StyleSheet } from 'react-native';
import { text } from '~/configs';
import { colors } from '~/themes';
import { FONTS, COLORS, SIZES, icons } from '~/constants';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  topContainer: { flex: 1, backgroundColor: COLORS.gray1 },
  container: { flex: 1, backgroundColor: COLORS.gray },
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
  flatlist: { marginTop: SIZES.padding },
  active: {
    color: colors.orange,
    borderColor: colors.orange,
    backgroundColor: colors.white,
  },
});
