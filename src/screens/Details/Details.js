import { View } from 'react-native';
import DetailsCard from '~/components/Card/DetailsCard';

const Details = ({ route }) => {
  const book = route.params;
  return (
    <View>
      <DetailsCard books={book} />
    </View>
  );
};

export default Details;
