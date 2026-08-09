import { useEffect, useRef, useState } from 'react';

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState({ borrowers: 0, repayment: 0, savings: 0, attendance: 0 });

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

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounts({
          borrowers: Math.floor(27 * progress),
          repayment: Math.floor(100 * progress),
          savings: Math.floor(100 * progress),
          attendance: Math.floor(100 * progress),
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounts({ borrowers: 27, repayment: 100, savings: 100, attendance: 100 });
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    { value: counts.borrowers, label: 'borrowers', suffix: '' },
    { value: counts.repayment, label: 'on-time repayment', suffix: '%' },
    { value: counts.savings, label: 'savings compliance', suffix: '%' },
    { value: counts.attendance, label: 'weekly meeting attendance', suffix: '%' },
  ];

  return (
    <section
      id="results"
      ref={sectionRef}
      className="relative z-10 py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-green/15 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center justify-center px-4 py-2 bg-brand-yellow/20 ring-1 ring-brand-yellow/40 backdrop-blur rounded-full text-brand-yellow text-sm font-semibold">
                6-Week Pilot Program
              </div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Early Pilot Outcomes
            </h2>
            <div className="h-1.5 w-28 bg-gradient-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg sm:text-xl text-white/90 font-medium">
              Proven results from our initial program
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`relative text-center p-6 sm:p-8 bg-black/20 ring-1 ring-white/15 backdrop-blur rounded-2xl shadow-xl hover:shadow-2xl hover:ring-brand-green/40 transition-all duration-700 group hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity"></div>
                <div className="relative">
                  <div className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-brand-green mb-3">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 leading-tight font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-brand-yellow/10 to-brand-green/10 ring-1 ring-brand-yellow/30 backdrop-blur rounded-2xl p-8 sm:p-10 shadow-lg">
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              All participants operate small retail businesses serving their local communities. These early results show strong engagement, discipline, and potential for long-term impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
