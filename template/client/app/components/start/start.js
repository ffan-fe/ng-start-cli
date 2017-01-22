import startComponent from './start.component';
import {Button} from 'fancyui';

export default angular.module('start', [
  Button.name
])
.component('start', startComponent);
