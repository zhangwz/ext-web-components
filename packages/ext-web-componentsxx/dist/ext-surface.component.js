import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_Surface from './Ext/draw/Surface';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSurfaceComponent =
/*#__PURE__*/
function (_Ext_draw_Surface) {
  _inheritsLoose(ExtSurfaceComponent, _Ext_draw_Surface);

  function ExtSurfaceComponent() {
    var _this;

    _this = _Ext_draw_Surface.call(this, [], []) || this;
    _this.xtype = 'surface';
    return _this;
  }

  return ExtSurfaceComponent;
}(Ext_draw_Surface); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-surface', ExtSurfaceComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-surface', HTMLParsedElement.withParsedCallback(ExtSurfaceComponent));