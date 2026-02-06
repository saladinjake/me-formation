module.exports=[38783,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].ReactServerDOMTurbopackClient},33217,a=>{"use strict";let b;var c=a.i(99745),d=a.i(18544),e=a.i(76644),f=a.i(33791),g=a.i(79715),h=a.i(42871),i=a.i(8361),j=class extends f.Subscribable{constructor(a,b){super(),this.options=b,this.#a=a,this.#b=null,this.#c=(0,g.pendingThenable)(),this.bindMethods(),this.setOptions(b)}#a;#d=void 0;#e=void 0;#f=void 0;#g;#h;#c;#b;#i;#j;#k;#l;#m;#n;#o=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#d.addObserver(this),k(this.#d,this.options)?this.#p():this.updateResult(),this.#q())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return l(this.#d,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return l(this.#d,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#r(),this.#s(),this.#d.removeObserver(this)}setOptions(a){let b=this.options,c=this.#d;if(this.options=this.#a.defaultQueryOptions(a),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,h.resolveEnabled)(this.options.enabled,this.#d))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#t(),this.#d.setOptions(this.options),b._defaulted&&!(0,h.shallowEqualObjects)(this.options,b)&&this.#a.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#d,observer:this});let d=this.hasListeners();d&&m(this.#d,c,this.options,b)&&this.#p(),this.updateResult(),d&&(this.#d!==c||(0,h.resolveEnabled)(this.options.enabled,this.#d)!==(0,h.resolveEnabled)(b.enabled,this.#d)||(0,h.resolveStaleTime)(this.options.staleTime,this.#d)!==(0,h.resolveStaleTime)(b.staleTime,this.#d))&&this.#u();let e=this.#v();d&&(this.#d!==c||(0,h.resolveEnabled)(this.options.enabled,this.#d)!==(0,h.resolveEnabled)(b.enabled,this.#d)||e!==this.#n)&&this.#w(e)}getOptimisticResult(a){var b,c;let d=this.#a.getQueryCache().build(this.#a,a),e=this.createResult(d,a);return b=this,c=e,(0,h.shallowEqualObjects)(b.getCurrentResult(),c)||(this.#f=e,this.#h=this.options,this.#g=this.#d.state),e}getCurrentResult(){return this.#f}trackResult(a,b){return new Proxy(a,{get:(a,c)=>(this.trackProp(c),b?.(c),"promise"===c&&(this.trackProp("data"),this.options.experimental_prefetchInRender||"pending"!==this.#c.status||this.#c.reject(Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(a,c))})}trackProp(a){this.#o.add(a)}getCurrentQuery(){return this.#d}refetch({...a}={}){return this.fetch({...a})}fetchOptimistic(a){let b=this.#a.defaultQueryOptions(a),c=this.#a.getQueryCache().build(this.#a,b);return c.fetch().then(()=>this.createResult(c,b))}fetch(a){return this.#p({...a,cancelRefetch:a.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#f))}#p(a){this.#t();let b=this.#d.fetch(this.options,a);return a?.throwOnError||(b=b.catch(h.noop)),b}#u(){this.#r();let a=(0,h.resolveStaleTime)(this.options.staleTime,this.#d);if(h.isServer||this.#f.isStale||!(0,h.isValidTimeout)(a))return;let b=(0,h.timeUntilStale)(this.#f.dataUpdatedAt,a);this.#l=i.timeoutManager.setTimeout(()=>{this.#f.isStale||this.updateResult()},b+1)}#v(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#d):this.options.refetchInterval)??!1}#w(a){this.#s(),this.#n=a,!h.isServer&&!1!==(0,h.resolveEnabled)(this.options.enabled,this.#d)&&(0,h.isValidTimeout)(this.#n)&&0!==this.#n&&(this.#m=i.timeoutManager.setInterval(()=>{(this.options.refetchIntervalInBackground||c.focusManager.isFocused())&&this.#p()},this.#n))}#q(){this.#u(),this.#w(this.#v())}#r(){this.#l&&(i.timeoutManager.clearTimeout(this.#l),this.#l=void 0)}#s(){this.#m&&(i.timeoutManager.clearInterval(this.#m),this.#m=void 0)}createResult(a,b){let c,d=this.#d,f=this.options,i=this.#f,j=this.#g,l=this.#h,o=a!==d?a.state:this.#e,{state:p}=a,q={...p},r=!1;if(b._optimisticResults){let c=this.hasListeners(),g=!c&&k(a,b),h=c&&m(a,d,b,f);(g||h)&&(q={...q,...(0,e.fetchState)(p.data,a.options)}),"isRestoring"===b._optimisticResults&&(q.fetchStatus="idle")}let{error:s,errorUpdatedAt:t,status:u}=q;c=q.data;let v=!1;if(void 0!==b.placeholderData&&void 0===c&&"pending"===u){let a;i?.isPlaceholderData&&b.placeholderData===l?.placeholderData?(a=i.data,v=!0):a="function"==typeof b.placeholderData?b.placeholderData(this.#k?.state.data,this.#k):b.placeholderData,void 0!==a&&(u="success",c=(0,h.replaceData)(i?.data,a,b),r=!0)}if(b.select&&void 0!==c&&!v)if(i&&c===j?.data&&b.select===this.#i)c=this.#j;else try{this.#i=b.select,c=b.select(c),c=(0,h.replaceData)(i?.data,c,b),this.#j=c,this.#b=null}catch(a){this.#b=a}this.#b&&(s=this.#b,c=this.#j,t=Date.now(),u="error");let w="fetching"===q.fetchStatus,x="pending"===u,y="error"===u,z=x&&w,A=void 0!==c,B={status:u,fetchStatus:q.fetchStatus,isPending:x,isSuccess:"success"===u,isError:y,isInitialLoading:z,isLoading:z,data:c,dataUpdatedAt:q.dataUpdatedAt,error:s,errorUpdatedAt:t,failureCount:q.fetchFailureCount,failureReason:q.fetchFailureReason,errorUpdateCount:q.errorUpdateCount,isFetched:q.dataUpdateCount>0||q.errorUpdateCount>0,isFetchedAfterMount:q.dataUpdateCount>o.dataUpdateCount||q.errorUpdateCount>o.errorUpdateCount,isFetching:w,isRefetching:w&&!x,isLoadingError:y&&!A,isPaused:"paused"===q.fetchStatus,isPlaceholderData:r,isRefetchError:y&&A,isStale:n(a,b),refetch:this.refetch,promise:this.#c,isEnabled:!1!==(0,h.resolveEnabled)(b.enabled,a)};if(this.options.experimental_prefetchInRender){let b=void 0!==B.data,c="error"===B.status&&!b,e=a=>{c?a.reject(B.error):b&&a.resolve(B.data)},f=()=>{e(this.#c=B.promise=(0,g.pendingThenable)())},h=this.#c;switch(h.status){case"pending":a.queryHash===d.queryHash&&e(h);break;case"fulfilled":(c||B.data!==h.value)&&f();break;case"rejected":c&&B.error===h.reason||f()}}return B}updateResult(){let a=this.#f,b=this.createResult(this.#d,this.options);if(this.#g=this.#d.state,this.#h=this.options,void 0!==this.#g.data&&(this.#k=this.#d),(0,h.shallowEqualObjects)(b,a))return;this.#f=b;let c=()=>{if(!a)return!0;let{notifyOnChangeProps:b}=this.options,c="function"==typeof b?b():b;if("all"===c||!c&&!this.#o.size)return!0;let d=new Set(c??this.#o);return this.options.throwOnError&&d.add("error"),Object.keys(this.#f).some(b=>this.#f[b]!==a[b]&&d.has(b))};this.#x({listeners:c()})}#t(){let a=this.#a.getQueryCache().build(this.#a,this.options);if(a===this.#d)return;let b=this.#d;this.#d=a,this.#e=a.state,this.hasListeners()&&(b?.removeObserver(this),a.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#q()}#x(a){d.notifyManager.batch(()=>{a.listeners&&this.listeners.forEach(a=>{a(this.#f)}),this.#a.getQueryCache().notify({query:this.#d,type:"observerResultsUpdated"})})}};function k(a,b){return!1!==(0,h.resolveEnabled)(b.enabled,a)&&void 0===a.state.data&&("error"!==a.state.status||!1!==b.retryOnMount)||void 0!==a.state.data&&l(a,b,b.refetchOnMount)}function l(a,b,c){if(!1!==(0,h.resolveEnabled)(b.enabled,a)&&"static"!==(0,h.resolveStaleTime)(b.staleTime,a)){let d="function"==typeof c?c(a):c;return"always"===d||!1!==d&&n(a,b)}return!1}function m(a,b,c,d){return(a!==b||!1===(0,h.resolveEnabled)(d.enabled,a))&&(!c.suspense||"error"!==a.state.status)&&n(a,c)}function n(a,b){return!1!==(0,h.resolveEnabled)(b.enabled,a)&&a.isStaleByTime((0,h.resolveStaleTime)(b.staleTime,a))}var o=a.i(72131),p=a.i(37927);a.i(87924);var q=o.createContext((b=!1,{clearReset:()=>{b=!1},reset:()=>{b=!0},isReset:()=>b})),r=o.createContext(!1);r.Provider;var s=(a,b,c)=>b.fetchOptimistic(a).catch(()=>{c.clearReset()});function t(a,b){return function(a,b,c){let e,f=o.useContext(r),g=o.useContext(q),i=(0,p.useQueryClient)(c),j=i.defaultQueryOptions(a);i.getDefaultOptions().queries?._experimental_beforeQuery?.(j);let k=i.getQueryCache().get(j.queryHash);if(j._optimisticResults=f?"isRestoring":"optimistic",j.suspense){let a=a=>"static"===a?a:Math.max(a??1e3,1e3),b=j.staleTime;j.staleTime="function"==typeof b?(...c)=>a(b(...c)):a(b),"number"==typeof j.gcTime&&(j.gcTime=Math.max(j.gcTime,1e3))}e=k?.state.error&&"function"==typeof j.throwOnError?(0,h.shouldThrowError)(j.throwOnError,[k.state.error,k]):j.throwOnError,(j.suspense||j.experimental_prefetchInRender||e)&&!g.isReset()&&(j.retryOnMount=!1),o.useEffect(()=>{g.clearReset()},[g]);let l=!i.getQueryCache().get(j.queryHash),[m]=o.useState(()=>new b(i,j)),n=m.getOptimisticResult(j),t=!f&&!1!==a.subscribed;if(o.useSyncExternalStore(o.useCallback(a=>{let b=t?m.subscribe(d.notifyManager.batchCalls(a)):h.noop;return m.updateResult(),b},[m,t]),()=>m.getCurrentResult(),()=>m.getCurrentResult()),o.useEffect(()=>{m.setOptions(j)},[j,m]),j?.suspense&&n.isPending)throw s(j,m,g);if((({result:a,errorResetBoundary:b,throwOnError:c,query:d,suspense:e})=>a.isError&&!b.isReset()&&!a.isFetching&&d&&(e&&void 0===a.data||(0,h.shouldThrowError)(c,[a.error,d])))({result:n,errorResetBoundary:g,throwOnError:j.throwOnError,query:k,suspense:j.suspense}))throw n.error;if(i.getDefaultOptions().queries?._experimental_afterQuery?.(j,n),j.experimental_prefetchInRender&&!h.isServer&&n.isLoading&&n.isFetching&&!f){let a=l?s(j,m,g):k?.promise;a?.catch(h.noop).finally(()=>{m.updateResult()})}return j.notifyOnChangeProps?n:m.trackResult(n)}(a,j,b)}a.s(["useQuery",()=>t],33217)},63519,24987,a=>{"use strict";var b=a.i(70106);let c=(0,b.default)("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);a.s(["Phone",()=>c],63519);let d=(0,b.default)("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);a.s(["MapPin",()=>d],24987)},95393,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(75716),e=a.i(46271),f=a.i(92258),g=a.i(63519),h=a.i(24987),i=a.i(70106);let j=(0,i.default)("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),k=(0,i.default)("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);var l=a.i(85911),m=a.i(12857),n=a.i(5112),o=a.i(11815),p=a.i(45903),q=a.i(25250),r=a.i(33217);let s=d.default.div.withConfig({displayName:"page__PageHero",componentId:"sc-503b6c28-0"})`
  padding: 12rem 0 4rem;
  background: radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
  text-align: center;
`,t=d.default.div.withConfig({displayName:"page__ContactGrid",componentId:"sc-503b6c28-1"})`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
  margin-top: 4rem;
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`,u=d.default.div.withConfig({displayName:"page__InfoBox",componentId:"sc-503b6c28-2"})`
  .head {
    margin-bottom: 3rem;
    h2 { font-size: 2.5rem; font-weight: 900; margin-bottom: 1rem; }
    p { color: var(--secondary); font-size: 1.15rem; line-height: 1.6; }
  }
`,v=d.default.div.withConfig({displayName:"page__ContactCard",componentId:"sc-503b6c28-3"})`
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
`,w=(0,d.default)(e.motion.form).withConfig({displayName:"page__FormBox",componentId:"sc-503b6c28-4"})`
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
`,x=d.default.div.withConfig({displayName:"page__InputGroup",componentId:"sc-503b6c28-5"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,y=d.default.div.withConfig({displayName:"page__Field",componentId:"sc-503b6c28-6"})`
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
`,z=d.default.button.withConfig({displayName:"page__SubmitButton",componentId:"sc-503b6c28-7"})`
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
`,A=d.default.div.withConfig({displayName:"page__SocialStrip",componentId:"sc-503b6c28-8"})`
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
`;function B(){let[a,d]=(0,c.useState)("idle"),{data:i,isLoading:B}=(0,r.useQuery)({queryKey:["about"],queryFn:()=>fetch("/api/data?type=about").then(a=>a.json())});return B?null:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p.Navbar,{}),(0,b.jsx)(s,{children:(0,b.jsx)(o.Container,{children:(0,b.jsxs)(e.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,b.jsx)("span",{style:{color:"var(--primary)",fontWeight:800,textTransform:"uppercase",letterSpacing:"2px"},children:"Get In Touch"}),(0,b.jsxs)("h1",{style:{fontSize:"4rem",fontWeight:900,marginTop:"1rem",letterSpacing:"-2px"},children:["Let's Build Something ",(0,b.jsx)("span",{style:{color:"var(--primary)"},children:"Exceptional"})]})]})})}),(0,b.jsx)(o.Section,{children:(0,b.jsx)(o.Container,{children:(0,b.jsxs)(t,{children:[(0,b.jsxs)(u,{children:[(0,b.jsxs)("div",{className:"head",children:[(0,b.jsx)("h2",{children:"Contact Information"}),(0,b.jsx)("p",{children:"Whether you have a specific project inquiry or just want to discuss technical architecture, I am always open to high-impact conversations."})]}),(0,b.jsxs)(v,{children:[(0,b.jsx)("div",{className:"icon",children:(0,b.jsx)(f.Mail,{size:28})}),(0,b.jsxs)("div",{className:"details",children:[(0,b.jsx)("h4",{children:"Email Address"}),(0,b.jsx)("p",{children:i.email})]})]}),(0,b.jsxs)(v,{children:[(0,b.jsx)("div",{className:"icon",children:(0,b.jsx)(g.Phone,{size:28})}),(0,b.jsxs)("div",{className:"details",children:[(0,b.jsx)("h4",{children:"Direct Line"}),(0,b.jsx)("p",{children:i.phone})]})]}),(0,b.jsxs)(v,{children:[(0,b.jsx)("div",{className:"icon",children:(0,b.jsx)(h.MapPin,{size:28})}),(0,b.jsxs)("div",{className:"details",children:[(0,b.jsx)("h4",{children:"Headquarters"}),(0,b.jsx)("p",{children:i.location})]})]}),(0,b.jsxs)(A,{children:[(0,b.jsx)("a",{href:"https://linkedin.com",target:"_blank",children:(0,b.jsx)(l.Linkedin,{size:22})}),(0,b.jsx)("a",{href:"https://github.com",target:"_blank",children:(0,b.jsx)(n.Github,{size:22})}),(0,b.jsx)("a",{href:"https://twitter.com",target:"_blank",children:(0,b.jsx)(m.Twitter,{size:22})}),(0,b.jsx)("a",{href:"#",children:(0,b.jsx)(k,{size:22})})]})]}),(0,b.jsxs)(w,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{delay:.2},onSubmit:a=>{a.preventDefault(),d("sending"),setTimeout(()=>d("sent"),1500)},children:[(0,b.jsxs)(x,{children:[(0,b.jsxs)(y,{children:[(0,b.jsx)("label",{children:"First Name"}),(0,b.jsx)("input",{placeholder:"Jane",required:!0})]}),(0,b.jsxs)(y,{children:[(0,b.jsx)("label",{children:"Last Name"}),(0,b.jsx)("input",{placeholder:"Doe",required:!0})]})]}),(0,b.jsxs)(y,{children:[(0,b.jsx)("label",{children:"Professional Email"}),(0,b.jsx)("input",{type:"email",placeholder:"jane@company.com",required:!0})]}),(0,b.jsxs)(y,{children:[(0,b.jsx)("label",{children:"Project Details / Message"}),(0,b.jsx)("textarea",{rows:5,placeholder:"Tell me about your goals or technical challenges...",required:!0})]}),(0,b.jsxs)(z,{type:"submit",disabled:"idle"!==a,children:["idle"===a&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(j,{size:20})," Transmit Message"]}),"sending"===a&&"Transmitting...","sent"===a&&"Message Received ✓"]}),"sent"===a&&(0,b.jsx)(e.motion.p,{initial:{opacity:0},animate:{opacity:1},style:{color:"var(--success)",fontWeight:700,textAlign:"center"},children:"Thank you! I will respond to your inquiry within 24 hours."})]})]})})}),(0,b.jsx)(q.Footer,{})]})}a.s(["default",()=>B],95393)}];

//# sourceMappingURL=_cac16a0b._.js.map