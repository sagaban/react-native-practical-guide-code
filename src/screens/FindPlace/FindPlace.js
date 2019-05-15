/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import PlaceList from '@/components/PlaceList/PlaceList';
import type { Places } from '@/types/store';

type Props = {
  places: Places,
};
type State = {
  placesLoaded: boolean,
  removeAnim: any,
  placesAnim: any,
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
    removeAnim: new Animated.Value(1),
    placesAnim: new Animated.Value(0),
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

  placesLoadedHandler = () => {
    Animated.timing(this.state.placesAnim, {
      toValue: 1,
      duration: 500,
      userNativeDriver: true,
    }).start();
  };

  placesSearchHandler = () => {
    Animated.timing(this.state.removeAnim, {
      toValue: 0,
      duration: 500,
      userNativeDriver: true,
    }).start(() => {
      this.setState({
        placesLoaded: true,
      });
      this.placesLoadedHandler();
    });
  };

  render() {
    let content = (
      <Animated.View
        style={{
          opacity: this.state.removeAnim,
          transform: [
            {
              scale: this.state.removeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [12, 1],
              }),
            },
          ],
        }}>
        <TouchableOpacity onPress={this.placesSearchHandler}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Find Places</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
    if (this.state.placesLoaded) {
      content = (
        <Animated.View
          style={{
            opacity: this.state.placesAnim,
          }}>
          <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
        </Animated.View>
      );
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
