(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},52008,e=>{"use strict";let t=(0,e.i(75254).default)("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);e.s(["Layers",()=>t],52008)},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={assign:function(){return l},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return s}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});function a(e){let t={};for(let[r,i]of e.entries()){let e=t[r];void 0===e?t[r]=i:Array.isArray(e)?e.push(i):t[r]=[e,i]}return t}function o(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,i]of Object.entries(e))if(Array.isArray(i))for(let e of i)t.append(r,o(e));else t.set(r,o(i));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,i]of r.entries())e.append(t,i)}return e}},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={formatUrl:function(){return s},formatWithValidation:function(){return d},urlObjectKeys:function(){return l}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let a=e.r(90809)._(e.r(98183)),o=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,i=e.protocol||"",n=e.pathname||"",s=e.hash||"",l=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:r&&(d=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==d?(d="//"+(d||""),n&&"/"!==n[0]&&(n="/"+n)):d||(d=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),n=n.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${i}${d}${n}${c}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return s(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let i=e.r(71645);function n(e,t){let r=(0,i.useRef)(null),n=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=a(e,i)),t&&(n.current=a(t,i))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return v},NormalizeError:function(){return y},PageNotFoundError:function(){return b},SP:function(){return m},ST:function(){return g},WEB_VITALS:function(){return a},execOnce:function(){return o},getDisplayName:function(){return p},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return u},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return w}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let t,r=!1;return(...i)=>(r||(r=!0,t=e(...i)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function d(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=d();return e.substring(t.length)}function p(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let i=await e.getInitialProps(t);if(r&&u(r))return i;if(!i)throw Object.defineProperty(Error(`"${p(e)}.getInitialProps()" should resolve to an object. But found "${i}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return i}let m="u">typeof performance,g=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class y extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let i=e.r(18967),n=e.r(52817);function a(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return x},useLinkStatus:function(){return b}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let a=e.r(90809),o=e.r(43476),s=a._(e.r(71645)),l=e.r(95057),d=e.r(8372),c=e.r(18581),p=e.r(18967),u=e.r(5550);e.r(33525);let f=e.r(91949),h=e.r(73668),m=e.r(9396);function g(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function x(t){var r;let i,n,a,[l,x]=(0,s.useOptimistic)(f.IDLE_LINK_STATUS),b=(0,s.useRef)(null),{href:v,as:j,children:w,prefetch:k=null,passHref:C,replace:_,shallow:S,scroll:N,onClick:P,onMouseEnter:z,onTouchStart:I,legacyBehavior:E=!1,onNavigate:L,ref:M,unstable_dynamicOnHover:T,...R}=t;i=w,E&&("string"==typeof i||"number"==typeof i)&&(i=(0,o.jsx)("a",{children:i}));let $=s.default.useContext(d.AppRouterContext),O=!1!==k,A=!1!==k?null===(r=k)||"auto"===r?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,{href:F,as:B}=s.default.useMemo(()=>{let e=g(v);return{href:e,as:j?g(j):e}},[v,j]);if(E){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=s.default.Children.only(i)}let U=E?n&&"object"==typeof n&&n.ref:M,D=s.default.useCallback(e=>(null!==$&&(b.current=(0,f.mountLinkInstance)(e,F,$,A,O,x)),()=>{b.current&&((0,f.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,f.unmountPrefetchableInstance)(e)}),[O,F,$,A,x]),W={ref:(0,c.useMergedRef)(D,U),onClick(t){E||"function"!=typeof P||P(t),E&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!$||t.defaultPrevented||function(t,r,i,n,a,o,l){if("u">typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){a&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(99781);s.default.startTransition(()=>{p(i||r,a?"replace":"push",o??!0,n.current)})}}(t,F,B,b,_,N,L)},onMouseEnter(e){E||"function"!=typeof z||z(e),E&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),$&&O&&(0,f.onNavigationIntent)(e.currentTarget,!0===T)},onTouchStart:function(e){E||"function"!=typeof I||I(e),E&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),$&&O&&(0,f.onNavigationIntent)(e.currentTarget,!0===T)}};return(0,p.isAbsoluteUrl)(B)?W.href=B:E&&!C&&("a"!==n.type||"href"in n.props)||(W.href=(0,u.addBasePath)(B)),a=E?s.default.cloneElement(n,W):(0,o.jsx)("a",{...R,...W,children:i}),(0,o.jsx)(y.Provider,{value:l,children:a})}e.r(84508);let y=(0,s.createContext)(f.IDLE_LINK_STATUS),b=()=>(0,s.useContext)(y);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},88653,e=>{"use strict";e.i(47167);var t=e.i(43476),r=e.i(71645),i=e.i(31178),n=e.i(47414),a=e.i(21476),o=r,s=e.i(37806);class l extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function d({children:e,isPresent:r}){let i=(0,o.useId)(),n=(0,o.useRef)(null),a=(0,o.useRef)({width:0,height:0,top:0,left:0}),{nonce:d}=(0,o.useContext)(s.MotionConfigContext);return(0,o.useInsertionEffect)(()=>{let{width:e,height:t,top:o,left:s}=a.current;if(r||!n.current||!e||!t)return;n.current.dataset.motionPopId=i;let l=document.createElement("style");return d&&(l.nonce=d),document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            top: ${o}px !important;
            left: ${s}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[r]),(0,t.jsx)(l,{isPresent:r,childRef:n,sizeRef:a,children:o.cloneElement(e,{ref:n})})}let c=({children:e,initial:i,isPresent:o,onExitComplete:s,custom:l,presenceAffectsLayout:c,mode:u})=>{let f=(0,n.useConstant)(p),h=(0,r.useId)(),m=(0,r.useCallback)(e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;s&&s()},[f,s]),g=(0,r.useMemo)(()=>({id:h,initial:i,isPresent:o,custom:l,onExitComplete:m,register:e=>(f.set(e,!1),()=>f.delete(e))}),c?[Math.random(),m]:[o,m]);return(0,r.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[o]),r.useEffect(()=>{o||f.size||!s||s()},[o]),"popLayout"===u&&(e=(0,t.jsx)(d,{isPresent:o,children:e})),(0,t.jsx)(a.PresenceContext.Provider,{value:g,children:e})};function p(){return new Map}var u=e.i(64978);let f=e=>e.key||"";function h(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}var m=e.i(74008);let g=({children:e,custom:a,initial:o=!0,onExitComplete:s,presenceAffectsLayout:l=!0,mode:d="sync",propagate:p=!1})=>{let[g,x]=(0,u.usePresence)(p),y=(0,r.useMemo)(()=>h(e),[e]),b=p&&!g?[]:y.map(f),v=(0,r.useRef)(!0),j=(0,r.useRef)(y),w=(0,n.useConstant)(()=>new Map),[k,C]=(0,r.useState)(y),[_,S]=(0,r.useState)(y);(0,m.useIsomorphicLayoutEffect)(()=>{v.current=!1,j.current=y;for(let e=0;e<_.length;e++){let t=f(_[e]);b.includes(t)?w.delete(t):!0!==w.get(t)&&w.set(t,!1)}},[_,b.length,b.join("-")]);let N=[];if(y!==k){let e=[...y];for(let t=0;t<_.length;t++){let r=_[t],i=f(r);b.includes(i)||(e.splice(t,0,r),N.push(r))}"wait"===d&&N.length&&(e=N),S(h(e)),C(y);return}let{forceRender:P}=(0,r.useContext)(i.LayoutGroupContext);return(0,t.jsx)(t.Fragment,{children:_.map(e=>{let r=f(e),i=(!p||!!g)&&(y===_||b.includes(r));return(0,t.jsx)(c,{isPresent:i,initial:(!v.current||!!o)&&void 0,custom:i?void 0:a,presenceAffectsLayout:l,mode:d,onExitComplete:i?void 0:()=>{if(!w.has(r))return;w.set(r,!0);let e=!0;w.forEach(t=>{t||(e=!1)}),e&&(null==P||P(),S(j.current),p&&(null==x||x()),s&&s())},children:e},r)})})};e.s(["AnimatePresence",()=>g],88653)},50682,e=>{"use strict";let t=(0,e.i(75254).default)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);e.s(["Github",()=>t],50682)},14882,e=>{"use strict";var t=e.i(97053);let r=t.default.div.withConfig({displayName:"Container",componentId:"sc-b6d80c3-0"})`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`,i=t.default.section.withConfig({displayName:"Container__Section",componentId:"sc-b6d80c3-1"})`
  padding: 5rem 0;
  @media (max-width: ${e=>e.theme.breakpoints?.tablet||"768px"}) {
    padding: 3rem 0;
  }
`;e.s(["Container",0,r,"Section",0,i])},92161,37727,64659,e=>{"use strict";var t=e.i(75254);let r=(0,t.default)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);e.s(["Menu",()=>r],92161);let i=(0,t.default)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["X",()=>i],37727);let n=(0,t.default)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["ChevronDown",()=>n],64659)},63488,e=>{"use strict";let t=(0,e.i(75254).default)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);e.s(["Mail",()=>t],63488)},51348,e=>{"use strict";let t=(0,e.i(75254).default)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);e.s(["Linkedin",()=>t],51348)},3265,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(97053),n=e.i(46932),a=e.i(88653),o=e.i(92161),s=e.i(37727),l=e.i(64659),d=e.i(63488),c=e.i(51348),p=e.i(50682),u=e.i(14882),f=e.i(22016);let h=i.default.nav.withConfig({displayName:"Navbar__Nav",componentId:"sc-68b38fda-0"})`
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
`,m=(0,i.default)(u.Container).withConfig({displayName:"Navbar__NavContent",componentId:"sc-68b38fda-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`,g=(0,i.default)(f.default).withConfig({displayName:"Navbar__Logo",componentId:"sc-68b38fda-2"})`
  font-size: 1.75rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;
`,x=i.default.div.withConfig({displayName:"Navbar__NavLinks",componentId:"sc-68b38fda-3"})`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`,y=i.default.div.withConfig({displayName:"Navbar__NavLinkWrapper",componentId:"sc-68b38fda-4"})`
  position: relative;
`,b=(0,i.default)(f.default).withConfig({displayName:"Navbar__NavLink",componentId:"sc-68b38fda-5"})`
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
`;e.s(["Navbar",0,()=>{let[e,i]=(0,r.useState)(!1),[n,u]=(0,r.useState)(!1),[_,S]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=()=>{u(window.scrollY>20)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let N=()=>i(!e);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h,{$scrolled:n,children:(0,t.jsxs)(m,{children:[(0,t.jsx)(g,{href:"/",children:"VJ Portfolio"}),(0,t.jsxs)(x,{children:[(0,t.jsx)(b,{href:"/",children:"Home"}),(0,t.jsx)(b,{href:"/projects",children:"Projects"}),(0,t.jsx)(b,{href:"/resume",children:"Resume"}),(0,t.jsxs)(y,{onMouseEnter:()=>S(!0),onMouseLeave:()=>S(!1),children:[(0,t.jsxs)(b,{href:"/contact",children:["Contact Me ",(0,t.jsx)(l.ChevronDown,{size:14,style:{transform:_?"rotate(180deg)":"none",transition:"transform 0.3s"}})]}),(0,t.jsx)(a.AnimatePresence,{children:_&&(0,t.jsxs)(v,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},transition:{duration:.2},children:[(0,t.jsxs)(j,{href:"mailto:saleem@example.com",children:[(0,t.jsx)(d.Mail,{size:18})," Email Me"]}),(0,t.jsxs)(j,{href:"https://linkedin.com/victor-juwa",target:"_blank",children:[(0,t.jsx)(c.Linkedin,{size:18})," LinkedIn"]}),(0,t.jsxs)(j,{href:"https://github.com/saladinjake",target:"_blank",children:[(0,t.jsx)(p.Github,{size:18})," GitHub"]})]})})]}),(0,t.jsx)(b,{href:"/admin",style:{background:"var(--primary)",color:"white",padding:"0.6rem 1.25rem",borderRadius:"100px",boxShadow:"0 4px 15px rgba(139, 92, 246, 0.3)"},children:"Admin"})]}),(0,t.jsx)(w,{onClick:N,children:e?(0,t.jsx)(s.X,{size:24}):(0,t.jsx)(o.Menu,{size:24})})]})}),(0,t.jsx)(a.AnimatePresence,{children:e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:N}),(0,t.jsxs)(k,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:30,stiffness:300},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[(0,t.jsx)(g,{href:"/",onClick:N,children:"SK."}),(0,t.jsx)("button",{onClick:N,style:{color:"var(--secondary)"},children:(0,t.jsx)(s.X,{size:28})})]}),(0,t.jsx)(b,{href:"/",onClick:N,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Home"}),(0,t.jsx)(b,{href:"/projects",onClick:N,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Projects"}),(0,t.jsx)(b,{href:"/resume",onClick:N,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Resume"}),(0,t.jsx)(b,{href:"/contact",onClick:N,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Contact Me"}),(0,t.jsx)("div",{style:{marginTop:"auto",display:"flex",flexDirection:"column",gap:"1rem"},children:(0,t.jsx)(f.default,{href:"/admin",onClick:N,style:{background:"var(--primary)",color:"white",padding:"1rem",borderRadius:"1rem",textAlign:"center",fontWeight:700,boxShadow:"0 10px 20px rgba(139, 92, 246, 0.2)"},children:"Admin Portal"})})]})]})})]})}])},78021,e=>{"use strict";let t=(0,e.i(75254).default)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);e.s(["Twitter",()=>t],78021)},58234,e=>{"use strict";var t=e.i(43476),r=e.i(97053),i=e.i(14882),n=e.i(22016),a=e.i(50682),o=e.i(51348),s=e.i(78021),l=e.i(63488);let d=(0,e.i(75254).default)("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),c=r.default.footer.withConfig({displayName:"Footer__FooterBase",componentId:"sc-3a28c693-0"})`
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
`,p=r.default.div.withConfig({displayName:"Footer__FooterGrid",componentId:"sc-3a28c693-1"})`
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
`,u=r.default.div.withConfig({displayName:"Footer__FooterCols",componentId:"sc-3a28c693-2"})`
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
`,f=r.default.div.withConfig({displayName:"Footer__Copyright",componentId:"sc-3a28c693-3"})`
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
`,h=r.default.div.withConfig({displayName:"Footer__SocialLinks",componentId:"sc-3a28c693-4"})`
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
`;e.s(["Footer",0,()=>(0,t.jsx)(c,{children:(0,t.jsxs)(i.Container,{children:[(0,t.jsxs)(p,{children:[(0,t.jsxs)(u,{children:[(0,t.jsx)(m,{href:"/",children:"SK Portfolio"}),(0,t.jsx)("p",{children:"Architecting high-performance digital experiences with focus on enterprise-grade scalability and robust design patterns."}),(0,t.jsxs)(h,{style:{marginTop:"2.5rem"},children:[(0,t.jsx)("a",{href:"#",children:(0,t.jsx)(o.Linkedin,{size:20})}),(0,t.jsx)("a",{href:"#",children:(0,t.jsx)(a.Github,{size:20})}),(0,t.jsx)("a",{href:"#",children:(0,t.jsx)(s.Twitter,{size:20})}),(0,t.jsx)("a",{href:"#",children:(0,t.jsx)(l.Mail,{size:20})})]})]}),(0,t.jsxs)(u,{children:[(0,t.jsx)("h4",{children:"Sitemap"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/",children:["Home ",(0,t.jsx)(d,{size:14,opacity:.5})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/projects",children:["Projects ",(0,t.jsx)(d,{size:14,opacity:.5})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/resume",children:["Resume ",(0,t.jsx)(d,{size:14,opacity:.5})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{href:"/contact",children:["Contact ",(0,t.jsx)(d,{size:14,opacity:.5})]})})]})]}),(0,t.jsxs)(u,{children:[(0,t.jsx)("h4",{children:"Technical"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"Next.js 15"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"TypeScript"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"Styled Components"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"Framer Motion"})})]})]}),(0,t.jsxs)(u,{children:[(0,t.jsx)("h4",{children:"Hire Me"}),(0,t.jsx)("p",{style:{marginBottom:"1.5rem"},children:"Currently open to senior engineering roles and technical consulting."}),(0,t.jsx)(n.default,{href:"/contact",style:{color:"var(--primary)",fontWeight:800,borderBottom:"2px solid var(--primary)"},children:"Start a Conversation"})]})]}),(0,t.jsxs)(f,{children:[(0,t.jsxs)("span",{children:["© ",new Date().getFullYear()," Saleem Kudra. All rights reserved."]}),(0,t.jsxs)("div",{style:{display:"flex",gap:"2rem"},children:[(0,t.jsx)("a",{href:"#",children:"Privacy Policy"}),(0,t.jsx)("a",{href:"#",children:"Terms of Service"})]})]})]})})],58234)},78917,e=>{"use strict";let t=(0,e.i(75254).default)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);e.s(["ExternalLink",()=>t],78917)},97625,e=>{"use strict";let t=(0,e.i(75254).default)("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);e.s(["Code2",()=>t],97625)},63936,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(97053),n=e.i(46932),a=e.i(88653);let o=(0,e.i(75254).default)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);var s=e.i(50682),l=e.i(78917),d=e.i(97625),c=e.i(52008),p=e.i(14882),u=e.i(3265),f=e.i(58234);let h=i.default.div.withConfig({displayName:"page__PageHeader",componentId:"sc-7368d8bf-0"})`
  padding: 12rem 0 6rem;
  background: radial-gradient(circle at 50% 100%, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
  text-align: center;
  border-bottom: 1px solid var(--border);
`,m=i.default.span.withConfig({displayName:"page__HeaderBadge",componentId:"sc-7368d8bf-1"})`
  background: var(--accent);
  color: var(--primary);
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  font-weight: 800;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`,g=i.default.div.withConfig({displayName:"page__SearchContainer",componentId:"sc-7368d8bf-2"})`
  max-width: 800px;
  margin: 3rem auto 0;
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`,x=i.default.div.withConfig({displayName:"page__SearchWrapper",componentId:"sc-7368d8bf-3"})`
  flex: 1;
  position: relative;
  
  input {
    width: 100%;
    padding: 1.25rem 1.5rem 1.25rem 3.5rem;
    border-radius: 1.25rem;
    border: 1px solid var(--border);
    font-size: 1.1rem;
    box-shadow: var(--shadow-md);
    transition: all 0.3s;
    background: white;
    &:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);
    }
  }
  
  svg {
    position: absolute;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--secondary);
  }
