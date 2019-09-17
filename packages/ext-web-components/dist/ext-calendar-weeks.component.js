import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Weeks_Component from './Ext/calendar/panel/Weeks';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCalendar_weeksComponent =
/*#__PURE__*/
function (_Ext_calendar_panel_W) {
  _inheritsLoose(ExtCalendar_weeksComponent, _Ext_calendar_panel_W);

  function ExtCalendar_weeksComponent() {
    var _this;

    _this = _Ext_calendar_panel_W.call(this, {}, [], []) || this;
    _this.xtype = 'calendar-weeks';
    return _this;
  }

  return ExtCalendar_weeksComponent;
}(Ext_calendar_panel_Weeks_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-weeks', ExtCalendar_weeksComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar-weeks', HTMLParsedElement.withParsedCallback(ExtCalendar_weeksComponent));