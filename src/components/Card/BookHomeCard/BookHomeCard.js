import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import styles from './BookHomeCard.style';
import { FONTS, COLORS, SIZES, icons } from '~/constants';

const BookCard = ({ book, onPress }) => {
  return (
    <View style={{ marginVertical: SIZES.base }}>
    <TouchableOpacity onPress={onPress} style={{ flex: 1, flexDirection: 'row' }}>
          <Image resizeMode="cover"  style={{ width: 100, height: 150, borderRadius: 10 }} source={{ uri: book.image }} />
          <View style={{ flex: 1, marginLeft: SIZES.radius }}>
            {/* Book name and author */}
            <View>
              <Text style={{ paddingRight: SIZES.padding, ...FONTS.h3, color: COLORS.white }}>{book.bookName}</Text>
              <Text style={{ ...FONTS.h4, color: COLORS.lightGray }}>{book.author}</Text>
            </View>

            {/* Book Info */}
            <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
              <Image  source={icons.page_filled_icon}  resizeMode="contain"  style={{  width: 20, height: 20, tintColor: COLORS.lightGray }} />
            <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{book.pages}</Text>

              <Image source={icons.page_icon} resizeMode="contain"   style={{ width: 20, height: 20, tintColor: COLORS.lightGray }} />
            <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{book.price}</Text>
            </View>

            {/* Genre */}
            <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>{book.category}</Text>
                </View>             
            </View>
          </View>
    </TouchableOpacity>
    </View>
  );
};

export default BookCard;
