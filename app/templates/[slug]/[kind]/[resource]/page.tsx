import { readFile } from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TemplateWorkspace } from "@/components/template-workspace";
import { novaDocs, novaTemplate } from "@/lib/template-registry";

export function generateStaticParams(){return novaDocs.filter(doc=>doc.kind!=="page").map(doc=>({slug:"nova",kind:doc.kind==="component"?"components":"blocks",resource:doc.id}))}
export async function generateMetadata({params}:{params:Promise<{slug:string;kind:string;resource:string}>}):Promise<Metadata>{const {slug,kind,resource}=await params;const doc=novaDocs.find(item=>item.id===resource&&item.kind===(kind==="components"?"component":"block"));if(slug!=="nova"||!doc)return {};return {title:`${doc.title} — NOVA Template | UICEAN`,description:doc.description}}
export default async function TemplateResourcePage({params}:{params:Promise<{slug:string;kind:string;resource:string}>}){const {slug,kind,resource}=await params;const resourceKind=kind==="components"?"component":"block";const doc=novaDocs.find(item=>item.id===resource&&item.kind===resourceKind);if(slug!=="nova"||!doc||(kind!=="components"&&kind!=="blocks"))notFound();const root=process.cwd();const sourceFiles=Object.fromEntries(await Promise.all(novaTemplate.install.files.map(async filename=>[filename,await readFile(path.join(root,"components",filename),"utf8")])));return <TemplateWorkspace initialDocId={resource} initialDocKind={resourceKind} sourceFiles={sourceFiles}/>}
