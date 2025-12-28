import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { BentoGrid } from '@/components/BentoGrid';
import { ContactSection } from '@/components/ContactSection';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Footer } from '@/components/Footer';

/**
 * Index Page - Main landing page for Tégris
 * Sections:
 * 1. Navbar - Fixed navigation with glassmorphism
 * 2. Hero - Animated particle background with main CTA
 * 3. Services - Bento grid with spotlight cards
 * 4. Contact - Form and contact information
 * 5. Footer - Social links and copyright
 * 
 * Plus: Floating WhatsApp button for quick contact
 */

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Grain texture overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <BentoGrid />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
