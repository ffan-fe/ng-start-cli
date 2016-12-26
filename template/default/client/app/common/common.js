/**
 * @author name emailAddress
 */

'use strict';

import angular from 'angular';
import './commonheader/commonheader';
import './commonmenu/commonmenu';

let commonModule = angular.module('app.common', [
  'commonmenu',
  'commonheader'
]);

export default commonModule;
