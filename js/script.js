var DontForgetMe = (function () {
	"use strict";

	var title = document.title;

	function _changeTitle() {
		document.addEventListener('visibilitychange', function () {
			if (document.hidden) {
				document.title = "Don't forget me !";
			} else {
				document.title = title;
			}
		})
	}

	function init() {
		_changeTitle();
	}

	return {
		init: init
	}
})()
DontForgetMe.init();
