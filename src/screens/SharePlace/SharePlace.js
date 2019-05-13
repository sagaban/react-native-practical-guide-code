/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import PlaceInput from '@/components/PlaceInput/PlaceInput';
import { addPlace } from '@/store/actions';

type Props = {
  onAddPlace: Function,
};

class SharePlaceScreen extends Component<Props> {
  // TODO: move all the `navigationButtonPressed` logic to a mixing
  // It is repeated in PlaceDetails, SharePlace and FindPlace
  navigationEventListener: null;

  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  componentWillUnmount() {
    // Not mandatory
    if (this.navigationEventListener) {
      this.navigationEventListener.remove();
    }
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

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddPlace: placeName => dispatch(addPlace(placeName)),
});

export default connect(
  null,
  mapDispatchToProps
)(SharePlaceScreen);
