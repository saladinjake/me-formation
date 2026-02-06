(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},11126,e=>{"use strict";var t=e.i(97053),r=e.i(46932);let n=t.default.div.withConfig({displayName:"AdminUI__AdminLayoutWrapper",componentId:"sc-55d2a4cd-0"})`
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
  color: #1e293b;
`,a=t.default.main.withConfig({displayName:"AdminUI__MainContent",componentId:"sc-55d2a4cd-1"})`
  flex: 1;
  padding: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`,i=(0,t.default)(r.motion.div).withConfig({displayName:"AdminUI__FormCard",componentId:"sc-55d2a4cd-2"})`
  background: white;
  padding: 2.5rem;
  border-radius: 2rem;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
`,o=t.default.div.withConfig({displayName:"AdminUI__FormGroup",componentId:"sc-55d2a4cd-3"})`
  margin-bottom: 1.5rem;
  label { display: block; margin-bottom: 0.75rem; font-weight: 700; color: #334155; }
  input, textarea, select {
    width: 100%;
    padding: 1rem;
    border: 1px solid var(--border);
    border-radius: 0.75rem;
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.2s;
    &:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);
    }
  }
`,s=t.default.div.withConfig({displayName:"AdminUI__ListHeader",componentId:"sc-55d2a4cd-4"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,l=t.default.button.withConfig({displayName:"AdminUI__AddBtn",componentId:"sc-55d2a4cd-5"})`
  background: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  &:hover { background: var(--primary-dark); transform: translateY(-2px); }
`,d=t.default.div.withConfig({displayName:"AdminUI__ListItem",componentId:"sc-55d2a4cd-6"})`
  background: var(--accent);
  padding: 1.5rem;
  border-radius: 1.25rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  transition: all 0.2s;
  &:hover {
    border-color: var(--primary-light);
    background: white;
    box-shadow: var(--shadow-sm);
  }
  .info {
    h4 { font-size: 1.1rem; margin-bottom: 0.25rem; }
    p { font-size: 0.9rem; color: var(--secondary); }
  }
  .actions { display: flex; gap: 1rem; }
`,c=t.default.button.withConfig({displayName:"AdminUI__ActionBtn",componentId:"sc-55d2a4cd-7"})`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>"edit"===e.$type?"white":"#fee2e2"};
  color: ${e=>"edit"===e.$type?"var(--primary)":"#ef4444"};
  border: 1px solid ${e=>"edit"===e.$type?"var(--border)":"transparent"};
  &:hover { transform: scale(1.1); }
`,u=t.default.button.withConfig({displayName:"AdminUI__SaveBtn",componentId:"sc-55d2a4cd-8"})`
  background: var(--primary);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 100px;
  font-weight: 800;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
  margin-left: auto;
  &:hover { background: var(--primary-dark); transform: translateY(-3px); }
`,p=t.default.div.withConfig({displayName:"AdminUI__StatGrid",componentId:"sc-55d2a4cd-9"})`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }
`,f=t.default.div.withConfig({displayName:"AdminUI__StatCard",componentId:"sc-55d2a4cd-10"})`
  background: white;
  padding: 1.5rem;
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 1rem;
  .icon {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: var(--accent);
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text {
    h5 { font-size: 0.85rem; color: var(--secondary); margin-bottom: 0.25rem; }
    p { font-size: 1.25rem; font-weight: 800; }
  }
`;e.s(["ActionBtn",0,c,"AddBtn",0,l,"AdminLayoutWrapper",0,n,"FormCard",0,i,"FormGroup",0,o,"ListHeader",0,s,"ListItem",0,d,"MainContent",0,a,"SaveBtn",0,u,"StatCard",0,f,"StatGrid",0,p])},27025,e=>{"use strict";let t=(0,e.i(75254).default)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);e.s(["Folder",()=>t],27025)},10980,e=>{"use strict";let t=(0,e.i(75254).default)("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);e.s(["BookOpen",()=>t],10980)},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return l},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return s}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});function i(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function o(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,o(e));else t.set(r,o(n));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return d},urlObjectKeys:function(){return l}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let i=e.r(90809)._(e.r(98183)),o=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,n=e.protocol||"",a=e.pathname||"",s=e.hash||"",l=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:r&&(d=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(i.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||o.test(n))&&!1!==d?(d="//"+(d||""),a&&"/"!==a[0]&&(a="/"+a)):d||(d=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),a=a.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${n}${d}${a}${c}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return s(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return a}});let n=e.r(71645);function a(e,t){let r=(0,n.useRef)(null),a=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(r.current=i(e,n)),t&&(a.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return v},NormalizeError:function(){return b},PageNotFoundError:function(){return x},SP:function(){return m},ST:function(){return y},WEB_VITALS:function(){return i},execOnce:function(){return o},getDisplayName:function(){return u},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return p},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return k}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function d(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=d();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&p(r))return n;if(!n)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let m="u">typeof performance,y=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class b extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function k(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=e.r(18967),a=e.r(52817);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,a.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return g},useLinkStatus:function(){return x}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let i=e.r(90809),o=e.r(43476),s=i._(e.r(71645)),l=e.r(95057),d=e.r(8372),c=e.r(18581),u=e.r(18967),p=e.r(5550);e.r(33525);let f=e.r(91949),h=e.r(73668),m=e.r(9396);function y(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function g(t){var r;let n,a,i,[l,g]=(0,s.useOptimistic)(f.IDLE_LINK_STATUS),x=(0,s.useRef)(null),{href:v,as:w,children:k,prefetch:j=null,passHref:_,replace:C,shallow:P,scroll:I,onClick:O,onMouseEnter:S,onTouchStart:M,legacyBehavior:A=!1,onNavigate:$,ref:E,unstable_dynamicOnHover:N,...z}=t;n=k,A&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let L=s.default.useContext(d.AppRouterContext),T=!1!==j,U=!1!==j?null===(r=j)||"auto"===r?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,{href:R,as:F}=s.default.useMemo(()=>{let e=y(v);return{href:e,as:w?y(w):e}},[v,w]);if(A){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=s.default.Children.only(n)}let B=A?a&&"object"==typeof a&&a.ref:E,H=s.default.useCallback(e=>(null!==L&&(x.current=(0,f.mountLinkInstance)(e,R,L,U,T,g)),()=>{x.current&&((0,f.unmountLinkForCurrentNavigation)(x.current),x.current=null),(0,f.unmountPrefetchableInstance)(e)}),[T,R,L,U,g]),D={ref:(0,c.useMergedRef)(H,B),onClick(t){A||"function"!=typeof O||O(t),A&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!L||t.defaultPrevented||function(t,r,n,a,i,o,l){if("u">typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){i&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);s.default.startTransition(()=>{u(n||r,i?"replace":"push",o??!0,a.current)})}}(t,R,F,x,C,I,$)},onMouseEnter(e){A||"function"!=typeof S||S(e),A&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),L&&T&&(0,f.onNavigationIntent)(e.currentTarget,!0===N)},onTouchStart:function(e){A||"function"!=typeof M||M(e),A&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),L&&T&&(0,f.onNavigationIntent)(e.currentTarget,!0===N)}};return(0,u.isAbsoluteUrl)(F)?D.href=F:A&&!_&&("a"!==a.type||"href"in a.props)||(D.href=(0,p.addBasePath)(F)),i=A?s.default.cloneElement(a,D):(0,o.jsx)("a",{...z,...D,children:n}),(0,o.jsx)(b.Provider,{value:l,children:i})}e.r(84508);let b=(0,s.createContext)(f.IDLE_LINK_STATUS),x=()=>(0,s.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},42009,e=>{"use strict";let t=(0,e.i(75254).default)("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);e.s(["Award",()=>t],42009)},9912,e=>{"use strict";let t=(0,e.i(75254).default)("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);e.s(["Rocket",()=>t],9912)},78583,e=>{"use strict";let t=(0,e.i(75254).default)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",()=>t],78583)},41240,e=>{"use strict";let t=(0,e.i(75254).default)("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);e.s(["Lightbulb",()=>t],41240)},84614,e=>{"use strict";let t=(0,e.i(75254).default)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);e.s(["User",()=>t],84614)},88760,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(97053),a=e.i(46932),i=e.i(22016),o=e.i(18566),s=e.i(75254);let l=(0,s.default)("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);var d=e.i(27025),c=e.i(41240),u=e.i(84614),p=e.i(78583),f=e.i(42009);let h=(0,s.default)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),m=(0,s.default)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),y=(0,s.default)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),g=(0,s.default)("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);var b=e.i(10980),x=e.i(9912),v=e.i(11126);let w=(0,n.default)(a.motion.aside).withConfig({displayName:"layout__Sidebar",componentId:"sc-9cf59282-0"})`
  width: ${e=>e.$collapsed?"80px":"280px"};
  background: white;
  border-right: 1px solid var(--border);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: sticky;
  top: 0;
  height: 100vh;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  z-index: 100;
`,k=(0,n.default)(i.default).withConfig({displayName:"layout__SidebarItem",componentId:"sc-9cf59282-1"})`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1rem;
  border-radius: 0.75rem;
  width: 100%;
  text-align: left;
  font-weight: 600;
  color: ${e=>e.$active?"white":"var(--secondary)"};
  background: ${e=>e.$active?"var(--primary)":"transparent"};
  justify-content: ${e=>e.$collapsed?"center":"flex-start"};
  text-decoration: none;
  
  &:hover {
    background: ${e=>e.$active?"var(--primary-dark)":"var(--accent)"};
    color: ${e=>e.$active?"white":"var(--primary)"};
  }

  span {
    display: ${e=>e.$collapsed?"none":"block"};
    white-space: nowrap;
  }
`,j=n.default.header.withConfig({displayName:"layout__Header",componentId:"sc-9cf59282-2"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  .user-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: white;
    padding: 0.5rem 1rem;
    border-radius: 100px;
    border: 1px solid var(--border);
    box-shadow: var(--shadow-sm);
  }
`;function _({children:e}){let[n,a]=(0,r.useState)(!1),i=(0,o.usePathname)(),s=[{icon:(0,t.jsx)(l,{size:20}),label:"Dashboard",path:"/admin"},{icon:(0,t.jsx)(u.User,{size:20}),label:"About Me",path:"/admin/about"},{icon:(0,t.jsx)(c.Lightbulb,{size:20}),label:"Skills",path:"/admin/skills"},{icon:(0,t.jsx)(d.Folder,{size:20}),label:"Main Projects",path:"/admin/projects"},{icon:(0,t.jsx)(x.Rocket,{size:20}),label:"Side Projects",path:"/admin/side-projects"},{icon:(0,t.jsx)(p.FileText,{size:20}),label:"Experience",path:"/admin/experience"},{icon:(0,t.jsx)(b.BookOpen,{size:20}),label:"Education",path:"/admin/education"},{icon:(0,t.jsx)(f.Award,{size:20}),label:"Certificates",path:"/admin/certificates"}];return(0,t.jsxs)(v.AdminLayoutWrapper,{children:[(0,t.jsxs)(w,{$collapsed:n,animate:{width:n?80:280},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:n?"center":"space-between",padding:"0 0.5rem 2rem"},children:[!n&&(0,t.jsx)("h2",{style:{fontSize:"1.25rem",fontWeight:900,color:"var(--primary)"},children:"CONSOLE"}),(0,t.jsx)("button",{onClick:()=>a(!n),style:{color:"var(--secondary)"},children:n?(0,t.jsx)(m,{size:20}):(0,t.jsx)(h,{size:20})})]}),s.map(e=>(0,t.jsxs)(k,{href:e.path,$active:i===e.path,$collapsed:n,children:[e.icon,(0,t.jsx)("span",{children:e.label})]},e.path)),(0,t.jsx)("div",{style:{marginTop:"auto",borderTop:"1px solid var(--border)",paddingTop:"1rem"},children:(0,t.jsxs)(k,{href:"/",$active:!1,$collapsed:n,children:[(0,t.jsx)(y,{size:20}),(0,t.jsx)("span",{children:"Public Site"})]})})]}),(0,t.jsxs)(v.MainContent,{children:[(0,t.jsxs)(j,{children:[(0,t.jsx)("div",{style:{display:"flex",gap:"1.5rem",alignItems:"center"},children:(0,t.jsxs)("h1",{style:{fontSize:"1.75rem",fontWeight:900,letterSpacing:"-0.5px"},children:["Victor ",(0,t.jsx)("span",{style:{color:"var(--primary)"},children:"Console"})]})}),(0,t.jsxs)("div",{className:"user-info",children:[(0,t.jsx)(g,{size:18}),(0,t.jsx)("div",{style:{width:1,height:20,background:"var(--border)"}}),(0,t.jsx)("span",{style:{fontWeight:700},children:"Victor Juwa"}),(0,t.jsx)("img",{src:"https://ui-avatars.com/api/?name=Victor+Juwa&background=8B5CF6&color=fff",style:{width:35,height:35,borderRadius:"50%"}})]})]}),e]})]})}e.s(["default",()=>_],88760)}]);