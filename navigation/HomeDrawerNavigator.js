// React
import React from 'react';

// Navigation
import {createDrawerNavigator} from '@react-navigation/drawer';

// Screen
import AboutScreen from '../screens/AboutScreen';
import AccountScreen from '../screens/AccountScreen';

// Navigators
const Drawer = createDrawerNavigator();

export default function HomeDrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="About"
      screenOptions={{
        headerShown: true,
      }}>
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
    </Drawer.Navigator>
  );
}
