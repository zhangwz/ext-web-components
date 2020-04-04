import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_trigger_Trigger from './Ext/field/trigger/Trigger.js';
import ElementParser from './common/ElementParser.js';

var EWCTrigger = /*#__PURE__*/function (_Ext_field_trigger_Tr) {
  _inheritsLoose(EWCTrigger, _Ext_field_trigger_Tr);

  var _super = _createSuper(EWCTrigger);

  function EWCTrigger() {
    var _this;

    _this = _Ext_field_trigger_Tr.call(this, [], []) || this;
    _this.xtype = 'trigger';
    return _this;
  }

  return EWCTrigger;
}(Ext_field_trigger_Trigger);

export { EWCTrigger as default };

try {
  if (window.customElements.get('ext-trigger') == undefined) {
    window.customElements.define('ext-trigger', ElementParser.withParsedCallback(EWCTrigger));
  }
} catch (e) {
  if (window.customElements.get('ext-trigger') == undefined) {
    window.customElements.define('ext-trigger', EWCTrigger);
  }
}