import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import PaymentForm from './PaymentForm';
import ServiceNotice from './ServiceNotice';
import PaymentSteps from './PaymentSteps';

const BuyPayId = ({
  onBack
}: {
  onBack: () => void;
}) => {
  const {
    user
  } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [countdown, setCountdown] = useState(10);
  const [progress, setProgress] = useState(0);
  const [showServiceNotice, setShowServiceNotice] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: user?.email || ''
  });

  // Countdown for step 2
  useEffect(() => {
    if (currentStep === 2 && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
        setProgress((10 - countdown + 1) / 10 * 100);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (currentStep === 2 && countdown === 0) {
      setShowServiceNotice(true);
    }
  }, [currentStep, countdown]);

  // Auto-redirect for step 4 with proper countdown
  useEffect(() => {
    if (currentStep === 4) {
      let countdownTimer = 10;
      const timer = setInterval(() => {
        countdownTimer--;
        setProgress((10 - countdownTimer) / 10 * 100);
        if (countdownTimer <= 0) {
          clearInterval(timer);
          setCurrentStep(5);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentStep]);
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  const handleServiceNoticeClose = () => {
    setShowServiceNotice(false);
    setCurrentStep(3);
  };

  const handleTryAgain = () => {
    setCurrentStep(1);
    setCountdown(10);
    setProgress(0);
  };
  if (currentStep === 3) {
    return (
      <PaymentSteps 
        currentStep={currentStep}
        countdown={countdown}
        progress={progress}
        onCopy={handleCopy}
        onPaymentComplete={() => setCurrentStep(4)}
        onTryAgain={handleTryAgain}
        onGoToDashboard={onBack}
      />
    );
  }

  const renderCurrentStep = () => {
    if (currentStep === 1) {
      return (
        <PaymentForm 
          formData={formData}
          onFormDataChange={setFormData}
          onSubmit={() => setCurrentStep(2)}
        />
      );
    }
    
    return (
      <PaymentSteps 
        currentStep={currentStep}
        countdown={countdown}
        progress={progress}
        onCopy={handleCopy}
        onPaymentComplete={() => setCurrentStep(4)}
        onTryAgain={handleTryAgain}
        onGoToDashboard={onBack}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white p-4">
        <div className="flex items-center space-x-3">
          <Button onClick={onBack} className="bg-transparent p-2">
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-xl font-bold">Buy PAY ID</h1>
        </div>
      </div>

      <div className="p-6">
        {renderCurrentStep()}
      </div>

      {showServiceNotice && (
        <ServiceNotice onClose={handleServiceNoticeClose} />
      )}
    </div>
  );
};

export default BuyPayId;
