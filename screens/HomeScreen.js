import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Appbar, Button} from 'react-native-paper';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Appbar.Header>
        <Appbar.Content title="Home Screen" />
      </Appbar.Header>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{margin: 32, fontSize: 18}}>
          This is the Home Screen. It is the init route of Tab navigator.
        </Text>
        <Button
          style={{margin: 32}}
          mode="contained"
          onPress={() => navigation.pop()}>
          Go back to welcome screen.
        </Button>
      </View>
    </SafeAreaView>
  );
}
