import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_BaseField from './Ext/form/BaseField.js';
import ElementParser from './common/ElementParser.js';

var EWCField = /*#__PURE__*/function (_Ext_form_BaseField) {
  _inheritsLoose(EWCField, _Ext_form_BaseField);

  var _super = _createSuper(EWCField);

  function EWCField() {
    var _this;

    _this = _Ext_form_BaseField.call(this, [], []) || this;
    _this.xtype = 'field';
    return _this;
  }

  return EWCField;
}(Ext_form_BaseField);

export { EWCField as default };

try {
  if (window.customElements.get('ext-field') == undefined) {
    window.customElements.define('ext-field', ElementParser.withParsedCallback(EWCField));
  }
} catch (e) {
  if (window.customElements.get('ext-field') == undefined) {
    window.customElements.define('ext-field', EWCField);
  }
}