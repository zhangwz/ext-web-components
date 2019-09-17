import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget_Component from '../../Ext/Gadget';

var Ext_calendar_EventBase_Component =
/*#__PURE__*/
function (_Ext_Gadget_Component) {
  _inheritsLoose(Ext_calendar_EventBase_Component, _Ext_Gadget_Component);

  //events
  //configs
  Ext_calendar_EventBase_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_calendar_EventBase_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "defaultTitle": ["string"],
      "endDate": ["date"],
      "mode": ["string"],
      "model": ["Ext.calendar.model.EventBase"],
      "palette": ["Ext.calendar.theme.Palette"],
      "resize": ["boolean"],
      "startDate": ["date"],
      "title": ["string"],
      "touchAction": ["object"],
      "view": ["Ext.calendar.view.Base"]
    };
  };

  Ext_calendar_EventBase_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_calendar_EventBase_Component.METHODS = function METHODS() {
    return [{
      name: 'cloneForProxy',
      "function": function _function() {
        return this.ext.cloneForProxy();
      }
    }];
  };

  _createClass(Ext_calendar_EventBase_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Gadget_Component.observedAttributes;

      for (var property in Ext_calendar_EventBase_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_EventBase_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_EventBase_Component(propertiesobject, methods, events) {
    return _Ext_Gadget_Component.call(this, Object.assign(propertiesobject, Ext_calendar_EventBase_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_calendar_EventBase_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_calendar_EventBase_Component.METHODS()), events.concat(Ext_calendar_EventBase_Component.EVENTS())) || this; //this.XTYPE = Ext_calendar_EventBase_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_EventBase_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_calendar_EventBase_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_calendar_EventBase_Component.EVENTS());
  }

  var _proto = Ext_calendar_EventBase_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Gadget_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Gadget_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_EventBase_Component;
}(Ext_Gadget_Component);

export { Ext_calendar_EventBase_Component as default };