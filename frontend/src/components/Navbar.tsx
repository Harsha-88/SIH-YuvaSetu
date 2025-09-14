import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Badge } from './ui/badge';
import Logo from './Logo';
import { Menu, User, BarChart3, Info, Settings, MessageSquare, LogOut, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  userType?: 'student' | 'admin' | null;
}

const Navbar = ({ currentView, onNavigate, userType }: NavbarProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navigationItems = [
    { id: 'profile', label: 'Profile', icon: User, show: userType === 'student' },
    { id: 'recommendations', label: 'Recommendations', icon: BarChart3, show: userType === 'student' },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, show: !!userType },
    { id: 'about', label: 'About Us', icon: Info, show: true },
    { id: 'settings', label: 'Account Settings', icon: Settings, show: !!userType },
    { id: 'feedback', label: 'Feedback', icon: MessageSquare, show: !!userType },
  ];

  const visibleItems = navigationItems.filter(item => item.show);

  const handleNavigation = (viewId: string) => {
    onNavigate(viewId);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {visibleItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentView === item.id ? "default" : "ghost"}
                  onClick={() => handleNavigation(item.id)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              );
            })}
            
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="p-2 rounded-lg"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Logout */}
            {userType && (
              <Button
                variant="outline"
                onClick={() => onNavigate('logout')}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border-red-200 text-red-600 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 pb-4 border-b border-gray-200">
                    <Logo />
                  </div>
                  
                  <div className="flex-1 py-4">
                    <div className="space-y-2">
                      {visibleItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Button
                            key={item.id}
                            variant={currentView === item.id ? "default" : "ghost"}
                            onClick={() => handleNavigation(item.id)}
                            className="w-full justify-start gap-3 px-3 py-3 rounded-lg"
                          >
                            <Icon className="w-5 h-5" />
                            {item.label}
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 space-y-2">
                    <Button
                      variant="ghost"
                      onClick={toggleDarkMode}
                      className="w-full justify-start gap-3 px-3 py-3 rounded-lg"
                    >
                      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </Button>

                    {userType && (
                      <Button
                        variant="outline"
                        onClick={() => handleNavigation('logout')}
                        className="w-full justify-start gap-3 px-3 py-3 rounded-lg border-red-200 text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="w-5 h-5" />
                        Logout
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      {userType === 'student' && (
        <div className="bg-blue-50 border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className={`flex items-center gap-2 ${currentView === 'profile' ? 'text-blue-700 font-medium' : 'text-gray-600'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentView === 'profile' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-gray-600'}`}>
                  1
                </div>
                Profile
              </div>
              <div className={`w-12 h-0.5 ${currentView === 'recommendations' || currentView === 'dashboard' ? 'bg-blue-700' : 'bg-gray-300'}`} />
              <div className={`flex items-center gap-2 ${currentView === 'recommendations' ? 'text-blue-700 font-medium' : 'text-gray-600'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentView === 'recommendations' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-gray-600'}`}>
                  2
                </div>
                Recommendations
              </div>
              <div className={`w-12 h-0.5 ${currentView === 'dashboard' ? 'bg-blue-700' : 'bg-gray-300'}`} />
              <div className={`flex items-center gap-2 ${currentView === 'dashboard' ? 'text-blue-700 font-medium' : 'text-gray-600'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentView === 'dashboard' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-gray-600'}`}>
                  3
                </div>
                Dashboard
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;