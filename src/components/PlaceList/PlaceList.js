/**
 * @format
 * @flow
 */
import React from 'react';
import { StyleSheet, ScrollView} from 'react-native';

import ListItem from 'rncourse/src/components/ListItem/ListItem';

type Props = {
  places: Array<string>,
  onItemDeleted: Function,
};

const placeList = (props: Props) => {
  const placesOutput = props.places.map(
      (place, i) => (
        <ListItem key={place+i} placeName={place} onItemPress={() => props.onItemDeleted(i)}/>
      )
    );

  return (
    <ScrollView style={styles.listContainer}>
      {placesOutput}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default placeList;
