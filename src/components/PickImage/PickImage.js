/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Button, View, StyleSheet, Image } from 'react-native';
import placeholderImage from '@/assets/beach-couch.jpeg';

type Props = {};
class PickImage extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image style={styles.previewImage} source={placeholderImage} />
        </View>
        <View style={styles.button}>
          <Button title="Pick image" onPress={() => alert('Pick image')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150,
  },
  button: {
    margin: 8,
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
});

export default PickImage;
