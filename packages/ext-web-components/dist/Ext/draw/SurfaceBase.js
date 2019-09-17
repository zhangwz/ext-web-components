import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Widget_Component from '../../Ext/Widget';

var Ext_draw_SurfaceBase_Component =
/*#__PURE__*/
function (_Ext_Widget_Component) {
  _inheritsLoose(Ext_draw_SurfaceBase_Component, _Ext_Widget_Component);

  //events
  //configs
  Ext_draw_SurfaceBase_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_draw_SurfaceBase_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_draw_SurfaceBase_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_draw_SurfaceBase_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_draw_SurfaceBase_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Widget_Component.observedAttributes;

      for (var property in Ext_draw_SurfaceBase_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_draw_SurfaceBase_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_SurfaceBase_Component(propertiesobject, methods, events) {
    return _Ext_Widget_Component.call(this, Object.assign(propertiesobject, Ext_draw_SurfaceBase_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_draw_SurfaceBase_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_draw_SurfaceBase_Component.METHODS()), events.concat(Ext_draw_SurfaceBase_Component.EVENTS())) || this; //this.XTYPE = Ext_draw_SurfaceBase_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_draw_SurfaceBase_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_draw_SurfaceBase_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_draw_SurfaceBase_Component.EVENTS());
  }

  var _proto = Ext_draw_SurfaceBase_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Widget_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Widget_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_SurfaceBase_Component;
}(Ext_Widget_Component);

export { Ext_draw_SurfaceBase_Component as default };