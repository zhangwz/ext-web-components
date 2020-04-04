import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_colorpick_Selector from './Ext/ux/colorpick/Selector.js';
import ElementParser from './common/ElementParser.js';

var EWCColorselector = /*#__PURE__*/function (_Ext_ux_colorpick_Sel) {
  _inheritsLoose(EWCColorselector, _Ext_ux_colorpick_Sel);

  var _super = _createSuper(EWCColorselector);

  function EWCColorselector() {
    var _this;

    _this = _Ext_ux_colorpick_Sel.call(this, [], []) || this;
    _this.xtype = 'colorselector';
    return _this;
  }

  return EWCColorselector;
}(Ext_ux_colorpick_Selector);

export { EWCColorselector as default };

try {
  if (window.customElements.get('ext-colorselector') == undefined) {
    window.customElements.define('ext-colorselector', ElementParser.withParsedCallback(EWCColorselector));
  }
} catch (e) {
  if (window.customElements.get('ext-colorselector') == undefined) {
    window.customElements.define('ext-colorselector', EWCColorselector);
  }
}