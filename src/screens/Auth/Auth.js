/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import startMainTabs from '@/screens/MainTabs/startMainTabs';

type Props = {};
export default class AuthScreen extends Component<Props> {
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <View>
        <Text> Auth Screen </Text>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}
