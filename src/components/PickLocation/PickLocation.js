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
  locationChosen: boolean,
  zoom: number,
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
      locationChosen: false,
      zoom: 5,
    };
  }

  _mapOptions: ?Object;
  _map: ?any;
  _styleURLIndex: ?number;

  changeMapStyle = () => {
    if (this._mapOptions) {
      this._styleURLIndex = ((this._styleURLIndex || 0) + 1) % this._mapOptions.length;
      this.setState({
        styleURL: this._mapOptions[this._styleURLIndex].data,
      });
    }
  };

  /*
{
  "properties": {
    "screenPointY": 345.2593994140625,
    "screenPointX": 553.4874877929688
  },
  "geometry": {
    "coordinates": [
      -68.7605705782276,
      -32.70961968208445
    ],
    "type": "Point"
  },
  "type": "Feature"
}
*/
  pickLocationHandler = (event: any) => {
    const [longitude, latitude] = event.geometry.coordinates;
    this.setState(prevState => {
      return {
        focusedLocation: {
          latitude,
          longitude,
        },
        locationChosen: true,
      };
    });
  };

  onRegionDidChange = () => {
    if (this._map) {
      this._map.getZoom().then(zoom => {
        this.setState({ zoom });
      });
    }
  };

  render() {
    let marker = null;
    const centeredLocation = [
      this.state.focusedLocation.longitude,
      this.state.focusedLocation.latitude,
    ];

    if (this.state.locationChosen) {
      marker = <MapboxGL.PointAnnotation id="chosenLocationMarker" coordinate={centeredLocation} />;
    }
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          showUserLocation
          centerCoordinate={centeredLocation}
          zoomLevel={this.state.zoom}
          styleURL={this.state.styleURL}
          style={styles.map}
          onPress={this.pickLocationHandler}
          onRegionDidChange={this.onRegionDidChange}
          animated
          ref={c => (this._map = c)}>
          {marker}
        </MapboxGL.MapView>
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
