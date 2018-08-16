/** @format */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import * as firebase from 'firebase';

AppRegistry.registerComponent(appName, () => App);
