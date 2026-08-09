import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#gap' },
    { name: 'Approach', href: '#approach' },
    { name: 'Results', href: '#results' },
    { name: 'Next Phase', href: '#next-phase' },
    { name: 'Team', href: '#team' },
    { name: 'Get Involved', href: '#get-involved' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="relative z-10 flex items-center justify-between p-6">
      <button
        onClick={() => scrollToSection('#home')}
        className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-brand-blue/30 backdrop-blur rounded-full hover:bg-black/50 hover:ring-brand-blue/50 transition-colors"
      >
        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
          <img
            src="/banking_png.png"
            alt="BankingBridge Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <span className="font-medium text-balance">BankingBridge</span>
      </button>

      <div className="hidden md:flex items-center gap-1">
        {navLinks.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 hover:ring-brand-blue/40 transition-colors"
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 hover:ring-brand-blue/40 transition-colors"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <button
          onClick={() => scrollToSection('#partner')}
          className="bg-brand-blue text-white hover:bg-brand-blue/90 hover:ring-2 hover:ring-brand-blue/40 rounded-full px-6 py-2 font-medium transition-all"
        >
          Partner With Us
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-6 md:hidden bg-black/40 ring-1 ring-brand-blue/30 backdrop-blur rounded-2xl overflow-hidden">
          <div className="p-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 hover:bg-brand-blue/20 hover:ring-1 hover:ring-brand-blue/30 rounded-lg transition-all"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
