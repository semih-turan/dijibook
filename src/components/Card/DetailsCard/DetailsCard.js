/* eslint-disable react/react-in-jsx-scope */
import { Image, ScrollView, Text, View } from 'react-native';
import styles from './DetailsCard.style';

const DetailsCard = ({ books }) => {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Image style={styles.image} source={{ uri: books.image }} />
          <View style={styles.upperInfo}>
            <Text style={styles.upperInfoTitle}>{books.bookName}</Text>
            <Text style={styles.upperInfoSubtitle}>by {books.author}</Text>
            <View style={styles.upperSubinfo}>
              {books.pages && (
                <View style={styles.subInfoText}>
                  <Text style={styles.subInfoTextFirst}>Pages</Text>
                  <Text style={styles.subInfoTextSecond}>{books.pages}</Text>
                </View>
              )}
              {books.publicationDate && (
                <View style={styles.subInfoText}>
                  <Text style={styles.subInfoTextFirst}>Year</Text>
                  <Text style={styles.subInfoTextSecond}>{books.publicationDate}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
        <View style={styles.lowerContainer}>
          <View style={styles.lowerInfo}>
            {books.category && (
              <View style={styles.subInfoText}>
                <Text style={styles.subInfoTextThird}>Category</Text>
                <Text style={styles.subInfoTextFourth}>{books.category}</Text>
              </View>
            )}
            {books.isbn && (
              <View style={styles.subInfoText}>
                <Text style={styles.subInfoTextThird}>ISBN</Text>
                <Text style={styles.subInfoTextFourth}>{books.isbn}</Text>
              </View>
            )}
            {books.publisher && (
              <View style={styles.subInfoText}>
                <Text style={styles.subInfoTextThird}>Publisher</Text>
                <Text style={styles.subInfoTextFourth}>{books.publisher}</Text>
              </View>
            )}
            {books.interpreter && (
              <View style={styles.subInfoText}>
                <Text style={styles.subInfoTextThird}>Interpreter</Text>
                <Text style={styles.subInfoTextFourth}>{books.interpreter}</Text>
              </View>
            )}
            {books.language && (
              <View style={styles.subInfoText}>
                <Text style={styles.subInfoTextThird}>Language</Text>
                <Text style={styles.subInfoTextFourth}>{books.language}</Text>
              </View>
            )}
          </View>
          <Text style={styles.title}>{books.title}</Text>
          <Text style={styles.text}>{books.text}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsCard;
