'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var n$1 = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var n__default = /*#__PURE__*/_interopDefaultLegacy(n$1);

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*\nPlace your custom CSS here\n*/\n.widget-hello-world {\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIldyaXR0aW5nQXNzaXN0YW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQztBQUNEOztBQUVBIiwiZmlsZSI6IldyaXR0aW5nQXNzaXN0YW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5QbGFjZSB5b3VyIGN1c3RvbSBDU1MgaGVyZVxuKi9cbi53aWRnZXQtaGVsbG8td29ybGQge1xuXG59XG4iXX0= */";
var stylesheet="/*\nPlace your custom CSS here\n*/\n.widget-hello-world {\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIldyaXR0aW5nQXNzaXN0YW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQztBQUNEOztBQUVBIiwiZmlsZSI6IldyaXR0aW5nQXNzaXN0YW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5QbGFjZSB5b3VyIGN1c3RvbSBDU1MgaGVyZVxuKi9cbi53aWRnZXQtaGVsbG8td29ybGQge1xuXG59XG4iXX0= */";
styleInject(css_248z);

var WrittingAssistant = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': css_248z,
	stylesheet: stylesheet
});

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(WrittingAssistant);

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

	  var hasOwn = {}.hasOwnProperty;
	  function classNames() {
	    var classes = [];
	    for (var i = 0; i < arguments.length; i++) {
	      var arg = arguments[i];
	      if (!arg) continue;
	      var argType = typeof arg;
	      if (argType === 'string' || argType === 'number') {
	        classes.push(arg);
	      } else if (Array.isArray(arg)) {
	        if (arg.length) {
	          var inner = classNames.apply(null, arg);
	          if (inner) {
	            classes.push(inner);
	          }
	        }
	      } else if (argType === 'object') {
	        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
	          classes.push(arg.toString());
	          continue;
	        }
	        for (var key in arg) {
	          if (hasOwn.call(arg, key) && arg[key]) {
	            classes.push(key);
	          }
	        }
	      }
	    }
	    return classes.join(' ');
	  }
	  if (module.exports) {
	    classNames.default = classNames;
	    module.exports = classNames;
	  } else {
	    window.classNames = classNames;
	  }
	})();
} (classnames));

var classNames = classnames.exports;

