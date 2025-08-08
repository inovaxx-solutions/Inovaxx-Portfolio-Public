import React, { useEffect, useState } from "react";
import HeroSection from "./sections/HeroSection";
import CompaniesSection from "./sections/CompaniesSection";
import WorkDoneSection from "./sections/WorkDoneSection";
import ServicesSection from "./sections/ServicesSection";
import AboutSection from "./sections/AboutSection";
import StatsSection from "./sections/StatsSection";
import ContactSection from "./sections/ContactSection";
import Navigation from "./Navigation";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <Navigation />
      <div className="relative">
        <HeroSection scrollY={scrollY} />
        <CompaniesSection />
        <WorkDoneSection />
        <ServicesSection />
        <AboutSection />
        <StatsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default HomePage;