/**
 * @format
 * @flow
 */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

type Props = {
  placeName: string,
  placeImage: Object,
  onItemPress: Function,
}

const listItem = (props : Props) => (
  <TouchableOpacity onPress={props.onItemPress}>
    <View style={styles.listItem}>
      <Image resizeMode="contain" source={props.placeImage} style={styles.placeImage}/>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeImage: {
    marginRight: 8,
    height: 55,
    width: 80,
  }
})

export default listItem;
