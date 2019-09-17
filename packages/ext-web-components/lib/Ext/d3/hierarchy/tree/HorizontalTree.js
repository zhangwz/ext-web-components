import Ext_d3_hierarchy_tree_Tree_Component from '../../../../Ext/d3/hierarchy/tree/Tree';

export default class Ext_d3_hierarchy_tree_HorizontalTree_Component extends Ext_d3_hierarchy_tree_Tree_Component {
//events
//configs

static XTYPE() {return 'd3-tree'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'alignAfterLayout',function: function() { return this.ext.alignAfterLayout() } },
{ name:'alignTree',function: function() { return this.ext.alignTree() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_d3_hierarchy_tree_HorizontalTree_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_d3_hierarchy_tree_HorizontalTree_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_d3_hierarchy_tree_HorizontalTree_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_d3_hierarchy_tree_HorizontalTree_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_d3_hierarchy_tree_HorizontalTree_Component.METHODS()),
            events.concat(Ext_d3_hierarchy_tree_HorizontalTree_Component.EVENTS())



            //events.concat(Ext_d3_hierarchy_tree_HorizontalTree_Component.EVENTS()),
            //propertiesobject.concat(Ext_d3_hierarchy_tree_HorizontalTree_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_d3_hierarchy_tree_HorizontalTree_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_d3_hierarchy_tree_HorizontalTree_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_d3_hierarchy_tree_HorizontalTree_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_d3_hierarchy_tree_HorizontalTree_Component.METHODS())
        )
        //this.XTYPE = Ext_d3_hierarchy_tree_HorizontalTree_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_d3_hierarchy_tree_HorizontalTree_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_d3_hierarchy_tree_HorizontalTree_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_d3_hierarchy_tree_HorizontalTree_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
