import React, { useEffect, useState, useRef } from 'react';
import { Text, TouchableOpacity, View, useWindowDimensions, Image, LayoutAnimation } from 'react-native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';
import styles from "./BCamera.style";

const BCamera = props => {
    const dual = useCameraDevices('dual-camera');
    const dualWide = useCameraDevices('dual-wide-camera');
    const telephoto = useCameraDevices('telephoto-camera');
    const triple = useCameraDevices('triple-camera');
    const ultraWideAngle = useCameraDevices('ultra-wide-angle-camera');
    const wideAngle = useCameraDevices('wide-angle-camera');

    const cameraRef = useRef();

    const { width, height } = useWindowDimensions();

    const [front, setFront] = useState({});
    const [back, setBack] = useState({});

    const [frontDevices, setFrontDevices] = useState([]);
    const [backDevices, setBackDevices] = useState([]);

    const [recording, setRecording] = useState(false);
    const [type, setType] = useState('photo');
    const [frontOrBack, setFrontOrBack] = useState('back');
    const [selectedDeviceName, setSelectedDeviceName] = useState();

    const [CameraIsOk, setCameraIsOK] = useState(false);

    const [takePhotoButtonPressed, setTakePhotoButtonPressed] = useState(false);
    const [lastPhotoPath, setLastPhotoPath] = useState('');

    useEffect(() => {
        permissionCheck();
        getAvailableCameraDevices();
        return () => { };
    }, []);

    const setCameraType = d => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setType(d);
    };

    const permissionCheck = async () => {

        if (check(PERMISSIONS.ANDROID.CAMERA) !== RESULTS.GRANTED) {
            await request(PERMISSIONS.ANDROID.CAMERA);
        }

        if (check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE) !== RESULTS.GRANTED) {
            await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
        }

        if (check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE) !== RESULTS.GRANTED) {
            await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
        }
    };

    const getAvailableCameraDevices = async () => {
        const devices = await Camera.getAvailableCameraDevices();

        if (devices.length > 0) {
            const backDevicesIndex = devices.findIndex(d => d.position === 'back');
            const frontDevicesIndex = devices.findIndex(d => d.position === 'front');

            setFrontDevices(devices[frontDevicesIndex].devices);
            setFront({ ...devices[frontDevicesIndex] });

            setBackDevices(devices[backDevicesIndex].devices);
            setBack({ ...devices[backDevicesIndex] });

            if (devices[backDevicesIndex].devices.length > 0) {
                setSelectedDeviceName(devices[backDevicesIndex].devices[0]);
            }

            setCameraIsOK(true);
        }
    };

    const getSelectedDevice = () => {
        switch (selectedDeviceName) {
            case 'dual-camera': return dual;
            case 'dual-wide-camera': return dualWide;
            case 'telephoto-camera': return telephoto;
            case 'triple-camera': return triple;
            case 'ultra-wide-angle-camera': return ultraWideAngle;
            case 'wide-angle-camera': return wideAngle;
        }
    };

    const takePhoto = async () => {
        const photo = await cameraRef.current.takePhoto({
            flash: 'on',
        });

        CameraRoll.save(`file://${photo.path}`, { type: 'photo' });
        setLastPhotoPath(`file://${photo.path}`);
    };

    const startRecording = () => {
        if (recording) {
            cameraRef.current.stopRecording();
            setRecording(false);
        } else {
            cameraRef.current.startRecording({
                flash: 'on',
                onRecordingFinished,
                onRecordingError,
            });
            setRecording(true);
        }
    };
    const onRecordingFinished = d => {
        console.log(d);
    };
    const onRecordingError = e => {
        console.error(e);
    };

    const selectedDevice = getSelectedDevice();

    return (
        <View style={styles.container}>
            {CameraIsOk && selectedDevice && (
                <Camera
                    ref={cameraRef}
                    style={styles.camera}
                    device={selectedDevice[frontOrBack]}
                    isActive
                    photo={type === 'photo'}
                    video={type === 'video'}
                />
            )}

            <View style={styles.subContainer}>
                <View style={styles.bottomContainer}>
                    <View style={styles.typePicker}>
                        <TouchableOpacity
                            style={[{ width: width * 0.14 }, styles.typeButton]}
                            onPress={() => setCameraType('video')}>
                            <Text style={styles.typeButtonText}>video</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[{ width: width * 0.14 }, styles.typeButton]}
                            onPress={() => setCameraType('photo')}>
                            <Text style={styles.typeButtonText}>photo</Text>
                        </TouchableOpacity>

                        <View style={[{ width: width * 0.14 }, styles.bottomBar, type === 'photo' && { left: null, right: 0 }]} />
                    </View>

                    <View style={styles.bottomSubContainer}>
                        <View style={[{ width: width * 0.14 }, styles.lastPhotoContainer]}>
                            {lastPhotoPath ? (
                                <Image
                                    source={{ uri: lastPhotoPath }}
                                    style={[styles.lastPhoto, { width: width * 0.14, height: width * 0.14 }]}
                                />
                            ) : null}
                        </View>

                        <TouchableOpacity
                            onPressIn={() => setTakePhotoButtonPressed(true)}
                            onPressOut={() => setTakePhotoButtonPressed(false)}
                            onPress={type === 'video' ? () => startRecording() : () => takePhoto()}
                            style={takePhotoButtonPressed ? styles.takePhotoButtonPressed : styles.takePhotoButton}
                        />

                        <View style={{ width: width * 0.14, margin: 16 }} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default BCamera;