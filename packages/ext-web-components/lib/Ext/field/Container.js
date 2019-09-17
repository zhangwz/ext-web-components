import Ext_field_Field_Component from '../../Ext/field/Field';

export default class Ext_field_Container_Component extends Ext_field_Field_Component {
//events
//configs

static XTYPE() {return 'containerfield'}
static PROPERTIESOBJECT() { return {
"autoSize":["any"],
"container":["Ext.Container"],
"defaults":["object"],
"defaultType":["string"],
"error":["any"],
"fieldDefaults":["object"],
"items":["array","object"],
"layout":["object","string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'add',function: function(newItems) { return this.ext.add(newItems) } },
{ name:'child',function: function(selector) { return this.ext.child(selector) } },
{ name:'down',function: function(selector) { return this.ext.down(selector) } },
{ name:'getAt',function: function(index) { return this.ext.getAt(index) } },
{ name:'getFocusEl',function: function() { return this.ext.getFocusEl() } },
{ name:'getRefItems',function: function(deep) { return this.ext.getRefItems(deep) } },
{ name:'insert',function: function(index,item) { return this.ext.insert(index,item) } },
{ name:'query',function: function(selector) { return this.ext.query(selector) } },
{ name:'remove',function: function(which,destroy) { return this.ext.remove(which,destroy) } },
{ name:'removeAll',function: function(destroy,everything) { return this.ext.removeAll(destroy,everything) } },
{ name:'setErrors',function: function(errors) { return this.ext.setErrors(errors) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_field_Container_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_field_Container_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_field_Container_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_field_Container_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_field_Container_Component.METHODS()),
            events.concat(Ext_field_Container_Component.EVENTS())



            //events.concat(Ext_field_Container_Component.EVENTS()),
            //propertiesobject.concat(Ext_field_Container_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_field_Container_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_field_Container_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_field_Container_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_field_Container_Component.METHODS())
        )
        //this.XTYPE = Ext_field_Container_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_Container_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_field_Container_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_field_Container_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
