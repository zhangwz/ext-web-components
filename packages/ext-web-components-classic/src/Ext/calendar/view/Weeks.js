import Ext_calendar_view_Base from '../../../Ext/calendar/view/Base.js';

export default class Ext_calendar_view_Weeks extends Ext_calendar_view_Base {
    static PROPERTIES() {return [
    'addForm',
    'addOnSelect',
    'allowSelection',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'cls',
    'compact',
    'compactOptions',
    'controller',
    'controlStoreRange',
    'dayFormat',
    'defaultListenerScope',
    'disabled',
    'draggable',
    'droppable',
    'editForm',
    'eventDefaults',
    'firstDayOfWeek',
    'focusCls',
    'gestureNavigation',
    'header',
    'height',
    'hidden',
    'hideMode',
    'instanceCls',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'listeners',
    'margin',
    'name',
    'nameable',
    'overflowText',
    'plugins',
    'publishes',
    'reference',
    'renderTo',
    'ripple',
    'session',
    'shareableName',
    'showOverflow',
    'store',
    'style',
    'timezoneOffset',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
    'value',
    'viewModel',
    'visibleDays',
    'visibleWeeks',
    'weekendDays',
    'width',
    ]};
    static EVENTS() {return [
    {name:'beforedisabledchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeeventadd', parameters:'sender,context'},
    {name:'beforeeventdragstart', parameters:'sender,context'},
    {name:'beforeeventedit', parameters:'sender,context'},
    {name:'beforeheightchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforehiddenchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforewidthchange', parameters:'sender,value,oldValue,undefined'},
    {name:'blur', parameters:'sender,event'},
    {name:'disabledchange', parameters:'sender,value,oldValue'},
    {name:'eventadd', parameters:'sender,context'},
    {name:'eventdrop', parameters:'sender,context'},
    {name:'eventedit', parameters:'sender,context'},
    {name:'eventtap', parameters:'sender,context'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'heightchange', parameters:'sender,value,oldValue'},
    {name:'hiddenchange', parameters:'sender,value,oldValue'},
    {name:'select', parameters:'sender,context'},
    {name:'selectrange', parameters:'sender,context'},
    {name:'validateeventadd', parameters:'sender,context'},
    {name:'validateeventdrop', parameters:'sender,context'},
    {name:'validateeventedit', parameters:'sender,context'},
    {name:'valuechange', parameters:'sender,context'},
    {name:'widthchange', parameters:'sender,value,oldValue'},
    {name:'ready', parameters:'cmd,cmdAll'}
    ]};
    static getProperties(properties) {
        properties = properties.concat(Ext_calendar_view_Weeks.PROPERTIES());
        return Ext_calendar_view_Base.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_calendar_view_Weeks.EVENTS());
        return Ext_calendar_view_Base.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return ''}
//static PROPERTIESOBJECT() { return {
//}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_calendar_view_Weeks.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_calendar_view_Weeks.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_calendar_view_Weeks.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_calendar_view_Weeks.PROPERTIES()),
            events.concat(Ext_calendar_view_Weeks.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
