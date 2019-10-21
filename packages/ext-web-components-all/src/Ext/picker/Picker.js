import Ext_Sheet from '../../Ext/Sheet.js';

export default class Ext_picker_Picker extends Ext_Sheet {

    static PROPERTIES() { return [
'activeChildTabIndex',
'activeItem',
'alignSelf',
'allowFocusingDisabledChildren',
'alwaysOnTop',
'anchor',
'anchorPosition',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'autoDestroy',
'autoSize',
'axisLock',
'bbar',
'bind',
'bodyBorder',
'bodyCls',
'bodyPadding',
'bodyStyle',
'border',
'bottom',
'buttonAlign',
'buttons',
'buttonToolbar',
'cancelButton',
'cardSwitchAnimation',
'centered',
'closable',
'closeAction',
'closeToolText',
'cls',
'collapsed',
'collapsible',
'constrainAlign',
'contentEl',
'control',
'controller',
'cover',
'data',
'defaultFocus',
'defaultListenerScope',
'defaults',
'defaultToolWeights',
'defaultType',
'disabled',
'displayed',
'docked',
'doneButton',
'draggable',
'enter',
'exit',
'flex',
'floated',
'focusableContainer',
'focusCls',
'fullscreen',
'header',
'headerPosition',
'height',
'hidden',
'hideAnimation',
'hideMode',
'hideOnMaskTap',
'html',
'icon',
'iconAlign',
'iconCls',
'id',
'inactiveChildTabIndex',
'innerCls',
'instanceCls',
'itemId',
'items',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'layout',
'lbar',
'left',
'listeners',
'manageBorders',
'margin',
'masked',
'maxHeight',
'maxWidth',
'minButtonWidth',
'minHeight',
'minWidth',
'modal',
'modelValidation',
'name',
'nameable',
'nameHolder',
'padding',
'plugins',
'publishes',
'rbar',
'record',
'reference',
'referenceHolder',
'relative',
'renderTo',
'resetFocusPosition',
'resizable',
'reveal',
'right',
'ripple',
'scrollable',
'session',
'shadow',
'shareableName',
'shim',
'showAnimation',
'side',
'slots',
'standardButtons',
'stateful',
'statefulDefaults',
'stateId',
'stretchX',
'stretchY',
'style',
'tabIndex',
'tbar',
'title',
'titleAlign',
'titleCollapse',
'toFrontOnShow',
'toolbar',
'toolDefaults',
'tools',
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
'useTitles',
'value',
'viewModel',
'weight',
'weighted',
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
{name:'activate',parameters:'newActiveItem,picker,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'picker,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'picker'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeexpand',parameters:'picker'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'picker,context'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'picker'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'picker,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'cancel',parameters:'picker'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'change',parameters:'picker,values'},
{name:'collapse',parameters:'picker'},
{name:'deactivate',parameters:'oldActiveItem,picker,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'picker'},
{name:'drawershow',parameters:'picker'},
{name:'erased',parameters:'sender'},
{name:'expand',parameters:'picker'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'picker,event'},
{name:'focusenter',parameters:'picker,event'},
{name:'focusleave',parameters:'picker,event'},
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
{name:'move',parameters:'picker,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'pick',parameters:'picker,values,slot'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'picker,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'picker,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'picker,context'},
{name:'resizedragcancel',parameters:'picker,context'},
{name:'resizedragend',parameters:'picker,context'},
{name:'resizedragstart',parameters:'picker,context'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'picker'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_picker_Picker.PROPERTIES());
        return Ext_Sheet.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_picker_Picker.EVENTS());
        return Ext_Sheet.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'picker'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_picker_Picker.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_picker_Picker.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_picker_Picker.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_picker_Picker.PROPERTIES()),
            events.concat(Ext_picker_Picker.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}