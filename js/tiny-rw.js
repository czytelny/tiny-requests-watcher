"use strict";

/**
 * Tiny requests watcher.
 * Supported by >=IE9 and other modern browsers. No external dependencies.
 **/

var RequestWatcher = (function() {
    //private variables and functions
    var openProto = XMLHttpRequest.prototype.open;
    var watchers = [];

    var showSpinner = function(spinnerElement) {
        spinnerElement.style.opacity = "1";
        spinnerElement.style.display = "block";
    };

    var hideSpinner = function(spinnerElement) {
        spinnerElement.style.opacity = "0";
        setTimeout(function() {
            spinnerElement.style.display = "none";
        }, 300);
    };

    var hideSpinnerCurried = function(spinnerElement) {
        return function() {
            hideSpinner(spinnerElement);
        };
    };

    var registerNewWatcher = function() {
        watchers.push(this);
    };

    var rewritePrototype = function() {
        XMLHttpRequest.prototype.open = function(requestType, requestUrl) {
            openProto.apply(this, arguments);
            var watchersLength = watchers.length;
            var xhr = this;

            for (var i = 0; i < watchersLength; i++) {
                var spinnerElement = watchers[i].spinnerElement;
                var type = watchers[i].typePattern;
                var textPattern = watchers[i].textPattern;

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
            }
        };
    };

    return function(spinnerId, type, textPattern) {
        if (!(this instanceof RequestWatcher)) {
            return new RequestWatcher(spinnerId, type, textPattern);
        }

        this.spinnerElement = document.getElementById(spinnerId);
        this.textPattern = textPattern;
        this.typePattern = type;

        registerNewWatcher.call(this);
        rewritePrototype.call(this);
    };
})();