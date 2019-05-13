/**
 * @format
 * @flow
 */
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTab = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('md-share-alt', 30),
    Icon.getImageSource('ios-menu', 30),
  ]).then(([mapIcon, shareIcon, menuIcon]) => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          id: 'sideMenu',
          left: {
            component: {
              name: 'awesome-places.SideDrawerScreen',
            },
          },
          center: {
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
                      topBar: {
                        title: {
                          text: 'Find Place',
                        },
                        leftButtons: [
                          {
                            id: 'sideMenuToggle',
                            icon: menuIcon,
                            title: 'Menu',
                          },
                        ],
                      },
                    },
                  },
                },
                {
                  stack: {
                    id: 'findPlacesStack',
                    children: [
                      {
                        component: {
                          name: 'awesome-places.SharePlaceScreen',
                        },
                      },
                    ],
                    options: {
                      bottomTab: {
                        text: 'Share Place',
                        icon: shareIcon,
                      },
                      topBar: {
                        title: {
                          text: 'Share Place',
                        },
                        leftButtons: [
                          {
                            id: 'sideMenuToggle',
                            icon: menuIcon,
                            title: 'Menu',
                          },
                        ],
                      },
                    },
                  },
                },
              ],
            },
          },
        },
      },
    });
  });
};

export default startTab;
