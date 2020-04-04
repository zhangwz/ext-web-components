import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_feature_AbstractSummary from '../../../Ext/grid/feature/AbstractSummary.js';

var Ext_grid_feature_Summary = /*#__PURE__*/function (_Ext_grid_feature_Abs) {
  _inheritsLoose(Ext_grid_feature_Summary, _Ext_grid_feature_Abs);

  var _super = _createSuper(Ext_grid_feature_Summary);

  Ext_grid_feature_Summary.PROPERTIES = function PROPERTIES() {
    return ['dock', 'listeners', 'showSummaryRow'];
  };

  Ext_grid_feature_Summary.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_feature_Summary.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_feature_Summary.PROPERTIES());
    return Ext_grid_feature_AbstractSummary.getProperties(properties);
  };

  Ext_grid_feature_Summary.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_feature_Summary.EVENTS());
    return Ext_grid_feature_AbstractSummary.getEvents(events);
  };

  _createClass(Ext_grid_feature_Summary, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_feature_Abs.observedAttributes;
      Ext_grid_feature_Summary.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_feature_Summary.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_feature_Summary(properties, events) {
    return _Ext_grid_feature_Abs.call(this, properties.concat(Ext_grid_feature_Summary.PROPERTIES()), events.concat(Ext_grid_feature_Summary.EVENTS())) || this;
  }

  var _proto = Ext_grid_feature_Summary.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_feature_Abs.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_feature_Abs.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_feature_Summary;
}(Ext_grid_feature_AbstractSummary);

export { Ext_grid_feature_Summary as default };