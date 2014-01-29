(function () {

	"use strict";

	var ngApp = angular.module('{{app}}', ['ngRoute', '{{app}}Controllers']);
	var ngControllers = angular.module('{{app}}Controllers', []);

	// @depends routes/index.js
	// @depends controllers/index.js

})();