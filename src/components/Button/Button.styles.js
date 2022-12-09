import { StyleSheet } from 'react-native';
import { spacing } from '~/configs';
import colors from '~/themes/colors';
import { text } from '~/configs';

//base stylemiz
const base_style = StyleSheet.create({
  container: {
    padding: 10,
    margin: spacing.s / .7,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  button_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: text.H3,
    marginLeft: 5,
    color: 'white',
  },
});
//base styleynin değerini içeri aktarıyoruz ...base_style yazarak
export default {
  ...base_style,
  primary: StyleSheet.create({
    container: {
      ...base_style.container,
      backgroundColor: colors.orange,
    },
    title: {
      ...base_style.title,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: colors.black,
    },
    title: {
      ...base_style.title,
      color: colors.black,
    },
  }),
};
