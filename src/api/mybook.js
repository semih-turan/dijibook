import database from '@react-native-firebase/database';

export const addMyBookToFirebase = async (item, uid) => {
    try {
        const test = database().ref(`/user_mybook/${uid}`).push();
        await test.set(item);
        const val = { key: test.key };
        return { data: { val }, success: true };
    } catch (error) {
        console.error(error);
    }
    return { data: null, success: false };
};

export const removeMyBookFromFirebase = async (uid, key, value) => {
    console.log('UİD =>', uid);
    try {
        await database().ref(`/user_mybook/${uid}/${key}`).remove();

        return { data: {}, success: true };
    } catch (error) {
        console.error(error);
    }

    return { data: null, success: false };
};

export const getMyBookFromFirebase = async key => {
    try {
        const favoritesRef = database().ref('/books');
        const item = (await favoritesRef.child(key).once('value')).val();
        return { data: item, success: true };
    } catch (error) {
        console.error(error);
    }

    return { data: null, success: false };
};

export const getAllMyBookFromFirebase = async uid => {
    try {
        let keys = (
            await database().ref(`/user_mybook/${uid}`).once('value')
        ).val();

        let bookKey = keys && Object.keys(keys);
        let bookValue = keys && Object.values(keys);

        if (keys !== null) {
            keys = Object.values(keys);
        } else {
        }
        const favorites = [];

        for (let i = 0; i < keys?.length; i++) {
            let data = (await getMyBookFromFirebase(keys[i])).data;
            favorites.push({ ...data, key: bookKey[i], value: bookValue[i] })
        }

        return { data: favorites, success: true };
    } catch (error) {
        console.error(error);
    }

    return { data: null, success: false };
};

export const firebaseMyBookListener = async (uid, callBack) => {
    if (global.firebaseMyBookListenerOff) {
        global.firebaseMyBookListenerOff();
    }

    try {
        const ref = database().ref(`/user_mybook/${uid}`);
        ref.on('value', d => callBack(d.val()));
        global.firebaseFavoritesListenerOff = ref.off;

        return { data: null, success: true };
    } catch (error) {
        console.error(error);
    }

    return { data: null, success: false };
};