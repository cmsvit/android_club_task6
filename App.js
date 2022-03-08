import 'react-native-gesture-handler';

// React native
import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen
import HomeScreenBottomNavigator from './navigation/HomeBottomNavigator';
import WelcomeScreen from './screens/WelcomeScreen';

// Navigators
const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      {/* Stack */}
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="HomeScreenBottomNavigator"
          component={HomeScreenBottomNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
