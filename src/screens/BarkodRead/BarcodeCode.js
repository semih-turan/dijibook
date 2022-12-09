import { DynamsoftBarcodeReader } from 'dynamsoft-capture-vision-react-native';
class App extends React.Component {
    componentDidMount() {
        (async () => {
            try {
                await DynamsoftBarcodeReader.initLicense("DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAxNTEyNTI2LVRYbE5iMkpwYkdWUWNtOXFYMlJpY2ciLCJvcmdhbml6YXRpb25JRCI6IjEwMTUxMjUyNiIsImNoZWNrQ29kZSI6MTAxMTE2NjY1MX0=");
            } catch (e) {
                console.log(e);
            }
        })();
    }
}