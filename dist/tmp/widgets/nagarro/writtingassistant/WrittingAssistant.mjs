import n$1, { useContext, useRef, useCallback, useState, useEffect, useMemo, Component, createElement } from 'react';

function hot(widget) {
  return widget;
}

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
const a = n$1.createContext({});
function d(n, r, o) {
  const c = useCallback(e => null == n ? void 0 : n(new CustomEvent("plugin-error", {
    detail: e
  })), [n]);
  useEffect(() => {
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
    h = useContext(a),
    w = useRef(),
    y = useRef(),
    I = useRef(),
    k = useCallback(n => {
      w.current = n, D();
    }, []),
    b = function (n) {
      const [r, c] = useState({}),
        i = useCallback(() => {
          customElements.whenDefined(n).then(() => c(e => ({
            ...e,
            [n]: !0
          }))).catch(() => {});
        }, [n]);
      return useEffect(i, [i]), !!r[n];
    }("grammarly-editor-plugin"),
    D = useCallback(() => {
      var n;
      null != w.current && null != y.current && b && w.current.connect(y.current, null !== (n = I.current) && void 0 !== n ? n : void 0);
    }, [b]),
    P = useMemo(() => ({
      ...h.config,
      ...g
    }), [h.config, g]);
  return useEffect(() => {
    w.current && (w.current.config = P);
  }, [w, P]), useEffect(() => {
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
  }, [...Object.values(s), b, w.current]), d(l.onPluginError, null != m ? m : h.clientId, w), n$1.createElement("grammarly-editor-plugin", {
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

class InputBox extends Component {
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
        return (createElement(g, { clientId: this.props.clientID, style: textStyle },
            createElement("textarea", { className: className, style: this.props.style, value: this.getCurrentValue(), tabIndex: this.props.tabIndex, onChange: this.onChangeHandle, onBlur: this.onBlurHandle })));
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

class Plugin extends Component {
    constructor() {
        super(...arguments);
        this.onLeaveHandle = this.onLeave.bind(this);
    }
    //private readonly onUpdateHandle = this.onUpdate.bind(this);
    render() {
        const value = this.props.textAttribute.value || "";
        const uniqueID = this.props.grammarlyId;
        return (createElement(InputBox, { value: value, clientID: uniqueID, tabIndex: this.props.tabIndex, 
            //onUpdate={this.onUpdateHandle}
            onLeave: this.onLeaveHandle }));
    }
    // private onUpdate(value: string): void {
    //   this.props.textAttribute.setValue(value);
    // }
    onLeave(value, isChanged) {
        if (!isChanged) {
            return;
        }
        this.props.textAttribute.setValue(value);
    }
}

var WrittingAssistant = hot(Plugin);

export { WrittingAssistant as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV3JpdHRpbmdBc3Npc3RhbnQubWpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1lbmRpeC9wbHVnZ2FibGUtd2lkZ2V0cy10b29scy9jb25maWdzL2hvdC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BncmFtbWFybHkvZWRpdG9yLXNkay9saWIvaW5kZXguZXNtLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BncmFtbWFybHkvZWRpdG9yLXNkay1yZWFjdC9saWIvaW5kZXguZXNtLmpzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSW5wdXRCb3gudHN4IiwiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUGx1Z2luLnRzeCIsIi4uLy4uLy4uLy4uLy4uL3NyYy9Xcml0dGluZ0Fzc2lzdGFudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhvdCh3aWRnZXQpIHtcbiAgICByZXR1cm4gd2lkZ2V0O1xufVxuIiwiLyohXG5cdENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuXHRMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuXHRodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXHR2YXIgbmF0aXZlQ29kZVN0cmluZyA9ICdbbmF0aXZlIGNvZGVdJztcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRpZiAoYXJnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGlmIChhcmcudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgJiYgIWFyZy50b1N0cmluZy50b1N0cmluZygpLmluY2x1ZGVzKCdbbmF0aXZlIGNvZGVdJykpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIChjKSBDb3B5cmlnaHQgMjAyMyBHcmFtbWFybHksIEluYy5cbiAqIFxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICogXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKiBcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmZ1bmN0aW9uIHQodCxuLHIpe3JldHVybiBuIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbbl09cix0fXZhciBuPW5ldyBNYXA7Y2xhc3MgciBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKG4scil7c3VwZXIoKSx0KHRoaXMsXCJhcmdzXCIsdm9pZCAwKSx0KHRoaXMsXCJjb2RlXCIsdm9pZCAwKSx0KHRoaXMsXCJ1cmxcIix2b2lkIDApLHQodGhpcyxcIl9jXCIsdm9pZCAwKTt2YXIgZT1uZXcgVVJMKFwiaHR0cHM6Ly9kZXZlbG9wZXIuZ3JhbW1hcmx5LmNvbS9kb2NzL2Vycm9yLWV4cGxhaW5lclwiKTtlLnNlYXJjaFBhcmFtcy5zZXQoXCJjb2RlXCIsbi50b1N0cmluZygpKSxyLmZvckVhY2goKHQ9PmUuc2VhcmNoUGFyYW1zLmFwcGVuZChcImFyZ3NcIixmdW5jdGlvbih0KXtpZih0IGluc3RhbmNlb2YgRXJyb3IpcmV0dXJuIHQubWVzc2FnZStcIlxcblwiK1N0cmluZyh0LnN0YWNrKTtpZihudWxsPT10KXJldHVyblwibnVsbFwiO2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0KXRyeXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfWNhdGNoKHQpe31yZXR1cm4gU3RyaW5nKHQpfSh0KSkpKSxudWxsIT10aGlzLnN0YWNrJiZlLnNlYXJjaFBhcmFtcy5zZXQoXCJ0cmFjZVwiLHRoaXMuc3RhY2spLHRoaXMubWVzc2FnZT1cIk1pbmlmaWVkIGVycm9yICNcIi5jb25jYXQobixcIjogU2VlIFwiKS5jb25jYXQoZS50b1N0cmluZygpLFwiIGZvciBkZXRhaWxzLlwiKSx0aGlzLmFyZ3M9cix0aGlzLmNvZGU9bix0aGlzLnVybD1lLnRvU3RyaW5nKCl9dG9Vc2VyTWVzc2FnZSgpe3ZhciB0PW4uZ2V0KFwiXCIuY29uY2F0KHRoaXMuY29kZSkpO2lmKG51bGw9PXQpcmV0dXJuW3RoaXNdO3ZhciByPW5ldyBNYXAodGhpcy5hcmdzLm1hcCgoKHQsbik9PltcIiR7XCIuY29uY2F0KG4sXCJ9XCIpLHRdKSkpLGU9dC5zcGxpdCgvKFxcJHtcXGQrfSkvKS5maWx0ZXIoKHQ9PlwiXCIhPT10KSk7cmV0dXJuIGUubWFwKCh0PT57dmFyIG47cmV0dXJuIG51bGwhPT0obj1yLmdldCh0KSkmJnZvaWQgMCE9PW4/bjp0fSkpfXRvSlNPTigpe3JldHVybntuYW1lOlwiSW52YXJpYW50RXJyb3JcIixtZXNzYWdlOnRoaXMubWVzc2FnZSxkZXNjcmlwdGlvbjp0aGlzLl9tLGNvZGU6dGhpcy5jb2RlLGFyZ3M6dGhpcy5hcmdzLHN0YWNrOnRoaXMuc3RhY2t9fXN0YXRpYyBzZXRNZXNzYWdlcyh0KXtuPXR9c3RhdGljIGNyZWF0ZSh0LG4sZSxhKXtudWxsIT1hJiZuLnB1c2goYSk7dmFyIG89bmV3IHIodCxuLGUpO3JldHVybiBvLnN0YWNrPW51bGw9PWE/dm9pZCAwOmEuc3RhY2ssby5fbT1lLG99fWNvbnN0IGU9bmV3IFdlYWtNYXA7YXN5bmMgZnVuY3Rpb24gYSh0LG4pe2NvbnN0IGE9ZS5nZXQodCk7aWYobnVsbCE9YSlyZXR1cm4gYXdhaXQgYTshZnVuY3Rpb24odCl7bnVsbD09dC5HcmFtbWFybHkmJih0LkdyYW1tYXJseT17fSl9KHQpO2NvbnN0IG89bmV3IFByb21pc2UoKChlLGEpPT57dHJ5e2xldCBlPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgc2NyaXB0W3NyY149XCIke24ucmVwbGFjZSgvXFw/LiokLyxcIlwiKX1cIl1gKVswXX0odCxuKTtudWxsIT1lP28oKTooZT1mdW5jdGlvbih0LG4pe2NvbnN0IHI9dC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3JldHVybiByLnNyYz1uLHQuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChyKSxyfSh0LG4pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixvKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLChmdW5jdGlvbigpe3RyeXt0aHJvdyBuZXcgcigyMyxbXSl9Y2F0Y2godCl7YSh0KX19KSkpfWNhdGNoKHQpe3JldHVybiBhKHQpfWZ1bmN0aW9uIG8oKXt0cnl7aWYobnVsbD09dC5HcmFtbWFybHl8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQuR3JhbW1hcmx5LkVkaXRvclNESyl0aHJvdyBuZXcgcigyMixbXSk7ZSh0LkdyYW1tYXJseSl9Y2F0Y2godCl7YSh0KX19fSkpO3JldHVybiBlLnNldCh0LG8pLGF3YWl0IG99YXN5bmMgZnVuY3Rpb24gbyh0LG4scil7cmV0dXJuIGF3YWl0IHMoXCJAZ3JhbW1hcmx5L2VkaXRvci1zZGtcIix0LG4scil9YXN5bmMgZnVuY3Rpb24gcyh0LG4sZSxvKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2Ygd2luZG93JiZ2b2lkIDA9PT1vKXRocm93IG5ldyByKDIxLFtdKTtjb25zdCBzPWZ1bmN0aW9uKHQpe3JldHVyblwibnVsbFwiIT09dC5sb2NhdGlvbi5vcmlnaW4/dC5sb2NhdGlvbi5vcmlnaW46XCJudWxsXCIhPT10Lm9yaWdpbj90Lm9yaWdpbjpcIm51bGxcIn0obnVsbCE9bz9vOndpbmRvdyk7XCJudWxsXCI9PT1zJiYobnVsbCE9bz9vOndpbmRvdykudG9wIT09KG51bGwhPW8/bzp3aW5kb3cpJiZjb25zb2xlLndhcm4oXCJHcmFtbWFybHkgaXMgbm90IHN1cHBvcnRlZCBpbiBJRnJhbWVzIHdpdGggYG51bGxgIG9yaWdpbi4gQ29uc2lkZXIgYWRkaW5nIGBzYW5kYm94PSdhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzJ2AgdG8gPGlmcmFtZT4gZWxlbWVudC5cIik7Y29uc3QgaT1uZXcgVVJMKFwiaHR0cHM6Ly9qcy5ncmFtbWFybHkuY29tL2dyYW1tYXJseS1lZGl0b3Itc2RrQDIuM1wiLHMpO251bGwhPW4mJmkuc2VhcmNoUGFyYW1zLnNldChcImNsaWVudElkXCIsbiksaS5zZWFyY2hQYXJhbXMuc2V0KFwicGFja2FnZU5hbWVcIix0KTtjb25zdCBjPWF3YWl0IGEobnVsbCE9bz9vOndpbmRvdyxpLnRvU3RyaW5nKCkpO2lmKG51bGwhPW4pcmV0dXJuIG5ldyBjLkVkaXRvclNESyhuLGUpfWNvbnN0IGk9e29uQmVmb3JlU3VnZ2VzdGlvbkNhcmRPcGVuOlwiYmVmb3JlLXN1Z2dlc3Rpb24tY2FyZC1vcGVuXCIsb25TdWdnZXN0aW9uQ2FyZE9wZW46XCJzdWdnZXN0aW9uLWNhcmQtb3BlblwiLG9uU3VnZ2VzdGlvbkNhcmRDbG9zZTpcInN1Z2dlc3Rpb24tY2FyZC1jbG9zZVwiLG9uU3VnZ2VzdGlvbkNhcmRBY3Rpb246XCJzdWdnZXN0aW9uLWNhcmQtYWN0aW9uXCIsb25QbHVnaW5UdXJuZWRPZmY6XCJwbHVnaW4tdHVybmVkLW9mZlwiLG9uUGx1Z2luRXJyb3I6XCJwbHVnaW4tZXJyb3JcIixvbkRvY3VtZW50U3RhdHM6XCJkb2N1bWVudC1zdGF0c1wiLG9uU2Vzc2lvblN0YXRzOlwic2Vzc2lvbi1zdGF0c1wifTtleHBvcnR7aSBhcyBjYWxsYmFja1RvRXZlbnROYW1lLG8gYXMgaW5pdCxzIGFzIGluaXRfd2l0aF9wYWNrYWdlTmFtZX07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiAoYykgQ29weXJpZ2h0IDIwMjMgR3JhbW1hcmx5LCBJbmMuXG4gKiBcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqIFxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICogXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgbix7dXNlQ2FsbGJhY2sgYXMgZSx1c2VFZmZlY3QgYXMgdCx1c2VDb250ZXh0IGFzIHIsdXNlU3RhdGUgYXMgbyx1c2VSZWYgYXMgYyx1c2VNZW1vIGFzIGl9ZnJvbVwicmVhY3RcIjtpbXBvcnR7aW5pdF93aXRoX3BhY2thZ2VOYW1lIGFzIGwsY2FsbGJhY2tUb0V2ZW50TmFtZSBhcyB1fWZyb21cIkBncmFtbWFybHkvZWRpdG9yLXNka1wiO2V4cG9ydHtpbml0fWZyb21cIkBncmFtbWFybHkvZWRpdG9yLXNka1wiO2NvbnN0IGE9bi5jcmVhdGVDb250ZXh0KHt9KTtmdW5jdGlvbiBkKG4scixvKXtjb25zdCBjPWUoKGU9Pm51bGw9PW4/dm9pZCAwOm4obmV3IEN1c3RvbUV2ZW50KFwicGx1Z2luLWVycm9yXCIse2RldGFpbDplfSkpKSxbbl0pO3QoKCgpPT57dmFyIG47XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG5hdmlnYXRvciYmKG51bGwhPXImJm51bGwhPShudWxsPT09KG49bnVsbD09bz92b2lkIDA6by5jdXJyZW50KXx8dm9pZCAwPT09bj92b2lkIDA6bi5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KSYmd2luZG93IT09by5jdXJyZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc/bChcIkBncmFtbWFybHkvZWRpdG9yLXNkay1yZWFjdFwiLHIsdm9pZCAwLG8uY3VycmVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KS5jYXRjaChjKTpsKFwiQGdyYW1tYXJseS9lZGl0b3Itc2RrLXJlYWN0XCIpLmNhdGNoKGMpKX0pLG51bGwhPW8mJm51bGwhPXI/W28scl06W10pfWNvbnN0IHM9ZT0+e2NvbnN0e2NsaWVudElkOnQsY29uZmlnOm8sY2hpbGRyZW46Y309ZSxpPXIoYSk7cmV0dXJuIGQoKSxuLmNyZWF0ZUVsZW1lbnQoYS5Qcm92aWRlcix7dmFsdWU6e2NsaWVudElkOm51bGwhPXQ/dDppLmNsaWVudElkLGNvbmZpZzp7Li4uaS5jb25maWcsLi4ub319fSxjKX0sbT0oe3RvbmVQb3NpdGlvbjplLG1lbnVQb3NpdGlvbjp0LGNsYXNzTmFtZTpyLC4uLm99KT0+bi5jcmVhdGVFbGVtZW50KFwiZ3JhbW1hcmx5LWJ1dHRvblwiLHsuLi5vLGNsYXNzOnIsXCJ0b25lLXBvc2l0aW9uXCI6ZSxcIm1lbnUtcG9zaXRpb25cIjp0fSk7ZnVuY3Rpb24gZihuKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBufWNvbnN0IGc9bD0+e2NvbnN0W3Mse2NsaWVudElkOm0sY29uZmlnOmcsY2hpbGRyZW46dixjbGFzc05hbWU6cCwuLi5FfV09ZnVuY3Rpb24obil7Y29uc3QgZT17fSx0PXsuLi5ufTtyZXR1cm4gT2JqZWN0LmtleXModSkuZm9yRWFjaCgocj0+e2Vbcl09bltyXSxyIGluIHQmJmRlbGV0ZSB0W3JdfSkpLFtlLHRdfShsKSxoPXIoYSksdz1jKCkseT1jKCksST1jKCksaz1lKChuPT57dy5jdXJyZW50PW4sRCgpfSksW10pLGI9ZnVuY3Rpb24obil7Y29uc3RbcixjXT1vKHt9KSxpPWUoKCgpPT57Y3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQobikudGhlbigoKCk9PmMoKGU9Pih7Li4uZSxbbl06ITB9KSkpKSkuY2F0Y2goKCgpPT57fSkpfSksW25dKTtyZXR1cm4gdChpLFtpXSksISFyW25dfShcImdyYW1tYXJseS1lZGl0b3ItcGx1Z2luXCIpLEQ9ZSgoKCk9Pnt2YXIgbjtudWxsIT13LmN1cnJlbnQmJm51bGwhPXkuY3VycmVudCYmYiYmdy5jdXJyZW50LmNvbm5lY3QoeS5jdXJyZW50LG51bGwhPT0obj1JLmN1cnJlbnQpJiZ2b2lkIDAhPT1uP246dm9pZCAwKX0pLFtiXSksUD1pKCgoKT0+KHsuLi5oLmNvbmZpZywuLi5nfSkpLFtoLmNvbmZpZyxnXSk7cmV0dXJuIHQoKCgpPT57dy5jdXJyZW50JiYody5jdXJyZW50LmNvbmZpZz1QKX0pLFt3LFBdKSx0KCgoKT0+e2lmKG51bGw9PXcuY3VycmVudClyZXR1cm47Y29uc3R7Y3VycmVudDpufT13LGU9W107cmV0dXJuIE9iamVjdC5rZXlzKHUpLmZvckVhY2goKHQ9Pntjb25zdCByPXNbdF0sbz11W3RdO251bGwhPXImJihuLmFkZEV2ZW50TGlzdGVuZXIobyxyKSxlLnB1c2goKCgpPT5uLnJlbW92ZUV2ZW50TGlzdGVuZXIobyxyKSkpKX0pKSwoKT0+ZS5mb3JFYWNoKChuPT5uKCkpKX0pLFsuLi5PYmplY3QudmFsdWVzKHMpLGIsdy5jdXJyZW50XSksZChsLm9uUGx1Z2luRXJyb3IsbnVsbCE9bT9tOmguY2xpZW50SWQsdyksbi5jcmVhdGVFbGVtZW50KFwiZ3JhbW1hcmx5LWVkaXRvci1wbHVnaW5cIix7Li4uRSxyZWY6ayxjbGllbnRJZDpudWxsIT1tP206aC5jbGllbnRJZCxhdXRvZGV0ZWN0OmYodik/XCJvZmZcIjpcIm9uXCIsY2xhc3M6cH0sZih2KT92KHtzZXRFZGl0b3I6bj0+e3kuY3VycmVudD1uLEQoKX0sc2V0Vmlld3BvcnQ6bj0+e0kuY3VycmVudD1uLEQoKX19KTp2KX07ZXhwb3J0e3MgYXMgR3JhbW1hcmx5LG0gYXMgR3JhbW1hcmx5QnV0dG9uLGcgYXMgR3JhbW1hcmx5RWRpdG9yUGx1Z2lufTtcbiIsImltcG9ydCB7IENTU1Byb3BlcnRpZXMsIENoYW5nZUV2ZW50LCBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCB7IEdyYW1tYXJseUVkaXRvclBsdWdpbiB9IGZyb20gXCJAZ3JhbW1hcmx5L2VkaXRvci1zZGstcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRQcm9wcyB7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgaW5kZXg/OiBudW1iZXI7XHJcbiAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xyXG4gIHRhYkluZGV4PzogbnVtYmVyO1xyXG4gIGNsaWVudElEOiBzdHJpbmc7XHJcbiAgLy9vblVwZGF0ZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIG9uTGVhdmU/OiAodmFsdWU6IHN0cmluZywgY2hhbmdlZDogYm9vbGVhbikgPT4gdm9pZDtcclxufVxyXG5pbnRlcmZhY2UgSW5wdXRTdGF0ZSB7XHJcbiAgZWRpdGVkVmFsdWU/OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGNsYXNzIElucHV0Qm94IGV4dGVuZHMgQ29tcG9uZW50PElucHV0UHJvcHM+IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IG9uQ2hhbmdlSGFuZGxlICA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IG9uQmx1ckhhbmRsZSA9IHRoaXMub25CbHVyLmJpbmQodGhpcyk7XHJcbiAgcmVhZG9ubHkgc3RhdGU6IElucHV0U3RhdGUgPSB7IGVkaXRlZFZhbHVlOiB1bmRlZmluZWQgfTtcclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IElucHV0UHJvcHMpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gcHJldlByb3BzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0ZWRWYWx1ZTogdW5kZWZpbmVkIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB0ZXh0U3R5bGUgPSB7XHJcbiAgICAgIHdpZHRoOiAxMjAwICxcclxuICAgICAgaGVpZ2h0OiA2MFxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyhcImZvcm0tY29udHJvbCAgbXgtdGV4dGFyZWEtaW5wdXQgbXgtdGV4dGFyZWEtbm9yZXNpemVcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEdyYW1tYXJseUVkaXRvclBsdWdpbiBjbGllbnRJZD17dGhpcy5wcm9wcy5jbGllbnRJRH0gc3R5bGUgPSB7dGV4dFN0eWxlfT5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRDdXJyZW50VmFsdWUoKX1cclxuICAgICAgICAgIHRhYkluZGV4PXt0aGlzLnByb3BzLnRhYkluZGV4fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VIYW5kbGV9XHJcbiAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVySGFuZGxlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvR3JhbW1hcmx5RWRpdG9yUGx1Z2luPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBnZXRDdXJyZW50VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmVkaXRlZFZhbHVlICE9PSB1bmRlZmluZWRcclxuICAgICAgICA/IHRoaXMuc3RhdGUuZWRpdGVkVmFsdWVcclxuICAgICAgICA6IHRoaXMucHJvcHMudmFsdWU7XHJcbiAgfVxyXG4gIHByaXZhdGUgb25DaGFuZ2UoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZWRpdGVkVmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBvbkJsdXIoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0Q3VycmVudFZhbHVlKCk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkxlYXZlKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkxlYXZlKGN1cnJlbnRWYWx1ZSwgY3VycmVudFZhbHVlICE9PSBpbnB1dFZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0ZWRWYWx1ZTogdW5kZWZpbmVkIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlYWN0Tm9kZSwgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBXcml0dGluZ0Fzc2lzdGFudENvbnRhaW5lclByb3BzIH0gZnJvbSBcIi4uLy4uL3R5cGluZ3MvV3JpdHRpbmdBc3Npc3RhbnRQcm9wc1wiO1xyXG5pbXBvcnQgeyBJbnB1dEJveCB9IGZyb20gXCIuL0lucHV0Qm94XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGx1Z2luIGV4dGVuZHMgQ29tcG9uZW50PFdyaXR0aW5nQXNzaXN0YW50Q29udGFpbmVyUHJvcHM+IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IG9uTGVhdmVIYW5kbGUgPSB0aGlzLm9uTGVhdmUuYmluZCh0aGlzKTtcclxuICBcclxuICAvL3ByaXZhdGUgcmVhZG9ubHkgb25VcGRhdGVIYW5kbGUgPSB0aGlzLm9uVXBkYXRlLmJpbmQodGhpcyk7XHJcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHMudGV4dEF0dHJpYnV0ZS52YWx1ZSB8fCBcIlwiO1xyXG4gICAgY29uc3QgdW5pcXVlSUQgPSB0aGlzLnByb3BzLmdyYW1tYXJseUlkO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPElucHV0Qm94XHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgIGNsaWVudElEPXt1bmlxdWVJRH1cclxuICAgICAgICB0YWJJbmRleD17dGhpcy5wcm9wcy50YWJJbmRleH1cclxuICAgICAgICAvL29uVXBkYXRlPXt0aGlzLm9uVXBkYXRlSGFuZGxlfVxyXG4gICAgICAgIG9uTGVhdmU9e3RoaXMub25MZWF2ZUhhbmRsZX1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG4gIC8vIHByaXZhdGUgb25VcGRhdGUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gIC8vICAgdGhpcy5wcm9wcy50ZXh0QXR0cmlidXRlLnNldFZhbHVlKHZhbHVlKTtcclxuICAvLyB9XHJcbiAgcHJpdmF0ZSBvbkxlYXZlKHZhbHVlOiBzdHJpbmcsIGlzQ2hhbmdlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCFpc0NoYW5nZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnByb3BzLnRleHRBdHRyaWJ1dGUuc2V0VmFsdWUodmFsdWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBob3QgfSBmcm9tIFwicmVhY3QtaG90LWxvYWRlci9yb290XCI7XG5pbXBvcnQgXCIuL3VpL1dyaXR0aW5nQXNzaXN0YW50LmNzc1wiO1xuXG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tIFwiLi9jb21wb25lbnRzL1BsdWdpblwiO1xuXG5leHBvcnQgZGVmYXVsdCBob3QoUGx1Z2luKTtcbiJdLCJuYW1lcyI6WyJob3QiLCJ3aWRnZXQiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImNsYXNzTmFtZXMiLCJjbGFzc2VzIiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZyIsImFyZ1R5cGUiLCJwdXNoIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5uZXIiLCJhcHBseSIsInRvU3RyaW5nIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaW5jbHVkZXMiLCJrZXkiLCJjYWxsIiwiam9pbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0Iiwid2luZG93IiwidCIsIm4iLCJyIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk1hcCIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJlIiwiVVJMIiwic2VhcmNoUGFyYW1zIiwic2V0IiwiZm9yRWFjaCIsImFwcGVuZCIsIm1lc3NhZ2UiLCJTdHJpbmciLCJzdGFjayIsImNvbmNhdCIsImFyZ3MiLCJjb2RlIiwidXJsIiwidG9Vc2VyTWVzc2FnZSIsImdldCIsIm1hcCIsInNwbGl0IiwiZmlsdGVyIiwidG9KU09OIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiX20iLCJzZXRNZXNzYWdlcyIsImNyZWF0ZSIsImEiLCJvIiwiV2Vha01hcCIsIkdyYW1tYXJseSIsIlByb21pc2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXBsYWNlIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJFZGl0b3JTREsiLCJzIiwibG9jYXRpb24iLCJvcmlnaW4iLCJ0b3AiLCJjb25zb2xlIiwid2FybiIsImMiLCJvbkJlZm9yZVN1Z2dlc3Rpb25DYXJkT3BlbiIsIm9uU3VnZ2VzdGlvbkNhcmRPcGVuIiwib25TdWdnZXN0aW9uQ2FyZENsb3NlIiwib25TdWdnZXN0aW9uQ2FyZEFjdGlvbiIsIm9uUGx1Z2luVHVybmVkT2ZmIiwib25QbHVnaW5FcnJvciIsIm9uRG9jdW1lbnRTdGF0cyIsIm9uU2Vzc2lvblN0YXRzIiwiY3JlYXRlQ29udGV4dCIsImQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsIm5hdmlnYXRvciIsImN1cnJlbnQiLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJsIiwiY2F0Y2giLCJmIiwiZyIsImNsaWVudElkIiwibSIsImNvbmZpZyIsImNoaWxkcmVuIiwidiIsImNsYXNzTmFtZSIsInAiLCJFIiwia2V5cyIsInUiLCJoIiwidyIsInkiLCJJIiwiayIsIkQiLCJiIiwiY3VzdG9tRWxlbWVudHMiLCJ3aGVuRGVmaW5lZCIsInRoZW4iLCJjb25uZWN0IiwiUCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ2YWx1ZXMiLCJyZWYiLCJhdXRvZGV0ZWN0IiwiY2xhc3MiLCJzZXRFZGl0b3IiLCJzZXRWaWV3cG9ydCIsIkdyYW1tYXJseUVkaXRvclBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7QUFBTyxTQUFTQSxHQUFHQSxDQUFDQyxNQUFNLEVBQUU7QUFDeEIsRUFBQSxPQUFPQSxNQUFNLENBQUE7QUFDakI7Ozs7Ozs7Ozs7O0FDR0E7O0FBRUMsQ0FBQSxDQUFZLFlBQUE7O0FBR1osR0FBQSxJQUFJQyxNQUFNLEdBQUcsRUFBRSxDQUFDQyxjQUFjLENBQUE7R0FHOUIsU0FBU0MsVUFBVUEsR0FBRztLQUNyQixJQUFJQyxPQUFPLEdBQUcsRUFBRSxDQUFBO0FBRWhCLEtBQUEsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFRixDQUFDLEVBQUUsRUFBRTtBQUMxQyxPQUFBLElBQUlHLEdBQUcsR0FBR0YsU0FBUyxDQUFDRCxDQUFDLENBQUMsQ0FBQTtPQUN0QixJQUFJLENBQUNHLEdBQUcsRUFBRSxTQUFBO09BRVYsSUFBSUMsT0FBTyxHQUFHLE9BQU9ELEdBQUcsQ0FBQTtPQUV4QixJQUFJQyxPQUFPLEtBQUssUUFBUSxJQUFJQSxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQ2pETCxTQUFBQSxPQUFPLENBQUNNLElBQUksQ0FBQ0YsR0FBRyxDQUFDLENBQUE7UUFDakIsTUFBTSxJQUFJRyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0osR0FBRyxDQUFDLEVBQUU7U0FDOUIsSUFBSUEsR0FBRyxDQUFDRCxNQUFNLEVBQUU7V0FDZixJQUFJTSxLQUFLLEdBQUdWLFVBQVUsQ0FBQ1csS0FBSyxDQUFDLElBQUksRUFBRU4sR0FBRyxDQUFDLENBQUE7V0FDdkMsSUFBSUssS0FBSyxFQUFFO0FBQ1ZULGFBQUFBLE9BQU8sQ0FBQ00sSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FBQTtZQUNwQjtVQUNEO0FBQ0QsUUFBQyxNQUFNLElBQUlKLE9BQU8sS0FBSyxRQUFRLEVBQUU7U0FDaEMsSUFBSUQsR0FBRyxDQUFDTyxRQUFRLEtBQUtDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDRixRQUFRLElBQUksQ0FBQ1AsR0FBRyxDQUFDTyxRQUFRLENBQUNBLFFBQVEsRUFBRSxDQUFDRyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7V0FDckdkLE9BQU8sQ0FBQ00sSUFBSSxDQUFDRixHQUFHLENBQUNPLFFBQVEsRUFBRSxDQUFDLENBQUE7QUFDNUIsV0FBQSxTQUFBO1VBQ0Q7QUFFQSxTQUFBLEtBQUssSUFBSUksR0FBRyxJQUFJWCxHQUFHLEVBQUU7QUFDcEIsV0FBQSxJQUFJUCxNQUFNLENBQUNtQixJQUFJLENBQUNaLEdBQUcsRUFBRVcsR0FBRyxDQUFDLElBQUlYLEdBQUcsQ0FBQ1csR0FBRyxDQUFDLEVBQUU7QUFDdENmLGFBQUFBLE9BQU8sQ0FBQ00sSUFBSSxDQUFDUyxHQUFHLENBQUMsQ0FBQTtZQUNsQjtVQUNEO1FBQ0Q7TUFDRDtBQUVBLEtBQUEsT0FBT2YsT0FBTyxDQUFDaUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3pCO0dBRUEsSUFBcUNDLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFO0tBQ3BEcEIsVUFBVSxDQUFDcUIsT0FBTyxHQUFHckIsVUFBVSxDQUFBO0tBQy9CbUIsTUFBQUEsQ0FBQUEsT0FBQUEsR0FBaUJuQixVQUFVLENBQUE7QUFDNUIsSUFBQyxNQUtNO0tBQ05zQixNQUFNLENBQUN0QixVQUFVLEdBQUdBLFVBQVUsQ0FBQTtJQUMvQjtBQUNELEVBQUMsR0FBRSxDQUFBOzs7OztBQzNESDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVN1QixDQUFDQSxDQUFDQSxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO0VBQUMsT0FBT0QsQ0FBQyxJQUFJRCxDQUFDLEdBQUNWLE1BQU0sQ0FBQ2EsY0FBYyxDQUFDSCxDQUFDLEVBQUNDLENBQUMsRUFBQztBQUFDRyxJQUFBQSxLQUFLLEVBQUNGLENBQUM7SUFBQ0csVUFBVSxFQUFDLENBQUMsQ0FBQztJQUFDQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0FBQUNDLElBQUFBLFFBQVEsRUFBQyxDQUFDLENBQUE7R0FBRSxDQUFDLEdBQUNQLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEdBQUNDLENBQUMsRUFBQ0YsQ0FBQyxDQUFBO0FBQUEsQ0FBQTtBQUFDLElBQUlDLENBQUMsR0FBQyxJQUFJTyxHQUFHLEVBQUEsQ0FBQTtBQUFDLE1BQU1OLENBQUMsU0FBU08sS0FBSyxDQUFBO0FBQUNDLEVBQUFBLFdBQVdBLENBQUNULENBQUMsRUFBQ0MsQ0FBQyxFQUFDO0FBQUMsSUFBQSxLQUFLLEVBQUUsRUFBQ0YsQ0FBQyxDQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxDQUFDLENBQUMsRUFBQ0EsQ0FBQyxDQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxDQUFDLENBQUMsRUFBQ0EsQ0FBQyxDQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUMsRUFBQ0EsQ0FBQyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtBQUFDLElBQUEsSUFBSVcsQ0FBQyxHQUFDLElBQUlDLEdBQUcsQ0FBQyxzREFBc0QsQ0FBQyxDQUFBO0FBQUNELElBQUFBLENBQUMsQ0FBQ0UsWUFBWSxDQUFDQyxHQUFHLENBQUMsTUFBTSxFQUFDYixDQUFDLENBQUNaLFFBQVEsRUFBRSxDQUFDLEVBQUNhLENBQUMsQ0FB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
