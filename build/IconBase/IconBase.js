'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function getIconMeasures(size) {
    if (size === "sm") {
        return ["1rem", "1rem"];
    }
    if (size === "md") {
        return ["1.25rem", "1.25rem"];
    }
    if (size === "lg") {
        return ["1.5rem", "1.5rem"];
    }
    return [`${size}rem`, `${size}rem`];
}
const IconBase = React.forwardRef((_a, ref) => {
    var { size = "md", viewBox = "0 0 24 24", children } = _a, props = _tslib.__rest(_a, ["size", "viewBox", "children"]);
    const [width, height] = getIconMeasures(size);
    return (React__default['default'].createElement("svg", Object.assign({ ref: ref, width: width, height: height, viewBox: viewBox }, props, { xmlns: "http://www.w3.org/2000/svg" }), children));
});

exports.IconBase = IconBase;
//# sourceMappingURL=IconBase.js.map
