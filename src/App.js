import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import { Navigation } from '~/navigation';

import store from '~/redux';

import { colors } from './themes';
import { useEffect } from 'react';
import { NotificationServices, requestUserPermission } from './utils/natification';
import ForegroundHandler from './utils/ForegroundHandler';

const App = props => {
  useEffect(()=>{
    requestUserPermission();
    NotificationServices();
  },[])

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <ForegroundHandler />
      <Provider store={store}>
        <Navigation />
        <FlashMessage position="top" />
      </Provider>
    </View>
  );
};

export { App };
