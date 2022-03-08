import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

export default function AccountScreen({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button style={{margin: 32}} mode="contained">
          Account Screen
        </Button>
      </View>
    </SafeAreaView>
  );
}
