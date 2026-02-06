module.exports=[40777,a=>{"use strict";var b=a.i(87924),c=a.i(33217),d=a.i(45903),e=a.i(25250),f=a.i(72131),g=a.i(75716),h=a.i(46271),i=a.i(62036),j=a.i(11815),k=a.i(32860),l=a.i(70106);let m=(0,l.default)("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);var n=a.i(53254),o=a.i(82478);let p=(0,g.default)(j.Section).withConfig({displayName:"Hero__HeroSection",componentId:"sc-f3ff59f0-0"})`
  padding-top: 140px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
`,q=g.default.div.withConfig({displayName:"Hero__HeroGrid",componentId:"sc-f3ff59f0-1"})`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 5rem;
  align-items: center;
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,r=(0,g.default)(h.motion.span).withConfig({displayName:"Hero__Badge",componentId:"sc-f3ff59f0-2"})`
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
`,s=(0,g.default)(h.motion.h1).withConfig({displayName:"Hero__Title",componentId:"sc-f3ff59f0-3"})`
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
`,t=(0,g.default)(h.motion.p).withConfig({displayName:"Hero__Description",componentId:"sc-f3ff59f0-4"})`
  font-size: 1.25rem;
  color: var(--secondary);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 600px;
`,u=(0,g.default)(h.motion.div).withConfig({displayName:"Hero__CTAWrap",componentId:"sc-f3ff59f0-5"})`
  display: flex;
  gap: 1.5rem;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,v=g.default.button.withConfig({displayName:"Hero__CTAButton",componentId:"sc-f3ff59f0-6"})`
  padding: 1.25rem 2.5rem;
  border-radius: 1rem;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: ${a=>a.$primary?"var(--primary)":"white"};
  color: ${a=>a.$primary?"white":"var(--foreground)"};
  border: ${a=>a.$primary?"none":"1px solid var(--border)"};
  box-shadow: ${a=>a.$primary?"0 10px 30px rgba(139, 92, 246, 0.3)":"var(--shadow-md)"};

  &:hover {
    transform: translateY(-5px);
    background: ${a=>a.$primary?"var(--primary-dark)":"var(--accent)"};
  }
`,w=(0,g.default)(h.motion.div).withConfig({displayName:"Hero__SliderWrapper",componentId:"sc-f3ff59f0-7"})`
  position: relative;
  height: 500px;
  border-radius: 2.5rem;
  overflow: hidden;
  box-shadow: var(--shadow-glass);
  border: 1px solid rgba(255, 255, 255, 0.3);
`,x=(0,g.default)(h.motion.div).withConfig({displayName:"Hero__SliderBackground",componentId:"sc-f3ff59f0-8"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${a=>a.$color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  color: white;
`,y=g.default.div.withConfig({displayName:"Hero__IconWrap",componentId:"sc-f3ff59f0-9"})`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`,z=[{title:"5+ Years of Excellence",desc:"Building scalable enterprise applications with cutting-edge tech.",color:"linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",icon:(0,b.jsx)(n.Code2,{size:40})},{title:"20+ Successful Products",desc:"From fintech to e-commerce, delivering value to global clients.",color:"linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",icon:(0,b.jsx)(m,{size:40})},{title:"Performance Driven",desc:"Optimizing for speed, accessibility, and robust architecture.",color:"linear-gradient(135deg, #6D28D9 0%, #4C1D95 100%)",icon:(0,b.jsx)(o.Rocket,{size:40})}],A=({data:a})=>{let[c,d]=(0,f.useState)(0);return(0,f.useEffect)(()=>{let a=setInterval(()=>{d(a=>(a+1)%z.length)},4500);return()=>clearInterval(a)},[]),(0,b.jsx)(p,{children:(0,b.jsx)(j.Container,{children:(0,b.jsxs)(q,{children:[(0,b.jsxs)(h.motion.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.8,ease:"easeOut"},children:[(0,b.jsx)(r,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:"Available for New Projects"}),(0,b.jsxs)(s,{children:["Hello, I am ",(0,b.jsx)("br",{}),(0,b.jsx)("span",{children:a?.name||"Saleem Kudra"})]}),(0,b.jsxs)(t,{children:["A ",a?.title||"Senior Fullstack Developer"," with ",a?.experience_years||8," years of experience.",a?.bio||"I specialize in building complex, data-driven interfaces with modern React patterns and enterprise-grade architecture."]}),(0,b.jsxs)(u,{children:[(0,b.jsxs)(v,{$primary:!0,onClick:()=>window.location.href="/projects",children:["View My Work ",(0,b.jsx)(k.ArrowRight,{size:20})]}),(0,b.jsx)(v,{onClick:()=>window.location.href="/contact",children:"Hire Me"})]})]}),(0,b.jsx)(w,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:1,delay:.3},children:(0,b.jsx)(i.AnimatePresence,{mode:"wait",children:(0,b.jsxs)(x,{$color:z[c].color,initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},transition:{duration:.6,cubicBezier:[.4,0,.2,1]},children:[(0,b.jsx)(y,{children:z[c].icon}),(0,b.jsx)(h.motion.h3,{style:{fontSize:"2.5rem",marginBottom:"1rem",fontWeight:800,color:"#fff"},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:z[c].title}),(0,b.jsx)(h.motion.p,{style:{fontSize:"1.2rem",opacity:.9},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:z[c].desc})]},c)})})]})})})},B=g.default.div.withConfig({displayName:"Skills__SkillGrid",componentId:"sc-43a9266-0"})`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  justify-content: center;
  margin-top: 4rem;
`,C=(0,g.default)(h.motion.div).withConfig({displayName:"Skills__SkillPill",componentId:"sc-43a9266-1"})`
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
`,D=(0,g.default)(h.motion.h2).withConfig({displayName:"Skills__SectionTitle",componentId:"sc-43a9266-2"})`
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1.25rem;
  letter-spacing: -1px;
`,E=(0,g.default)(h.motion.p).withConfig({displayName:"Skills__SectionDesc",componentId:"sc-43a9266-3"})`
  text-align: center;
  color: var(--secondary);
  max-width: 650px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.7;
`,F=({data:a})=>(0,b.jsxs)(j.Section,{style:{background:"var(--accent)",position:"relative",overflow:"hidden"},children:[(0,b.jsx)("div",{style:{position:"absolute",top:"-10%",right:"-5%",width:"400px",height:"400px",background:"rgba(139, 92, 246, 0.03)",borderRadius:"50%",filter:"blur(80px)"}}),(0,b.jsxs)(j.Container,{children:[(0,b.jsx)(D,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Technical Ecosystem"}),(0,b.jsx)(E,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},children:"Leveraging a diverse stack of modern technologies to build high-performance, enterprise-standard applications with complex design patterns."}),(0,b.jsx)(B,{children:a?.map((a,c)=>(0,b.jsx)(C,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{type:"spring",stiffness:260,damping:20,delay:.05*c},viewport:{once:!0},children:a.name},a.name))})]})]});var G=a.i(5784);let H=(0,l.default)("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]),I=(0,l.default)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);var J=a.i(52495);let K=(0,g.default)(h.motion.div).withConfig({displayName:"Experience__ExpCard",componentId:"sc-32cca709-0"})`
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
`,L=g.default.div.withConfig({displayName:"Experience__ExpHeader",componentId:"sc-32cca709-1"})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  gap: 2rem;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`,M=g.default.div.withConfig({displayName:"Experience__CompanyIcon",componentId:"sc-32cca709-2"})`
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
`,N=g.default.div.withConfig({displayName:"Experience__MainInfo",componentId:"sc-32cca709-3"})`
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
`,O=g.default.div.withConfig({displayName:"Experience__MetaInfo",componentId:"sc-32cca709-4"})`
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
`,P=(0,g.default)(h.motion.div).withConfig({displayName:"Experience__CollapsibleContent",componentId:"sc-32cca709-5"})`
  overflow: hidden;
`,Q=g.default.div.withConfig({displayName:"Experience__Divider",componentId:"sc-32cca709-6"})`
  height: 1px;
  background: linear-gradient(to right, var(--border), transparent);
  margin: 1.5rem 0;
`,R=g.default.div.withConfig({displayName:"Experience__TechStack",componentId:"sc-32cca709-7"})`
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
`,S=g.default.div.withConfig({displayName:"Experience__ProductGrid",componentId:"sc-32cca709-8"})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`,T=(0,g.default)(h.motion.div).withConfig({displayName:"Experience__ProductCard",componentId:"sc-32cca709-9"})`
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
`,U=g.default.div.withConfig({displayName:"Experience__ProductTags",componentId:"sc-32cca709-10"})`
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
`,V=g.default.a.withConfig({displayName:"Experience__ProductLink",componentId:"sc-32cca709-11"})`
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
`,W=g.default.ul.withConfig({displayName:"Experience__AchievementList",componentId:"sc-32cca709-12"})`
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
`,X=({exp:a})=>{let[c,d]=(0,f.useState)(!1);return(0,b.jsxs)(K,{layout:!0,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[(0,b.jsxs)(L,{onClick:()=>d(!c),children:[(0,b.jsxs)("div",{style:{display:"flex",gap:"1.5rem",flex:1},children:[(0,b.jsx)(M,{children:(0,b.jsx)(H,{size:28})}),(0,b.jsxs)(N,{children:[(0,b.jsx)("h3",{children:a.company}),(0,b.jsx)("h4",{children:a.role})]})]}),(0,b.jsxs)(O,{children:[(0,b.jsxs)("span",{children:[(0,b.jsx)(I,{size:16})," ",a.period]}),(0,b.jsx)(h.motion.div,{animate:{rotate:180*!!c},style:{color:"var(--primary)",background:"var(--accent)",borderRadius:"50%",padding:"5px"},children:(0,b.jsx)(G.ChevronDown,{size:20})})]})]}),(0,b.jsx)(i.AnimatePresence,{children:c&&(0,b.jsxs)(P,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.4,ease:"easeInOut"},children:[(0,b.jsx)(Q,{}),(0,b.jsx)("p",{style:{color:"var(--foreground)",fontSize:"1.05rem"},children:a.description}),(0,b.jsx)("h5",{style:{margin:"1.5rem 0 0.5rem",fontSize:"1.1rem",color:"var(--primary-dark)"},children:"Key Achievements:"}),(0,b.jsx)(W,{children:a.achievements?.map((a,c)=>(0,b.jsx)("li",{children:a},c))}),a.products&&a.products.length>0&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h5",{style:{margin:"2rem 0 1rem",fontSize:"1.1rem",color:"var(--primary-dark)"},children:"Delivered Products:"}),(0,b.jsx)(S,{children:a.products.map((a,c)=>(0,b.jsxs)(T,{whileHover:{y:-5},children:[(0,b.jsx)("img",{src:a.image,alt:a.name}),(0,b.jsx)("h5",{children:a.name}),(0,b.jsx)("p",{children:a.description}),a.techStack&&(0,b.jsx)(U,{children:a.techStack.map(a=>(0,b.jsx)("span",{children:a},a))}),a.link&&(0,b.jsxs)(V,{href:a.link,target:"_blank",children:["View Project ",(0,b.jsx)(J.ExternalLink,{size:14})]})]},c))})]}),a.stacks&&(0,b.jsx)(R,{children:a.stacks.map(a=>(0,b.jsx)("span",{children:a},a))})]})})]})},Y=({data:a})=>(0,b.jsx)(j.Section,{children:(0,b.jsxs)(j.Container,{children:[(0,b.jsxs)("div",{style:{textAlign:"center",marginBottom:"4rem"},children:[(0,b.jsx)(h.motion.h2,{style:{fontSize:"3rem",fontWeight:800,letterSpacing:"-1px"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Professional Journey"}),(0,b.jsx)(h.motion.p,{style:{color:"var(--secondary)",fontSize:"1.2rem",marginTop:"1rem"},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},children:"8 years of delivering high-impact solutions for enterprise clients."})]}),(0,b.jsx)("div",{children:a?.map((a,c)=>(0,b.jsx)(X,{exp:a},c))})]})}),Z=g.default.div.withConfig({displayName:"Strength__StrengthGrid",componentId:"sc-1d2b9225-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 4rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,$=g.default.div.withConfig({displayName:"Strength__BarContainer",componentId:"sc-1d2b9225-1"})`
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
`,_=g.default.div.withConfig({displayName:"Strength__LabelRow",componentId:"sc-1d2b9225-2"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  h4 { font-size: 1.1rem; color: var(--foreground); }
  span { font-weight: 800; color: var(--primary); font-size: 1.1rem; }
`,aa=g.default.div.withConfig({displayName:"Strength__BarTrack",componentId:"sc-1d2b9225-3"})`
  height: 12px;
  background: var(--accent);
  border-radius: 100px;
  overflow: hidden;
  border: 1px solid rgba(139, 92, 246, 0.1);
`,ab=(0,g.default)(h.motion.div).withConfig({displayName:"Strength__BarFill",componentId:"sc-1d2b9225-4"})`
  height: 100%;
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%);
  border-radius: 100px;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.2);
`,ac=g.default.div.withConfig({displayName:"Strength__Header",componentId:"sc-1d2b9225-5"})`
  text-align: center;
`,ad=({label:a,value:c,render:d})=>(0,b.jsxs)($,{children:[(0,b.jsxs)(_,{children:[(0,b.jsx)("h4",{children:a}),d(c)]}),(0,b.jsx)(aa,{children:(0,b.jsx)(ab,{initial:{width:0},whileInView:{width:`${c}%`},transition:{duration:1.5,ease:"easeOut"},viewport:{once:!0}})})]}),ae=({data:a})=>{let c=a?.slice(0,12)||[];return(0,b.jsx)(j.Section,{style:{background:"var(--accent)",position:"relative"},children:(0,b.jsxs)(j.Container,{children:[(0,b.jsxs)(ac,{children:[(0,b.jsx)(h.motion.h2,{style:{fontSize:"3rem",fontWeight:800,letterSpacing:"-1px"},initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},children:"Core Competencies"}),(0,b.jsxs)(h.motion.p,{style:{color:"var(--secondary)",fontSize:"1.2rem",marginTop:"1rem",maxWidth:"600px",margin:"1rem auto 0"},initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.2},viewport:{once:!0},children:["Demonstrating expertise through ",(0,b.jsx)("strong",{children:"Design Patterns"})," for granular UI control and api solutions."]})]}),(0,b.jsx)(Z,{children:c.map((a,c)=>(0,b.jsx)(ad,{label:a.name,value:a.level,render:a=>(0,b.jsxs)("span",{children:[a,"%"]})},c))})]})})};var af=a.i(33508),ag=a.i(93518);let ah=(0,l.default)("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),ai=g.default.div.withConfig({displayName:"Certificates__CertGrid",componentId:"sc-5dfec564-0"})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
`,aj=(0,g.default)(h.motion.div).withConfig({displayName:"Certificates__CertCard",componentId:"sc-5dfec564-1"})`
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
`,ak=g.default.div.withConfig({displayName:"Certificates__ImageWrapper",componentId:"sc-5dfec564-2"})`
  position: relative;
  height: 220px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${aj}:hover & img {
    transform: scale(1.1);
  }
`,al=g.default.div.withConfig({displayName:"Certificates__Overlay",componentId:"sc-5dfec564-3"})`
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

  ${aj}:hover & {
    opacity: 1;
  }
`,am=g.default.div.withConfig({displayName:"Certificates__CertInfo",componentId:"sc-5dfec564-4"})`
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
`,an=(0,g.default)(h.motion.div).withConfig({displayName:"Certificates__ModalBackdrop",componentId:"sc-5dfec564-5"})`
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
`,ao=(0,g.default)(h.motion.div).withConfig({displayName:"Certificates__ModalContainer",componentId:"sc-5dfec564-6"})`
  background: white;
  width: 100%;
  max-width: 900px;
  border-radius: 2.5rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
`,ap=g.default.button.withConfig({displayName:"Certificates__CloseButton",componentId:"sc-5dfec564-7"})`
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
`,aq=({data:a})=>{let[c,d]=(0,f.useState)(null);return(0,b.jsxs)(j.Section,{children:[(0,b.jsxs)(j.Container,{children:[(0,b.jsxs)("div",{style:{textAlign:"center"},children:[(0,b.jsx)(h.motion.h2,{style:{fontSize:"3rem",fontWeight:800},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Verified Expertise"}),(0,b.jsx)(h.motion.p,{style:{color:"var(--secondary)",fontSize:"1.2rem",marginTop:"1rem"},initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.2},viewport:{once:!0},children:"A collection of certifications and honors validating technical proficiency."})]}),(0,b.jsx)(ai,{children:a?.map((a,c)=>(0,b.jsxs)(aj,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},transition:{delay:.1*c},viewport:{once:!0},onClick:()=>d(a),children:[(0,b.jsxs)(ak,{children:[(0,b.jsx)("img",{src:a.image,alt:a.title}),(0,b.jsx)(al,{children:(0,b.jsx)(ah,{size:32})})]}),(0,b.jsxs)(am,{children:[(0,b.jsx)("span",{className:"badge",children:a.issuer}),(0,b.jsx)("h4",{children:a.title}),(0,b.jsx)("p",{children:a.date})]})]},a.id))})]}),(0,b.jsx)(i.AnimatePresence,{children:c&&(0,b.jsx)(an,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>d(null),children:(0,b.jsxs)(ao,{initial:{scale:.8,y:50,opacity:0},animate:{scale:1,y:0,opacity:1},exit:{scale:.8,y:50,opacity:0},onClick:a=>a.stopPropagation(),children:[(0,b.jsx)(ap,{onClick:()=>d(null),children:(0,b.jsx)(af.X,{size:24})}),(0,b.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(400px, 1fr) 1.2fr",gap:"0"},children:[(0,b.jsx)("div",{style:{height:"500px"},children:(0,b.jsx)("img",{src:c.image,alt:c.title,style:{width:"100%",height:"100%",objectFit:"cover"}})}),(0,b.jsxs)("div",{style:{padding:"4rem 3rem",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,b.jsx)(ag.Award,{size:60,style:{color:"var(--primary)",marginBottom:"2rem"}}),(0,b.jsx)("h3",{style:{fontSize:"2rem",marginBottom:"1rem",lineHeight:"1.2"},children:c.title}),(0,b.jsxs)("p",{style:{color:"var(--secondary)",fontSize:"1.1rem",marginBottom:"2.5rem",lineHeight:"1.6"},children:["Successfully verified and issued by ",(0,b.jsx)("strong",{children:c.issuer})," in ",c.date,". This credential recognizes advanced proficiency in architectural design and technical implementation."]}),(0,b.jsxs)("button",{style:{background:"var(--foreground)",color:"white",padding:"1.25rem 2rem",borderRadius:"1rem",fontWeight:700,display:"flex",alignItems:"center",gap:"0.75rem",width:"fit-content"},children:["Verify Credential ",(0,b.jsx)(J.ExternalLink,{size:20})]})]})]})]})})})]})},ar=g.default.main.withConfig({displayName:"page__PageWrapper",componentId:"sc-d2cb3505-0"})`
  background: white;
  min-height: 100vh;
`,as=g.default.div.withConfig({displayName:"page__LoadingOverlay",componentId:"sc-d2cb3505-1"})`
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
`;function at(){let{data:a,isLoading:f}=(0,c.useQuery)({queryKey:["about"],queryFn:()=>fetch("/api/data?type=about").then(a=>a.json())}),{data:g,isLoading:h}=(0,c.useQuery)({queryKey:["skills"],queryFn:()=>fetch("/api/data?type=skills").then(a=>a.json())}),{data:i,isLoading:j}=(0,c.useQuery)({queryKey:["experience"],queryFn:()=>fetch("/api/data?type=experience").then(a=>a.json())}),{data:k,isLoading:l}=(0,c.useQuery)({queryKey:["certificates"],queryFn:()=>fetch("/api/data?type=certificates").then(a=>a.json())});return f||h||j||l?(0,b.jsx)(as,{children:"SK Portfolio Initializing..."}):(0,b.jsxs)(ar,{children:[(0,b.jsx)(d.Navbar,{}),(0,b.jsx)(A,{data:a}),(0,b.jsx)("div",{id:"about",children:(0,b.jsx)(ae,{data:g})}),(0,b.jsx)("div",{id:"skills",children:(0,b.jsx)(F,{data:g})}),(0,b.jsx)("div",{id:"experience",children:(0,b.jsx)(Y,{data:i})}),(0,b.jsx)("div",{id:"certificates",children:(0,b.jsx)(aq,{data:k})}),(0,b.jsx)(e.Footer,{})]})}a.s(["default",()=>at],40777)}];

//# sourceMappingURL=src_app_page_tsx_a7111f3e._.js.map