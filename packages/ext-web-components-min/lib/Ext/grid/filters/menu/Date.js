import Ext_grid_filters_menu_Base_Component from '../../../../Ext/grid/filters/menu/Base';

export default class Ext_grid_filters_menu_Date_Component extends Ext_grid_filters_menu_Base_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_grid_filters_menu_Date_Component.METHODS(),
        Ext_grid_filters_menu_Date_Component.XTYPE(),
        Ext_grid_filters_menu_Date_Component.PROPERTIESOBJECT(),
        Ext_grid_filters_menu_Date_Component.EVENTS()
    )
    this.XTYPE = Ext_grid_filters_menu_Date_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_filters_menu_Date_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_grid_filters_menu_Date_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_filters_menu_Date_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}
