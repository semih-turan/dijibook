import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import PushNotification from 'react-native-push-notification';

export default ForegroundHandler =()=>{
    useEffect(()=>{
        const unSubscribe = messaging().onMessage(async remoteMessage => {
            console.log('Notification in Forground', remoteMessage);
            const {messageId,notification}=remoteMessage
            PushNotification.localNotification({
                channelId: "channel-id",
                messageId: messageId,
                title: notification.title, // (optional)
                body:notification.body,
                soundName: "default",
                vibrate:true,
                playSound:true,
                //message: "My Notification Message", // (required)
            });
        });
        return unSubscribe;
    },[]);
    return null;
}