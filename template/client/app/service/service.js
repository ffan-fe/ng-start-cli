
import Api from './base.api.js';
import BusinessLogicService from './businessLogic.js';

export default angular.module('app.services', [
])
  .service({
    Api,
    BusinessLogicService
  })
  .constant('APIBASE', '');;
