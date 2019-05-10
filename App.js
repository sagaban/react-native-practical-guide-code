/**
 * @format
 * @flow
 */
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from '@/screens/Auth/Auth';
import SharePlaceScreen from '@/screens/SharePlace/SharePlace';
import FindPlaceScreen from '@/screens/FindPlace/FindPlace';
import PlaceDetailsScreen from '@/screens/PlaceDetails/PlaceDetails';

import configureStore from '@/store/configureStore';

import type { ComponentType } from 'react';

const store = configureStore();

const registerComponent = (
  name: string,
  Component: ComponentType<any>,
  useRedux: boolean = true
) => {
  if (useRedux) {
    Navigation.registerComponent(
      name,
      () => props => (
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      ),
      () => Component
    );
  } else {
    Navigation.registerComponent(name, () => Component);
  }
};

// Register Screens
registerComponent('awesome-places.AuthScreen', AuthScreen);
registerComponent('awesome-places.SharePlaceScreen', SharePlaceScreen);
registerComponent('awesome-places.FindPlaceScreen', FindPlaceScreen);
registerComponent('awesome-places.PlaceDetailsScreen', PlaceDetailsScreen);

// Start a App
Navigation.setRoot({
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'awesome-places.AuthScreen',
          },
        },
      ],
      options: {
        topBar: {
          title: {
            text: 'Login',
          },
        },
      },
    },
  },
});
