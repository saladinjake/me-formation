(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},66027,e=>{"use strict";let t;var r=e.i(75555),i=e.i(40143),n=e.i(86491),a=e.i(15823),o=e.i(93803),s=e.i(19273),l=e.i(80166),c=class extends a.Subscribable{constructor(e,t){super(),this.options=t,this.#e=e,this.#t=null,this.#r=(0,o.pendingThenable)(),this.bindMethods(),this.setOptions(t)}#e;#i=void 0;#n=void 0;#a=void 0;#o;#s;#r;#t;#l;#c;#d;#u;#h;#p;#f=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#i.addObserver(this),d(this.#i,this.options)?this.#m():this.updateResult(),this.#g())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return u(this.#i,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return u(this.#i,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#y(),this.#x(),this.#i.removeObserver(this)}setOptions(e){let t=this.options,r=this.#i;if(this.options=this.#e.defaultQueryOptions(e),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,s.resolveEnabled)(this.options.enabled,this.#i))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#v(),this.#i.setOptions(this.options),t._defaulted&&!(0,s.shallowEqualObjects)(this.options,t)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#i,observer:this});let i=this.hasListeners();i&&h(this.#i,r,this.options,t)&&this.#m(),this.updateResult(),i&&(this.#i!==r||(0,s.resolveEnabled)(this.options.enabled,this.#i)!==(0,s.resolveEnabled)(t.enabled,this.#i)||(0,s.resolveStaleTime)(this.options.staleTime,this.#i)!==(0,s.resolveStaleTime)(t.staleTime,this.#i))&&this.#b();let n=this.#w();i&&(this.#i!==r||(0,s.resolveEnabled)(this.options.enabled,this.#i)!==(0,s.resolveEnabled)(t.enabled,this.#i)||n!==this.#p)&&this.#j(n)}getOptimisticResult(e){var t,r;let i=this.#e.getQueryCache().build(this.#e,e),n=this.createResult(i,e);return t=this,r=n,(0,s.shallowEqualObjects)(t.getCurrentResult(),r)||(this.#a=n,this.#s=this.options,this.#o=this.#i.state),n}getCurrentResult(){return this.#a}trackResult(e,t){return new Proxy(e,{get:(e,r)=>(this.trackProp(r),t?.(r),"promise"===r&&(this.trackProp("data"),this.options.experimental_prefetchInRender||"pending"!==this.#r.status||this.#r.reject(Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(e,r))})}trackProp(e){this.#f.add(e)}getCurrentQuery(){return this.#i}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#e.defaultQueryOptions(e),r=this.#e.getQueryCache().build(this.#e,t);return r.fetch().then(()=>this.createResult(r,t))}fetch(e){return this.#m({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#a))}#m(e){this.#v();let t=this.#i.fetch(this.options,e);return e?.throwOnError||(t=t.catch(s.noop)),t}#b(){this.#y();let e=(0,s.resolveStaleTime)(this.options.staleTime,this.#i);if(s.isServer||this.#a.isStale||!(0,s.isValidTimeout)(e))return;let t=(0,s.timeUntilStale)(this.#a.dataUpdatedAt,e);this.#u=l.timeoutManager.setTimeout(()=>{this.#a.isStale||this.updateResult()},t+1)}#w(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#i):this.options.refetchInterval)??!1}#j(e){this.#x(),this.#p=e,!s.isServer&&!1!==(0,s.resolveEnabled)(this.options.enabled,this.#i)&&(0,s.isValidTimeout)(this.#p)&&0!==this.#p&&(this.#h=l.timeoutManager.setInterval(()=>{(this.options.refetchIntervalInBackground||r.focusManager.isFocused())&&this.#m()},this.#p))}#g(){this.#b(),this.#j(this.#w())}#y(){this.#u&&(l.timeoutManager.clearTimeout(this.#u),this.#u=void 0)}#x(){this.#h&&(l.timeoutManager.clearInterval(this.#h),this.#h=void 0)}createResult(e,t){let r,i=this.#i,a=this.options,l=this.#a,c=this.#o,u=this.#s,f=e!==i?e.state:this.#n,{state:m}=e,g={...m},y=!1;if(t._optimisticResults){let r=this.hasListeners(),o=!r&&d(e,t),s=r&&h(e,i,t,a);(o||s)&&(g={...g,...(0,n.fetchState)(m.data,e.options)}),"isRestoring"===t._optimisticResults&&(g.fetchStatus="idle")}let{error:x,errorUpdatedAt:v,status:b}=g;r=g.data;let w=!1;if(void 0!==t.placeholderData&&void 0===r&&"pending"===b){let e;l?.isPlaceholderData&&t.placeholderData===u?.placeholderData?(e=l.data,w=!0):e="function"==typeof t.placeholderData?t.placeholderData(this.#d?.state.data,this.#d):t.placeholderData,void 0!==e&&(b="success",r=(0,s.replaceData)(l?.data,e,t),y=!0)}if(t.select&&void 0!==r&&!w)if(l&&r===c?.data&&t.select===this.#l)r=this.#c;else try{this.#l=t.select,r=t.select(r),r=(0,s.replaceData)(l?.data,r,t),this.#c=r,this.#t=null}catch(e){this.#t=e}this.#t&&(x=this.#t,r=this.#c,v=Date.now(),b="error");let j="fetching"===g.fetchStatus,k="pending"===b,C="error"===b,_=k&&j,I=void 0!==r,S={status:b,fetchStatus:g.fetchStatus,isPending:k,isSuccess:"success"===b,isError:C,isInitialLoading:_,isLoading:_,data:r,dataUpdatedAt:g.dataUpdatedAt,error:x,errorUpdatedAt:v,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>f.dataUpdateCount||g.errorUpdateCount>f.errorUpdateCount,isFetching:j,isRefetching:j&&!k,isLoadingError:C&&!I,isPaused:"paused"===g.fetchStatus,isPlaceholderData:y,isRefetchError:C&&I,isStale:p(e,t),refetch:this.refetch,promise:this.#r,isEnabled:!1!==(0,s.resolveEnabled)(t.enabled,e)};if(this.options.experimental_prefetchInRender){let t=void 0!==S.data,r="error"===S.status&&!t,n=e=>{r?e.reject(S.error):t&&e.resolve(S.data)},a=()=>{n(this.#r=S.promise=(0,o.pendingThenable)())},s=this.#r;switch(s.status){case"pending":e.queryHash===i.queryHash&&n(s);break;case"fulfilled":(r||S.data!==s.value)&&a();break;case"rejected":r&&S.error===s.reason||a()}}return S}updateResult(){let e=this.#a,t=this.createResult(this.#i,this.options);if(this.#o=this.#i.state,this.#s=this.options,void 0!==this.#o.data&&(this.#d=this.#i),(0,s.shallowEqualObjects)(t,e))return;this.#a=t;let r=()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,r="function"==typeof t?t():t;if("all"===r||!r&&!this.#f.size)return!0;let i=new Set(r??this.#f);return this.options.throwOnError&&i.add("error"),Object.keys(this.#a).some(t=>this.#a[t]!==e[t]&&i.has(t))};this.#k({listeners:r()})}#v(){let e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#i)return;let t=this.#i;this.#i=e,this.#n=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#g()}#k(e){i.notifyManager.batch(()=>{e.listeners&&this.listeners.forEach(e=>{e(this.#a)}),this.#e.getQueryCache().notify({query:this.#i,type:"observerResultsUpdated"})})}};function d(e,t){return!1!==(0,s.resolveEnabled)(t.enabled,e)&&void 0===e.state.data&&("error"!==e.state.status||!1!==t.retryOnMount)||void 0!==e.state.data&&u(e,t,t.refetchOnMount)}function u(e,t,r){if(!1!==(0,s.resolveEnabled)(t.enabled,e)&&"static"!==(0,s.resolveStaleTime)(t.staleTime,e)){let i="function"==typeof r?r(e):r;return"always"===i||!1!==i&&p(e,t)}return!1}function h(e,t,r,i){return(e!==t||!1===(0,s.resolveEnabled)(i.enabled,e))&&(!r.suspense||"error"!==e.state.status)&&p(e,r)}function p(e,t){return!1!==(0,s.resolveEnabled)(t.enabled,e)&&e.isStaleByTime((0,s.resolveStaleTime)(t.staleTime,e))}e.i(47167);var f=e.i(71645),m=e.i(12598);e.i(43476);var g=f.createContext((t=!1,{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t})),y=f.createContext(!1);y.Provider;var x=(e,t,r)=>t.fetchOptimistic(e).catch(()=>{r.clearReset()});function v(e,t){return function(e,t,r){let n,a=f.useContext(y),o=f.useContext(g),l=(0,m.useQueryClient)(r),c=l.defaultQueryOptions(e);l.getDefaultOptions().queries?._experimental_beforeQuery?.(c);let d=l.getQueryCache().get(c.queryHash);if(c._optimisticResults=a?"isRestoring":"optimistic",c.suspense){let e=e=>"static"===e?e:Math.max(e??1e3,1e3),t=c.staleTime;c.staleTime="function"==typeof t?(...r)=>e(t(...r)):e(t),"number"==typeof c.gcTime&&(c.gcTime=Math.max(c.gcTime,1e3))}n=d?.state.error&&"function"==typeof c.throwOnError?(0,s.shouldThrowError)(c.throwOnError,[d.state.error,d]):c.throwOnError,(c.suspense||c.experimental_prefetchInRender||n)&&!o.isReset()&&(c.retryOnMount=!1),f.useEffect(()=>{o.clearReset()},[o]);let u=!l.getQueryCache().get(c.queryHash),[h]=f.useState(()=>new t(l,c)),p=h.getOptimisticResult(c),v=!a&&!1!==e.subscribed;if(f.useSyncExternalStore(f.useCallback(e=>{let t=v?h.subscribe(i.notifyManager.batchCalls(e)):s.noop;return h.updateResult(),t},[h,v]),()=>h.getCurrentResult(),()=>h.getCurrentResult()),f.useEffect(()=>{h.setOptions(c)},[c,h]),c?.suspense&&p.isPending)throw x(c,h,o);if((({result:e,errorResetBoundary:t,throwOnError:r,query:i,suspense:n})=>e.isError&&!t.isReset()&&!e.isFetching&&i&&(n&&void 0===e.data||(0,s.shouldThrowError)(r,[e.error,i])))({result:p,errorResetBoundary:o,throwOnError:c.throwOnError,query:d,suspense:c.suspense}))throw p.error;if(l.getDefaultOptions().queries?._experimental_afterQuery?.(c,p),c.experimental_prefetchInRender&&!s.isServer&&p.isLoading&&p.isFetching&&!a){let e=u?x(c,h,o):d?.promise;e?.catch(s.noop).finally(()=>{h.updateResult()})}return c.notifyOnChangeProps?p:h.trackResult(p)}(e,c,t)}e.s(["useQuery",()=>v],66027)},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={assign:function(){return l},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return s}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});function a(e){let t={};for(let[r,i]of e.entries()){let e=t[r];void 0===e?t[r]=i:Array.isArray(e)?e.push(i):t[r]=[e,i]}return t}function o(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,i]of Object.entries(e))if(Array.isArray(i))for(let e of i)t.append(r,o(e));else t.set(r,o(i));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,i]of r.entries())e.append(t,i)}return e}},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let a=e.r(90809)._(e.r(98183)),o=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,i=e.protocol||"",n=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),n=n.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${i}${c}${n}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let i=e.r(71645);function n(e,t){let r=(0,i.useRef)(null),n=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=a(e,i)),t&&(n.current=a(t,i))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={DecodeError:function(){return y},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return b},NormalizeError:function(){return x},PageNotFoundError:function(){return v},SP:function(){return m},ST:function(){return g},WEB_VITALS:function(){return a},execOnce:function(){return o},getDisplayName:function(){return u},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return l},isResSent:function(){return h},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return j}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let t,r=!1;return(...i)=>(r||(r=!0,t=e(...i)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function d(){let{href:e}=window.location,t=c();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function h(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let i=await e.getInitialProps(t);if(r&&h(r))return i;if(!i)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${i}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return i}let m="u">typeof performance,g=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class y extends Error{}class x extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class b extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let i=e.r(18967),n=e.r(52817);function a(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return y},useLinkStatus:function(){return v}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let a=e.r(90809),o=e.r(43476),s=a._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),u=e.r(18967),h=e.r(5550);e.r(33525);let p=e.r(91949),f=e.r(73668),m=e.r(9396);function g(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function y(t){var r;let i,n,a,[l,y]=(0,s.useOptimistic)(p.IDLE_LINK_STATUS),v=(0,s.useRef)(null),{href:b,as:w,children:j,prefetch:k=null,passHref:C,replace:_,shallow:I,scroll:S,onClick:R,onMouseEnter:E,onTouchStart:z,legacyBehavior:N=!1,onNavigate:P,ref:T,unstable_dynamicOnHover:M,...O}=t;i=j,N&&("string"==typeof i||"number"==typeof i)&&(i=(0,o.jsx)("a",{children:i}));let Q=s.default.useContext(c.AppRouterContext),L=!1!==k,F=!1!==k?null===(r=k)||"auto"===r?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,{href:D,as:A}=s.default.useMemo(()=>{let e=g(b);return{href:e,as:w?g(w):e}},[b,w]);if(N){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=s.default.Children.only(i)}let $=N?n&&"object"==typeof n&&n.ref:T,U=s.default.useCallback(e=>(null!==Q&&(v.current=(0,p.mountLinkInstance)(e,D,Q,F,L,y)),()=>{v.current&&((0,p.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,p.unmountPrefetchableInstance)(e)}),[L,D,Q,F,y]),B={ref:(0,d.useMergedRef)(U,$),onClick(t){N||"function"!=typeof R||R(t),N&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!Q||t.defaultPrevented||function(t,r,i,n,a,o,l){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,f.isLocalURL)(r)){a&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);s.default.startTransition(()=>{u(i||r,a?"replace":"push",o??!0,n.current)})}}(t,D,A,v,_,S,P)},onMouseEnter(e){N||"function"!=typeof E||E(e),N&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),Q&&L&&(0,p.onNavigationIntent)(e.currentTarget,!0===M)},onTouchStart:function(e){N||"function"!=typeof z||z(e),N&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),Q&&L&&(0,p.onNavigationIntent)(e.currentTarget,!0===M)}};return(0,u.isAbsoluteUrl)(A)?B.href=A:N&&!C&&("a"!==n.type||"href"in n.props)||(B.href=(0,h.addBasePath)(A)),a=N?s.default.cloneElement(n,B):(0,o.jsx)("a",{...O,...B,children:i}),(0,o.jsx)(x.Provider,{value:l,children:a})}e.r(84508);let x=(0,s.createContext)(p.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(x);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},42009,e=>{"use strict";let t=(0,e.i(75254).default)("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);e.s(["Award",()=>t],42009)},9912,e=>{"use strict";let t=(0,e.i(75254).default)("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);e.s(["Rocket",()=>t],9912)},72520,e=>{"use strict";let t=(0,e.i(75254).default)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",()=>t],72520)},88653,e=>{"use strict";e.i(47167);var t=e.i(43476),r=e.i(71645),i=e.i(31178),n=e.i(47414),a=e.i(21476),o=r,s=e.i(37806);class l extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c({children:e,isPresent:r}){let i=(0,o.useId)(),n=(0,o.useRef)(null),a=(0,o.useRef)({width:0,height:0,top:0,left:0}),{nonce:c}=(0,o.useContext)(s.MotionConfigContext);return(0,o.useInsertionEffect)(()=>{let{width:e,height:t,top:o,left:s}=a.current;if(r||!n.current||!e||!t)return;n.current.dataset.motionPopId=i;let l=document.createElement("style");return c&&(l.nonce=c),document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            top: ${o}px !important;
            left: ${s}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[r]),(0,t.jsx)(l,{isPresent:r,childRef:n,sizeRef:a,children:o.cloneElement(e,{ref:n})})}let d=({children:e,initial:i,isPresent:o,onExitComplete:s,custom:l,presenceAffectsLayout:d,mode:h})=>{let p=(0,n.useConstant)(u),f=(0,r.useId)(),m=(0,r.useCallback)(e=>{for(let t of(p.set(e,!0),p.values()))if(!t)return;s&&s()},[p,s]),g=(0,r.useMemo)(()=>({id:f,initial:i,isPresent:o,custom:l,onExitComplete:m,register:e=>(p.set(e,!1),()=>p.delete(e))}),d?[Math.random(),m]:[o,m]);return(0,r.useMemo)(()=>{p.forEach((e,t)=>p.set(t,!1))},[o]),r.useEffect(()=>{o||p.size||!s||s()},[o]),"popLayout"===h&&(e=(0,t.jsx)(c,{isPresent:o,children:e})),(0,t.jsx)(a.PresenceContext.Provider,{value:g,children:e})};function u(){return new Map}var h=e.i(64978);let p=e=>e.key||"";function f(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}var m=e.i(74008);let g=({children:e,custom:a,initial:o=!0,onExitComplete:s,presenceAffectsLayout:l=!0,mode:c="sync",propagate:u=!1})=>{let[g,y]=(0,h.usePresence)(u),x=(0,r.useMemo)(()=>f(e),[e]),v=u&&!g?[]:x.map(p),b=(0,r.useRef)(!0),w=(0,r.useRef)(x),j=(0,n.useConstant)(()=>new Map),[k,C]=(0,r.useState)(x),[_,I]=(0,r.useState)(x);(0,m.useIsomorphicLayoutEffect)(()=>{b.current=!1,w.current=x;for(let e=0;e<_.length;e++){let t=p(_[e]);v.includes(t)?j.delete(t):!0!==j.get(t)&&j.set(t,!1)}},[_,v.length,v.join("-")]);let S=[];if(x!==k){let e=[...x];for(let t=0;t<_.length;t++){let r=_[t],i=p(r);v.includes(i)||(e.splice(t,0,r),S.push(r))}"wait"===c&&S.length&&(e=S),I(f(e)),C(x);return}let{forceRender:R}=(0,r.useContext)(i.LayoutGroupContext);return(0,t.jsx)(t.Fragment,{children:_.map(e=>{let r=p(e),i=(!u||!!g)&&(x===_||v.includes(r));return(0,t.jsx)(d,{isPresent:i,initial:(!b.current||!!o)&&void 0,custom:i?void 0:a,presenceAffectsLayout:l,mode:c,onExitComplete:i?void 0:()=>{if(!j.has(r))return;j.set(r,!0);let e=!0;j.forEach(t=>{t||(e=!1)}),e&&(null==R||R(),I(w.current),u&&(null==y||y()),s&&s())},children:e},r)})})};e.s(["AnimatePresence",()=>g],88653)},92161,37727,64659,e=>{"use strict";var t=e.i(75254);let r=(0,t.default)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);e.s(["Menu",()=>r],92161);let i=(0,t.default)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["X",()=>i],37727);let n=(0,t.default)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["ChevronDown",()=>n],64659)},63488,e=>{"use strict";let t=(0,e.i(75254).default)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);e.s(["Mail",()=>t],63488)},51348,e=>{"use strict";let t=(0,e.i(75254).default)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);e.s(["Linkedin",()=>t],51348)},50682,e=>{"use strict";let t=(0,e.i(75254).default)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);e.s(["Github",()=>t],50682)},14882,e=>{"use strict";var t=e.i(97053);let r=t.default.div.withConfig({displayName:"Container",componentId:"sc-b6d80c3-0"})`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`,i=t.default.section.withConfig({displayName:"Container__Section",componentId:"sc-b6d80c3-1"})`
  padding: 5rem 0;
  @media (max-width: ${e=>e.theme.breakpoints?.tablet||"768px"}) {
    padding: 3rem 0;
  }
`;e.s(["Container",0,r,"Section",0,i])},3265,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(97053),n=e.i(46932),a=e.i(88653),o=e.i(92161),s=e.i(37727),l=e.i(64659),c=e.i(63488),d=e.i(51348),u=e.i(50682),h=e.i(14882),p=e.i(22016);let f=i.default.nav.withConfig({displayName:"Navbar__Nav",componentId:"sc-68b38fda-0"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${e=>e.$scrolled?"70px":"90px"};
  background: ${e=>e.$scrolled?"rgba(255, 255, 255, 0.8)":"transparent"};
  backdrop-filter: ${e=>e.$scrolled?"blur(12px)":"none"};
  z-index: 1000;
  border-bottom: ${e=>e.$scrolled?"1px solid rgba(139, 92, 246, 0.1)":"none"};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,m=(0,i.default)(h.Container).withConfig({displayName:"Navbar__NavContent",componentId:"sc-68b38fda-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`,g=(0,i.default)(p.default).withConfig({displayName:"Navbar__Logo",componentId:"sc-68b38fda-2"})`
  font-size: 1.75rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;
`,y=i.default.div.withConfig({displayName:"Navbar__NavLinks",componentId:"sc-68b38fda-3"})`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`,x=i.default.div.withConfig({displayName:"Navbar__NavLinkWrapper",componentId:"sc-68b38fda-4"})`
  position: relative;
`,v=(0,i.default)(p.default).withConfig({displayName:"Navbar__NavLink",componentId:"sc-68b38fda-5"})`
  font-weight: 600;
  color: var(--secondary);
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--primary);
  }
`,b=(0,i.default)(n.motion.div).withConfig({displayName:"Navbar__DropdownMenu",componentId:"sc-68b38fda-6"})`
  position: absolute;
  top: 100%;
  right: 0;
  width: 220px;
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 1rem;
  box-shadow: var(--shadow-glass);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,w=i.default.a.withConfig({displayName:"Navbar__DropdownItem",componentId:"sc-68b38fda-7"})`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  color: var(--secondary);
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover {
    background: var(--accent);
    color: var(--primary);
  }
`,j=i.default.button.withConfig({displayName:"Navbar__MenuButton",componentId:"sc-68b38fda-8"})`
  display: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--primary);
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
  }
`,k=(0,i.default)(n.motion.div).withConfig({displayName:"Navbar__MobileDrawer",componentId:"sc-68b38fda-9"})`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 350px;
  background: white;
  z-index: 1001;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: -10px 0 50px rgba(139, 92, 246, 0.1);
`,C=(0,i.default)(n.motion.div).withConfig({displayName:"Navbar__Overlay",componentId:"sc-68b38fda-10"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1000;
`;e.s(["Navbar",0,()=>{let[e,i]=(0,r.useState)(!1),[n,h]=(0,r.useState)(!1),[_,I]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=()=>{h(window.scrollY>20)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let S=()=>i(!e);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f,{$scrolled:n,children:(0,t.jsxs)(m,{children:[(0,t.jsx)(g,{href:"/",children:"VJ Portfolio"}),(0,t.jsxs)(y,{children:[(0,t.jsx)(v,{href:"/",children:"Home"}),(0,t.jsx)(v,{href:"/projects",children:"Projects"}),(0,t.jsx)(v,{href:"/resume",children:"Resume"}),(0,t.jsxs)(x,{onMouseEnter:()=>I(!0),onMouseLeave:()=>I(!1),children:[(0,t.jsxs)(v,{href:"/contact",children:["Contact Me ",(0,t.jsx)(l.ChevronDown,{size:14,style:{transform:_?"rotate(180deg)":"none",transition:"transform 0.3s"}})]}),(0,t.jsx)(a.AnimatePresence,{children:_&&(0,t.jsxs)(b,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},transition:{duration:.2},children:[(0,t.jsxs)(w,{href:"mailto:saleem@example.com",children:[(0,t.jsx)(c.Mail,{size:18})," Email Me"]}),(0,t.jsxs)(w,{href:"https://linkedin.com/victor-juwa",target:"_blank",children:[(0,t.jsx)(d.Linkedin,{size:18})," LinkedIn"]}),(0,t.jsxs)(w,{href:"https://github.com/saladinjake",target:"_blank",children:[(0,t.jsx)(u.Github,{size:18})," GitHub"]})]})})]}),(0,t.jsx)(v,{href:"/admin",style:{background:"var(--primary)",color:"white",padding:"0.6rem 1.25rem",borderRadius:"100px",boxShadow:"0 4px 15px rgba(139, 92, 246, 0.3)"},children:"Admin"})]}),(0,t.jsx)(j,{onClick:S,children:e?(0,t.jsx)(s.X,{size:24}):(0,t.jsx)(o.Menu,{size:24})})]})}),(0,t.jsx)(a.AnimatePresence,{children:e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:S}),(0,t.jsxs)(k,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:30,stiffness:300},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[(0,t.jsx)(g,{href:"/",onClick:S,children:"SK."}),(0,t.jsx)("button",{onClick:S,style:{color:"var(--secondary)"},children:(0,t.jsx)(s.X,{size:28})})]}),(0,t.jsx)(v,{href:"/",onClick:S,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Home"}),(0,t.jsx)(v,{href:"/projects",onClick:S,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Projects"}),(0,t.jsx)(v,{href:"/resume",onClick:S,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Resume"}),(0,t.jsx)(v,{href:"/contact",onClick:S,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Contact Me"}),(0,t.jsx)("div",{style:{marginTop:"auto",display:"flex",flexDirection:"column",gap:"1rem"},children:(0,t.jsx)(p.default,{href:"/admin",onClick:S,style:{background:"var(--primary)",color:"white",padding:"1rem",borderRadius:"1rem",textAlign:"center",fontWeight:700,boxShadow:"0 10px 20px rgba(139, 92, 246, 0.2)"},children:"Admin Portal"})})]})]})})]})}])},78021,e=>{"use strict";let t=(0,e.i(75254).default)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);e.s(["Twitter",()=>t],78021)},58234,e=>{"use strict";var t=e.i(43476),r=e.i(97053),i=e.i(14882),n=e.i(22016),a=e.i(50682),o=e.i(51348),s=e.i(78021),l=e.i(63488);let c=(0,e.i(75254).default)("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),d=r.default.footer.withConfig({displayName:"Footer__FooterBase",componentId:"sc-3a28c693-0"})`
  padding: 8rem 0 4rem;
  background: white;
  border-top: 1px solid var(--border);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-light), transparent);
  }
`,u=r.default.div.withConfig({displayName:"Footer__FooterGrid",componentId:"sc-3a28c693-1"})`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 4rem;
  margin-bottom: 6rem;
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`,h=r.default.div.withConfig({displayName:"Footer__FooterCols",componentId:"sc-3a28c693-2"})`
  h4 {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--primary);
  }
  
  p {
    color: var(--secondary);
    line-height: 1.7;
    font-size: 1rem;
    max-width: 300px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  
  a {
    color: var(--secondary);
    font-weight: 600;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &:hover {
      color: var(--primary);
      transform: translateX(5px);
    }
  }
`,p=r.default.div.withConfig({displayName:"Footer__Copyright",componentId:"sc-3a28c693-3"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  border-top: 1px solid var(--border);
  color: var(--secondary);
  font-size: 0.95rem;
  font-weight: 500;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`,f=r.default.div.withConfig({displayName:"Footer__SocialLinks",componentId:"sc-3a28c693-4"})`
  display: flex;
  gap: 1rem;
  
  a {
    width: 45px;
    height: 45px;
    background: var(--accent);
    color: var(--primary);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid var(--border);

    &:hover {
      background: var(--primary);
      color: white;
      transform: translateY(-5px) rotate(8deg);
      box-shadow: 0 10px 20px rgba(139, 92, 246, 0.2);
    }
  }
`,m=(0,r.default)(n.default).withConfig({displayName:"Footer__Logo",componentId:"sc-3a28c693-5"})`
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
`;e.s(["Footer",0,()=>(0,t.jsx)(d,{children:(0,t.jsxs)(i.Container,{children:[(0,t.jsxs)(u,{children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(m,{href:"/",children:"SK Portfolio"}),(0,t.jsx)("p",{children:"Architecting high-performance digital experiences with focus on enterprise-grade scalability and robust design patterns."}),(0,t.jsxs)(f,{style:{marginTop:"2.5rem"},children:[(0,t.jsx)("a",{href:"#",children:(0,t.jsx)(o.Linkedin,{size:20})}),(0,t.jsx)("a",{href:"#",children:(0,t.jsx)(a.Github,{size:20})}),(0,t.jsx)("a",{href:"#",children:(0,t.jsx)(s.Twitter,{size:20})}),(0,t.jsx)("a",{href:"#",children:(0,t.jsx)(l.Mail,{size:20})})]})]}),(0,t.jsxs)(h,{children:[(0,t.jsx)("h4",{children:"Sitemap"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/",children:["Home ",(0,t.jsx)(c,{size:14,opacity:.5})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/projects",children:["Projects ",(0,t.jsx)(c,{size:14,opacity:.5})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/resume",children:["Resume ",(0,t.jsx)(c,{size:14,opacity:.5})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/contact",children:["Contact ",(0,t.jsx)(c,{size:14,opacity:.5})]})})]})]}),(0,t.jsxs)(h,{children:[(0,t.jsx)("h4",{children:"Technical"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"Next.js 15"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"TypeScript"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"Styled Components"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"Framer Motion"})})]})]}),(0,t.jsxs)(h,{children:[(0,t.jsx)("h4",{children:"Hire Me"}),(0,t.jsx)("p",{style:{marginBottom:"1.5rem"},children:"Currently open to senior engineering roles and technical consulting."}),(0,t.jsx)(n.default,{href:"/contact",style:{color:"var(--primary)",fontWeight:800,borderBottom:"2px solid var(--primary)"},children:"Start a Conversation"})]})]}),(0,t.jsxs)(p,{children:[(0,t.jsxs)("span",{children:["© ",new Date().getFullYear()," Saleem Kudra. All rights reserved."]}),(0,t.jsxs)("div",{style:{display:"flex",gap:"2rem"},children:[(0,t.jsx)("a",{href:"#",children:"Privacy Policy"}),(0,t.jsx)("a",{href:"#",children:"Terms of Service"})]})]})]})})],58234)},78917,e=>{"use strict";let t=(0,e.i(75254).default)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);e.s(["ExternalLink",()=>t],78917)},97625,e=>{"use strict";let t=(0,e.i(75254).default)("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);e.s(["Code2",()=>t],97625)},52683,e=>{"use strict";var t=e.i(43476),r=e.i(66027),i=e.i(3265),n=e.i(58234),a=e.i(71645),o=e.i(97053),s=e.i(46932),l=e.i(88653),c=e.i(14882),d=e.i(72520),u=e.i(75254);let h=(0,u.default)("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);var p=e.i(97625),f=e.i(9912);let m=(0,o.default)(c.Section).withConfig({displayName:"Hero__HeroSection",componentId:"sc-f3ff59f0-0"})`
  padding-top: 140px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
`,g=o.default.div.withConfig({displayName:"Hero__HeroGrid",componentId:"sc-f3ff59f0-1"})`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 5rem;
  align-items: center;
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,y=(0,o.default)(s.motion.span).withConfig({displayName:"Hero__Badge",componentId:"sc-f3ff59f0-2"})`
  background: var(--accent);
  color: var(--primary);
  padding: 0.6rem 1.2rem;
  border-radius: 100px;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 2rem;
  border: 1px solid var(--border);
`,x=(0,o.default)(s.motion.h1).withConfig({displayName:"Hero__Title",componentId:"sc-f3ff59f0-3"})`
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -2px;

  span {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,v=(0,o.default)(s.motion.p).withConfig({displayName:"Hero__Description",componentId:"sc-f3ff59f0-4"})`
  font-size: 1.25rem;
  color: var(--secondary);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 600px;
`,b=(0,o.default)(s.motion.div).withConfig({displayName:"Hero__CTAWrap",componentId:"sc-f3ff59f0-5"})`
  display: flex;
  gap: 1.5rem;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,w=o.default.button.withConfig({displayName:"Hero__CTAButton",componentId:"sc-f3ff59f0-6"})`
  padding: 1.25rem 2.5rem;
  border-radius: 1rem;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: ${e=>e.$primary?"var(--primary)":"white"};
  color: ${e=>e.$primary?"white":"var(--foreground)"};
  border: ${e=>e.$primary?"none":"1px solid var(--border)"};
  box-shadow: ${e=>e.$primary?"0 10px 30px rgba(139, 92, 246, 0.3)":"var(--shadow-md)"};

  &:hover {
    transform: translateY(-5px);
    background: ${e=>e.$primary?"var(--primary-dark)":"var(--accent)"};
  }
`,j=(0,o.default)(s.motion.div).withConfig({displayName:"Hero__SliderWrapper",componentId:"sc-f3ff59f0-7"})`
  position: relative;
  height: 500px;
  border-radius: 2.5rem;
  overflow: hidden;
  box-shadow: var(--shadow-glass);
  border: 1px solid rgba(255, 255, 255, 0.3);
`,k=(0,o.default)(s.motion.div).withConfig({displayName:"Hero__SliderBackground",componentId:"sc-f3ff59f0-8"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${e=>e.$color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  color: white;
`,C=o.default.div.withConfig({displayName:"Hero__IconWrap",componentId:"sc-f3ff59f0-9"})`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`,_=[{title:"5+ Years of Excellence",desc:"Building scalable enterprise applications with cutting-edge tech.",color:"linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",icon:(0,t.jsx)(p.Code2,{size:40})},{title:"20+ Successful Products",desc:"From fintech to e-commerce, delivering value to global clients.",color:"linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",icon:(0,t.jsx)(h,{size:40})},{title:"Performance Driven",desc:"Optimizing for speed, accessibility, and robust architecture.",color:"linear-gradient(135deg, #6D28D9 0%, #4C1D95 100%)",icon:(0,t.jsx)(f.Rocket,{size:40})}],I=({data:e})=>{let[r,i]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=setInterval(()=>{i(e=>(e+1)%_.length)},4500);return()=>clearInterval(e)},[]),(0,t.jsx)(m,{children:(0,t.jsx)(c.Container,{children:(0,t.jsxs)(g,{children:[(0,t.jsxs)(s.motion.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.8,ease:"easeOut"},children:[(0,t.jsx)(y,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:"Available for New Projects"}),(0,t.jsxs)(x,{children:["Hello, I am ",(0,t.jsx)("br",{}),(0,t.jsx)("span",{children:e?.name||"Saleem Kudra"})]}),(0,t.jsxs)(v,{children:["A ",e?.title||"Senior Fullstack Developer"," with ",e?.experience_years||8," years of experience.",e?.bio||"I specialize in building complex, data-driven interfaces with modern React patterns and enterprise-grade architecture."]}),(0,t.jsxs)(b,{children:[(0,t.jsxs)(w,{$primary:!0,onClick:()=>window.location.href="/projects",children:["View My Work ",(0,t.jsx)(d.ArrowRight,{size:20})]}),(0,t.jsx)(w,{onClick:()=>window.location.href="/contact",children:"Hire Me"})]})]}),(0,t.jsx)(j,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:1,delay:.3},children:(0,t.jsx)(l.AnimatePresence,{mode:"wait",children:(0,t.jsxs)(k,{$color:_[r].color,initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},transition:{duration:.6,cubicBezier:[.4,0,.2,1]},children:[(0,t.jsx)(C,{children:_[r].icon}),(0,t.jsx)(s.motion.h3,{style:{fontSize:"2.5rem",marginBottom:"1rem",fontWeight:800,color:"#fff"},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:_[r].title}),(0,t.jsx)(s.motion.p,{style:{fontSize:"1.2rem",opacity:.9},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:_[r].desc})]},r)})})]})})})},S=o.default.div.withConfig({displayName:"Skills__SkillGrid",componentId:"sc-43a9266-0"})`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  justify-content: center;
  margin-top: 4rem;
`,R=(0,o.default)(s.motion.div).withConfig({displayName:"Skills__SkillPill",componentId:"sc-43a9266-1"})`
  padding: 0.85rem 1.75rem;
  background: white;
  border: 1px solid var(--border);
  border-radius: 100px;
  font-weight: 700;
  color: var(--secondary);
  box-shadow: var(--shadow-sm);
  cursor: default;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  backdrop-filter: blur(8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: var(--primary);
    border-color: var(--primary);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.2);
    transform: translateY(-5px) scale(1.05);
    background: var(--accent);
  }

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: var(--primary);
    border-radius: 50%;
    opacity: 0.6;
  }
`,E=(0,o.default)(s.motion.h2).withConfig({displayName:"Skills__SectionTitle",componentId:"sc-43a9266-2"})`
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1.25rem;
  letter-spacing: -1px;
`,z=(0,o.default)(s.motion.p).withConfig({displayName:"Skills__SectionDesc",componentId:"sc-43a9266-3"})`
  text-align: center;
  color: var(--secondary);
  max-width: 650px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.7;
`,N=({data:e})=>(0,t.jsxs)(c.Section,{style:{background:"var(--accent)",position:"relative",overflow:"hidden"},children:[(0,t.jsx)("div",{style:{position:"absolute",top:"-10%",right:"-5%",width:"400px",height:"400px",background:"rgba(139, 92, 246, 0.03)",borderRadius:"50%",filter:"blur(80px)"}}),(0,t.jsxs)(c.Container,{children:[(0,t.jsx)(E,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Technical Ecosystem"}),(0,t.jsx)(z,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},children:"Leveraging a diverse stack of modern technologies to build high-performance, enterprise-standard applications with complex design patterns."}),(0,t.jsx)(S,{children:e?.map((e,r)=>(0,t.jsx)(R,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{type:"spring",stiffness:260,damping:20,delay:.05*r},viewport:{once:!0},children:e.name},e.name))})]})]});var P=e.i(64659);let T=(0,u.default)("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]),M=(0,u.default)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);var O=e.i(78917);let Q=(0,o.default)(s.motion.div).withConfig({displayName:"Experience__ExpCard",componentId:"sc-32cca709-0"})`
  background: white;
  border: 1px solid var(--border);
  border-radius: 2rem;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.4s ease;

  &:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--primary-light);
  }
`,L=o.default.div.withConfig({displayName:"Experience__ExpHeader",componentId:"sc-32cca709-1"})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  gap: 2rem;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`,F=o.default.div.withConfig({displayName:"Experience__CompanyIcon",componentId:"sc-32cca709-2"})`
  width: 60px;
  height: 60px;
  background: var(--accent);
  color: var(--primary);
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid var(--border);
`,D=o.default.div.withConfig({displayName:"Experience__MainInfo",componentId:"sc-32cca709-3"})`
  flex: 1;
  h3 {
    font-size: 1.6rem;
    color: var(--primary-dark);
    margin-bottom: 0.25rem;
  }
  h4 {
    font-size: 1.1rem;
    color: var(--foreground);
    font-weight: 600;
  }
`,A=o.default.div.withConfig({displayName:"Experience__MetaInfo",componentId:"sc-32cca709-4"})`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  @media (max-width: 576px) {
    align-items: flex-start;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--secondary);
    font-size: 0.9rem;
    font-weight: 500;
  }
`,$=(0,o.default)(s.motion.div).withConfig({displayName:"Experience__CollapsibleContent",componentId:"sc-32cca709-5"})`
  overflow: hidden;
`,U=o.default.div.withConfig({displayName:"Experience__Divider",componentId:"sc-32cca709-6"})`
  height: 1px;
  background: linear-gradient(to right, var(--border), transparent);
  margin: 1.5rem 0;
`,B=o.default.div.withConfig({displayName:"Experience__TechStack",componentId:"sc-32cca709-7"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;

  span {
    padding: 0.4rem 1rem;
    background: var(--accent);
    color: var(--primary);
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 700;
    border: 1px solid var(--border);
  }
`,H=o.default.div.withConfig({displayName:"Experience__ProductGrid",componentId:"sc-32cca709-8"})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`,q=(0,o.default)(s.motion.div).withConfig({displayName:"Experience__ProductCard",componentId:"sc-32cca709-9"})`
  background: var(--accent);
  border-radius: 1.5rem;
  padding: 1.5rem;
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1.25rem;
    box-shadow: var(--shadow-sm);
  }

  h5 { font-size: 1.1rem; margin-bottom: 0.5rem; }
  p { font-size: 0.9rem; color: var(--secondary); line-height: 1.5; flex: 1; }
`,V=o.default.div.withConfig({displayName:"Experience__ProductTags",componentId:"sc-32cca709-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;

  span {
    padding: 0.25rem 0.75rem;
    background: white;
    color: var(--primary);
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    border: 1px solid var(--border);
  }
`,W=o.default.a.withConfig({displayName:"Experience__ProductLink",componentId:"sc-32cca709-11"})`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--primary);
  margin-top: auto;
  
  &:hover {
    text-decoration: underline;
  }
`,K=o.default.ul.withConfig({displayName:"Experience__AchievementList",componentId:"sc-32cca709-12"})`
  list-style: none;
  margin-top: 1rem;
  li {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.75rem;
    color: var(--secondary);
    line-height: 1.5;
    
    &::before {
      content: '→';
      color: var(--primary);
      font-weight: 800;
    }
  }
`,G=({exp:e})=>{let[r,i]=(0,a.useState)(!1);return(0,t.jsxs)(Q,{layout:!0,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[(0,t.jsxs)(L,{onClick:()=>i(!r),children:[(0,t.jsxs)("div",{style:{display:"flex",gap:"1.5rem",flex:1},children:[(0,t.jsx)(F,{children:(0,t.jsx)(T,{size:28})}),(0,t.jsxs)(D,{children:[(0,t.jsx)("h3",{children:e.company}),(0,t.jsx)("h4",{children:e.role})]})]}),(0,t.jsxs)(A,{children:[(0,t.jsxs)("span",{children:[(0,t.jsx)(M,{size:16})," ",e.period]}),(0,t.jsx)(s.motion.div,{animate:{rotate:180*!!r},style:{color:"var(--primary)",background:"var(--accent)",borderRadius:"50%",padding:"5px"},children:(0,t.jsx)(P.ChevronDown,{size:20})})]})]}),(0,t.jsx)(l.AnimatePresence,{children:r&&(0,t.jsxs)($,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.4,ease:"easeInOut"},children:[(0,t.jsx)(U,{}),(0,t.jsx)("p",{style:{color:"var(--foreground)",fontSize:"1.05rem"},children:e.description}),(0,t.jsx)("h5",{style:{margin:"1.5rem 0 0.5rem",fontSize:"1.1rem",color:"var(--primary-dark)"},children:"Key Achievements:"}),(0,t.jsx)(K,{children:e.achievements?.map((e,r)=>(0,t.jsx)("li",{children:e},r))}),e.products&&e.products.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h5",{style:{margin:"2rem 0 1rem",fontSize:"1.1rem",color:"var(--primary-dark)"},children:"Delivered Products:"}),(0,t.jsx)(H,{children:e.products.map((e,r)=>(0,t.jsxs)(q,{whileHover:{y:-5},children:[(0,t.jsx)("img",{src:e.image,alt:e.name}),(0,t.jsx)("h5",{children:e.name}),(0,t.jsx)("p",{children:e.description}),e.techStack&&(0,t.jsx)(V,{children:e.techStack.map(e=>(0,t.jsx)("span",{children:e},e))}),e.link&&(0,t.jsxs)(W,{href:e.link,target:"_blank",children:["View Project ",(0,t.jsx)(O.ExternalLink,{size:14})]})]},r))})]}),e.stacks&&(0,t.jsx)(B,{children:e.stacks.map(e=>(0,t.jsx)("span",{children:e},e))})]})})]})},X=({data:e})=>(0,t.jsx)(c.Section,{children:(0,t.jsxs)(c.Container,{children:[(0,t.jsxs)("div",{style:{textAlign:"center",marginBottom:"4rem"},children:[(0,t.jsx)(s.motion.h2,{style:{fontSize:"3rem",fontWeight:800,letterSpacing:"-1px"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Professional Journey"}),(0,t.jsx)(s.motion.p,{style:{color:"var(--secondary)",fontSize:"1.2rem",marginTop:"1rem"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},children:"8 years of delivering high-impact solutions for enterprise clients."})]}),(0,t.jsx)("div",{children:e?.map((e,r)=>(0,t.jsx)(G,{exp:e},r))})]})}),Y=o.default.div.withConfig({displayName:"Strength__StrengthGrid",componentId:"sc-1d2b9225-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 4rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,J=o.default.div.withConfig({displayName:"Strength__BarContainer",componentId:"sc-1d2b9225-1"})`
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--primary-light);
  }
