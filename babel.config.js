module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "@": "./src",
        // "types": "./src/types",
        // "components": "./src/components",
      },
      "cwd": "babelrc",
    }]
  ],
};
