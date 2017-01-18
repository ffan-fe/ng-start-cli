/**
 * bp admin entry
 * @author name emailAddress
 */

'use strict';

import angular from 'angular';

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import router from './router/router';
import './skin/theme.less';

angular.module('app', [
    router.name,
    Common.name,
    Components.name
  ])
  .constant('$menuConstant', {
    DEBUG: process.env.DEBUG
  })
  .component('app', AppComponent);

  console.log('process.env.DEBUG', process.env.DEBUG);