`,Z=o.default.div.withConfig({displayName:"Strength__LabelRow",componentId:"sc-1d2b9225-2"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  h4 { font-size: 1.1rem; color: var(--foreground); }
  span { font-weight: 800; color: var(--primary); font-size: 1.1rem; }
`,ee=o.default.div.withConfig({displayName:"Strength__BarTrack",componentId:"sc-1d2b9225-3"})`
  height: 12px;
  background: var(--accent);
  border-radius: 100px;
  overflow: hidden;
  border: 1px solid rgba(139, 92, 246, 0.1);
`,et=(0,o.default)(s.motion.div).withConfig({displayName:"Strength__BarFill",componentId:"sc-1d2b9225-4"})`
  height: 100%;
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%);
  border-radius: 100px;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.2);
`,er=o.default.div.withConfig({displayName:"Strength__Header",componentId:"sc-1d2b9225-5"})`
  text-align: center;
`,ei=({label:e,value:r,render:i})=>(0,t.jsxs)(J,{children:[(0,t.jsxs)(Z,{children:[(0,t.jsx)("h4",{children:e}),i(r)]}),(0,t.jsx)(ee,{children:(0,t.jsx)(et,{initial:{width:0},whileInView:{width:`${r}%`},transition:{duration:1.5,ease:"easeOut"},viewport:{once:!0}})})]}),en=({data:e})=>{let r=e?.slice(0,12)||[];return(0,t.jsx)(c.Section,{style:{background:"var(--accent)",position:"relative"},children:(0,t.jsxs)(c.Container,{children:[(0,t.jsxs)(er,{children:[(0,t.jsx)(s.motion.h2,{style:{fontSize:"3rem",fontWeight:800,letterSpacing:"-1px"},initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},children:"Core Competencies"}),(0,t.jsxs)(s.motion.p,{style:{color:"var(--secondary)",fontSize:"1.2rem",marginTop:"1rem",maxWidth:"600px",margin:"1rem auto 0"},initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.2},viewport:{once:!0},children:["Demonstrating expertise through ",(0,t.jsx)("strong",{children:"Design Patterns"})," for granular UI control and api solutions."]})]}),(0,t.jsx)(Y,{children:r.map((e,r)=>(0,t.jsx)(ei,{label:e.name,value:e.level,render:e=>(0,t.jsxs)("span",{children:[e,"%"]})},r))})]})})};var ea=e.i(37727),eo=e.i(42009);let es=(0,u.default)("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),el=o.default.div.withConfig({displayName:"Certificates__CertGrid",componentId:"sc-5dfec564-0"})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
`,ec=(0,o.default)(s.motion.div).withConfig({displayName:"Certificates__CertCard",componentId:"sc-5dfec564-1"})`
  background: white;
  border: 1px solid var(--border);
  border-radius: 2rem;
  overflow: hidden;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  position: relative;
  
  &:hover {
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-light);
  }
