import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#727F7F',
        borderWidth: 5,
      }}>
        <Text>Exp/red</Text>
        <View style={{width: 100, height: 50, backgroundColor: '#98FCFF'}}>
          <Text>
            Line
          </Text>
        </View>
        <View style={{width: 100, height: 50, backgroundColor: '#727F7F'}}>
          <Text>
            Line 1
          </Text>
        </View>
        <View style={{width: 100, height: 50, backgroundColor: '#4C7E7F'}}>
          <Text>
            Line 1
          </Text>
        </View>
      </View>
    );
  }
}
