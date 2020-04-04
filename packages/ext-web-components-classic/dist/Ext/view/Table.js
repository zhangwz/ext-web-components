import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_view_View from '../../Ext/view/View.js';

var Ext_view_Table = /*#__PURE__*/function (_Ext_view_View) {
  _inheritsLoose(Ext_view_Table, _Ext_view_View);

  var _super = _createSuper(Ext_view_Table);

  Ext_view_Table.PROPERTIES = function PROPERTIES() {
    return ['activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoRender', 'autoShow', 'baseCls', 'bind', 'blockRefresh', 'border', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'deferEmptyText', 'deferInitialRefresh', 'disabled', 'disabledCls', 'disableSelection', 'dock', 'draggable', 'emptyText', 'enableTextSelection', 'firstCls', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'itemCls', 'itemId', 'itemSelector', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'lastCls', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'loadingCls', 'loadingHeight', 'loadingText', 'loadingUseMsg', 'loadMask', 'margin', 'markDirty', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'navigationModel', 'overCls', 'overItemCls', 'padding', 'plugins', 'preserveScrollOnRefresh', 'preserveScrollOnReload', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectedItemCls', 'selection', 'selectionModel', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'singleSelect', 'stateEvents', 'stateful', 'stateId', 'store', 'stripeRows', 'style', 'tabIndex', 'throttledUpdate', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'trackOver', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype'];
  };

  Ext_view_Table.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'sender'
    }, {
      name: 'added',
      parameters: 'sender,container,pos'
    }, {
      name: 'afterlayoutanimation',
      parameters: 'sender'
    }, {
      name: 'afterrender',
      parameters: 'sender'
    }, {
      name: 'beforeactivate',
      parameters: 'sender'
    }, {
      name: 'beforecellclick',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'beforecellcontextmenu',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'beforecelldblclick',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'beforecellkeydown',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'beforecellmousedown',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'beforecellmouseup',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'beforecontainerclick',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainercontextmenu',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainerdblclick',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainerkeydown',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainerkeypress',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainerkeyup',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainermousedown',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainermouseout',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainermouseover',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainermouseup',
      parameters: 'sender,e'
    }, {
      name: 'beforedeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedeselect',
      parameters: 'sender,record,index'
    }, {
      name: 'beforedestroy',
      parameters: 'sender'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforeitemclick',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemcontextmenu',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemdblclick',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemkeydown',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemkeypress',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemkeyup',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemlongpress',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemmousedown',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemmouseenter',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemmouseleave',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemmouseup',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforerefresh',
      parameters: 'sender'
    }, {
      name: 'beforerender',
      parameters: 'sender'
    }, {
      name: 'beforerowbodyclick',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'beforerowbodycontextmenu',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'beforerowbodydblclick',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'beforerowbodykeydown',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'beforerowbodykeypress',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'beforerowbodykeyup',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'beforerowbodylongpress',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'beforerowbodymousedown',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'beforerowbodymouseup',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'beforerowexit',
      parameters: 'sender,keyEvent,prevRow,nextRow,forward'
    }, {
      name: 'beforeselect',
      parameters: 'sender,record,index'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforestaterestore',
      parameters: 'sender,state'
    }, {
      name: 'beforestatesave',
      parameters: 'sender,state'
    }, {
      name: 'blur',
      parameters: 'sender,event'
    }, {
      name: 'boxready',
      parameters: 'sender,width,height'
    }, {
      name: 'cellclick',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'cellcontextmenu',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'celldblclick',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'cellkeydown',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'cellmousedown',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'cellmouseup',
      parameters: 'sender,td,cellIndex,record,tr,rowIndex,e'
    }, {
      name: 'containerclick',
      parameters: 'sender,e'
    }, {
      name: 'containercontextmenu',
      parameters: 'sender,e'
    }, {
      name: 'containerdblclick',
      parameters: 'sender,e'
    }, {
      name: 'containerkeydown',
      parameters: 'sender,e'
    }, {
      name: 'containerkeypress',
      parameters: 'sender,e'
    }, {
      name: 'containerkeyup',
      parameters: 'sender,e'
    }, {
      name: 'containermousedown',
      parameters: 'sender,e'
    }, {
      name: 'containermouseout',
      parameters: 'sender,e'
    }, {
      name: 'containermouseover',
      parameters: 'sender,e'
    }, {
      name: 'containermouseup',
      parameters: 'sender,e'
    }, {
      name: 'deactivate',
      parameters: 'sender'
    }, {
      name: 'deselect',
      parameters: 'sender,record'
    }, {
      name: 'destroy',
      parameters: 'sender'
    }, {
      name: 'disable',
      parameters: 'sender'
    }, {
      name: 'enable',
      parameters: 'sender'
    }, {
      name: 'focus',
      parameters: 'sender,event'
    }, {
      name: 'focuschange',
      parameters: 'sender,oldFocused,newFocused'
    }, {
      name: 'focusenter',
      parameters: 'sender,event'
    }, {
      name: 'focusleave',
      parameters: 'sender,event'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'highlightitem',
      parameters: 'view,node'
    }, {
      name: 'itemadd',
      parameters: 'records,index,node,view'
    }, {
      name: 'itemclick',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemcontextmenu',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemdblclick',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemkeydown',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemkeypress',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemkeyup',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemlongpress',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemmousedown',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemmouseenter',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemmouseleave',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemmouseup',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemremove',
      parameters: 'records,index,item,view'
    }, {
      name: 'itemupdate',
      parameters: 'record,index,node,view'
    }, {
      name: 'move',
      parameters: 'sender,x,y'
    }, {
      name: 'refresh',
      parameters: 'sender'
    }, {
      name: 'removed',
      parameters: 'sender,ownerCt'
    }, {
      name: 'render',
      parameters: 'sender'
    }, {
      name: 'resize',
      parameters: 'sender,width,height,oldWidth,oldHeight'
    }, {
      name: 'rowbodyclick',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'rowbodycontextmenu',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'rowbodydblclick',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'rowbodykeydown',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'rowbodykeypress',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'rowbodykeyup',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'rowbodylongpress',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'rowbodymousedown',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'rowbodymouseup',
      parameters: 'view,rowBodyEl,e'
    }, {
      name: 'rowclick',
      parameters: 'sender,record,element,rowIndex,e'
    }, {
      name: 'rowcontextmenu',
      parameters: 'sender,record,tr,rowIndex,e'
    }, {
      name: 'rowdblclick',
      parameters: 'sender,record,element,rowIndex,e'
    }, {
      name: 'rowkeydown',
      parameters: 'sender,record,element,rowIndex,e'
    }, {
      name: 'rowmousedown',
      parameters: 'sender,record,tr,rowIndex,e'
    }, {
      name: 'rowmouseup',
      parameters: 'sender,record,element,rowIndex,e'
    }, {
      name: 'select',
      parameters: 'sender,record,index'
    }, {
      name: 'selectionchange',
      parameters: 'sender,selected'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'staterestore',
      parameters: 'sender,state'
    }, {
      name: 'statesave',
      parameters: 'sender,state'
    }, {
      name: 'unhighlightitem',
      parameters: 'view,node'
    }, {
      name: 'viewready',
      parameters: 'sender'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_view_Table.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_view_Table.PROPERTIES());
    return Ext_view_View.getProperties(properties);
  };

  Ext_view_Table.getEvents = function getEvents(events) {
    events = events.concat(Ext_view_Table.EVENTS());
    return Ext_view_View.getEvents(events);
  };

  _createClass(Ext_view_Table, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_view_View.observedAttributes;
      Ext_view_Table.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_view_Table.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_view_Table(properties, events) {
    return _Ext_view_View.call(this, properties.concat(Ext_view_Table.PROPERTIES()), events.concat(Ext_view_Table.EVENTS())) || this;
  }

  var _proto = Ext_view_Table.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_view_View.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_view_View.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_view_Table;
}(Ext_view_View);

export { Ext_view_Table as default };