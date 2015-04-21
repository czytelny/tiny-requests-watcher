"use strict";

/**
 * Tiny requests watcher.
 * Supported by >=IE9 and other modern browsers. No external dependencies.
 **/

//type: "GET" or "POST"
var RequestWatcher = (function () {
    //private variables and functions
    var openProto = XMLHttpRequest.prototype.open;

    var showSpinner = function(spinnerElement) {
        spinnerElement.style.opacity = "1";
    };

    var hideSpinner = function(spinnerElement) {
        setTimeout(function() { //just temporary fot testing purpose
            spinnerElement.style.opacity = "0";
        }, 500);
    };

    var hideSpinnerCurried = function(spinnerElement) {
        return function() {
            hideSpinner(spinnerElement);
        }
    };

    // constructor
    var RequestWatcher = function(spinnerId, type) {
        var spinnerElement = document.getElementById(spinnerId);

        XMLHttpRequest.prototype.open = function(requestType, requestUrl) {
            openProto.apply(this, arguments);
            var xhr = this;
            if (type && (requestType.toLowerCase() === type.toLowerCase())) {
                showSpinner(spinnerElement);
                xhr.addEventListener("load", hideSpinnerCurried(spinnerElement));
            }
        };
    };

    RequestWatcher.prototype = {
        constructor: RequestWatcher,
        version: '1.0',
        setBackground: function(color) {
            console.log("mock: background set to " + color);
        }
    };
    return RequestWatcher;
})();