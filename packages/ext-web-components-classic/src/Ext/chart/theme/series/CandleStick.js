import Ext_chart_theme_series_Series from '../../../../Ext/chart/theme/series/Series.js';

export default class Ext_chart_theme_series_CandleStick extends Ext_chart_theme_series_Series {
  static PROPERTIES() { return [
    'barWidth',
    'fillOpacity',
    'fillStyle',
    'globalAlpha',
    'labelOverflowPadding',
    'lineCap',
    'lineDash',
    'lineDashOffset',
    'lineJoin',
    'lineWidth',
    'miterLimit',
    'ohlcType',
    'padding',
    'shadowBlur',
    'shadowColor',
    'shadowOffsetX',
    'strokeOpacity',
    'strokeStyle',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_theme_series_CandleStick.PROPERTIES());
    return Ext_chart_theme_series_Series.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_theme_series_CandleStick.EVENTS());
    return Ext_chart_theme_series_Series.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_theme_series_CandleStick.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_theme_series_CandleStick.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_theme_series_CandleStick.PROPERTIES()),
      events.concat(Ext_chart_theme_series_CandleStick.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
