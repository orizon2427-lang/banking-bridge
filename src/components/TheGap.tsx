import { useEffect, useRef, useState } from 'react';

const TheGap = () => {
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

  const stats = [
    { number: '~5 million', label: 'micro-enterprises in the Philippines' },
    { number: '<2%', label: 'of bank lending reaches them' },
    { number: '10%', label: 'legal MSME lending requirement banks fail to meet' },
  ];

  return (
    <section
      id="gap"
      ref={sectionRef}
      className="relative z-10 py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              Why Small Entrepreneurs Are Left Out
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
              The structural gap keeping rural businesses from formal finance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`rounded-2xl bg-black/20 ring-1 backdrop-blur p-8 text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${
                  index === 0 ? 'ring-brand-yellow/30' :
                  index === 1 ? 'ring-brand-blue/30' :
                  'ring-brand-green/30'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`text-6xl font-bold mb-4 ${
                  index === 0 ? 'text-brand-yellow' :
                  index === 1 ? 'text-brand-blue' :
                  'text-brand-green'
                }`}>
                  {stat.number}
                </div>
                <div className="text-white/80 leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-brand-blue/10 to-brand-green/10 ring-1 ring-brand-blue/30 backdrop-blur p-8 sm:p-12">
            <p className="text-lg text-white/90 leading-relaxed text-center">
              Many of these are sari-sari stores, small, family-run neighborhood shops providing essential goods to their communities. Despite their economic contribution, most have no formal credit record. Many rely on high-interest informal lenders. Banks are legally required to allocate 10% of lending to MSMEs, yet the gap remains. The core issue is not willingness to repay. It is the absence of documented financial history.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheGap;