`,y=i.default.button.withConfig({displayName:"page__FilterBtn",componentId:"sc-7368d8bf-4"})`
  padding: 0 1.5rem;
  border-radius: 1.25rem;
  background: ${e=>e.$active?"var(--primary)":"white"};
  color: ${e=>e.$active?"white":"var(--secondary)"};
  border: 1px solid ${e=>e.$active?"var(--primary)":"var(--border)"};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  box-shadow: var(--shadow-sm);
  
  &:hover {
    background: ${e=>e.$active?"var(--primary-dark)":"var(--accent)"};
  }
`,b=i.default.div.withConfig({displayName:"page__Grid",componentId:"sc-7368d8bf-5"})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,v=(0,i.default)(n.motion.div).withConfig({displayName:"page__Card",componentId:"sc-7368d8bf-6"})`
  background: white;
  border-radius: 2.25rem;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px -12px rgba(139, 92, 246, 0.15);
    border-color: var(--primary-light);
  }
`,j=i.default.div.withConfig({displayName:"page__CardImage",componentId:"sc-7368d8bf-7"})`
  position: relative;
  height: 240px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${v}:hover & img { transform: scale(1.1); }
  
  .complexity {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    padding: 0.5rem 1rem;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 800;
    color: var(--primary);
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
`,w=i.default.div.withConfig({displayName:"page__CardBody",componentId:"sc-7368d8bf-8"})`
  padding: 2.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    font-weight: 800;
    letter-spacing: -0.5px;
  }

  p {
    color: var(--secondary);
    line-height: 1.6;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
`,k=i.default.div.withConfig({displayName:"page__TagList",componentId:"sc-7368d8bf-9"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2rem;
  
  span {
    padding: 0.35rem 0.85rem;
    background: var(--accent);
    color: var(--primary);
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 700;
  }
`,C=i.default.div.withConfig({displayName:"page__LinkRow",componentId:"sc-7368d8bf-10"})`
  display: flex;
  gap: 1.5rem;
  margin-top: auto;
  
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 800;
    font-size: 0.9rem;
    color: var(--foreground);
    
    &:hover { color: var(--primary); }
  }
`;function _(){let[e,i]=(0,r.useState)([]),[_,S]=(0,r.useState)([]),[N,P]=(0,r.useState)([]),[z,I]=(0,r.useState)(""),[E,L]=(0,r.useState)("All");return(0,r.useEffect)(()=>{fetch("/api/data?type=projects").then(e=>e.json()).then(e=>{S(e),P(e)}),fetch("/api/data?type=side_projects").then(e=>e.json()).then(e=>i(e))},[]),(0,r.useEffect)(()=>{let e=_.filter(e=>e.title.toLowerCase().includes(z.toLowerCase())||e.stacks.some(e=>e.toLowerCase().includes(z.toLowerCase())));"All"!==E&&(e=e.filter(e=>e.complexity===E)),P(e)},[z,_,E]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.Navbar,{}),(0,t.jsx)(h,{children:(0,t.jsxs)(p.Container,{children:[(0,t.jsxs)(n.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,t.jsx)(m,{children:"Portfolio Repository"}),(0,t.jsxs)("h1",{style:{fontSize:"4rem",fontWeight:900,marginTop:"1.5rem",letterSpacing:"-2px"},children:["My Technical ",(0,t.jsx)("span",{style:{color:"var(--primary)"},children:"Projects"})]}),(0,t.jsx)("p",{style:{color:"var(--secondary)",fontSize:"1.2rem",marginTop:"1rem",maxWidth:"600px",margin:"1rem auto 0"},children:"Exploring the boundary between performance and design through enterprise-grade architecture."})]}),(0,t.jsxs)(g,{children:[(0,t.jsxs)(x,{children:[(0,t.jsx)(o,{size:24}),(0,t.jsx)("input",{placeholder:"Search by tech stack (e.g. Next.js, TypeScript)...",value:z,onChange:e=>I(e.target.value)})]}),(0,t.jsx)("div",{style:{display:"flex",gap:"0.5rem"},children:["All","High","Medium"].map(e=>(0,t.jsx)(y,{$active:E===e,onClick:()=>L(e),children:e},e))})]})]})}),(0,t.jsx)(p.Section,{children:(0,t.jsx)(p.Container,{children:(0,t.jsx)(a.AnimatePresence,{children:(0,t.jsx)(b,{children:N.map((e,r)=>(0,t.jsxs)(v,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.1*r},children:[(0,t.jsxs)(j,{children:[(0,t.jsx)("img",{src:e.image||"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600",alt:e.title}),(0,t.jsxs)("span",{className:"complexity",children:[e.complexity," Complexity"]})]}),(0,t.jsxs)(w,{children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1rem"},children:[(0,t.jsx)(d.Code2,{size:20,color:"var(--primary)"}),(0,t.jsx)("h3",{style:{margin:0},children:e.title})]}),(0,t.jsx)("p",{children:e.description}),(0,t.jsx)(k,{children:e.stacks?.map(e=>(0,t.jsx)("span",{children:e},e))}),(0,t.jsxs)(C,{children:[(0,t.jsxs)("a",{href:e.github,target:"_blank",children:[(0,t.jsx)(s.Github,{size:18})," Source"]}),(0,t.jsxs)("a",{href:e.liveLink,target:"_blank",children:[(0,t.jsx)(l.ExternalLink,{size:18})," Live Performance"]})]})]})]},e.title))})})})}),(0,t.jsx)(p.Section,{style:{background:"var(--accent)",paddingTop:"6rem",paddingBottom:"8rem"},children:(0,t.jsxs)(p.Container,{children:[(0,t.jsxs)("div",{style:{textAlign:"center",marginBottom:"4rem"},children:[(0,t.jsx)(m,{children:"Internal Labs"}),(0,t.jsxs)("h2",{style:{fontSize:"3rem",fontWeight:900,marginTop:"1rem",letterSpacing:"-1.5px"},children:["Side ",(0,t.jsx)("span",{style:{color:"var(--primary)"},children:"Projects"})]}),(0,t.jsx)("p",{style:{color:"var(--secondary)",marginTop:"0.5rem"},children:"Experimental builds and open source contributions."})]}),(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem"},children:e.map((e,r)=>(0,t.jsxs)(n.motion.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},style:{background:"white",padding:"2rem",borderRadius:"1.5rem",border:"1px solid var(--border)",display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,t.jsx)("div",{style:{background:"var(--accent)",width:50,height:50,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--primary)"},children:(0,t.jsx)(c.Layers,{size:24})}),(0,t.jsx)("h4",{style:{fontSize:"1.25rem",fontWeight:800},children:e.title}),(0,t.jsx)("p",{style:{color:"var(--secondary)",fontSize:"0.95rem",lineHeight:"1.6"},children:e.description}),(0,t.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"auto",paddingTop:"1rem"},children:e.tech?.map(e=>(0,t.jsx)("span",{style:{fontSize:"0.7rem",fontWeight:800,background:"var(--accent)",color:"var(--primary)",padding:"0.25rem 0.6rem",borderRadius:"4px"},children:e},e))}),(0,t.jsxs)("a",{href:e.link,target:"_blank",style:{marginTop:"1rem",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:700,fontSize:"0.9rem",color:"var(--primary)"},children:[(0,t.jsx)(s.Github,{size:16})," View Repository"]})]},r))})]})}),(0,t.jsx)(f.Footer,{})]})}e.s(["default",()=>_],63936)}]);