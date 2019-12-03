import Ext_chart_AbstractChart from '../../Ext/chart/AbstractChart.js';

export default class Ext_chart_SpaceFillingChart extends Ext_chart_AbstractChart {
    static PROPERTIES() {return [
    'activeChildTabIndex',
    'activeItem',
    'alignSelf',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'animation',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoSize',
    'axes',
    'axisLock',
    'background',
    'bind',
    'bodyCls',
    'border',
    'bottom',
    'captions',
    'cardSwitchAnimation',
    'centered',
    'cls',
    'colors',
    'constrainAlign',
    'contentEl',
    'control',
    'controller',
    'data',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'disabled',
    'displayed',
    'docked',
    'downloadServerUrl',
    'draggable',
    'engine',
    'flex',
    'floated',
    'focusableContainer',
    'focusCls',
    'fullscreen',
    'gradients',
    'height',
    'hidden',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'highlightItem',
    'html',
    'id',
    'inactiveChildTabIndex',
    'innerCls',
    'insetPadding',
    'instanceCls',
    'interactions',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'left',
    'legend',
    'listeners',
    'mainRect',
    'manageBorders',
    'margin',
    'masked',
    'maxHeight',
    'maxWidth',
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
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderTo',
    'resetFocusPosition',
    'resizeHandler',
    'right',
    'ripple',
    'scrollable',
    'series',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'sprites',
    'stateful',
    'statefulDefaults',
    'stateId',
    'store',
    'style',
    'surfaceZIndexes',
    'tabIndex',
    'theme',
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
    'viewModel',
    'weight',
    'weighted',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
    ]};
    static EVENTS() {return [
    {name:'activate', parameters:'newActiveItem,sender,oldActiveItem'},
    {name:'activeItemchange', parameters:'sender,value,oldValue'},
    {name:'add', parameters:'sender,item,index'},
    {name:'added', parameters:'sender,container,index'},
    {name:'beforeactiveItemchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforebottomchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforecenteredchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforedisabledchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforedockedchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeheightchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforehiddenchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforehide', parameters:'sender'},
    {name:'beforeleftchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforemaxHeightchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforemaxWidthchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeminHeightchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeminWidthchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeorientationchange', parameters:''},
    {name:'beforerefresh', parameters:'sender'},
    {name:'beforerightchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforescrollablechange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeshow', parameters:'sender'},
    {name:'beforetofront', parameters:'sender'},
    {name:'beforetopchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforewidthchange', parameters:'sender,value,oldValue,undefined'},
    {name:'blur', parameters:'sender,event'},
    {name:'bodyresize', parameters:'size'},
    {name:'bottomchange', parameters:'sender,value,oldValue'},
    {name:'centeredchange', parameters:'sender,value,oldValue'},
    {name:'deactivate', parameters:'oldActiveItem,sender,newActiveItem'},
    {name:'destroy', parameters:''},
    {name:'disabledchange', parameters:'sender,value,oldValue'},
    {name:'dockedchange', parameters:'sender,value,oldValue'},
    {name:'erased', parameters:'sender'},
    {name:'floatingchange', parameters:'sender,positioned'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'fullscreen', parameters:'sender'},
    {name:'heightchange', parameters:'sender,value,oldValue'},
    {name:'hiddenchange', parameters:'sender,value,oldValue'},
    {name:'hide', parameters:'sender'},
    {name:'initialize', parameters:'sender'},
    {name:'itemclick', parameters:'chart,item,event'},
    {name:'itemdblclick', parameters:'chart,item,event'},
    {name:'itemhighlight', parameters:'sender,newItem,oldItem'},
    {name:'itemhighlightchange', parameters:'sender,newItem,oldItem'},
    {name:'itemmousedown', parameters:'chart,item,event'},
    {name:'itemmousemove', parameters:'chart,item,event'},
    {name:'itemmouseout', parameters:'chart,item,event'},
    {name:'itemmouseover', parameters:'chart,item,event'},
    {name:'itemmouseup', parameters:'chart,item,event'},
    {name:'itemtap', parameters:'chart,item,event'},
    {name:'layout', parameters:'sender'},
    {name:'leftchange', parameters:'sender,value,oldValue'},
    {name:'maxHeightchange', parameters:'sender,value,oldValue'},
    {name:'maxWidthchange', parameters:'sender,value,oldValue'},
    {name:'minHeightchange', parameters:'sender,value,oldValue'},
    {name:'minWidthchange', parameters:'sender,value,oldValue'},
    {name:'move', parameters:'sender,item,toIndex,fromIndex'},
    {name:'moved', parameters:'sender,container,toIndex,fromIndex'},
    {name:'orientationchange', parameters:''},
    {name:'painted', parameters:'sender,element'},
    {name:'positionedchange', parameters:'sender,positioned'},
    {name:'redraw', parameters:'sender'},
    {name:'refresh', parameters:'sender'},
    {name:'remove', parameters:'sender,item,index'},
    {name:'removed', parameters:'sender,container,index'},
    {name:'renderedchange', parameters:'sender,item,rendered'},
    {name:'resize', parameters:'element,info'},
    {name:'rightchange', parameters:'sender,value,oldValue'},
    {name:'scrollablechange', parameters:'sender,value,oldValue'},
    {name:'show', parameters:'sender'},
    {name:'spriteclick', parameters:'sprite,event'},
    {name:'spritedblclick', parameters:'sprite,event'},
    {name:'spritemousedown', parameters:'sprite,event'},
    {name:'spritemousemove', parameters:'sprite,event'},
    {name:'spritemouseout', parameters:'sprite,event'},
    {name:'spritemouseover', parameters:'sprite,event'},
    {name:'spritemouseup', parameters:'sprite,event'},
    {name:'spritetap', parameters:'sprite,event'},
    {name:'storechange', parameters:'chart,newStore,oldStore'},
    {name:'tofront', parameters:'sender'},
    {name:'topchange', parameters:'sender,value,oldValue'},
    {name:'updatedata', parameters:'sender,newData'},
    {name:'widthchange', parameters:'sender,value,oldValue'},
    {name:'ready', parameters:'cmd,cmdAll'}
    ]};
    static getProperties(properties) {
        properties = properties.concat(Ext_chart_SpaceFillingChart.PROPERTIES());
        return Ext_chart_AbstractChart.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_chart_SpaceFillingChart.EVENTS());
        return Ext_chart_AbstractChart.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'spacefilling'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_chart_SpaceFillingChart.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_chart_SpaceFillingChart.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_chart_SpaceFillingChart.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_chart_SpaceFillingChart.PROPERTIES()),
            events.concat(Ext_chart_SpaceFillingChart.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}