/**
 * @format
 * @flow
 */
import React from 'react';
import { StyleSheet, View} from 'react-native';

import ListItem from 'rncourse/src/components/ListItem/ListItem';

type Props = {
  places: Array<string>
};

const placeList = (props: Props) => {
  const placesOutput = props.places.map(
      (place, i) => (
        <ListItem key={place+i} placeName={place} onItemPress={() => alert( 'item presed ' + i)}/>
      )
    );

  return (
    <View style={styles.listContainer}>
      {placesOutput}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default placeList;
