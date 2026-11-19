import Image from "next/image";
import Link from "next/link";

export function BrandLogo({ footer = false }: { footer?: boolean }) {
  return <Link href="/" className={`brand ${footer ? "brand-footer" : ""}`} aria-label="UICEAN home">
    <Image className="brand-symbol" src="/assets/uicean-wave-clear.png" alt="" width={1536} height={1024} priority />
    <Image className="brand-wordmark" src="/assets/uicean-wordmark-clear.png" alt="UICEAN" width={1806} height={668} priority />
  </Link>;
}
