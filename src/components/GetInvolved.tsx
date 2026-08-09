import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Scale, Code, ChevronDown } from 'lucide-react';

interface GetInvolvedProps {
  onOpenModal: (division: string) => void;
}

const GetInvolved = ({ onOpenModal }: GetInvolvedProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [openDivision, setOpenDivision] = useState<number | null>(null);
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

  const divisions = [
    {
      icon: TrendingUp,
      title: 'CorpFi Division',
      shortName: 'CorpFi',
      goal: 'Raise capacity-building impact loans from private market funds',
      kpis: [
        'Raise €200k in loans in 1 year',
        'Maintain relations with impact lenders to reliably raise expansion financing when needed'
      ],
      sections: [
        {
          title: 'Financial Modeling & Preparation',
          items: [
            'Build 3/5/10y financial model on Excel highlighting: Portfolio growth, Cost structure, Cash flow, Leverage scenarios, Break-even analysis',
            'Run stress tests: Analyse effects of different default rates on solvency',
            'Draft use of funds memorandums (Allocation of funds, Impact of funds)',
            'Build and update portfolio dashboard (PAR7 / PAR30, Repayment %, Borrower growth, Cost per borrower, Unit economics)',
            'Debt restructuring to deal with NPLs'
          ]
        },
        {
          title: 'Investor Targeting & Relations',
          items: [
            'Identify investors willing to write required check sizes',
            'Negotiate term structures with investors',
            'Draft monthly impact report for investors'
          ]
        }
      ]
    },
    {
      icon: Scale,
      title: 'Legal Division',
      shortName: 'Legal',
      goal: 'Ensure full legal compliance of the lending company\'s operations and support capital raising through proper governance, regulatory alignment, and contractual frameworks',
      kpis: [
        'Maintain full compliance with SEC, BIR, and relevant financial regulations',
        'Ensure all borrower, donor, and investor interactions are supported by proper legal documentation',
        'Implement data protection frameworks compliant with GDPR and Philippine Data Privacy Act'
      ],
      sections: [
        {
          title: 'Corporate Governance & Compliance',
          items: [
            'Manage SEC and BIR filings',
            'Maintain corporate records and board resolutions',
            'Update Articles of Incorporation and By-Laws when necessary'
          ]
        },
        {
          title: 'Contracts & Legal Documentation',
          items: [
            'Draft borrower agreements',
            'Draft investor agreements',
            'Draft partnership agreements with external organizations'
          ]
        },
        {
          title: 'Regulatory & Data Protection',
          items: [
            'Maintain borrower data consent frameworks',
            'Ensure compliance with GDPR and Philippine Data Privacy Act',
            'Monitor regulatory boundaries of Filipino microfinance activities'
          ]
        }
      ]
    },
    {
      icon: Code,
      title: 'CS Division',
      shortName: 'CS',
      goal: 'Develop and maintain the digital infrastructure required to manage borrower data, monitor portfolio performance, and generate structured credit profiles',
      kpis: [
        'Maintain a reliable borrower data system tracking repayment, attendance, and savings',
        'Develop internal credit scoring and portfolio analytics tools',
        'Ensure secure handling and storage of borrower data'
      ],
      sections: [
        {
          title: 'Data Infrastructure',
          items: [
            'Develop borrower database and tracking tools',
            'Maintain portfolio monitoring dashboards',
            'Ensure data quality and consistency'
          ]
        },
        {
          title: 'Credit Data & Analytics',
          items: [
            'Develop internal borrower profiling frameworks',
            'Analyse repayment behaviour and portfolio trends',
            'Support financial modeling with data analysis'
          ]
        },
        {
          title: 'Technology & Security',
          items: [
            'Implement data security and privacy protocols',
            'Ensure compliance with data protection standards',
            'Maintain digital tools used by operations and finance teams'
          ]
        }
      ]
    }
  ];

  return (
    <section
      id="get-involved"
      ref={sectionRef}
      className="relative z-10 py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                Get Involved
              </h2>
              <div className="h-1 w-24 bg-accent-gold mx-auto"></div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-blue/10 ring-1 ring-brand-yellow/30 backdrop-blur rounded-2xl p-6 sm:p-8">
              <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                BankingBridge is actively recruiting students across three operational divisions. Each division plays a critical role in scaling our impact and provides <span className="font-semibold text-white">high-value work experience for competitive careers</span> in finance, law, and technology.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {divisions.map((division, index) => (
              <div
                key={index}
                className="bg-black/20 ring-1 ring-white/15 backdrop-blur rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:ring-brand-blue/40"
              >
                <button
                  onClick={() => setOpenDivision(openDivision === index ? null : index)}
                  className="w-full px-6 sm:px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-brand-blue/20 ring-1 ring-brand-blue/40 backdrop-blur rounded-xl flex items-center justify-center flex-shrink-0">
                      <division.icon className="h-7 w-7 text-brand-blue" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      {division.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 text-white/80 transition-transform ${
                      openDivision === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {openDivision === index && (
                  <div className="px-6 sm:px-8 pb-8 space-y-6">
                    <div className="pt-2 border-t border-white/15">
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-3 flex items-center">
                          <span className="w-1 h-4 bg-brand-green rounded-full mr-2"></span>
                          Goal
                        </h4>
                        <p className="text-base text-white/90 leading-relaxed pl-3">
                          {division.goal}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-3 flex items-center">
                          <span className="w-1 h-4 bg-brand-blue rounded-full mr-2"></span>
                          KPIs
                        </h4>
                        <ul className="space-y-2 pl-3">
                          {division.kpis.map((kpi, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="p-1 bg-brand-blue/20 rounded-full flex-shrink-0 mt-1.5">
                                <div className="h-1.5 w-1.5 bg-brand-blue rounded-full"></div>
                              </div>
                              <span className="text-base text-white/90 leading-relaxed">
                                {kpi}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-4 flex items-center">
                          <span className="w-1 h-4 bg-brand-yellow rounded-full mr-2"></span>
                          Division Details
                        </h4>
                        <div className="space-y-5 pl-3">
                          {division.sections.map((section, sIdx) => (
                            <div key={sIdx}>
                              <h5 className="text-base font-semibold text-white mb-3">
                                {section.title}
                              </h5>
                              <ul className="space-y-2.5">
                                {section.items.map((item, iIdx) => (
                                  <li key={iIdx} className="flex items-start space-x-3">
                                    <div className="p-1 bg-brand-yellow/20 rounded-full flex-shrink-0 mt-1.5">
                                      <div className="h-1.5 w-1.5 bg-brand-yellow rounded-full"></div>
                                    </div>
                                    <span className="text-sm text-white/85 leading-relaxed">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => onOpenModal(division.title)}
                        className="w-full sm:w-auto px-6 py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-brand-blue/90 hover:shadow-lg hover:ring-2 hover:ring-brand-blue/40 transition-all hover:scale-105"
                      >
                        Apply to {division.title}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onOpenModal('')}
              className="inline-flex items-center px-10 py-5 bg-brand-blue text-white text-lg font-bold rounded-full hover:bg-brand-blue/90 hover:shadow-2xl hover:ring-2 hover:ring-brand-blue/40 transition-all duration-300 hover:scale-105"
            >
              Apply / Express Interest
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
