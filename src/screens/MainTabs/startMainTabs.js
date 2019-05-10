/**
 * @format
 * @flow
 */
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTab = () => {
  Promise.all([Icon.getImageSource('md-map', 30), Icon.getImageSource('md-share-alt', 30)]).then(
    ([mapIcon, shareIcon]) => {
      Navigation.setRoot({
        root: {
          bottomTabs: {
            children: [
              {
                stack: {
                  id: 'findPlacesStack',
                  children: [
                    {
                      component: {
                        name: 'awesome-places.FindPlaceScreen',
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      text: 'Find Place',
                      icon: mapIcon,
                    },
                    //Top Bar requires a stack of children
                    topBar: {
                      title: {
                        text: 'Find Place',
                      },
                    },
                  },
                },
              },
              {
                component: {
                  name: 'awesome-places.SharePlaceScreen',
                  options: {
                    bottomTab: {
                      text: 'Share Place',
                      icon: shareIcon,
                    },
                  },
                },
              },
            ],
          },
        },
      });
    }
  );
};

export default startTab;
