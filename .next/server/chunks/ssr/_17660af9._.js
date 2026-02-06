module.exports=[38783,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].ReactServerDOMTurbopackClient},75954,a=>{"use strict";var b=a.i(75716),c=a.i(46271);let d=b.default.div.withConfig({displayName:"AdminUI__AdminLayoutWrapper",componentId:"sc-55d2a4cd-0"})`
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
  color: #1e293b;
`,e=b.default.main.withConfig({displayName:"AdminUI__MainContent",componentId:"sc-55d2a4cd-1"})`
  flex: 1;
  padding: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`,f=(0,b.default)(c.motion.div).withConfig({displayName:"AdminUI__FormCard",componentId:"sc-55d2a4cd-2"})`
  background: white;
  padding: 2.5rem;
  border-radius: 2rem;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
`,g=b.default.div.withConfig({displayName:"AdminUI__FormGroup",componentId:"sc-55d2a4cd-3"})`
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
`,h=b.default.div.withConfig({displayName:"AdminUI__ListHeader",componentId:"sc-55d2a4cd-4"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,i=b.default.button.withConfig({displayName:"AdminUI__AddBtn",componentId:"sc-55d2a4cd-5"})`
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
`,j=b.default.div.withConfig({displayName:"AdminUI__ListItem",componentId:"sc-55d2a4cd-6"})`
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
`,k=b.default.button.withConfig({displayName:"AdminUI__ActionBtn",componentId:"sc-55d2a4cd-7"})`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${a=>"edit"===a.$type?"white":"#fee2e2"};
  color: ${a=>"edit"===a.$type?"var(--primary)":"#ef4444"};
  border: 1px solid ${a=>"edit"===a.$type?"var(--border)":"transparent"};
  &:hover { transform: scale(1.1); }
`,l=b.default.button.withConfig({displayName:"AdminUI__SaveBtn",componentId:"sc-55d2a4cd-8"})`
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
`,m=b.default.div.withConfig({displayName:"AdminUI__StatGrid",componentId:"sc-55d2a4cd-9"})`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }
`,n=b.default.div.withConfig({displayName:"AdminUI__StatCard",componentId:"sc-55d2a4cd-10"})`
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
`;a.s(["ActionBtn",0,k,"AddBtn",0,i,"AdminLayoutWrapper",0,d,"FormCard",0,f,"FormGroup",0,g,"ListHeader",0,h,"ListItem",0,j,"MainContent",0,e,"SaveBtn",0,l,"StatCard",0,n,"StatGrid",0,m])},92596,a=>{"use strict";let b=(0,a.i(70106).default)("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);a.s(["Folder",()=>b],92596)},53722,a=>{"use strict";let b=(0,a.i(70106).default)("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);a.s(["BookOpen",()=>b],53722)},93518,a=>{"use strict";let b=(0,a.i(70106).default)("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);a.s(["Award",()=>b],93518)},82478,a=>{"use strict";let b=(0,a.i(70106).default)("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);a.s(["Rocket",()=>b],82478)},69439,a=>{"use strict";let b=(0,a.i(70106).default)("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);a.s(["Lightbulb",()=>b],69439)},46842,a=>{"use strict";let b=(0,a.i(70106).default)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);a.s(["User",()=>b],46842)},4720,a=>{"use strict";let b=(0,a.i(70106).default)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);a.s(["FileText",()=>b],4720)},88615,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(75716),e=a.i(46271),f=a.i(38246),g=a.i(50944),h=a.i(70106);let i=(0,h.default)("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);var j=a.i(92596),k=a.i(69439),l=a.i(46842),m=a.i(4720),n=a.i(93518);let o=(0,h.default)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),p=(0,h.default)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),q=(0,h.default)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),r=(0,h.default)("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);var s=a.i(53722),t=a.i(82478),u=a.i(75954);let v=(0,d.default)(e.motion.aside).withConfig({displayName:"layout__Sidebar",componentId:"sc-9cf59282-0"})`
  width: ${a=>a.$collapsed?"80px":"280px"};
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
`,w=(0,d.default)(f.default).withConfig({displayName:"layout__SidebarItem",componentId:"sc-9cf59282-1"})`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1rem;
  border-radius: 0.75rem;
  width: 100%;
  text-align: left;
  font-weight: 600;
  color: ${a=>a.$active?"white":"var(--secondary)"};
  background: ${a=>a.$active?"var(--primary)":"transparent"};
  justify-content: ${a=>a.$collapsed?"center":"flex-start"};
  text-decoration: none;
  
  &:hover {
    background: ${a=>a.$active?"var(--primary-dark)":"var(--accent)"};
    color: ${a=>a.$active?"white":"var(--primary)"};
  }

  span {
    display: ${a=>a.$collapsed?"none":"block"};
    white-space: nowrap;
  }
`,x=d.default.header.withConfig({displayName:"layout__Header",componentId:"sc-9cf59282-2"})`
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
`;function y({children:a}){let[d,e]=(0,c.useState)(!1),f=(0,g.usePathname)(),h=[{icon:(0,b.jsx)(i,{size:20}),label:"Dashboard",path:"/admin"},{icon:(0,b.jsx)(l.User,{size:20}),label:"About Me",path:"/admin/about"},{icon:(0,b.jsx)(k.Lightbulb,{size:20}),label:"Skills",path:"/admin/skills"},{icon:(0,b.jsx)(j.Folder,{size:20}),label:"Main Projects",path:"/admin/projects"},{icon:(0,b.jsx)(t.Rocket,{size:20}),label:"Side Projects",path:"/admin/side-projects"},{icon:(0,b.jsx)(m.FileText,{size:20}),label:"Experience",path:"/admin/experience"},{icon:(0,b.jsx)(s.BookOpen,{size:20}),label:"Education",path:"/admin/education"},{icon:(0,b.jsx)(n.Award,{size:20}),label:"Certificates",path:"/admin/certificates"}];return(0,b.jsxs)(u.AdminLayoutWrapper,{children:[(0,b.jsxs)(v,{$collapsed:d,animate:{width:d?80:280},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:d?"center":"space-between",padding:"0 0.5rem 2rem"},children:[!d&&(0,b.jsx)("h2",{style:{fontSize:"1.25rem",fontWeight:900,color:"var(--primary)"},children:"CONSOLE"}),(0,b.jsx)("button",{onClick:()=>e(!d),style:{color:"var(--secondary)"},children:d?(0,b.jsx)(p,{size:20}):(0,b.jsx)(o,{size:20})})]}),h.map(a=>(0,b.jsxs)(w,{href:a.path,$active:f===a.path,$collapsed:d,children:[a.icon,(0,b.jsx)("span",{children:a.label})]},a.path)),(0,b.jsx)("div",{style:{marginTop:"auto",borderTop:"1px solid var(--border)",paddingTop:"1rem"},children:(0,b.jsxs)(w,{href:"/",$active:!1,$collapsed:d,children:[(0,b.jsx)(q,{size:20}),(0,b.jsx)("span",{children:"Public Site"})]})})]}),(0,b.jsxs)(u.MainContent,{children:[(0,b.jsxs)(x,{children:[(0,b.jsx)("div",{style:{display:"flex",gap:"1.5rem",alignItems:"center"},children:(0,b.jsxs)("h1",{style:{fontSize:"1.75rem",fontWeight:900,letterSpacing:"-0.5px"},children:["Victor ",(0,b.jsx)("span",{style:{color:"var(--primary)"},children:"Console"})]})}),(0,b.jsxs)("div",{className:"user-info",children:[(0,b.jsx)(r,{size:18}),(0,b.jsx)("div",{style:{width:1,height:20,background:"var(--border)"}}),(0,b.jsx)("span",{style:{fontWeight:700},children:"Victor Juwa"}),(0,b.jsx)("img",{src:"https://ui-avatars.com/api/?name=Victor+Juwa&background=8B5CF6&color=fff",style:{width:35,height:35,borderRadius:"50%"}})]})]}),a]})]})}a.s(["default",()=>y],88615)}];

//# sourceMappingURL=_17660af9._.js.map