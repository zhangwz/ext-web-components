import Ext_viewport_Default_Component from '../../Ext/viewport/Default';

export default class Ext_viewport_WP_Component extends Ext_viewport_Default_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_viewport_WP_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_viewport_WP_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_viewport_WP_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_viewport_WP_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_viewport_WP_Component.METHODS()),
            events.concat(Ext_viewport_WP_Component.EVENTS())



            //events.concat(Ext_viewport_WP_Component.EVENTS()),
            //propertiesobject.concat(Ext_viewport_WP_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_viewport_WP_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_viewport_WP_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_viewport_WP_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_viewport_WP_Component.METHODS())
        )
        //this.XTYPE = Ext_viewport_WP_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_viewport_WP_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_viewport_WP_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_viewport_WP_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
