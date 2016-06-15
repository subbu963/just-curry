# just-curry
Simple curry in javascript

## Installation
```bash
$ npm install just-curry
```

## Usage
```javascript
//commonjs
var justCurry = require('just-curry');
//amd
define(['just-curry'], function(justCurry){
  ...
});
//global
var justCurry = window.justCurry;

//invocation
function sum(a, b){
  return a + b;
}
var curried = justCurry(sum);

var addOne = curried(1);
console.log(addOne(5));//Outputs - 6
```
