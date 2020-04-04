import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_dd_DragTracker from '../../Ext/dd/DragTracker.js';

var Ext_resizer_ResizeTracker = /*#__PURE__*/function (_Ext_dd_DragTracker) {
  _inheritsLoose(Ext_resizer_ResizeTracker, _Ext_dd_DragTracker);

  var _super = _createSuper(Ext_resizer_ResizeTracker);

  Ext_resizer_ResizeTracker.PROPERTIES = function PROPERTIES() {
    return ['autoStart', 'constrainTo', 'delegate', 'el', 'listeners', 'overCls', 'preventDefault', 'stopEvent', 'tolerance', 'trackOver'];
  };

  Ext_resizer_ResizeTracker.EVENTS = function EVENTS() {
    return [{
      name: 'beforedragstart',
      parameters: 'sender,e'
    }, {
      name: 'drag',
      parameters: 'sender,e'
    }, {
      name: 'dragend',
      parameters: 'sender,e'
    }, {
      name: 'dragstart',
      parameters: 'sender,e'
    }, {
      name: 'mousedown',
      parameters: 'sender,e'
    }, {
      name: 'mousemove',
      parameters: 'sender,e'
    }, {
      name: 'mouseout',
      parameters: 'sender,e'
    }, {
      name: 'mouseover',
      parameters: 'sender,e,target'
    }, {
      name: 'mouseup',
      parameters: 'sender,e'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_resizer_ResizeTracker.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_resizer_ResizeTracker.PROPERTIES());
    return Ext_dd_DragTracker.getProperties(properties);
  };

  Ext_resizer_ResizeTracker.getEvents = function getEvents(events) {
    events = events.concat(Ext_resizer_ResizeTracker.EVENTS());
    return Ext_dd_DragTracker.getEvents(events);
  };

  _createClass(Ext_resizer_ResizeTracker, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dd_DragTracker.observedAttributes;
      Ext_resizer_ResizeTracker.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_resizer_ResizeTracker.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_resizer_ResizeTracker(properties, events) {
    return _Ext_dd_DragTracker.call(this, properties.concat(Ext_resizer_ResizeTracker.PROPERTIES()), events.concat(Ext_resizer_ResizeTracker.EVENTS())) || this;
  }

  var _proto = Ext_resizer_ResizeTracker.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dd_DragTracker.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dd_DragTracker.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_resizer_ResizeTracker;
}(Ext_dd_DragTracker);

export { Ext_resizer_ResizeTracker as default };