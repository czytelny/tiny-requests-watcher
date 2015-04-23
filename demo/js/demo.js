"use strict";

var rw = new RequestWatcher('spinnerGet', 'get', '.json');

//var spinnerForPost = new requestWatcher('spinnerPost', 'post');

var fireGetRequest = function() {
    var xhrGet = new XMLHttpRequest();
    xhrGet.open('get', 'demo_data.json');
    setTimeout(function() {
        xhrGet.send();
    }, 2000);
};

var firePostRequest = function() {
    var xhrGet = new XMLHttpRequest();
    xhrGet.open('post', 'demo_data.json');
    setTimeout(function() {
        xhrGet.send();
    }, 500);
};
