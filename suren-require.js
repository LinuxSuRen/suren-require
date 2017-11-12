var sRequire = (function () {
    var suren_require = function () {
        console.log(arguments);
    };

    return suren_require;
}());

if(typeof exports === 'object' && exports) {
    exports.suren_require = sRequire;
}

if(typeof define !== 'undefined') {
    define('suren-require', ['module'], function (module) {
        'use strict';

        var sr = {
            load: function (name, req, onLoad, config) {
                console.log('hello from surenpi.com suren-require');

                onLoad();

                return 'load';
            },
            finishLoad: function (name, strip, content, onLoad) {
                onLoad(content);
            },
            write: {}
        };

        return sr;
    });
}