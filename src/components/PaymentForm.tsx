import { Button } from '@/components/ui/button';

interface PaymentFormProps {
  formData: {
    fullName: string;
    email: string;
  };
  onFormDataChange: (data: { fullName: string; email: string }) => void;
  onSubmit: () => void;
}

const PaymentForm = ({ formData, onFormDataChange, onSubmit }: PaymentFormProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-gray-700 font-medium">Amount</label>
        <div className="bg-gray-100 p-4 rounded-lg">
          <span className="text-2xl font-bold">₦6,500</span>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-gray-700 font-medium">Full Name</label>
        <input 
          type="text" 
          placeholder="Your full name" 
          value={formData.fullName} 
          onChange={e => onFormDataChange({
            ...formData,
            fullName: e.target.value
          })} 
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
        />
      </div>

      <div className="space-y-2">
        <label className="text-gray-700 font-medium">Your Email Address</label>
        <input 
          type="email" 
          placeholder="email address" 
          value={formData.email} 
          onChange={e => onFormDataChange({
            ...formData,
            email: e.target.value
          })} 
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
        />
      </div>

      <Button 
        onClick={onSubmit} 
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 text-lg rounded-lg"
      >
        Pay
      </Button>

      <p className="text-center text-gray-600 text-sm">
        Your PAY ID will be displayed on the app once your payment is confirmed.
      </p>
    </div>
  );
};

export default PaymentForm;