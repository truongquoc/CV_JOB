/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
// import App from './App';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import App from './src/app/app';
import { name as appName } from './app.json';

LogBox.ignoreLogs([
  'Cannot update during an existing state transition',
  'Warning: Cannot update a component from inside the function body of a different component',
  'Can\'t perform a React state update on an unmounted component',
]);
AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
