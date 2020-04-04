import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_data_proxy_Memory from '../../../Ext/data/proxy/Memory.js';

var Ext_ux_data_PagingMemoryProxy = /*#__PURE__*/function (_Ext_data_proxy_Memor) {
  _inheritsLoose(Ext_ux_data_PagingMemoryProxy, _Ext_data_proxy_Memor);

  var _super = _createSuper(Ext_ux_data_PagingMemoryProxy);

  Ext_ux_data_PagingMemoryProxy.PROPERTIES = function PROPERTIES() {
    return ['batchActions', 'batchOrder', 'clearOnRead', 'data', 'enablePaging', 'listeners', 'model', 'reader', 'writer'];
  };

  Ext_ux_data_PagingMemoryProxy.EVENTS = function EVENTS() {
    return [{
      name: 'metachange',
      parameters: 'sender,meta'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_data_PagingMemoryProxy.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_data_PagingMemoryProxy.PROPERTIES());
    return Ext_data_proxy_Memory.getProperties(properties);
  };

  Ext_ux_data_PagingMemoryProxy.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_data_PagingMemoryProxy.EVENTS());
    return Ext_data_proxy_Memory.getEvents(events);
  };

  _createClass(Ext_ux_data_PagingMemoryProxy, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_proxy_Memor.observedAttributes;
      Ext_ux_data_PagingMemoryProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_data_PagingMemoryProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_data_PagingMemoryProxy(properties, events) {
    return _Ext_data_proxy_Memor.call(this, properties.concat(Ext_ux_data_PagingMemoryProxy.PROPERTIES()), events.concat(Ext_ux_data_PagingMemoryProxy.EVENTS())) || this;
  }

  var _proto = Ext_ux_data_PagingMemoryProxy.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_proxy_Memor.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_proxy_Memor.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_data_PagingMemoryProxy;
}(Ext_data_proxy_Memory);

export { Ext_ux_data_PagingMemoryProxy as default };