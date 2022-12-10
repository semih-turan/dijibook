/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import { FlatList, View, ScrollView, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import BookCard from '~/components/Card/BookCard';
import database from '@react-native-firebase/database';
import parseContentData from '~/utils/contentData';
import SearchBar from '~/components/SearchBar';
import styles from './Search.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      const currentIsbn = book.isbn;
      const currentAuthor = book.author.toLowerCase();
      const currentPublisher = book.publisher.toLowerCase();
      return (
        currentBookName.indexOf(searchedText) > -1 ||
        currentIsbn.indexOf(searchedText) > -1 ||
        currentAuthor.indexOf(searchedText) > -1 ||
        currentPublisher.indexOf(searchedText) > -1
      );
      return currentBookName.indexOf(searchedText) > -1;
    });
    setList(filteredBook);
  };
  return (
    <View>
      <View style={styles.searchbar}>
        <SearchBar onSearch={handleSearch} />
        <View style={styles.barcode}>
          <TouchableOpacity>
            <Icon name="barcode" size={56} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <FlatList data={list} renderItem={renderBooks} numColumns={2} />
      </View>
    </View>
  );
};

export default Search;
