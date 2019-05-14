/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import startMainTabs from '@/screens/MainTabs/startMainTabs';
import DefaultInput from '@/components/UI/DefaultInput/DefaultInput';
import HeadingText from '@/components/UI/HeadingText/HeadingText';
import MainText from '@/components/UI/MainText/MainText';
import ButtonWithBackground from '@/components/UI/ButtonWithBackground/ButtonWithBackground';
import backgroundImage from '@/assets/background.jpg';

type Props = {};
type State = {
  respStyles: {
    pwContainerDirection: 'column' | 'row',
    pwInputWidth: 'auto' | '45%',
  },
};
class AuthScreen extends Component<Props, State> {
  state = {
    respStyles: {
      pwContainerDirection: 'column',
      pwInputWidth: 'auto',
    },
  };

  constructor(props: Props) {
    super(props);
    Dimensions.addEventListener('change', dims => {
      const isHeightEnough = dims.window.height > 500;
      this.setState({
        respStyles: {
          pwContainerDirection: isHeightEnough ? 'column' : 'row',
          pwInputWidth: isHeightEnough ? 'auto' : '45%',
        },
      });
    });
  }
  goToLogin = () => {
    alert('hello');
  };

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    let headingText = null;
    if (Dimensions.get('window').height > 500) {
      headingText = (
        <MainText>
          <HeadingText> Please Log in </HeadingText>
        </MainText>
      );
    }
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          {headingText}
          <ButtonWithBackground onPress={this.goToLogin} color="#29aaf4">
            Switch to Login
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your e-mail address" style={styles.input} />
            <View
              style={[
                styles.passwordContainer,
                { flexDirection: this.state.respStyles.pwContainerDirection },
              ]}>
              <DefaultInput
                placeholder="Password"
                style={[styles.input, { width: this.state.respStyles.pwInputWidth }]}
              />
              <DefaultInput
                placeholder="Confirm Password"
                style={[styles.input, { width: this.state.respStyles.pwInputWidth }]}
              />
            </View>
          </View>
          <ButtonWithBackground onPress={this.loginHandler} color="#29aaf4">
            Submit
          </ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    flex: 1,
  },
  inputContainer: {
    width: '80%',
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#bbb',
  },
  passwordContainer: {
    // flexDirection: Dimensions.get('window').height > 500 ? 'column' : 'row',
    justifyContent: 'space-between',
    // width: '100%',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  // passwordInput: {
  //   width: Dimensions.get('window').height > 500 ? 'auto' : '45%',
  // },
});

export default AuthScreen;
