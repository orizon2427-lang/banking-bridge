import { useEffect, useRef, useState } from 'react';
import { Target, Users, Database, TrendingUp } from 'lucide-react';

const NextPhase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const goals = [
    { icon: Target, text: 'Open 3 additional centers' },
    { icon: Users, text: 'Serve 90 new entrepreneurs' },
    { icon: Database, text: 'Collect structured data on 120 borrowers' },
    { icon: TrendingUp, text: 'Strengthen operational sustainability' },
  ];

  const allocation = [
    { label: 'Loan capital', amount: '€15,000', percentage: 75, color: 'bg-brand-green' },
    { label: 'Overhead', amount: '€2,000', percentage: 10, color: 'bg-brand-blue' },
    { label: 'Administration', amount: '€2,000', percentage: 10, color: 'bg-brand-yellow' },
    { label: 'Legal & accounting', amount: '€1,000', percentage: 5, color: 'bg-white/60' },
  ];

  return (
    <section
      id="next-phase"
      ref={sectionRef}
      className="relative z-10 py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                Expanding Responsibly
              </h2>
              <div className="h-1 w-24 bg-accent-gold mx-auto"></div>
            </div>
          </div>

          <div className="text-center mb-12 sm:mb-16">
            <p className="text-lg sm:text-xl text-white/90 mb-4">
              We are currently raising
            </p>
            <div className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white">
              €20,000
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-brand-blue/15 to-brand-green/10 ring-1 ring-brand-blue/30 backdrop-blur rounded-2xl shadow-sm p-6 sm:p-8">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-6">
                Our Goals
              </h3>
              <div className="space-y-6">
                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-blue/20 ring-1 ring-brand-blue/40 backdrop-blur rounded-lg flex items-center justify-center">
                      <span className="font-serif text-xl font-bold text-brand-blue">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <goal.icon className="h-5 w-5 text-brand-blue" />
                        <span className="text-base sm:text-lg text-white/90 font-medium">
                          {goal.text}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-green/10 ring-1 ring-brand-yellow/30 backdrop-blur rounded-2xl shadow-sm p-6 sm:p-8">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-6">
                Fund Allocation
              </h3>
              <div className="space-y-4">
                {allocation.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-base sm:text-lg text-white/90 font-medium">
                        {item.label}
                      </span>
                      <span className="text-sm sm:text-base text-white/80">
                        {item.amount} ({item.percentage}%)
                      </span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} transition-all duration-1000 ease-out`}
                        style={{ width: isVisible ? `${item.percentage}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-black/20 ring-1 ring-brand-yellow/30 backdrop-blur rounded-2xl p-6 sm:p-8 hover:ring-brand-yellow/50 transition-all">
            <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
              <span className="font-semibold text-brand-yellow">Every €500</span> supports Phase 1 debt clean-up for 5 borrowers, helps them form savings, and generates 12 weeks of repayment history and structured discipline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextPhase;
