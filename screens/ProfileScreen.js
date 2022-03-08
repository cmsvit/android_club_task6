import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Appbar, Button} from 'react-native-paper';

export default function ProfileScreen({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Appbar.Header>
        <Appbar.Content title="Profile Screen" />
      </Appbar.Header>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button style={{margin: 32}} mode="contained">
          Profile Screen
        </Button>
      </View>
    </SafeAreaView>
  );
}
