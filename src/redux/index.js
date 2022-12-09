import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

import { app } from '~/redux/reducers';

const store = configureStore({
  reducer: combineReducers({ app }),
  //Auth için app kullanılmaktadır . Product ise app yani auth için kullanılmaktadır.
  middleware: [thunk],
});

export default store;
