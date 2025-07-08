import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface ServiceNoticeProps {
  onClose: () => void;
}

const ServiceNotice = ({ onClose }: ServiceNoticeProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <h3 className="text-lg font-bold">Service Notice</h3>
          </div>
          <Button onClick={onClose} className="bg-transparent p-1">
            <X className="w-5 h-5 text-gray-500" />
          </Button>
        </div>
        
        <div className="border-l-4 border-green-400 p-4 mb-4 bg-green-50">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-green-600">✓</span>
            <h4 className="font-bold text-green-600">Opay Bank Service is Working Perfectly</h4>
          </div>
          <p className="text-sm text-green-600">All Opay bank transfers are now working normally. You can proceed with your payment safely.</p>
        </div>
        
        <p className="text-gray-600 text-sm mb-6">We appreciate your patience. All banks including Opay are now working normally and your payment will be processed immediately.</p>
        
        <Button onClick={onClose} className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg">
          I Understand
        </Button>
      </div>
    </div>
  );
};

export default ServiceNotice;