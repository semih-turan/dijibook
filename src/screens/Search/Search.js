import React, { useState } from 'react';
import { FlatList, View, ScrollView, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import BookCard from '~/components/Card/BookCard';
import database from '@react-native-firebase/database';
import parseContentData from '~/utils/contentData';
import SearchBar from '~/components/SearchBar';
import styles from './Search.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Search = ({ navigation, route }) => {
  const [contentList, setContentList] = React.useState([]);

  const barcodeText = route.params?.barcode_text;
  React.useEffect(() => {
    database()
      .ref('/books')
      .once('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
        setList(parsedData);
        handleSearch("9786055340629"); 
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
  const handleOnPressBarcode = () => {
    navigation.navigate('BarcodeRead');
  };

  return (
    <View>
      <View style={styles.searchbar}>
        <SearchBar onSearch={handleSearch} />
        <View style={styles.barcode}>
          <TouchableOpacity onPress={handleOnPressBarcode}>
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
