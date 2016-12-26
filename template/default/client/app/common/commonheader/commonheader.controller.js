'use strict';

export default class commonHeaderController {
	constructor($scope, $document) {
		"ngInject";
		this.$scope = $scope;
		this.$document = $document;
	}

	toggleMenu() {
		this.$document.find('body').toggleClass('menu-close');
	}
}
