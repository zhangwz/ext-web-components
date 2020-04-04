import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Base from '../../Ext/Base.js';

var Ext_dd_DragDropMgr = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_dd_DragDropMgr, _Ext_Base);

  var _super = _createSuper(Ext_dd_DragDropMgr);

  Ext_dd_DragDropMgr.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_dd_DragDropMgr.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_dd_DragDropMgr.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dd_DragDropMgr.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_dd_DragDropMgr.getEvents = function getEvents(events) {
    events = events.concat(Ext_dd_DragDropMgr.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_dd_DragDropMgr, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_dd_DragDropMgr.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dd_DragDropMgr.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dd_DragDropMgr(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_dd_DragDropMgr.PROPERTIES()), events.concat(Ext_dd_DragDropMgr.EVENTS())) || this;
  }

  var _proto = Ext_dd_DragDropMgr.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dd_DragDropMgr;
}(Ext_Base);

export { Ext_dd_DragDropMgr as default };