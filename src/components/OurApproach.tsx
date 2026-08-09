import { useEffect, useRef, useState } from 'react';
import { Coins, Calendar, PiggyBank, Users, ClipboardCheck, TrendingUp, FileText } from 'lucide-react';

const OurApproach = () => {
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

  const features = [
    { icon: Coins, title: 'Structured Loans', text: '₱5,000 (€75) starting loan with clear terms' },
    { icon: Calendar, title: 'Weekly Meetings', text: 'Regular check-ins build accountability' },
    { icon: PiggyBank, title: 'Mandatory Savings', text: 'Building financial discipline over time' },
    { icon: Users, title: 'Group Accountability', text: 'Community support and shared responsibility' },
  ];

  const dataPoints = [
    { icon: ClipboardCheck, title: 'Recording Attendance', text: 'Tracking engagement and commitment to weekly meetings' },
    { icon: TrendingUp, title: 'Tracking Savings & Repayment', text: 'Monitoring financial discipline and reliability' },
    { icon: FileText, title: 'Noting Business Issues', text: 'Understanding challenges and business context' },
  ];

  return (
    <section
      id="approach"
      ref={sectionRef}
      className="relative z-10 py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              Structured Support With Accountability
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
              Our approach combines financial structure with human connection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center hover:ring-brand-blue/30 transition-all"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${
                  index === 0 ? 'bg-brand-yellow/20 ring-1 ring-brand-yellow/40' :
                  index === 1 ? 'bg-brand-blue/20 ring-1 ring-brand-blue/40' :
                  index === 2 ? 'bg-brand-green/20 ring-1 ring-brand-green/40' :
                  'bg-brand-yellow/20 ring-1 ring-brand-yellow/40'
                }`}>
                  <feature.icon className={`w-6 h-6 ${
                    index === 0 ? 'text-brand-yellow' :
                    index === 1 ? 'text-brand-blue' :
                    index === 2 ? 'text-brand-green' :
                    'text-brand-yellow'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl bg-white/5 ring-1 ring-brand-blue/30 backdrop-blur p-8 sm:p-12 border-l-4 border-brand-blue mb-16">
            <p className="text-2xl font-serif italic text-white mb-6 leading-relaxed">
              "We are not providing handouts. We are helping entrepreneurs build proof of reliability."
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              This structure builds both financial habits and a documented repayment record, the foundation borrowers need to eventually access formal bank lending.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Building Structured Borrower Profiles</h3>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Every interaction generates data that helps us create comprehensive credit assessments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {dataPoints.map((point, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-green/10 ring-1 ring-brand-blue/30 backdrop-blur p-8 hover:ring-brand-blue/50 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 bg-brand-blue/20 ring-1 ring-brand-blue/40">
                    <point.icon className="w-7 h-7 text-brand-blue" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{point.title}</h4>
                  <p className="text-white/80 leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-brand-yellow/10 to-brand-green/10 ring-1 ring-brand-yellow/30 backdrop-blur p-8 sm:p-10">
              <h4 className="text-2xl font-bold mb-6 text-center">Composite Credit Scores</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-black/30 rounded-xl p-6 ring-1 ring-brand-blue/20">
                  <h5 className="font-semibold text-brand-blue mb-3 text-lg">Quantitative Variables</h5>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                      <span>Attendance rates</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                      <span>Savings consistency</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                      <span>Repayment history</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-black/30 rounded-xl p-6 ring-1 ring-brand-green/20">
                  <h5 className="font-semibold text-brand-green mb-3 text-lg">Qualitative Variables</h5>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                      <span>Business challenges</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                      <span>Operational issues</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                      <span>Growth trajectory</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-center text-white/80 leading-relaxed">
                These profiles provide formal lenders with the documented creditworthiness they require
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
