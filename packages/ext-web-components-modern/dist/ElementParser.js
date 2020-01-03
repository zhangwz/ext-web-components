import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _wrapNativeSuper from "@babel/runtime/helpers/wrapNativeSuper";

var ElementParser = function () {
  if (window['Ext'] == undefined) {
    console.warn('Ext engine and theme not defined in index.html');
    console.warn('Deprecation below is expected');
    console.warn('Click the following link for discussion on how to resolve');
    console.warn('https://docs.sencha.com/extwebcomponents/7.1.0/guides/deprecation_message.html');
    var toolkit = 'modern'; //var baseFolder = "../ext-web-components-" + toolkit + "/ext-runtime-" + toolkit;

    var baseFolder = "./node_modules/@sencha/ext-web-components-" + toolkit + "/ext-runtime-" + toolkit;
    var xhrObj = new XMLHttpRequest();
    xhrObj.open('GET', baseFolder + "/boot.js", false);
    xhrObj.send(''); // console.log(xhrObj.status)

    if (xhrObj.status == 404) {
      //baseFolder = "./node_modules/@sencha/ext-web-components-" + toolkit + "/ext-runtime-" + toolkit;
      baseFolder = "../ext-web-components-" + toolkit + "/ext-runtime-" + toolkit;
      xhrObj.open('GET', baseFolder + "/boot.js", false);
      xhrObj.send('');
    } // console.log(xhrObj.status)


    if (xhrObj.status != 200) {
      console.warn('cant find Ext engine - see https://docs.sencha.com/extwebcomponents/7.1.0/guides/deprecation_message.html');
      return;
    }

    var se = document.createElement('script');
    se.type = "text/javascript";
    se.text = xhrObj.responseText;
    document.getElementsByTagName('head')[0].appendChild(se);
    console.warn(baseFolder + "/boot.js" + " " + "was dynamically loaded");
    xhrObj.open('GET', baseFolder + "/engine.js", false);
    xhrObj.send('');
    var se1 = document.createElement('script');
    se1.type = "text/javascript";
    se1.text = xhrObj.responseText;
    document.getElementsByTagName('head')[0].appendChild(se1);
    console.warn(baseFolder + "/engine.js" + " " + "was dynamically loaded");
    xhrObj.open('GET', baseFolder + "/css.prod.js", false);
    xhrObj.send('');
    var se2 = document.createElement('script');
    se2.type = "text/javascript";
    se2.text = xhrObj.responseText;
    document.getElementsByTagName('head')[0].appendChild(se2);
    console.warn(baseFolder + "/css.prod.js" + " " + "was dynamically loaded");
  }

  var DCL = 'DOMContentLoaded';
  var init = new window.WeakMap();
  var queue = [];

  var isParsed = function isParsed(el) {
    do {
      if (el.nextSibling) return true;
    } while (el = el.parentNode);

    return false;
  };

  var upgrade = function upgrade() {
    queue.splice(0).forEach(function (info) {
      if (init.get(info[0]) !== true) {
        init.set(info[0], true);
        info[0][info[1]]();
      }
    });
  };

  document.addEventListener(DCL, upgrade);

  var ElementParser =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inheritsLoose(ElementParser, _HTMLElement);

    function ElementParser() {
      return _HTMLElement.apply(this, arguments) || this;
    }

    ElementParser.withParsedCallback = function withParsedCallback(Class, name) {
      var _Object$definePropert;

      if (name === void 0) {
        name = 'parsed';
      }

      var prototype = Class.prototype;
      var connectedCallback = prototype.connectedCallback;
      var method = name + 'Callback';

      var cleanUp = function cleanUp(el, observer, ownerDocument, onDCL) {
        observer.disconnect();
        ownerDocument.removeEventListener(DCL, onDCL);
        parsedCallback(el);
      };

      var parsedCallback = function parsedCallback(el) {
        if (!queue.length) requestAnimationFrame(upgrade);
        queue.push([el, method]);
      };

      Object.defineProperties(prototype, (_Object$definePropert = {
        connectedCallback: {
          configurable: true,
          value: function value() {
            if (connectedCallback) {
              connectedCallback.apply(this, arguments);
            }

            var self = this;

            if (method in this && !init.has(this)) {
              var ownerDocument = self.ownerDocument;
              init.set(self, false);

              if (ownerDocument.readyState === 'complete' || isParsed(self)) {
                parsedCallback(self);
              } else {
                var onDCL = function onDCL() {
                  return cleanUp(self, observer, ownerDocument, onDCL);
                };

                ownerDocument.addEventListener(DCL, onDCL);
                var observer = new MutationObserver(function () {
                  /* istanbul ignore else */
                  if (isParsed(self)) cleanUp(self, observer, ownerDocument, onDCL);
                });
                observer.observe(self.parentNode, {
                  childList: true,
                  subtree: true
                });
              }
            } else {
              setTimeout(function () {
                self['parsedCallback']();
              }, 0);
            }
          }
        }
      }, _Object$definePropert[name] = {
        configurable: true,
        get: function get() {
          return init.get(this) === true;
        }
      }, _Object$definePropert));
      return Class;
    };

    return ElementParser;
  }(_wrapNativeSuper(HTMLElement));

  return ElementParser.withParsedCallback(ElementParser);
}();

export default ElementParser; //var framework = 'modern'
//var list= document.all;
//for (var i = 0; i < list.length; i++) {
//  if (list[i].tagName == 'SCRIPT') {
//    if (list[i].type == 'module') {
//      var s = list[i].getAttribute('src');
//      var modern = s.includes('modern');
//      var classic = s.includes('classic');
//      if (modern) { framework = 'modern' }
//      if (classic) { framework = 'classic' }
//    }
//  }
//}
//function getIndicesOf(searchStr, str, caseSensitive) {
//  var searchStrLen = searchStr.length;
//  if (searchStrLen == 0) {return [];}
//  var startIndex = 0, index, indices = [];
//  if (!caseSensitive) {
//    str = str.toLowerCase();
//    searchStr = searchStr.toLowerCase();
//  }
//  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
//    indices.push(index);
//    startIndex = index + searchStrLen;
//  }
//  return indices;
//}
//var indices = getIndicesOf("/", import.meta.url);
//var rootPath = import.meta.url.substring(0,indices[indices.length-2])
//var baseFolder = rootPath + "/ext-runtime-" + toolkit;