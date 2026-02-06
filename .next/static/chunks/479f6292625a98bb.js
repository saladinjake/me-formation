(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},66027,e=>{"use strict";let t;var r=e.i(75555),i=e.i(40143),n=e.i(86491),s=e.i(15823),a=e.i(93803),o=e.i(19273),l=e.i(80166),c=class extends s.Subscribable{constructor(e,t){super(),this.options=t,this.#e=e,this.#t=null,this.#r=(0,a.pendingThenable)(),this.bindMethods(),this.setOptions(t)}#e;#i=void 0;#n=void 0;#s=void 0;#a;#o;#r;#t;#l;#c;#d;#u;#h;#p;#f=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#i.addObserver(this),d(this.#i,this.options)?this.#m():this.updateResult(),this.#g())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return u(this.#i,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return u(this.#i,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#y(),this.#x(),this.#i.removeObserver(this)}setOptions(e){let t=this.options,r=this.#i;if(this.options=this.#e.defaultQueryOptions(e),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,o.resolveEnabled)(this.options.enabled,this.#i))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#b(),this.#i.setOptions(this.options),t._defaulted&&!(0,o.shallowEqualObjects)(this.options,t)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#i,observer:this});let i=this.hasListeners();i&&h(this.#i,r,this.options,t)&&this.#m(),this.updateResult(),i&&(this.#i!==r||(0,o.resolveEnabled)(this.options.enabled,this.#i)!==(0,o.resolveEnabled)(t.enabled,this.#i)||(0,o.resolveStaleTime)(this.options.staleTime,this.#i)!==(0,o.resolveStaleTime)(t.staleTime,this.#i))&&this.#v();let n=this.#j();i&&(this.#i!==r||(0,o.resolveEnabled)(this.options.enabled,this.#i)!==(0,o.resolveEnabled)(t.enabled,this.#i)||n!==this.#p)&&this.#w(n)}getOptimisticResult(e){var t,r;let i=this.#e.getQueryCache().build(this.#e,e),n=this.createResult(i,e);return t=this,r=n,(0,o.shallowEqualObjects)(t.getCurrentResult(),r)||(this.#s=n,this.#o=this.options,this.#a=this.#i.state),n}getCurrentResult(){return this.#s}trackResult(e,t){return new Proxy(e,{get:(e,r)=>(this.trackProp(r),t?.(r),"promise"===r&&(this.trackProp("data"),this.options.experimental_prefetchInRender||"pending"!==this.#r.status||this.#r.reject(Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(e,r))})}trackProp(e){this.#f.add(e)}getCurrentQuery(){return this.#i}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#e.defaultQueryOptions(e),r=this.#e.getQueryCache().build(this.#e,t);return r.fetch().then(()=>this.createResult(r,t))}fetch(e){return this.#m({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#s))}#m(e){this.#b();let t=this.#i.fetch(this.options,e);return e?.throwOnError||(t=t.catch(o.noop)),t}#v(){this.#y();let e=(0,o.resolveStaleTime)(this.options.staleTime,this.#i);if(o.isServer||this.#s.isStale||!(0,o.isValidTimeout)(e))return;let t=(0,o.timeUntilStale)(this.#s.dataUpdatedAt,e);this.#u=l.timeoutManager.setTimeout(()=>{this.#s.isStale||this.updateResult()},t+1)}#j(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#i):this.options.refetchInterval)??!1}#w(e){this.#x(),this.#p=e,!o.isServer&&!1!==(0,o.resolveEnabled)(this.options.enabled,this.#i)&&(0,o.isValidTimeout)(this.#p)&&0!==this.#p&&(this.#h=l.timeoutManager.setInterval(()=>{(this.options.refetchIntervalInBackground||r.focusManager.isFocused())&&this.#m()},this.#p))}#g(){this.#v(),this.#w(this.#j())}#y(){this.#u&&(l.timeoutManager.clearTimeout(this.#u),this.#u=void 0)}#x(){this.#h&&(l.timeoutManager.clearInterval(this.#h),this.#h=void 0)}createResult(e,t){let r,i=this.#i,s=this.options,l=this.#s,c=this.#a,u=this.#o,f=e!==i?e.state:this.#n,{state:m}=e,g={...m},y=!1;if(t._optimisticResults){let r=this.hasListeners(),a=!r&&d(e,t),o=r&&h(e,i,t,s);(a||o)&&(g={...g,...(0,n.fetchState)(m.data,e.options)}),"isRestoring"===t._optimisticResults&&(g.fetchStatus="idle")}let{error:x,errorUpdatedAt:b,status:v}=g;r=g.data;let j=!1;if(void 0!==t.placeholderData&&void 0===r&&"pending"===v){let e;l?.isPlaceholderData&&t.placeholderData===u?.placeholderData?(e=l.data,j=!0):e="function"==typeof t.placeholderData?t.placeholderData(this.#d?.state.data,this.#d):t.placeholderData,void 0!==e&&(v="success",r=(0,o.replaceData)(l?.data,e,t),y=!0)}if(t.select&&void 0!==r&&!j)if(l&&r===c?.data&&t.select===this.#l)r=this.#c;else try{this.#l=t.select,r=t.select(r),r=(0,o.replaceData)(l?.data,r,t),this.#c=r,this.#t=null}catch(e){this.#t=e}this.#t&&(x=this.#t,r=this.#c,b=Date.now(),v="error");let w="fetching"===g.fetchStatus,C="pending"===v,R="error"===v,k=C&&w,_=void 0!==r,S={status:v,fetchStatus:g.fetchStatus,isPending:C,isSuccess:"success"===v,isError:R,isInitialLoading:k,isLoading:k,data:r,dataUpdatedAt:g.dataUpdatedAt,error:x,errorUpdatedAt:b,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>f.dataUpdateCount||g.errorUpdateCount>f.errorUpdateCount,isFetching:w,isRefetching:w&&!C,isLoadingError:R&&!_,isPaused:"paused"===g.fetchStatus,isPlaceholderData:y,isRefetchError:R&&_,isStale:p(e,t),refetch:this.refetch,promise:this.#r,isEnabled:!1!==(0,o.resolveEnabled)(t.enabled,e)};if(this.options.experimental_prefetchInRender){let t=void 0!==S.data,r="error"===S.status&&!t,n=e=>{r?e.reject(S.error):t&&e.resolve(S.data)},s=()=>{n(this.#r=S.promise=(0,a.pendingThenable)())},o=this.#r;switch(o.status){case"pending":e.queryHash===i.queryHash&&n(o);break;case"fulfilled":(r||S.data!==o.value)&&s();break;case"rejected":r&&S.error===o.reason||s()}}return S}updateResult(){let e=this.#s,t=this.createResult(this.#i,this.options);if(this.#a=this.#i.state,this.#o=this.options,void 0!==this.#a.data&&(this.#d=this.#i),(0,o.shallowEqualObjects)(t,e))return;this.#s=t;let r=()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,r="function"==typeof t?t():t;if("all"===r||!r&&!this.#f.size)return!0;let i=new Set(r??this.#f);return this.options.throwOnError&&i.add("error"),Object.keys(this.#s).some(t=>this.#s[t]!==e[t]&&i.has(t))};this.#C({listeners:r()})}#b(){let e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#i)return;let t=this.#i;this.#i=e,this.#n=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#g()}#C(e){i.notifyManager.batch(()=>{e.listeners&&this.listeners.forEach(e=>{e(this.#s)}),this.#e.getQueryCache().notify({query:this.#i,type:"observerResultsUpdated"})})}};function d(e,t){return!1!==(0,o.resolveEnabled)(t.enabled,e)&&void 0===e.state.data&&("error"!==e.state.status||!1!==t.retryOnMount)||void 0!==e.state.data&&u(e,t,t.refetchOnMount)}function u(e,t,r){if(!1!==(0,o.resolveEnabled)(t.enabled,e)&&"static"!==(0,o.resolveStaleTime)(t.staleTime,e)){let i="function"==typeof r?r(e):r;return"always"===i||!1!==i&&p(e,t)}return!1}function h(e,t,r,i){return(e!==t||!1===(0,o.resolveEnabled)(i.enabled,e))&&(!r.suspense||"error"!==e.state.status)&&p(e,r)}function p(e,t){return!1!==(0,o.resolveEnabled)(t.enabled,e)&&e.isStaleByTime((0,o.resolveStaleTime)(t.staleTime,e))}e.i(47167);var f=e.i(71645),m=e.i(12598);e.i(43476);var g=f.createContext((t=!1,{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t})),y=f.createContext(!1);y.Provider;var x=(e,t,r)=>t.fetchOptimistic(e).catch(()=>{r.clearReset()});function b(e,t){return function(e,t,r){let n,s=f.useContext(y),a=f.useContext(g),l=(0,m.useQueryClient)(r),c=l.defaultQueryOptions(e);l.getDefaultOptions().queries?._experimental_beforeQuery?.(c);let d=l.getQueryCache().get(c.queryHash);if(c._optimisticResults=s?"isRestoring":"optimistic",c.suspense){let e=e=>"static"===e?e:Math.max(e??1e3,1e3),t=c.staleTime;c.staleTime="function"==typeof t?(...r)=>e(t(...r)):e(t),"number"==typeof c.gcTime&&(c.gcTime=Math.max(c.gcTime,1e3))}n=d?.state.error&&"function"==typeof c.throwOnError?(0,o.shouldThrowError)(c.throwOnError,[d.state.error,d]):c.throwOnError,(c.suspense||c.experimental_prefetchInRender||n)&&!a.isReset()&&(c.retryOnMount=!1),f.useEffect(()=>{a.clearReset()},[a]);let u=!l.getQueryCache().get(c.queryHash),[h]=f.useState(()=>new t(l,c)),p=h.getOptimisticResult(c),b=!s&&!1!==e.subscribed;if(f.useSyncExternalStore(f.useCallback(e=>{let t=b?h.subscribe(i.notifyManager.batchCalls(e)):o.noop;return h.updateResult(),t},[h,b]),()=>h.getCurrentResult(),()=>h.getCurrentResult()),f.useEffect(()=>{h.setOptions(c)},[c,h]),c?.suspense&&p.isPending)throw x(c,h,a);if((({result:e,errorResetBoundary:t,throwOnError:r,query:i,suspense:n})=>e.isError&&!t.isReset()&&!e.isFetching&&i&&(n&&void 0===e.data||(0,o.shouldThrowError)(r,[e.error,i])))({result:p,errorResetBoundary:a,throwOnError:c.throwOnError,query:d,suspense:c.suspense}))throw p.error;if(l.getDefaultOptions().queries?._experimental_afterQuery?.(c,p),c.experimental_prefetchInRender&&!o.isServer&&p.isLoading&&p.isFetching&&!s){let e=u?x(c,h,a):d?.promise;e?.catch(o.noop).finally(()=>{h.updateResult()})}return c.notifyOnChangeProps?p:h.trackResult(p)}(e,c,t)}e.s(["useQuery",()=>b],66027)},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={assign:function(){return l},searchParamsToUrlQuery:function(){return s},urlQueryToSearchParams:function(){return o}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});function s(e){let t={};for(let[r,i]of e.entries()){let e=t[r];void 0===e?t[r]=i:Array.isArray(e)?e.push(i):t[r]=[e,i]}return t}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[r,i]of Object.entries(e))if(Array.isArray(i))for(let e of i)t.append(r,a(e));else t.set(r,a(i));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,i]of r.entries())e.append(t,i)}return e}},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={formatUrl:function(){return o},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let s=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function o(e){let{auth:t,hostname:r}=e,i=e.protocol||"",n=e.pathname||"",o=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(s.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||a.test(i))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),o&&"#"!==o[0]&&(o="#"+o),d&&"?"!==d[0]&&(d="?"+d),n=n.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${i}${c}${n}${d}${o}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return o(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let i=e.r(71645);function n(e,t){let r=(0,i.useRef)(null),n=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=s(e,i)),t&&(n.current=s(t,i))},[e,t])}function s(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={DecodeError:function(){return y},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return v},NormalizeError:function(){return x},PageNotFoundError:function(){return b},SP:function(){return m},ST:function(){return g},WEB_VITALS:function(){return s},execOnce:function(){return a},getDisplayName:function(){return u},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return l},isResSent:function(){return h},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return w}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let s=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...i)=>(r||(r=!0,t=e(...i)),t)}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>o.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function d(){let{href:e}=window.location,t=c();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function h(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let i=await e.getInitialProps(t);if(r&&h(r))return i;if(!i)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${i}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return i}let m="u">typeof performance,g=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class y extends Error{}class x extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return s}});let i=e.r(18967),n=e.r(52817);function s(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return y},useLinkStatus:function(){return b}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let s=e.r(90809),a=e.r(43476),o=s._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),u=e.r(18967),h=e.r(5550);e.r(33525);let p=e.r(91949),f=e.r(73668),m=e.r(9396);function g(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function y(t){var r;let i,n,s,[l,y]=(0,o.useOptimistic)(p.IDLE_LINK_STATUS),b=(0,o.useRef)(null),{href:v,as:j,children:w,prefetch:C=null,passHref:R,replace:k,shallow:_,scroll:S,onClick:I,onMouseEnter:E,onTouchStart:T,legacyBehavior:P=!1,onNavigate:O,ref:M,unstable_dynamicOnHover:N,...z}=t;i=w,P&&("string"==typeof i||"number"==typeof i)&&(i=(0,a.jsx)("a",{children:i}));let Q=o.default.useContext(c.AppRouterContext),L=!1!==C,F=!1!==C?null===(r=C)||"auto"===r?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,{href:D,as:A}=o.default.useMemo(()=>{let e=g(v);return{href:e,as:j?g(j):e}},[v,j]);if(P){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=o.default.Children.only(i)}let U=P?n&&"object"==typeof n&&n.ref:M,$=o.default.useCallback(e=>(null!==Q&&(b.current=(0,p.mountLinkInstance)(e,D,Q,F,L,y)),()=>{b.current&&((0,p.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,p.unmountPrefetchableInstance)(e)}),[L,D,Q,F,y]),q={ref:(0,d.useMergedRef)($,U),onClick(t){P||"function"!=typeof I||I(t),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!Q||t.defaultPrevented||function(t,r,i,n,s,a,l){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,f.isLocalURL)(r)){s&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);o.default.startTransition(()=>{u(i||r,s?"replace":"push",a??!0,n.current)})}}(t,D,A,b,k,S,O)},onMouseEnter(e){P||"function"!=typeof E||E(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),Q&&L&&(0,p.onNavigationIntent)(e.currentTarget,!0===N)},onTouchStart:function(e){P||"function"!=typeof T||T(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),Q&&L&&(0,p.onNavigationIntent)(e.currentTarget,!0===N)}};return(0,u.isAbsoluteUrl)(A)?q.href=A:P&&!R&&("a"!==n.type||"href"in n.props)||(q.href=(0,h.addBasePath)(A)),s=P?o.default.cloneElement(n,q):(0,a.jsx)("a",{...z,...q,children:i}),(0,a.jsx)(x.Provider,{value:l,children:s})}e.r(84508);let x=(0,o.createContext)(p.IDLE_LINK_STATUS),b=()=>(0,o.useContext)(x);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},63488,e=>{"use strict";let t=(0,e.i(75254).default)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);e.s(["Mail",()=>t],63488)},51348,e=>{"use strict";let t=(0,e.i(75254).default)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);e.s(["Linkedin",()=>t],51348)},78021,e=>{"use strict";let t=(0,e.i(75254).default)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);e.s(["Twitter",()=>t],78021)},50682,e=>{"use strict";let t=(0,e.i(75254).default)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);e.s(["Github",()=>t],50682)},14882,e=>{"use strict";var t=e.i(97053);let r=t.default.div.withConfig({displayName:"Container",componentId:"sc-b6d80c3-0"})`
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
        `),()=>{document.head.removeChild(l)}},[r]),(0,t.jsx)(l,{isPresent:r,childRef:n,sizeRef:s,children:a.cloneElement(e,{ref:n})})}let d=({children:e,initial:i,isPresent:a,onExitComplete:o,custom:l,presenceAffectsLayout:d,mode:h})=>{let p=(0,n.useConstant)(u),f=(0,r.useId)(),m=(0,r.useCallback)(e=>{for(let t of(p.set(e,!0),p.values()))if(!t)return;o&&o()},[p,o]),g=(0,r.useMemo)(()=>({id:f,initial:i,isPresent:a,custom:l,onExitComplete:m,register:e=>(p.set(e,!1),()=>p.delete(e))}),d?[Math.random(),m]:[a,m]);return(0,r.useMemo)(()=>{p.forEach((e,t)=>p.set(t,!1))},[a]),r.useEffect(()=>{a||p.size||!o||o()},[a]),"popLayout"===h&&(e=(0,t.jsx)(c,{isPresent:a,children:e})),(0,t.jsx)(s.PresenceContext.Provider,{value:g,children:e})};function u(){return new Map}var h=e.i(64978);let p=e=>e.key||"";function f(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}var m=e.i(74008);let g=({children:e,custom:s,initial:a=!0,onExitComplete:o,presenceAffectsLayout:l=!0,mode:c="sync",propagate:u=!1})=>{let[g,y]=(0,h.usePresence)(u),x=(0,r.useMemo)(()=>f(e),[e]),b=u&&!g?[]:x.map(p),v=(0,r.useRef)(!0),j=(0,r.useRef)(x),w=(0,n.useConstant)(()=>new Map),[C,R]=(0,r.useState)(x),[k,_]=(0,r.useState)(x);(0,m.useIsomorphicLayoutEffect)(()=>{v.current=!1,j.current=x;for(let e=0;e<k.length;e++){let t=p(k[e]);b.includes(t)?w.delete(t):!0!==w.get(t)&&w.set(t,!1)}},[k,b.length,b.join("-")]);let S=[];if(x!==C){let e=[...x];for(let t=0;t<k.length;t++){let r=k[t],i=p(r);b.includes(i)||(e.splice(t,0,r),S.push(r))}"wait"===c&&S.length&&(e=S),_(f(e)),R(x);return}let{forceRender:I}=(0,r.useContext)(i.LayoutGroupContext);return(0,t.jsx)(t.Fragment,{children:k.map(e=>{let r=p(e),i=(!u||!!g)&&(x===k||b.includes(r));return(0,t.jsx)(d,{isPresent:i,initial:(!v.current||!!a)&&void 0,custom:i?void 0:s,presenceAffectsLayout:l,mode:c,onExitComplete:i?void 0:()=>{if(!w.has(r))return;w.set(r,!0);let e=!0;w.forEach(t=>{t||(e=!1)}),e&&(null==I||I(),_(j.current),u&&(null==y||y()),o&&o())},children:e},r)})})};e.s(["AnimatePresence",()=>g],88653)},92161,37727,64659,e=>{"use strict";var t=e.i(75254);let r=(0,t.default)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);e.s(["Menu",()=>r],92161);let i=(0,t.default)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["X",()=>i],37727);let n=(0,t.default)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["ChevronDown",()=>n],64659)},3265,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(97053),n=e.i(46932),s=e.i(88653),a=e.i(92161),o=e.i(37727),l=e.i(64659),c=e.i(63488),d=e.i(51348),u=e.i(50682),h=e.i(14882),p=e.i(22016);let f=i.default.nav.withConfig({displayName:"Navbar__Nav",componentId:"sc-68b38fda-0"})`
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
`,b=(0,i.default)(p.default).withConfig({displayName:"Navbar__NavLink",componentId:"sc-68b38fda-5"})`
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
`,v=(0,i.default)(n.motion.div).withConfig({displayName:"Navbar__DropdownMenu",componentId:"sc-68b38fda-6"})`
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
`,C=(0,i.default)(n.motion.div).withConfig({displayName:"Navbar__MobileDrawer",componentId:"sc-68b38fda-9"})`
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
`,R=(0,i.default)(n.motion.div).withConfig({displayName:"Navbar__Overlay",componentId:"sc-68b38fda-10"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1000;
`;e.s(["Navbar",0,()=>{let[e,i]=(0,r.useState)(!1),[n,h]=(0,r.useState)(!1),[k,_]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=()=>{h(window.scrollY>20)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let S=()=>i(!e);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f,{$scrolled:n,children:(0,t.jsxs)(m,{children:[(0,t.jsx)(g,{href:"/",children:"VJ Portfolio"}),(0,t.jsxs)(y,{children:[(0,t.jsx)(b,{href:"/",children:"Home"}),(0,t.jsx)(b,{href:"/projects",children:"Projects"}),(0,t.jsx)(b,{href:"/resume",children:"Resume"}),(0,t.jsxs)(x,{onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),children:[(0,t.jsxs)(b,{href:"/contact",children:["Contact Me ",(0,t.jsx)(l.ChevronDown,{size:14,style:{transform:k?"rotate(180deg)":"none",transition:"transform 0.3s"}})]}),(0,t.jsx)(s.AnimatePresence,{children:k&&(0,t.jsxs)(v,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},transition:{duration:.2},children:[(0,t.jsxs)(j,{href:"mailto:saleem@example.com",children:[(0,t.jsx)(c.Mail,{size:18})," Email Me"]}),(0,t.jsxs)(j,{href:"https://linkedin.com/victor-juwa",target:"_blank",children:[(0,t.jsx)(d.Linkedin,{size:18})," LinkedIn"]}),(0,t.jsxs)(j,{href:"https://github.com/saladinjake",target:"_blank",children:[(0,t.jsx)(u.Github,{size:18})," GitHub"]})]})})]}),(0,t.jsx)(b,{href:"/admin",style:{background:"var(--primary)",color:"white",padding:"0.6rem 1.25rem",borderRadius:"100px",boxShadow:"0 4px 15px rgba(139, 92, 246, 0.3)"},children:"Admin"})]}),(0,t.jsx)(w,{onClick:S,children:e?(0,t.jsx)(o.X,{size:24}):(0,t.jsx)(a.Menu,{size:24})})]})}),(0,t.jsx)(s.AnimatePresence,{children:e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(R,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:S}),(0,t.jsxs)(C,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:30,stiffness:300},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[(0,t.jsx)(g,{href:"/",onClick:S,children:"SK."}),(0,t.jsx)("button",{onClick:S,style:{color:"var(--secondary)"},children:(0,t.jsx)(o.X,{size:28})})]}),(0,t.jsx)(b,{href:"/",onClick:S,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Home"}),(0,t.jsx)(b,{href:"/projects",onClick:S,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Projects"}),(0,t.jsx)(b,{href:"/resume",onClick:S,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Resume"}),(0,t.jsx)(b,{href:"/contact",onClick:S,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Contact Me"}),(0,t.jsx)("div",{style:{marginTop:"auto",display:"flex",flexDirection:"column",gap:"1rem"},children:(0,t.jsx)(p.default,{href:"/admin",onClick:S,style:{background:"var(--primary)",color:"white",padding:"1rem",borderRadius:"1rem",textAlign:"center",fontWeight:700,boxShadow:"0 10px 20px rgba(139, 92, 246, 0.2)"},children:"Admin Portal"})})]})]})})]})}])},58234,e=>{"use strict";var t=e.i(43476),r=e.i(97053),i=e.i(14882),n=e.i(22016),s=e.i(50682),a=e.i(51348),o=e.i(78021),l=e.i(63488);let c=(0,e.i(75254).default)("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),d=r.default.footer.withConfig({displayName:"Footer__FooterBase",componentId:"sc-3a28c693-0"})`
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
`;e.s(["Footer",0,()=>(0,t.jsx)(d,{children:(0,t.jsxs)(i.Container,{children:[(0,t.jsxs)(u,{children:[(0,t.jsxs)(h,{children:[(0,t.jsx)(m,{href:"/",children:"SK Portfolio"}),(0,t.jsx)("p",{children:"Architecting high-performance digital experiences with focus on enterprise-grade scalability and robust design patterns."}),(0,t.jsxs)(f,{style:{marginTop:"2.5rem"},children:[(0,t.jsx)("a",{href:"#",children:(0,t.jsx)(a.Linkedin,{size:20})}),(0,t.jsx)("a",{href:"#",children:(0,t.jsx)(s.Github,{size:20})}),(0,t.jsx)("a",{href:"#",children:(0,t.jsx)(o.Twitter,{size:20})}),(0,t.jsx)("a",{href:"#",children:(0,t.jsx)(l.Mail,{size:20})})]})]}),(0,t.jsxs)(h,{children:[(0,t.jsx)("h4",{children:"Sitemap"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/",children:["Home ",(0,t.jsx)(c,{size:14,opacity:.5})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/projects",children:["Projects ",(0,t.jsx)(c,{size:14,opacity:.5})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/resume",children:["Resume ",(0,t.jsx)(c,{size:14,opacity:.5})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/contact",children:["Contact ",(0,t.jsx)(c,{size:14,opacity:.5})]})})]})]}),(0,t.jsxs)(h,{children:[(0,t.jsx)("h4",{children:"Technical"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"Next.js 15"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"TypeScript"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"Styled Components"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"Framer Motion"})})]})]}),(0,t.jsxs)(h,{children:[(0,t.jsx)("h4",{children:"Hire Me"}),(0,t.jsx)("p",{style:{marginBottom:"1.5rem"},children:"Currently open to senior engineering roles and technical consulting."}),(0,t.jsx)(n.default,{href:"/contact",style:{color:"var(--primary)",fontWeight:800,borderBottom:"2px solid var(--primary)"},children:"Start a Conversation"})]})]}),(0,t.jsxs)(p,{children:[(0,t.jsxs)("span",{children:["© ",new Date().getFullYear()," Saleem Kudra. All rights reserved."]}),(0,t.jsxs)("div",{style:{display:"flex",gap:"2rem"},children:[(0,t.jsx)("a",{href:"#",children:"Privacy Policy"}),(0,t.jsx)("a",{href:"#",children:"Terms of Service"})]})]})]})})],58234)},43432,46897,e=>{"use strict";var t=e.i(75254);let r=(0,t.default)("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);e.s(["Phone",()=>r],43432);let i=(0,t.default)("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);e.s(["MapPin",()=>i],46897)},78299,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(97053),n=e.i(46932),s=e.i(63488),a=e.i(43432),o=e.i(46897),l=e.i(75254);let c=(0,l.default)("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),d=(0,l.default)("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);var u=e.i(51348),h=e.i(78021),p=e.i(50682),f=e.i(14882),m=e.i(3265),g=e.i(58234),y=e.i(66027);let x=i.default.div.withConfig({displayName:"page__PageHero",componentId:"sc-503b6c28-0"})`
  padding: 12rem 0 4rem;
  background: radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
  text-align: center;
`,b=i.default.div.withConfig({displayName:"page__ContactGrid",componentId:"sc-503b6c28-1"})`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
  margin-top: 4rem;
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`,v=i.default.div.withConfig({displayName:"page__InfoBox",componentId:"sc-503b6c28-2"})`
  .head {
    margin-bottom: 3rem;
    h2 { font-size: 2.5rem; font-weight: 900; margin-bottom: 1rem; }
    p { color: var(--secondary); font-size: 1.15rem; line-height: 1.6; }
  }
`,j=i.default.div.withConfig({displayName:"page__ContactCard",componentId:"sc-503b6c28-3"})`
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    border-color: var(--primary-light);
    box-shadow: var(--shadow-md);
  }

  .icon {
    width: 60px;
    height: 60px;
    background: var(--accent);
    color: var(--primary);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details {
    h4 { font-size: 0.9rem; text-transform: uppercase; color: var(--secondary); letter-spacing: 1px; margin-bottom: 0.25rem; }
    p { font-size: 1.15rem; font-weight: 700; color: var(--foreground); }
  }
`,w=(0,i.default)(n.motion.form).withConfig({displayName:"page__FormBox",componentId:"sc-503b6c28-4"})`
  background: white;
  padding: 4rem;
  border-radius: 2.5rem;
  box-shadow: var(--shadow-glass);
  border: 1px solid rgba(139, 92, 246, 0.1);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 576px) {
    padding: 2rem;
  }
`,C=i.default.div.withConfig({displayName:"page__InputGroup",componentId:"sc-503b6c28-5"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,R=i.default.div.withConfig({displayName:"page__Field",componentId:"sc-503b6c28-6"})`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  label {
    font-weight: 800;
    font-size: 0.9rem;
    color: var(--foreground);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  input, textarea {
    width: 100%;
    padding: 1.25rem;
    background: #f8fafc;
    border: 1px solid var(--border);
    border-radius: 1rem;
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.2s;

    &:focus {
      outline: none;
      background: white;
      border-color: var(--primary);
      box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);
    }
  }
`,k=i.default.button.withConfig({displayName:"page__SubmitButton",componentId:"sc-503b6c28-7"})`
  background: var(--primary);
  color: white;
  padding: 1.25rem;
  border-radius: 1.25rem;
  font-weight: 800;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
  margin-top: 1rem;

  &:hover {
    background: var(--primary-dark);
    transform: translateY(-3px);
  }
`,_=i.default.div.withConfig({displayName:"page__SocialStrip",componentId:"sc-503b6c28-8"})`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
  
  a {
    width: 50px;
    height: 50px;
    background: var(--foreground);
    color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    
    &:hover {
      background: var(--primary);
      transform: translateY(-5px);
    }
  }
`;function S(){let[e,i]=(0,r.useState)("idle"),{data:l,isLoading:S}=(0,y.useQuery)({queryKey:["about"],queryFn:()=>fetch("/api/data?type=about").then(e=>e.json())});return S?null:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.Navbar,{}),(0,t.jsx)(x,{children:(0,t.jsx)(f.Container,{children:(0,t.jsxs)(n.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,t.jsx)("span",{style:{color:"var(--primary)",fontWeight:800,textTransform:"uppercase",letterSpacing:"2px"},children:"Get In Touch"}),(0,t.jsxs)("h1",{style:{fontSize:"4rem",fontWeight:900,marginTop:"1rem",letterSpacing:"-2px"},children:["Let's Build Something ",(0,t.jsx)("span",{style:{color:"var(--primary)"},children:"Exceptional"})]})]})})}),(0,t.jsx)(f.Section,{children:(0,t.jsx)(f.Container,{children:(0,t.jsxs)(b,{children:[(0,t.jsxs)(v,{children:[(0,t.jsxs)("div",{className:"head",children:[(0,t.jsx)("h2",{children:"Contact Information"}),(0,t.jsx)("p",{children:"Whether you have a specific project inquiry or just want to discuss technical architecture, I am always open to high-impact conversations."})]}),(0,t.jsxs)(j,{children:[(0,t.jsx)("div",{className:"icon",children:(0,t.jsx)(s.Mail,{size:28})}),(0,t.jsxs)("div",{className:"details",children:[(0,t.jsx)("h4",{children:"Email Address"}),(0,t.jsx)("p",{children:l.email})]})]}),(0,t.jsxs)(j,{children:[(0,t.jsx)("div",{className:"icon",children:(0,t.jsx)(a.Phone,{size:28})}),(0,t.jsxs)("div",{className:"details",children:[(0,t.jsx)("h4",{children:"Direct Line"}),(0,t.jsx)("p",{children:l.phone})]})]}),(0,t.jsxs)(j,{children:[(0,t.jsx)("div",{className:"icon",children:(0,t.jsx)(o.MapPin,{size:28})}),(0,t.jsxs)("div",{className:"details",children:[(0,t.jsx)("h4",{children:"Headquarters"}),(0,t.jsx)("p",{children:l.location})]})]}),(0,t.jsxs)(_,{children:[(0,t.jsx)("a",{href:"https://linkedin.com",target:"_blank",children:(0,t.jsx)(u.Linkedin,{size:22})}),(0,t.jsx)("a",{href:"https://github.com",target:"_blank",children:(0,t.jsx)(p.Github,{size:22})}),(0,t.jsx)("a",{href:"https://twitter.com",target:"_blank",children:(0,t.jsx)(h.Twitter,{size:22})}),(0,t.jsx)("a",{href:"#",children:(0,t.jsx)(d,{size:22})})]})]}),(0,t.jsxs)(w,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{delay:.2},onSubmit:e=>{e.preventDefault(),i("sending"),setTimeout(()=>i("sent"),1500)},children:[(0,t.jsxs)(C,{children:[(0,t.jsxs)(R,{children:[(0,t.jsx)("label",{children:"First Name"}),(0,t.jsx)("input",{placeholder:"Jane",required:!0})]}),(0,t.jsxs)(R,{children:[(0,t.jsx)("label",{children:"Last Name"}),(0,t.jsx)("input",{placeholder:"Doe",required:!0})]})]}),(0,t.jsxs)(R,{children:[(0,t.jsx)("label",{children:"Professional Email"}),(0,t.jsx)("input",{type:"email",placeholder:"jane@company.com",required:!0})]}),(0,t.jsxs)(R,{children:[(0,t.jsx)("label",{children:"Project Details / Message"}),(0,t.jsx)("textarea",{rows:5,placeholder:"Tell me about your goals or technical challenges...",required:!0})]}),(0,t.jsxs)(k,{type:"submit",disabled:"idle"!==e,children:["idle"===e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c,{size:20})," Transmit Message"]}),"sending"===e&&"Transmitting...","sent"===e&&"Message Received ✓"]}),"sent"===e&&(0,t.jsx)(n.motion.p,{initial:{opacity:0},animate:{opacity:1},style:{color:"var(--success)",fontWeight:700,textAlign:"center"},children:"Thank you! I will respond to your inquiry within 24 hours."})]})]})})}),(0,t.jsx)(g.Footer,{})]})}e.s(["default",()=>S],78299)}]);