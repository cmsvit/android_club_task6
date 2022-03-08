import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import HomeDrawerNavigator from '../navigation/HomeDrawerNavigator';
export default function SettingsScreen({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <HomeDrawerNavigator />
    </SafeAreaView>
  );
}
