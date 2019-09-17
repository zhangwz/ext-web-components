import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Button_Component from '../../Ext/Button';

var Ext_tab_Tab_Component =
/*#__PURE__*/
function (_Ext_Button_Component) {
  _inheritsLoose(Ext_tab_Tab_Component, _Ext_Button_Component);

  //configs
  Ext_tab_Tab_Component.XTYPE = function XTYPE() {
    return 'tab';
  };

  Ext_tab_Tab_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "active": ["boolean"],
      "closable": ["boolean"],
      "rotation": ["string"],
      "tabPosition": ["string"],
      "title": ["string"]
    };
  };

  Ext_tab_Tab_Component.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'undefined'
    }, {
      name: 'deactivate',
      parameters: 'undefined'
    }];
  };

  Ext_tab_Tab_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_tab_Tab_Component, [{
    key: "onactivate",
    //events
    get: function get() {
      return this.getAttribute('onactivate');
    },
    set: function set(onactivate) {
      this.setAttribute('onactivate', onactivate);
    }
  }, {
    key: "ondeactivate",
    get: function get() {
      return this.getAttribute('ondeactivate');
    },
    set: function set(ondeactivate) {
      this.setAttribute('ondeactivate', ondeactivate);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Button_Component.observedAttributes;

      for (var property in Ext_tab_Tab_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_tab_Tab_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_tab_Tab_Component(propertiesobject, methods, events) {
    return _Ext_Button_Component.call(this, Object.assign(propertiesobject, Ext_tab_Tab_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_tab_Tab_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_tab_Tab_Component.METHODS()), events.concat(Ext_tab_Tab_Component.EVENTS())) || this; //this.XTYPE = Ext_tab_Tab_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_tab_Tab_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_tab_Tab_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_tab_Tab_Component.EVENTS());
  }

  var _proto = Ext_tab_Tab_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Button_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Button_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_tab_Tab_Component;
}(Ext_Button_Component);

export { Ext_tab_Tab_Component as default };