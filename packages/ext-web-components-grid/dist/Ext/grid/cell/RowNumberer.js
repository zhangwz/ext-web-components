import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Number_Component from '../../../Ext/grid/cell/Number';

var Ext_grid_cell_RowNumberer_Component =
/*#__PURE__*/
function (_Ext_grid_cell_Number) {
  _inheritsLoose(Ext_grid_cell_RowNumberer_Component, _Ext_grid_cell_Number);

  //events
  //configs
  Ext_grid_cell_RowNumberer_Component.XTYPE = function XTYPE() {
    return 'rownumberercell';
  };

  Ext_grid_cell_RowNumberer_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "format": ["string"]
    };
  };

  Ext_grid_cell_RowNumberer_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_cell_RowNumberer_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_grid_cell_RowNumberer_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_cell_Number.observedAttributes;

      for (var property in Ext_grid_cell_RowNumberer_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_cell_RowNumberer_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_cell_RowNumberer_Component() {
    var _this;

    _this = _Ext_grid_cell_Number.call(this) || this;
    _this.XTYPE = Ext_grid_cell_RowNumberer_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_grid_cell_RowNumberer_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_grid_cell_RowNumberer_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_grid_cell_RowNumberer_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_grid_cell_RowNumberer_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_cell_Number.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_cell_Number.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_cell_RowNumberer_Component;
}(Ext_grid_cell_Number_Component);

export { Ext_grid_cell_RowNumberer_Component as default };