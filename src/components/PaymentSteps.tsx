import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface PaymentStepsProps {
  currentStep: number;
  countdown: number;
  progress: number;
  onCopy: (text: string) => void;
  onPaymentComplete: () => void;
  onTryAgain: () => void;
  onGoToDashboard: () => void;
}

const PaymentSteps = ({ 
  currentStep, 
  countdown, 
  progress, 
  onCopy, 
  onPaymentComplete, 
  onTryAgain, 
  onGoToDashboard 
}: PaymentStepsProps) => {
  const renderStep = () => {
    switch (currentStep) {
      case 2:
        return (
          <div className="flex flex-col items-center justify-center space-y-6 py-12">
            <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            <h3 className="text-2xl font-bold text-gray-800">Preparing Payment Account</h3>
            <p className="text-gray-600">Please wait while we set up your payment...</p>
            <div className="text-3xl font-bold text-purple-600">{countdown}</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full transition-all duration-1000" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="min-h-screen bg-gray-50">
            <div className="p-6 space-y-6">
              <div className="text-center bg-amber-400">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Complete Payment</h2>
                <p className="text-gray-600 text-sm">Transfer ₦6,500 to the account below</p>
              </div>

              {/* Email Section */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600 font-medium text-sm">Email:</span>
                  <span className="text-blue-800 text-sm">financial1240@gmail.com</span>
                </div>
              </div>

              {/* Payment Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Amount</span>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl font-bold text-gray-900">₦6,500</span>
                    <Button onClick={() => onCopy('6500')} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-sm rounded-md">
                      Copy
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Bank Name</span>
                  <span className="text-xl font-bold text-gray-900">MONIEPOINT MFB</span>
                </div>

                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Account Number</span>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl font-bold text-gray-900">8087503997</span>
                    <Button onClick={() => onCopy('8087503997')} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-sm rounded-md">
                      Copy
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Account Name</span>
                  <span className="text-xl font-bold text-gray-900">ABEDNEGO ISHAYA</span>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm text-center">
                  Make transfer and click "I have completed payment" below
                </p>
              </div>

              {/* Complete Payment Button */}
              <Button onClick={onPaymentComplete} className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg rounded-lg font-medium">
                I have completed payment
              </Button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="flex flex-col items-center justify-center space-y-6 py-12">
            <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            <h3 className="text-2xl font-bold text-gray-800">Confirming Your Payment</h3>
            <p className="text-gray-600">Please wait while we verify your transaction...</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-500 h-2 rounded-full transition-all duration-1000" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">This may take a few moments</p>
            <p className="text-sm text-gray-500">Please do not close this page</p>
          </div>
        );

      case 5:
        return (
          <div className="flex flex-col items-center justify-center space-y-6 py-12">
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-4xl">×</span>
            </div>
            <h3 className="text-2xl font-bold text-orange-500">Transaction verification failed!</h3>
            <div className="text-center">
              <p className="text-gray-800">Your payment could not be completed.</p>
              <p className="text-gray-600">Reason: No Payment received from you/ invalid payment method.</p>
            </div>
            
            <div className="w-full border border-gray-300 rounded-lg p-4 flex items-center justify-between">
              <span className="text-gray-600">••••••••••••</span>
              <Button className="bg-transparent border-none p-0">
                <span className="text-gray-400">👁</span>
              </Button>
            </div>

            <div className="w-full space-y-3">
              <Button onClick={onTryAgain} className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 text-lg rounded-lg">
                Try Again
              </Button>
              <Button onClick={onGoToDashboard} className="w-full bg-transparent border border-gray-300 text-gray-700 py-4 text-lg rounded-lg hover:bg-gray-50">
                Go to Dashboard
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return renderStep();
};

export default PaymentSteps;