# tiny-requests-watcher

Javascript library which allows to display custom spinner/loader for choosen requests - for example long lasting one.

### Demo
See [czytelny.dbox.pl/trw-demo/](http://czytelny.dbox.pl/trw-demo/) 
 
### What do I need to use it?
Nothing except library itself. It's dendency free, pure javascript solution so you can use it on any project.

### How can I use it?
* Take a look to dist folder. Choose minified (with *.min.js extension) or normal version. Provided css is just an example, feel free to use your own. 
* Attach it to your website.
```html    
<link rel="stylesheet" href="css/tiny-rw.css"/>
<script src="js/tiny-rw.js"></script>
```
    
* Create spinner (or loader) elemnt in your HTML, for example
```html
<div id="spinnerForGetRequests" class="spinner"></div> 
```

and then initialize in a javascript file:
```js
var rw = new RequestWatcher('spinnerForGetRequests', 'get');
```

That's it.

### Available constructor arguments
* `spinnerElementId`
* `request_type` 
* `url_pattern`

### Change log
#### v. 0.1 
* Initial version
