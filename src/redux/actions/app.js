import * as constants from '~/redux/constants';

import * as auth from '~/api/auth';
import * as products from '~/api/products';
import { showMessage, hideMessage } from "react-native-flash-message";



export const setApp = (key, value) => ({ type: constants.SET_APP, key, value });


export const loginUserWithFB = payload => async (dispatch, getState) => {
  //async işlemlerin yapılacağı yer
  const { username, password } = getState().app;

  dispatch({ type: constants.SET_APP, key: 'loginLoading', value: true });

  const { data, status, success } = await auth.loginUserWithFB(username, password);

  dispatch({ type: constants.SET_APP, key: 'loginLoading', value: false });

  if (success) {
    dispatch({
      type: constants.REQUEST_LOGIN_USER_WITH_FB,
      payload: { userInfo: data },      
    });
    showMessage({ message: "Başarılı bir şekilde giriş yapılmıştır", type: 'success' });
  } else {
  }
};

export const createUserWithFB = payload => async (dispatch, getState) => {
  //async işlemlerin yapılacağı yer
  const { username, password } = getState().app;

  dispatch({ type: constants.SET_APP, key: 'loginLoading', value: true });

  const { data, status, success } = await auth.createUserWithFB(username, password);

  dispatch({ type: constants.SET_APP, key: 'loginLoading', value: false });

  if (success) {
    dispatch({
      type: constants.REQUEST_CREATE_USER_WITH_FB,
      payload: { userInfo: data },
    });
    showMessage({ message: "Başarılı bir şekilde kullanıcı oluşturulmuştur", type: 'success' });

  } else {
  }
};


export const logoutUserWithFB = payload => async (dispatch, getState) => {

  dispatch({ type: constants.SET_APP, key: 'loginLoading', value: true });

  const { data, status, success } = await auth.logout();

  dispatch({ type: constants.SET_APP, key: 'loginLoading', value: false });

  if (success) {
    dispatch({
      type: constants.REQUEST_LOGOUT_USER_WITH_FB,
      payload: {},
    });
    showMessage({ message: "Başarılı bir şekilde oturum kapatılmıştır", type: 'danger' });
  } else {
  }
};

export const requestAllProducts = payload => async (dispatch, getState) => {
  const { data, success } = await products.getAllProducts(userInfo.user.uid);

  if (success) {
    dispatch({
      type: constants.REQUEST_GET_ALL_PRODUCTS_WITH_FB,
      payload: data ,
    });
  } else {
  }
};

export const requestAddProductToFirebase = payload => async (dispatch, getState) => {
  const { userInfo } = getState().app;

  const { data, success } = await products.addProductToFirebase(payload, userInfo.user.uid);

  if (success) {
    dispatch({
      type: constants.REQUEST_ADD_PRODUCT_FB,
      payload: data,
    });
  } else {
  }
};
export const requestGetAllPRoductsFromFirebase = payload => async (dispatch, getState) => {
  const { userInfo } = getState().app;

  const { data, success } = await products.getAllPRoductsFromFirebase(userInfo.user.uid);

  if (success) {
    dispatch({
      type: constants.REQUEST_GET_PRODUCTS_FB,
      payload: data,
    });
  } else {
  }
};

export const firebaseProductsListener = payload => async (dispatch, getState) => {
  const { userInfo } = getState().app;

  const { off, data, success } = await products.firebaseProductsListener(userInfo.user.uid, d => {
    //burada bir filtreleme yapılabilir, tüm datayı yeniden çekmek yerine sadece yeni değişiklikler belirlenip tek tek sadece yeni eklenen datalar çekilebilir
    //amaç çalışma mantığını anlamak olduğu için şimdilik göz ardı edebiliriz
    //firebase benzeri cloud çözümlerinde sunucu taraflı performansla ilgili bir endişemiz olmadığı için tekrarlı requestler problem oluşturmaz ancak ağ performansından dolayı verileri geç gelecektir
    //yine de realtime database yerine collections kullarak bunun önüne geçmek gerekir (koleksiyonlar, karmaşık sorgular oluşturmamızı kolaylaştırır ve daha çok seçenek sunar)

    //realtime database karmaşık veri ilişkileri olan, n-n ve ya 1-n gibi ilişkileri olan verilerle başa çıkmada yetersizdir

    //özellikle x kullanıcısına ait y verileri ya da y verisine sahip x kullanıcıları tarzı sorgular çok yavaş çalışır

    // burada kullanıcı verisi takip ediliyor ve yapılan her değişiklikte kullanıcıya ait tüm veri baştan çekiliyor
    dispatch(requestGetAllPRoductsFromFirebase());
  });

  if (success) {
    dispatch({
      type: constants.FIREBASE_PRODUCTS_LISTENER,
      payload: off,
    });
  } else {
  }
};