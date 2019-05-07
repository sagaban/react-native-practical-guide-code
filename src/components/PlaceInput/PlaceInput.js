/**
 * @format
 * @flow
 */
import React, {Component} from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

type Props = {
  onPlaceAdded: Function
};
type State = {
  placeName: string,
}
export default class placeInput extends Component<Props, State> {
  state = {
    placeName: ''
  }

  placeNameChangeHandler = (text: string) => {
    this.setState({placeName: text});
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
    this.setState({placeName: ''});
  }

  render() {
    return (
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
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
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
  listContainer: {
    width: '100%'
  }
});

