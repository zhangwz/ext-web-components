import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_pullrefresh_Bar_Component from './Ext/dataview/pullrefresh/Bar';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtPullrefreshbarComponent =
/*#__PURE__*/
function (_Ext_dataview_pullref) {
  _inheritsLoose(ExtPullrefreshbarComponent, _Ext_dataview_pullref);

  function ExtPullrefreshbarComponent() {
    var _this;

    _this = _Ext_dataview_pullref.call(this, {}, [], []) || this;
    _this.xtype = 'pullrefreshbar';
    return _this;
  }

  return ExtPullrefreshbarComponent;
}(Ext_dataview_pullrefresh_Bar_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pullrefreshbar', ExtPullrefreshbarComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pullrefreshbar', HTMLParsedElement.withParsedCallback(ExtPullrefreshbarComponent));