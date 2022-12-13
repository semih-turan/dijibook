import React, { useEffect } from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import BookCard from '~/components/Card/BookCard';
import styles from './MyBook.style';

import { showMessage } from 'react-native-flash-message';
import { connect } from 'react-redux';

import { firebaseMyBookListener, requestRemoveMyBookFromFirebase } from '~/redux/actions/app';
import BookCardDelete from '~/components/Card/BookCardDelete';
import DeleteButton from '~/components/DeleteButton/DeleteButton';

const mapStateToProps = states => ({ app: states.app });
const mapDispatchToProps = dispatch => ({ dispatch });

const MyBook = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const { app, dispatch } = props;

  useEffect(() => {
    dispatch(firebaseMyBookListener());
    return () => {
      if (global.firebaseProductsListenerOff) {
        global.firebaseProductsListenerOff();
      }
    };
  }, []);

  const checkOut = async () => {
    try {
    } catch (error) {
      return error;
    }
    showMessage({ message: 'Items will be Deliverd SOON!', type: 'danger' });

    props.navigation.navigate('Home');
  };
  // const a = JSON.stringify(app.fbFavorites);
  // console.log("Favorites : " + a);
  const handleOnPress = (book) => {
    props.navigation.navigate('Details', book);
  };
  const renderMyBook = ({ item }) => {
    return (
      <View style={styles.container}>
        <BookCardDelete book={item} onPress={()=> handleOnPress(item)} />
        <DeleteButton handlePress={() => dispatch(requestRemoveMyBookFromFirebase(item.key, item.value))} />
      </View>
    );
  };
  return (
    <View>
      <FlatList data={app.MyBook} renderItem={renderMyBook} numColumns={2} />
    </View>
  );
});

export default MyBook;
