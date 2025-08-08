import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = ({ scrollY }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Sophisticated gradient waves animation
    let time = 0;
    const waves = [];
    
    // Create multiple wave layers
    for (let i = 0; i < 4; i++) {
      waves.push({
        amplitude: 50 + i * 20,
        frequency: 0.005 + i * 0.002,
        phase: i * Math.PI / 2,
        speed: 0.02 + i * 0.005,
        opacity: 0.1 - i * 0.02,
        y: canvas.height * (0.3 + i * 0.15)
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create sophisticated gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, "rgba(254, 242, 242, 0.8)");
      bgGradient.addColorStop(0.5, "rgba(255, 255, 255, 0.9)");
      bgGradient.addColorStop(1, "rgba(254, 226, 226, 0.8)");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw flowing gradient waves
      waves.forEach((wave, index) => {
        ctx.beginPath();
        
        // Create gradient for each wave
        const waveGradient = ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, wave.y + wave.amplitude);
        waveGradient.addColorStop(0, `rgba(239, 68, 68, ${wave.opacity})`);
        waveGradient.addColorStop(0.5, `rgba(220, 38, 38, ${wave.opacity * 1.5})`);
        waveGradient.addColorStop(1, `rgba(185, 28, 28, ${wave.opacity * 0.5})`);
        
        ctx.fillStyle = waveGradient;
        ctx.strokeStyle = `rgba(239, 68, 68, ${wave.opacity * 2})`;
        ctx.lineWidth = 2;

        // Draw wave path
        for (let x = 0; x <= canvas.width; x += 5) {
          const y = wave.y + Math.sin((x * wave.frequency) + (time * wave.speed) + wave.phase) * wave.amplitude;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        // Close the path to create filled wave
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      });

      // Add floating geometric elements
      const numElements = 15;
      for (let i = 0; i < numElements; i++) {
        const x = (canvas.width / numElements) * i + Math.sin(time * 0.01 + i) * 50;
        const y = canvas.height * 0.2 + Math.cos(time * 0.015 + i) * 30;
        const size = 3 + Math.sin(time * 0.02 + i) * 2;
        const opacity = 0.1 + Math.sin(time * 0.03 + i) * 0.05;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(239, 68, 68, ${opacity})`;
        ctx.fill();
        
        // Add subtle glow
        ctx.shadowColor = 'rgba(239, 68, 68, 0.3)';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Recalculate wave positions based on new canvas size
      waves.forEach((wave, i) => {
        wave.y = canvas.height * (0.3 + i * 0.15);
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Inovaxx Logo */}
        <div className="mb-8 flex justify-center">
          <div 
            className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
            style={{ 
              transform: `translateY(${Math.sin(Date.now() * 0.001) * 10}px) rotateY(${scrollY * 0.1}deg)`,
              transformStyle: "preserve-3d"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-700/20 rounded-full blur-2xl animate-pulse"></div>
            <img
              src="https://customer-assets.emergentagent.com/job_inovaxx-immersive/artifacts/2pihraz7_Inovaxx_logo__1_-removebg-preview%20%281%29.png"
              alt="Inovaxx Solutions Logo"
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-110 transition-all duration-500 animate-float"
              style={{
                filter: 'drop-shadow(0 10px 30px rgba(239, 68, 68, 0.3))'
              }}
            />
            {/* Floating ring effect around logo */}
            <div 
              className="absolute inset-0 border-2 border-red-400/30 rounded-full animate-spin"
              style={{ 
                animation: 'spin 20s linear infinite',
                transform: 'scale(1.1)'
              }}
            ></div>
            <div 
              className="absolute inset-0 border border-red-300/20 rounded-full animate-spin"
              style={{ 
                animation: 'spin 15s linear infinite reverse',
                transform: 'scale(1.2)'
              }}
            ></div>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent animate-fadeInUp">
          Crafting Digital
          <br />
          <span className="relative inline-block">
            Experiences
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed animate-fadeInUp animation-delay-300">
          Transforming ideas into powerful digital experiences through
          <br />
          <span className="font-semibold text-red-600">Innovation • Technology • Excellence</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animation-delay-600">
          <Button
            size="lg"
            onClick={scrollToServices}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-1"
          >
            Explore Our Services
            <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("work").scrollIntoView({ behavior: "smooth" })}
            className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View Our Work
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;