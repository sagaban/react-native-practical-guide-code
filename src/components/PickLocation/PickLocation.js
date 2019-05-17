/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import MapboxGL from '@/../node_modules/@mapbox/react-native-mapbox-gl';

const onSortOptions = (a, b) => {
  if (a.label < b.label) {
    return -1;
  }

  if (a.label > b.label) {
    return 1;
  }

  return 0;
};

type Props = {} & Object;
type State = {
  styleURL: any,
  focusedLocation: Object,
};

class PickLocation extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this._mapOptions = Object.keys(MapboxGL.StyleURL)
      .map(key => {
        return {
          label: key,
          data: MapboxGL.StyleURL[key],
        };
      })
      .sort(onSortOptions);

    this._styleURLIndex = 0;
    this.state = {
      styleURL: this._mapOptions[this._styleURLIndex].data,
      focusedLocation: {
        latitude: -32.892715,
        longitude: -68.859356,
      },
    };
  }

  _mapOptions: ?Object;
  _styleURLIndex: ?number;

  onMapChange = (index: any, styleURL: any) => {
    this.setState({ styleURL });
  };

  changeMapStyle = () => {
    if (this._mapOptions) {
      this._styleURLIndex = ((this._styleURLIndex || 0) + 1) % this._mapOptions.length;
      this.setState({
        styleURL: this._mapOptions[this._styleURLIndex].data,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          showUserLocation
          centerCoordinate={[
            this.state.focusedLocation.longitude,
            this.state.focusedLocation.latitude,
          ]}
          zoomLevel={5}
          styleURL={this.state.styleURL}
          style={styles.map}
        />
        <View style={styles.button}>
          <Button title="Locate me" onPress={() => alert('Pick location')} />
          <Button title="Change Map Style" onPress={this.changeMapStyle} />
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
  map: {
    flex: 1,
    width: '100%',
    height: 250,
  },
});

export default PickLocation;
