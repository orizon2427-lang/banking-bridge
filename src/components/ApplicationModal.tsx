import { X } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  divisionTitle?: string;
}

const ApplicationModal = ({ isOpen, onClose, divisionTitle }: ApplicationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[95vh] overflow-hidden bg-white rounded-2xl shadow-2xl flex flex-col">
        <div className="sticky top-0 bg-gradient-primary text-white px-6 sm:px-8 py-6 rounded-t-2xl z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold pr-12">
            Apply to BankingBridge
          </h2>
          {divisionTitle && (
            <p className="text-white/90 mt-2">{divisionTitle}</p>
          )}
        </div>

        <div className="flex-1 overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf5fqa24pmeSdAsZHA3bMkBhk8z5DeOv0_cWR5fPvM3m_QLMg/viewform?embedded=true"
            width="100%"
            height="100%"
            className="border-0"
            title="BankingBridge Application Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;
