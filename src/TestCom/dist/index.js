(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}(function () { 'use strict';

    var a = 1;
    var b = 2;
    var add = function () {
        return a + b;
    };
    console.log(add());

}));
//# sourceMappingURL=index.js.map
