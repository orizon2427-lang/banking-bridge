import { useEffect, useRef, useState } from 'react';
import { User } from 'lucide-react';

const Team = () => {
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

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative z-10 py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/15 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                Who We Are
              </h2>
              <div className="h-1 w-24 bg-accent-gold mx-auto"></div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-brand-blue/10 to-brand-green/10 ring-1 ring-brand-blue/30 backdrop-blur rounded-2xl p-6 sm:p-8">
              <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                BankingBridge is led by students committed to practical, disciplined impact finance. We combine field engagement, structured monitoring, transparent reporting, and responsible financial management.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-black/20 ring-1 ring-white/15 backdrop-blur rounded-3xl shadow-md overflow-hidden hover:ring-brand-blue/30 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 bg-gradient-to-br from-brand-blue/10 to-brand-green/10 flex items-center justify-center p-8 sm:p-12">
                  <img
                    src="/WhatsApp_Image_2026-04-01_at_19.52.26.jpeg"
                    alt="Jules"
                    className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full shadow-lg ring-2 ring-brand-blue/20"
                  />
                </div>

                <div className="md:col-span-2 p-6 sm:p-8 lg:p-10">
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                      Jules
                    </h3>
                    <p className="text-sm sm:text-base text-brand-yellow font-medium">
                      Founder
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                    Jules was born and raised in Hong Kong. Having grown up with a helper from the Philippines who became a second mom to him, he developed a deep interest in the country's culture and economic challenges. Majoring in economics at Bocconi has enabled him to apply relevant economic theory to real-world problems. Through BankingBridge, he hopes to address one of the Philippines' most pressing issues: predatory lending that keeps rural entrepreneurs trapped in poverty.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/20 ring-1 ring-white/15 backdrop-blur rounded-3xl shadow-md overflow-hidden hover:ring-brand-blue/30 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 bg-gradient-to-br from-brand-blue/10 to-brand-yellow/10 flex items-center justify-center p-8 sm:p-12">
                  <img
                    src="/PHOTO-2026-03-26-16-33-26.jpg"
                    alt="Anisa"
                    className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full shadow-lg ring-2 ring-brand-yellow/20"
                  />
                </div>

                <div className="md:col-span-2 p-6 sm:p-8 lg:p-10">
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                      Anisa
                    </h3>
                    <p className="text-sm sm:text-base text-brand-yellow font-medium">
                      Founder
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                    Anisa was born and raised in San Diego, where early exposure to small business operations and financial services shaped her interest in how access to capital drives opportunity. Through hands-on experience analyzing loans and supporting credit decisions, she saw how traditional systems exclude informal entrepreneurs. Studying International Economics and Management at Bocconi, she combines financial markets knowledge with practical experience. At BankingBridge, she leads partnerships and fundraising, securing capital and building relationships that enable the expansion of the microcredit model helping rural entrepreneurs build credit histories and access fairer rates.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/20 ring-1 ring-white/15 backdrop-blur rounded-3xl shadow-md overflow-hidden hover:ring-brand-green/30 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 bg-gradient-to-br from-brand-green/10 to-brand-blue/10 flex items-center justify-center p-8 sm:p-12">
                  <img
                    src="/WhatsApp_Image_2026-03-22_at_20.24.41.jpeg"
                    alt="Mary"
                    className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full shadow-lg ring-2 ring-brand-green/20"
                  />
                </div>

                <div className="md:col-span-2 p-6 sm:p-8 lg:p-10">
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                      Mary
                    </h3>
                    <p className="text-sm sm:text-base text-brand-green font-medium">
                      Local Advisor
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                    Mary was born and raised in Passi City. She graduated as a Medical Secretary from Iloilo's Doctor's College. Due to limited opportunities after her graduation, she became a domestic helper in Hong Kong and lived there for almost 30 years before returning to the Philippines for retirement. Mary lives in Barangay Buenavista, where she is immersed in the village life and understands the economic problems that rural Philippines faces. She is in close contact with the local business community of hard-working entrepreneurs, and understands the role financial institutions can play in helping entrepreneurs access affordable, fair capital.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/20 ring-1 ring-white/15 backdrop-blur rounded-3xl shadow-md overflow-hidden hover:ring-brand-green/30 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 bg-gradient-to-br from-brand-green/10 to-brand-yellow/10 flex items-center justify-center p-8 sm:p-12">
                  <img
                    src="/PHOTO-2026-03-26-16-33-44.jpg"
                    alt="Dexter"
                    className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full shadow-lg ring-2 ring-brand-green/20"
                  />
                </div>

                <div className="md:col-span-2 p-6 sm:p-8 lg:p-10">
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                      Dexter
                    </h3>
                    <p className="text-sm sm:text-base text-brand-green font-medium">
                      Field Operations
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                    Dexter grew up in Passi City, graduating with a diploma in Business Administration from Passi City College. His professional experience in running a transport company for tourists has brought him in close contact with the local business community. His background helps him understand how the high cost of capital associated with loan sharking prevents hardworking entrepreneurs from growing their businesses. He is highly motivated in gathering the necessary data to help shop owners gain access to formal finance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
