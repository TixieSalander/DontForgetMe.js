var title = document.title;

var DontForgetMe = (function () {
    function init() {
        _changeTitle();
    }

    function _changeTitle() {
        document.addEventListener('visibilitychange', function () {
            if (document.hidden) {
                document.title = "Don't forget me !"
            } else {
                document.title = title
            }
        })
    }

    return {
        init: init
    }
})()
DontForgetMe.init();
