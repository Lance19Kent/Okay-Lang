import Link from "next/link";

export default function KeyGenerationPage(){
    return(
        <div className="px-3 w-full flex flex-col justify-between h-screen">
            <div className="flex flex-col gap-16">
                <div className="w-full  px-3 flex flex-col gap-2">
                    <h1 className="text-[36px] text-charcoal text-center">Your Safe Space is Ready!</h1>
                    <p className="text-[12px] text-charcoal opacity-50 text-center">We implement an anonymous login so that you can be comfortable in logging in to our site.</p>
                </div>
                <div className="w-full h-15 bg-[#aec6cf25] flex justify-center items-center rounded-full relative">
                    <h1 className="text-[#33333390] text-[24px]">AAAA-23-12-AB92</h1>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-5">
                        <path d="M20 8H10C8.89543 8 8 8.89543 8 10V20C8 21.1046 8.89543 22 10 22H20C21.1046 22 22 21.1046 22 20V10C22 8.89543 21.1046 8 20 8Z" stroke="#33333390" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 16C2.9 16 2 15.1 2 14V4C2 2.9 2.9 2 4 2H14C15.1 2 16 2.9 16 4" stroke="#33333390" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                </div>
            </div>
            <div className="w-full flex flex-col gap-8 pb-10">
                <Link href="/generate-key" className="w-full block bg-[#F9F9F9] py-5 text-charcoal rounded-[124px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] active:shadow-none active:translate-y-0.5 transition-all text-center">
                Proceed to your journey
                </Link>
                <Link href="/" className="w-full block  py-5 text-charcoal rounded-[124px] active:shadow-none active:translate-y-0.5 transition-all text-center">
                Back
                </Link>
            </div>
        </div>
    );
}