export type NovaDoc = {
  id: string;
  title: string;
  kind: "page" | "component" | "block";
  description: string;
  sectionId: string;
  variants: string[];
  sourceFiles: string[];
};

export const novaTemplate = {
  id: "nova",
  slug: "nova",
  name: "NOVA — SaaS Website",
  description: "A complete product website for ambitious software teams, built as a clear, adaptable foundation.",
  category: "SaaS & Startups",
  technologies: ["Next.js", "React", "TypeScript", "CSS"],
  pages: [
    { id: "home", title: "Home", description: "Product introduction and conversion path." },
    { id: "features", title: "Features", description: "A closer look at the NOVA toolkit." },
    { id: "pricing", title: "Pricing", description: "Three clear plans for teams at every stage." },
    { id: "about", title: "About", description: "The thinking behind NOVA." },
    { id: "contact", title: "Contact", description: "A direct path to the product team." },
  ],
  components: [
    { id: "navbar", title: "Navigation", description: "Responsive site navigation with page switching." },
    { id: "button", title: "Button", description: "Primary and quiet actions with visible focus states." },
    { id: "badge", title: "Badge", description: "Compact product status and category labels." },
    { id: "feature-card", title: "Feature Card", description: "A reusable card for product capabilities." },
    { id: "footer", title: "Footer", description: "Product links and a newsletter call to action." },
  ],
  blocks: [
    { id: "hero", title: "Hero", description: "A focused product introduction with a live product window." },
    { id: "features", title: "Feature Section", description: "A three-part overview of the product experience." },
    { id: "bento", title: "Bento Grid", description: "An editorial grid for the platform's core capabilities." },
    { id: "pricing", title: "Pricing", description: "Configurable Starter, Growth, and Scale plans." },
    { id: "testimonials", title: "Testimonials", description: "Customer quotes arranged as a compact proof section." },
    { id: "faq", title: "FAQ", description: "An accessible, interactive accordion." },
    { id: "cta", title: "Call to Action", description: "A closing product invitation." },
  ],
  install: {
    command: "npm install react react-dom lucide-react",
    files: ["nova-template.tsx", "nova-template.css"],
  },
  access: "Free",
} as const;

export const novaDocs: NovaDoc[] = [
  ...novaTemplate.pages.map((item) => ({ ...item, kind: "page" as const, sectionId: item.id === "home" ? "hero" : item.id, variants: ["Default"], sourceFiles: ["nova-template.tsx", "nova-template.css"] })),
  ...novaTemplate.components.map((item) => ({ ...item, kind: "component" as const, sectionId: item.id, variants: item.id === "button" ? ["Primary", "Quiet"] : ["Default"], sourceFiles: ["nova-template.tsx", "nova-template.css"] })),
  ...novaTemplate.blocks.map((item) => ({ ...item, kind: "block" as const, sectionId: item.id, variants: item.id === "hero" ? ["Centered", "Split"] : ["Default"], sourceFiles: ["nova-template.tsx", "nova-template.css"] })),
];

export function getNovaDoc(id: string, kind?: NovaDoc["kind"]) {
  return novaDocs.find((doc) => doc.id === id && (!kind || doc.kind === kind));
}
