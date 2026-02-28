const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const root = path.resolve(__dirname, '..');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  watchFolders: [root],
  resolver: {
    extraNodeModules: {
      '@k-workspace/react-native-liquidglass-view': root,
    },
    // Avoid resolving duplicate react / react-native from the parent
    blockList: [
      new RegExp(
        path.resolve(root, 'node_modules', 'react-native', '.*').replace(/\\/g, '\\\\'),
      ),
      new RegExp(
        path.resolve(root, 'node_modules', 'react', '.*').replace(/\\/g, '\\\\'),
      ),
    ],
    nodeModulesPaths: [
      path.resolve(__dirname, 'node_modules'),
    ],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
