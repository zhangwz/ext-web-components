import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../../Ext/Container';

var Ext_grid_HeaderContainer_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_grid_HeaderContainer_Component, _Ext_Container_Compon);

  //events
  //configs
  Ext_grid_HeaderContainer_Component.XTYPE = function XTYPE() {
    return 'headercontainer';
  };

  Ext_grid_HeaderContainer_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "columns": ["Ext.grid.column.Column[]"],
      "defaultColumnUI": ["any"],
      "reserveScrollbar": ["boolean"],
      "sortable": ["boolean"],
      "verticalOverflow": ["boolean"]
    };
  };

  Ext_grid_HeaderContainer_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_HeaderContainer_Component.METHODS = function METHODS() {
    return [{
      name: 'getClosestVisibleHeader',
      "function": function _function(index) {
        return this.ext.getClosestVisibleHeader(index);
      }
    }, {
      name: 'getColumns',
      "function": function _function(selector) {
        return this.ext.getColumns(selector);
      }
    }, {
      name: 'getVisibleColumns',
      "function": function _function() {
        return this.ext.getVisibleColumns();
      }
    }, {
      name: 'setSortState',
      "function": function _function() {
        return this.ext.setSortState();
      }
    }, {
      name: 'updateMenuDisabledState',
      "function": function _function() {
        return this.ext.updateMenuDisabledState();
      }
    }];
  };

  _createClass(Ext_grid_HeaderContainer_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_grid_HeaderContainer_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_HeaderContainer_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_HeaderContainer_Component(propertiesobject, methods, events) {
    return _Ext_Container_Compon.call(this, Object.assign(propertiesobject, Ext_grid_HeaderContainer_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_grid_HeaderContainer_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_grid_HeaderContainer_Component.METHODS()), events.concat(Ext_grid_HeaderContainer_Component.EVENTS())) || this; //this.XTYPE = Ext_grid_HeaderContainer_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_HeaderContainer_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_grid_HeaderContainer_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_grid_HeaderContainer_Component.EVENTS());
  }

  var _proto = Ext_grid_HeaderContainer_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_HeaderContainer_Component;
}(Ext_Container_Component);

export { Ext_grid_HeaderContainer_Component as default };