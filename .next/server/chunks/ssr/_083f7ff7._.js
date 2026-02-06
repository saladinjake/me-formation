module.exports=[38783,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].ReactServerDOMTurbopackClient},53254,a=>{"use strict";let b=(0,a.i(70106).default)("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);a.s(["Code2",()=>b],53254)},52495,a=>{"use strict";let b=(0,a.i(70106).default)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);a.s(["ExternalLink",()=>b],52495)},17545,a=>{"use strict";let b=(0,a.i(70106).default)("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);a.s(["Layers",()=>b],17545)},53524,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(75716),e=a.i(46271),f=a.i(62036);let g=(0,a.i(70106).default)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);var h=a.i(5112),i=a.i(52495),j=a.i(53254),k=a.i(17545),l=a.i(11815),m=a.i(45903),n=a.i(25250);let o=d.default.div.withConfig({displayName:"page__PageHeader",componentId:"sc-7368d8bf-0"})`
  padding: 12rem 0 6rem;
  background: radial-gradient(circle at 50% 100%, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
  text-align: center;
  border-bottom: 1px solid var(--border);
`,p=d.default.span.withConfig({displayName:"page__HeaderBadge",componentId:"sc-7368d8bf-1"})`
  background: var(--accent);
  color: var(--primary);
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  font-weight: 800;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`,q=d.default.div.withConfig({displayName:"page__SearchContainer",componentId:"sc-7368d8bf-2"})`
  max-width: 800px;
  margin: 3rem auto 0;
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`,r=d.default.div.withConfig({displayName:"page__SearchWrapper",componentId:"sc-7368d8bf-3"})`
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
`,s=d.default.button.withConfig({displayName:"page__FilterBtn",componentId:"sc-7368d8bf-4"})`
  padding: 0 1.5rem;
  border-radius: 1.25rem;
  background: ${a=>a.$active?"var(--primary)":"white"};
  color: ${a=>a.$active?"white":"var(--secondary)"};
  border: 1px solid ${a=>a.$active?"var(--primary)":"var(--border)"};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  box-shadow: var(--shadow-sm);
  
  &:hover {
    background: ${a=>a.$active?"var(--primary-dark)":"var(--accent)"};
  }
`,t=d.default.div.withConfig({displayName:"page__Grid",componentId:"sc-7368d8bf-5"})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,u=(0,d.default)(e.motion.div).withConfig({displayName:"page__Card",componentId:"sc-7368d8bf-6"})`
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
`,v=d.default.div.withConfig({displayName:"page__CardImage",componentId:"sc-7368d8bf-7"})`
  position: relative;
  height: 240px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${u}:hover & img { transform: scale(1.1); }
  
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
`,w=d.default.div.withConfig({displayName:"page__CardBody",componentId:"sc-7368d8bf-8"})`
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
`,x=d.default.div.withConfig({displayName:"page__TagList",componentId:"sc-7368d8bf-9"})`
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
`,y=d.default.div.withConfig({displayName:"page__LinkRow",componentId:"sc-7368d8bf-10"})`
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
`;function z(){let[a,d]=(0,c.useState)([]),[z,A]=(0,c.useState)([]),[B,C]=(0,c.useState)([]),[D,E]=(0,c.useState)(""),[F,G]=(0,c.useState)("All");return(0,c.useEffect)(()=>{fetch("/api/data?type=projects").then(a=>a.json()).then(a=>{A(a),C(a)}),fetch("/api/data?type=side_projects").then(a=>a.json()).then(a=>d(a))},[]),(0,c.useEffect)(()=>{let a=z.filter(a=>a.title.toLowerCase().includes(D.toLowerCase())||a.stacks.some(a=>a.toLowerCase().includes(D.toLowerCase())));"All"!==F&&(a=a.filter(a=>a.complexity===F)),C(a)},[D,z,F]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m.Navbar,{}),(0,b.jsx)(o,{children:(0,b.jsxs)(l.Container,{children:[(0,b.jsxs)(e.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,b.jsx)(p,{children:"Portfolio Repository"}),(0,b.jsxs)("h1",{style:{fontSize:"4rem",fontWeight:900,marginTop:"1.5rem",letterSpacing:"-2px"},children:["My Technical ",(0,b.jsx)("span",{style:{color:"var(--primary)"},children:"Projects"})]}),(0,b.jsx)("p",{style:{color:"var(--secondary)",fontSize:"1.2rem",marginTop:"1rem",maxWidth:"600px",margin:"1rem auto 0"},children:"Exploring the boundary between performance and design through enterprise-grade architecture."})]}),(0,b.jsxs)(q,{children:[(0,b.jsxs)(r,{children:[(0,b.jsx)(g,{size:24}),(0,b.jsx)("input",{placeholder:"Search by tech stack (e.g. Next.js, TypeScript)...",value:D,onChange:a=>E(a.target.value)})]}),(0,b.jsx)("div",{style:{display:"flex",gap:"0.5rem"},children:["All","High","Medium"].map(a=>(0,b.jsx)(s,{$active:F===a,onClick:()=>G(a),children:a},a))})]})]})}),(0,b.jsx)(l.Section,{children:(0,b.jsx)(l.Container,{children:(0,b.jsx)(f.AnimatePresence,{children:(0,b.jsx)(t,{children:B.map((a,c)=>(0,b.jsxs)(u,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.1*c},children:[(0,b.jsxs)(v,{children:[(0,b.jsx)("img",{src:a.image||"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600",alt:a.title}),(0,b.jsxs)("span",{className:"complexity",children:[a.complexity," Complexity"]})]}),(0,b.jsxs)(w,{children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1rem"},children:[(0,b.jsx)(j.Code2,{size:20,color:"var(--primary)"}),(0,b.jsx)("h3",{style:{margin:0},children:a.title})]}),(0,b.jsx)("p",{children:a.description}),(0,b.jsx)(x,{children:a.stacks?.map(a=>(0,b.jsx)("span",{children:a},a))}),(0,b.jsxs)(y,{children:[(0,b.jsxs)("a",{href:a.github,target:"_blank",children:[(0,b.jsx)(h.Github,{size:18})," Source"]}),(0,b.jsxs)("a",{href:a.liveLink,target:"_blank",children:[(0,b.jsx)(i.ExternalLink,{size:18})," Live Performance"]})]})]})]},a.title))})})})}),(0,b.jsx)(l.Section,{style:{background:"var(--accent)",paddingTop:"6rem",paddingBottom:"8rem"},children:(0,b.jsxs)(l.Container,{children:[(0,b.jsxs)("div",{style:{textAlign:"center",marginBottom:"4rem"},children:[(0,b.jsx)(p,{children:"Internal Labs"}),(0,b.jsxs)("h2",{style:{fontSize:"3rem",fontWeight:900,marginTop:"1rem",letterSpacing:"-1.5px"},children:["Side ",(0,b.jsx)("span",{style:{color:"var(--primary)"},children:"Projects"})]}),(0,b.jsx)("p",{style:{color:"var(--secondary)",marginTop:"0.5rem"},children:"Experimental builds and open source contributions."})]}),(0,b.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem"},children:a.map((a,c)=>(0,b.jsxs)(e.motion.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},style:{background:"white",padding:"2rem",borderRadius:"1.5rem",border:"1px solid var(--border)",display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,b.jsx)("div",{style:{background:"var(--accent)",width:50,height:50,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--primary)"},children:(0,b.jsx)(k.Layers,{size:24})}),(0,b.jsx)("h4",{style:{fontSize:"1.25rem",fontWeight:800},children:a.title}),(0,b.jsx)("p",{style:{color:"var(--secondary)",fontSize:"0.95rem",lineHeight:"1.6"},children:a.description}),(0,b.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"auto",paddingTop:"1rem"},children:a.tech?.map(a=>(0,b.jsx)("span",{style:{fontSize:"0.7rem",fontWeight:800,background:"var(--accent)",color:"var(--primary)",padding:"0.25rem 0.6rem",borderRadius:"4px"},children:a},a))}),(0,b.jsxs)("a",{href:a.link,target:"_blank",style:{marginTop:"1rem",display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:700,fontSize:"0.9rem",color:"var(--primary)"},children:[(0,b.jsx)(h.Github,{size:16})," View Repository"]})]},c))})]})}),(0,b.jsx)(n.Footer,{})]})}a.s(["default",()=>z],53524)}];

//# sourceMappingURL=_083f7ff7._.js.map