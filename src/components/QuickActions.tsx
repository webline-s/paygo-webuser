
import { Headphones, Globe, User } from 'lucide-react';

interface QuickAction {
  icon: React.ReactNode;
  label: string;
  action: () => void;
}

interface QuickActionsProps {
  onNavigate: (view: string) => void;
}

const QuickActions = ({ onNavigate }: QuickActionsProps) => {
  const quickActions: QuickAction[] = [
    { 
      icon: <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center text-xs">💳</div>, 
      label: "Buy PAY ID",
      action: () => onNavigate('buy-pay-id')
    },
    { 
      icon: <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-xs">📺</div>, 
      label: "Watch",
      action: () => window.open('https://bluepay-28.vercel.app', '_blank')
    },
    { 
      icon: <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-xs">📊</div>, 
      label: "Airtime",
      action: () => onNavigate('airtime')
    },
    { 
      icon: <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center text-xs">💾</div>, 
      label: "Data",
      action: () => onNavigate('data')
    },
    { 
      icon: <Headphones className="w-6 h-6 text-gray-700" />, 
      label: "Support",
      action: () => onNavigate('support')
    },
    { 
      icon: <Globe className="w-6 h-6 text-blue-600" />, 
      label: "Group",
      action: () => onNavigate('join-communities')
    },
    { 
      icon: <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs">💰</div>, 
      label: "Earn More",
      action: () => onNavigate('earn-more')
    },
    { 
      icon: <User className="w-6 h-6 text-gray-700" />, 
      label: "Profile",
      action: () => onNavigate('profile')
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-3 mb-8">
      {quickActions.map((action, index) => (
        <div key={index} className="text-center">
          <button 
            onClick={action.action}
            className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow mb-2 w-full h-16 flex items-center justify-center"
          >
            {action.icon}
          </button>
          <p className="text-xs text-gray-600 font-medium">{action.label}</p>
        </div>
      ))}
    </div>
  );
};

export default QuickActions;
