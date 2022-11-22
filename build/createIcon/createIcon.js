'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var IconBase = require('../IconBase/IconBase.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function createIcon(content, overrideProps) {
    return React.forwardRef((props, ref) => (React__default['default'].createElement(IconBase.IconBase, Object.assign({ ref: ref }, overrideProps, props), content)));
}

exports.createIcon = createIcon;
//# sourceMappingURL=createIcon.js.map
