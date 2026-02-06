module.exports=[62036,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(86723),e=a.i(74290),f=a.i(14800),g=c,h=a.i(65802);class i extends g.Component{getSnapshotBeforeUpdate(a){let b=this.props.childRef.current;if(b&&a.isPresent&&!this.props.isPresent){let a=this.props.sizeRef.current;a.height=b.offsetHeight||0,a.width=b.offsetWidth||0,a.top=b.offsetTop,a.left=b.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function j({children:a,isPresent:c}){let d=(0,g.useId)(),e=(0,g.useRef)(null),f=(0,g.useRef)({width:0,height:0,top:0,left:0}),{nonce:j}=(0,g.useContext)(h.MotionConfigContext);return(0,g.useInsertionEffect)(()=>{let{width:a,height:b,top:g,left:h}=f.current;if(c||!e.current||!a||!b)return;e.current.dataset.motionPopId=d;let i=document.createElement("style");return j&&(i.nonce=j),document.head.appendChild(i),i.sheet&&i.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${b}px !important;
            top: ${g}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(i)}},[c]),(0,b.jsx)(i,{isPresent:c,childRef:e,sizeRef:f,children:g.cloneElement(a,{ref:e})})}let k=({children:a,initial:d,isPresent:g,onExitComplete:h,custom:i,presenceAffectsLayout:k,mode:m})=>{let n=(0,e.useConstant)(l),o=(0,c.useId)(),p=(0,c.useCallback)(a=>{for(let b of(n.set(a,!0),n.values()))if(!b)return;h&&h()},[n,h]),q=(0,c.useMemo)(()=>({id:o,initial:d,isPresent:g,custom:i,onExitComplete:p,register:a=>(n.set(a,!1),()=>n.delete(a))}),k?[Math.random(),p]:[g,p]);return(0,c.useMemo)(()=>{n.forEach((a,b)=>n.set(b,!1))},[g]),c.useEffect(()=>{g||n.size||!h||h()},[g]),"popLayout"===m&&(a=(0,b.jsx)(j,{isPresent:g,children:a})),(0,b.jsx)(f.PresenceContext.Provider,{value:q,children:a})};function l(){return new Map}var m=a.i(20410);let n=a=>a.key||"";function o(a){let b=[];return c.Children.forEach(a,a=>{(0,c.isValidElement)(a)&&b.push(a)}),b}var p=a.i(1703);let q=({children:a,custom:f,initial:g=!0,onExitComplete:h,presenceAffectsLayout:i=!0,mode:j="sync",propagate:l=!1})=>{let[q,r]=(0,m.usePresence)(l),s=(0,c.useMemo)(()=>o(a),[a]),t=l&&!q?[]:s.map(n),u=(0,c.useRef)(!0),v=(0,c.useRef)(s),w=(0,e.useConstant)(()=>new Map),[x,y]=(0,c.useState)(s),[z,A]=(0,c.useState)(s);(0,p.useIsomorphicLayoutEffect)(()=>{u.current=!1,v.current=s;for(let a=0;a<z.length;a++){let b=n(z[a]);t.includes(b)?w.delete(b):!0!==w.get(b)&&w.set(b,!1)}},[z,t.length,t.join("-")]);let B=[];if(s!==x){let a=[...s];for(let b=0;b<z.length;b++){let c=z[b],d=n(c);t.includes(d)||(a.splice(b,0,c),B.push(c))}"wait"===j&&B.length&&(a=B),A(o(a)),y(s);return}let{forceRender:C}=(0,c.useContext)(d.LayoutGroupContext);return(0,b.jsx)(b.Fragment,{children:z.map(a=>{let c=n(a),d=(!l||!!q)&&(s===z||t.includes(c));return(0,b.jsx)(k,{isPresent:d,initial:(!u.current||!!g)&&void 0,custom:d?void 0:f,presenceAffectsLayout:i,mode:j,onExitComplete:d?void 0:()=>{if(!w.has(c))return;w.set(c,!0);let a=!0;w.forEach(b=>{b||(a=!1)}),a&&(null==C||C(),A(v.current),l&&(null==r||r()),h&&h())},children:a},c)})})};a.s(["AnimatePresence",()=>q],62036)},72692,33508,5784,a=>{"use strict";var b=a.i(70106);let c=(0,b.default)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);a.s(["Menu",()=>c],72692);let d=(0,b.default)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);a.s(["X",()=>d],33508);let e=(0,b.default)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);a.s(["ChevronDown",()=>e],5784)},92258,a=>{"use strict";let b=(0,a.i(70106).default)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);a.s(["Mail",()=>b],92258)},85911,a=>{"use strict";let b=(0,a.i(70106).default)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);a.s(["Linkedin",()=>b],85911)},5112,a=>{"use strict";let b=(0,a.i(70106).default)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);a.s(["Github",()=>b],5112)},11815,a=>{"use strict";var b=a.i(75716);let c=b.default.div.withConfig({displayName:"Container",componentId:"sc-b6d80c3-0"})`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`,d=b.default.section.withConfig({displayName:"Container__Section",componentId:"sc-b6d80c3-1"})`
  padding: 5rem 0;
  @media (max-width: ${a=>a.theme.breakpoints?.tablet||"768px"}) {
    padding: 3rem 0;
  }
`;a.s(["Container",0,c,"Section",0,d])},45903,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(75716),e=a.i(46271),f=a.i(62036),g=a.i(72692),h=a.i(33508),i=a.i(5784),j=a.i(92258),k=a.i(85911),l=a.i(5112),m=a.i(11815),n=a.i(38246);let o=d.default.nav.withConfig({displayName:"Navbar__Nav",componentId:"sc-68b38fda-0"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${a=>a.$scrolled?"70px":"90px"};
  background: ${a=>a.$scrolled?"rgba(255, 255, 255, 0.8)":"transparent"};
  backdrop-filter: ${a=>a.$scrolled?"blur(12px)":"none"};
  z-index: 1000;
  border-bottom: ${a=>a.$scrolled?"1px solid rgba(139, 92, 246, 0.1)":"none"};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`,p=(0,d.default)(m.Container).withConfig({displayName:"Navbar__NavContent",componentId:"sc-68b38fda-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`,q=(0,d.default)(n.default).withConfig({displayName:"Navbar__Logo",componentId:"sc-68b38fda-2"})`
  font-size: 1.75rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;
`,r=d.default.div.withConfig({displayName:"Navbar__NavLinks",componentId:"sc-68b38fda-3"})`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`,s=d.default.div.withConfig({displayName:"Navbar__NavLinkWrapper",componentId:"sc-68b38fda-4"})`
  position: relative;
`,t=(0,d.default)(n.default).withConfig({displayName:"Navbar__NavLink",componentId:"sc-68b38fda-5"})`
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
`,u=(0,d.default)(e.motion.div).withConfig({displayName:"Navbar__DropdownMenu",componentId:"sc-68b38fda-6"})`
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
`,v=d.default.a.withConfig({displayName:"Navbar__DropdownItem",componentId:"sc-68b38fda-7"})`
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
`,w=d.default.button.withConfig({displayName:"Navbar__MenuButton",componentId:"sc-68b38fda-8"})`
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
`,x=(0,d.default)(e.motion.div).withConfig({displayName:"Navbar__MobileDrawer",componentId:"sc-68b38fda-9"})`
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
`,y=(0,d.default)(e.motion.div).withConfig({displayName:"Navbar__Overlay",componentId:"sc-68b38fda-10"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1000;
`;a.s(["Navbar",0,()=>{let[a,d]=(0,c.useState)(!1),[e,m]=(0,c.useState)(!1),[z,A]=(0,c.useState)(!1);(0,c.useEffect)(()=>{let a=()=>{m(window.scrollY>20)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);let B=()=>d(!a);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o,{$scrolled:e,children:(0,b.jsxs)(p,{children:[(0,b.jsx)(q,{href:"/",children:"VJ Portfolio"}),(0,b.jsxs)(r,{children:[(0,b.jsx)(t,{href:"/",children:"Home"}),(0,b.jsx)(t,{href:"/projects",children:"Projects"}),(0,b.jsx)(t,{href:"/resume",children:"Resume"}),(0,b.jsxs)(s,{onMouseEnter:()=>A(!0),onMouseLeave:()=>A(!1),children:[(0,b.jsxs)(t,{href:"/contact",children:["Contact Me ",(0,b.jsx)(i.ChevronDown,{size:14,style:{transform:z?"rotate(180deg)":"none",transition:"transform 0.3s"}})]}),(0,b.jsx)(f.AnimatePresence,{children:z&&(0,b.jsxs)(u,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},transition:{duration:.2},children:[(0,b.jsxs)(v,{href:"mailto:saleem@example.com",children:[(0,b.jsx)(j.Mail,{size:18})," Email Me"]}),(0,b.jsxs)(v,{href:"https://linkedin.com/victor-juwa",target:"_blank",children:[(0,b.jsx)(k.Linkedin,{size:18})," LinkedIn"]}),(0,b.jsxs)(v,{href:"https://github.com/saladinjake",target:"_blank",children:[(0,b.jsx)(l.Github,{size:18})," GitHub"]})]})})]}),(0,b.jsx)(t,{href:"/admin",style:{background:"var(--primary)",color:"white",padding:"0.6rem 1.25rem",borderRadius:"100px",boxShadow:"0 4px 15px rgba(139, 92, 246, 0.3)"},children:"Admin"})]}),(0,b.jsx)(w,{onClick:B,children:a?(0,b.jsx)(h.X,{size:24}):(0,b.jsx)(g.Menu,{size:24})})]})}),(0,b.jsx)(f.AnimatePresence,{children:a&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(y,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:B}),(0,b.jsxs)(x,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:30,stiffness:300},children:[(0,b.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[(0,b.jsx)(q,{href:"/",onClick:B,children:"SK."}),(0,b.jsx)("button",{onClick:B,style:{color:"var(--secondary)"},children:(0,b.jsx)(h.X,{size:28})})]}),(0,b.jsx)(t,{href:"/",onClick:B,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Home"}),(0,b.jsx)(t,{href:"/projects",onClick:B,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Projects"}),(0,b.jsx)(t,{href:"/resume",onClick:B,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Resume"}),(0,b.jsx)(t,{href:"/contact",onClick:B,style:{fontSize:"1.2rem",padding:"0.5rem 0"},children:"Contact Me"}),(0,b.jsx)("div",{style:{marginTop:"auto",display:"flex",flexDirection:"column",gap:"1rem"},children:(0,b.jsx)(n.default,{href:"/admin",onClick:B,style:{background:"var(--primary)",color:"white",padding:"1rem",borderRadius:"1rem",textAlign:"center",fontWeight:700,boxShadow:"0 10px 20px rgba(139, 92, 246, 0.2)"},children:"Admin Portal"})})]})]})})]})}])},12857,a=>{"use strict";let b=(0,a.i(70106).default)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);a.s(["Twitter",()=>b],12857)},25250,a=>{"use strict";var b=a.i(87924),c=a.i(75716),d=a.i(11815),e=a.i(38246),f=a.i(5112),g=a.i(85911),h=a.i(12857),i=a.i(92258);let j=(0,a.i(70106).default)("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),k=c.default.footer.withConfig({displayName:"Footer__FooterBase",componentId:"sc-3a28c693-0"})`
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
`,l=c.default.div.withConfig({displayName:"Footer__FooterGrid",componentId:"sc-3a28c693-1"})`
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
`,m=c.default.div.withConfig({displayName:"Footer__FooterCols",componentId:"sc-3a28c693-2"})`
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
`,n=c.default.div.withConfig({displayName:"Footer__Copyright",componentId:"sc-3a28c693-3"})`
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
`,o=c.default.div.withConfig({displayName:"Footer__SocialLinks",componentId:"sc-3a28c693-4"})`
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
`,p=(0,c.default)(e.default).withConfig({displayName:"Footer__Logo",componentId:"sc-3a28c693-5"})`
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
`;a.s(["Footer",0,()=>(0,b.jsx)(k,{children:(0,b.jsxs)(d.Container,{children:[(0,b.jsxs)(l,{children:[(0,b.jsxs)(m,{children:[(0,b.jsx)(p,{href:"/",children:"SK Portfolio"}),(0,b.jsx)("p",{children:"Architecting high-performance digital experiences with focus on enterprise-grade scalability and robust design patterns."}),(0,b.jsxs)(o,{style:{marginTop:"2.5rem"},children:[(0,b.jsx)("a",{href:"#",children:(0,b.jsx)(g.Linkedin,{size:20})}),(0,b.jsx)("a",{href:"#",children:(0,b.jsx)(f.Github,{size:20})}),(0,b.jsx)("a",{href:"#",children:(0,b.jsx)(h.Twitter,{size:20})}),(0,b.jsx)("a",{href:"#",children:(0,b.jsx)(i.Mail,{size:20})})]})]}),(0,b.jsxs)(m,{children:[(0,b.jsx)("h4",{children:"Sitemap"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsxs)(e.default,{href:"/",children:["Home ",(0,b.jsx)(j,{size:14,opacity:.5})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)(e.default,{href:"/projects",children:["Projects ",(0,b.jsx)(j,{size:14,opacity:.5})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)(e.default,{href:"/resume",children:["Resume ",(0,b.jsx)(j,{size:14,opacity:.5})]})}),(0,b.jsx)("li",{children:(0,b.jsxs)(e.default,{href:"/contact",children:["Contact ",(0,b.jsx)(j,{size:14,opacity:.5})]})})]})]}),(0,b.jsxs)(m,{children:[(0,b.jsx)("h4",{children:"Technical"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"#",children:"Next.js 15"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"#",children:"TypeScript"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"#",children:"Styled Components"})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"#",children:"Framer Motion"})})]})]}),(0,b.jsxs)(m,{children:[(0,b.jsx)("h4",{children:"Hire Me"}),(0,b.jsx)("p",{style:{marginBottom:"1.5rem"},children:"Currently open to senior engineering roles and technical consulting."}),(0,b.jsx)(e.default,{href:"/contact",style:{color:"var(--primary)",fontWeight:800,borderBottom:"2px solid var(--primary)"},children:"Start a Conversation"})]})]}),(0,b.jsxs)(n,{children:[(0,b.jsxs)("span",{children:["© ",new Date().getFullYear()," Saleem Kudra. All rights reserved."]}),(0,b.jsxs)("div",{style:{display:"flex",gap:"2rem"},children:[(0,b.jsx)("a",{href:"#",children:"Privacy Policy"}),(0,b.jsx)("a",{href:"#",children:"Terms of Service"})]})]})]})})],25250)}];

//# sourceMappingURL=_20d85460._.js.map