import Ext_dataview_pullrefresh_Bar_Component from './Ext/dataview/pullrefresh/Bar'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPullrefreshbarComponent extends Ext_dataview_pullrefresh_Bar_Component {
    constructor() {
        super (
            {},
            [],
            []
        )
        this.xtype = 'pullrefreshbar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pullrefreshbar', ExtPullrefreshbarComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pullrefreshbar', HTMLParsedElement.withParsedCallback(ExtPullrefreshbarComponent))
