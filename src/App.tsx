import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { SimplicityBanner } from './components/SimplicityBanner';
import { VideoSection } from './components/VideoSection';
import { ServicesSection } from './components/ServicesSection';
import { ProviderShowcase } from './components/ProviderShowcase';
import { EvidenciaTeaser } from './components/EvidenciaTeaser';
import { EvidenciaPage } from './components/EvidenciaPage';
import { LegalPage } from './components/LegalPage';
import { AboutAndHistory } from './components/AboutAndHistory';
import { HoldingG5 } from './components/HoldingG5';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { useCurrentPath } from './utils/navigation';

export const App: React.FC = () => {
  const currentPath = useCurrentPath();
  const isEvidenciaPage = currentPath === '/obras' || currentPath === '/evidencia';
  const isLegalPage = 
    currentPath === '/legal' || 
    currentPath === '/terminos' || 
    currentPath === '/privacidad' || 
    currentPath === '/cookies' || 
    currentPath === '/arcop' || 
    currentPath === '/legal-compliance';

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] font-sans text-zinc-900 selection:bg-kotai-100 selection:text-kotai-900">
      {/* Navbar principal limpia y equilibrada */}
      <Navbar />

      {/* Contenido Principal según la ruta activa */}
      <main className="flex-1">
        {isEvidenciaPage ? (
          /* Ruta Dedicada: Galería completa de Evidencia en Terreno */
          <EvidenciaPage />
        ) : isLegalPage ? (
          /* Ruta Dedicada: Portal Legal y Cumplimiento Regulatorio */
          <LegalPage />
        ) : (
          /* Ruta Principal / Landing Page Descongestionada */
          <>
            {/* Hero con carrusel de fotos reales de Kotai */}
            <HeroCarousel />

            {/* 4 Pasos Simples para postular ante Serviu */}
            <SimplicityBanner />

            {/* Video Oficial Informativo con Locución y Requisitos */}
            <VideoSection />

            {/* Subsidio D.S. 27 de Mejoramiento de la Vivienda y Soluciones */}
            <ServicesSection />

            {/* Fábrica Oficial de Ventanas & Proveedor Principal (Vidriería & Ferretería Valey) */}
            <ProviderShowcase />

            {/* Teaser compacto de Evidencia en Terreno con enlace a la galería /obras */}
            <EvidenciaTeaser />

            {/* Quiénes Somos, Historia y Aliados */}
            <AboutAndHistory />

            {/* Respaldo Grupo Alianza G5 */}
            <HoldingG5 />

            {/* Iniciar Postulación Directa */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Pie de Página */}
      <Footer />

      {/* Botón flotante oficial de WhatsApp en la esquina inferior derecha */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
