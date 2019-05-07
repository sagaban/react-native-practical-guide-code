/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View } from 'react-native';

import PlaceInput from 'rncourse/src/components/PlaceInput/PlaceInput'
import PlaceList from 'rncourse/src/components/PlaceList/PlaceList';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
type State = {
  places: Array<string>,
}
export default class App extends Component<Props, State> {
  state = {
    places: []
  }

  onPlaceAddedHandler = (placeName: string) => {
    this.setState( prevState => {
      return {
        places: prevState.places.concat(placeName),
      }
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.onPlaceAddedHandler} />
        <PlaceList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFE4C4',
  },
});
