import React, {useState} from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity, ImageBackground, Animated } from 'react-native';
import styles from './BookDetailsCard.style';
import { FONTS, COLORS, SIZES, icons } from '~/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import AddBook from '~/screens/AddBook';

import { requestAddMyBookToFirebase, requestAddFavoriteToFirebase } from '~/redux/actions/app';
const mapStateToProps = states => ({ app: states.app });
const mapDispatchToProps = dispatch => ({ dispatch });
const LineDivider = () => {
  return (
    <View style={{ width: 1, paddingVertical: 5 }}>
      <View style={{ flex: 1, borderLeftColor: COLORS.lightGray2, borderLeftWidth: 1 }}></View>
    </View>
  );
};

const DetailsCard = connect(  mapStateToProps,  mapDispatchToProps,)(props => {
  const { app, dispatch, books, onPress } = props;
  const [scrollViewWholeHeight, setScrollViewWholeHeight] = useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0);

  const indicator = new Animated.Value(0);

  const addFavorite = item => {
    dispatch(requestAddFavoriteToFirebase(item));
  };
  const addMyBook = item => {
    dispatch(requestAddMyBookToFirebase(item));
  };

  function renderBookDescription() {

    const indicatorSize = scrollViewWholeHeight > scrollViewVisibleHeight ? scrollViewVisibleHeight * scrollViewVisibleHeight / scrollViewWholeHeight : scrollViewVisibleHeight;
    const difference = scrollViewVisibleHeight > indicatorSize ? scrollViewVisibleHeight - indicatorSize : 1;

    return (
        <View style={styles.DescriptContain}>
            {/* Custom Scrollbar */}
            <View style={styles.DescriptAnimatedContain}>
                <Animated.View
                    style={{ width: 4, height: indicatorSize, backgroundColor: COLORS.lightGray4,
                        transform: [{
                            translateY: Animated.multiply(indicator, scrollViewVisibleHeight / scrollViewWholeHeight).interpolate({
                                inputRange: [0, difference],  outputRange: [0, difference], extrapolate: 'clamp' }) }] }} />
            </View>

            {/* Description */}
            <ScrollView  contentContainerStyle={styles.DescriptContainStyle} showsVerticalScrollIndicator={false}
                scrollEventThrottle={16} onContentSizeChange={(width, height) => { setScrollViewWholeHeight(height)}}
                onLayout={({ nativeEvent: { layout: { x, y, width, height } } }) => {setScrollViewVisibleHeight(height) }}
                onScroll={Animated.event( [{ nativeEvent: { contentOffset: { y: indicator } } }], { useNativeDriver: false } )} >
                <Text style={styles.DescriptTextStyle}>Description</Text>
                <Text style={styles.DescriptDesText}>{books.text}</Text>
            </ScrollView>
        </View>
    )
}
  return (
    <ScrollView style={styles.background}>
      <View style={styles.MainContainer}>
        <View style={styles.InfoContainer}>
          <ImageBackground
            source={{ uri: books.image }}
            style={styles.InfoImageBackgroundContainer}
            resizeMode="cover"
          />
          <View style={styles.InfoImageBackground}></View>

          {/* Navigation header */}
          <View style={styles.InfoNavbarContainer}>
            <TouchableOpacity style={styles.InfoImageBackground} onPress={() => navigation.goBack()}>
              <Image source={icons.back_arrow_icon} resizeMode="contain" style={styles.InfoImageBackgroundImage} />
            </TouchableOpacity>

            <View style={styles.InfoNavbarTextContainer}>
              <Text style={styles.InfoNavbarTextHeader}>Book Detail</Text>
            </View>

            <TouchableOpacity style={styles.InfoImageBackground} onPress={() => console.log('Click More')}>
              <Image source={icons.more_icon} resizeMode="contain" style={styles.InfoNavbarMoreImage} />
            </TouchableOpacity>
          </View>


          {/* Book Cover */}
          <View style={styles.BookImageContainer}>
            <Image style={styles.BookImageCoverStyle} source={{ uri: books.image } }  resizeMode="contain" />
          </View>

          {/* Book Name and Author */}
          <View style={styles.BookNavBookAuthorContainer}>
            <Text style={styles.BookNavBookText}>{books.bookName}</Text>
            <Text style={styles.BookNavAuthorText}>{books.author}</Text>
            <Text style={styles.BookNavPublisText}>{books.publisher}</Text>
          </View>

          {/* Book Info */}
          <View style={styles.NavInfoContainer}>
            {/* Rating */}
            <View style={styles.NavInfoTextCon}>
              <Text style={styles.NavInfoValue}>{books.rating}</Text>
              <Text style={styles.NavInfoText}>Rating</Text>
            </View>

            <LineDivider />

            {/* Pages */}
            <View style={styles.NavInfoTextConCen}>
              <Text style={styles.NavInfoValue}>{books.pages}</Text>
              <Text style={styles.NavInfoText}>Page</Text>
            </View>

            <LineDivider />  

            {/* Year */}
            <View style={styles.NavInfoTextConCen}>
              <Text style={styles.NavInfoValue}>{books.publicationDate}</Text>
              <Text style={styles.NavInfoText}>Year</Text>
            </View>

            <LineDivider />

            {/* Language */}
            <View style={styles.NavInfoTextCon}>
              <Text style={styles.NavInfoValue}>{books.language}</Text>
              <Text style={styles.NavInfoText}>Language</Text>
            </View>
          </View>
        </View>
    

        <View style={{ flex: 2 }}>
          {renderBookDescription()}
        </View>          
           
        <View style={styles.BottomGrupContainer}>
            <TouchableOpacity style={styles.BottomGrupAddMy} onPress={() => addMyBook(books.key)}>
              <Text style={styles.addMyBookText}>Add My Book</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addBook} onPress={onPress}>
              <Icon name="book-plus" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.addFav} onPress={() => addFavorite(books.key)}>
              <Icon name="bookmark-plus" size={40} color="white" />
            </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
});

export default DetailsCard;
