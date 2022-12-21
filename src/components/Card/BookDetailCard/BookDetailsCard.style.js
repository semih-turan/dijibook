import { Dimensions, StyleSheet } from 'react-native';
import { text } from '~/configs';
import { colors } from '~/themes';
import { FONTS, COLORS, SIZES, icons } from '~/constants';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
  MainContainer:{ flex: 1, backgroundColor: COLORS.black },
  InfoContainer: { flex: 1 },
  InfoImageBackgroundContainer: { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 },
  InfoImageBackground: { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(240,240,232,0.9)' },
  InfoNavbarContainer: { flexDirection: 'row', paddingHorizontal: SIZES.radius, height: 80, alignItems: 'flex-end' },
  InfoImageBackground: { marginLeft: SIZES.base },
  InfoImageBackgroundImage:{  width: 25, height: 25, resizeMode:'contain'  },
  InfoNavbarTextContainer:{ flex: 1, alignItems: 'center', justifyContent: 'center' },
  InfoNavbarTextHeader:{ ...FONTS.h3 },
  InfoNavbarMoreImage:{    width: 30,    height: 30,    tintColor:'red',    alignSelf: 'flex-end'},
  BookImageContainer: {    width: width * 0.4,    height: height * 0.32,    flex: 5,    paddingTop: SIZES.padding2,    alignItems: 'center'  },
  BookImageCoverStyle:{    flex: 1,    width: 150,    height: "auto",  alignItems: 'center' },
  BookNavBookAuthorContainer: {    flex: 1.8,    alignItems: 'center',    justifyContent: 'center',  },
  BookNavBookText: {    ...FONTS.h2,    color: colors.white,  },
  BookNavAuthorText: {    ...FONTS.body3,    color: colors.white,  },
  BookNavPublisText: {    ...FONTS.body4,    color: colors.white,  },
  NavInfoContainer: { flexDirection: 'row', paddingVertical: 20, margin: SIZES.radius,  borderRadius: SIZES.radius,  backgroundColor: 'rgba(0,0,0,0.3)' },
  NavInfoTextCon:{ flex: 1, alignItems: 'center' },
  NavInfoTextConCen:{ flex: 1, paddingHorizontal: SIZES.radius, alignItems: 'center' },
  NavInfoValue:{ ...FONTS.h3, color: COLORS.white },
  NavInfoText:{ ...FONTS.body4, color: COLORS.white },
  DescriptContain:{ flex: 1, flexDirection: 'row', padding: SIZES.padding },
  DescriptAnimatedContain:{ width: 4, height: "100%", backgroundColor: COLORS.gray1 },
  DescriptAnimatedView:{},
  DescriptContainStyle:{ paddingLeft: SIZES.padding2 },
  DescriptTextStyle:{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.padding },
  DescriptDesText:{ ...FONTS.body2, color: COLORS.lightGray },
  BottomGrupContainer:{ flex: 1, flexDirection: 'row' },
  BottomGrupAddMy:{ flex: 1, backgroundColor: COLORS.primary, marginHorizontal: SIZES.base, marginVertical: SIZES.base, borderRadius: SIZES.radius, alignItems: 'center', justifyContent: 'center'},
  addMyBook: {    width: 60,    backgroundColor: COLORS.secondary,    marginLeft: SIZES.padding, marginVertical: SIZES.base,borderRadius: SIZES.radius, alignItems: 'center',  justifyContent: 'center'},
  addBook: { height: height * 0.075, justifyContent: 'center', backgroundColor: 'black', borderRadius: 10, borderWidth: 1, marginLeft: width * 0.075, width: width * 0.125,  alignItems: 'center',  },
  addFav: { height: height * 0.075, justifyContent: 'center', backgroundColor: 'black', borderRadius: 10, borderWidth: 1,marginLeft: width * 0.075, width: width * 0.125,  alignItems: 'center',  }, 
  addMyBookText: {    color: 'white',    fontFamily: 'Montserrat-ExtraBold',    fontSize: text.H3,    textAlign: 'center',  },
 

  
  
  
});
