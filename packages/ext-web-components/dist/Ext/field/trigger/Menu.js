import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Trigger_Component from '../../../Ext/field/trigger/Trigger';

var Ext_field_trigger_Menu_Component =
/*#__PURE__*/
function (_Ext_field_trigger_Tr) {
  _inheritsLoose(Ext_field_trigger_Menu_Component, _Ext_field_trigger_Tr);

  //events
  //configs
  Ext_field_trigger_Menu_Component.XTYPE = function XTYPE() {
    return 'menutrigger';
  };

  Ext_field_trigger_Menu_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "destroyMenu": ["boolean"],
      "menu": ["Ext.menu.Menu", "string", "object"],
      "menuAlign": ["string"]
    };
  };

  Ext_field_trigger_Menu_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_field_trigger_Menu_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_field_trigger_Menu_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_trigger_Tr.observedAttributes;

      for (var property in Ext_field_trigger_Menu_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_trigger_Menu_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_trigger_Menu_Component(propertiesobject, methods, events) {
    return _Ext_field_trigger_Tr.call(this, Object.assign(propertiesobject, Ext_field_trigger_Menu_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_field_trigger_Menu_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_field_trigger_Menu_Component.METHODS()), events.concat(Ext_field_trigger_Menu_Component.EVENTS())) || this; //this.XTYPE = Ext_field_trigger_Menu_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_trigger_Menu_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_field_trigger_Menu_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_field_trigger_Menu_Component.EVENTS());
  }

  var _proto = Ext_field_trigger_Menu_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_trigger_Tr.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_trigger_Tr.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_trigger_Menu_Component;
}(Ext_field_trigger_Trigger_Component);

export { Ext_field_trigger_Menu_Component as default };