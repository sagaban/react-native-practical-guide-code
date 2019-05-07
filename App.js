/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
type State = {
  placeName: string,
  places: Array<string>,
}
export default class App extends Component<Props, State> {
  state = {
    placeName: '',
    places: []
  }

  // whit this syntax, `this` will refer the class
  placeNameChangeHandler = (text: string) => {
    this.setState({placeName: text});
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.setState( prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
        placeName: '',
      }
    })
  }

  render() {
    const placesOutput = this.state.places.map(
      (place, i) => (
        <Text key={place+i}>{place}</Text>
      )
    )
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="Enter a place name"
            onChangeText={this.placeNameChangeHandler}
            value={this.state.placeName}
          />
          <Button
            title="  Add  "
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View>
          {placesOutput}
        </View>
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
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  placeInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '70%',
  },
});
