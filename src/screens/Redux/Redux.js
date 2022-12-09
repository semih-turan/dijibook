import React, { useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import BookCard from '~/components/Card/BookCard';
import styles from '../Redux/Redux.style';
import database from '@react-native-firebase/database';
import Button from '~/components/Button';
import parseContentData from '~/utils/contentData';
import { connect } from 'react-redux';
import { requestAllProducts } from '~/redux/actions/app';


const mapStateToProps = states => ({ app: states.app});
const mapDispatchToProps = dispatch => ({ dispatch });

const Redux = connect(
    mapStateToProps,
    mapDispatchToProps,
)(props => {
    const { dispatch, app } = props;
    console.log("Dispach:" + app);
    useEffect(() => {
        dispatch(requestAllProducts());
    }, []);

    const renderContent = ({ item }) => (
        <BookCard book={item} onPress={() => handleOnPress()} />
    );
    console.log("item:" + app);




    return (
        <View style={styles.container}>
            {/* <Button icon="bookmark" text="Ekle" onPress={sendContent}/> */}
            <FlatList data={app} renderItem={renderContent} numColumns={3} />
        </View>
    );
});

export default Redux;

