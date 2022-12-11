import database from '@react-native-firebase/database';

export const addFavoriteToFirebase = async (item, uid) => {
    try {       
        const test=database().ref(`/user_favorites/${uid}`).push();
        await test.set(item);
        console.log("Add Favorites:" + test);
        const val = { key: test.key };
        return { data: { val }, success: true };
    } catch (error) {
        console.error(error);
    }
    return { data: null, success: false };
};

export const removeFavoriteFromFirebase = async uid => {
    console.log('UİD =>', uid);
    try {
        await database().ref(`/user_favorites/${uid}`).remove();

        return { data: {}, success: true };
    } catch (error) {
        console.error(error);
    }

    return { data: null, success: false };
};

export const getFavoriteFromFirebase = async key => {
    try {
        const favoritesRef = database().ref('/books');
        const item = (await favoritesRef.child(key).once('value')).val();
        return { data: item, success: true };
    } catch (error) {
        console.error(error);
    }

    return { data: null, success: false };
};

export const getAllFavoritesFromFirebase = async uid => {
    try {
        let keys = (
            await database().ref(`/user_favorites/${uid}`).once('value')
        ).val();
        if (keys !== null) {
            keys = Object.values(keys);
        } else {
        }

        const favorites = [];

        for (let i = 0; i < keys?.length; i++) {
            favorites.push((await getFavoriteFromFirebase(keys[i])).data);
        }

        return { data: favorites, success: true };
    } catch (error) {
        console.error(error);
    }

    return { data: null, success: false };
};

export const firebaseFavoritesListener = async (uid, callBack) => {
    if (global.firebaseFavoritesListenerOff) {
        global.firebaseFavoritesListenerOff();
    }

    try {
        const ref = database().ref(`/user_favorites/${uid}`);
        ref.on('value', d => callBack(d.val()));

        global.firebaseFavoritesListenerOff = ref.off;
        console.log("APi Favorite Listiner:" + data);

        return { data: null, success: true };
    } catch (error) {
        console.error(error);
    }

    return { data: null, success: false };
};