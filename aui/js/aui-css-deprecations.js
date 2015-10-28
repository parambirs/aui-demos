// bower_components/aui/src/js/aui-css-deprecations.js
(typeof window === 'undefined' ? global : window).__e0c293a168d17be2a0fe6a2a2e5f2246 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _auiInternalDeprecation = __1df7fa7706495bf4863a6cb6e7a17315;
  
  var _auiInternalAmdify = __62cd307cf3fa2f6c307aa02101245313;
  
  var _auiInternalAmdify2 = _interopRequireDefault(_auiInternalAmdify);
  
  (0, _auiInternalDeprecation.css)('.aui-badge', {
      displayName: 'AUI Badges class'
  });
  (0, _auiInternalDeprecation.css)('.aui-dropdown2-trigger.aui-style-dropdown2triggerlegacy1', {
      displayName: 'Dropdown2 legacy trigger'
  });
  (0, _auiInternalDeprecation.css)('.aui-message span.aui-icon', {
      displayName: 'Message icon span'
  });
  (0, _auiInternalDeprecation.css)('.aui-zebra', {
      displayName: 'Zebra table rows'
  });
  (0, _auiInternalDeprecation.css)('.aui-nav-pagination > li.aui-nav-current', {
      alternativeName: 'aui-nav-selected'
  });
  (0, _auiInternalDeprecation.css)('.aui-tabs.vertical-tabs', {
      displayName: 'Vertical tabs'
  });
  (0, _auiInternalDeprecation.css)('form.aui span.content');
  (0, _auiInternalDeprecation.css)(['form.aui .button', 'form.aui .buttons-container'], {
      displayName: 'Unprefixed buttons',
      alternativeName: 'aui-button and aui-buttons'
  });
  (0, _auiInternalDeprecation.css)(['form.aui .icon-date', 'form.aui .icon-range', 'form.aui .icon-help', 'form.aui .icon-required', 'form.aui .icon-inline-help', 'form.aui .icon-users', '.aui-icon-date', '.aui-icon-range', '.aui-icon-help', '.aui-icon-required', '.aui-icon-users', '.aui-icon-inline-help'], {
      displayName: 'Form icons'
  });
  (0, _auiInternalDeprecation.css)(['.aui-icon.icon-move-d', '.aui-icon.icon-move', '.aui-icon.icon-dropdown-d', '.aui-icon.icon-dropdown', '.aui-icon.icon-dropdown-active-d', '.aui-icon.icon-dropdown-active', '.aui-icon.icon-minimize-d', '.aui-icon.icon-minimize', '.aui-icon.icon-maximize-d', '.aui-icon.icon-maximize'], {
      displayName: 'Core icons'
  });
  (0, _auiInternalDeprecation.css)(['.aui-message.error', '.aui-message.warning', '.aui-message.hint', '.aui-message.info', '.aui-message.success'], {
      displayName: 'Unprefixed message types AUI-2150'
  });
  (0, _auiInternalDeprecation.css)(['.aui-dropdown2 .active', '.aui-dropdown2 .checked', '.aui-dropdown2 .disabled', '.aui-dropdown2 .interactive'], {
      displayName: 'Unprefixed dropdown2 css AUI-2150'
  });
  
  (0, _auiInternalDeprecation.css)(['aui-page-header-marketing', 'aui-page-header-hero'], {
      displayName: 'Marketing style headings'
  });
  
  // 5.9.0
  // -----
  
  var fiveNineZero = {
      // Inline Dialog
      'arrow': 'aui-inline-dialog-arrow',
      'contents': 'aui-inline-dialog-contents',
  
      // Messages
      'error': 'aui-message-error',
      'generic': 'aui-message-generic',
      'hint': 'aui-message-hint',
      'info': 'aui-message-info',
      'success': 'aui-message-success',
      'warning': 'aui-message-warning'
  };
  var name;
  
  for (name in fiveNineZero) {
      if (Object.hasOwnProperty.call(fiveNineZero, name)) {
          (0, _auiInternalDeprecation.css)(name, {
              alternativeName: fiveNineZero[name],
              removeVersion: '6.0.0',
              sinceVersion: '5.9.0'
          });
      }
  }
  
  (0, _auiInternalAmdify2['default'])('aui/css-deprecation-warnings');
  
  return module.exports;
}).call(this);

// src/js/aui-css-deprecations.js
(typeof window === 'undefined' ? global : window).__71bbc9a0abb7a1b51f0cab5be1adac57 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  __e0c293a168d17be2a0fe6a2a2e5f2246;
  
  return module.exports;
}).call(this);