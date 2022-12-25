import React, { useEffect } from 'react';
import { FlatList, View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import BookCard from '~/components/Card/BookCard';
import BookHomeCard from '~/components/Card/BookHomeCard';

import styles from './Home.style';
import Button from '~/components/Button';
import { colors } from '~/themes';
import { connect } from 'react-redux';
import { requestAllProducts } from '~/redux/actions/app';

const mapStateToProps = states => ({ app: states.app });
const mapDispatchToProps = dispatch => ({ dispatch });

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const { dispatch, app, navigation } = props;
  const [contentList, setContentList] = React.useState([]);
  const [activeNames, setActiveNames] = React.useState('');

  const handleOnPress = book => {
    props.navigation.navigate('Details', book);
  };

  useEffect(() => {
    dispatch(requestAllProducts());
  }, []);
  const renderContent = ({ item }) => <BookHomeCard book={item} onPress={() => handleOnPress(item)} />;
  // Firebase'den alınan kitap verisi entegre edildiğinde aşağıdaki kod kullanılabilir.
  const handleSelectedBook = category => {
    setContentList(app.books?.filter(books => books.category.includes(category)));
    setActiveNames(category);
  };

  return (
    <View style={styles.topContainer}>
      <View style={styles.container}>
        <View style={styles.category}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableWithoutFeedback onPress={() => handleSelectedBook('')}>
              <Text style={[styles.categoryItem, activeNames === '' && styles.active]}>All</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handleSelectedBook('Roman')}>
              <Text style={[styles.categoryItem, activeNames === 'Roman' && styles.active]}>Novel</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handleSelectedBook('Şiir')}>
              <Text style={[styles.categoryItem, activeNames === 'Şiir' && styles.active]}>Poem</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handleSelectedBook('Deneme')}>
              <Text style={[styles.categoryItem, activeNames === 'Deneme' && styles.active]}>Essay</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handleSelectedBook('Biyografi')}>
              <Text style={[styles.categoryItem, activeNames === 'Biyografi' && styles.active]}>Biography</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handleSelectedBook('Edebiyat İnceleme')}>
              <Text style={[styles.categoryItem, activeNames === 'Edebiyat İnceleme' && styles.active]}>
                Literature Critism
              </Text>
            </TouchableWithoutFeedback>
          </ScrollView>
        </View>
        <View style={styles.flatlist}>
          <FlatList data={!!contentList.length ? contentList : app.books} renderItem={renderContent} />
        </View>
      </View>
    </View>
  );
});

export default Home;
