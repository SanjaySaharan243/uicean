import { Marketplace } from "@/components/marketplace";
export function generateStaticParams(){return ["explore","components","blocks","3d-lab","templates","collections","remix","dashboard","pricing","docs"].map(section=>({section}))}
export default async function SectionPage({params}:{params:Promise<{section:string}>}){const {section}=await params;return <Marketplace section={section}/>}
