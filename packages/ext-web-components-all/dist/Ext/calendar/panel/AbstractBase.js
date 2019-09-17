import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel_Component from '../../../Ext/Panel';

var Ext_calendar_panel_AbstractBase_Component =
/*#__PURE__*/
function (_Ext_Panel_Component) {
  _inheritsLoose(Ext_calendar_panel_AbstractBase_Component, _Ext_Panel_Component);

  //events
  //configs
  Ext_calendar_panel_AbstractBase_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_calendar_panel_AbstractBase_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_calendar_panel_AbstractBase_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_calendar_panel_AbstractBase_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_calendar_panel_AbstractBase_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel_Component.observedAttributes;

      for (var property in Ext_calendar_panel_AbstractBase_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_panel_AbstractBase_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_panel_AbstractBase_Component() {
    var _this;

    _this = _Ext_Panel_Component.call(this) || this;
    _this.XTYPE = Ext_calendar_panel_AbstractBase_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_calendar_panel_AbstractBase_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_calendar_panel_AbstractBase_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_calendar_panel_AbstractBase_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_calendar_panel_AbstractBase_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_panel_AbstractBase_Component;
}(Ext_Panel_Component);

export { Ext_calendar_panel_AbstractBase_Component as default };