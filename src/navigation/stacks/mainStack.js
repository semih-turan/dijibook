import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DCVBarcodeReader } from 'dynamsoft-capture-vision-react-native';

import { connect } from 'react-redux';
import { logoutUserWithFB } from '~/redux/actions/app';

import Home from '~/screens/Home';
import Deneme from '~/screens/AddBook';
import Redux from '~/screens/Redux';
import BarkodRead from '~/screens/BarkodRead';
import BCamera from '~/components/Camera/BCamera';
import TabNavigation from '~/screens/TabNavigation';
import Details from '~/screens/Details';
import { color } from 'react-native-reanimated';
import { colors } from '~/themes';
import { text } from '~/configs';
import { Navigation } from '..';

(async () => {
  try {
    await DCVBarcodeReader.initLicense(
      'DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAxNTEyNTI2LVRYbE5iMkpwYkdWUWNtOXFYMlJpY2ciLCJvcmdhbml6YXRpb25JRCI6IjEwMTUxMjUyNiIsImNoZWNrQ29kZSI6MTAxMTE2NjY1MX0=',
    );
  } catch (e) {
    console.log(e);
  }
})();

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
    </Stack.Navigator>
  );
});

export { MainStack };
