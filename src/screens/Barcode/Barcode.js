import * as React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCameraDevices } from 'react-native-vision-camera';
import { Camera } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';

import { connect } from 'react-redux';
import { requestAllProducts } from '~/redux/actions/app';


const mapStateToProps = states => ({ app: states.app });
const mapDispatchToProps = dispatch => ({ dispatch });

const App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(props => {
    const { dispatch, app, navigation } = props;
    const [contentList, setContentList] = React.useState([]);
    const [activeNames, setActiveNames] = React.useState('');
    const [hasPermission, setHasPermission] = React.useState(false);
    const [takePhotoButtonPressed, setTakePhotoButtonPressed] = React.useState(false);

    const devices = useCameraDevices();
    const device = devices.back;

    const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.ALL_FORMATS], {
        checkInverted: true,
    });

    React.useEffect(() => {
        dispatch(requestAllProducts());
        (async () => {
            const status = await Camera.requestCameraPermission();
            setHasPermission(status === 'authorized');
        })();
    }, []);

    const barcode_text = barcodes.map((barcode) => (barcode.displayValue))[0];
    const barcode_book=app.books?.filter(books => books.isbn.includes(barcode_text))[0];

    if (barcode_text?.length >5) {
        navigation.navigate('Details',barcode_book);
    }
    

    return (
        device != null &&
        hasPermission && (
            <>
                <Camera
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive={true}
                    frameProcessor={frameProcessor}
                    frameProcessorFps={5}
                />
                {barcodes.map((barcode, idx) => (
                    <Text key={idx} style={styles.barcodeTextURL}>
                        {barcode.displayValue}
                    </Text>
                ))}
                <TouchableOpacity
                    onPressIn={() => setTakePhotoButtonPressed(true)}
                    onPressOut={() => setTakePhotoButtonPressed(false)}
                    onPress={() => handleSelectedBook(barcode.displayValue)}
                    style={takePhotoButtonPressed ? styles.takePhotoButtonPressed : styles.takePhotoButton}
                />
            </>
        )
    );
});
export default App;

const styles = StyleSheet.create({
    barcodeTextURL: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'red',
    }, takePhotoButton: {
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
});