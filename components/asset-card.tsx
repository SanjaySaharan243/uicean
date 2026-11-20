"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Heart, MoveUpRight } from "lucide-react";
import { assets, type Asset } from "@/lib/catalog";
import { readFavorites, recordRecentlyViewed, writeFavorites } from "@/lib/persistence";
import { PricingTable, SpotlightCard } from "@/components/marketplace-resources";

function assetHref(asset: Asset) {
  if (asset.id === "pricing-table") return "/blocks/pricing-table";
  if (asset.id === "spotlight-card") return "/components/spotlight-card";
  if (asset.type === "Component") return `/components/${asset.id}`;
  if (asset.type === "3D experience") return "/3d-lab";
  if (asset.type === "Template") return "/templates";
  return "/blocks";
}

function PreviewArtwork({ asset, index }: { asset: Asset; index: number }) {
  if (asset.id === "pricing-table") return <div className="asset-art resource-art-pricing"><div className="resource-art-pricing-inner"><PricingTable title="Plans for what comes next." description="Choose a little room to grow."/></div><div className="art-topline"><span>Block · Live preview</span><span className="art-arrow"><ArrowUpRight size={14}/></span></div><div className="art-bottomline"><span>FREE</span><span>PRICING</span></div></div>;
  if (asset.id === "spotlight-card") return <div className="asset-art resource-art-spotlight"><SpotlightCard title="A little more depth." description="A soft light follows the pointer."/><div className="art-topline"><span>Component · Live preview</span><span className="art-arrow"><ArrowUpRight size={14}/></span></div><div className="art-bottomline"><span>FREE</span><span>SPOTLIGHT</span></div></div>;
  return <div className={`asset-art art-${asset.art}`}>
    <div className="art-grain" />
    <div className="art-display">
      {asset.art === "orbit" ? <div className="orbit-ui"><div className="orbit-logo"><Image src="/assets/uicean-wave-clear.png" alt="" width={1536} height={1024} /></div><div className="orbit-links"><i/><i/><i/></div><div className="orbit-dot"/></div>
      : asset.art === "forma" ? <><div className="forma-orb"/><span className="forma-label">SHAPE<br/>THE FUTURE</span><span className="forma-index">FIG. 001 — 2025</span></>
      : asset.art === "sonar" ? <div className="sonar-stack"><i/><i/><i/></div>
      : asset.art === "mono" ? <div className="chrome-object"><i/></div>
      : asset.art === "type" ? <div className="kinetic-word">MOVE<br/><em>WITH</em><br/>INTENT.</div>
      : asset.art === "lattice" ? <div className="lattice-grid"><i/><i/><i/><i/></div>
      : asset.art === "pulse" ? <span className="preview-button">Let&apos;s go <ArrowUpRight size={14}/></span>
      : asset.art === "glass" ? <div className="glass-shape"><i/></div>
      : asset.art === "drift" ? <div className="particle-field">{Array.from({length:24},(_,i)=><i key={i} style={{left:`${(i*37)%100}%`,top:`${(i*61)%100}%`,animationDelay:`${i*.08}s`}}/>)}</div>
      : asset.art === "index" ? <div className="template-ui"><span>INDEX®</span><b>Independent<br/>by design.</b><small>SELECTED WORK — 2025</small></div>
      : asset.art === "north" ? <div className="template-ui north-ui"><span>NORTHSTAR</span><b>Think<br/>beyond.</b><small>INTELLIGENCE, REIMAGINED</small></div>
      : asset.art === "arc" ? <div className="template-ui arc-ui"><span>ARC® STUDIO</span><b>We make<br/>meaning.</b><small>DESIGN · DIGITAL · CULTURE</small></div>
      : asset.art === "atelier" ? <div className="template-ui atelier-ui"><span>ATELIER ONE</span><b>Objects<br/>of thought.</b><small>AN INDEPENDENT PRACTICE</small></div>
      : asset.art === "halo" || asset.art === "aura" ? <div className="halo-disc"/>
      : asset.art === "tide" ? <div className="tide-ui"><span>THE RIGHT PLAN.</span><b>$24<span>/mo</span></b><i/></div>
      : asset.art === "signal" ? <div className="signal-ui"><span>“</span><b>Some things just<br/>feel right.</b><small>— SOMEONE, SOMEWHERE</small></div>
      : asset.art === "prism" ? <div className="prism-input">you@somewhere.com <i>→</i></div>
      : asset.art === "stack" ? <div className="stack-ui"><b>Less busy.<br/>More useful.</b><span>01 — A useful thing</span><span>02 — Another thing</span></div>
      : <div className="fold-button">A little movement <MoveUpRight size={13}/></div>}
    </div>
    <div className="art-topline"><span>{asset.type}</span><span className="art-arrow"><ArrowUpRight size={14}/></span></div>
    <div className="art-bottomline"><span>{asset.price === "Free" ? "FREE" : "UICEAN / PLUS"}</span><span>{String(index+1).padStart(2,"0")} — {String(assets.length).padStart(2,"0")}</span></div>
  </div>;
}

export function AssetCard({ asset, index = 0 }: { asset: Asset; index?: number }) {
  const [liked, setLiked] = useState(false);
  const href = assetHref(asset);
  useEffect(() => setLiked(readFavorites().includes(asset.id)), [asset.id]);
  function toggleFavorite() {
    const current = readFavorites();
    const next = liked ? current.filter(id => id !== asset.id) : [...current, asset.id];
    writeFavorites(next);
    setLiked(!liked);
  }
  function markViewed() { recordRecentlyViewed(asset.id); }
  return <article className="asset-card" style={{ animationDelay: `${index % 5 * 70}ms` }}>
    <div className="asset-link">
      <Link href={href} className="asset-preview-link" onClick={markViewed} aria-label={`Preview ${asset.title}`}><PreviewArtwork asset={asset} index={index}/></Link>
      <div className="asset-meta"><div><span className="asset-category">{asset.category}</span><h3><Link href={href} onClick={markViewed}>{asset.title}</Link></h3></div><button className={`heart-button ${liked ? "liked" : ""}`} onClick={toggleFavorite} aria-label={liked ? `Remove ${asset.title} from favourites` : `Add ${asset.title} to favourites`} aria-pressed={liked}><Heart size={16} fill={liked ? "currentColor" : "none"}/></button></div>
      <div className="asset-meta-bottom"><div className="tag-list">{asset.tags.map(tag=><span key={tag}>{tag}</span>)}</div><span className={asset.price === "Free" ? "price-free" : "price-pro"}>{asset.price}</span></div>
    </div>
  </article>;
}
