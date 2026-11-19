export type Asset = { id:string; title:string; type:string; category:string; tags:string[]; price:"Free"|"Pro"; color:string; art:string; description:string };
export const assets:Asset[] = [
{id:"orbit",title:"Orbit Navigation",type:"Component",category:"Navigation",tags:["React","Motion"],price:"Free",color:"#c5ff71",art:"orbit",description:"A navigation system that moves like a small solar system."},
{id:"forma",title:"Forma — Shape the future",type:"Hero block",category:"Hero",tags:["WebGL","Three.js"],price:"Pro",color:"#a995ff",art:"forma",description:"A dimensional landing page for ideas with gravity."},
{id:"sonar",title:"Sonar Cards",type:"Component",category:"Cards",tags:["React","CSS"],price:"Free",color:"#7bc9ff",art:"sonar",description:"Depth-aware cards that respond to a passing cursor."},
{id:"halo",title:"Halo Field",type:"Background",category:"Backgrounds",tags:["Canvas","Motion"],price:"Pro",color:"#ff8e71",art:"halo",description:"An atmospheric field of light for quiet interfaces."},
{id:"monolith",title:"Monolith / 01",type:"3D experience",category:"3D",tags:["R3F","Three.js"],price:"Pro",color:"#ffce69",art:"mono",description:"Sculptural chrome, made to be touched."},
{id:"index",title:"Index Studio",type:"Template",category:"Portfolio",tags:["Next.js","TypeScript"],price:"Pro",color:"#ff8caa",art:"index",description:"A typographic home for independent creative studios."},
{id:"fold",title:"Soft Fold",type:"Component",category:"Buttons",tags:["React","CSS"],price:"Free",color:"#d4a5ff",art:"fold",description:"A tactile button with a little paper-like movement."},
{id:"lattice",title:"Lattice / Bento",type:"Block",category:"Bento",tags:["React","Tailwind"],price:"Pro",color:"#95efda",art:"lattice",description:"A modular product story with room to breathe."},
{id:"kinetic",title:"Kinetic Type",type:"Animation",category:"Typography",tags:["GSAP","Motion"],price:"Free",color:"#ffb879",art:"type",description:"Letters that lean into the momentum of a page."},
{id:"glass",title:"Glasshouse",type:"3D experience",category:"3D",tags:["WebGL","R3F"],price:"Pro",color:"#85c8ff",art:"glass",description:"A quiet, floating study in translucent form."},
{id:"tide",title:"Tidal / Pricing",type:"Block",category:"Pricing",tags:["React","CSS"],price:"Pro",color:"#90e0ae",art:"tide",description:"Pricing designed with a little more perspective."},
{id:"north",title:"Northstar AI",type:"Template",category:"AI",tags:["Next.js","TypeScript"],price:"Pro",color:"#d1a7ff",art:"north",description:"A considered launchpad for intelligent products."},
{id:"pulse",title:"Pulse Button",type:"Component",category:"Buttons",tags:["React","Motion"],price:"Free",color:"#ff9d80",art:"pulse",description:"A bright, responsive call to action."},
{id:"drift",title:"Drift Particles",type:"3D experience",category:"3D",tags:["Canvas","WebGL"],price:"Pro",color:"#8de5eb",art:"drift",description:"A field of particles, slow as weather."},
{id:"arc",title:"Arc Agency",type:"Template",category:"Agency",tags:["Next.js","React"],price:"Pro",color:"#ffc477",art:"arc",description:"A high-contrast portfolio for ambitious studios."},
{id:"signal",title:"Signal / Social proof",type:"Block",category:"Testimonials",tags:["React","Tailwind"],price:"Free",color:"#b4ef76",art:"signal",description:"A compact wall of people saying the right thing."},
{id:"prism",title:"Prism Input",type:"Component",category:"Inputs",tags:["React","CSS"],price:"Free",color:"#c2a7ff",art:"prism",description:"A focused input with a refracted edge."},
{id:"aura",title:"Aura Mesh",type:"Background",category:"Backgrounds",tags:["Canvas","WebGL"],price:"Pro",color:"#ff9ec5",art:"aura",description:"An animated mesh gradient that stays out of the way."},
{id:"stack",title:"Stack / Features",type:"Block",category:"Features",tags:["React","Tailwind"],price:"Free",color:"#84cbff",art:"stack",description:"A clear feature story with a little dimensionality."},
{id:"atelier",title:"Atelier One",type:"Template",category:"Portfolio",tags:["Next.js","React"],price:"Pro",color:"#e6a3ff",art:"atelier",description:"A warm, editorial portfolio for makers."}
,{id:"orbit-pill",title:"Orbit / Status badge",type:"Component",category:"Badges",tags:["React","CSS"],price:"Free",color:"#c5ff71",art:"orbit",description:"A tiny status signal with room for a little character."}
,{id:"switchback",title:"Switchback Toggle",type:"Component",category:"Inputs",tags:["React","Motion"],price:"Free",color:"#a7e989",art:"pulse",description:"A considered toggle with a soft, tactile switch."}
,{id:"ticker",title:"Slow ticker",type:"Component",category:"Typography",tags:["React","CSS"],price:"Free",color:"#e8bf7a",art:"type",description:"A patient marquee with a little editorial rhythm."}
,{id:"nav-fold",title:"Fold Navigation",type:"Component",category:"Navigation",tags:["React","Motion"],price:"Pro",color:"#cab1fa",art:"fold",description:"A compact navigation menu that opens like a note."}
,{id:"card-index",title:"Index Card",type:"Component",category:"Cards",tags:["React","CSS"],price:"Free",color:"#ff9daa",art:"index",description:"An editorial card that makes the content the cover."}
,{id:"input-prism",title:"Prism Search",type:"Component",category:"Inputs",tags:["React","CSS"],price:"Pro",color:"#c5a4ff",art:"prism",description:"A refracted search field with a quiet focus state."}
,{id:"bento-lite",title:"Bento / Mosaic",type:"Component",category:"Bento",tags:["React","Tailwind"],price:"Pro",color:"#9ee7d1",art:"lattice",description:"A responsive grid that lets the most important tile lead."}
,{id:"orbit-menu",title:"Orbit Menu",type:"Component",category:"Navigation",tags:["React","Motion"],price:"Pro",color:"#d5ed97",art:"orbit",description:"A radial menu for a compact set of useful destinations."}
,{id:"soft-glow",title:"Soft Glow Card",type:"Component",category:"Cards",tags:["React","CSS"],price:"Free",color:"#8fd7ed",art:"sonar",description:"A card with a cursor-aware light source and soft edges."}
,{id:"type-poster",title:"Type Poster",type:"Component",category:"Typography",tags:["React","GSAP"],price:"Pro",color:"#f3ad77",art:"type",description:"A kinetic headline system for short, sharp statements."}
,{id:"pill-button",title:"Pill / Arrow",type:"Component",category:"Buttons",tags:["React","CSS"],price:"Free",color:"#e79f7a",art:"pulse",description:"A simple pill button with a well-timed arrow shift."}
,{id:"mesh-card",title:"Mesh Surface",type:"Component",category:"Backgrounds",tags:["React","Canvas"],price:"Pro",color:"#d39ef3",art:"aura",description:"A softly animated mesh surface for elevated content."}
,{id:"floating-label",title:"Floating Label",type:"Component",category:"Inputs",tags:["React","CSS"],price:"Free",color:"#92c7f0",art:"prism",description:"A legible input label that moves with its field state."}
,{id:"feature-stack",title:"Feature Stack",type:"Component",category:"Hero",tags:["React","Tailwind"],price:"Pro",color:"#96d0ea",art:"stack",description:"A layered product intro for a single clear message."}
,{id:"orbit-sphere",title:"Orbit Sphere",type:"3D experience",category:"3D",tags:["Three.js","R3F"],price:"Pro",color:"#b8d69c",art:"mono",description:"A metallic sphere with a cursor-responsive light rig."}
,{id:"glass-garden",title:"Glass Garden",type:"3D experience",category:"3D",tags:["Three.js","R3F"],price:"Pro",color:"#9cd7da",art:"glass",description:"A floating arrangement of glass objects in a calm space."}
,{id:"plainworks",title:"Plainworks Studio",type:"Template",category:"Agency",tags:["Next.js","TypeScript"],price:"Pro",color:"#c5de9d",art:"arc",description:"A flexible studio site with an editorial point of view."}
,{id:"proof",title:"Proof / Testimonials",type:"Block",category:"Testimonials",tags:["React","Tailwind"],price:"Free",color:"#b6e68b",art:"signal",description:"A generous testimonial section with room for real voices."}
,{id:"bright-start",title:"Bright Start / CTA",type:"Block",category:"CTA",tags:["React","CSS"],price:"Free",color:"#ffba85",art:"pulse",description:"A confident closing moment for a focused landing page."}
,{id:"curio-faq",title:"Curio / FAQ",type:"Block",category:"FAQ",tags:["React","Motion"],price:"Pro",color:"#c6a6f2",art:"fold",description:"An accordion section that keeps answers within reach."}
,{id:"soft-footer",title:"Soft Footer",type:"Block",category:"Footer",tags:["React","Tailwind"],price:"Free",color:"#9addc7",art:"lattice",description:"A warm, compact footer with a clear sense of place."}
, {id:"soft-cursor",title:"Soft Cursor Trail",type:"Component",category:"Interactive effects",tags:["React","CSS"],price:"Pro",color:"#9cd6e6",art:"drift",description:"A restrained cursor trail for playful, tactile moments."}
];
export const collections = ["Objects of desire","The soft interface","Future, in motion","A better kind of bento","Independent by design","Depth studies"];
export const navItems = [{label:"Discover",href:"/explore"},{label:"Components",href:"/components"},{label:"Blocks",href:"/blocks"},{label:"3D Lab",href:"/3d-lab"},{label:"Templates",href:"/templates"},{label:"Collections",href:"/collections"}];
