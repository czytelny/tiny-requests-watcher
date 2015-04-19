"use strict";

var rw = new RequestWatcher('spinner', 'get');


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("successfull received");
    }
};
xhr.open('get', 'demo_data.json');
xhr.send();