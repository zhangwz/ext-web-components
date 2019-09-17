import Ext_Component_Component from '../../Ext/Component';

export default class Ext_dataview_IndexBar_Component extends Ext_Component_Component {
//events
get onbeforedirectionchange(){return this.getAttribute('onbeforedirectionchange')};set onbeforedirectionchange(onbeforedirectionchange){this.setAttribute('onbeforedirectionchange',onbeforedirectionchange)}
get ondirectionchange(){return this.getAttribute('ondirectionchange')};set ondirectionchange(ondirectionchange){this.setAttribute('ondirectionchange',ondirectionchange)}
get onindex(){return this.getAttribute('onindex')};set onindex(onindex){this.setAttribute('onindex',onindex)}
//configs

static XTYPE() {return 'indexbar'}
static PROPERTIESOBJECT() { return {
"animation":["boolean","object"],
"autoHide":["boolean","string"],
"direction":["'vertical'","'horizontal'"],
"dynamic":["boolean"],
"indicator":["boolean"],
"letters":["string","string[]"],
"listPrefix":["string"],
}}
static EVENTS() { return [
{name:'beforedirectionchange',parameters:'sender,value,oldValue,undefined'},
{name:'directionchange',parameters:'sender,value,oldValue'},
{name:'index',parameters:'undefined,html,target'},
]}
static METHODS() { return [
{ name:'shouldAutoHide',function: function(trigger) { return this.ext.shouldAutoHide(trigger) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_dataview_IndexBar_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_dataview_IndexBar_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_dataview_IndexBar_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_dataview_IndexBar_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_dataview_IndexBar_Component.METHODS()),
            events.concat(Ext_dataview_IndexBar_Component.EVENTS())



            //events.concat(Ext_dataview_IndexBar_Component.EVENTS()),
            //propertiesobject.concat(Ext_dataview_IndexBar_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_dataview_IndexBar_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_dataview_IndexBar_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_dataview_IndexBar_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_dataview_IndexBar_Component.METHODS())
        )
        //this.XTYPE = Ext_dataview_IndexBar_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_IndexBar_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_dataview_IndexBar_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_dataview_IndexBar_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
