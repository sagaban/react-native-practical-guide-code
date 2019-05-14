/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { addPlace } from '@/store/actions';

import PlaceInput from '@/components/PlaceInput/PlaceInput';
import PickImage from '@/components/PickImage/PickImage';
import PickLocation from '@/components/PickLocation/PickLocation';
import MainText from '@/components/UI/MainText/MainText';
import HeadingText from '@/components/UI/HeadingText/HeadingText';

type Props = {
  onAddPlace: Function,
};
type State = {
  placeName: string,
};

class SharePlaceScreen extends Component<Props, State> {
  state = {
    placeName: '',
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
    console.log(`buttonId: ${buttonId}`);
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

  placeNameChangedHandler = (placeName: string) => {
    this.setState({
      placeName,
    });
  };

  placeAddedHandler = () => {
    if (this.state.placeName && this.state.placeName.trim() !== '') {
      this.props.onAddPlace(this.state.placeName);
    }
  };

  render() {
    return (
      // <ScrollView contentContainerStyle={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share a place with us</HeadingText>
          </MainText>
          <PickImage />
          <PickLocation />
          <PlaceInput
            placeName={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <View style={styles.button}>
            <Button title="Share the place!" onPress={this.placeAddedHandler} />
          </View>
        </View>
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
