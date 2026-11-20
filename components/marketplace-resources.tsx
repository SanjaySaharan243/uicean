"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Copy, Sparkles } from "lucide-react";
import type { CSSProperties, PointerEvent } from "react";

type PricingPlan = { name: string; price: number; description: string; features: string[]; cta: string; recommended?: boolean };
const plans: PricingPlan[] = [
  { name: "Free", price: 0, description: "For everyone starting out.", features: ["1 website template", "9 blocks and sections", "4 custom animations"], cta: "Get started for free" },
  { name: "Pro", price: 99, description: "For early-stage founders, solopreneurs, and indie developers.", features: ["7 templates", "74 blocks and sections", "23 illustrations", "15 custom animations"], cta: "Get all-access", recommended: true },
  { name: "Pro Team", price: 499, description: "For teams and agencies.", features: ["All templates", "All components and sections", "Team-ready access"], cta: "Get all-access for your team" },
];

export type PricingVariant = "Default" | "Two Columns" | "Three Columns Subscription" | "Two Columns Subscription" | "Discounts";

export function PricingTable({ variant = "Default", title = "Build your dream landing page, today.", description = "Get access to thoughtfully crafted components, website sections, and creative resources. Build better experiences without starting from scratch." }: { variant?: PricingVariant; title?: string; description?: string }) {
  const [yearly, setYearly] = useState(false);
  const subscription = variant.includes("Subscription");
  const visiblePlans = variant.startsWith("Two Columns") ? plans.slice(0, 2) : plans;
  return <section className="u-pricing" aria-label="Pricing plans">
    <div className="u-pricing-intro"><span className="u-kicker">A LITTLE MORE ROOM TO MAKE</span><h2>{title}</h2><p>{description}</p>
      {subscription && <div className="u-billing" role="group" aria-label="Billing period"><button aria-pressed={!yearly} onClick={() => setYearly(false)}>Monthly</button><button aria-pressed={yearly} onClick={() => setYearly(true)}>Yearly <span>Save 20%</span></button></div>}
    </div>
    <div className={`u-plan-grid ${visiblePlans.length === 2 ? "two" : "three"}`}>
      {visiblePlans.map((plan, index) => {
        const amount = subscription && yearly ? Math.round(plan.price * 0.8) : plan.price;
        const discount = variant === "Discounts";
        const original = discount && plan.price ? Math.round(plan.price * 1.25) : null;
        return <article className={`u-plan ${plan.recommended ? "recommended" : ""}`} key={plan.name}>
          {plan.recommended && <span className="u-plan-badge">MOST POPULAR</span>}
          {discount && <span className="u-plan-badge sale">LIMITED OFFER · 20% OFF</span>}
          <div className="u-plan-name">{plan.name}</div><p className="u-plan-description">{plan.description}</p>
          <div className="u-price">{original !== null && <del>${original}</del>}<strong>${amount}</strong><span>{subscription ? "/ month" : " / once"}</span></div>
          {discount && plan.price > 0 && <small className="u-discount">20% off · introductory pricing</small>}
          <ul>{plan.features.map(feature => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
          <a className={plan.recommended ? "u-plan-cta primary" : "u-plan-cta"} href="/pricing">{plan.cta}<ArrowRight size={14}/></a>
          <small className="u-plan-foot">{index === 0 ? "No credit card required" : "One simple payment"}</small>
        </article>;
      })}
    </div>
  </section>;
}

type SpotlightProps = { title?: string; description?: string; eyebrow?: string; color?: string; intensity?: number; gradient?: boolean; icon?: string };
export function SpotlightCard({ title = "Make room for a bright idea.", description = "A soft field of light follows your pointer, bringing quiet depth to a useful little card.", eyebrow = "A SMALL MOMENT OF LIGHT", color = "#c9f38a", intensity = 0.24, gradient = true, icon = "✳" }: SpotlightProps) {
  const [point, setPoint] = useState({ x: 50, y: 50 });
  const onMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    setPoint({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 });
  };
  const style = { "--spot-x": `${point.x}%`, "--spot-y": `${point.y}%`, "--spot-color": color, "--spot-intensity": intensity, "--spot-fill": gradient ? "1" : "0" } as CSSProperties;
  return <article className="spot-card" style={style} onPointerMove={onMove} tabIndex={0} aria-label={`${title} spotlight card`}>
    <div className="spot-card-glow" aria-hidden="true"/><span className="spot-icon" aria-hidden="true">{icon}</span><span className="spot-eyebrow">{eyebrow}</span><h3>{title}</h3><p>{description}</p><span className="spot-card-link">Explore the details <ArrowRight size={14}/></span>
  </article>;
}

const pricingFiles: Record<string,string> = {
  "pricing-data.ts": `export type PricingPlan = {\n  name: string;\n  price: number;\n  description: string;\n  features: string[];\n  cta: string;\n  recommended?: boolean;\n};\n\nexport const pricingPlans: PricingPlan[] = [\n  { name: "Free", price: 0, description: "For everyone starting out.", features: ["1 website template", "9 blocks and sections", "4 custom animations"], cta: "Get started for free" },\n  { name: "Pro", price: 99, description: "For early-stage founders, solopreneurs, and indie developers.", features: ["7 templates", "74 blocks and sections", "23 illustrations", "15 custom animations"], cta: "Get all-access", recommended: true },\n  { name: "Pro Team", price: 499, description: "For teams and agencies.", features: ["All templates", "All components and sections", "Team-ready access"], cta: "Get all-access for your team" },\n];`,
  "pricing-table.tsx": `import { pricingPlans } from "./pricing-data";\nimport "./pricing-table.css";\n\ntype PricingTableProps = { title?: string; description?: string; columns?: 2 | 3 };\n\nexport function PricingTable({ title = "Build your dream landing page, today.", description = "Get access to thoughtfully crafted components, website sections, and creative resources. Build better experiences without starting from scratch.", columns = 3 }: PricingTableProps) {\n  const plans = columns === 2 ? pricingPlans.slice(0, 2) : pricingPlans;\n  return <section className="pricing-table">\n    <header className="pricing-table__intro"><h2>{title}</h2><p>{description}</p></header>\n    <div className={columns === 2 ? "pricing-table__plans is-two" : "pricing-table__plans"}>\n      {plans.map((plan) => <article className={plan.recommended ? "pricing-table__card is-recommended" : "pricing-table__card"} key={plan.name}>\n        <h3>{plan.name}</h3><p>{plan.description}</p><strong>\u0024{plan.price}</strong>\n        <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><a href="/pricing">{plan.cta}</a>\n      </article>)}\n    </div>\n  </section>;\n}`,
  "pricing-table.css": `.pricing-table { max-width: 1080px; margin: auto; color: #f0f1e9; }\n.pricing-table__intro { max-width: 620px; margin: 0 auto 28px; text-align: center; }\n.pricing-table__intro h2 { font-size: clamp(28px, 4vw, 44px); letter-spacing: -.05em; }\n.pricing-table__intro p, .pricing-table__card p { color: #a4a99b; line-height: 1.7; }\n.pricing-table__plans { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }\n.pricing-table__plans.is-two { grid-template-columns: repeat(2, minmax(0, 1fr)); max-width: 720px; margin-inline: auto; }\n.pricing-table__card { padding: 22px; border: 1px solid #34382f; border-radius: 6px; background: #171a15; }\n.pricing-table__card.is-recommended { border-color: #91aa69; background: linear-gradient(145deg, #293321, #171a15 72%); }\n.pricing-table__card strong { font-size: 38px; }\n.pricing-table__card ul { display: grid; gap: 10px; padding: 16px 0; border-top: 1px solid #34382f; list-style: none; }\n.pricing-table__card a { display: block; padding: 11px; border: 1px solid #91aa69; color: inherit; text-align: center; text-decoration: none; }\n@media (max-width: 760px) { .pricing-table__plans, .pricing-table__plans.is-two { grid-template-columns: 1fr; } }\n@media (prefers-reduced-motion: reduce) { .pricing-table * { scroll-behavior: auto; } }`,
  "example.tsx": `import { PricingTable } from "./pricing-table";\n\nexport default function PricingSection() {\n  return <PricingTable\n    title="Build your next project"\n    description="Choose the right plan for your team."\n    columns={3}\n  />;\n}`
};
const spotlightFiles: Record<string,string> = {
  "spotlight-card.tsx": `"use client";\nimport { useState, type PointerEvent, type CSSProperties, type ReactNode } from "react";\n\ntype SpotlightCardProps = { title: string; description: string; eyebrow?: string; color?: string; intensity?: number; children?: ReactNode };\n\nexport function SpotlightCard({ title, description, eyebrow = "A SMALL MOMENT OF LIGHT", color = "#c9f38a", intensity = .24, children }: SpotlightCardProps) {\n  const [point, setPoint] = useState({ x: 50, y: 50 });\n  function onPointerMove(event: PointerEvent<HTMLElement>) {\n    if (event.pointerType === "touch") return;\n    const box = event.currentTarget.getBoundingClientRect();\n    setPoint({ x: (event.clientX - box.left) / box.width * 100, y: (event.clientY - box.top) / box.height * 100 });\n  }\n  const style = { "--x": point.x + "%", "--y": point.y + "%", "--color": color, "--intensity": intensity } as CSSProperties;\n  return <article className="spotlight-card" style={style} onPointerMove={onPointerMove} tabIndex={0}>\n    <span className="eyebrow">{eyebrow}</span><h3>{title}</h3><p>{description}</p>{children}\n  </article>;\n}`,
  "example.tsx": `import { SpotlightCard } from "./spotlight-card";\n\nexport function SpotlightExamples() {\n  return <div className="card-grid">\n    <SpotlightCard title="Make room for a bright idea." description="A quiet field of light follows the pointer." />\n    <SpotlightCard title="A little more depth." description="Warm light, tuned for the details." color="#d9b67e" intensity={.18} />\n  </div>;\n}`,
  "spotlight-card.css": `.spotlight-card {\n  position: relative; overflow: hidden; isolation: isolate;\n  border: 1px solid color-mix(in srgb, var(--color) 22%, transparent);\n  border-radius: 20px; padding: 28px;\n  background: radial-gradient(320px circle at var(--x, 50%) var(--y, 50%), color-mix(in srgb, var(--color) calc(var(--intensity) * 100%), transparent), transparent 72%), #171a15;\n  transition: border-color 180ms ease, transform 180ms ease;\n}\n.spotlight-card:hover, .spotlight-card:focus-visible { border-color: color-mix(in srgb, var(--color) 65%, transparent); transform: translateY(-2px); outline: none; }\n@media (prefers-reduced-motion: reduce) { .spotlight-card { transition: none; } }\n@media (hover: none) { .spotlight-card { background: radial-gradient(300px circle at 50% 0%, color-mix(in srgb, var(--color) 16%, transparent), transparent 75%), #171a15; } }`
};

const variantOptions: {label: PricingVariant; pro?: boolean}[] = [
  {label:"Default"},{label:"Two Columns"},{label:"Three Columns Subscription",pro:true},{label:"Two Columns Subscription",pro:true},{label:"Discounts",pro:true}
];

function HighlightedCode({source}:{source:string}) {
  const tokens = source.split(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\b(?:import|export|from|type|const|return|default|function|new|as|true|false|null)\b|\b\d+(?:\.\d+)?\b)/g);
  return <code>{tokens.map((token,index)=>{
    const className = /^("|'|`)/.test(token) ? "syntax-string" : /^(import|export|from|type|const|return|default|function|new|as|true|false|null)$/.test(token) ? "syntax-keyword" : /^\d/.test(token) ? "syntax-number" : "";
    return <span className={className} key={index}>{token}</span>;
  })}</code>;
}

function ProMessage() { return <div className="resource-pro"><Sparkles size={24}/><span className="resource-pro-label">UICEAN PRO</span><h3>For UICEAN Pro users only</h3><p>This variant is available with UICEAN Pro. Get access to premium variants, additional visuals, and ready-to-use code.</p><Link href="/pricing" className="resource-button">Get UICEAN Pro <ArrowRight size={15}/></Link><small>Access control is simulated for this demo; no subscription status is connected.</small></div>; }

export function ResourceDetail({kind}:{kind:"pricing"|"spotlight"}) {
  const isPricing = kind === "pricing";
  const [tab,setTab] = useState<"Preview"|"Code"|"AI Prompt">("Preview");
  const [variant,setVariant] = useState<PricingVariant>("Default");
  const [file,setFile] = useState(isPricing?"pricing-table.tsx":"spotlight-card.tsx");
  const [copied,setCopied] = useState("");
  const currentFiles = isPricing ? pricingFiles : spotlightFiles;
  const pro = isPricing && variantOptions.find(v=>v.label===variant)?.pro;
  const code = currentFiles[file] || Object.values(currentFiles)[0];
  const prompt = useMemo(()=>`Build and integrate the UICEAN ${isPricing?"Pricing Table block":"Spotlight Card component"} into my existing React project.\n\nFirst inspect my project structure and identify the existing styling system. Integrate the component using the supplied source code, preserve the existing architecture, and avoid unnecessary dependencies. Match the supplied preview.\n\nRESOURCE\nName: ${isPricing?"Pricing Table":"Spotlight Card"}\nPurpose: ${isPricing?"A responsive pricing section with configurable plans and selectable two- or three-column layouts.":"An accessible card with a smooth pointer-following radial spotlight, configurable color and intensity, and a useful touch fallback."}\nSelected variant: ${variant}\nTechnology: React + TypeScript${isPricing?" + CSS":" + CSS"}\nDependencies: None beyond React.\n\nINSTALLATION\nCopy the files below into your project. Add the stylesheet import where indicated. No component CLI is configured.\n\nFILE STRUCTURE\n${Object.keys(currentFiles).map(f=>`- ${f}`).join("\n")}\n\n${Object.entries(currentFiles).map(([name,contents])=>`FILE: ${name}\n\n${contents}`).join("\n\n")}\n\nRESPONSIVE AND ACCESSIBILITY\nKeep the layout usable on small screens, use semantic HTML and labeled controls, preserve keyboard focus, and respect prefers-reduced-motion. Keep interactions functional. Integrate this into the existing project without replacing unrelated files or breaking current routes.`,[isPricing,variant,currentFiles]);
  async function copy(text:string, label:string){try{await navigator.clipboard.writeText(text);setCopied(label);window.setTimeout(()=>setCopied(""),1800);}catch{setCopied("Clipboard unavailable");window.setTimeout(()=>setCopied(""),1800)}}
  const installText = "npm install react react-dom";
  const title = isPricing ? "Pricing Table" : "Spotlight Card";
  const category = isPricing ? "Blocks" : "Components";
  return <main className="resource-page">
    <div className="resource-crumb"><Link href={`/${isPricing?"blocks":"components"}`}><ArrowLeft size={13}/> {category}</Link><span>/</span><span>{title}</span></div>
    <header className="resource-heading"><div><div className="resource-kicker">{isPricing?"BLOCK / PRICING":"COMPONENT / INTERACTIVE EFFECT"}<i/> FREE</div><h1>{title}<span>.</span></h1><p>{isPricing?"A flexible pricing section with multiple layouts, subscription options, and responsive styling.":"An interactive card with a soft radial spotlight that follows the pointer, illuminating the surface with subtle depth."}</p><div className="resource-meta"><span>React</span><span>CSS</span><span>Responsive · Yes</span><span>Access · Free variants</span></div></div><button className="resource-button secondary" onClick={()=>copy(installText,"install")}>{copied==="install"?<Check size={15}/>:<Copy size={15}/>} Copy install command</button></header>
    <section className="resource-stage"><div className="resource-toolbar"><div className="resource-tabs">{(["Preview","Code","AI Prompt"] as const).map(t=><button key={t} className={tab===t?"active":""} onClick={()=>setTab(t)}>{t}</button>)}</div><div className="resource-toolbar-right">{isPricing&&<select aria-label="Select pricing variant" value={variant} onChange={e=>setVariant(e.target.value as PricingVariant)}>{variantOptions.map(v=><option key={v.label} value={v.label}>{v.label}{v.pro?" · UICEAN Pro":""}</option>)}</select>}<span className="resource-live"><i/> LIVE PREVIEW</span></div></div>
      {tab==="Preview"&&<div className="resource-preview">{isPricing?<PricingTable variant={variant}/>:<div className="spotlight-examples"><div className="spotlight-examples-heading"><span>MOVE YOUR POINTER ACROSS THE CARDS</span><span>TOUCH FRIENDLY · KEYBOARD FOCUSED</span></div><div className="spotlight-example-grid"><SpotlightCard/><SpotlightCard title="A little more depth." description="Warm light, tuned for the finer details. The spotlight color and strength are yours to shape." eyebrow="WARM STUDY / 002" color="#d9b67e" intensity={0.2} icon="◒"/><SpotlightCard title="A softer signal." description="Keep the effect subtle and let your content lead." eyebrow="QUIET STUDY / 003" color="#9bd9d0" intensity={0.14} gradient={false} icon="↗"/></div></div>}</div>}
      {tab==="Code"&&(pro?<ProMessage/>:<div className="resource-code"><div className="resource-files">{Object.keys(currentFiles).map(f=><button key={f} className={f===file?"selected":""} onClick={()=>setFile(f)}>{f}</button>)}</div><div className="resource-codebar"><span>{file} <i>· TypeScript</i></span><button onClick={()=>copy(code,"code")}>{copied==="code"?<Check size={14}/>:<Copy size={14}/>} {copied==="code"?"Copied":"Copy code"}</button></div><pre><HighlightedCode source={code}/></pre></div>)}
      {tab==="AI Prompt"&&(pro?<ProMessage/>:<div className="resource-prompt"><div><div><span className="resource-kicker">READY FOR YOUR CODING ASSISTANT</span><h3>A prompt with the whole picture.</h3><p>Includes the selected resource, variant, install steps, file structure, source, and integration guidance.</p></div><button className="resource-button" onClick={()=>copy(prompt,"prompt")}>{copied==="prompt"?<Check size={15}/>:<Copy size={15}/>} {copied==="prompt"?"Copied full prompt":"Copy AI Prompt"}</button></div><pre>{prompt}</pre></div>)}
    </section>
    <section className="resource-install"><div className="resource-install-title"><span className="resource-kicker">TAKE IT WITH YOU</span><h2>Installation</h2><p>Manual install instructions for your existing React project. No CLI distribution is configured.</p></div><div className="resource-steps"><article><span>01</span><div><h3>Project setup</h3><p>Use a React app with TypeScript enabled. Keep your current styling setup.</p></div></article><article><span>02</span><div><h3>Dependencies</h3><p>React and React DOM are peer dependencies. If they are not already installed, run: npm install react react-dom.</p><button className="resource-copy-inline" onClick={()=>copy(installText,"install")}>{copied==="install"?<Check size={13}/>:<Copy size={13}/>} {copied==="install"?"Copied":"Copy install command"}</button></div></article><article><span>03</span><div><h3>Add the files</h3><p>{isPricing?"Add pricing-data.ts, pricing-table.tsx, and pricing-table.css to src/components/pricing/.":"Add spotlight-card.tsx, example.tsx, and spotlight-card.css to src/components/spotlight/."} Use the Code tab to copy each file. For the spotlight card, import its CSS once in your app.</p></div></article><article><span>04</span><div><h3>Use the resource</h3><pre>{isPricing?`<PricingTable\n  title="Build your next project"\n  description="Choose the right plan for your team."\n/>`:`<SpotlightCard\n  title="A bright idea"\n  description="A soft light follows your pointer."\n  color="#c9f38a"\n  intensity={0.24}\n/>`}</pre></div></article></div></section>
  </main>;
}
