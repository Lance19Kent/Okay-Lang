"use client";
import { useState } from "react";


export default function LandingPage() {

  const [key, setKey] = useState("");

  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault();
    console.log("Key:", key);
  }

  return (
    <main className="h-screen bg-linear-to-b from-[#FFFCEC] from-50% to-[#FFEA73] to-77% flex flex-col items-center gap-18">
      {/* Logo Icons */}
      <header className="w-full h-12.5 p-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/svg/okay-lang-logo.svg" alt="Okay Lang App Logo"></img>
          <h1 className="text-[#333333] text-[16px]">Okay Lang</h1>
        </div>
        <img src="/svg/i-icon.svg" alt="Information Logo"></img>
      </header>



      <div className="h-screen flex flex-col justify-between pb-15">
              {/* Main Body */}
      <div className=" w-full flex flex-col items-center px-3">
        <h1 className="text-[36px] text-[#333333]">Hinga muna.</h1>
        <p className="text-[12px] text-[#333333] opacity-50 text-center">A gentle space where people can check in with themselves without pressure, explanation, or judgment.</p>
        <img src="/svg/landing-vector.svg"></img>
      </div>

      {/* Buttons */}
      <div className="w-full px-3 flex flex-col gap-8">
        <button className="w-full bg-[#F9F9F9] py-5 text-[#333333] rounded-[124px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] active:shadow-none active:translate-y-0.5 transition-all">
          Start new journey
        </button>
        
        <form onSubmit={handleSubmit}>
          <p className="text-[12px] text-[#333333] opacity-60">— or continue with existing key —</p> 
          <div className="flex gap-5 px-2">
            <input 
            type="text" 
            placeholder="Paste Key here" 
            value={key} 
            onChange={(e) => setKey(e.target.value)} 
            className="w-full bg-white rounded-xl p-3 placeholder:text-[#33333350]">
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
