import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "UICEAN — Explore. Build. Inspire.",
  description: "A creative technology library for thoughtful components, beautiful blocks, and impossible little worlds.",
  applicationName: "UICEAN",
  icons: { icon: [{ url: "/icon.png", type: "image/png" }], apple: [{ url: "/icon.png", type: "image/png" }] },
  openGraph: { title: "UICEAN — Explore. Build. Inspire.", description: "An independent creative library. Design freedom at your fingertips.", siteName: "UICEAN", type: "website" },
  twitter: { card: "summary", title: "UICEAN — Explore. Build. Inspire.", description: "An independent creative library." },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('uicean-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})()` }} /></head><body><SiteShell>{children}</SiteShell></body></html>;
}
