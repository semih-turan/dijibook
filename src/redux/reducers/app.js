import * as constants from '~/redux/constants';

const initialState = {
  selectedTheme: 'dark', //dark | light

  defaultParameter: false,
  username: '',
  password: '',
  userInfo: {},

  loginStatus: false,
  loginLoading: false,
};

const app = (state = initialState, { type, payload, key, value }) => {
  switch (type) {
    case constants.SET_APP: {
      return { ...state, [key]: value };
    }
    case constants.REQUEST_CREATE_USER_WITH_FB:
    case constants.REQUEST_LOGIN_USER_WITH_FB: {
      return { ...state, password: undefined, userInfo: payload.userInfo, loginStatus: true };
    }
    case constants.REQUEST_LOGOUT_USER_WITH_FB: {
      return { ...state, password: undefined, userInfo: null, loginStatus: false };
    }
    case constants.REQUEST_GET_ALL_PRODUCTS_WITH_FB: {
      return { ...state, products: actionObj.payload.products };
    }
    case constants.REQUEST_GET_PRODUCTS_FB: {
      return { ...state, fbProducts: payload, };
    }

    case constants.FIREBASE_PRODUCTS_LISTENER: {
      return { ...state, };
    }
    default:
      return state;
  }
};

export { app };
