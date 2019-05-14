/**
 * @format
 * @flow
 */
import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startTab = () => {
  const isAndroid = Platform.OS === 'android';
  Promise.all([
    Icon.getImageSource(isAndroid ? 'md-map' : 'ios-map', 30),
    Icon.getImageSource(isAndroid ? 'md-share-alt' : 'ios-share', 30),
    Icon.getImageSource(isAndroid ? 'md-menu' : 'ios-menu', 30),
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
                        selectedIconColor: 'orange',
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
                        selectedIconColor: 'orange',
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
