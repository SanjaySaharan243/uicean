import { ComponentDetail } from "@/components/marketplace";
import {assets} from "@/lib/catalog";
export function generateStaticParams(){return assets.filter(a=>a.type==="Component").map(a=>({slug:a.id}))}
export default async function DetailPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <ComponentDetail slug={slug}/>}
