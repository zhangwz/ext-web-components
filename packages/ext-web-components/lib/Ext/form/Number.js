import Ext_field_Text_Component from '../../Ext/field/Text';

export default class Ext_form_Number_Component extends Ext_field_Text_Component {
//events
//configs

static XTYPE() {return 'numberfield'}
static PROPERTIESOBJECT() { return {
"decimals":["number"],
"decimalSeparator":["string"],
"decimalsText":["string"],
"inputType":["string"],
"maxValue":["number"],
"maxValueText":["string"],
"minValue":["number"],
"minValueText":["string"],
"trim":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'syncDecimalValidator',function: function() { return this.ext.syncDecimalValidator() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_form_Number_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_form_Number_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_form_Number_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_form_Number_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_form_Number_Component.METHODS()),
            events.concat(Ext_form_Number_Component.EVENTS())



            //events.concat(Ext_form_Number_Component.EVENTS()),
            //propertiesobject.concat(Ext_form_Number_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_form_Number_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_form_Number_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_form_Number_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_form_Number_Component.METHODS())
        )
        //this.XTYPE = Ext_form_Number_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_Number_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_form_Number_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_form_Number_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
