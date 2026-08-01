import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutFounder from './components/AboutFounder';
import VentureShowcase from './components/VentureShowcase';
import InvestorHighlights from './components/InvestorHighlights';
import TechStack from './components/TechStack';
import ContactZeptoMail from './components/ContactZeptoMail';
import Footer from './components/Footer';
import InvestorModal from './components/InvestorModal';

export default function App() {
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // 'light' (Primary #015CCF on #ebf7ff) or 'dark' (YM Gold #ffb700 on Charcoal #14161d)

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      isDark ? 'bg-[#14161d] text-slate-100 selection:bg-[#ffb700] selection:text-slate-950' : 'bg-[#ebf7ff] text-slate-900 selection:bg-[#015CCF] selection:text-white'
    }`}>
      
      {/* Navigation Header with Theme Toggle */}
      <Navbar 
        onOpenInvestorModal={() => setIsInvestorModalOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Single Page Content */}
      <main>
        <Hero 
          onOpenInvestorModal={() => setIsInvestorModalOpen(true)} 
          theme={theme}
        />
        <AboutFounder theme={theme} />
        <VentureShowcase theme={theme} />
        <InvestorHighlights 
          onOpenInvestorModal={() => setIsInvestorModalOpen(true)} 
          theme={theme}
        />
        <TechStack theme={theme} />
        <ContactZeptoMail theme={theme} />
      </main>

      {/* Footer */}
      <Footer theme={theme} />

      {/* Investor Pitch Deck Modal */}
      <InvestorModal 
        isOpen={isInvestorModalOpen} 
        onClose={() => setIsInvestorModalOpen(false)} 
        theme={theme}
      />

    </div>
  );
}
