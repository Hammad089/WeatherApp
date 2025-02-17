import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WeatherScreen from '../screens/WeatherScreen';
import RecentSearch from '../screens/RecentSearch';
import SettingScreen from '../screens/SettingScreen';
const Stack = createNativeStackNavigator();
const MainApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="weather"
        component={WeatherScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="recent"
        component={RecentSearch}
        options={{headerShown: true, title: 'Recent Search'}}
      />
      <Stack.Screen
        name="setting"
        component={SettingScreen}
        options={{headerShown: true, title: 'Setting'}}
      />
    </Stack.Navigator>
  );
};

export default MainApp;
