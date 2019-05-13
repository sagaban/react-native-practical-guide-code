/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import DefaultInput from '@/components/UI/DefaultInput/DefaultInput';
import HeadingText from '@/components/UI/HeadingText/HeadingText';
import MainText from '@/components/UI/MainText/MainText';

import startMainTabs from '@/screens/MainTabs/startMainTabs';

type Props = {};
class AuthScreen extends Component<Props> {
  goToLogin = () => {
    console.log('goToLogin');
  };

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <View style={styles.container}>
        <MainText>
          <HeadingText> Please Log in </HeadingText>
        </MainText>
        <Button title="Switch to Login" onPress={this.goToLogin} />
        <View style={styles.inputContainer}>
          <DefaultInput placeholder="Your e-mail address" style={styles.input} />
          <DefaultInput placeholder="Password" style={styles.input} />
          <DefaultInput placeholder="Confirm Password" style={styles.input} />
        </View>
        <Button title="Submit" onPress={this.loginHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#bbb',
  },
});

export default AuthScreen;
