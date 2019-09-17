import Ext_field_Input_Component from '../../Ext/field/Input';

export default class Ext_form_Hidden_Component extends Ext_field_Input_Component {
//events
//configs

static XTYPE() {return 'hiddenfield'}
static PROPERTIESOBJECT() { return {
"inputType":["any"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_form_Hidden_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_form_Hidden_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_form_Hidden_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_Hidden_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_form_Hidden_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_form_Hidden_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
