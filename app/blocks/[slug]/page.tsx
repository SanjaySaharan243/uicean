import { notFound } from "next/navigation";
import { ResourceDetail } from "@/components/marketplace-resources";

export function generateStaticParams(){return [{slug:"pricing-table"}]}
export default async function BlockDetailPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(slug!=="pricing-table")notFound();return <ResourceDetail kind="pricing"/>}
