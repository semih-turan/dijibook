import { StyleSheet } from 'react-native';
import colors from '~/configs/color';
export default StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: colors.orange,
    borderRadius: 15,
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    color: 'black',
    fontStyle: 'italic',
    fontSize: 15,
  },
  date: {
    color: 'black',
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
  dislike_container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  dislike_count_container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    margin: 3,
    padding: 6,
  },
  dislike_count_text: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  dislike_text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
})
