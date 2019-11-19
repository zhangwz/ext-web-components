import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Toolbar from './Ext/Toolbar';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtToolbarComponent =
/*#__PURE__*/
function (_Ext_Toolbar) {
  _inheritsLoose(ExtToolbarComponent, _Ext_Toolbar);

  function ExtToolbarComponent() {
    var _this;

    _this = _Ext_Toolbar.call(this, [], []) || this;
    _this.xtype = 'toolbar';
    return _this;
  }

  return ExtToolbarComponent;
}(Ext_Toolbar); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-toolbar', ExtToolbarComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-toolbar', HTMLParsedElement.withParsedCallback(ExtToolbarComponent));