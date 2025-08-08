
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import { use } from "react";



export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      
     <Hero />
     <About /> 
     
    </div>
  );
}
