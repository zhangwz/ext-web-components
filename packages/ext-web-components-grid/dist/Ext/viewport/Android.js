import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_viewport_Default_Component from '../../Ext/viewport/Default';

var Ext_viewport_Android_Component =
/*#__PURE__*/
function (_Ext_viewport_Default) {
  _inheritsLoose(Ext_viewport_Android_Component, _Ext_viewport_Default);

  //events
  //configs
  Ext_viewport_Android_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_viewport_Android_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_viewport_Android_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_viewport_Android_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_viewport_Android_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_viewport_Default.observedAttributes;

      for (var property in Ext_viewport_Android_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_viewport_Android_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_viewport_Android_Component() {
    var _this;

    _this = _Ext_viewport_Default.call(this) || this;
    _this.XTYPE = Ext_viewport_Android_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_viewport_Android_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_viewport_Android_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_viewport_Android_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_viewport_Android_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_viewport_Default.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_viewport_Default.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_viewport_Android_Component;
}(Ext_viewport_Default_Component);

export { Ext_viewport_Android_Component as default };