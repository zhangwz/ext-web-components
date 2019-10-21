import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_button_Segmented from './Ext/button/Segmented.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtSegmentedbutton =
/*#__PURE__*/
function (_Ext_button_Segmented) {
  _inheritsLoose(ExtSegmentedbutton, _Ext_button_Segmented);

  function ExtSegmentedbutton() {
    var _this;

    _this = _Ext_button_Segmented.call(this, [], []) || this;
    _this.xtype = 'segmentedbutton';
    return _this;
  }

  return ExtSegmentedbutton;
}(Ext_button_Segmented); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-segmentedbutton', ExtSegmentedbutton);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtSegmentedbutton as default };
window.customElements.define('ext-segmentedbutton', HTMLParsedElement.withParsedCallback(ExtSegmentedbutton)); //export default reactify(ExtSegmentedbutton);