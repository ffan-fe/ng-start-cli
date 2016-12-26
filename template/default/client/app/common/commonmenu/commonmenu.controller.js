import logoImg from './images/cloud-logo.png';

'use strict';

export default class commonMenuController {
	constructor($scope,) {
		"ngInject";
		this.$scope = $scope;
		this.logoImg = logoImg;
		this.showSub = false;
	}

	collapse(e) {
		$(e.target).parent().find('.sub-menu').toggle();
	}
}
