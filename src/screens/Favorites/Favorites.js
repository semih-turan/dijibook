import React,{useEffect} from 'react';
import { FlatList, View } from 'react-native';
import BookCard from '~/components/Card/BookCard';
import styles from './Favorites.style';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { showMessage } from "react-native-flash-message";
import { connect } from 'react-redux';

import { firebaseFavoritesListener, requestRemoveFavoriteFromFirebase} from '~/redux/actions/app';

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
        showMessage({ message: "Items will be Deliverd SOON!", type: 'danger' });

        props.navigation.navigate('Home');
    };


    const renderFavorites = ({ item }) => {
        return (
          <View >
            <BookCard book={item} onPress={null} />
            <TouchableOpacity
                onPress={() =>
                    dispatch(requestRemoProductFromFirebase(item.key, item.value))
                }>
                <MaterialCommunityIcons
                    name="delete-outline"
                    style={styles.deleteIcon}
                />
                </TouchableOpacity>
          </View>
        );
    };
    return (
        <View>
            <FlatList
                data={null}
                renderItem={renderFavorites}
                numColumns={3}
            />
        </View>
    );
});

export default Favorites;