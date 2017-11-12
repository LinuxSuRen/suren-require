#!/usr/bin/env node

console.log("hello from suren");

var sRequire = (function () {
    var suren_require = function () {
        console.log(arguments);
    };

    return suren_require;
}());

if(typeof exports === 'object' && exports) {
    exports.suren_require = sRequire;
}