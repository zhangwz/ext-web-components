import Ext_Sheet_Component from '../Ext/Sheet';

export default class Ext_Toast_Component extends Ext_Sheet_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"alignment":["string"],
"centered":["boolean"],
"hideAnimation":["string","mixed"],
"hideOnMaskTap":["boolean"],
"layout":["object","string"],
"maxQueue":["number"],
"message":["string"],
"messageAnimation":["boolean","object"],
"modal":["any"],
"showAnimation":["string","mixed"],
"timeout":["number"],
"zIndex":["any"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'applyMessage',function: function(value) { return this.ext.applyMessage(value) } },
{ name:'beforeHide',function: function(animation) { return this.ext.beforeHide(animation) } },
{ name:'destroy',function: function() { return this.ext.destroy() } },
{ name:'getQueueCount',function: function() { return this.ext.getQueueCount() } },
{ name:'next',function: function() { return this.ext.next() } },
{ name:'onTimeout',function: function() { return this.ext.onTimeout() } },
{ name:'showToast',function: function(config) { return this.ext.showToast(config) } },
{ name:'startTimer',function: function() { return this.ext.startTimer() } },
{ name:'updateMessage',function: function(newMessage) { return this.ext.updateMessage(newMessage) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Toast_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Toast_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_Toast_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_Toast_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_Toast_Component.METHODS()),
            events.concat(Ext_Toast_Component.EVENTS())



            //events.concat(Ext_Toast_Component.EVENTS()),
            //propertiesobject.concat(Ext_Toast_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_Toast_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_Toast_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_Toast_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_Toast_Component.METHODS())
        )
        //this.XTYPE = Ext_Toast_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Toast_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_Toast_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_Toast_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
