import Ext_tip_ToolTip_Component from './Ext/tip/ToolTip'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtTooltipComponent extends Ext_tip_ToolTip_Component {
    constructor() {
        super ()
        this.xtype = 'tooltip'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tooltip', ExtTooltipComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-tooltip', HTMLParsedElement.withParsedCallback(ExtTooltipComponent))
