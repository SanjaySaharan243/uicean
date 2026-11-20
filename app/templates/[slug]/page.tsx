import { readFile } from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TemplateWorkspace } from "@/components/template-workspace";
import { novaTemplate } from "@/lib/template-registry";

export function generateStaticParams(){return [{slug:"nova"}]}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;if(slug!=="nova")return {};return {title:"NOVA — SaaS Website Template | UICEAN",description:novaTemplate.description,openGraph:{title:"NOVA — SaaS Website Template",description:novaTemplate.description,type:"website"}}}
export default async function TemplatePage({params,searchParams}:{params:Promise<{slug:string}>;searchParams:Promise<{page?:string}>}){const {slug}=await params;const {page="home"}=await searchParams;if(slug!=="nova")notFound();const root=process.cwd();const sourceFiles=Object.fromEntries(await Promise.all(novaTemplate.install.files.map(async filename=>[filename,await readFile(path.join(root,"components",filename),"utf8")])));return <TemplateWorkspace initialDocId={novaTemplate.pages.some(item=>item.id===page)?page:"home"} sourceFiles={sourceFiles}/>}
