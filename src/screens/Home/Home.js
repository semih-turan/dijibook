/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import BookCard from '~/components/Card/BookCard';
import styles from './Home.style';
import database from '@react-native-firebase/database';
import Button from '~/components/Button';
import parseContentData from '~/utils/contentData';
import { colors } from '~/themes';

const Home = ({ navigation }) => {
  const [contentList, setContentList] = React.useState([]);
  const [list, setList] = React.useState('');
  const [activeAll, setActiveAll] = React.useState(true);
  const [activeRoman, setActiveRoman] = React.useState(false);
  const [activeSiir, setActiveSiir] = React.useState(false);
  const [activeDeneme, setActiveDeneme] = React.useState(false);
  const [activeBiyografi, setActiveBiyografi] = React.useState(false);
  const [activeEdebiyat, setActiveEdebiyat] = React.useState(false);

  const handleOnPress = book => {
    navigation.navigate('Details', book);
  };

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

  const renderContent = ({ item }) => <BookCard book={item} onPress={() => handleOnPress(item)} />;

  // Firebase'den alınan kitap verisi entegre edildiğinde aşağıdaki kod kullanılabilir.
  const handleSelectedAll = category => {
    const filtered = list;
    setContentList(filtered);
    setActiveAll(true);
    setActiveRoman(false);
    setActiveSiir(false);
    setActiveDeneme(false);
    setActiveBiyografi(false);
    setActiveEdebiyat(false);
  };
  const handleSelectedRoman = category => {
    const filtered = list.filter(books => books.category === 'Roman');
    setContentList(filtered);
    setActiveRoman(true);
    setActiveAll(false);
    setActiveSiir(false);
    setActiveDeneme(false);
    setActiveBiyografi(false);
    setActiveEdebiyat(false);
  };
  const handleSelectedSiir = category => {
    const filtered = list.filter(books => books.category === 'Şiir');
    setContentList(filtered);
    setActiveSiir(true);
    setActiveAll(false);
    setActiveRoman(false);
    setActiveDeneme(false);
    setActiveBiyografi(false);
    setActiveEdebiyat(false);
  };
  const handleSelectedDeneme = category => {
    const filtered = list.filter(books => books.category === 'Deneme');
    setContentList(filtered);
    setActiveDeneme(true);
    setActiveAll(false);
    setActiveRoman(false);
    setActiveSiir(false);
    setActiveBiyografi(false);
    setActiveEdebiyat(false);
  };
  const handleSelectedBiyografi = category => {
    const filtered = list.filter(books => books.category === 'Biyografi');
    setContentList(filtered);
    setActiveBiyografi(true);
    setActiveAll(false);
    setActiveRoman(false);
    setActiveSiir(false);
    setActiveDeneme(false);
    setActiveEdebiyat(false);
  };
  const handleSelectedEdebiyatInceleme = category => {
    const filtered = list.filter(books => books.category === 'Edebiyat İnceleme');
    setContentList(filtered);
    setActiveEdebiyat(true);
    setActiveAll(false);
    setActiveRoman(false);
    setActiveSiir(false);
    setActiveDeneme(false);
    setActiveBiyografi(false);
  };

  return (
    <View style={styles.topContainer}>
      <View style={styles.container}>
        <View style={styles.category}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableWithoutFeedback onPress={handleSelectedAll}>
              <Text
                style={[
                  styles.categoryItem,
                  {
                    color: activeAll ? colors.orange : 'black',
                    borderColor: activeAll ? colors.orange : 'black',
                    backgroundColor: activeAll ? colors.white : 'white',
                  },
                ]}>
                All
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleSelectedRoman}>
              <Text
                style={[
                  styles.categoryItem,
                  {
                    color: activeRoman ? colors.orange : 'black',
                    borderColor: activeRoman ? colors.orange : 'black',
                    backgroundColor: activeRoman ? colors.white : 'white',
                  },
                ]}>
                Roman
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleSelectedSiir}>
              <Text
                style={[
                  styles.categoryItem,
                  {
                    color: activeSiir ? colors.orange : 'black',
                    borderColor: activeSiir ? colors.orange : 'black',
                    backgroundColor: activeSiir ? colors.white : 'white',
                  },
                ]}>
                Siir
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleSelectedDeneme}>
              <Text
                style={[
                  styles.categoryItem,
                  {
                    color: activeDeneme ? colors.orange : 'black',
                    borderColor: activeDeneme ? colors.orange : 'black',
                    backgroundColor: activeDeneme ? colors.white : 'white',
                  },
                ]}>
                Deneme
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleSelectedBiyografi}>
              <Text
                style={[
                  styles.categoryItem,
                  {
                    color: activeBiyografi ? colors.orange : 'black',
                    borderColor: activeBiyografi ? colors.orange : 'black',
                    backgroundColor: activeBiyografi ? colors.white : 'white',
                  },
                ]}>
                Biyografi
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleSelectedEdebiyatInceleme}>
              <Text
                style={[
                  styles.categoryItem,
                  {
                    color: activeEdebiyat ? colors.orange : 'black',
                    borderColor: activeEdebiyat ? colors.orange : 'black',
                    backgroundColor: activeEdebiyat ? colors.white : 'white',
                  },
                ]}>
                Edebiyat Inceleme
              </Text>
            </TouchableWithoutFeedback>
          </ScrollView>
        </View>
        <View style={styles.flatlist}>
          <FlatList data={contentList} renderItem={renderContent} numColumns={2} />
        </View>
      </View>
    </View>
  );
};

export default Home;
