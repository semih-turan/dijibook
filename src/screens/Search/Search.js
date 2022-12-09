/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import { FlatList, View, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';
import BookCard from '~/components/Card/BookCard';
import database from '@react-native-firebase/database';
import parseContentData from '~/utils/contentData';
import SearchBar from '~/components/SearchBar';
import styles from './Search.style';

const Search = ({navigation}) => {
  const [contentList, setContentList] = React.useState([]);
  React.useEffect(() => {
    database()
      .ref('/books')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
        setList(parsedData);
      });
  }, []);

  // navigation alacak.
  const [list, setList] = useState(contentList); // useState içerisine firebase'den books gelecek.
  const handleOnPress = book => {
    navigation.navigate('Details', book);
  };
  const renderBooks = ({ item }) => <BookCard book={item} onPress={() => handleOnPress(item)} />; // handleOnPress item prop'unu alacak.
  // Firebase'den alınan kitap verisi entegre edildiğinde aşağıdaki kod kullanılabilir.
  const handleSearch = text => {
    const filteredBook = contentList.filter(book => {
      const searchedText = text.toLowerCase();
      const currentBookName = book.bookName.toLowerCase();
      return currentBookName.indexOf(searchedText) > -1;
    });
    setList(filteredBook);
  };
  return (
    <View>
      <View style={null}>
        <SearchBar onSearch={handleSearch} />
      </View>
      <View style={styles.container}>
        <FlatList data={list} renderItem={renderBooks} numColumns={2} />
      </View>
    </View>
  );
};

export default Search;
