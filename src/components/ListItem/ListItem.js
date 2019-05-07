/**
 * @format
 * @flow
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  placeName: string
}

const listItem = (props : Props) => (
  <View style={styles.listItem}>
    <Text>{props.placeName}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    margin: 5
  }
})

export default listItem;
