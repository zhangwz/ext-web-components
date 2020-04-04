import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_form_SearchField from './Ext/ux/form/SearchField.js';
import ElementParser from './common/ElementParser.js';

var EWCSearchfield = /*#__PURE__*/function (_Ext_ux_form_SearchFi) {
  _inheritsLoose(EWCSearchfield, _Ext_ux_form_SearchFi);

  var _super = _createSuper(EWCSearchfield);

  function EWCSearchfield() {
    var _this;

    _this = _Ext_ux_form_SearchFi.call(this, [], []) || this;
    _this.xtype = 'searchfield';
    return _this;
  }

  return EWCSearchfield;
}(Ext_ux_form_SearchField);

export { EWCSearchfield as default };

try {
  if (window.customElements.get('ext-searchfield') == undefined) {
    window.customElements.define('ext-searchfield', ElementParser.withParsedCallback(EWCSearchfield));
  }
} catch (e) {
  if (window.customElements.get('ext-searchfield') == undefined) {
    window.customElements.define('ext-searchfield', EWCSearchfield);
  }
}