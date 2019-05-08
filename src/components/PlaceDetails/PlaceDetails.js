/**
 * @format
 * @flow
 */
import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

type Props = {
  selectedPlace: Object | null,
  onModalClose: Function,
  onItemDelete: Function,
};
const placeDetails = (props : Props) => {

  const modalContent = props.selectedPlace ? (
    <View>
      <Image source={props.selectedPlace.image} style={styles.placeImage}/>
      <Text style={styles.placeName }>{props.selectedPlace.value}</Text>
    </View>
  ) : null;

  return (
    <Modal visible={props.selectedPlace !== null} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button
            title="Delete"
            color="red"
            onPress={props.onItemDelete} />
          <Button title="Close" onPress={props.onModalClose}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer:{
    margin: 22,
  },
  placeName:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  },
  placeImage: {
    width: '100%',
    height: 200,
  }
})

export default placeDetails;
