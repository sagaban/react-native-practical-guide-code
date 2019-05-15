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

import validate from '@/utility/validation';

type Props = {};
type State = {
  isPortrait: boolean,
  controls: Object,
};
class AuthScreen extends Component<Props, State> {
  state = {
    isPortrait: true,
    controls: {
      email: {
        value: '',
        isTouched: false,
        isValid: false,
        validationRules: {
          isEmail: true,
        },
      },
      password: {
        value: '',
        isTouched: false,
        isValid: false,
        validationRules: {
          minLength: 6,
        },
      },
      confirmPassword: {
        value: '',
        isTouched: false,
        isValid: false,
        validationRules: {
          equalTo: 'password',
        },
      },
    },
  };

  constructor(props: Props) {
    super(props);
    Dimensions.addEventListener('change', this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateStyles);
  }

  updateStyles = (dims: Object) => {
    this.setState({
      isPortrait: dims.window.height > 500,
    });
  };

  goToLogin = () => {
    alert('hello');
  };

  loginHandler = () => {
    startMainTabs();
  };

  areAllInputValid = () => {
    const { controls } = this.state;
    return Object.keys(controls).reduce((acc, input) => {
      return acc && controls[input].isValid;
    }, true);
  };

  updateInputState = (key: string, value: string) => {
    const extraValues = {};
    const equalToKeyValue = this.state.controls[key].validationRules.equalTo;
    if (equalToKeyValue !== undefined) {
      extraValues[equalToKeyValue] = this.state.controls[equalToKeyValue].value;
    }

    // If we change password, should update confirmPassword
    const crossedControlValidation = {};
    if (key === 'password') {
      crossedControlValidation.confirmPassword = {
        ...this.state.controls.confirmPassword,
        isValid:
          key === 'password'
            ? validate(
                this.state.controls.confirmPassword.value,
                this.state.controls.confirmPassword.validationRules,
                { [key]: value }
              )
            : this.state.controls.confirmPassword.isValid,
      };
    }
    this.setState((prevState: State) => {
      return {
        controls: {
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            value,
            isValid: validate(value, prevState.controls[key].validationRules, extraValues),
            isTouched: true,
          },
          ...crossedControlValidation,
        },
      };
    });
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
            <DefaultInput
              placeholder="Your e-mail address"
              style={styles.input}
              value={this.state.controls.email.value}
              isValid={this.state.controls.email.isValid}
              isTouched={this.state.controls.email.isTouched}
              onChangeText={val => this.updateInputState('email', val)}
            />
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
                value={this.state.controls.password.value}
                isValid={this.state.controls.password.isValid}
                isTouched={this.state.controls.password.isTouched}
                onChangeText={val => this.updateInputState('password', val)}
              />
              <DefaultInput
                placeholder="Confirm Password"
                style={[
                  styles.input,
                  this.state.isPortrait
                    ? styles.portraitPasswordInput
                    : styles.landscapePasswordInput,
                ]}
                value={this.state.controls.confirmPassword.value}
                isValid={this.state.controls.confirmPassword.isValid}
                isTouched={this.state.controls.confirmPassword.isTouched}
                onChangeText={val => this.updateInputState('confirmPassword', val)}
              />
            </View>
          </View>
          <ButtonWithBackground
            onPress={this.loginHandler}
            color="#29aaf4"
            disabled={!this.areAllInputValid()}>
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
