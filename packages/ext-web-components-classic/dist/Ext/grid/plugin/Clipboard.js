import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_plugin_AbstractClipboard from '../../../Ext/plugin/AbstractClipboard.js';

var Ext_grid_plugin_Clipboard = /*#__PURE__*/function (_Ext_plugin_AbstractC) {
  _inheritsLoose(Ext_grid_plugin_Clipboard, _Ext_plugin_AbstractC);

  var _super = _createSuper(Ext_grid_plugin_Clipboard);

  Ext_grid_plugin_Clipboard.PROPERTIES = function PROPERTIES() {
    return ['formats', 'id', 'memory', 'source', 'stateEvents', 'system'];
  };

  Ext_grid_plugin_Clipboard.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_plugin_Clipboard.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_Clipboard.PROPERTIES());
    return Ext_plugin_AbstractClipboard.getProperties(properties);
  };

  Ext_grid_plugin_Clipboard.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_plugin_Clipboard.EVENTS());
    return Ext_plugin_AbstractClipboard.getEvents(events);
  };

  _createClass(Ext_grid_plugin_Clipboard, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_AbstractC.observedAttributes;
      Ext_grid_plugin_Clipboard.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_plugin_Clipboard.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_plugin_Clipboard(properties, events) {
    return _Ext_plugin_AbstractC.call(this, properties.concat(Ext_grid_plugin_Clipboard.PROPERTIES()), events.concat(Ext_grid_plugin_Clipboard.EVENTS())) || this;
  }

  var _proto = Ext_grid_plugin_Clipboard.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_AbstractC.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_AbstractC.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_plugin_Clipboard;
}(Ext_plugin_AbstractClipboard);

export { Ext_grid_plugin_Clipboard as default };