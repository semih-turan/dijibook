import { StyleSheet } from 'react-native';
import colors from '~/configs/color';
export default StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: colors.gray,
    borderRadius: 15,
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    color: colors.orange,
    fontSize: 15,
    fontStyle: 'bold',
  },
  date: {
    color: colors.orange,
    fontStyle: 'bold',
  },
  title: {
    padding: 10,
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 15,
  },
  footer: {
    alignItems: 'flex-end',
  },
  like_container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: colors.orange,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  like_count_container: {
    backgroundColor: colors.orange,
    borderRadius: 20,
    margin: 3,
    padding: 6,
  },
  like_count_text: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  like_text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
})
