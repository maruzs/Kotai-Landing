import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { SimplicityBanner } from './components/SimplicityBanner';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ProjectsAutoCarousel } from './components/ProjectsAutoCarousel';
import { ServicesSection } from './components/ServicesSection';
import { AboutAndHistory } from './components/AboutAndHistory';
import { HoldingG5 } from './components/HoldingG5';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  const [textSize, setTextSize] = useState<'normal' | 'lg' | 'xl'>('normal');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('text-size-lg', 'text-size-xl');
    if (textSize === 'lg') {
      root.classList.add('text-size-lg');
    } else if (textSize === 'xl') {
      root.classList.add('text-size-xl');
    }
  }, [textSize]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans selection:bg-kotai-100 selection:text-kotai-900">
      {/* Navigation Bar with font size accessibility */}
      <Navbar textSize={textSize} setTextSize={setTextSize} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero with auto-playing carousel */}
        <HeroCarousel />

        {/* 4 Simple Steps Banner for non-tech & seniors */}
        <SimplicityBanner />

        {/* Before and After Interactive & Auto-advancing Showcase */}
        <BeforeAfterSlider />

        {/* Live on-site works photo gallery carousel */}
        <ProjectsAutoCarousel />

        {/* Core Services: Constructora y Montaje, Serviu Renac, etc. */}
        <ServicesSection />

        {/* Nuestra Historia, Quiénes Somos (Equipo y Aliados) */}
        <AboutAndHistory />

        {/* Grupo Alianza G5 Holding Section */}
        <HoldingG5 />

        {/* Contact and Direct Consultation */}
        <ContactSection />
      </main>

      {/* Persistent Footer */}
      <Footer />

      {/* Floating High-Contrast WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
