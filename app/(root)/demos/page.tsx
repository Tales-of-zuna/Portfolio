"use client";
import Background from "@/components/layout/background";
import { useEffect, useState } from "react";

const Demos = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div
      className={`min-h-screen transition-all transform duration-300 ease-in-out bg-gradient-to-tl from-black to-slate-700 ${
        mounted ? "opacity-100" : "opacity-30"
      }`}
    >
      <div className="hidden md:flex gap-12 overflow-hidden fixed z-0 h-full top-0 opacity-10 left-0 w-full items-center">
        <Background />
      </div>
    </div>
  );
};

export default Demos;
