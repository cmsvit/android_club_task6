import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

export default function AboutScreen({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{margin: 32, fontSize: 18}}>
          This is the About Screen. It is the init route of Drawer navigator.
        </Text>
        <Button style={{margin: 32}} mode="contained">
          About Screen
        </Button>
      </View>
    </SafeAreaView>
  );
}
