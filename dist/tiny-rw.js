"use strict";

/**
 * Tiny requests watcher.
 * Supported by >=IE9 and other modern browsers. No external dependencies.
 **/

//type: "GET" or "POST"
var RequestWatcher = function(spinnerId, type) {
    var openProto = XMLHttpRequest.prototype.open;
    var spinnerElement = document.getElementById(spinnerId);

    XMLHttpRequest.prototype.open = function(requestType, requestUrl) {
        openProto.apply(this, arguments);
        var xhr = this;
        if (type && (requestType.toLowerCase() === type.toLowerCase())) {
            showSpinner();
            xhr.addEventListener("load", hideSpinner);
        }
    };

    function showSpinner() {
        spinnerElement.style.opacity = "1";
    }

    function hideSpinner() {
        setTimeout(function() {
            spinnerElement.style.opacity = "0";
        }, 500);
        
    }
};