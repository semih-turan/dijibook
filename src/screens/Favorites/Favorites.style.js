import { Dimensions, StyleSheet } from 'react-native';
import colors from '~/configs/color';
const height = Dimensions.get('window').height;

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: { 
        backgroundColor: colors.white,
    },
    card: {
        width: width * 0.42,
        height: height * 0.35,
        marginVertical: height * 0.025,
        marginHorizontal: width * 0.04,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: 'gray',
        backgroundColor: colors.yellow,
    },
});