import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Appbar, Button} from 'react-native-paper';

export default function WelcomeScreen({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Appbar.Header>
        <Appbar.Content title="Welcome Screen" />
      </Appbar.Header>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{margin: 32, fontSize: 18}}>
          This is the Welcome Screen. It is the init route of Stack navigator.
        </Text>
        <Button
          style={{margin: 32}}
          mode="contained"
          onPress={() => navigation.navigate('HomeScreenBottomNavigator')}>
          Go to Home Screen
        </Button>
      </View>
    </SafeAreaView>
  );
}
