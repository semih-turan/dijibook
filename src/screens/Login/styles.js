import { StyleSheet } from 'react-native';
import { spacing } from '~/configs';
import { colors } from '~/themes';
import { text } from '~/configs';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  body_container: {
    width: '70%',
    marginVertical: spacing.xs,
    alignSelf: 'center',
    borderRadius: 8,
  },
  title: {
    fontSize: text.H1,
    fontFamily: 'Montserrat-ExtraBold',
    color: 'black',
  },
  subtitle: {
    fontSize: text.H8,
    fontFamily: 'Montserrat-Medium',
    color: colors.gray,
  },
  text_input: {
    margin: spacing.xxs,
  },
  logo: {
    alignSelf: 'center',
    width: 212,
    height: 181,
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: spacing.xs,
  },
});
