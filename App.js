/**
 * @format
 * @flow
 */
import { Navigation } from 'react-native-navigation';

import AuthScreen from '@/screens/Auth/Auth';

// Register Screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);

// Start a App
Navigation.setRoot({
  root: {
    stack: {
      children: [{
        component: {
          name: 'awesome-places.AuthScreen',
        }
      }],
      options: {
        topBar: {
          title: {
            text: 'Login'
          }
        }
      }
    }
  }
});
