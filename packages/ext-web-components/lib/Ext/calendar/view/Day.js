import Ext_calendar_view_Days_Component from '../../../Ext/calendar/view/Days';

export default class Ext_calendar_view_Day_Component extends Ext_calendar_view_Days_Component {
//events
//configs

static XTYPE() {return 'calendar-dayview'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_calendar_view_Day_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_calendar_view_Day_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_calendar_view_Day_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_calendar_view_Day_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_calendar_view_Day_Component.METHODS()),
            events.concat(Ext_calendar_view_Day_Component.EVENTS())



            //events.concat(Ext_calendar_view_Day_Component.EVENTS()),
            //propertiesobject.concat(Ext_calendar_view_Day_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_calendar_view_Day_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_calendar_view_Day_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_calendar_view_Day_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_calendar_view_Day_Component.METHODS())
        )
        //this.XTYPE = Ext_calendar_view_Day_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_view_Day_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_calendar_view_Day_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_calendar_view_Day_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
