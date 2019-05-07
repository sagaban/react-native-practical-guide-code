/**
 * @format
 * @flow
 */
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from 'rncourse/src/components/ListItem/ListItem';

type Props = {
  places: Array<{value: string, key: string}>,
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
