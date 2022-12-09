import { StyleSheet } from 'react-native';
import { colors } from '~/themes';
import { text } from '~/configs';

export default StyleSheet.create({
  container: {
    height: 75,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 15,
    borderWidth: 1,
    borderColor: colors.orange,
    borderBottomRightRadius: 15,
  },
  text: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: text.H2,
    fontFamily: 'Montserrat-Bold',
    color: colors.orange,
  },
});
