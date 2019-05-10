/**
 * @format
 * @flow
 */
import React from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import type { Item } from '@/types/store';

type Props = {
  selectedPlace: Item,
  onModalClose: Function,
  onItemDelete: Function,
};
const placeDetails = (props: Props) => {
  return (
    <View style={styles.modalContainer}>
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.value}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={props.onItemDelete}>
          <View style={styles.deleteButton}>
            <Icon size={30} name="ios-trash" color="red" />
          </View>
        </TouchableOpacity>
        <Button title="Close" onPress={props.onModalClose} />
      </View>
    </View>
  );
};

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

export default placeDetails;
