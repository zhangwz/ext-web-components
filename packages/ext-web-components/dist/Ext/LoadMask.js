import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mask_Component from '../Ext/Mask';

var Ext_LoadMask_Component =
/*#__PURE__*/
function (_Ext_Mask_Component) {
  _inheritsLoose(Ext_LoadMask_Component, _Ext_Mask_Component);

  //events
  //configs
  Ext_LoadMask_Component.XTYPE = function XTYPE() {
    return 'loadmask';
  };

  Ext_LoadMask_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "cls": ["string"],
      "indicator": ["boolean"],
      "message": ["string"],
      "messageCls": ["string"]
    };
  };

  Ext_LoadMask_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_LoadMask_Component.METHODS = function METHODS() {
    return [{
      name: 'updateIndicator',
      "function": function _function(newIndicator) {
        return this.ext.updateIndicator(newIndicator);
      }
    }, {
      name: 'updateMessage',
      "function": function _function(newMessage) {
        return this.ext.updateMessage(newMessage);
      }
    }, {
      name: 'updateMessageCls',
      "function": function _function(newMessageCls, oldMessageCls) {
        return this.ext.updateMessageCls(newMessageCls, oldMessageCls);
      }
    }];
  };

  _createClass(Ext_LoadMask_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Mask_Component.observedAttributes;

      for (var property in Ext_LoadMask_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_LoadMask_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_LoadMask_Component(propertiesobject, methods, events) {
    return _Ext_Mask_Component.call(this, Object.assign(propertiesobject, Ext_LoadMask_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_LoadMask_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_LoadMask_Component.METHODS()), events.concat(Ext_LoadMask_Component.EVENTS())) || this; //this.XTYPE = Ext_LoadMask_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_LoadMask_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_LoadMask_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_LoadMask_Component.EVENTS());
  }

  var _proto = Ext_LoadMask_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Mask_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Mask_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_LoadMask_Component;
}(Ext_Mask_Component);

export { Ext_LoadMask_Component as default };