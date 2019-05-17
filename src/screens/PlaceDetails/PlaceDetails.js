/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import MapboxGL from '@/../node_modules/@mapbox/react-native-mapbox-gl';

import { deletePlace } from '@/store/actions';

import type { Item } from '@/types/store';

type Props = {
  selectedPlace: Item,
  onModalClose: Function,
  onDeletePlace: Function,
};
type State = {
  isPortrait: boolean,
};

class PlaceDetails extends Component<Props, State> {
  state = {
    isPortrait: true,
  };

  constructor(props: Props) {
    super(props);
    Dimensions.addEventListener('change', this.updateStyles);
    Navigation.events().bindComponent(this);
  }

  updateStyles = (dims: Object) => {
    this.setState({
      isPortrait: dims.window.height > 500,
    });
  };

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateStyles);
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === 'sideMenuToggle') {
      Navigation.mergeOptions('sideMenu', {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
      Navigation.mergeOptions('leftSideMenu', {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    }
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    Navigation.pop('findPlacesStack');
  };

  closeModalHandler = () => {
    Navigation.pop('findPlacesStack');
  };

  render() {
    const centeredLocation = [
      this.props.selectedPlace.location.longitude,
      this.props.selectedPlace.location.latitude,
    ];
    return (
      <View
        style={[
          styles.container,
          this.state.isPortrait ? styles.portraitContainer : styles.landscapeContainer,
        ]}>
        <View style={styles.subContainer}>
          <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
        </View>
        <View style={styles.subContainer}>
          <MapboxGL.MapView
            centerCoordinate={centeredLocation}
            zoomLevel={4}
            styleURL="mapbox://styles/mapbox/outdoors-v10"
            style={styles.map}>
            <MapboxGL.PointAnnotation id="chosenLocationMarker" coordinate={centeredLocation} />
          </MapboxGL.MapView>
        </View>
        <View style={styles.smallSubContainer}>
          <View>
            <Text style={styles.placeName}>{this.props.selectedPlace.value}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={this.placeDeletedHandler}>
              <View style={styles.deleteButton}>
                <Icon
                  size={30}
                  name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                  color="red"
                />
              </View>
            </TouchableOpacity>
            <Button title="Close" onPress={this.closeModalHandler} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22,
    flex: 1,
  },
  portraitContainer: {
    flexDirection: 'column',
  },
  landscapeContainer: {
    flexDirection: 'row',
  },
  subContainer: {
    flex: 2,
    margin: 1,
  },
  smallSubContainer: {
    flex: 1,
    margin: 1,
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
  },
  placeImage: {
    flex: 1,

    width: '100%',
    height: 200,
  },
  deleteButton: {
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
    height: 250,
  },
});

const mapDispatchToProps = dispatch => ({
  onDeletePlace: key => dispatch(deletePlace(key)),
});

export default connect(
  null,
  mapDispatchToProps
)(PlaceDetails);
