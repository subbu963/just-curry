(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.justCurry = factory();
  }
}(this, function() {
  'use strict';
  function _slice(ar, begin, end) {
    return Array.prototype.slice.call(ar, begin, end);
  }
  return function _curry(fn) {
    var ctx = this;
    var args = _slice(arguments, 1);
    if(args.length >= fn.length){
      return fn.apply(ctx, args);
    }
    return function() {
      var currentArgs = [fn].concat(args, _slice(arguments, 0));
      return _curry.apply(ctx, currentArgs);
    };
  };
}));
