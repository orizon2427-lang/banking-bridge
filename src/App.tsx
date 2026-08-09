import { useState } from 'react';
import Hero from './components/Hero';
import TheGap from './components/TheGap';
import OurApproach from './components/OurApproach';
import Results from './components/Results';
import NextPhase from './components/NextPhase';
import Team from './components/Team';
import GetInvolved from './components/GetInvolved';
import PartnerWithUs from './components/PartnerWithUs';
import PaymentSelection from './components/PaymentSelection';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState('');
  const [showPaymentPage, setShowPaymentPage] = useState(false);

  const openModal = (division: string = '') => {
    setSelectedDivision(division);
    setIsModalOpen(true);
  };

  const openPaymentPage = () => {
    setShowPaymentPage(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closePaymentPage = () => {
    setShowPaymentPage(false);
  };

  if (showPaymentPage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1A2332] via-[#1E2A3A] to-[#1A2845] text-white">
        <PaymentSelection onBack={closePaymentPage} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A2332] via-[#1E2A3A] to-[#1A2845] text-white">
      <Hero />
      <TheGap />
      <OurApproach />
      <Results />
      <NextPhase />
      <Team />
      <GetInvolved onOpenModal={openModal} />
      <PartnerWithUs onOpenModal={openModal} onOpenPayment={openPaymentPage} />
      <Footer />
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        divisionTitle={selectedDivision}
      />
    </div>
  );
}

export default App;
