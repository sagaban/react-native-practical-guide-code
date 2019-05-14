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
  isPortrait: boolean,
};
class AuthScreen extends Component<Props, State> {
  state = {
    isPortrait: true,
  };

  constructor(props: Props) {
    super(props);
    Dimensions.addEventListener('change', dims => {
      this.setState({
        isPortrait: dims.window.height > 500,
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
    if (this.state.isPortrait) {
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
              style={
                this.state.isPortrait
                  ? styles.portraitPasswordContainer
                  : styles.landscapePasswordContainer
              }>
              <DefaultInput
                placeholder="Password"
                style={[
                  styles.input,
                  this.state.isPortrait
                    ? styles.portraitPasswordInput
                    : styles.landscapePasswordInput,
                ]}
              />
              <DefaultInput
                placeholder="Confirm Password"
                style={[
                  styles.input,
                  this.state.isPortrait
                    ? styles.portraitPasswordInput
                    : styles.landscapePasswordInput,
                ]}
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
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#bbb',
  },
  landscapePasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  portraitPasswordContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  landscapePasswordInput: {
    width: '45%',
  },
  portraitPasswordInput: {
    width: 'auto',
  },
});

export default AuthScreen;
