import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { assets, collections } from "@/lib/catalog";
import { AssetCard } from "@/components/asset-card";
import { NovaListingPreview } from "@/components/nova-template";

const categories=[
  {name:"SaaS & Startups",note:"Products with a point of view"},
  {name:"Portfolios",note:"Independent by design"},
  {name:"Agencies",note:"A home for good work"},
  {name:"E-commerce",note:"Make the details matter"},
  {name:"Dashboards",note:"A clearer way forward"},
  {name:"Creative",note:"Somewhere unexpected"},
];

export default function Home(){
  const nova=assets.find(asset=>asset.id==="nova")!;
  const spotlight=assets.find(asset=>asset.id==="spotlight-card")!;
  const pricing=assets.find(asset=>asset.id==="pricing-table")!;
  return <>
    <section className="home-template-hero">
      <div className="home-template-copy"><div className="eyebrow"><span className="status-dot"/> THE CREATIVE DEVELOPMENT LIBRARY <span className="eyebrow-line"/></div><h1>Build something<br/><em>worth looking at.</em></h1><p>Explore exceptional website templates, discover the components behind them, and bring extraordinary digital experiences into your own projects.</p><div className="home-template-actions"><Link href="/templates" className="button-primary">Explore Templates <ArrowUpRight size={15}/></Link><Link href="/components" className="button-quiet">Explore Components <ArrowRight size={14}/></Link></div><div className="hero-footnote"><span>COMPLETE WEBSITES, MADE EXPLORABLE</span><span>START WITH NOVA ↘</span></div></div>
      <div><div className="home-template-preview"><NovaListingPreview/></div><div className="home-template-label"><span>LIVE TEMPLATE PREVIEW</span><span>NOVA / SAAS WEBSITE / 001</span></div></div>
    </section>
    <section className="home-section"><div className="home-section-heading"><div><div className="eyebrow"><span>01 — START WITH THE WHOLE STORY</span><span className="eyebrow-line"/></div><h2>One website.<br/><em>Every piece, in view.</em></h2></div><p>Explore the complete NOVA website, move between its pages, then open any section to inspect the actual source.</p></div><div className="home-resource-grid home-feature-template"><AssetCard asset={nova} index={0}/><div className="home-feature-note"><span className="eyebrow">A WORKSPACE, NOT A SCREENSHOT</span><h3>Preview the whole site.<br/>Then get into the details.</h3><p>Change the accent palette, switch modes, resize the preview, and navigate the five included pages. Select a component or block to focus it inside the template.</p><Link href="/templates/nova" className="text-link">Explore NOVA <ArrowUpRight size={14}/></Link></div></div></section>
    <section className="home-section home-category-section"><div className="home-section-heading"><div><div className="eyebrow"><span>02 — FIND YOUR STARTING POINT</span><span className="eyebrow-line"/></div><h2>Made for what<br/><em>you’re making.</em></h2></div></div><div className="home-category-row">{categories.map((category,index)=><Link className="home-category" href="/templates" key={category.name}><small>0{index+1} / DISCOVER</small><b>{category.name}</b><span>{category.note}</span></Link>)}</div></section>
    <section className="home-section"><div className="home-section-heading"><div><div className="eyebrow"><span>03 — THE PIECES INSIDE</span><span className="eyebrow-line"/></div><h2>Browse whole sites.<br/><em>Or start with a piece.</em></h2></div><p>Independent component and block discovery remains one click away.</p></div><div className="home-resource-grid">{[spotlight,pricing].map((asset,index)=><AssetCard key={asset.id} asset={asset} index={index}/>)}</div><div className="home-dual-links"><Link href="/components">Explore all components <ArrowRight size={14}/></Link><Link href="/blocks">Explore all blocks <ArrowRight size={14}/></Link></div></section>
    <section className="home-promo"><div><div className="eyebrow"><span>04 — MOTION & MATERIAL</span></div><h2>Good interfaces have<br/><em>a little life in them.</em></h2><p>Step into the 3D & Motion lab for atmospheric experiments and interactive studies. This area is an evolving visual sandbox in the current preview.</p><Link href="/3d-lab" className="button-primary">Visit the lab <ArrowUpRight size={14}/></Link></div><div className="home-motion-art"><div className="home-motion-orbit"/><div className="home-motion-object"/><span>STUDY 004 · FORM IN MOTION</span></div></section>
    <section className="home-section"><div className="home-section-heading"><div><div className="eyebrow"><span>05 — FOLLOW A THREAD</span><span className="eyebrow-line"/></div><h2>Picked with<br/><em>a point of view.</em></h2></div><p>Small collections help you find the next useful detail.</p></div><div className="home-collection-list">{collections.slice(0,4).map((name,index)=><Link href="/collections" key={name}><span>0{index+1}</span> &nbsp; {name} <ArrowUpRight size={12}/></Link>)}</div></section>
    <section className="home-pro-banner"><div><span className="home-pro-label"><Sparkles size={13}/> UICEAN PRO</span><h2>More room for<br/><em>the ambitious ideas.</em></h2><p>Premium access is being shaped now. Pro indicators and access messages in this preview are UI simulations; there is no subscription or payment system connected.</p></div><Link href="/pricing" className="button-quiet">Explore access <ArrowUpRight size={14}/></Link></section>
  </>;
}
