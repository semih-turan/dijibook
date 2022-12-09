import { FlatList, View } from 'react-native';
import BookCard from '~/components/Card/BookCard';

const Favorites = () => {
    const renderFavorites = ({ item }) => <BookCard book={item} onPress={null} />
    return (
        <View>
            <FlatList
                data={null}
                renderItem={renderFavorites}
                numColumns={3}
            />
        </View>
    );
};

export default Favorites;