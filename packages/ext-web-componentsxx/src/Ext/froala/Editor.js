import Ext_Component from '../../Ext/Component';

export default class Ext_froala_Editor extends Ext_Component {

    static PROPERTIES() { return [
'activationKey',
'alignSelf',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'axisLock',
'bind',
'border',
'bottom',
'centered',
'cls',
'constrainAlign',
'contentEl',
'controller',
'data',
'defaultEditor',
'defaultListenerScope',
'disabled',
'displayed',
'docked',
'draggable',
'editor',
'flex',
'floated',
'focusCls',
'fullscreen',
'height',
'hidden',
'hideAnimation',
'hideMode',
'hideOnMaskTap',
'html',
'id',
'instanceCls',
'itemId',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'left',
'listeners',
'margin',
'maxHeight',
'maxWidth',
'minHeight',
'minWidth',
'modal',
'modelValidation',
'name',
'nameable',
'padding',
'plugins',
'publishes',
'record',
'reference',
'relative',
'renderTo',
'right',
'ripple',
'scrollable',
'session',
'shadow',
'shareableName',
'shim',
'showAnimation',
'stateful',
'statefulDefaults',
'stateId',
'style',
'tabIndex',
'toFrontOnShow',
'tooltip',
'top',
'touchAction',
'tpl',
'tplWriteMode',
'translatable',
'twoWayBindable',
'ui',
'userCls',
'userSelectable',
'value',
'viewModel',
'weight',
'width',
'x',
'xtype',
'y',
'zIndex',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
]};
    static EVENTS() { return [
{name:'added',parameters:'sender,container,index'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'froalaeditor'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'froalaeditor,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'change',parameters:'froalaeditor,the'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'froalaeditor,event'},
{name:'focusenter',parameters:'froalaeditor,event'},
{name:'focusleave',parameters:'froalaeditor,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'ready',parameters:'froalaeditor,the'},
{name:'removed',parameters:'sender,container,index'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'froalaeditor'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_froala_Editor.PROPERTIES());
        return Ext_Component.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_froala_Editor.EVENTS());
        return Ext_Component.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'froalaeditor'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_froala_Editor.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_froala_Editor.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_froala_Editor.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_froala_Editor.PROPERTIES()),
            events.concat(Ext_froala_Editor.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}