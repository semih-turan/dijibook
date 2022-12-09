import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
    container: {
        marginHorizontal: width * 0.05,
    },
});