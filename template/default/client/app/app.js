/**
 * bp admin entry
 * @author name emailAddress
 */

'use strict';

import angular from 'angular';
import 'ffan-admin-skin';

import ffanTable from 'ffan-ng-table';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'angular-busy/dist/angular-busy';
import 'angular-busy/angular-busy.css';
import ffanRouter from './router/router';




angular.module('app', [
    ffanRouter.name,
    Common.name,
    ffanTable.name,
    Components.name,
    'cgBusy'
  ])
  .constant('$menuConstant', {
    DEBUG: process.env.DEBUG
  })
  .component('app', AppComponent);

  console.log('process.env.DEBUG', process.env.DEBUG);
