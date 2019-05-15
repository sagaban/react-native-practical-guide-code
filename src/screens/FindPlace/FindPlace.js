/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import PlaceList from '@/components/PlaceList/PlaceList';
import type { Places } from '@/types/store';

type Props = {
  places: Places,
};
type State = {
  placesLoaded: boolean,
};

class FindPlaceScreen extends Component<Props, State> {
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

  state = {
    placesLoaded: false,
  };

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

  placesSearchHandler = () => {
    this.setState({
      placesLoaded: true,
    });
  };

  render() {
    let content = (
      <TouchableOpacity onPress={this.placesSearchHandler}>
        <View style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Find Places</Text>
        </View>
      </TouchableOpacity>
    );
    if (this.state.placesLoaded) {
      content = <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />;
    }
    return <View style={this.state.placesLoaded ? null : styles.buttonContainer}>{content}</View>;
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    borderColor: 'orange',
    borderWidth: 3,
    borderRadius: 50,
    padding: 20,
  },
  searchButtonText: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 26,
  },
});

const mapStateToProps = state => ({
  places: state.places.places,
});

export default connect(mapStateToProps)(FindPlaceScreen);
