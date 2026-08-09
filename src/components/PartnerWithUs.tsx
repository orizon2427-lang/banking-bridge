import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

interface PartnerWithUsProps {
  onOpenModal: (division: string) => void;
  onOpenPayment: () => void;
}

const PartnerWithUs = ({ onOpenModal, onOpenPayment }: PartnerWithUsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tiers = [
    {
      name: 'Supporter',
      amount: '€100',
      benefits: ['Branded T-shirt', 'Donation certificate'],
    },
    {
      name: 'Advocate',
      amount: '€250',
      benefits: ['All Supporter benefits', 'Monthly impact report'],
    },
    {
      name: 'Builder',
      amount: '€500',
      benefits: ['All Advocate benefits', 'Featured on website'],
      highlighted: true,
    },
    {
      name: 'Champion',
      amount: '€1,000',
      benefits: ['All Builder benefits', 'Video updates via email/WhatsApp'],
    },
    {
      name: 'Founding Partner',
      amount: '€2,000+',
      benefits: ['All Champion benefits', 'Direct founder updates'],
      highlighted: true,
    },
  ];

  return (
    <section
      id="partner"
      ref={sectionRef}
      className="relative z-10 py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                Support Structured Financial Inclusion
              </h2>
              <div className="h-1 w-24 bg-accent-gold mx-auto"></div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-brand-green/10 to-brand-yellow/10 ring-1 ring-brand-green/30 backdrop-blur rounded-2xl p-6 sm:p-8">
              <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                Your support enables access to affordable working capital, formation of savings habits, creation of documented repayment histories, and a pathway toward fair, formal financial access.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4 mb-12 sm:mb-16">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-black/20 ring-1 backdrop-blur rounded-2xl shadow-xl ${
                  tier.highlighted
                    ? 'ring-brand-yellow/40 ring-2 scale-105'
                    : 'ring-white/15 hover:ring-brand-green/30'
                } p-6 sm:p-7 flex flex-col transition-all duration-700 hover:shadow-2xl hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-brand-yellow text-black text-xs font-bold rounded-full shadow-lg">
                    Popular
                  </div>
                )}

                <div className="text-center mb-5">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
                    {tier.name}
                  </h3>
                  <div className="font-serif text-4xl font-bold text-brand-green">
                    {tier.amount}
                  </div>
                </div>

                <div className="flex-1">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <div className="p-1 bg-brand-green/20 rounded-full flex-shrink-0">
                          <Check className="h-3.5 w-3.5 text-brand-green" />
                        </div>
                        <span className="text-white/90 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative bg-black/20 ring-1 ring-brand-yellow/30 backdrop-blur rounded-3xl p-8 sm:p-10 shadow-xl overflow-hidden hover:ring-brand-yellow/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl"></div>
              <p className="relative font-serif text-2xl sm:text-3xl font-bold text-white text-center leading-relaxed">
                We are not funding handouts, we are building access to opportunity.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onOpenPayment}
              className="group inline-flex items-center px-10 py-5 bg-brand-green text-white text-lg font-bold rounded-full hover:bg-brand-green/90 hover:shadow-2xl hover:ring-2 hover:ring-brand-green/40 transition-all duration-300 hover:scale-105"
            >
              Make a Payment
              <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => onOpenModal('Partnership Inquiry')}
              className="group inline-flex items-center px-10 py-5 bg-brand-blue text-white text-lg font-bold rounded-full hover:bg-brand-blue/90 hover:shadow-2xl hover:ring-2 hover:ring-brand-blue/40 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
              <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
