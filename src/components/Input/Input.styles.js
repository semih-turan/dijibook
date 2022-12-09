import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'black',
  },
  input: {
    flex: 1,
    padding: Platform.OS === 'android' ? 0 : 5,
  },
});
