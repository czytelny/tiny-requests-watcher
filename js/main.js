/**
    Tiny requests watcher. 
    Supported by >=IE9 and other modern browsers    
**/

//type="GET" || "POST". undefined == all type of requests (post,get etc)
var RequestWatcher = function(spinnerElement, type) {    
     var openProto = XMLHttpRequest.prototype.open;

     XMLHttpRequest.prototype.open = function(requestType, requestUrl) {  
            openProto.apply(this, arguments);
            var xhr = this;
            if (type) {
                if (requestType.toLowerCase() === type.toLowerCase) {
                    spinnerElement.style.display = "block";          

                    openProto.addEventListener("load", function() {
                        spinnerElement.style.display = "none";       
                    }, false);
                }            
            }
     };
};