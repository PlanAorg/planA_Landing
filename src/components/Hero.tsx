
import { useEffect, useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NetworkAnimation } from "./NetworkAnimation";

export const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NetworkAnimation />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Building the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {" "}Future
              </span>
              <br />of Software
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Plan-A Solutions delivers cutting-edge software development services,
              from dynamic web applications to enterprise systems that scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={scrollToServices}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg transition-all duration-300"
              >
                <Zap className="mr-2 h-5 w-5" />
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-70"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500 rounded-full animate-bounce opacity-60" style={{animationDelay: "1s"}}></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-bounce opacity-80" style={{animationDelay: "2s"}}></div>
    </section>
  );
};
