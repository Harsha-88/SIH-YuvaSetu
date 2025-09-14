import React, { useState } from 'react';
import MainDashboard from './components/MainDashboard';
import WelcomeScreen from './components/WelcomeScreen';
import SignupScreen from './components/SignupScreen';
import LoginPage from './components/LoginPage';
import ProfileSetupScreen from './components/ProfileSetupScreen';
import StudentDashboard from './components/StudentDashboard';
import AdminDashboard from './components/AdminDashboard';
import AboutUsPage from './components/AboutUsPage';
import AccountSettingsPage from './components/AccountSettingsPage';
import FeedbackPage from './components/FeedbackPage';
import LiveDashboardPage from './components/LiveDashboardPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingChatbot from './components/FloatingChatbot';

type AppView = 'main' | 'welcome' | 'signup' | 'login' | 'profile-setup' | 'student' | 'admin' | 'profile' | 'recommendations' | 'dashboard' | 'about' | 'settings' | 'feedback';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('welcome');
  const [isNewUser, setIsNewUser] = useState(false);
  const [userType, setUserType] = useState<'student' | 'admin' | null>(null);
  const [userData, setUserData] = useState<{name: string; email: string} | null>(null);

  const handleExploreClick = () => {
    setCurrentView('welcome');
  };

  const handleSignUpClick = () => {
    setCurrentView('signup');
    setIsNewUser(true);
  };

  const handleLoginClick = () => {
    setCurrentView('login');
    setIsNewUser(false);
  };

  const handleBackToWelcome = () => {
    setCurrentView('welcome');
  };

  const handleSignupComplete = (name?: string, email?: string) => {
    if (name && email) {
      setUserData({ name, email });
    }
    setCurrentView('profile-setup');
  };

  const handleLogin = (type: 'student' | 'admin', name?: string, email?: string) => {
    setUserType(type);
    if (name && email) {
      setUserData({ name, email });
    }
    if (type === 'student' && isNewUser) {
      // New users need to complete profile setup
      setCurrentView('profile-setup');
    } else if (type === 'student') {
      setCurrentView('recommendations');
    } else {
      setCurrentView('dashboard');
    }
  };

  const handleProfileComplete = () => {
    setUserType('student');
    setCurrentView('recommendations');
  };

  const handleLogout = () => {
    setCurrentView('welcome');
    setIsNewUser(false);
    setUserType(null);
    setUserData(null);
  };

  const handleGoToMain = () => {
    setCurrentView('main');
  };

  const handleNavigate = (view: string) => {
    if (view === 'logout') {
      handleLogout();
    } else if (view === 'profile') {
      setCurrentView('profile-setup');
    } else {
      setCurrentView(view as AppView);
    }
  };

  // Views without navbar/footer
  if (currentView === 'welcome') {
    return (
      <WelcomeScreen 
        onSignUp={handleSignUpClick} 
        onLogin={handleLoginClick}
      />
    );
  }

  if (currentView === 'signup') {
    return (
      <SignupScreen 
        onSignupComplete={handleSignupComplete}
        onBackToWelcome={handleBackToWelcome}
      />
    );
  }

  if (currentView === 'login') {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (currentView === 'profile-setup') {
    return <ProfileSetupScreen onProfileComplete={handleProfileComplete} />;
  }

  if (currentView === 'main') {
    return <MainDashboard onExploreClick={handleExploreClick} />;
  }

  // Views with navbar/footer
  const renderContent = () => {
    switch (currentView) {
      case 'recommendations':
        return <StudentDashboard onLogout={handleLogout} studentName={userData?.name} />;
      case 'dashboard':
        return <LiveDashboardPage userType={userType || 'student'} />;
      case 'about':
        return <AboutUsPage onNavigate={handleNavigate} />;
      case 'settings':
        return <AccountSettingsPage onNavigate={handleNavigate} />;
      case 'feedback':
        return <FeedbackPage onNavigate={handleNavigate} />;
      case 'admin':
        return <AdminDashboard onLogout={handleLogout} />;
      default:
        return <StudentDashboard onLogout={handleLogout} studentName={userData?.name} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentView={currentView} 
        onNavigate={handleNavigate} 
        userType={userType}
      />
      <div className="flex-1">
        {renderContent()}
      </div>
      <Footer />
      
      {/* Global Floating Chatbot - only show when user is logged in */}
      {userType && <FloatingChatbot />}
    </div>
  );
}