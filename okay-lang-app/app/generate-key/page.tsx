import Link from "next/link";

export default function KeyGenerationPage(){
    return(
         <main className="h-screen bg-linear-to-b from-[#FFFCEC] from-50% to-[#FFEA73] to-77% flex flex-col items-center gap-18">
            <h1 className="text-black">Nega</h1>
            <Link href="/">Back</Link>
         </main>
    );
}