import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MainScreen from '../screens/MainScreen';
import ListScreen from '../screens/ListScreen';
import FAQScreen from '../screens/FAQScreen';
import SearchScreen from '../screens/SearchSrceen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTab" component={MainScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="List" component={ListScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="FAQDetail" component={FAQScreen} options={{ headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Main Tab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { paddingBottom: 10, height: 60 },
      })}
    >
      <Tab.Screen name="Main Tab" component={MainStackNavigator} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
