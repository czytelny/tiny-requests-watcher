"use strict";

var rw = new RequestWatcher('spinner', 'get');

var xhrGet = new XMLHttpRequest();

xhrGet.onreadystatechange = function() {
    if (xhrGet.readyState === 4 && xhrGet.status === 200) {
        console.log("successfull received");
    }
};
xhrGet.open('get', 'demo_data.json');
xhrGet.send();
