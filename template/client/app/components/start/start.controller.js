/**
 * (description)
 * 
 * @author yourname
 */

export default class StartController {
  constructor(BusinessLogicService) {
    'ngInject'
    this.BusinessLogicService = BusinessLogicService;
  }

  get(){
    this.BusinessLogicService.get();
  }
}