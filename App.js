import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainApp from './src/navigation/MainApp';
import {Provider, useDispatch} from 'react-redux';
import {persistor, store} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import { loadTheme } from './src/store/action/weatherAction';
const App = () => {
  return (
    <Provider store={store}>
       <ThemeInitializer />
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <SafeAreaView style={{flex: 1}}>
            <MainApp />
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
const ThemeInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTheme());
  }, []);

  return null;
};

export default App;

const styles = StyleSheet.create({});
