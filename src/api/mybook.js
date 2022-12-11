import database from '@react-native-firebase/database';

export const addMyBookToFirebase = async (item, uid) => {
    try {
        const test = database().ref(`/user_mybook/${uid}`).push();
        await test.set(item);
        console.log("Add mybook:" + test);
        const val = { key: test.key };
        return { data: { val }, success: true };
    } catch (error) {
        console.error(error);
    }
    return { data: null, success: false };
};