import React from "react";
import {createRoot} from "react-dom/client";
import {Canvas} from "@react-three/fiber";
import {Float, Stars, OrbitControls} from "@react-three/drei";
import * as THREE from "three";
import "./styles.css";

type WindowName="about"|"projects"|"contact"|null;

function Scene(){
  return <Canvas camera={{position:[0,0,7],fov:55}} dpr={[1,1.5]} gl={{antialias:true,alpha:true}}>
    <ambientLight intensity={0.7}/>
    <pointLight position={[3,2,4]} intensity={25}/>
    <Float speed={1.3} rotationIntensity={1.2} floatIntensity={1.4}>
      <mesh>
        <icosahedronGeometry args={[1.45,1]}/>
        <meshStandardMaterial color="#8c7cff" wireframe emissive="#3b2db8" emissiveIntensity={2}/>
      </mesh>
    </Float>
    <Stars radius={45} depth={25} count={1000} factor={2} saturation={0} fade speed={0.4}/>
    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35}/>
  </Canvas>
}

const projects=[
  {title:"JARVIS AI",tag:"AI / Voice / Vision",desc:"A futuristic personal AI assistant interface with voice control, vision and automation."},
  {title:"NEON CONTROL",tag:"WebGL / UI",desc:"Interactive cinematic control interface designed around depth, motion and spatial navigation."},
  {title:"SMART SYSTEM",tag:"Full-Stack",desc:"A modern full-stack product concept with realtime data and polished responsive UX."}
];

function App(){
 const [win,setWin]=React.useState<WindowName>(null);
 const [sent,setSent]=React.useState(false);

 const open=(x:WindowName)=>setWin(x);
 return <main className="shell">
   <div className="noise"/>
   <div className="scene"><Scene/></div>

   <header className="topbar">
    <div className="brand"><span className="dot"/>PORTFOLIO<span className="muted">.OS</span></div>
    <div className="status"><span className="pulse"/>SYSTEM ONLINE</div>
   </header>

   <section className="hero">
    <div className="eyebrow">CREATIVE DEVELOPER · DIGITAL ARCHITECT</div>
    <h1>Build the<br/><span>Impossible.</span></h1>
    <p>I design immersive digital experiences where creative interfaces, WebGL and engineering meet.</p>
    <button className="enter" onClick={()=>open("projects")}>ENTER EXPERIENCE <span>↗</span></button>
   </section>

   <nav className="dock" aria-label="Portfolio navigation">
    <button onClick={()=>open("about")}><b>01</b><span>ABOUT</span></button>
    <button onClick={()=>open("projects")}><b>02</b><span>PROJECTS</span></button>
    <button onClick={()=>open("contact")}><b>03</b><span>CONTACT</span></button>
   </nav>

   <div className="hint">DRAG / EXPLORE / DISCOVER</div>

   {win && <div className="overlay" onMouseDown={(e)=>{if(e.target===e.currentTarget)setWin(null)}}>
    <section className="window" role="dialog" aria-modal="true">
      <div className="windowbar">
       <div className="lights"><i/><i/><i/></div>
       <span>{win.toUpperCase()}_MODULE</span>
       <button className="close" onClick={()=>setWin(null)}>×</button>
      </div>
      {win==="about" && <div className="content about">
        <div><span className="eyebrow">01 / ABOUT ME</span><h2>Engineering with<br/><em>imagination.</em></h2></div>
        <p>I'm a developer focused on interactive web experiences, AI products and futuristic interfaces. My approach combines clean engineering with visual storytelling.</p>
        <div className="stats"><div><strong>20+</strong><span>PROJECTS</span></div><div><strong>3D</strong><span>WEBGL</span></div><div><strong>AI</strong><span>PRODUCTS</span></div></div>
      </div>}
      {win==="projects" && <div className="content">
        <span className="eyebrow">02 / SELECTED WORK</span><h2>Project <em>Archive</em></h2>
        <div className="cards">{projects.map((p,i)=><article className="card" key={p.title}><div className="num">0{i+1}</div><div><small>{p.tag}</small><h3>{p.title}</h3><p>{p.desc}</p></div><span className="arrow">↗</span></article>)}</div>
      </div>}
      {win==="contact" && <div className="content">
        <span className="eyebrow">03 / CONTACT</span><h2>Let's make<br/><em>something rare.</em></h2>
        {!sent ? <form onSubmit={(e)=>{e.preventDefault();setSent(true)}}>
          <input required placeholder="Your name"/><input required type="email" placeholder="Email address"/>
          <textarea required placeholder="Tell me about the project..."/>
          <button className="send" type="submit">SEND TRANSMISSION ↗</button>
        </form> : <div className="success"><span>✓</span><h3>Transmission received.</h3><p>Thanks. Your message has been queued successfully.</p></div>}
      </div>}
    </section>
   </div>}
 </main>
}
createRoot(document.getElementById("root")!).render(<App/>);