/**
 * @license
 * (c) Copyright 2023 Grammarly, Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function t(t, n, r) {
  return n in t ? Object.defineProperty(t, n, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = r, t;
}
var n = new Map();
class r extends Error {
  constructor(n, r) {
    super(), t(this, "args", void 0), t(this, "code", void 0), t(this, "url", void 0), t(this, "_c", void 0);
    var e = new URL("https://developer.grammarly.com/docs/error-explainer");
    e.searchParams.set("code", n.toString()), r.forEach(t => e.searchParams.append("args", function (t) {
      if (t instanceof Error) return t.message + "\n" + String(t.stack);
      if (null == t) return "null";
      if ("object" == typeof t) try {
        return Object.prototype.toString.call(t);
      } catch (t) {}
      return String(t);
    }(t))), null != this.stack && e.searchParams.set("trace", this.stack), this.message = "Minified error #".concat(n, ": See ").concat(e.toString(), " for details."), this.args = r, this.code = n, this.url = e.toString();
  }
  toUserMessage() {
    var t = n.get("".concat(this.code));
    if (null == t) return [this];
    var r = new Map(this.args.map((t, n) => ["${".concat(n, "}"), t])),
      e = t.split(/(\${\d+})/).filter(t => "" !== t);
    return e.map(t => {
      var n;
      return null !== (n = r.get(t)) && void 0 !== n ? n : t;
    });
  }
  toJSON() {
    return {
      name: "InvariantError",
      message: this.message,
      description: this._m,
      code: this.code,
      args: this.args,
      stack: this.stack
    };
  }
  static setMessages(t) {
    n = t;
  }
  static create(t, n, e, a) {
    null != a && n.push(a);
    var o = new r(t, n, e);
    return o.stack = null == a ? void 0 : a.stack, o._m = e, o;
  }
}
const e = new WeakMap();
async function a$1(t, n) {
  const a = e.get(t);
  if (null != a) return await a;
  !function (t) {
    null == t.Grammarly && (t.Grammarly = {});
  }(t);
  const o = new Promise((e, a) => {
    try {
      let e = function (t, n) {
        return t.document.querySelectorAll(`script[src^="${n.replace(/\?.*$/, "")}"]`)[0];
      }(t, n);
      null != e ? o() : (e = function (t, n) {
        const r = t.document.createElement("script");
        return r.src = n, t.document.head.appendChild(r), r;
      }(t, n), e.addEventListener("load", o), e.addEventListener("error", function () {
        try {
          throw new r(23, []);
        } catch (t) {
          a(t);
        }
      }));
    } catch (t) {
      return a(t);
    }
    function o() {
      try {
        if (null == t.Grammarly || "function" != typeof t.Grammarly.EditorSDK) throw new r(22, []);
        e(t.Grammarly);
      } catch (t) {
        a(t);
      }
    }
  });
  return e.set(t, o), await o;
}
async function s(t, n, e, o) {
  if ("undefined" == typeof window && void 0 === o) throw new r(21, []);
  const s = function (t) {
    return "null" !== t.location.origin ? t.location.origin : "null" !== t.origin ? t.origin : "null";
  }(null != o ? o : window);
  "null" === s && (null != o ? o : window).top !== (null != o ? o : window) && console.warn("Grammarly is not supported in IFrames with `null` origin. Consider adding `sandbox='allow-same-origin allow-scripts'` to <iframe> element.");
  const i = new URL("https://js.grammarly.com/grammarly-editor-sdk@2.3", s);
  null != n && i.searchParams.set("clientId", n), i.searchParams.set("packageName", t);
  const c = await a$1(null != o ? o : window, i.toString());
  if (null != n) return new c.EditorSDK(n, e);
}
const i = {
  onBeforeSuggestionCardOpen: "before-suggestion-card-open",
  onSuggestionCardOpen: "suggestion-card-open",
  onSuggestionCardClose: "suggestion-card-close",
  onSuggestionCardAction: "suggestion-card-action",
  onPluginTurnedOff: "plugin-turned-off",
  onPluginError: "plugin-error",
  onDocumentStats: "document-stats",
  onSessionStats: "session-stats"
};

/**
 * @license
 * (c) Copyright 2023 Grammarly, Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a = n__default["default"].createContext({});
function d(n, r, o) {
  const c = n$1.useCallback(e => null == n ? void 0 : n(new CustomEvent("plugin-error", {
    detail: e
  })), [n]);
  n$1.useEffect(() => {
    var n;
    "undefined" != typeof navigator && (null != r && null != (null === (n = null == o ? void 0 : o.current) || void 0 === n ? void 0 : n.ownerDocument.defaultView) && window !== o.current.ownerDocument.defaultView ? s("@grammarly/editor-sdk-react", r, void 0, o.current.ownerDocument.defaultView).catch(c) : s("@grammarly/editor-sdk-react").catch(c));
  }, null != o && null != r ? [o, r] : []);
}
function f(n) {
  return "function" == typeof n;
}
const g = l => {
  const [s, {
      clientId: m,
      config: g,
      children: v,
      className: p,
      ...E
    }] = function (n) {
      const e = {},
        t = {
          ...n
        };
      return Object.keys(i).forEach(r => {
        e[r] = n[r], r in t && delete t[r];
      }), [e, t];
    }(l),
    h = n$1.useContext(a),
    w = n$1.useRef(),
    y = n$1.useRef(),
    I = n$1.useRef(),
    k = n$1.useCallback(n => {
      w.current = n, D();
    }, []),
    b = function (n) {
      const [r, c] = n$1.useState({}),
        i = n$1.useCallback(() => {
          customElements.whenDefined(n).then(() => c(e => ({
            ...e,
            [n]: !0
          }))).catch(() => {});
        }, [n]);
      return n$1.useEffect(i, [i]), !!r[n];
    }("grammarly-editor-plugin"),
    D = n$1.useCallback(() => {
      var n;
      null != w.current && null != y.current && b && w.current.connect(y.current, null !== (n = I.current) && void 0 !== n ? n : void 0);
    }, [b]),
    P = n$1.useMemo(() => ({
      ...h.config,
      ...g
    }), [h.config, g]);
  return n$1.useEffect(() => {
    w.current && (w.current.config = P);
  }, [w, P]), n$1.useEffect(() => {
    if (null == w.current) return;
    const {
        current: n
      } = w,
      e = [];
    return Object.keys(i).forEach(t => {
      const r = s[t],
        o = i[t];
      null != r && (n.addEventListener(o, r), e.push(() => n.removeEventListener(o, r)));
    }), () => e.forEach(n => n());
  }, [...Object.values(s), b, w.current]), d(l.onPluginError, null != m ? m : h.clientId, w), n__default["default"].createElement("grammarly-editor-plugin", {
    ...E,
    ref: k,
    clientId: null != m ? m : h.clientId,
    autodetect: f(v) ? "off" : "on",
    class: p
  }, f(v) ? v({
    setEditor: n => {
      y.current = n, D();
    },
    setViewport: n => {
      I.current = n, D();
    }
  }) : v);
};

class InputBox extends n$1.Component {
    constructor() {
        super(...arguments);
        this.onChangeHandle = this.onChange.bind(this);
        this.onBlurHandle = this.onBlur.bind(this);
        this.state = { editedValue: undefined };
    }
    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value) {
            this.setState({ editedValue: undefined });
        }
    }
    render() {
        const textStyle = {
            width: 1200,
            height: 60
        };
        const className = classNames("form-control  mx-textarea-input mx-textarea-noresize", this.props.className);
        return (n$1.createElement(g, { clientId: this.props.clientID, style: textStyle },
            n$1.createElement("textarea", { className: className, style: this.props.style, value: this.getCurrentValue(), tabIndex: this.props.tabIndex, onChange: this.onChangeHandle, onBlur: this.onBlurHandle })));
    }
    getCurrentValue() {
        return this.state.editedValue !== undefined
            ? this.state.editedValue
            : this.props.value;
    }
    onChange(event) {
        this.setState({ editedValue: event.target.value });
    }
    onBlur() {
        const inputValue = this.props.value;
        const currentValue = this.getCurrentValue();
        if (this.props.onLeave) {
            this.props.onLeave(currentValue, currentValue !== inputValue);
        }
        this.setState({ editedValue: undefined });
    }
}

class preview extends n$1.Component {
    render() {
        return (n$1.createElement(InputBox, { value: this.props.textAttribute, clientID: this.props.grammarlyId }));
    }
}
function getPreviewCss() {
    return require$$0;
}

exports.getPreviewCss = getPreviewCss;
exports.preview = preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV3JpdHRpbmdBc3Npc3RhbnQuZWRpdG9yUHJldmlldy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWluamVjdC9kaXN0L3N0eWxlLWluamVjdC5lcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BncmFtbWFybHkvZWRpdG9yLXNkay9saWIvaW5kZXguZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BncmFtbWFybHkvZWRpdG9yLXNkay1yZWFjdC9saWIvaW5kZXguZXNtLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSW5wdXRCb3gudHN4IiwiLi4vLi4vLi4vc3JjL1dyaXR0aW5nQXNzaXN0YW50LmVkaXRvclByZXZpZXcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCIvKiFcblx0Q29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG5cdExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG5cdGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cdHZhciBuYXRpdmVDb2RlU3RyaW5nID0gJ1tuYXRpdmUgY29kZV0nO1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyAmJiAhYXJnLnRvU3RyaW5nLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ1tuYXRpdmUgY29kZV0nKSkge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogKGMpIENvcHlyaWdodCAyMDIzIEdyYW1tYXJseSwgSW5jLlxuICogXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiBcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqIFxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZnVuY3Rpb24gdCh0LG4scil7cmV0dXJuIG4gaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtuXT1yLHR9dmFyIG49bmV3IE1hcDtjbGFzcyByIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IobixyKXtzdXBlcigpLHQodGhpcyxcImFyZ3NcIix2b2lkIDApLHQodGhpcyxcImNvZGVcIix2b2lkIDApLHQodGhpcyxcInVybFwiLHZvaWQgMCksdCh0aGlzLFwiX2NcIix2b2lkIDApO3ZhciBlPW5ldyBVUkwoXCJodHRwczovL2RldmVsb3Blci5ncmFtbWFybHkuY29tL2RvY3MvZXJyb3ItZXhwbGFpbmVyXCIpO2Uuc2VhcmNoUGFyYW1zLnNldChcImNvZGVcIixuLnRvU3RyaW5nKCkpLHIuZm9yRWFjaCgodD0+ZS5zZWFyY2hQYXJhbXMuYXBwZW5kKFwiYXJnc1wiLGZ1bmN0aW9uKHQpe2lmKHQgaW5zdGFuY2VvZiBFcnJvcilyZXR1cm4gdC5tZXNzYWdlK1wiXFxuXCIrU3RyaW5nKHQuc3RhY2spO2lmKG51bGw9PXQpcmV0dXJuXCJudWxsXCI7aWYoXCJvYmplY3RcIj09dHlwZW9mIHQpdHJ5e3JldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9Y2F0Y2godCl7fXJldHVybiBTdHJpbmcodCl9KHQpKSkpLG51bGwhPXRoaXMuc3RhY2smJmUuc2VhcmNoUGFyYW1zLnNldChcInRyYWNlXCIsdGhpcy5zdGFjayksdGhpcy5tZXNzYWdlPVwiTWluaWZpZWQgZXJyb3IgI1wiLmNvbmNhdChuLFwiOiBTZWUgXCIpLmNvbmNhdChlLnRvU3RyaW5nKCksXCIgZm9yIGRldGFpbHMuXCIpLHRoaXMuYXJncz1yLHRoaXMuY29kZT1uLHRoaXMudXJsPWUudG9TdHJpbmcoKX10b1VzZXJNZXNzYWdlKCl7dmFyIHQ9bi5nZXQoXCJcIi5jb25jYXQodGhpcy5jb2RlKSk7aWYobnVsbD09dClyZXR1cm5bdGhpc107dmFyIHI9bmV3IE1hcCh0aGlzLmFyZ3MubWFwKCgodCxuKT0+W1wiJHtcIi5jb25jYXQobixcIn1cIiksdF0pKSksZT10LnNwbGl0KC8oXFwke1xcZCt9KS8pLmZpbHRlcigodD0+XCJcIiE9PXQpKTtyZXR1cm4gZS5tYXAoKHQ9Pnt2YXIgbjtyZXR1cm4gbnVsbCE9PShuPXIuZ2V0KHQpKSYmdm9pZCAwIT09bj9uOnR9KSl9dG9KU09OKCl7cmV0dXJue25hbWU6XCJJbnZhcmlhbnRFcnJvclwiLG1lc3NhZ2U6dGhpcy5tZXNzYWdlLGRlc2NyaXB0aW9uOnRoaXMuX20sY29kZTp0aGlzLmNvZGUsYXJnczp0aGlzLmFyZ3Msc3RhY2s6dGhpcy5zdGFja319c3RhdGljIHNldE1lc3NhZ2VzKHQpe249dH1zdGF0aWMgY3JlYXRlKHQsbixlLGEpe251bGwhPWEmJm4ucHVzaChhKTt2YXIgbz1uZXcgcih0LG4sZSk7cmV0dXJuIG8uc3RhY2s9bnVsbD09YT92b2lkIDA6YS5zdGFjayxvLl9tPWUsb319Y29uc3QgZT1uZXcgV2Vha01hcDthc3luYyBmdW5jdGlvbiBhKHQsbil7Y29uc3QgYT1lLmdldCh0KTtpZihudWxsIT1hKXJldHVybiBhd2FpdCBhOyFmdW5jdGlvbih0KXtudWxsPT10LkdyYW1tYXJseSYmKHQuR3JhbW1hcmx5PXt9KX0odCk7Y29uc3Qgbz1uZXcgUHJvbWlzZSgoKGUsYSk9Pnt0cnl7bGV0IGU9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdC5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBzY3JpcHRbc3JjXj1cIiR7bi5yZXBsYWNlKC9cXD8uKiQvLFwiXCIpfVwiXWApWzBdfSh0LG4pO251bGwhPWU/bygpOihlPWZ1bmN0aW9uKHQsbil7Y29uc3Qgcj10LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7cmV0dXJuIHIuc3JjPW4sdC5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHIpLHJ9KHQsbiksZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLG8pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKGZ1bmN0aW9uKCl7dHJ5e3Rocm93IG5ldyByKDIzLFtdKX1jYXRjaCh0KXthKHQpfX0pKSl9Y2F0Y2godCl7cmV0dXJuIGEodCl9ZnVuY3Rpb24gbygpe3RyeXtpZihudWxsPT10LkdyYW1tYXJseXx8XCJmdW5jdGlvblwiIT10eXBlb2YgdC5HcmFtbWFybHkuRWRpdG9yU0RLKXRocm93IG5ldyByKDIyLFtdKTtlKHQuR3JhbW1hcmx5KX1jYXRjaCh0KXthKHQpfX19KSk7cmV0dXJuIGUuc2V0KHQsbyksYXdhaXQgb31hc3luYyBmdW5jdGlvbiBvKHQsbixyKXtyZXR1cm4gYXdhaXQgcyhcIkBncmFtbWFybHkvZWRpdG9yLXNka1wiLHQsbixyKX1hc3luYyBmdW5jdGlvbiBzKHQsbixlLG8pe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3cmJnZvaWQgMD09PW8pdGhyb3cgbmV3IHIoMjEsW10pO2NvbnN0IHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJudWxsXCIhPT10LmxvY2F0aW9uLm9yaWdpbj90LmxvY2F0aW9uLm9yaWdpbjpcIm51bGxcIiE9PXQub3JpZ2luP3Qub3JpZ2luOlwibnVsbFwifShudWxsIT1vP286d2luZG93KTtcIm51bGxcIj09PXMmJihudWxsIT1vP286d2luZG93KS50b3AhPT0obnVsbCE9bz9vOndpbmRvdykmJmNvbnNvbGUud2FybihcIkdyYW1tYXJseSBpcyBub3Qgc3VwcG9ydGVkIGluIElGcmFtZXMgd2l0aCBgbnVsbGAgb3JpZ2luLiBDb25zaWRlciBhZGRpbmcgYHNhbmRib3g9J2FsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHMnYCB0byA8aWZyYW1lPiBlbGVtZW50LlwiKTtjb25zdCBpPW5ldyBVUkwoXCJodHRwczovL2pzLmdyYW1tYXJseS5jb20vZ3JhbW1hcmx5LWVkaXRvci1zZGtAMi4zXCIscyk7bnVsbCE9biYmaS5zZWFyY2hQYXJhbXMuc2V0KFwiY2xpZW50SWRcIixuKSxpLnNlYXJjaFBhcmFtcy5zZXQoXCJwYWNrYWdlTmFtZVwiLHQpO2NvbnN0IGM9YXdhaXQgYShudWxsIT1vP286d2luZG93LGkudG9TdHJpbmcoKSk7aWYobnVsbCE9bilyZXR1cm4gbmV3IGMuRWRpdG9yU0RLKG4sZSl9Y29uc3QgaT17b25CZWZvcmVTdWdnZXN0aW9uQ2FyZE9wZW46XCJiZWZvcmUtc3VnZ2VzdGlvbi1jYXJkLW9wZW5cIixvblN1Z2dlc3Rpb25DYXJkT3BlbjpcInN1Z2dlc3Rpb24tY2FyZC1vcGVuXCIsb25TdWdnZXN0aW9uQ2FyZENsb3NlOlwic3VnZ2VzdGlvbi1jYXJkLWNsb3NlXCIsb25TdWdnZXN0aW9uQ2FyZEFjdGlvbjpcInN1Z2dlc3Rpb24tY2FyZC1hY3Rpb25cIixvblBsdWdpblR1cm5lZE9mZjpcInBsdWdpbi10dXJuZWQtb2ZmXCIsb25QbHVnaW5FcnJvcjpcInBsdWdpbi1lcnJvclwiLG9uRG9jdW1lbnRTdGF0czpcImRvY3VtZW50LXN0YXRzXCIsb25TZXNzaW9uU3RhdHM6XCJzZXNzaW9uLXN0YXRzXCJ9O2V4cG9ydHtpIGFzIGNhbGxiYWNrVG9FdmVudE5hbWUsbyBhcyBpbml0LHMgYXMgaW5pdF93aXRoX3BhY2thZ2VOYW1lfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIChjKSBDb3B5cmlnaHQgMjAyMyBHcmFtbWFybHksIEluYy5cbiAqIFxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICogXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKiBcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBuLHt1c2VDYWxsYmFjayBhcyBlLHVzZUVmZmVjdCBhcyB0LHVzZUNvbnRleHQgYXMgcix1c2VTdGF0ZSBhcyBvLHVzZVJlZiBhcyBjLHVzZU1lbW8gYXMgaX1mcm9tXCJyZWFjdFwiO2ltcG9ydHtpbml0X3dpdGhfcGFja2FnZU5hbWUgYXMgbCxjYWxsYmFja1RvRXZlbnROYW1lIGFzIHV9ZnJvbVwiQGdyYW1tYXJseS9lZGl0b3Itc2RrXCI7ZXhwb3J0e2luaXR9ZnJvbVwiQGdyYW1tYXJseS9lZGl0b3Itc2RrXCI7Y29uc3QgYT1uLmNyZWF0ZUNvbnRleHQoe30pO2Z1bmN0aW9uIGQobixyLG8pe2NvbnN0IGM9ZSgoZT0+bnVsbD09bj92b2lkIDA6bihuZXcgQ3VzdG9tRXZlbnQoXCJwbHVnaW4tZXJyb3JcIix7ZGV0YWlsOmV9KSkpLFtuXSk7dCgoKCk9Pnt2YXIgbjtcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiYobnVsbCE9ciYmbnVsbCE9KG51bGw9PT0obj1udWxsPT1vP3ZvaWQgMDpvLmN1cnJlbnQpfHx2b2lkIDA9PT1uP3ZvaWQgMDpuLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpJiZ3aW5kb3chPT1vLmN1cnJlbnQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldz9sKFwiQGdyYW1tYXJseS9lZGl0b3Itc2RrLXJlYWN0XCIscix2b2lkIDAsby5jdXJyZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpLmNhdGNoKGMpOmwoXCJAZ3JhbW1hcmx5L2VkaXRvci1zZGstcmVhY3RcIikuY2F0Y2goYykpfSksbnVsbCE9byYmbnVsbCE9cj9bbyxyXTpbXSl9Y29uc3Qgcz1lPT57Y29uc3R7Y2xpZW50SWQ6dCxjb25maWc6byxjaGlsZHJlbjpjfT1lLGk9cihhKTtyZXR1cm4gZCgpLG4uY3JlYXRlRWxlbWVudChhLlByb3ZpZGVyLHt2YWx1ZTp7Y2xpZW50SWQ6bnVsbCE9dD90OmkuY2xpZW50SWQsY29uZmlnOnsuLi5pLmNvbmZpZywuLi5vfX19LGMpfSxtPSh7dG9uZVBvc2l0aW9uOmUsbWVudVBvc2l0aW9uOnQsY2xhc3NOYW1lOnIsLi4ub30pPT5uLmNyZWF0ZUVsZW1lbnQoXCJncmFtbWFybHktYnV0dG9uXCIsey4uLm8sY2xhc3M6cixcInRvbmUtcG9zaXRpb25cIjplLFwibWVudS1wb3NpdGlvblwiOnR9KTtmdW5jdGlvbiBmKG4pe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG59Y29uc3QgZz1sPT57Y29uc3Rbcyx7Y2xpZW50SWQ6bSxjb25maWc6ZyxjaGlsZHJlbjp2LGNsYXNzTmFtZTpwLC4uLkV9XT1mdW5jdGlvbihuKXtjb25zdCBlPXt9LHQ9ey4uLm59O3JldHVybiBPYmplY3Qua2V5cyh1KS5mb3JFYWNoKChyPT57ZVtyXT1uW3JdLHIgaW4gdCYmZGVsZXRlIHRbcl19KSksW2UsdF19KGwpLGg9cihhKSx3PWMoKSx5PWMoKSxJPWMoKSxrPWUoKG49Pnt3LmN1cnJlbnQ9bixEKCl9KSxbXSksYj1mdW5jdGlvbihuKXtjb25zdFtyLGNdPW8oe30pLGk9ZSgoKCk9PntjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZChuKS50aGVuKCgoKT0+YygoZT0+KHsuLi5lLFtuXTohMH0pKSkpKS5jYXRjaCgoKCk9Pnt9KSl9KSxbbl0pO3JldHVybiB0KGksW2ldKSwhIXJbbl19KFwiZ3JhbW1hcmx5LWVkaXRvci1wbHVnaW5cIiksRD1lKCgoKT0+e3ZhciBuO251bGwhPXcuY3VycmVudCYmbnVsbCE9eS5jdXJyZW50JiZiJiZ3LmN1cnJlbnQuY29ubmVjdCh5LmN1cnJlbnQsbnVsbCE9PShuPUkuY3VycmVudCkmJnZvaWQgMCE9PW4/bjp2b2lkIDApfSksW2JdKSxQPWkoKCgpPT4oey4uLmguY29uZmlnLC4uLmd9KSksW2guY29uZmlnLGddKTtyZXR1cm4gdCgoKCk9Pnt3LmN1cnJlbnQmJih3LmN1cnJlbnQuY29uZmlnPVApfSksW3csUF0pLHQoKCgpPT57aWYobnVsbD09dy5jdXJyZW50KXJldHVybjtjb25zdHtjdXJyZW50Om59PXcsZT1bXTtyZXR1cm4gT2JqZWN0LmtleXModSkuZm9yRWFjaCgodD0+e2NvbnN0IHI9c1t0XSxvPXVbdF07bnVsbCE9ciYmKG4uYWRkRXZlbnRMaXN0ZW5lcihvLHIpLGUucHVzaCgoKCk9Pm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLHIpKSkpfSkpLCgpPT5lLmZvckVhY2goKG49Pm4oKSkpfSksWy4uLk9iamVjdC52YWx1ZXMocyksYix3LmN1cnJlbnRdKSxkKGwub25QbHVnaW5FcnJvcixudWxsIT1tP206aC5jbGllbnRJZCx3KSxuLmNyZWF0ZUVsZW1lbnQoXCJncmFtbWFybHktZWRpdG9yLXBsdWdpblwiLHsuLi5FLHJlZjprLGNsaWVudElkOm51bGwhPW0/bTpoLmNsaWVudElkLGF1dG9kZXRlY3Q6Zih2KT9cIm9mZlwiOlwib25cIixjbGFzczpwfSxmKHYpP3Yoe3NldEVkaXRvcjpuPT57eS5jdXJyZW50PW4sRCgpfSxzZXRWaWV3cG9ydDpuPT57SS5jdXJyZW50PW4sRCgpfX0pOnYpfTtleHBvcnR7cyBhcyBHcmFtbWFybHksbSBhcyBHcmFtbWFybHlCdXR0b24sZyBhcyBHcmFtbWFybHlFZGl0b3JQbHVnaW59O1xuIiwiaW1wb3J0IHsgQ1NTUHJvcGVydGllcywgQ2hhbmdlRXZlbnQsIENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IHsgR3JhbW1hcmx5RWRpdG9yUGx1Z2luIH0gZnJvbSBcIkBncmFtbWFybHkvZWRpdG9yLXNkay1yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFByb3BzIHtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBpbmRleD86IG51bWJlcjtcclxuICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XHJcbiAgdGFiSW5kZXg/OiBudW1iZXI7XHJcbiAgY2xpZW50SUQ6IHN0cmluZztcclxuICAvL29uVXBkYXRlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgb25MZWF2ZT86ICh2YWx1ZTogc3RyaW5nLCBjaGFuZ2VkOiBib29sZWFuKSA9PiB2b2lkO1xyXG59XHJcbmludGVyZmFjZSBJbnB1dFN0YXRlIHtcclxuICBlZGl0ZWRWYWx1ZT86IHN0cmluZztcclxufVxyXG5leHBvcnQgY2xhc3MgSW5wdXRCb3ggZXh0ZW5kcyBDb21wb25lbnQ8SW5wdXRQcm9wcz4ge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgb25DaGFuZ2VIYW5kbGUgID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgb25CbHVySGFuZGxlID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKTtcclxuICByZWFkb25seSBzdGF0ZTogSW5wdXRTdGF0ZSA9IHsgZWRpdGVkVmFsdWU6IHVuZGVmaW5lZCB9O1xyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogSW5wdXRQcm9wcyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlICE9PSBwcmV2UHJvcHMudmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRlZFZhbHVlOiB1bmRlZmluZWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHRleHRTdHlsZSA9IHtcclxuICAgICAgd2lkdGg6IDEyMDAgLFxyXG4gICAgICBoZWlnaHQ6IDYwXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKFwiZm9ybS1jb250cm9sICBteC10ZXh0YXJlYS1pbnB1dCBteC10ZXh0YXJlYS1ub3Jlc2l6ZVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8R3JhbW1hcmx5RWRpdG9yUGx1Z2luIGNsaWVudElkPXt0aGlzLnByb3BzLmNsaWVudElEfSBzdHlsZSA9IHt0ZXh0U3R5bGV9PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cclxuICAgICAgICAgIHZhbHVlPXt0aGlzLmdldEN1cnJlbnRWYWx1ZSgpfVxyXG4gICAgICAgICAgdGFiSW5kZXg9e3RoaXMucHJvcHMudGFiSW5kZXh9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUhhbmRsZX1cclxuICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJIYW5kbGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9HcmFtbWFybHlFZGl0b3JQbHVnaW4+XHJcbiAgICApO1xyXG4gIH1cclxuICBwcml2YXRlIGdldEN1cnJlbnRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZWRpdGVkVmFsdWUgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gdGhpcy5zdGF0ZS5lZGl0ZWRWYWx1ZVxyXG4gICAgICAgIDogdGhpcy5wcm9wcy52YWx1ZTtcclxuICB9XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZShldmVudDogQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0ZWRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuICBwcml2YXRlIG9uQmx1cigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xyXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsdWUoKTtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uTGVhdmUpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uTGVhdmUoY3VycmVudFZhbHVlLCBjdXJyZW50VmFsdWUgIT09IGlucHV0VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRlZFZhbHVlOiB1bmRlZmluZWQgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgUmVhY3ROb2RlLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IElucHV0Qm94IH0gZnJvbSBcIi4vY29tcG9uZW50cy9JbnB1dEJveFwiO1xuaW1wb3J0IHsgV3JpdHRpbmdBc3Npc3RhbnRQcmV2aWV3UHJvcHMgfSBmcm9tIFwiLi4vdHlwaW5ncy9Xcml0dGluZ0Fzc2lzdGFudFByb3BzXCI7XG5cbmV4cG9ydCBjbGFzcyBwcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50PFdyaXR0aW5nQXNzaXN0YW50UHJldmlld1Byb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXRCb3hcbiAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudGV4dEF0dHJpYnV0ZX1cbiAgICAgICAgY2xpZW50SUQ9e3RoaXMucHJvcHMuZ3JhbW1hcmx5SWR9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpZXdDc3MoKTogc3RyaW5nIHtcbiAgcmV0dXJuIHJlcXVpcmUoXCIuL3VpL1dyaXR0aW5nQXNzaXN0YW50LmNzc1wiKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZUluamVjdCIsImNzcyIsInJlZiIsImluc2VydEF0IiwiZG9jdW1lbnQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJnIiwiYXJnVHlwZSIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJpbm5lciIsImFwcGx5IiwidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJpbmNsdWRlcyIsImtleSIsImNhbGwiLCJqb2luIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHQiLCJ3aW5kb3ciLCJ0IiwibiIsInIiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiTWFwIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsImUiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJmb3JFYWNoIiwiYXBwZW5kIiwibWVzc2FnZSIsIlN0cmluZyIsInN0YWNrIiwiY29uY2F0IiwiYXJncyIsImNvZGUiLCJ1cmwiLCJ0b1VzZXJNZXNzYWdlIiwiZ2V0IiwibWFwIiwic3BsaXQiLCJmaWx0ZXIiLCJ0b0pTT04iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJfbSIsInNldE1lc3NhZ2VzIiwiY3JlYXRlIiwiYSIsIm8iLCJXZWFrTWFwIiwiR3JhbW1hcmx5IiwiUHJvbWlzZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXBsYWNlIiwic3JjIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkVkaXRvclNESyIsInMiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInRvcCIsImNvbnNvbGUiLCJ3YXJuIiwiYyIsIm9uQmVmb3JlU3VnZ2VzdGlvbkNhcmRPcGVuIiwib25TdWdnZXN0aW9uQ2FyZE9wZW4iLCJvblN1Z2dlc3Rpb25DYXJkQ2xvc2UiLCJvblN1Z2dlc3Rpb25DYXJkQWN0aW9uIiwib25QbHVnaW5UdXJuZWRPZmYiLCJvblBsdWdpbkVycm9yIiwib25Eb2N1bWVudFN0YXRzIiwib25TZXNzaW9uU3RhdHMiLCJjcmVhdGVDb250ZXh0IiwiZCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwibmF2aWdhdG9yIiwiY3VycmVudCIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsImwiLCJjYXRjaCIsImYiLCJnIiwiY2xpZW50SWQiLCJtIiwiY29uZmlnIiwiY2hpbGRyZW4iLCJ2IiwiY2xhc3NOYW1lIiwicCIsIkUiLCJrZXlzIiwidSIsImgiLCJ3IiwieSIsIkkiLCJrIiwiRCIsImIiLCJjdXN0b21FbGVtZW50cyIsIndoZW5EZWZpbmVkIiwidGhlbiIsImNvbm5lY3QiLCJQIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInZhbHVlcyIsImF1dG9kZXRlY3QiLCJjbGFzcyIsInNldEVkaXRvciIsInNldFZpZXdwb3J0IiwiQ29tcG9uZW50IiwiR3JhbW1hcmx5RWRpdG9yUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFdBQVdBLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQzdCLElBQUtBLEdBQUcsS0FBSyxLQUFLLENBQUMsRUFBR0EsR0FBRyxHQUFHLEVBQUUsQ0FBQTtBQUM5QixFQUFBLElBQUlDLFFBQVEsR0FBR0QsR0FBRyxDQUFDQyxRQUFRLENBQUE7QUFFM0IsRUFBQSxJQUFJLENBQUNGLEdBQUcsSUFBSSxPQUFPRyxRQUFRLEtBQUssV0FBVyxFQUFFO0FBQUUsSUFBQSxPQUFBO0FBQVEsR0FBQTtBQUV2RCxFQUFBLElBQUlDLElBQUksR0FBR0QsUUFBUSxDQUFDQyxJQUFJLElBQUlELFFBQVEsQ0FBQ0Usb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDcEUsRUFBQSxJQUFJQyxLQUFLLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0VBQzNDRCxLQUFLLENBQUNFLElBQUksR0FBRyxVQUFVLENBQUE7RUFFdkIsSUFBSU4sUUFBUSxLQUFLLEtBQUssRUFBRTtJQUN0QixJQUFJRSxJQUFJLENBQUNLLFVBQVUsRUFBRTtNQUNuQkwsSUFBSSxDQUFDTSxZQUFZLENBQUNKLEtBQUssRUFBRUYsSUFBSSxDQUFDSyxVQUFVLENBQUMsQ0FBQTtBQUMzQyxLQUFD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
