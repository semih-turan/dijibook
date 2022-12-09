import { StyleSheet } from 'react-native';
import { spacing } from '~/configs';

export default StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: '#00000000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        textAlign: 'center',
    },
    headerRight: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});