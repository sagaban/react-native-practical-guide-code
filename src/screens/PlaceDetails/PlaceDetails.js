/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { deletePlace } from '@/store/actions';

import type { Item } from '@/types/store';

type Props = {
  selectedPlace: Item,
  onModalClose: Function,
  onDeletePlace: Function,
};

class PlaceDetails extends Component<Props> {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    Navigation.pop('findPlacesStack');
  };

  closeModalHandler = () => {
    Navigation.pop('findPlacesStack');
  }

  render() {
    return (
      <View style={styles.modalContainer}>
        <View>
          <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.props.selectedPlace.value}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
          <Button title="Close" onPress={this.closeModalHandler} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
  },
  placeImage: {
    width: '100%',
    height: 200,
  },
  deleteButton: {
    alignItems: 'center',
  },
});

const mapDispatchToProps = dispatch => ({
  onDeletePlace: key => dispatch(deletePlace(key)),
});

export default connect(
  null,
  mapDispatchToProps
)(PlaceDetails);
