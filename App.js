/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from 'rncourse/src/components/PlaceInput/PlaceInput'
import PlaceList from 'rncourse/src/components/PlaceList/PlaceList';

type Props = {};
type Item = {value: string, key: string, image: Object}
type State = {
  places: Array<Item>,
}
export default class App extends Component<Props, State> {
  state = {
    places: []
  }

  onPlaceAddedHandler = (placeName: string) => {
    this.setState( prevState => {
      return {
        places: prevState.places.concat({
          value: placeName,
          image: {
            uri: `https://picsum.photos/id/${Math.floor(Math.random()*900+100)}/300/200`
          },
          key: `${Math.random()}`, // not ideal, can be repeated
        }),
      }
    })
  }

  onItemDeletedHandler = (key: number) => {
    this.setState ( prevState => ({
      places: prevState.places.filter(p => p.key !== key),
    }));
  }

  render() {

    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.onPlaceAddedHandler} />
        <PlaceList places={this.state.places} onItemDeleted={this.onItemDeletedHandler} />
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
