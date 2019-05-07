/**
 * @format
 * @flow
 */
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from 'rncourse/src/components/ListItem/ListItem';

type Item = {value: string, key: string, image: Object}

type Props = {
  places: Array<Item>,
  onItemDeleted: Function,
};

const placeList = (props: Props) => {

  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.value}
          placeImage={info.item.image}
          onItemPress={() => props.onItemDeleted(info.item.key)}/>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default placeList;
