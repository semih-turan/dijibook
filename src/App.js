import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import { Navigation } from '~/navigation';

import store from '~/redux';

import { colors } from './themes';

const App = props => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <Provider store={store}>
        <Navigation />
        <FlashMessage position="top" />
      </Provider>
    </View>
  );
};

export { App };
