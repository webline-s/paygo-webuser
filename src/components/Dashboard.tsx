import { useState } from 'react';
import { CarouselApi } from '@/components/ui/carousel';
import { useAuth } from '../contexts/AuthContext';
import { useAutoSlide } from '../hooks/useAutoSlide';
import BuyPayId from './BuyPayId';
import Transfer from './Transfer';
import Airtime from './Airtime';
import Data from './Data';
import Support from './Support';
import EarnMore from './EarnMore';
import Profile from './Profile';
import ProfileInfo from './ProfileInfo';
import About from './About';
import TransactionHistory from './TransactionHistory';
import ReferEarn from './ReferEarn';
import Upgrade from './Upgrade';
import JoinCommunities from './JoinCommunities';
import Onboarding from './Onboarding';
import ReferEarnPopup from './ReferEarnPopup';
import DashboardHeader from './DashboardHeader';
import QuickActions from './QuickActions';
import PromotionsCarousel from './PromotionsCarousel';
import LogoutDialog from './LogoutDialog';

const Dashboard = () => {
  const { user, logout, isOnboardingComplete, completeOnboarding, showReferPopup, hideReferPopup } = useAuth();
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [api, setApi] = useState<CarouselApi>();
  const [currentView, setCurrentView] = useState('dashboard');
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [showOnboardingPopup, setShowOnboardingPopup] = useState(!isOnboardingComplete);

  useAutoSlide(api, 4000);

  const handleLogout = () => {
    setShowLogoutDialog(true);
  };

  const confirmLogout = () => {
    logout();
    setShowLogoutDialog(false);
  };

  const cancelLogout = () => {
    setShowLogoutDialog(false);
  };

  const handleCompleteOnboarding = () => {
    completeOnboarding();
    setShowOnboardingPopup(false);
  };

  if (currentView === 'buy-pay-id') {
    return <BuyPayId onBack={() => setCurrentView('dashboard')} />;
  }

  if (currentView === 'transfer') {
    return <Transfer onBack={() => setCurrentView('dashboard')} />;
  }

  if (currentView === 'airtime') {
    return <Airtime onBack={() => setCurrentView('dashboard')} />;
  }

  if (currentView === 'data') {
    return <Data onBack={() => setCurrentView('dashboard')} />;
  }

  if (currentView === 'support') {
    return <Support onBack={() => setCurrentView('dashboard')} />;
  }

  if (currentView === 'earn-more') {
    return <EarnMore onBack={() => setCurrentView('dashboard')} />;
  }

  if (currentView === 'profile') {
    return <Profile 
      onBack={() => setCurrentView('dashboard')} 
      onNavigate={(page) => setCurrentView(page)}
    />;
  }

  if (currentView === 'profile-info') {
    return <ProfileInfo onBack={() => setCurrentView('profile')} />;
  }

  if (currentView === 'about') {
    return <About onBack={() => setCurrentView('profile')} />;
  }

  if (currentView === 'transaction-history') {
    return <TransactionHistory onBack={() => setCurrentView('dashboard')} />;
  }

  if (currentView === 'refer-earn') {
    return <ReferEarn 
      onBack={() => setCurrentView('dashboard')} 
      onNavigate={(page) => setCurrentView(page)}
    />;
  }

  if (currentView === 'upgrade') {
    return <Upgrade onBack={() => setCurrentView('dashboard')} />;
  }

  if (currentView === 'join-communities') {
    return <JoinCommunities onBack={() => setCurrentView('dashboard')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-orange-100">
      {/* Onboarding Popup */}
      {showOnboardingPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl">
            <Onboarding onComplete={handleCompleteOnboarding} />
          </div>
        </div>
      )}

      {/* Sliding Banner */}
      <div className="bg-white p-3 overflow-hidden border-b">
        <div className="animate-slide-banner whitespace-nowrap text-red-500">
          Dear user we're currently having issues with OPay bank kindly use another bank for your payment of pay Id
        </div>
      </div>

      {/* Header */}
      <DashboardHeader
        balanceVisible={balanceVisible}
        setBalanceVisible={setBalanceVisible}
        onTransactionHistory={() => setCurrentView('transaction-history')}
        onLogout={handleLogout}
        onUpgrade={() => setCurrentView('upgrade')}
        onTransfer={() => setCurrentView('transfer')}
      />

      {/* Quick Actions and Promotions */}
      <div className="p-6">
        <QuickActions onNavigate={setCurrentView} />
        <PromotionsCarousel setApi={setApi} />
      </div>

      {/* Logout Confirmation Dialog */}
      <LogoutDialog
        isOpen={showLogoutDialog}
        onConfirm={confirmLogout}
        onCancel={cancelLogout}
      />

      {/* Refer & Earn Popup */}
      {showReferPopup && (
        <ReferEarnPopup onClose={hideReferPopup} />
      )}
    </div>
  );
};

export default Dashboard;
