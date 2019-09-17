import Ext_Panel_Component from '../../Ext/Panel';

export default class Ext_window_Window_Component extends Ext_Panel_Component {
//events
get onbeforemaximize(){return this.getAttribute('onbeforemaximize')};set onbeforemaximize(onbeforemaximize){this.setAttribute('onbeforemaximize',onbeforemaximize)}
get onbeforerestore(){return this.getAttribute('onbeforerestore')};set onbeforerestore(onbeforerestore){this.setAttribute('onbeforerestore',onbeforerestore)}
get onmaximize(){return this.getAttribute('onmaximize')};set onmaximize(onmaximize){this.setAttribute('onmaximize',onmaximize)}
get onrestore(){return this.getAttribute('onrestore')};set onrestore(onrestore){this.setAttribute('onrestore',onrestore)}
//configs

static XTYPE() {return 'dialog'}
static PROPERTIESOBJECT() { return {
"bodyBorder":["boolean"],
"border":["boolean"],
"centered":["boolean"],
"constrainDrag":["boolean","Ext.drag.Constraint"],
"dismissAction":["string","string[]"],
"dismissHandler":["string","function"],
"draggable":["boolean","object","Ext.drag.Source"],
"floated":["boolean"],
"hideAnimation":["string","mixed"],
"hideMode":["'clip'","'display'","'offsets'","'opacity'","'visibility'"],
"keyMap":["object"],
"maskTapHandler":["string","function"],
"maximizable":["boolean"],
"maximizeAnimation":["object"],
"maximized":["boolean"],
"maximizeProxy":["object","Ext.Dialog"],
"maximizeTool":["object","Ext.Tool"],
"modal":["boolean"],
"restorable":["boolean"],
"restoreAnimation":["object"],
"restoreTool":["object","Ext.Tool"],
"shadow":["boolean"],
"showAnimation":["string","mixed"],
"tabIndex":["number"],
}}
static EVENTS() { return [
{name:'beforemaximize',parameters:'dialog'},
{name:'beforerestore',parameters:'dialog'},
{name:'maximize',parameters:'dialog'},
{name:'restore',parameters:'dialog'},
]}
static METHODS() { return [
{ name:'maximize',function: function(animation) { return this.ext.maximize(animation) } },
{ name:'restore',function: function(animation) { return this.ext.restore(animation) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_window_Window_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_window_Window_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_window_Window_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_window_Window_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_window_Window_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_window_Window_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
