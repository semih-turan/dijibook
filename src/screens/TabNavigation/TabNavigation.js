import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Favorites from '../Favorites';
import Home from '../Home';
import Search from '../Search';
import colors from '~/themes/colors';
import { View, Text } from 'react-native';
import styles from './TabNavigation.style';
import { color } from 'react-native-reanimated';

const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
  const homeIcon = ({ focused, color, size }) =>
    focused ? <Icon name="home" size={24} color="black" /> : <Icon name="home-outline" size={24} color="black" />;

  const searchIcon = ({ focused, color, size }) =>
    focused ? <Icon name="magnify" size={24} color="black" /> : <Icon name="magnify" size={24} color="black" />;

  const favIcon = ({ focused, color, size }) =>
    focused ? (
      <Icon name="bookmark-minus" size={24} color="black" />
    ) : (
      <Icon name="bookmark-minus-outline" size={24} color="black" />
    );

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, marginBottom: 8, color: colors.orange, fontFamily: 'Montserrat-ExtraBold' },
        tabBarItemStyle: { alignItems: 'center', backgroundColor: colors.white },
        tabBarStyle: { backgroundColor: 'red', height: 60 },
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: homeIcon,
          tabBarActiveTintColor: colors.orange,
          tabBarInactiveTintColor: colors.black,
          header: () => (
            <View style={styles.container}>
              <Text style={styles.text}>Home</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: searchIcon,
          tabBarActiveTintColor: colors.orange,
          tabBarInactiveTintColor: colors.black,
          header: () => (
            <View style={styles.container}>
              <Text style={styles.text}>Search</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: favIcon,
          tabBarActiveTintColor: colors.orange,
          tabBarInactiveTintColor: colors.black,
          header: () => (
            <View style={styles.container}>
              <Text style={styles.text}>Favorites</Text>
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigation;
