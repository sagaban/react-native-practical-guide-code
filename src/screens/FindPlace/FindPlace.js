/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import PlaceList from '@/components/PlaceList/PlaceList';
import type { Places } from '@/types/store';

type Props = {
  places: Places,
};

class FindPlaceScreen extends Component<Props> {
  static options(passProps) {
    return {
      topBar: {
        leftButtonColor: 'red',
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
    }
  }

  itemSelectedHandler = key => {
    const selectedPlace = this.props.places.find(p => p.key === key);
    Navigation.push('findPlacesStack', {
      component: {
        name: 'awesome-places.PlaceDetailsScreen',
        passProps: {
          selectedPlace,
        },
        options: {
          topBar: {
            title: {
              text: selectedPlace ? selectedPlace.value : '',
            },
          },
        },
      },
    });
  };

  render() {
    return (
      <View>
        <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  places: state.places.places,
});

export default connect(mapStateToProps)(FindPlaceScreen);
