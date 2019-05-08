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
import PlaceDetails from 'rncourse/src/components/PlaceDetails/PlaceDetails';

type Props = {};
type Item = {value: string, key: string, image: Object}
type State = {
  places: Array<Item>,
  selectedPlace: ?Object
}
export default class App extends Component<Props, State> {
  state = {
    places: [],
    selectedPlace: null
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

  onItemDeleteHandler = () => {

    this.setState( prevState => {
    const key = prevState.selectedPlace ? prevState.selectedPlace.key : null;
      return ({
        places: prevState.places.filter(p => p.key !== key),
        selectedPlace: null,
      });
    });
  }

  onModalCloseHandler = () => {
    this.setState({selectedPlace: null})
  }

  onItemSelectedHandler = (key: number) => {
    this.setState ( prevState => ({
      selectedPlace: prevState.places.find(p => p.key === key),
    }));
  }

  render() {

    return (
      <View style={styles.container}>
        <PlaceDetails
          selectedPlace={this.state.selectedPlace}
          onModalClose={this.onModalCloseHandler}
          onItemDelete={this.onItemDeleteHandler}
        />
        <PlaceInput onPlaceAdded={this.onPlaceAddedHandler} />
        <PlaceList places={this.state.places} onItemSelected={this.onItemSelectedHandler} />
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
