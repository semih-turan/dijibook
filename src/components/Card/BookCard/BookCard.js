import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './BookCard.style';

const BookCard = ({ book, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: book.image }} />
        <Text ellipsizeMode="tail" numberOfLines={3} style={styles.bookName}>
          {book.bookName}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BookCard;
