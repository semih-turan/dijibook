import { Dimensions, StyleSheet } from 'react-native';
import { text } from '~/configs';
import { colors } from '~/themes';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
  background: {
    backgroundColor: colors.white,
  },
  container: {
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.025,
  },
  upperContainer: {
    flexDirection: 'row',
  },
  image: {
    width: width * 0.4,
    height: height * 0.32,
    resizeMode: 'contain',
  },
  upperInfo: {
    marginLeft: width * 0.025,
    justifyContent: 'center',
    flex: 1,
  },
  upperInfoTitle:{
    fontFamily: 'Montserrat-Bold',
    fontSize: text.H4,
    color: 'black',
  },
  upperInfoSubtitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: text.H7,
    color: colors.gray,
  },
  upperSubinfo: {
    marginTop: height * 0.1,
  },
  subInfoText: {
    flexDirection: 'row',
  },
  subInfoTextFirst: {
    width: width * 0.15,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: text.H9,
    color: colors.gray,
  },
  subInfoTextSecond: {
    width: width * 0.2,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: text.H9,
    color: 'black',
  },
  lowerContainer: {
    width: width * 0.9,
    marginTop: height * 0.05,
  },
  lowerInfo: {
    justifyContent: 'center',
    flex: 1,
    marginBottom: width * 0.025,
  },
  subInfoTextThird: {
    width: width * 0.2,
    borderRightWidth: 1,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: text.H9,
    color: colors.gray,
  },
  subInfoTextFourth: {
    width: width * 0.5,
    marginLeft: width * 0.05,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: text.H9,
    color: 'black',
  },
  title: {
    marginTop: height * 0.03,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: text.H4,
    color: 'black',
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: text.H8,
    color: colors.gray,
    textAlign: 'justify',
  },
});
