import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BarcodeScanner from './BarcodeScanner';
import { DCVBarcodeReader } from 'dynamsoft-capture-vision-react-native';

(async () => {
    try {
        await DCVBarcodeReader.initLicense("DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAxNTEyNTI2LVRYbE5iMkpwYkdWUWNtOXFYMlJpY2ciLCJvcmdhbml6YXRpb25JRCI6IjEwMTUxMjUyNiIsImNoZWNrQ29kZSI6MTAxMTE2NjY1MX0=");
    } catch (e) {
        console.log(e);
    }
})();

function HomeScreen({ navigation }) {
    return (
        <View style={styles.contentView}>
            <Button
                title="Start Scanning"
                onPress={() => navigation.navigate('Barcode')}
            />
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Barcode" component={BarcodeScanner} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
});

export default App;