/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, Button, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { addPlace } from '@/store/actions';

import validate from '@/utility/validation';

import PlaceInput from '@/components/PlaceInput/PlaceInput';
import PickImage from '@/components/PickImage/PickImage';
import PickLocation from '@/components/PickLocation/PickLocation';
import MainText from '@/components/UI/MainText/MainText';
import HeadingText from '@/components/UI/HeadingText/HeadingText';

type Props = {
  onAddPlace: Function,
};
type State = {
  // TODO: define controls type
  controls: Object,
};

class SharePlaceScreen extends Component<Props, State> {
  state = {
    controls: {
      placeName: {
        value: '',
        isTouched: false,
        isValid: false,
        validationRules: {
          notEmpty: true,
        },
      },
    },
  };

  static options(passProps) {
    return {
      topBar: {
        leftButtonColor: 'blue',
      },
    };
  }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === 'sideMenuToggle') {
      Navigation.mergeOptions('sideMenu', {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
      Navigation.mergeOptions('leftSideMenu', {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    }
  }

  updateInputState = (key: string, value: string) => {
    this.setState((prevState: State) => {
      return {
        controls: {
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            value,
            isValid: validate(value, prevState.controls[key].validationRules),
            isTouched: true,
          },
        },
      };
    });
  };

  placeAddedHandler = () => {
    this.props.onAddPlace(this.state.controls.placeName.value);
  };

  render() {
    return (
      // <ScrollView contentContainerStyle={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <MainText>
            <HeadingText>Share a place with us</HeadingText>
          </MainText>
          <PickImage />
          <PickLocation />
          <PlaceInput
            placeData={this.state.controls.placeName}
            onChangeText={val => this.updateInputState('placeName', val)}
          />
          <View style={styles.button}>
            <Button
              title="Share the place!"
              onPress={this.placeAddedHandler}
              disabled={!this.state.controls.placeName.isValid}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150,
  },
  button: {
    margin: 8,
  },
});

const mapDispatchToProps = dispatch => ({
  onAddPlace: placeName => dispatch(addPlace(placeName)),
});

export default connect(
  null,
  mapDispatchToProps
)(SharePlaceScreen);
