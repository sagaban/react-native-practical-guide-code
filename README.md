# React Native - The Practical Guide

Code created following the [Udemy course](https://www.udemy.com/react-native-the-practical-guide/) created by [Academind](https://www.academind.com/) by [Maximilia Schwarzmüller](https://twitter.com/maxedapps).

**Some diffrerences:**

- Instead of using `React Native Navigation` v1, I went with the v2.
- I didn't use [react-native-maps](https://github.com/react-native-community/react-native-maps) due to I would need a Google billing account to get a token to get the maps working (Not today).
- Some buttons here, some styles there...

## Get it running

(**NOTE**: I only have configured and ran it for Android. Extra configuration may be required to run it over iOS).

- Install the dependencies.

      $ yarn

- Copy the `env.example.json` file and fill it properly.
- Run the project

      $ yarn android

For more informations about your device + operating system dependencies, take a look at the [official Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) page, **React Native CLI Quickstart** tab.

## Debugging

To debug the React Native app, install [React Native Debugger](https://github.com/jhen0409/react-native-debugger) and enable *Debug JS Remotely* from the app. Remember to close the browser tab that will be opened.

To get the native app logs, just run `androidLog` from the terminal.

## Resources

* [React Native Debugger](https://github.com/jhen0409/react-native-debugger)
* [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
* [React Native Navigation](https://github.com/wix/react-native-navigation)
* [Mapbox Maps SDK for React Native](https://github.com/nitaliano/react-native-mapbox-gl)
