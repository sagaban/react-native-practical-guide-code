/**
 * @format
 * @flow
 */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  placeName: string,
  onItemPress: Function,
}

const listItem = (props : Props) => (
  <TouchableOpacity onPress={props.onItemPress}>
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5
  }
})

export default listItem;
