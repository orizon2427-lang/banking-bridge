import { useEffect, useState } from 'react';
import { CreditCard, ArrowLeft } from 'lucide-react';

interface PaymentSelectionProps {
  onBack: () => void;
}

const PaymentSelection = ({ onBack }: PaymentSelectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen relative z-10 py-24 px-6 overflow-hidden flex items-center">
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"></div>

      <div className="max-w-3xl mx-auto w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Partner With Us
          </button>

          <div className="text-center mb-16">
            <div className="inline-block">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                Make a Payment
              </h1>
              <div className="h-1 w-24 bg-accent-gold mx-auto"></div>
            </div>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              Support our mission of financial inclusion with a quarterly contribution
            </p>
          </div>

          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="https://buy.stripe.com/dRmaER3j35ah6ZC2gf53O04"
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative bg-black/20 ring-1 ring-white/15 backdrop-blur rounded-3xl p-10 hover:ring-brand-green/40 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl"></div>

              <div className="relative">
                <div className="inline-flex p-4 bg-brand-green/20 rounded-2xl mb-6">
                  <CreditCard className="h-10 w-10 text-brand-green" />
                </div>

                <h3 className="font-serif text-3xl font-bold text-white mb-4">
                  Quarterly Payment
                </h3>

                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Pay quarterly to support our mission with flexibility
                </p>

                <div className="flex items-center text-brand-green font-semibold group-hover:translate-x-2 transition-transform">
                  Proceed to Payment
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="relative bg-black/20 ring-1 ring-brand-yellow/30 backdrop-blur rounded-3xl p-8 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl"></div>
              <p className="relative font-serif text-xl sm:text-2xl font-bold text-white text-center leading-relaxed">
                Your contribution helps build pathways to formal financial access for underserved communities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSelection;
