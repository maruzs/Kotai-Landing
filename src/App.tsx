import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { SimplicityBanner } from './components/SimplicityBanner';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ProjectsAutoCarousel } from './components/ProjectsAutoCarousel';
import { RealWorksCarousel } from './components/RealWorksCarousel';
import { AboutAndHistory } from './components/AboutAndHistory';
import { HoldingG5 } from './components/HoldingG5';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] font-sans text-zinc-900 selection:bg-kotai-100 selection:text-kotai-900">
      {/* Navbar principal limpia con logo Kotai_NoBG y postulación */}
      <Navbar />

      {/* Contenido Principal */}
      <main className="flex-1">
        {/* Hero con carrusel automático de fotos reales de Kotai */}
        <HeroCarousel />

        {/* 4 Pasos Simples para postular ante Serviu */}
        <SimplicityBanner />

        {/* Subsidios de Mejoramiento Serviu y Programas Oficiales */}
        <ServicesSection />

        {/* Antes y Después interactivo (fotos reales antes.jpg y despues.jpg) */}
        <BeforeAfterSlider />

        {/* Obras y Proyectos de Acondicionamiento Térmico */}
        <ProjectsAutoCarousel />

        {/* Galería Fotográfica Real: Ventanas Termopanel, Colectores Solares y Puertas */}
        <RealWorksCarousel />

        {/* Quiénes Somos, Historia y Aliados */}
        <AboutAndHistory />

        {/* Respaldo Grupo Alianza G5 */}
        <HoldingG5 />

        {/* Iniciar Postulación Directa */}
        <ContactSection />
      </main>

      {/* Pie de Página */}
      <Footer />

      {/* Botón flotante oficial de WhatsApp en la esquina inferior derecha */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
