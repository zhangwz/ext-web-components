import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget from '../../Ext/Gadget.js';

var Ext_ux_Gauge =
/*#__PURE__*/
function (_Ext_Gadget) {
  _inheritsLoose(Ext_ux_Gauge, _Ext_Gadget);

  Ext_ux_Gauge.PROPERTIES = function PROPERTIES() {
    return ['angleOffset', 'animation', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'clockwise', 'cls', 'controller', 'defaultListenerScope', 'disabled', 'focusCls', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'maxValue', 'minValue', 'name', 'nameable', 'needle', 'padding', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'style', 'textAlign', 'textOffset', 'textTpl', 'touchAction', 'trackLength', 'trackStart', 'trackStyle', 'twoWayBindable', 'ui', 'userCls', 'value', 'valueStyle', 'viewModel', 'width'];
  };

  Ext_ux_Gauge.EVENTS = function EVENTS() {
    return [{
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeheightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehiddenchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'sender,event'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'focus',
      parameters: 'sender,event'
    }, {
      name: 'focusenter',
      parameters: 'sender,event'
    }, {
      name: 'focusleave',
      parameters: 'sender,event'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_ux_Gauge.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_Gauge.PROPERTIES());
    return Ext_Gadget.getProperties(properties);
  };

  Ext_ux_Gauge.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_Gauge.EVENTS());
    return Ext_Gadget.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return ''}
  //static PROPERTIESOBJECT() { return {
  //}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_ux_Gauge, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Gadget.observedAttributes; //for (var property in Ext_ux_Gauge.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_ux_Gauge.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_Gauge.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_Gauge(properties, events) {
    return _Ext_Gadget.call(this, properties.concat(Ext_ux_Gauge.PROPERTIES()), events.concat(Ext_ux_Gauge.EVENTS())) || this;
  }

  var _proto = Ext_ux_Gauge.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Gadget.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Gadget.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_Gauge;
}(Ext_Gadget);

export { Ext_ux_Gauge as default };