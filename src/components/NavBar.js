import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MainScreen from '../screens/MainScreen';
import ListScreen from '../screens/ListScreen';
import FAQScreen from '../screens/FAQScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HeaderLogo from './HeaderLogo';

import { getColors } from '../assets/globalStyle';
import { ThemeContext } from '../helpers/ThemeContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack navigation for Main, List, and FAQ screen
function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MainScreen}/>
      <Stack.Screen name="List" component={ListScreen}/>
      <Stack.Screen name="FAQDetail" component={FAQScreen} initialParams={{ fromScreen: 'List'}}/>
    </Stack.Navigator>
  );
}

// Stack navigation fro Search and FAQ screen
function SearchStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search" component={SearchScreen}/>
      <Stack.Screen name="FAQDetail" component={FAQScreen} initialParams={{ fromScreen: 'Search'}}/>
    </Stack.Navigator>
  )
}

export default function NavBar() {
  const { isDarkMode } = useContext(ThemeContext);

  const colors = getColors(isDarkMode);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle:{ backgroundColor: colors.mainBackground},
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'SearchTab') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.tintColorActive,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: { paddingBottom: 10, height: 60, backgroundColor: colors.mainBackground },
      })}
    >
      <Tab.Screen name="HomeTab" 
        component={MainStackNavigator} 
        options={{headerTitle: ()=> <HeaderLogo name="Home"/>}}
      />

      <Tab.Screen name="SearchTab" 
        component={SearchStackNavigator} 
        options={{headerTitle: ()=> <HeaderLogo name="Search"/>}}
      />

      <Tab.Screen name="Settings" 
        component={SettingsScreen} 
        options={{headerTitle: ()=> <HeaderLogo name="Settings"/>}}
      />
    </Tab.Navigator>
  );
}
