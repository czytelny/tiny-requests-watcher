/**
    Tiny requests watcher. 
    Supported by >=IE9 and other modern browsers    
**/

//type="GET" || "POST". undefined == all type of requests (post,get etc)
var RequestWatcher = function(spinnerId, type) {    
     var openProto = XMLHttpRequest.prototype.open;
     XMLHttpRequest.prototype.open = function(requestType, requestUrl) {  
            openProto.apply(this, arguments);
            var xhr = this;
            if (type) {
                if (requestType.toLowerCase() === type.toLowerCase()) {
                    var spinnerElement = document.getElementById(spinnerId);
                    spinnerElement.style.display = "block";          

                    xhr.addEventListener("load", function() {
                        spinnerElement.style.display = "none";       
                    }, false);
                }            
            }
     };
};