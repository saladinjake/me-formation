(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},66027,e=>{"use strict";let t;var r=e.i(75555),i=e.i(40143),n=e.i(86491),s=e.i(15823),a=e.i(93803),o=e.i(19273),l=e.i(80166),c=class extends s.Subscribable{constructor(e,t){super(),this.options=t,this.#e=e,this.#t=null,this.#r=(0,a.pendingThenable)(),this.bindMethods(),this.setOptions(t)}#e;#i=void 0;#n=void 0;#s=void 0;#a;#o;#r;#t;#l;#c;#d;#u;#h;#p;#f=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#i.addObserver(this),d(this.#i,this.options)?this.#m():this.updateResult(),this.#y())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return u(this.#i,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return u(this.#i,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#g(),this.#x(),this.#i.removeObserver(this)}setOptions(e){let t=this.options,r=this.#i;if(this.options=this.#e.defaultQueryOptions(e),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,o.resolveEnabled)(this.options.enabled,this.#i))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#v(),this.#i.setOptions(this.options),t._defaulted&&!(0,o.shallowEqualObjects)(this.options,t)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#i,observer:this});let i=this.hasListeners();i&&h(this.#i,r,this.options,t)&&this.#m(),this.updateResult(),i&&(this.#i!==r||(0,o.resolveEnabled)(this.options.enabled,this.#i)!==(0,o.resolveEnabled)(t.enabled,this.#i)||(0,o.resolveStaleTime)(this.options.staleTime,this.#i)!==(0,o.resolveStaleTime)(t.staleTime,this.#i))&&this.#b();let n=this.#j();i&&(this.#i!==r||(0,o.resolveEnabled)(this.options.enabled,this.#i)!==(0,o.resolveEnabled)(t.enabled,this.#i)||n!==this.#p)&&this.#w(n)}getOptimisticResult(e){var t,r;let i=this.#e.getQueryCache().build(this.#e,e),n=this.createResult(i,e);return t=this,r=n,(0,o.shallowEqualObjects)(t.getCurrentResult(),r)||(this.#s=n,this.#o=this.options,this.#a=this.#i.state),n}getCurrentResult(){return this.#s}trackResult(e,t){return new Proxy(e,{get:(e,r)=>(this.trackProp(r),t?.(r),"promise"===r&&(this.trackProp("data"),this.options.experimental_prefetchInRender||"pending"!==this.#r.status||this.#r.reject(Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(e,r))})}trackProp(e){this.#f.add(e)}getCurrentQuery(){return this.#i}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#e.defaultQueryOptions(e),r=this.#e.getQueryCache().build(this.#e,t);return r.fetch().then(()=>this.createResult(r,t))}fetch(e){return this.#m({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#s))}#m(e){this.#v();let t=this.#i.fetch(this.options,e);return e?.throwOnError||(t=t.catch(o.noop)),t}#b(){this.#g();let e=(0,o.resolveStaleTime)(this.options.staleTime,this.#i);if(o.isServer||this.#s.isStale||!(0,o.isValidTimeout)(e))return;let t=(0,o.timeUntilStale)(this.#s.dataUpdatedAt,e);this.#u=l.timeoutManager.setTimeout(()=>{this.#s.isStale||this.updateResult()},t+1)}#j(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#i):this.options.refetchInterval)??!1}#w(e){this.#x(),this.#p=e,!o.isServer&&!1!==(0,o.resolveEnabled)(this.options.enabled,this.#i)&&(0,o.isValidTimeout)(this.#p)&&0!==this.#p&&(this.#h=l.timeoutManager.setInterval(()=>{(this.options.refetchIntervalInBackground||r.focusManager.isFocused())&&this.#m()},this.#p))}#y(){this.#b(),this.#w(this.#j())}#g(){this.#u&&(l.timeoutManager.clearTimeout(this.#u),this.#u=void 0)}#x(){this.#h&&(l.timeoutManager.clearInterval(this.#h),this.#h=void 0)}createResult(e,t){let r,i=this.#i,s=this.options,l=this.#s,c=this.#a,u=this.#o,f=e!==i?e.state:this.#n,{state:m}=e,y={...m},g=!1;if(t._optimisticResults){let r=this.hasListeners(),a=!r&&d(e,t),o=r&&h(e,i,t,s);(a||o)&&(y={...y,...(0,n.fetchState)(m.data,e.options)}),"isRestoring"===t._optimisticResults&&(y.fetchStatus="idle")}let{error:x,errorUpdatedAt:v,status:b}=y;r=y.data;let j=!1;if(void 0!==t.placeholderData&&void 0===r&&"pending"===b){let e;l?.isPlaceholderData&&t.placeholderData===u?.placeholderData?(e=l.data,j=!0):e="function"==typeof t.placeholderData?t.placeholderData(this.#d?.state.data,this.#d):t.placeholderData,void 0!==e&&(b="success",r=(0,o.replaceData)(l?.data,e,t),g=!0)}if(t.select&&void 0!==r&&!j)if(l&&r===c?.data&&t.select===this.#l)r=this.#c;else try{this.#l=t.select,r=t.select(r),r=(0,o.replaceData)(l?.data,r,t),this.#c=r,this.#t=null}catch(e){this.#t=e}this.#t&&(x=this.#t,r=this.#c,v=Date.now(),b="error");let w="fetching"===y.fetchStatus,k="pending"===b,C="error"===b,R=k&&w,S=void 0!==r,_={status:b,fetchStatus:y.fetchStatus,isPending:k,isSuccess:"success"===b,isError:C,isInitialLoading:R,isLoading:R,data:r,dataUpdatedAt:y.dataUpdatedAt,error:x,errorUpdatedAt:v,failureCount:y.fetchFailureCount,failureReason:y.fetchFailureReason,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>f.dataUpdateCount||y.errorUpdateCount>f.errorUpdateCount,isFetching:w,isRefetching:w&&!k,isLoadingError:C&&!S,isPaused:"paused"===y.fetchStatus,isPlaceholderData:g,isRefetchError:C&&S,isStale:p(e,t),refetch:this.refetch,promise:this.#r,isEnabled:!1!==(0,o.resolveEnabled)(t.enabled,e)};if(this.options.experimental_prefetchInRender){let t=void 0!==_.data,r="error"===_.status&&!t,n=e=>{r?e.reject(_.error):t&&e.resolve(_.data)},s=()=>{n(this.#r=_.promise=(0,a.pendingThenable)())},o=this.#r;switch(o.status){case"pending":e.queryHash===i.queryHash&&n(o);break;case"fulfilled":(r||_.data!==o.value)&&s();break;case"rejected":r&&_.error===o.reason||s()}}return _}updateResult(){let e=this.#s,t=this.createResult(this.#i,this.options);if(this.#a=this.#i.state,this.#o=this.options,void 0!==this.#a.data&&(this.#d=this.#i),(0,o.shallowEqualObjects)(t,e))return;this.#s=t;let r=()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,r="function"==typeof t?t():t;if("all"===r||!r&&!this.#f.size)return!0;let i=new Set(r??this.#f);return this.options.throwOnError&&i.add("error"),Object.keys(this.#s).some(t=>this.#s[t]!==e[t]&&i.has(t))};this.#k({listeners:r()})}#v(){let e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#i)return;let t=this.#i;this.#i=e,this.#n=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#y()}#k(e){i.notifyManager.batch(()=>{e.listeners&&this.listeners.forEach(e=>{e(this.#s)}),this.#e.getQueryCache().notify({query:this.#i,type:"observerResultsUpdated"})})}};function d(e,t){return!1!==(0,o.resolveEnabled)(t.enabled,e)&&void 0===e.state.data&&("error"!==e.state.status||!1!==t.retryOnMount)||void 0!==e.state.data&&u(e,t,t.refetchOnMount)}function u(e,t,r){if(!1!==(0,o.resolveEnabled)(t.enabled,e)&&"static"!==(0,o.resolveStaleTime)(t.staleTime,e)){let i="function"==typeof r?r(e):r;return"always"===i||!1!==i&&p(e,t)}return!1}function h(e,t,r,i){return(e!==t||!1===(0,o.resolveEnabled)(i.enabled,e))&&(!r.suspense||"error"!==e.state.status)&&p(e,r)}function p(e,t){return!1!==(0,o.resolveEnabled)(t.enabled,e)&&e.isStaleByTime((0,o.resolveStaleTime)(t.staleTime,e))}e.i(47167);var f=e.i(71645),m=e.i(12598);e.i(43476);var y=f.createContext((t=!1,{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t})),g=f.createContext(!1);g.Provider;var x=(e,t,r)=>t.fetchOptimistic(e).catch(()=>{r.clearReset()});function v(e,t){return function(e,t,r){let n,s=f.useContext(g),a=f.useContext(y),l=(0,m.useQueryClient)(r),c=l.defaultQueryOptions(e);l.getDefaultOptions().queries?._experimental_beforeQuery?.(c);let d=l.getQueryCache().get(c.queryHash);if(c._optimisticResults=s?"isRestoring":"optimistic",c.suspense){let e=e=>"static"===e?e:Math.max(e??1e3,1e3),t=c.staleTime;c.staleTime="function"==typeof t?(...r)=>e(t(...r)):e(t),"number"==typeof c.gcTime&&(c.gcTime=Math.max(c.gcTime,1e3))}n=d?.state.error&&"function"==typeof c.throwOnError?(0,o.shouldThrowError)(c.throwOnError,[d.state.error,d]):c.throwOnError,(c.suspense||c.experimental_prefetchInRender||n)&&!a.isReset()&&(c.retryOnMount=!1),f.useEffect(()=>{a.clearReset()},[a]);let u=!l.getQueryCache().get(c.queryHash),[h]=f.useState(()=>new t(l,c)),p=h.getOptimisticResult(c),v=!s&&!1!==e.subscribed;if(f.useSyncExternalStore(f.useCallback(e=>{let t=v?h.subscribe(i.notifyManager.batchCalls(e)):o.noop;return h.updateResult(),t},[h,v]),()=>h.getCurrentResult(),()=>h.getCurrentResult()),f.useEffect(()=>{h.setOptions(c)},[c,h]),c?.suspense&&p.isPending)throw x(c,h,a);if((({result:e,errorResetBoundary:t,throwOnError:r,query:i,suspense:n})=>e.isError&&!t.isReset()&&!e.isFetching&&i&&(n&&void 0===e.data||(0,o.shouldThrowError)(r,[e.error,i])))({result:p,errorResetBoundary:a,throwOnError:c.throwOnError,query:d,suspense:c.suspense}))throw p.error;if(l.getDefaultOptions().queries?._experimental_afterQuery?.(c,p),c.experimental_prefetchInRender&&!o.isServer&&p.isLoading&&p.isFetching&&!s){let e=u?x(c,h,a):d?.promise;e?.catch(o.noop).finally(()=>{h.updateResult()})}return c.notifyOnChangeProps?p:h.trackResult(p)}(e,c,t)}e.s(["useQuery",()=>v],66027)},10980,e=>{"use strict";let t=(0,e.i(75254).default)("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);e.s(["BookOpen",()=>t],10980)},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={assign:function(){return l},searchParamsToUrlQuery:function(){return s},urlQueryToSearchParams:function(){return o}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});function s(e){let t={};for(let[r,i]of e.entries()){let e=t[r];void 0===e?t[r]=i:Array.isArray(e)?e.push(i):t[r]=[e,i]}return t}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[r,i]of Object.entries(e))if(Array.isArray(i))for(let e of i)t.append(r,a(e));else t.set(r,a(i));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,i]of r.entries())e.append(t,i)}return e}},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={formatUrl:function(){return o},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let s=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function o(e){let{auth:t,hostname:r}=e,i=e.protocol||"",n=e.pathname||"",o=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(s.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||a.test(i))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),o&&"#"!==o[0]&&(o="#"+o),d&&"?"!==d[0]&&(d="?"+d),n=n.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${i}${c}${n}${d}${o}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return o(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let i=e.r(71645);function n(e,t){let r=(0,i.useRef)(null),n=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=s(e,i)),t&&(n.current=s(t,i))},[e,t])}function s(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return b},NormalizeError:function(){return x},PageNotFoundError:function(){return v},SP:function(){return m},ST:function(){return y},WEB_VITALS:function(){return s},execOnce:function(){return a},getDisplayName:function(){return u},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return l},isResSent:function(){return h},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return w}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let s=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...i)=>(r||(r=!0,t=e(...i)),t)}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>o.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function d(){let{href:e}=window.location,t=c();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function h(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let i=await e.getInitialProps(t);if(r&&h(r))return i;if(!i)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${i}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return i}let m="u">typeof performance,y=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class x extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class b extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return s}});let i=e.r(18967),n=e.r(52817);function s(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return g},useLinkStatus:function(){return v}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let s=e.r(90809),a=e.r(43476),o=s._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),u=e.r(18967),h=e.r(5550);e.r(33525);let p=e.r(91949),f=e.r(73668),m=e.r(9396);function y(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function g(t){var r;let i,n,s,[l,g]=(0,o.useOptimistic)(p.IDLE_LINK_STATUS),v=(0,o.useRef)(null),{href:b,as:j,children:w,prefetch:k=null,passHref:C,replace:R,shallow:S,scroll:_,onClick:I,onMouseEnter:E,onTouchStart:P,legacyBehavior:T=!1,onNavigate:z,ref:M,unstable_dynamicOnHover:O,...N}=t;i=w,T&&("string"==typeof i||"number"==typeof i)&&(i=(0,a.jsx)("a",{children:i}));let L=o.default.useContext(c.AppRouterContext),Q=!1!==k,F=!1!==k?null===(r=k)||"auto"===r?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,{href:A,as:D}=o.default.useMemo(()=>{let e=y(b);return{href:e,as:j?y(j):e}},[b,j]);if(T){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=o.default.Children.only(i)}let q=T?n&&"object"==typeof n&&n.ref:M,U=o.default.useCallback(e=>(null!==L&&(v.current=(0,p.mountLinkInstance)(e,A,L,F,Q,g)),()=>{v.current&&((0,p.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,p.unmountPrefetchableInstance)(e)}),[Q,A,L,F,g]),B={ref:(0,d.useMergedRef)(U,q),onClick(t){T||"function"!=typeof I||I(t),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!L||t.defaultPrevented||function(t,r,i,n,s,a,l){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,f.isLocalURL)(r)){s&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);o.default.startTransition(()=>{u(i||r,s?"replace":"push",a??!0,n.current)})}}(t,A,D,v,R,_,z)},onMouseEnter(e){T||"function"!=typeof E||E(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&Q&&(0,p.onNavigationIntent)(e.currentTarget,!0===O)},onTouchStart:function(e){T||"function"!=typeof P||P(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&Q&&(0,p.onNavigationIntent)(e.currentTarget,!0===O)}};return(0,u.isAbsoluteUrl)(D)?B.href=D:T&&!C&&("a"!==n.type||"href"in n.props)||(B.href=(0,h.addBasePath)(D)),s=T?o.default.cloneElement(n,B):(0,a.jsx)("a",{...N,...B,children:i}),(0,a.jsx)(x.Provider,{value:l,children:s})}e.r(84508);let x=(0,o.createContext)(p.IDLE_LINK_STATUS),v=()=>(0,o.useContext)(x);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},42009,e=>{"use strict";let t=(0,e.i(75254).default)("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);e.s(["Award",()=>t],42009)},9912,e=>{"use strict";let t=(0,e.i(75254).default)("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);e.s(["Rocket",()=>t],9912)},43432,46897,e=>{"use strict";var t=e.i(75254);let r=(0,t.default)("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);e.s(["Phone",()=>r],43432);let i=(0,t.default)("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);e.s(["MapPin",()=>i],46897)},63488,e=>{"use strict";let t=(0,e.i(75254).default)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);e.s(["Mail",()=>t],63488)},14882,e=>{"use strict";var t=e.i(97053);let r=t.default.div.withConfig({displayName:"Container",componentId:"sc-b6d80c3-0"})`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`,i=t.default.section.withConfig({displayName:"Container__Section",componentId:"sc-b6d80c3-1"})`
  padding: 5rem 0;
  @media (max-width: ${e=>e.theme.breakpoints?.tablet||"768px"}) {
    padding: 3rem 0;
  }
`;e.s(["Container",0,r,"Section",0,i])},88653,e=>{"use strict";e.i(47167);var t=e.i(43476),r=e.i(71645),i=e.i(31178),n=e.i(47414),s=e.i(21476),a=r,o=e.i(37806);class l extends a.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c({children:e,isPresent:r}){let i=(0,a.useId)(),n=(0,a.useRef)(null),s=(0,a.useRef)({width:0,height:0,top:0,left:0}),{nonce:c}=(0,a.useContext)(o.MotionConfigContext);return(0,a.useInsertionEffect)(()=>{let{width:e,height:t,top:a,left:o}=s.current;if(r||!n.current||!e||!t)return;n.current.dataset.motionPopId=i;let l=document.createElement("style");return c&&(l.nonce=c),document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            top: ${a}px !important;
            left: ${o}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[r]),(0,t.jsx)(l,{isPresent:r,childRef:n,sizeRef:s,children:a.cloneElement(e,{ref:n})})}let d=({children:e,initial:i,isPresent:a,onExitComplete:o,custom:l,presenceAffectsLayout:d,mode:h})=>{let p=(0,n.useConstant)(u),f=(0,r.useId)(),m=(0,r.useCallback)(e=>{for(let t of(p.set(e,!0),p.values()))if(!t)return;o&&o()},[p,o]),y=(0,r.useMemo)(()=>({id:f,initial:i,isPresent:a,custom:l,onExitComplete:m,register:e=>(p.set(e,!1),()=>p.delete(e))}),d?[Math.random(),m]:[a,m]);return(0,r.useMemo)(()=>{p.forEach((e,t)=>p.set(t,!1))},[a]),r.useEffect(()=>{a||p.size||!o||o()},[a]),"popLayout"===h&&(e=(0,t.jsx)(c,{isPresent:a,children:e})),(0,t.jsx)(s.PresenceContext.Provider,{value:y,children:e})};function u(){return new Map}var h=e.i(64978);let p=e=>e.key||"";function f(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}var m=e.i(74008);let y=({children:e,custom:s,initial:a=!0,onExitComplete:o,presenceAffectsLayout:l=!0,mode:c="sync",propagate:u=!1})=>{let[y,g]=(0,h.usePresence)(u),x=(0,r.useMemo)(()=>f(e),[e]),v=u&&!y?[]:x.map(p),b=(0,r.useRef)(!0),j=(0,r.useRef)(x),w=(0,n.useConstant)(()=>new Map),[k,C]=(0,r.useState)(x),[R,S]=(0,r.useState)(x);(0,m.useIsomorphicLayoutEffect)(()=>{b.current=!1,j.current=x;for(let e=0;e<R.length;e++){let t=p(R[e]);v.includes(t)?w.delete(t):!0!==w.get(t)&&w.set(t,!1)}},[R,v.length,v.join("-")]);let _=[];if(x!==k){let e=[...x];for(let t=0;t<R.length;t++){let r=R[t],i=p(r);v.includes(i)||(e.splice(t,0,r),_.push(r))}"wait"===c&&_.length&&(e=_),S(f(e)),C(x);return}let{forceRender:I}=(0,r.useContext)(i.LayoutGroupContext);return(0,t.jsx)(t.Fragment,{children:R.map(e=>{let r=p(e),i=(!u||!!y)&&(x===R||v.includes(r));return(0,t.jsx)(d,{isPresent:i,initial:(!b.current||!!a)&&void 0,custom:i?void 0:s,presenceAffectsLayout:l,mode:c,onExitComplete:i?void 0:()=>{if(!w.has(r))return;w.set(r,!0);let e=!0;w.forEach(t=>{t||(e=!1)}),e&&(null==I||I(),S(j.current),u&&(null==g||g()),o&&o())},children:e},r)})})};e.s(["AnimatePresence",()=>y],88653)},92161,37727,64659,e=>{"use strict";var t=e.i(75254);let r=(0,t.default)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);e.s(["Menu",()=>r],92161);let i=(0,t.default)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["X",()=>i],37727);let n=(0,t.default)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["ChevronDown",()=>n],64659)},51348,e=>{"use strict";let t=(0,e.i(75254).default)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);e.s(["Linkedin",()=>t],51348)},50682,e=>{"use strict";let t=(0,e.i(75254).default)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);e.s(["Github",()=>t],50682)},3265,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(97053),n=e.i(46932),s=e.i(88653),a=e.i(92161),o=e.i(37727),l=e.i(64659),c=e.i(63488),d=e.i(51348),u=e.i(50682),h=e.i(14882),p=e.i(22016);let f=i.default.nav.withConfig({displayName:"Navbar__Nav",componentId:"sc-68b38fda-0"})`
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
`,y=(0,i.default)(p.default).withConfig({displayName:"Navbar__Logo",componentId:"sc-68b38fda-2"})`
  font-size: 1.75rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;
`,g=i.default.div.withConfig({displayName:"Navbar__NavLinks",componentId:"sc-68b38fda-3"})`
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
`,j=i.default.a.withConfig({displayName:"Navbar__DropdownItem",componentId:"sc-68b38fda-7"})`
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
`,w=i.default.button.withConfig({displayName:"Navbar__MenuButton",componentId:"sc-68b38fda-8"})`
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
`;e.s(["Navbar",0,()=>{let[e,i]=(0,r.useState)(!1),[n,h]=(0,r.useState)(!1),[R,S]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=()=>{h(window.scrollY>20)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let _=()=>i(!e);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f,{$scrolled:n,children:(0,t.jsxs)(m,{children:[(0,t.jsx)(y,{href:"/",children:"VJ Portfolio"}),(0,t.jsxs)(g,{children:[(0,t.jsx)(v,{href:"/",children:"Home"}),(0,t.jsx)(v,{href:"/projects",children:"Projects"}),(0,t.jsx)(v,{href:"/resume",children:"Resume"}),(0,t.jsxs)(x,{onMouseEnter:()=>S(!0),onMouseLeave:()=>S(!1),children:[(0,t.jsxs)(v,{href:"/contact",children:["Contact Me ",(0,t.jsx)(l.ChevronDown,{size:14,style:{transform:R?"rotate(180deg)":"none",transition:"transform 0.3s"}})]}),(0,t.jsx)(s.AnimatePresence,{children:R&&(0,t.jsxs)(b,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},transition:{duration:.2},children:[(0,t.jsxs)(j,{href:"mailto:saleem@example.com",children:[(0,t.jsx)(c.Mail,{size:18})," Email Me"]}),(0,t.jsxs)(j,{href:"https://linkedin.com/victor-juwa",target:"_blank",children:[(0,t.jsx)(d.Linkedin,{size:18})," LinkedIn"]}),(0,t.jsxs)(j,{href:"https://github.com/saladinjake",target:"_blank",children:[(0,t.jsx)(u.Github,{size:18})," GitHub"]})]})})]}),(0,t.jsx)(v,{href:"/admin",style:{background:"var(--primary)",color:"white",padding:"0.6rem 1.25rem",borderRadius:"100px",boxShadow:"0 4px 15px rgba(139, 92, 246, 0.3)"},children:"Admin"})]}),(0,t.jsx)(w,{onClick:_,children:e?(0,t.jsx)(o.X,{size:24}):(0,t.jsx)(a.Menu,{size:24})})]})}),(0,t.jsx)(s.AnimatePresence,{children:e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:_}),(0,t.jsxs)(k,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:30,stiffness:300},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[(0,t.jsx)(y,{href:"/",onClick:_,children:"SK."}),(0,t.jsx)("button",{onClick:_,style:{color:"var(--secondary)"},children:(0,t.jsx)(o.X,{size:28})})]}),(0,t.jsx)(v,{href:"/",onClick:_,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Home"}),(0,t.jsx)(v,{href:"/projects",onClick:_,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Projects"}),(0,t.jsx)(v,{href:"/resume",onClick:_,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Resume"}),(0,t.jsx)(v,{href:"/contact",onClick:_,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Contact Me"}),(0,t.jsx)("div",{style:{marginTop:"auto",display:"flex",flexDirection:"column",gap:"1rem"},children:(0,t.jsx)(p.default,{href:"/admin",onClick:_,style:{background:"var(--primary)",color:"white",padding:"1rem",borderRadius:"1rem",textAlign:"center",fontWeight:700,boxShadow:"0 10px 20px rgba(139, 92, 246, 0.2)"},children:"Admin Portal"})})]})]})})]})}])},78021,e=>{"use strict";let t=(0,e.i(75254).default)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);e.s(["Twitter",()=>t],78021)},58234,e=>{"use strict";var t=e.i(43476),r=e.i(97053),i=e.i(14882),n=e.i(22016),s=e.i(50682),a=e.i(51348),o=e.i(78021),l=e.i(63488);let c=(0,e.i(75254).default)("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),d=r.default.footer.withConfig({displayName:"Footer__FooterBase",componentId:"sc-3a28c693-0"})`
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
`;e.s(["Footer",0,()=>(0,t.jsx)(d,{children:(0,t.jsxs)(i.Container,{children:[(0,t.jsxs)(u,{children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(m,{href:"/",children:"SK Portfolio"}),(0,t.jsx)("p",{children:"Architecting high-performance digital experiences with focus on enterprise-grade scalability and robust design patterns."}),(0,t.jsxs)(f,{style:{marginTop:"2.5rem"},children:[(0,t.jsx)("a",{href:"#",children:(0,t.jsx)(a.Linkedin,{size:20})}),(0,t.jsx)("a",{href:"#",children:(0,t.jsx)(s.Github,{size:20})}),(0,t.jsx)("a",{href:"#",children:(0,t.jsx)(o.Twitter,{size:20})}),(0,t.jsx)("a",{href:"#",children:(0,t.jsx)(l.Mail,{size:20})})]})]}),(0,t.jsxs)(h,{children:[(0,t.jsx)("h4",{children:"Sitemap"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/",children:["Home ",(0,t.jsx)(c,{size:14,opacity:.5})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/projects",children:["Projects ",(0,t.jsx)(c,{size:14,opacity:.5})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/resume",children:["Resume ",(0,t.jsx)(c,{size:14,opacity:.5})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/contact",children:["Contact ",(0,t.jsx)(c,{size:14,opacity:.5})]})})]})]}),(0,t.jsxs)(h,{children:[(0,t.jsx)("h4",{children:"Technical"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"Next.js 15"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"TypeScript"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"Styled Components"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"Framer Motion"})})]})]}),(0,t.jsxs)(h,{children:[(0,t.jsx)("h4",{children:"Hire Me"}),(0,t.jsx)("p",{style:{marginBottom:"1.5rem"},children:"Currently open to senior engineering roles and technical consulting."}),(0,t.jsx)(n.default,{href:"/contact",style:{color:"var(--primary)",fontWeight:800,borderBottom:"2px solid var(--primary)"},children:"Start a Conversation"})]})]}),(0,t.jsxs)(p,{children:[(0,t.jsxs)("span",{children:["© ",new Date().getFullYear()," Saleem Kudra. All rights reserved."]}),(0,t.jsxs)("div",{style:{display:"flex",gap:"2rem"},children:[(0,t.jsx)("a",{href:"#",children:"Privacy Policy"}),(0,t.jsx)("a",{href:"#",children:"Terms of Service"})]})]})]})})],58234)},78917,e=>{"use strict";let t=(0,e.i(75254).default)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);e.s(["ExternalLink",()=>t],78917)},52008,e=>{"use strict";let t=(0,e.i(75254).default)("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);e.s(["Layers",()=>t],52008)},17630,e=>{"use strict";var t=e.i(43476),r=e.i(97053),i=e.i(46932),n=e.i(75254);let s=(0,n.default)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),a=(0,n.default)("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);var o=e.i(63488),l=e.i(43432),c=e.i(46897);let d=(0,n.default)("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]),u=(0,n.default)("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),h=(0,n.default)("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);var p=e.i(52008),f=e.i(10980),m=e.i(9912),y=e.i(42009),g=e.i(78917),x=e.i(14882),v=e.i(3265),b=e.i(58234),j=e.i(66027);let w=r.default.div.withConfig({displayName:"page__PageHero",componentId:"sc-21f69f60-0"})`
  padding: 12rem 0 4rem;
  background: var(--accent);
  text-align: center;
`,k=(0,r.default)(i.motion.div).withConfig({displayName:"page__ResumePaper",componentId:"sc-21f69f60-1"})`
  background: white;
  max-width: 1000px;
  margin: -4rem auto 8rem;
  padding: 5rem;
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--border);
  border-radius: 2rem;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin: -2rem 1rem 6rem;
  }
`,C=r.default.div.withConfig({displayName:"page__ResumeHeader",componentId:"sc-21f69f60-2"})`
  border-bottom: 3px solid var(--primary);
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`,R=r.default.div.withConfig({displayName:"page__ContactGrid",componentId:"sc-21f69f60-3"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  .item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.95rem;
    color: var(--secondary);
    font-weight: 600;
  }
`,S=r.default.h2.withConfig({displayName:"page__SectionTitle",componentId:"sc-21f69f60-4"})`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--primary);
  border-left: 4px solid var(--primary);
  padding-left: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`,_=r.default.div.withConfig({displayName:"page__ExpItem",componentId:"sc-21f69f60-5"})`
  margin-bottom: 3rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 5px;
    width: 12px;
    height: 12px;
    background: var(--primary-light);
    border-radius: 50%;
  }

  .title-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    
    h3 { font-size: 1.25rem; font-weight: 800; }
    span { font-weight: 700; color: var(--primary); }
  }
  
  .company {
    font-weight: 700;
    color: var(--secondary);
    font-size: 1.05rem;
    margin-bottom: 1rem;
    display: block;
  }
  
  ul {
    list-style: none;
    li {
      margin-bottom: 0.75rem;
      color: #334155;
      line-height: 1.6;
      display: flex;
      gap: 1rem;
      
      &::before { content: '•'; color: var(--primary); font-weight: 900; }
    }
  }
`,I=r.default.div.withConfig({displayName:"page__SkillBadgeGrid",componentId:"sc-21f69f60-6"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  
  span {
    background: var(--accent);
    color: var(--primary-dark);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.85rem;
    border: 1px solid var(--border);
  }
`,E=r.default.div.withConfig({displayName:"page__FloatingActions",componentId:"sc-21f69f60-7"})`
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
`,P=r.default.button.withConfig({displayName:"page__ActionBtn",componentId:"sc-21f69f60-8"})`
  width: 60px;
  height: 60px;
  background: white;
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border);
  
  &:hover {
    background: var(--primary);
    color: white;
    transform: scale(1.1);
  }
`;function T(){let{data:e,isLoading:r}=(0,j.useQuery)({queryKey:["about"],queryFn:()=>fetch("/api/data?type=about").then(e=>e.json())}),{data:n,isLoading:T}=(0,j.useQuery)({queryKey:["experience"],queryFn:()=>fetch("/api/data?type=experience").then(e=>e.json())}),{data:z,isLoading:M}=(0,j.useQuery)({queryKey:["skills"],queryFn:()=>fetch("/api/data?type=skills").then(e=>e.json())}),{data:O,isLoading:N}=(0,j.useQuery)({queryKey:["education"],queryFn:()=>fetch("/api/data?type=education").then(e=>e.json())}),{data:L,isLoading:Q}=(0,j.useQuery)({queryKey:["side_projects"],queryFn:()=>fetch("/api/data?type=side_projects").then(e=>e.json())}),{data:F,isLoading:A}=(0,j.useQuery)({queryKey:["certificates"],queryFn:()=>fetch("/api/data?type=certificates").then(e=>e.json())});return r||T||M||N||Q||A?null:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v.Navbar,{}),(0,t.jsx)(w,{children:(0,t.jsx)(x.Container,{children:(0,t.jsxs)(i.motion.div,{initial:{opacity:0},animate:{opacity:1},children:[(0,t.jsx)("span",{style:{background:"white",padding:"0.4rem 1rem",borderRadius:"100px",fontSize:"0.8rem",fontWeight:800,color:"var(--primary)",border:"1px solid var(--border)"},children:"Juwa Victor"}),(0,t.jsx)("h1",{style:{fontSize:"3.5rem",fontWeight:900,marginTop:"1.5rem",letterSpacing:"-1.5px"}})]})})}),(0,t.jsx)(x.Container,{children:(0,t.jsxs)(k,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[(0,t.jsxs)(C,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{style:{fontSize:"3rem",fontWeight:900,marginBottom:"0.5rem",letterSpacing:"-1px"},children:e.name}),(0,t.jsx)("h3",{style:{color:"var(--secondary)",fontSize:"1.4rem",fontWeight:600},children:e.title})]}),(0,t.jsxs)(R,{children:[(0,t.jsxs)("div",{className:"item",children:[(0,t.jsx)(o.Mail,{size:18})," ",e.email]}),(0,t.jsxs)("div",{className:"item",children:[(0,t.jsx)(l.Phone,{size:18})," ",e.phone]}),(0,t.jsxs)("div",{className:"item",children:[(0,t.jsx)(a,{size:18})," Link: victor-juwa.vercel.app"]}),(0,t.jsxs)("div",{className:"item",children:[(0,t.jsx)(c.MapPin,{size:18})," ",e.location]})]})]}),(0,t.jsxs)("div",{style:{marginBottom:"4rem"},children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(h,{size:24})," Professional Summary"]}),(0,t.jsx)("p",{style:{fontSize:"1.1rem",lineHeight:"1.8",color:"#334155"},children:e.bio})]}),(0,t.jsxs)("div",{style:{marginBottom:"4rem",paddingLeft:"2.5rem",borderLeft:"2px dashed var(--border)"},children:[(0,t.jsxs)(S,{style:{marginLeft:"-2.7rem"},children:[(0,t.jsx)(d,{size:24})," Experience"]}),n.map((e,r)=>(0,t.jsxs)(_,{children:[(0,t.jsxs)("div",{className:"title-row",children:[(0,t.jsx)("h3",{children:e.role}),(0,t.jsx)("span",{children:e.period})]}),(0,t.jsx)("span",{className:"company",children:e.company}),(0,t.jsx)("ul",{children:e.achievements?.map((e,r)=>(0,t.jsx)("li",{children:e},r))}),e.products&&e.products.length>0&&(0,t.jsxs)("div",{style:{marginTop:"1.5rem",paddingLeft:"1rem",borderLeft:"2px solid var(--accent)"},children:[(0,t.jsx)("h5",{style:{fontSize:"0.95rem",fontWeight:800,color:"var(--primary)",marginBottom:"0.75rem",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Delivered Milestones"}),(0,t.jsx)("div",{style:{display:"grid",gap:"1rem"},children:e.products.map((e,r)=>(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"0.25rem"},children:[(0,t.jsx)("span",{style:{fontWeight:700,fontSize:"0.95rem"},children:e.name}),e.link&&(0,t.jsxs)("a",{href:e.link,target:"_blank",style:{fontSize:"0.8rem",color:"var(--primary)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.25rem"},children:["View ",(0,t.jsx)(g.ExternalLink,{size:12})]})]}),(0,t.jsx)("p",{style:{fontSize:"0.9rem",color:"#475569",marginBottom:"0.5rem"},children:e.description}),(0,t.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.4rem"},children:e.techStack?.map(e=>(0,t.jsx)("span",{style:{fontSize:"0.7rem",padding:"0.15rem 0.5rem",background:"#f1f5f9",borderRadius:"4px",color:"#475569",fontWeight:600},children:e},e))})]},r))})]})]},r))]}),(0,t.jsxs)("div",{style:{marginBottom:"4rem",paddingLeft:"2.5rem",borderLeft:"2px dashed var(--border)"},children:[(0,t.jsxs)(S,{style:{marginLeft:"-2.7rem"},children:[(0,t.jsx)(f.BookOpen,{size:24})," Education"]}),O?.map((e,r)=>(0,t.jsxs)(_,{children:[(0,t.jsxs)("div",{className:"title-row",children:[(0,t.jsx)("h3",{children:e.degree}),(0,t.jsx)("span",{children:e.period})]}),(0,t.jsx)("span",{className:"company",children:e.school}),(0,t.jsx)("p",{style:{color:"#334155",lineHeight:"1.6"},children:e.description})]},r))]}),(0,t.jsxs)("div",{style:{marginBottom:"4rem"},children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(m.Rocket,{size:24})," Strategic Side Projects"]}),(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem"},children:L?.map((e,r)=>(0,t.jsxs)("div",{style:{padding:"1.5rem",background:"var(--accent)",borderRadius:"1rem",border:"1px solid var(--border)"},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.5rem"},children:[(0,t.jsx)("h4",{style:{fontWeight:800,color:"var(--primary-dark)"},children:e.title}),e.link&&(0,t.jsx)("a",{href:e.link,target:"_blank",style:{color:"var(--primary)"},children:(0,t.jsx)(g.ExternalLink,{size:16})})]}),(0,t.jsx)("p",{style:{fontSize:"0.9rem",color:"var(--secondary)",marginBottom:"1rem"},children:e.description}),(0,t.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:e.tech?.map(e=>(0,t.jsx)("span",{style:{fontSize:"0.7rem",fontWeight:800,background:"white",padding:"0.2rem 0.5rem",borderRadius:"4px",border:"1px solid var(--border)"},children:e},e))})]},r))})]}),(0,t.jsxs)("div",{style:{marginBottom:"4rem"},children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(y.Award,{size:24})," Professional Certifications"]}),(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"1.5rem"},children:F?.map((e,r)=>(0,t.jsxs)("div",{style:{textAlign:"center"},children:[(0,t.jsx)("div",{style:{width:"100%",aspectRatio:"4/3",background:"var(--accent)",borderRadius:"0.5rem",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"0.75rem",border:"1px solid var(--border)"},children:(0,t.jsx)(y.Award,{size:40,color:"var(--primary)",opacity:.3})}),(0,t.jsx)("h5",{style:{fontWeight:800,fontSize:"0.9rem"},children:e.title}),(0,t.jsxs)("p",{style:{fontSize:"0.8rem",color:"var(--secondary)"},children:[e.issuer," • ",e.date]})]},r))})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(p.Layers,{size:24})," Technical Arsenal"]}),(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3rem"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{style:{marginBottom:"1rem",fontWeight:800},children:"Core Technologies"}),(0,t.jsx)(I,{children:z.slice(0,10).map(e=>(0,t.jsx)("span",{children:e.name},e.name))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{style:{marginBottom:"1rem",fontWeight:800},children:"Primary Focus"}),(0,t.jsx)(I,{children:z.slice(10,20).map(e=>(0,t.jsx)("span",{children:e.name},e.name))})]})]})]})]})}),(0,t.jsxs)(E,{children:[(0,t.jsx)(P,{title:"Download PDF",children:(0,t.jsx)(s,{size:24})}),(0,t.jsx)(P,{title:"Share Profile",children:(0,t.jsx)(u,{size:24})})]}),(0,t.jsx)(b.Footer,{})]})}e.s(["default",()=>T],17630)}]);