import React, { useEffect } from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import BookCard from '~/components/Card/BookCard';
import styles from './Favorites.style';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { showMessage } from 'react-native-flash-message';
import { connect } from 'react-redux';

import { firebaseFavoritesListener, requestRemoveFavoriteFromFirebase } from '~/redux/actions/app';
import BookCardDelete from '~/components/Card/BookCardDelete';
import DeleteButton from '~/components/DeleteButton/DeleteButton';

const mapStateToProps = states => ({ app: states.app });
const mapDispatchToProps = dispatch => ({ dispatch });

const Favorites = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const { app, dispatch } = props;

  useEffect(() => {
    dispatch(firebaseFavoritesListener());
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
  const renderFavorites = ({ item }) => {
    return (
      <View style={styles.card}>
        <BookCardDelete book={item} onPress={()=> handleOnPress(item)} />
        <DeleteButton handlePress={() => dispatch(requestRemoveFavoriteFromFirebase(item.key, item.value))} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={app.fbFavorites} renderItem={renderFavorites} numColumns={2} />
    </View>
  );
});

export default Favorites;
