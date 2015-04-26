"use strict";

var duration = 5000; //5sec

var fireGetRequest = function() {
    var xhrGet = new XMLHttpRequest();
    xhrGet.open('get', 'demo_data.json');
    setTimeout(function() {           //timeout for demo purpose
        xhrGet.send();
    }, duration);
};

var firePostRequest = function() {
    var xhrGet = new XMLHttpRequest();
    xhrGet.open('post', '/someUrl');
    setTimeout(function() {           //timeout for demo purpose
        xhrGet.send();
    }, duration);
};

var firePostWithJson = function() {
    var xhrGet = new XMLHttpRequest();
    xhrGet.open('post', '/someUrl.json');
    setTimeout(function() {          //timeout for demo purpose
        xhrGet.send();
    }, duration);
};

var attach = function() {
    RequestWatcher('spinnerGet', 'get');
};

var attachForPostJsons = function() {
    new RequestWatcher('spinnerPost', 'post', 'json');
};

var attachPost = function() {
    new RequestWatcher('spinnerPost', 'get');
};