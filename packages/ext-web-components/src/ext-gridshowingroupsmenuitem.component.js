import Ext_grid_menu_ShowInGroups from './Ext/grid/menu/ShowInGroups'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtGridshowingroupsmenuitemComponent extends Ext_grid_menu_ShowInGroups {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'gridshowingroupsmenuitem'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridshowingroupsmenuitem', ExtGridshowingroupsmenuitemComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridshowingroupsmenuitem', HTMLParsedElement.withParsedCallback(ExtGridshowingroupsmenuitemComponent))