(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'skatejs'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('skatejs'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.skate);
    global.skate = mod.exports;
  }
})(this, function (exports, module, _skatejs) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _skate = _interopRequireDefault(_skatejs);

  var auiSkate = _skate['default'].noConflict();

  module.exports = auiSkate;
});
//# sourceMappingURL=../../../js/aui/internal/skate.js.map