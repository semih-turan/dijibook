import database from '@react-native-firebase/database';

export const addProductToFirebase = async (item, uid) => {
  try {
    const ref = database().ref('/books').push();
    const key = ref.key;

    await ref.set(item);
    await database().ref(`/user_books/${uid}`).push().set(key);

    return { data: {}, success: true };
  } catch (error) {
    console.error(error);
  }

  return { data: null, success: false };
};

export const getPRoductFromFirebase = async key => {
  try {
    const productsRef = database().ref('/books');
    const item = (await productsRef.child(key).once('value')).val();
    return { data: item, success: true };
  } catch (error) {
    console.error(error);
  }

  return { data: null, success: false };
};

export const getAllPRoductsFromFirebase = async uid => {
  try {
    let keys = (await database().ref(`/user_books/${uid}`).once('value')).val();
    keys = Object.values(keys);

    const products = [];

    for (let i = 0; i < keys.length; i++) {
      products.push((await getPRoductFromFirebase(keys[i])).data);
    }

    return { data: products, success: true };
  } catch (error) {
    console.error(error);
  }

  return { data: null, success: false };
};

export const firebaseProductsListener = async (uid, callBack) => {
  if (global.firebaseProductsListenerOff) {
    global.firebaseProductsListenerOff();
  }

  try {
    const ref = database().ref(`/user_books/${uid}`);
    ref.on('value', d => callBack(d.val()));

    global.firebaseProductsListenerOff = ref.off;

    return { data: null, success: true };
  } catch (error) {
    console.error(error);
  }

  return { data: null, success: false };
};

