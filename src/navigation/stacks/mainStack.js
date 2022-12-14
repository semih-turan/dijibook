import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DCVBarcodeReader } from 'dynamsoft-capture-vision-react-native';
import { connect } from 'react-redux';
import { logoutUserWithFB } from '~/redux/actions/app';

import Home from '~/screens/Home';
import AddBook from '~/screens/AddBook';
import Redux from '~/screens/Redux';
import BarcodeRead from '~/screens/Barcode';

import TabNavigation from '~/navigation/TabNavigation';
import Details from '~/screens/Details';
import { color } from 'react-native-reanimated';
import { colors } from '~/themes';
import { text } from '~/configs';
import { Navigation } from '..';


const mapDispatchToProps = dispatch => ({ dispatch });

const Stack = createStackNavigator();

const MainStack = connect(mapDispatchToProps)(props => {
  const { dispatch, app } = props;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="discussion"
        options={{
          headerShown: false,
          title: 'Discussion',
          headerTitleAlign: 'center',
          headerRight: () => <Icon name="logout" size={28} onPress={() => dispatch(logoutUserWithFB())} />,
        }}
        component={TabNavigation}
      />
      <Stack.Screen
        name="Details"
        options={{
          headerShown: true,
          title: 'Details',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTitleStyle: {
            color: colors.orange,
            fontFamily: 'Montserrat-ExtraBold',
            fontSize: text.H3 * 1.1,
          },
          headerTintColor: colors.orange,
          headerRight: () => (
            <Icon name="logout" color={'black'} size={28} onPress={() => dispatch(logoutUserWithFB())} />
          ),
        }}
        component={Details}
      />
      <Stack.Screen
        name="BarcodeRead"
        options={{
          headerShown: true,
          title: 'BarcodeRead',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTitleStyle: {
            color: colors.orange,
            fontFamily: 'Montserrat-ExtraBold',
            fontSize: text.H3 * 1.1,
          },
          headerTintColor: colors.orange,
          headerRight: () => (
            <Icon name="logout" color={'black'} size={28} onPress={() => dispatch(logoutUserWithFB())} />
          ),
        }}
        component={BarcodeRead}
      />
      <Stack.Screen
        name="AddBook"
        options={{
          headerShown: true,
          title: 'AddBook',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTitleStyle: {
            color: colors.orange,
            fontFamily: 'Montserrat-ExtraBold',
            fontSize: text.H3 * 1.1,
          },
          headerTintColor: colors.orange,
          headerRight: () => (
            <Icon name="logout" color={'black'} size={28} onPress={() => dispatch(logoutUserWithFB())} />
          ),
        }}
        component={AddBook}
      />
    </Stack.Navigator>
  );
});

export { MainStack };
