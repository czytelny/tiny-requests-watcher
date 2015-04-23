"use strict";

/**
 * Tiny requests watcher.
 * Supported by >=IE9 and other modern browsers. No external dependencies.
 **/

var RequestWatcher = (function() {
    //private variables and functions
    var openProto = XMLHttpRequest.prototype.open;

    var showSpinner = function(spinnerElement) {
        spinnerElement.style.opacity = "1";
    };

    var hideSpinner = function(spinnerElement) {
        spinnerElement.style.opacity = "0";
    };

    var hideSpinnerCurried = function(spinnerElement) {
        return function() {
            hideSpinner(spinnerElement);
        };
    };

    return function(spinnerId, type, textPattern) {
        var spinnerElement = document.getElementById(spinnerId);

        XMLHttpRequest.prototype.open = function(requestType, requestUrl) {
            openProto.apply(this, arguments);
            var xhr = this;
            if (textPattern) {
                var re = new RegExp(textPattern);
                if (!re.test(requestUrl)) {
                    return;
                }
            }
            if (type && (requestType.toLowerCase() === type.toLowerCase())) {
                showSpinner(spinnerElement);
                xhr.addEventListener("load", hideSpinnerCurried(spinnerElement));
            }
        };
    };
})();