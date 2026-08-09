import { Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'The Gap', href: '#gap' },
    { name: 'Our Approach', href: '#approach' },
    { name: 'Results', href: '#results' },
    { name: 'Next Phase', href: '#next-phase' },
    { name: 'Team', href: '#team' },
    { name: 'Get Involved', href: '#involved' },
    { name: 'Partner With Us', href: '#partner' },
  ];

  return (
    <footer className="bg-black/40 ring-1 ring-white/15 backdrop-blur text-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/banking_png.png"
                alt="BankingBridge Logo"
                className="h-10 w-auto ring-1 ring-brand-blue/20 rounded-lg p-1.5 bg-brand-blue/10"
              />
              <span className="font-serif text-2xl font-bold">BankingBridge</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              A fintech startup building credit histories for rural entrepreneurs in the Philippines.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-sm text-white/80 hover:text-brand-blue transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact & Legal</h3>
            <div className="space-y-3">
              <a
                href="mailto:jules.van.remoortere@gmail.com"
                className="flex items-center space-x-2 text-sm text-white/80 hover:text-brand-yellow transition-colors"
              >
                <Mail className="h-4 w-4 text-brand-yellow/80" />
                <span>jules.van.remoortere@gmail.com</span>
              </a>
              <div className="flex flex-col space-y-2">
                <a
                  href="/Student's_Privacy_Policy_(1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-brand-green transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/BankingBridgeGTC_new.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-brand-green transition-colors"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-lg text-white/70">Powered by</span>
              <a
                href="https://orizon.eu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/Final_Orizon_Europe_in_white_(4).png"
                  alt="Orizon Europe"
                  className="h-20 w-auto"
                />
              </a>
            </div>
            <p className="text-sm text-white/60">
              © 2026 BankingBridge. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
