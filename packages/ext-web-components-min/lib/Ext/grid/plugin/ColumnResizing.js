import Ext_Component_Component from '../../../Ext/Component';

export default class Ext_grid_plugin_ColumnResizing_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"realtime":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_grid_plugin_ColumnResizing_Component.METHODS(),
        Ext_grid_plugin_ColumnResizing_Component.XTYPE(),
        Ext_grid_plugin_ColumnResizing_Component.PROPERTIESOBJECT(),
        Ext_grid_plugin_ColumnResizing_Component.EVENTS()
    )
    this.XTYPE = Ext_grid_plugin_ColumnResizing_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_plugin_ColumnResizing_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_grid_plugin_ColumnResizing_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_plugin_ColumnResizing_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}
