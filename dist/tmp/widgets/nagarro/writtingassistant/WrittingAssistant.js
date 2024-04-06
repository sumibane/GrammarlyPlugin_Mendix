define(['react'], (function (n$1) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var n__default = /*#__PURE__*/_interopDefaultLegacy(n$1);

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

    class Plugin extends n$1.Component {
        constructor() {
            super(...arguments);
            this.onLeaveHandle = this.onLeave.bind(this);
        }
        //private readonly onUpdateHandle = this.onUpdate.bind(this);
        render() {
            const value = this.props.textAttribute.value || "";
            const uniqueID = this.props.grammarlyId;
            return (n$1.createElement(InputBox, { value: value, clientID: uniqueID, tabIndex: this.props.tabIndex, 
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

    return WrittingAssistant;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV3JpdHRpbmdBc3Npc3RhbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWVuZGl4L3BsdWdnYWJsZS13aWRnZXRzLXRvb2xzL2NvbmZpZ3MvaG90LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGdyYW1tYXJseS9lZGl0b3Itc2RrL2xpYi9pbmRleC5lc20uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGdyYW1tYXJseS9lZGl0b3Itc2RrLXJlYWN0L2xpYi9pbmRleC5lc20uanMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9JbnB1dEJveC50c3giLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9QbHVnaW4udHN4IiwiLi4vLi4vLi4vLi4vLi4vc3JjL1dyaXR0aW5nQXNzaXN0YW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaG90KHdpZGdldCkge1xuICAgIHJldHVybiB3aWRnZXQ7XG59XG4iLCIvKiFcblx0Q29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG5cdExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG5cdGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cdHZhciBuYXRpdmVDb2RlU3RyaW5nID0gJ1tuYXRpdmUgY29kZV0nO1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyAmJiAhYXJnLnRvU3RyaW5nLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ1tuYXRpdmUgY29kZV0nKSkge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogKGMpIENvcHlyaWdodCAyMDIzIEdyYW1tYXJseSwgSW5jLlxuICogXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiBcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqIFxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZnVuY3Rpb24gdCh0LG4scil7cmV0dXJuIG4gaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtuXT1yLHR9dmFyIG49bmV3IE1hcDtjbGFzcyByIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IobixyKXtzdXBlcigpLHQodGhpcyxcImFyZ3NcIix2b2lkIDApLHQodGhpcyxcImNvZGVcIix2b2lkIDApLHQodGhpcyxcInVybFwiLHZvaWQgMCksdCh0aGlzLFwiX2NcIix2b2lkIDApO3ZhciBlPW5ldyBVUkwoXCJodHRwczovL2RldmVsb3Blci5ncmFtbWFybHkuY29tL2RvY3MvZXJyb3ItZXhwbGFpbmVyXCIpO2Uuc2VhcmNoUGFyYW1zLnNldChcImNvZGVcIixuLnRvU3RyaW5nKCkpLHIuZm9yRWFjaCgodD0+ZS5zZWFyY2hQYXJhbXMuYXBwZW5kKFwiYXJnc1wiLGZ1bmN0aW9uKHQpe2lmKHQgaW5zdGFuY2VvZiBFcnJvcilyZXR1cm4gdC5tZXNzYWdlK1wiXFxuXCIrU3RyaW5nKHQuc3RhY2spO2lmKG51bGw9PXQpcmV0dXJuXCJudWxsXCI7aWYoXCJvYmplY3RcIj09dHlwZW9mIHQpdHJ5e3JldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9Y2F0Y2godCl7fXJldHVybiBTdHJpbmcodCl9KHQpKSkpLG51bGwhPXRoaXMuc3RhY2smJmUuc2VhcmNoUGFyYW1zLnNldChcInRyYWNlXCIsdGhpcy5zdGFjayksdGhpcy5tZXNzYWdlPVwiTWluaWZpZWQgZXJyb3IgI1wiLmNvbmNhdChuLFwiOiBTZWUgXCIpLmNvbmNhdChlLnRvU3RyaW5nKCksXCIgZm9yIGRldGFpbHMuXCIpLHRoaXMuYXJncz1yLHRoaXMuY29kZT1uLHRoaXMudXJsPWUudG9TdHJpbmcoKX10b1VzZXJNZXNzYWdlKCl7dmFyIHQ9bi5nZXQoXCJcIi5jb25jYXQodGhpcy5jb2RlKSk7aWYobnVsbD09dClyZXR1cm5bdGhpc107dmFyIHI9bmV3IE1hcCh0aGlzLmFyZ3MubWFwKCgodCxuKT0+W1wiJHtcIi5jb25jYXQobixcIn1cIiksdF0pKSksZT10LnNwbGl0KC8oXFwke1xcZCt9KS8pLmZpbHRlcigodD0+XCJcIiE9PXQpKTtyZXR1cm4gZS5tYXAoKHQ9Pnt2YXIgbjtyZXR1cm4gbnVsbCE9PShuPXIuZ2V0KHQpKSYmdm9pZCAwIT09bj9uOnR9KSl9dG9KU09OKCl7cmV0dXJue25hbWU6XCJJbnZhcmlhbnRFcnJvclwiLG1lc3NhZ2U6dGhpcy5tZXNzYWdlLGRlc2NyaXB0aW9uOnRoaXMuX20sY29kZTp0aGlzLmNvZGUsYXJnczp0aGlzLmFyZ3Msc3RhY2s6dGhpcy5zdGFja319c3RhdGljIHNldE1lc3NhZ2VzKHQpe249dH1zdGF0aWMgY3JlYXRlKHQsbixlLGEpe251bGwhPWEmJm4ucHVzaChhKTt2YXIgbz1uZXcgcih0LG4sZSk7cmV0dXJuIG8uc3RhY2s9bnVsbD09YT92b2lkIDA6YS5zdGFjayxvLl9tPWUsb319Y29uc3QgZT1uZXcgV2Vha01hcDthc3luYyBmdW5jdGlvbiBhKHQsbil7Y29uc3QgYT1lLmdldCh0KTtpZihudWxsIT1hKXJldHVybiBhd2FpdCBhOyFmdW5jdGlvbih0KXtudWxsPT10LkdyYW1tYXJseSYmKHQuR3JhbW1hcmx5PXt9KX0odCk7Y29uc3Qgbz1uZXcgUHJvbWlzZSgoKGUsYSk9Pnt0cnl7bGV0IGU9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdC5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBzY3JpcHRbc3JjXj1cIiR7bi5yZXBsYWNlKC9cXD8uKiQvLFwiXCIpfVwiXWApWzBdfSh0LG4pO251bGwhPWU/bygpOihlPWZ1bmN0aW9uKHQsbil7Y29uc3Qgcj10LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7cmV0dXJuIHIuc3JjPW4sdC5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHIpLHJ9KHQsbiksZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLG8pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsKGZ1bmN0aW9uKCl7dHJ5e3Rocm93IG5ldyByKDIzLFtdKX1jYXRjaCh0KXthKHQpfX0pKSl9Y2F0Y2godCl7cmV0dXJuIGEodCl9ZnVuY3Rpb24gbygpe3RyeXtpZihudWxsPT10LkdyYW1tYXJseXx8XCJmdW5jdGlvblwiIT10eXBlb2YgdC5HcmFtbWFybHkuRWRpdG9yU0RLKXRocm93IG5ldyByKDIyLFtdKTtlKHQuR3JhbW1hcmx5KX1jYXRjaCh0KXthKHQpfX19KSk7cmV0dXJuIGUuc2V0KHQsbyksYXdhaXQgb31hc3luYyBmdW5jdGlvbiBvKHQsbixyKXtyZXR1cm4gYXdhaXQgcyhcIkBncmFtbWFybHkvZWRpdG9yLXNka1wiLHQsbixyKX1hc3luYyBmdW5jdGlvbiBzKHQsbixlLG8pe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3cmJnZvaWQgMD09PW8pdGhyb3cgbmV3IHIoMjEsW10pO2NvbnN0IHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJudWxsXCIhPT10LmxvY2F0aW9uLm9yaWdpbj90LmxvY2F0aW9uLm9yaWdpbjpcIm51bGxcIiE9PXQub3JpZ2luP3Qub3JpZ2luOlwibnVsbFwifShudWxsIT1vP286d2luZG93KTtcIm51bGxcIj09PXMmJihudWxsIT1vP286d2luZG93KS50b3AhPT0obnVsbCE9bz9vOndpbmRvdykmJmNvbnNvbGUud2FybihcIkdyYW1tYXJseSBpcyBub3Qgc3VwcG9ydGVkIGluIElGcmFtZXMgd2l0aCBgbnVsbGAgb3JpZ2luLiBDb25zaWRlciBhZGRpbmcgYHNhbmRib3g9J2FsbG93LXNhbWUtb3JpZ2luIGFsbG93LXNjcmlwdHMnYCB0byA8aWZyYW1lPiBlbGVtZW50LlwiKTtjb25zdCBpPW5ldyBVUkwoXCJodHRwczovL2pzLmdyYW1tYXJseS5jb20vZ3JhbW1hcmx5LWVkaXRvci1zZGtAMi4zXCIscyk7bnVsbCE9biYmaS5zZWFyY2hQYXJhbXMuc2V0KFwiY2xpZW50SWRcIixuKSxpLnNlYXJjaFBhcmFtcy5zZXQoXCJwYWNrYWdlTmFtZVwiLHQpO2NvbnN0IGM9YXdhaXQgYShudWxsIT1vP286d2luZG93LGkudG9TdHJpbmcoKSk7aWYobnVsbCE9bilyZXR1cm4gbmV3IGMuRWRpdG9yU0RLKG4sZSl9Y29uc3QgaT17b25CZWZvcmVTdWdnZXN0aW9uQ2FyZE9wZW46XCJiZWZvcmUtc3VnZ2VzdGlvbi1jYXJkLW9wZW5cIixvblN1Z2dlc3Rpb25DYXJkT3BlbjpcInN1Z2dlc3Rpb24tY2FyZC1vcGVuXCIsb25TdWdnZXN0aW9uQ2FyZENsb3NlOlwic3VnZ2VzdGlvbi1jYXJkLWNsb3NlXCIsb25TdWdnZXN0aW9uQ2FyZEFjdGlvbjpcInN1Z2dlc3Rpb24tY2FyZC1hY3Rpb25cIixvblBsdWdpblR1cm5lZE9mZjpcInBsdWdpbi10dXJuZWQtb2ZmXCIsb25QbHVnaW5FcnJvcjpcInBsdWdpbi1lcnJvclwiLG9uRG9jdW1lbnRTdGF0czpcImRvY3VtZW50LXN0YXRzXCIsb25TZXNzaW9uU3RhdHM6XCJzZXNzaW9uLXN0YXRzXCJ9O2V4cG9ydHtpIGFzIGNhbGxiYWNrVG9FdmVudE5hbWUsbyBhcyBpbml0LHMgYXMgaW5pdF93aXRoX3BhY2thZ2VOYW1lfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIChjKSBDb3B5cmlnaHQgMjAyMyBHcmFtbWFybHksIEluYy5cbiAqIFxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICogXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKiBcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBuLHt1c2VDYWxsYmFjayBhcyBlLHVzZUVmZmVjdCBhcyB0LHVzZUNvbnRleHQgYXMgcix1c2VTdGF0ZSBhcyBvLHVzZVJlZiBhcyBjLHVzZU1lbW8gYXMgaX1mcm9tXCJyZWFjdFwiO2ltcG9ydHtpbml0X3dpdGhfcGFja2FnZU5hbWUgYXMgbCxjYWxsYmFja1RvRXZlbnROYW1lIGFzIHV9ZnJvbVwiQGdyYW1tYXJseS9lZGl0b3Itc2RrXCI7ZXhwb3J0e2luaXR9ZnJvbVwiQGdyYW1tYXJseS9lZGl0b3Itc2RrXCI7Y29uc3QgYT1uLmNyZWF0ZUNvbnRleHQoe30pO2Z1bmN0aW9uIGQobixyLG8pe2NvbnN0IGM9ZSgoZT0+bnVsbD09bj92b2lkIDA6bihuZXcgQ3VzdG9tRXZlbnQoXCJwbHVnaW4tZXJyb3JcIix7ZGV0YWlsOmV9KSkpLFtuXSk7dCgoKCk9Pnt2YXIgbjtcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiYobnVsbCE9ciYmbnVsbCE9KG51bGw9PT0obj1udWxsPT1vP3ZvaWQgMDpvLmN1cnJlbnQpfHx2b2lkIDA9PT1uP3ZvaWQgMDpuLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpJiZ3aW5kb3chPT1vLmN1cnJlbnQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldz9sKFwiQGdyYW1tYXJseS9lZGl0b3Itc2RrLXJlYWN0XCIscix2b2lkIDAsby5jdXJyZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpLmNhdGNoKGMpOmwoXCJAZ3JhbW1hcmx5L2VkaXRvci1zZGstcmVhY3RcIikuY2F0Y2goYykpfSksbnVsbCE9byYmbnVsbCE9cj9bbyxyXTpbXSl9Y29uc3Qgcz1lPT57Y29uc3R7Y2xpZW50SWQ6dCxjb25maWc6byxjaGlsZHJlbjpjfT1lLGk9cihhKTtyZXR1cm4gZCgpLG4uY3JlYXRlRWxlbWVudChhLlByb3ZpZGVyLHt2YWx1ZTp7Y2xpZW50SWQ6bnVsbCE9dD90OmkuY2xpZW50SWQsY29uZmlnOnsuLi5pLmNvbmZpZywuLi5vfX19LGMpfSxtPSh7dG9uZVBvc2l0aW9uOmUsbWVudVBvc2l0aW9uOnQsY2xhc3NOYW1lOnIsLi4ub30pPT5uLmNyZWF0ZUVsZW1lbnQoXCJncmFtbWFybHktYnV0dG9uXCIsey4uLm8sY2xhc3M6cixcInRvbmUtcG9zaXRpb25cIjplLFwibWVudS1wb3NpdGlvblwiOnR9KTtmdW5jdGlvbiBmKG4pe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG59Y29uc3QgZz1sPT57Y29uc3Rbcyx7Y2xpZW50SWQ6bSxjb25maWc6ZyxjaGlsZHJlbjp2LGNsYXNzTmFtZTpwLC4uLkV9XT1mdW5jdGlvbihuKXtjb25zdCBlPXt9LHQ9ey4uLm59O3JldHVybiBPYmplY3Qua2V5cyh1KS5mb3JFYWNoKChyPT57ZVtyXT1uW3JdLHIgaW4gdCYmZGVsZXRlIHRbcl19KSksW2UsdF19KGwpLGg9cihhKSx3PWMoKSx5PWMoKSxJPWMoKSxrPWUoKG49Pnt3LmN1cnJlbnQ9bixEKCl9KSxbXSksYj1mdW5jdGlvbihuKXtjb25zdFtyLGNdPW8oe30pLGk9ZSgoKCk9PntjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZChuKS50aGVuKCgoKT0+YygoZT0+KHsuLi5lLFtuXTohMH0pKSkpKS5jYXRjaCgoKCk9Pnt9KSl9KSxbbl0pO3JldHVybiB0KGksW2ldKSwhIXJbbl19KFwiZ3JhbW1hcmx5LWVkaXRvci1wbHVnaW5cIiksRD1lKCgoKT0+e3ZhciBuO251bGwhPXcuY3VycmVudCYmbnVsbCE9eS5jdXJyZW50JiZiJiZ3LmN1cnJlbnQuY29ubmVjdCh5LmN1cnJlbnQsbnVsbCE9PShuPUkuY3VycmVudCkmJnZvaWQgMCE9PW4/bjp2b2lkIDApfSksW2JdKSxQPWkoKCgpPT4oey4uLmguY29uZmlnLC4uLmd9KSksW2guY29uZmlnLGddKTtyZXR1cm4gdCgoKCk9Pnt3LmN1cnJlbnQmJih3LmN1cnJlbnQuY29uZmlnPVApfSksW3csUF0pLHQoKCgpPT57aWYobnVsbD09dy5jdXJyZW50KXJldHVybjtjb25zdHtjdXJyZW50Om59PXcsZT1bXTtyZXR1cm4gT2JqZWN0LmtleXModSkuZm9yRWFjaCgodD0+e2NvbnN0IHI9c1t0XSxvPXVbdF07bnVsbCE9ciYmKG4uYWRkRXZlbnRMaXN0ZW5lcihvLHIpLGUucHVzaCgoKCk9Pm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLHIpKSkpfSkpLCgpPT5lLmZvckVhY2goKG49Pm4oKSkpfSksWy4uLk9iamVjdC52YWx1ZXMocyksYix3LmN1cnJlbnRdKSxkKGwub25QbHVnaW5FcnJvcixudWxsIT1tP206aC5jbGllbnRJZCx3KSxuLmNyZWF0ZUVsZW1lbnQoXCJncmFtbWFybHktZWRpdG9yLXBsdWdpblwiLHsuLi5FLHJlZjprLGNsaWVudElkOm51bGwhPW0/bTpoLmNsaWVudElkLGF1dG9kZXRlY3Q6Zih2KT9cIm9mZlwiOlwib25cIixjbGFzczpwfSxmKHYpP3Yoe3NldEVkaXRvcjpuPT57eS5jdXJyZW50PW4sRCgpfSxzZXRWaWV3cG9ydDpuPT57SS5jdXJyZW50PW4sRCgpfX0pOnYpfTtleHBvcnR7cyBhcyBHcmFtbWFybHksbSBhcyBHcmFtbWFybHlCdXR0b24sZyBhcyBHcmFtbWFybHlFZGl0b3JQbHVnaW59O1xuIiwiaW1wb3J0IHsgQ1NTUHJvcGVydGllcywgQ2hhbmdlRXZlbnQsIENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IHsgR3JhbW1hcmx5RWRpdG9yUGx1Z2luIH0gZnJvbSBcIkBncmFtbWFybHkvZWRpdG9yLXNkay1yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFByb3BzIHtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBpbmRleD86IG51bWJlcjtcclxuICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XHJcbiAgdGFiSW5kZXg/OiBudW1iZXI7XHJcbiAgY2xpZW50SUQ6IHN0cmluZztcclxuICAvL29uVXBkYXRlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgb25MZWF2ZT86ICh2YWx1ZTogc3RyaW5nLCBjaGFuZ2VkOiBib29sZWFuKSA9PiB2b2lkO1xyXG59XHJcbmludGVyZmFjZSBJbnB1dFN0YXRlIHtcclxuICBlZGl0ZWRWYWx1ZT86IHN0cmluZztcclxufVxyXG5leHBvcnQgY2xhc3MgSW5wdXRCb3ggZXh0ZW5kcyBDb21wb25lbnQ8SW5wdXRQcm9wcz4ge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgb25DaGFuZ2VIYW5kbGUgID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgb25CbHVySGFuZGxlID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKTtcclxuICByZWFkb25seSBzdGF0ZTogSW5wdXRTdGF0ZSA9IHsgZWRpdGVkVmFsdWU6IHVuZGVmaW5lZCB9O1xyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogSW5wdXRQcm9wcyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlICE9PSBwcmV2UHJvcHMudmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRlZFZhbHVlOiB1bmRlZmluZWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHRleHRTdHlsZSA9IHtcclxuICAgICAgd2lkdGg6IDEyMDAgLFxyXG4gICAgICBoZWlnaHQ6IDYwXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKFwiZm9ybS1jb250cm9sICBteC10ZXh0YXJlYS1pbnB1dCBteC10ZXh0YXJlYS1ub3Jlc2l6ZVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8R3JhbW1hcmx5RWRpdG9yUGx1Z2luIGNsaWVudElkPXt0aGlzLnByb3BzLmNsaWVudElEfSBzdHlsZSA9IHt0ZXh0U3R5bGV9PlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cclxuICAgICAgICAgIHZhbHVlPXt0aGlzLmdldEN1cnJlbnRWYWx1ZSgpfVxyXG4gICAgICAgICAgdGFiSW5kZXg9e3RoaXMucHJvcHMudGFiSW5kZXh9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUhhbmRsZX1cclxuICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJIYW5kbGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9HcmFtbWFybHlFZGl0b3JQbHVnaW4+XHJcbiAgICApO1xyXG4gIH1cclxuICBwcml2YXRlIGdldEN1cnJlbnRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZWRpdGVkVmFsdWUgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gdGhpcy5zdGF0ZS5lZGl0ZWRWYWx1ZVxyXG4gICAgICAgIDogdGhpcy5wcm9wcy52YWx1ZTtcclxuICB9XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZShldmVudDogQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0ZWRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuICBwcml2YXRlIG9uQmx1cigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xyXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsdWUoKTtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uTGVhdmUpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uTGVhdmUoY3VycmVudFZhbHVlLCBjdXJyZW50VmFsdWUgIT09IGlucHV0VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRlZFZhbHVlOiB1bmRlZmluZWQgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgUmVhY3ROb2RlLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFdyaXR0aW5nQXNzaXN0YW50Q29udGFpbmVyUHJvcHMgfSBmcm9tIFwiLi4vLi4vdHlwaW5ncy9Xcml0dGluZ0Fzc2lzdGFudFByb3BzXCI7XHJcbmltcG9ydCB7IElucHV0Qm94IH0gZnJvbSBcIi4vSW5wdXRCb3hcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbHVnaW4gZXh0ZW5kcyBDb21wb25lbnQ8V3JpdHRpbmdBc3Npc3RhbnRDb250YWluZXJQcm9wcz4ge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgb25MZWF2ZUhhbmRsZSA9IHRoaXMub25MZWF2ZS5iaW5kKHRoaXMpO1xyXG4gIFxyXG4gIC8vcHJpdmF0ZSByZWFkb25seSBvblVwZGF0ZUhhbmRsZSA9IHRoaXMub25VcGRhdGUuYmluZCh0aGlzKTtcclxuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wcy50ZXh0QXR0cmlidXRlLnZhbHVlIHx8IFwiXCI7XHJcbiAgICBjb25zdCB1bmlxdWVJRCA9IHRoaXMucHJvcHMuZ3JhbW1hcmx5SWQ7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SW5wdXRCb3hcclxuICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgY2xpZW50SUQ9e3VuaXF1ZUlEfVxyXG4gICAgICAgIHRhYkluZGV4PXt0aGlzLnByb3BzLnRhYkluZGV4fVxyXG4gICAgICAgIC8vb25VcGRhdGU9e3RoaXMub25VcGRhdGVIYW5kbGV9XHJcbiAgICAgICAgb25MZWF2ZT17dGhpcy5vbkxlYXZlSGFuZGxlfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgLy8gcHJpdmF0ZSBvblVwZGF0ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgLy8gICB0aGlzLnByb3BzLnRleHRBdHRyaWJ1dGUuc2V0VmFsdWUodmFsdWUpO1xyXG4gIC8vIH1cclxuICBwcml2YXRlIG9uTGVhdmUodmFsdWU6IHN0cmluZywgaXNDaGFuZ2VkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIWlzQ2hhbmdlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMudGV4dEF0dHJpYnV0ZS5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGhvdCB9IGZyb20gXCJyZWFjdC1ob3QtbG9hZGVyL3Jvb3RcIjtcbmltcG9ydCBcIi4vdWkvV3JpdHRpbmdBc3Npc3RhbnQuY3NzXCI7XG5cbmltcG9ydCB7IFBsdWdpbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvUGx1Z2luXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGhvdChQbHVnaW4pO1xuIl0sIm5hbWVzIjpbImhvdCIsIndpZGdldCIsImhhc093biIsImhhc093blByb3BlcnR5IiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJnIiwiYXJnVHlwZSIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJpbm5lciIsImFwcGx5IiwidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJpbmNsdWRlcyIsImtleSIsImNhbGwiLCJqb2luIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHQiLCJ3aW5kb3ciLCJ0IiwibiIsInIiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiTWFwIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsImUiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJmb3JFYWNoIiwiYXBwZW5kIiwibWVzc2FnZSIsIlN0cmluZyIsInN0YWNrIiwiY29uY2F0IiwiYXJncyIsImNvZGUiLCJ1cmwiLCJ0b1VzZXJNZXNzYWdlIiwiZ2V0IiwibWFwIiwic3BsaXQiLCJmaWx0ZXIiLCJ0b0pTT04iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJfbSIsInNldE1lc3NhZ2VzIiwiY3JlYXRlIiwiYSIsIm8iLCJXZWFrTWFwIiwiR3JhbW1hcmx5IiwiUHJvbWlzZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInJlcGxhY2UiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkVkaXRvclNESyIsInMiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInRvcCIsImNvbnNvbGUiLCJ3YXJuIiwiYyIsIm9uQmVmb3JlU3VnZ2VzdGlvbkNhcmRPcGVuIiwib25TdWdnZXN0aW9uQ2FyZE9wZW4iLCJvblN1Z2dlc3Rpb25DYXJkQ2xvc2UiLCJvblN1Z2dlc3Rpb25DYXJkQWN0aW9uIiwib25QbHVnaW5UdXJuZWRPZmYiLCJvblBsdWdpbkVycm9yIiwib25Eb2N1bWVudFN0YXRzIiwib25TZXNzaW9uU3RhdHMiLCJjcmVhdGVDb250ZXh0IiwiZCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwibmF2aWdhdG9yIiwiY3VycmVudCIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsImwiLCJjYXRjaCIsImYiLCJnIiwiY2xpZW50SWQiLCJtIiwiY29uZmlnIiwiY2hpbGRyZW4iLCJ2IiwiY2xhc3NOYW1lIiwicCIsIkUiLCJrZXlzIiwidSIsImgiLCJ3IiwieSIsIkkiLCJrIiwiRCIsImIiLCJjdXN0b21FbGVtZW50cyIsIndoZW5EZWZpbmVkIiwidGhlbiIsImNvbm5lY3QiLCJQIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInZhbHVlcyIsInJlZiIsImF1dG9kZXRlY3QiLCJjbGFzcyIsInNldEVkaXRvciIsInNldFZpZXdwb3J0IiwiQ29tcG9uZW50IiwiR3JhbW1hcmx5RWRpdG9yUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTyxTQUFTQSxHQUFHQSxDQUFDQyxNQUFNLEVBQUU7SUFDeEIsRUFBQSxPQUFPQSxNQUFNLENBQUE7SUFDakI7Ozs7Ozs7Ozs7O0lDR0E7O0lBRUMsQ0FBQSxDQUFZLFlBQUE7O0lBR1osR0FBQSxJQUFJQyxNQUFNLEdBQUcsRUFBRSxDQUFDQyxjQUFjLENBQUE7T0FHOUIsU0FBU0MsVUFBVUEsR0FBRztTQUNyQixJQUFJQyxPQUFPLEdBQUcsRUFBRSxDQUFBO0lBRWhCLEtBQUEsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFRixDQUFDLEVBQUUsRUFBRTtJQUMxQyxPQUFBLElBQUlHLEdBQUcsR0FBR0YsU0FBUyxDQUFDRCxDQUFDLENBQUMsQ0FBQTtXQUN0QixJQUFJLENBQUNHLEdBQUcsRUFBRSxTQUFBO1dBRVYsSUFBSUMsT0FBTyxHQUFHLE9BQU9ELEdBQUcsQ0FBQTtXQUV4QixJQUFJQyxPQUFPLEtBQUssUUFBUSxJQUFJQSxPQUFPLEtBQUssUUFBUSxFQUFFO0lBQ2pETCxTQUFBQSxPQUFPLENBQUNNLElBQUksQ0FBQ0YsR0FBRyxDQUFDLENBQUE7WUFDakIsTUFBTSxJQUFJRyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0osR0FBRyxDQUFDLEVBQUU7YUFDOUIsSUFBSUEsR0FBRyxDQUFDRCxNQUFNLEVBQUU7ZUFDZixJQUFJTSxLQUFLLEdBQUdWLFVBQVUsQ0FBQ1csS0FBSyxDQUFDLElBQUksRUFBRU4sR0FBRyxDQUFDLENBQUE7ZUFDdkMsSUFBSUssS0FBSyxFQUFFO0lBQ1ZULGFBQUFBLE9BQU8sQ0FBQ00sSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FBQTtnQkFDcEI7Y0FDRDtJQUNELFFBQUMsTUFBTSxJQUFJSixPQUFPLEtBQUssUUFBUSxFQUFFO2FBQ2hDLElBQUlELEdBQUcsQ0FBQ08sUUFBUSxLQUFLQyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0YsUUFBUSxJQUFJLENBQUNQLEdBQUcsQ0FBQ08sUUFBUSxDQUFDQSxRQUFRLEVBQUUsQ0FBQ0csUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO2VBQ3JHZCxPQUFPLENBQUNNLElBQUksQ0FBQ0YsR0FBRyxDQUFDTyxRQUFRLEVBQUUsQ0FBQyxDQUFBO0lBQzVCLFdBQUEsU0FBQTtjQUNEO0lBRUEsU0FBQSxLQUFLLElBQUlJLEdBQUcsSUFBSVgsR0FBRyxFQUFFO0lBQ3BCLFdBQUEsSUFBSVAsTUFBTSxDQUFDbUIsSUFBSSxDQUFDWixHQUFHLEVBQUVXLEdBQUcsQ0FBQyxJQUFJWCxHQUFHLENBQUNXLEdBQUcsQ0FBQyxFQUFFO0lBQ3RDZixhQUFBQSxPQUFPLENBQUNNLElBQUksQ0FBQ1MsR0FBRyxDQUFDLENBQUE7Z0JBQ2xCO2NBQ0Q7WUFDRDtVQUNEO0lBRUEsS0FBQSxPQUFPZixPQUFPLENBQUNpQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDekI7T0FFQSxJQUFxQ0MsTUFBTSxDQUFDQyxPQUFPLEVBQUU7U0FDcERwQixVQUFVLENBQUNxQixPQUFPLEdBQUdyQixVQUFVLENBQUE7U0FDL0JtQixNQUFBQSxDQUFBQSxPQUFBQSxHQUFpQm5CLFVBQVUsQ0FBQTtJQUM1QixJQUFDLE1BS007U0FDTnNCLE1BQU0sQ0FBQ3RCLFVBQVUsR0FBR0EsVUFBVSxDQUFBO1FBQy9CO0lBQ0QsRUFBQyxHQUFFLENBQUE7Ozs7O0lDM0RIO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsU0FBU3VCLENBQUNBLENBQUNBLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7TUFBQyxPQUFPRCxDQUFDLElBQUlELENBQUMsR0FBQ1YsTUFBTSxDQUFDYSxjQUFjLENBQUNILENBQUMsRUFBQ0MsQ0FBQyxFQUFDO0lBQUNHLElBQUFBLEtBQUssRUFBQ0YsQ0FBQztRQUFDRyxVQUFVLEVBQUMsQ0FBQyxDQUFDO1FBQUNDLFlBQVksRUFBQyxDQUFDLENBQUM7SUFBQ0MsSUFBQUEsUUFBUSxFQUFDLENBQUMsQ0FBQTtPQUFFLENBQUMsR0FBQ1AsQ0FBQyxDQUFDQyxDQUFDLENBQUMsR0FBQ0MsQ0FBQyxFQUFDRixDQUFDLENBQUE7SUFBQSxDQUFBO0lBQUMsSUFBSUMsQ0FBQyxHQUFDLElBQUlPLEdBQUcsRUFBQSxDQUFBO0lBQUMsTUFBTU4sQ0FBQyxTQUFTTyxLQUFLLENBQUE7SUFBQ0MsRUFBQUEsV0FBV0EsQ0FBQ1QsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7SUFBQyxJQUFBLEtBQUssRUFBRSxFQUFDRixDQUFDLENBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFDQSxDQUFDLENBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFDQSxDQUFDLENBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFDQSxDQUFDLENBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQUMsSUFBQSxJQUFJVyxDQUFDLEdBQUMsSUFBSUMsR0FBRyxDQUFDLHNEQUFzRCxDQUFDLENBQUE7SUFBQ0QsSUFBQUEsQ0FBQyxDQUFDRSxZQUFZLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUNiLENBQUMsQ0FBQ1osUUFBUSxFQUFFLENB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
