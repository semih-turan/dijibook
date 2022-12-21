import * as React from 'react';

import { StyleSheet, Text } from 'react-native';
import { useCameraDevices } from 'react-native-vision-camera';
import { Camera } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';

export default function App() {
    const [hasPermission, setHasPermission] = React.useState(false);
    const devices = useCameraDevices();
    const device = devices.back;

    const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.ALL_FORMATS], {
        checkInverted: true,
    });

    // Alternatively you can use the underlying function:
    //
    // const frameProcessor = useFrameProcessor((frame) => {
    //   'worklet';
    //   const detectedBarcodes = scanBarcodes(frame, [BarcodeFormat.QR_CODE], { checkInverted: true });
    //   runOnJS(setBarcodes)(detectedBarcodes);
    // }, []);

    React.useEffect(() => {
        (async () => {
            const status = await Camera.requestCameraPermission();
            setHasPermission(status === 'authorized');
        })();
    }, []);

    const barcode_text=barcodes.map((barcode)=>(barcode.displayValue));
    console.log(barcode_text);
    if (barcode_text.length > 5) {
        console.log(barcode_text);
        navigation.navigate('Search', { barcode_text: barcode_text });
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
            </>
        )
    );
}

const styles = StyleSheet.create({
    barcodeTextURL: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'red',
    },
});