import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Text_Component from '../../Ext/field/Text';

var Ext_field_Password_Component =
/*#__PURE__*/
function (_Ext_field_Text_Compo) {
  _inheritsLoose(Ext_field_Password_Component, _Ext_field_Text_Compo);

  //events
  //configs
  Ext_field_Password_Component.XTYPE = function XTYPE() {
    return 'passwordfield';
  };

  Ext_field_Password_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "autoCapitalize": ["boolean"],
      "inputType": ["string"],
      "revealable": ["boolean"],
      "revealed": ["boolean"]
    };
  };

  Ext_field_Password_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_field_Password_Component.METHODS = function METHODS() {
    return [{
      name: 'doRevealTap',
      "function": function _function(me, e) {
        return this.ext.doRevealTap(me, e);
      }
    }];
  };

  _createClass(Ext_field_Password_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Text_Compo.observedAttributes;

      for (var property in Ext_field_Password_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_Password_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_Password_Component(propertiesobject, methods, events) {
    return _Ext_field_Text_Compo.call(this, Object.assign(propertiesobject, Ext_field_Password_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_field_Password_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_field_Password_Component.METHODS()), events.concat(Ext_field_Password_Component.EVENTS())) || this; //this.XTYPE = Ext_field_Password_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Password_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_field_Password_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_field_Password_Component.EVENTS());
  }

  var _proto = Ext_field_Password_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Text_Compo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Text_Compo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_Password_Component;
}(Ext_field_Text_Component);

export { Ext_field_Password_Component as default };