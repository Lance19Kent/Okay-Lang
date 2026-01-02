"use client";
import { useState } from "react";
import Link from "next/link";

export default function LandingPage() {

  const [key, setKey] = useState("");

  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault();
    console.log("Key:", key);
  }

  return (
    <main className="h-screen bg-linear-to-b from-[#FFFCEC] from-50% to-[#FFEA73] to-77% flex flex-col items-center gap-18">
      <div className="h-screen flex flex-col justify-between pb-15">
              {/* Main Body */}
      <div className=" w-full flex flex-col items-center px-3">
        <h1 className="text-[36px] text-charcoal">Hinga muna.</h1>
        <p className="text-[12px] text-charcoal opacity-50 text-center">A gentle space where people can check in with themselves without pressure, explanation, or judgment.</p>
        <img src="/svg/landing-vector.svg"></img>
      </div>

      {/* Buttons */}
      <div className="w-full px-3 flex flex-col gap-8">
        <Link href="/generate-key" className="w-full bg-[#F9F9F9] py-5 text-charcoal rounded-[124px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] active:shadow-none active:translate-y-0.5 transition-all text-center">
          Start new journey
        </Link>
        
        <form onSubmit={handleSubmit}>
          <p className="text-[12px] text-charcoal opacity-60">— or continue with existing key —</p> 
          <div className="flex gap-5 px-2">
            <input 
            type="text" 
            placeholder="Paste Key here" 
            value={key} 
            onChange={(e) => setKey(e.target.value)} 
            className="w-full bg-white rounded-xl p-3 placeholder:text-[#33333350] text-charcoal outline-none focus:border border-[#AEC6CF]">
            </input>
            <button type="submit" className="p-4 rounded-full bg-[#AEC6CF]">
              <img src="/svg/arrow.svg" alt="" />
            </button>
          </div>
        </form>
      </div>
      </div>

    </main>
  );
}
