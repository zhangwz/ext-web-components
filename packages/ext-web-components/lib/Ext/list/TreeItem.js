import Ext_list_AbstractTreeItem_Component from '../../Ext/list/AbstractTreeItem';

export default class Ext_list_TreeItem_Component extends Ext_list_AbstractTreeItem_Component {
//events
//configs

static XTYPE() {return 'treelistitem'}
static PROPERTIESOBJECT() { return {
"rowCls":["string"],
"rowClsProperty":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_list_TreeItem_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_list_TreeItem_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_list_TreeItem_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_list_TreeItem_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_list_TreeItem_Component.METHODS()),
            events.concat(Ext_list_TreeItem_Component.EVENTS())



            //events.concat(Ext_list_TreeItem_Component.EVENTS()),
            //propertiesobject.concat(Ext_list_TreeItem_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_list_TreeItem_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_list_TreeItem_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_list_TreeItem_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_list_TreeItem_Component.METHODS())
        )
        //this.XTYPE = Ext_list_TreeItem_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_list_TreeItem_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_list_TreeItem_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_list_TreeItem_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