`,ed=o.default.div.withConfig({displayName:"Certificates__ImageWrapper",componentId:"sc-5dfec564-2"})`
  position: relative;
  height: 220px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${ec}:hover & img {
    transform: scale(1.1);
  }
`,eu=o.default.div.withConfig({displayName:"Certificates__Overlay",componentId:"sc-5dfec564-3"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(139, 92, 246, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;

  ${ec}:hover & {
    opacity: 1;
  }
`,eh=o.default.div.withConfig({displayName:"Certificates__CertInfo",componentId:"sc-5dfec564-4"})`
  padding: 1.75rem;
  
  .badge {
    background: var(--accent);
    color: var(--primary);
    padding: 0.3rem 0.8rem;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 800;
    display: inline-block;
    margin-bottom: 1rem;
    border: 1px solid var(--border);
  }

  h4 {
    font-size: 1.25rem;
    color: var(--foreground);
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  p {
    color: var(--secondary);
    font-size: 0.95rem;
    font-weight: 500;
  }
`,ep=(0,o.default)(s.motion.div).withConfig({displayName:"Certificates__ModalBackdrop",componentId:"sc-5dfec564-5"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`,ef=(0,o.default)(s.motion.div).withConfig({displayName:"Certificates__ModalContainer",componentId:"sc-5dfec564-6"})`
  background: white;
  width: 100%;
  max-width: 900px;
  border-radius: 2.5rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
`,em=o.default.button.withConfig({displayName:"Certificates__CloseButton",componentId:"sc-5dfec564-7"})`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--foreground);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  z-index: 10;
  
  &:hover {
    transform: rotate(90deg);
    color: var(--error);
  }
`,eg=({data:e})=>{let[r,i]=(0,a.useState)(null);return(0,t.jsxs)(c.Section,{children:[(0,t.jsxs)(c.Container,{children:[(0,t.jsxs)("div",{style:{textAlign:"center"},children:[(0,t.jsx)(s.motion.h2,{style:{fontSize:"3rem",fontWeight:800},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Verified Expertise"}),(0,t.jsx)(s.motion.p,{style:{color:"var(--secondary)",fontSize:"1.2rem",marginTop:"1rem"},initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.2},viewport:{once:!0},children:"A collection of certifications and honors validating technical proficiency."})]}),(0,t.jsx)(el,{children:e?.map((e,r)=>(0,t.jsxs)(ec,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},transition:{delay:.1*r},viewport:{once:!0},onClick:()=>i(e),children:[(0,t.jsxs)(ed,{children:[(0,t.jsx)("img",{src:e.image,alt:e.title}),(0,t.jsx)(eu,{children:(0,t.jsx)(es,{size:32})})]}),(0,t.jsxs)(eh,{children:[(0,t.jsx)("span",{className:"badge",children:e.issuer}),(0,t.jsx)("h4",{children:e.title}),(0,t.jsx)("p",{children:e.date})]})]},e.id))})]}),(0,t.jsx)(l.AnimatePresence,{children:r&&(0,t.jsx)(ep,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>i(null),children:(0,t.jsxs)(ef,{initial:{scale:.8,y:50,opacity:0},animate:{scale:1,y:0,opacity:1},exit:{scale:.8,y:50,opacity:0},onClick:e=>e.stopPropagation(),children:[(0,t.jsx)(em,{onClick:()=>i(null),children:(0,t.jsx)(ea.X,{size:24})}),(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(400px, 1fr) 1.2fr",gap:"0"},children:[(0,t.jsx)("div",{style:{height:"500px"},children:(0,t.jsx)("img",{src:r.image,alt:r.title,style:{width:"100%",height:"100%",objectFit:"cover"}})}),(0,t.jsxs)("div",{style:{padding:"4rem 3rem",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,t.jsx)(eo.Award,{size:60,style:{color:"var(--primary)",marginBottom:"2rem"}}),(0,t.jsx)("h3",{style:{fontSize:"2rem",marginBottom:"1rem",lineHeight:"1.2"},children:r.title}),(0,t.jsxs)("p",{style:{color:"var(--secondary)",fontSize:"1.1rem",marginBottom:"2.5rem",lineHeight:"1.6"},children:["Successfully verified and issued by ",(0,t.jsx)("strong",{children:r.issuer})," in ",r.date,". This credential recognizes advanced proficiency in architectural design and technical implementation."]}),(0,t.jsxs)("button",{style:{background:"var(--foreground)",color:"white",padding:"1.25rem 2rem",borderRadius:"1rem",fontWeight:700,display:"flex",alignItems:"center",gap:"0.75rem",width:"fit-content"},children:["Verify Credential ",(0,t.jsx)(O.ExternalLink,{size:20})]})]})]})]})})})]})},ey=o.default.main.withConfig({displayName:"page__PageWrapper",componentId:"sc-d2cb3505-0"})`
  background: white;
  min-height: 100vh;
`,ex=o.default.div.withConfig({displayName:"page__LoadingOverlay",componentId:"sc-d2cb3505-1"})`
  position: fixed;
  inset: 0;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  font-weight: 900;
  color: var(--primary);
  font-size: 1.5rem;
  letter-spacing: -1px;
`;function ev(){let{data:e,isLoading:a}=(0,r.useQuery)({queryKey:["about"],queryFn:()=>fetch("/api/data?type=about").then(e=>e.json())}),{data:o,isLoading:s}=(0,r.useQuery)({queryKey:["skills"],queryFn:()=>fetch("/api/data?type=skills").then(e=>e.json())}),{data:l,isLoading:c}=(0,r.useQuery)({queryKey:["experience"],queryFn:()=>fetch("/api/data?type=experience").then(e=>e.json())}),{data:d,isLoading:u}=(0,r.useQuery)({queryKey:["certificates"],queryFn:()=>fetch("/api/data?type=certificates").then(e=>e.json())});return a||s||c||u?(0,t.jsx)(ex,{children:"SK Portfolio Initializing..."}):(0,t.jsxs)(ey,{children:[(0,t.jsx)(i.Navbar,{}),(0,t.jsx)(I,{data:e}),(0,t.jsx)("div",{id:"about",children:(0,t.jsx)(en,{data:o})}),(0,t.jsx)("div",{id:"skills",children:(0,t.jsx)(N,{data:o})}),(0,t.jsx)("div",{id:"experience",children:(0,t.jsx)(X,{data:l})}),(0,t.jsx)("div",{id:"certificates",children:(0,t.jsx)(eg,{data:d})}),(0,t.jsx)(n.Footer,{})]})}e.s(["default",()=>ev],52683)}]);