/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '@/components/PlaceInput/PlaceInput';
import PlaceList from '@/components/PlaceList/PlaceList';
import PlaceDetails from '@/components/PlaceDetails/PlaceDetails';

import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from '@/store/actions'

import type { Places, Item } from '@/types/store';

type Props = {
  onAddPlace: Function,
  onDeletePlace: Function,
  onSelectPlace: Function,
  onDeselectPlace: Function,
  selectedPlace: Item,
  places: Places,
};

class App extends Component<Props> {

  onPlaceAddedHandler = (placeName: string) => {
    this.props.onAddPlace(placeName);
  }

  onItemDeleteHandler = () => {
    this.props.onDeletePlace();
  }

  onModalCloseHandler = () => {
    this.props.onDeselectPlace()
  }

  onItemSelectedHandler = (key: string) => {
    this.props.onSelectPlace(key);
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetails
          selectedPlace={this.props.selectedPlace}
          onModalClose={this.onModalCloseHandler}
          onItemDelete={this.onItemDeleteHandler}
        />
        <PlaceInput onPlaceAdded={this.onPlaceAddedHandler} />
        <PlaceList places={this.props.places} onItemSelected={this.onItemSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFE4C4',
  },
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name: string) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key: string) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
