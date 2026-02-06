module.exports=[38783,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].ReactServerDOMTurbopackClient},33217,a=>{"use strict";let b;var c=a.i(99745),d=a.i(18544),e=a.i(76644),f=a.i(33791),g=a.i(79715),h=a.i(42871),i=a.i(8361),j=class extends f.Subscribable{constructor(a,b){super(),this.options=b,this.#a=a,this.#b=null,this.#c=(0,g.pendingThenable)(),this.bindMethods(),this.setOptions(b)}#a;#d=void 0;#e=void 0;#f=void 0;#g;#h;#c;#b;#i;#j;#k;#l;#m;#n;#o=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#d.addObserver(this),k(this.#d,this.options)?this.#p():this.updateResult(),this.#q())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return l(this.#d,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return l(this.#d,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#r(),this.#s(),this.#d.removeObserver(this)}setOptions(a){let b=this.options,c=this.#d;if(this.options=this.#a.defaultQueryOptions(a),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,h.resolveEnabled)(this.options.enabled,this.#d))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#t(),this.#d.setOptions(this.options),b._defaulted&&!(0,h.shallowEqualObjects)(this.options,b)&&this.#a.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#d,observer:this});let d=this.hasListeners();d&&m(this.#d,c,this.options,b)&&this.#p(),this.updateResult(),d&&(this.#d!==c||(0,h.resolveEnabled)(this.options.enabled,this.#d)!==(0,h.resolveEnabled)(b.enabled,this.#d)||(0,h.resolveStaleTime)(this.options.staleTime,this.#d)!==(0,h.resolveStaleTime)(b.staleTime,this.#d))&&this.#u();let e=this.#v();d&&(this.#d!==c||(0,h.resolveEnabled)(this.options.enabled,this.#d)!==(0,h.resolveEnabled)(b.enabled,this.#d)||e!==this.#n)&&this.#w(e)}getOptimisticResult(a){var b,c;let d=this.#a.getQueryCache().build(this.#a,a),e=this.createResult(d,a);return b=this,c=e,(0,h.shallowEqualObjects)(b.getCurrentResult(),c)||(this.#f=e,this.#h=this.options,this.#g=this.#d.state),e}getCurrentResult(){return this.#f}trackResult(a,b){return new Proxy(a,{get:(a,c)=>(this.trackProp(c),b?.(c),"promise"===c&&(this.trackProp("data"),this.options.experimental_prefetchInRender||"pending"!==this.#c.status||this.#c.reject(Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(a,c))})}trackProp(a){this.#o.add(a)}getCurrentQuery(){return this.#d}refetch({...a}={}){return this.fetch({...a})}fetchOptimistic(a){let b=this.#a.defaultQueryOptions(a),c=this.#a.getQueryCache().build(this.#a,b);return c.fetch().then(()=>this.createResult(c,b))}fetch(a){return this.#p({...a,cancelRefetch:a.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#f))}#p(a){this.#t();let b=this.#d.fetch(this.options,a);return a?.throwOnError||(b=b.catch(h.noop)),b}#u(){this.#r();let a=(0,h.resolveStaleTime)(this.options.staleTime,this.#d);if(h.isServer||this.#f.isStale||!(0,h.isValidTimeout)(a))return;let b=(0,h.timeUntilStale)(this.#f.dataUpdatedAt,a);this.#l=i.timeoutManager.setTimeout(()=>{this.#f.isStale||this.updateResult()},b+1)}#v(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#d):this.options.refetchInterval)??!1}#w(a){this.#s(),this.#n=a,!h.isServer&&!1!==(0,h.resolveEnabled)(this.options.enabled,this.#d)&&(0,h.isValidTimeout)(this.#n)&&0!==this.#n&&(this.#m=i.timeoutManager.setInterval(()=>{(this.options.refetchIntervalInBackground||c.focusManager.isFocused())&&this.#p()},this.#n))}#q(){this.#u(),this.#w(this.#v())}#r(){this.#l&&(i.timeoutManager.clearTimeout(this.#l),this.#l=void 0)}#s(){this.#m&&(i.timeoutManager.clearInterval(this.#m),this.#m=void 0)}createResult(a,b){let c,d=this.#d,f=this.options,i=this.#f,j=this.#g,l=this.#h,o=a!==d?a.state:this.#e,{state:p}=a,q={...p},r=!1;if(b._optimisticResults){let c=this.hasListeners(),g=!c&&k(a,b),h=c&&m(a,d,b,f);(g||h)&&(q={...q,...(0,e.fetchState)(p.data,a.options)}),"isRestoring"===b._optimisticResults&&(q.fetchStatus="idle")}let{error:s,errorUpdatedAt:t,status:u}=q;c=q.data;let v=!1;if(void 0!==b.placeholderData&&void 0===c&&"pending"===u){let a;i?.isPlaceholderData&&b.placeholderData===l?.placeholderData?(a=i.data,v=!0):a="function"==typeof b.placeholderData?b.placeholderData(this.#k?.state.data,this.#k):b.placeholderData,void 0!==a&&(u="success",c=(0,h.replaceData)(i?.data,a,b),r=!0)}if(b.select&&void 0!==c&&!v)if(i&&c===j?.data&&b.select===this.#i)c=this.#j;else try{this.#i=b.select,c=b.select(c),c=(0,h.replaceData)(i?.data,c,b),this.#j=c,this.#b=null}catch(a){this.#b=a}this.#b&&(s=this.#b,c=this.#j,t=Date.now(),u="error");let w="fetching"===q.fetchStatus,x="pending"===u,y="error"===u,z=x&&w,A=void 0!==c,B={status:u,fetchStatus:q.fetchStatus,isPending:x,isSuccess:"success"===u,isError:y,isInitialLoading:z,isLoading:z,data:c,dataUpdatedAt:q.dataUpdatedAt,error:s,errorUpdatedAt:t,failureCount:q.fetchFailureCount,failureReason:q.fetchFailureReason,errorUpdateCount:q.errorUpdateCount,isFetched:q.dataUpdateCount>0||q.errorUpdateCount>0,isFetchedAfterMount:q.dataUpdateCount>o.dataUpdateCount||q.errorUpdateCount>o.errorUpdateCount,isFetching:w,isRefetching:w&&!x,isLoadingError:y&&!A,isPaused:"paused"===q.fetchStatus,isPlaceholderData:r,isRefetchError:y&&A,isStale:n(a,b),refetch:this.refetch,promise:this.#c,isEnabled:!1!==(0,h.resolveEnabled)(b.enabled,a)};if(this.options.experimental_prefetchInRender){let b=void 0!==B.data,c="error"===B.status&&!b,e=a=>{c?a.reject(B.error):b&&a.resolve(B.data)},f=()=>{e(this.#c=B.promise=(0,g.pendingThenable)())},h=this.#c;switch(h.status){case"pending":a.queryHash===d.queryHash&&e(h);break;case"fulfilled":(c||B.data!==h.value)&&f();break;case"rejected":c&&B.error===h.reason||f()}}return B}updateResult(){let a=this.#f,b=this.createResult(this.#d,this.options);if(this.#g=this.#d.state,this.#h=this.options,void 0!==this.#g.data&&(this.#k=this.#d),(0,h.shallowEqualObjects)(b,a))return;this.#f=b;let c=()=>{if(!a)return!0;let{notifyOnChangeProps:b}=this.options,c="function"==typeof b?b():b;if("all"===c||!c&&!this.#o.size)return!0;let d=new Set(c??this.#o);return this.options.throwOnError&&d.add("error"),Object.keys(this.#f).some(b=>this.#f[b]!==a[b]&&d.has(b))};this.#x({listeners:c()})}#t(){let a=this.#a.getQueryCache().build(this.#a,this.options);if(a===this.#d)return;let b=this.#d;this.#d=a,this.#e=a.state,this.hasListeners()&&(b?.removeObserver(this),a.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#q()}#x(a){d.notifyManager.batch(()=>{a.listeners&&this.listeners.forEach(a=>{a(this.#f)}),this.#a.getQueryCache().notify({query:this.#d,type:"observerResultsUpdated"})})}};function k(a,b){return!1!==(0,h.resolveEnabled)(b.enabled,a)&&void 0===a.state.data&&("error"!==a.state.status||!1!==b.retryOnMount)||void 0!==a.state.data&&l(a,b,b.refetchOnMount)}function l(a,b,c){if(!1!==(0,h.resolveEnabled)(b.enabled,a)&&"static"!==(0,h.resolveStaleTime)(b.staleTime,a)){let d="function"==typeof c?c(a):c;return"always"===d||!1!==d&&n(a,b)}return!1}function m(a,b,c,d){return(a!==b||!1===(0,h.resolveEnabled)(d.enabled,a))&&(!c.suspense||"error"!==a.state.status)&&n(a,c)}function n(a,b){return!1!==(0,h.resolveEnabled)(b.enabled,a)&&a.isStaleByTime((0,h.resolveStaleTime)(b.staleTime,a))}var o=a.i(72131),p=a.i(37927);a.i(87924);var q=o.createContext((b=!1,{clearReset:()=>{b=!1},reset:()=>{b=!0},isReset:()=>b})),r=o.createContext(!1);r.Provider;var s=(a,b,c)=>b.fetchOptimistic(a).catch(()=>{c.clearReset()});function t(a,b){return function(a,b,c){let e,f=o.useContext(r),g=o.useContext(q),i=(0,p.useQueryClient)(c),j=i.defaultQueryOptions(a);i.getDefaultOptions().queries?._experimental_beforeQuery?.(j);let k=i.getQueryCache().get(j.queryHash);if(j._optimisticResults=f?"isRestoring":"optimistic",j.suspense){let a=a=>"static"===a?a:Math.max(a??1e3,1e3),b=j.staleTime;j.staleTime="function"==typeof b?(...c)=>a(b(...c)):a(b),"number"==typeof j.gcTime&&(j.gcTime=Math.max(j.gcTime,1e3))}e=k?.state.error&&"function"==typeof j.throwOnError?(0,h.shouldThrowError)(j.throwOnError,[k.state.error,k]):j.throwOnError,(j.suspense||j.experimental_prefetchInRender||e)&&!g.isReset()&&(j.retryOnMount=!1),o.useEffect(()=>{g.clearReset()},[g]);let l=!i.getQueryCache().get(j.queryHash),[m]=o.useState(()=>new b(i,j)),n=m.getOptimisticResult(j),t=!f&&!1!==a.subscribed;if(o.useSyncExternalStore(o.useCallback(a=>{let b=t?m.subscribe(d.notifyManager.batchCalls(a)):h.noop;return m.updateResult(),b},[m,t]),()=>m.getCurrentResult(),()=>m.getCurrentResult()),o.useEffect(()=>{m.setOptions(j)},[j,m]),j?.suspense&&n.isPending)throw s(j,m,g);if((({result:a,errorResetBoundary:b,throwOnError:c,query:d,suspense:e})=>a.isError&&!b.isReset()&&!a.isFetching&&d&&(e&&void 0===a.data||(0,h.shouldThrowError)(c,[a.error,d])))({result:n,errorResetBoundary:g,throwOnError:j.throwOnError,query:k,suspense:j.suspense}))throw n.error;if(i.getDefaultOptions().queries?._experimental_afterQuery?.(j,n),j.experimental_prefetchInRender&&!h.isServer&&n.isLoading&&n.isFetching&&!f){let a=l?s(j,m,g):k?.promise;a?.catch(h.noop).finally(()=>{m.updateResult()})}return j.notifyOnChangeProps?n:m.trackResult(n)}(a,j,b)}a.s(["useQuery",()=>t],33217)},53722,a=>{"use strict";let b=(0,a.i(70106).default)("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);a.s(["BookOpen",()=>b],53722)},93518,a=>{"use strict";let b=(0,a.i(70106).default)("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);a.s(["Award",()=>b],93518)},82478,a=>{"use strict";let b=(0,a.i(70106).default)("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);a.s(["Rocket",()=>b],82478)},52495,a=>{"use strict";let b=(0,a.i(70106).default)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);a.s(["ExternalLink",()=>b],52495)},17545,a=>{"use strict";let b=(0,a.i(70106).default)("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);a.s(["Layers",()=>b],17545)},63519,24987,a=>{"use strict";var b=a.i(70106);let c=(0,b.default)("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);a.s(["Phone",()=>c],63519);let d=(0,b.default)("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);a.s(["MapPin",()=>d],24987)},29265,a=>{"use strict";var b=a.i(87924),c=a.i(75716),d=a.i(46271),e=a.i(70106);let f=(0,e.default)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),g=(0,e.default)("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);var h=a.i(92258),i=a.i(63519),j=a.i(24987);let k=(0,e.default)("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]),l=(0,e.default)("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),m=(0,e.default)("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);var n=a.i(17545),o=a.i(53722),p=a.i(82478),q=a.i(93518),r=a.i(52495),s=a.i(11815),t=a.i(45903),u=a.i(25250),v=a.i(33217);let w=c.default.div.withConfig({displayName:"page__PageHero",componentId:"sc-21f69f60-0"})`
  padding: 12rem 0 4rem;
  background: var(--accent);
  text-align: center;
`,x=(0,c.default)(d.motion.div).withConfig({displayName:"page__ResumePaper",componentId:"sc-21f69f60-1"})`
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
`,y=c.default.div.withConfig({displayName:"page__ResumeHeader",componentId:"sc-21f69f60-2"})`
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
`,z=c.default.div.withConfig({displayName:"page__ContactGrid",componentId:"sc-21f69f60-3"})`
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
`,A=c.default.h2.withConfig({displayName:"page__SectionTitle",componentId:"sc-21f69f60-4"})`
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
`,B=c.default.div.withConfig({displayName:"page__ExpItem",componentId:"sc-21f69f60-5"})`
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
`,C=c.default.div.withConfig({displayName:"page__SkillBadgeGrid",componentId:"sc-21f69f60-6"})`
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
`,D=c.default.div.withConfig({displayName:"page__FloatingActions",componentId:"sc-21f69f60-7"})`
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
`,E=c.default.button.withConfig({displayName:"page__ActionBtn",componentId:"sc-21f69f60-8"})`
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
`;function F(){let{data:a,isLoading:c}=(0,v.useQuery)({queryKey:["about"],queryFn:()=>fetch("/api/data?type=about").then(a=>a.json())}),{data:e,isLoading:F}=(0,v.useQuery)({queryKey:["experience"],queryFn:()=>fetch("/api/data?type=experience").then(a=>a.json())}),{data:G,isLoading:H}=(0,v.useQuery)({queryKey:["skills"],queryFn:()=>fetch("/api/data?type=skills").then(a=>a.json())}),{data:I,isLoading:J}=(0,v.useQuery)({queryKey:["education"],queryFn:()=>fetch("/api/data?type=education").then(a=>a.json())}),{data:K,isLoading:L}=(0,v.useQuery)({queryKey:["side_projects"],queryFn:()=>fetch("/api/data?type=side_projects").then(a=>a.json())}),{data:M,isLoading:N}=(0,v.useQuery)({queryKey:["certificates"],queryFn:()=>fetch("/api/data?type=certificates").then(a=>a.json())});return c||F||H||J||L||N?null:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.Navbar,{}),(0,b.jsx)(w,{children:(0,b.jsx)(s.Container,{children:(0,b.jsxs)(d.motion.div,{initial:{opacity:0},animate:{opacity:1},children:[(0,b.jsx)("span",{style:{background:"white",padding:"0.4rem 1rem",borderRadius:"100px",fontSize:"0.8rem",fontWeight:800,color:"var(--primary)",border:"1px solid var(--border)"},children:"Juwa Victor"}),(0,b.jsx)("h1",{style:{fontSize:"3.5rem",fontWeight:900,marginTop:"1.5rem",letterSpacing:"-1.5px"}})]})})}),(0,b.jsx)(s.Container,{children:(0,b.jsxs)(x,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},children:[(0,b.jsxs)(y,{children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{style:{fontSize:"3rem",fontWeight:900,marginBottom:"0.5rem",letterSpacing:"-1px"},children:a.name}),(0,b.jsx)("h3",{style:{color:"var(--secondary)",fontSize:"1.4rem",fontWeight:600},children:a.title})]}),(0,b.jsxs)(z,{children:[(0,b.jsxs)("div",{className:"item",children:[(0,b.jsx)(h.Mail,{size:18})," ",a.email]}),(0,b.jsxs)("div",{className:"item",children:[(0,b.jsx)(i.Phone,{size:18})," ",a.phone]}),(0,b.jsxs)("div",{className:"item",children:[(0,b.jsx)(g,{size:18})," Link: victor-juwa.vercel.app"]}),(0,b.jsxs)("div",{className:"item",children:[(0,b.jsx)(j.MapPin,{size:18})," ",a.location]})]})]}),(0,b.jsxs)("div",{style:{marginBottom:"4rem"},children:[(0,b.jsxs)(A,{children:[(0,b.jsx)(m,{size:24})," Professional Summary"]}),(0,b.jsx)("p",{style:{fontSize:"1.1rem",lineHeight:"1.8",color:"#334155"},children:a.bio})]}),(0,b.jsxs)("div",{style:{marginBottom:"4rem",paddingLeft:"2.5rem",borderLeft:"2px dashed var(--border)"},children:[(0,b.jsxs)(A,{style:{marginLeft:"-2.7rem"},children:[(0,b.jsx)(k,{size:24})," Experience"]}),e.map((a,c)=>(0,b.jsxs)(B,{children:[(0,b.jsxs)("div",{className:"title-row",children:[(0,b.jsx)("h3",{children:a.role}),(0,b.jsx)("span",{children:a.period})]}),(0,b.jsx)("span",{className:"company",children:a.company}),(0,b.jsx)("ul",{children:a.achievements?.map((a,c)=>(0,b.jsx)("li",{children:a},c))}),a.products&&a.products.length>0&&(0,b.jsxs)("div",{style:{marginTop:"1.5rem",paddingLeft:"1rem",borderLeft:"2px solid var(--accent)"},children:[(0,b.jsx)("h5",{style:{fontSize:"0.95rem",fontWeight:800,color:"var(--primary)",marginBottom:"0.75rem",textTransform:"uppercase",letterSpacing:"0.5px"},children:"Delivered Milestones"}),(0,b.jsx)("div",{style:{display:"grid",gap:"1rem"},children:a.products.map((a,c)=>(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"0.25rem"},children:[(0,b.jsx)("span",{style:{fontWeight:700,fontSize:"0.95rem"},children:a.name}),a.link&&(0,b.jsxs)("a",{href:a.link,target:"_blank",style:{fontSize:"0.8rem",color:"var(--primary)",fontWeight:600,display:"flex",alignItems:"center",gap:"0.25rem"},children:["View ",(0,b.jsx)(r.ExternalLink,{size:12})]})]}),(0,b.jsx)("p",{style:{fontSize:"0.9rem",color:"#475569",marginBottom:"0.5rem"},children:a.description}),(0,b.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.4rem"},children:a.techStack?.map(a=>(0,b.jsx)("span",{style:{fontSize:"0.7rem",padding:"0.15rem 0.5rem",background:"#f1f5f9",borderRadius:"4px",color:"#475569",fontWeight:600},children:a},a))})]},c))})]})]},c))]}),(0,b.jsxs)("div",{style:{marginBottom:"4rem",paddingLeft:"2.5rem",borderLeft:"2px dashed var(--border)"},children:[(0,b.jsxs)(A,{style:{marginLeft:"-2.7rem"},children:[(0,b.jsx)(o.BookOpen,{size:24})," Education"]}),I?.map((a,c)=>(0,b.jsxs)(B,{children:[(0,b.jsxs)("div",{className:"title-row",children:[(0,b.jsx)("h3",{children:a.degree}),(0,b.jsx)("span",{children:a.period})]}),(0,b.jsx)("span",{className:"company",children:a.school}),(0,b.jsx)("p",{style:{color:"#334155",lineHeight:"1.6"},children:a.description})]},c))]}),(0,b.jsxs)("div",{style:{marginBottom:"4rem"},children:[(0,b.jsxs)(A,{children:[(0,b.jsx)(p.Rocket,{size:24})," Strategic Side Projects"]}),(0,b.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem"},children:K?.map((a,c)=>(0,b.jsxs)("div",{style:{padding:"1.5rem",background:"var(--accent)",borderRadius:"1rem",border:"1px solid var(--border)"},children:[(0,b.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.5rem"},children:[(0,b.jsx)("h4",{style:{fontWeight:800,color:"var(--primary-dark)"},children:a.title}),a.link&&(0,b.jsx)("a",{href:a.link,target:"_blank",style:{color:"var(--primary)"},children:(0,b.jsx)(r.ExternalLink,{size:16})})]}),(0,b.jsx)("p",{style:{fontSize:"0.9rem",color:"var(--secondary)",marginBottom:"1rem"},children:a.description}),(0,b.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:a.tech?.map(a=>(0,b.jsx)("span",{style:{fontSize:"0.7rem",fontWeight:800,background:"white",padding:"0.2rem 0.5rem",borderRadius:"4px",border:"1px solid var(--border)"},children:a},a))})]},c))})]}),(0,b.jsxs)("div",{style:{marginBottom:"4rem"},children:[(0,b.jsxs)(A,{children:[(0,b.jsx)(q.Award,{size:24})," Professional Certifications"]}),(0,b.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"1.5rem"},children:M?.map((a,c)=>(0,b.jsxs)("div",{style:{textAlign:"center"},children:[(0,b.jsx)("div",{style:{width:"100%",aspectRatio:"4/3",background:"var(--accent)",borderRadius:"0.5rem",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"0.75rem",border:"1px solid var(--border)"},children:(0,b.jsx)(q.Award,{size:40,color:"var(--primary)",opacity:.3})}),(0,b.jsx)("h5",{style:{fontWeight:800,fontSize:"0.9rem"},children:a.title}),(0,b.jsxs)("p",{style:{fontSize:"0.8rem",color:"var(--secondary)"},children:[a.issuer," • ",a.date]})]},c))})]}),(0,b.jsxs)("div",{children:[(0,b.jsxs)(A,{children:[(0,b.jsx)(n.Layers,{size:24})," Technical Arsenal"]}),(0,b.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3rem"},children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{style:{marginBottom:"1rem",fontWeight:800},children:"Core Technologies"}),(0,b.jsx)(C,{children:G.slice(0,10).map(a=>(0,b.jsx)("span",{children:a.name},a.name))})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{style:{marginBottom:"1rem",fontWeight:800},children:"Primary Focus"}),(0,b.jsx)(C,{children:G.slice(10,20).map(a=>(0,b.jsx)("span",{children:a.name},a.name))})]})]})]})]})}),(0,b.jsxs)(D,{children:[(0,b.jsx)(E,{title:"Download PDF",children:(0,b.jsx)(f,{size:24})}),(0,b.jsx)(E,{title:"Share Profile",children:(0,b.jsx)(l,{size:24})})]}),(0,b.jsx)(u.Footer,{})]})}a.s(["default",()=>F],29265)}];

//# sourceMappingURL=_aaa75266._.js.map