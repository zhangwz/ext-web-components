import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_slider_Toggle_Component from './Ext/slider/Toggle';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTogglesliderComponent =
/*#__PURE__*/
function (_Ext_slider_Toggle_Co) {
  _inheritsLoose(ExtTogglesliderComponent, _Ext_slider_Toggle_Co);

  function ExtTogglesliderComponent() {
    var _this;

    _this = _Ext_slider_Toggle_Co.call(this) || this;
    _this.xtype = 'toggleslider';
    return _this;
  }

  return ExtTogglesliderComponent;
}(Ext_slider_Toggle_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-toggleslider', ExtTogglesliderComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-toggleslider', HTMLParsedElement.withParsedCallback(ExtTogglesliderComponent));