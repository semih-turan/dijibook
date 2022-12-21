import { View } from 'react-native';
import DetailsCard from '~/components/Card/DetailsCard';
import { Navigation } from '~/navigation';

const Details = ({ route, navigation }) => {
  const book = route.params;
  console.log(book);
  const handleOnPress = () => {
    navigation.navigate('AddBook');
  };
  return (
    <View>
      <DetailsCard books={book} onPress={handleOnPress} />
    </View>
  );
};

export default Details;
