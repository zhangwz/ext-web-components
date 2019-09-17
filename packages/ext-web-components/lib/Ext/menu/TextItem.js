import Ext_Component_Component from '../../Ext/Component';

export default class Ext_menu_TextItem_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return 'menuitem'}
static PROPERTIESOBJECT() { return {
"clickHideDelay":["number"],
"destroyMenu":["boolean"],
"handler":["function","string"],
"hideOnClick":["boolean"],
"href":["string"],
"icon":["string"],
"iconAlign":["'left'","'right'"],
"iconCls":["string"],
"indented":["boolean"],
"menu":["Ext.menu.Menu","object"],
"menuAlign":["string"],
"menuExpandDelay":["number"],
"menuHideDelay":["number"],
"scope":["object"],
"separator":["boolean"],
"target":["string"],
"text":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'expandMenu',function: function(event) { return this.ext.expandMenu(event) } },
{ name:'handleTouch',function: function() { return this.ext.handleTouch() } },
{ name:'hideParentMenus',function: function() { return this.ext.hideParentMenus() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_menu_TextItem_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_menu_TextItem_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_menu_TextItem_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_menu_TextItem_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_menu_TextItem_Component.METHODS()),
            events.concat(Ext_menu_TextItem_Component.EVENTS())



            //events.concat(Ext_menu_TextItem_Component.EVENTS()),
            //propertiesobject.concat(Ext_menu_TextItem_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_menu_TextItem_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_menu_TextItem_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_menu_TextItem_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_menu_TextItem_Component.METHODS())
        )
        //this.XTYPE = Ext_menu_TextItem_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_menu_TextItem_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_menu_TextItem_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_menu_TextItem_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
