import { useEffect, useState } from 'react';
import Navigation from './Navigation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
      </div>

      <Navigation />

      <div className={`relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8">
          <img
            src="/banking_png.png"
            alt="BankingBridge Logo"
            className="h-32 sm:h-40 md:h-48 w-auto mx-auto drop-shadow-2xl"
          />
        </div>

        <div className="mb-6 px-4 py-2 bg-brand-yellow/20 ring-1 ring-brand-yellow/40 backdrop-blur rounded-full">
          <span className="text-sm font-medium text-brand-yellow">Fintech Startup</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">
          Building Credit Histories.
        </h1>

        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
          BankingBridge works directly with rural entrepreneurs in the Philippines to provide structured loans, savings discipline, and data tracking - building the credit histories they need to access fair, formal finance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button
            onClick={() => scrollToSection('#partner')}
            className="bg-brand-blue text-white hover:bg-brand-blue/90 rounded-full px-8 py-4 text-lg font-medium transition-colors shadow-lg shadow-brand-blue/20"
          >
            Partner With Us
          </button>
          <button
            onClick={() => scrollToSection('#gap')}
            className="bg-black/40 ring-1 ring-brand-green/40 backdrop-blur border-0 text-white hover:bg-brand-green/20 rounded-full px-8 py-4 text-lg transition-colors"
          >
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold mb-1">27</div>
            <div className="text-sm text-white/70">Borrowers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold mb-1">100%</div>
            <div className="text-sm text-white/70">Repayment Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold mb-1">€20k</div>
            <div className="text-sm text-white/70">Fundraising Goal</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
