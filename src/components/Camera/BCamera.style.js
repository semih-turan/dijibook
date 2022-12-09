import { StyleSheet } from "react-native";
import colors from "~/themes/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        ...StyleSheet.absoluteFill,
    },
    subContainer: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'transparent',
    },

    bottomContainer: {
        ...StyleSheet.absoluteFill,
        top: null,
        backgroundColor: '#00000033',
    },
    bottomSubContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    typePicker: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    typeButton: {
        alignItems: 'center',
    },
    typeButtonText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
    },
    bottomBar: {
        height: 2,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        position: 'absolute',
        bottom: -2,
        left: 0,
        backgroundColor: '#fff',
    },
    takePhotoButton: {
        borderWidth: 3,
        borderRadius: 999,
        width: '14%',
        aspectRatio: 1,
        borderColor: '#fff',
        alignSelf: 'center',
        backgroundColor: '#00000044',
        margin: 16,
    },
    takePhotoButtonPressed: {
        borderWidth: 0,
        borderRadius: 999,
        width: '14%',
        aspectRatio: 1,
        alignSelf: 'center',
        backgroundColor: '#fff',
        margin: 16,
    },
    lastPhotoContainer: {
        margin: 16,
        aspectRatio: 1,
    },
    lastPhoto: {
        borderRadius: 999,
    },
});
