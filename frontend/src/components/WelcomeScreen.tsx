import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import Logo from './Logo';
import { ArrowRight, Users, Target, Award, Globe, Shield, Smartphone } from 'lucide-react';

interface WelcomeScreenProps {
  onSignUp: () => void;
  onLogin: () => void;
}

const WelcomeScreen = ({ onSignUp, onLogin }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          {/* Header */}
          <div className="text-center mb-12">
            <Logo className="mb-6 mx-auto" />
            <h1 className="text-4xl lg:text-5xl text-blue-900 mb-6 leading-tight">
              Welcome to YuvaSetu
            </h1>
            <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
              AI-Powered Smart Allocation Engine for PM Internship Scheme
            </p>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Bridging youth with government internship opportunities through intelligent matching and seamless allocation
            </p>
            
            {/* Platform Badges */}
            <div className="flex justify-center flex-wrap gap-3 mb-8">
              <Badge className="bg-blue-700 text-blue-100 border-blue-600 px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Government Trusted
              </Badge>
              <Badge className="bg-green-700 text-green-100 border-green-600 px-4 py-2">
                <Globe className="w-4 h-4 mr-2" />
                AI-Powered
              </Badge>
              <Badge className="bg-purple-700 text-purple-100 border-purple-600 px-4 py-2">
                <Smartphone className="w-4 h-4 mr-2" />
                PWA Offline Ready
              </Badge>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={onSignUp}
                className="w-full sm:w-auto px-8 py-3 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center gap-2 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                onClick={onLogin}
                variant="outline"
                className="w-full sm:w-auto px-8 py-3 border-blue-700 text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                Sign In
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-lg text-blue-900 mb-2">AI-Powered Matching</h3>
                <p className="text-sm text-gray-600">
                  Advanced algorithms match students with perfect internship opportunities
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-lg text-blue-900 mb-2">Government Programs</h3>
                <p className="text-sm text-gray-600">
                  Direct access to official PM Internship Scheme opportunities
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-orange-700" />
                </div>
                <h3 className="text-lg text-blue-900 mb-2">Skill Development</h3>
                <p className="text-sm text-gray-600">
                  Build real-world skills with structured learning and mentorship
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-purple-700" />
                </div>
                <h3 className="text-lg text-blue-900 mb-2">Nationwide Access</h3>
                <p className="text-sm text-gray-600">
                  Connect with opportunities across all states and territories
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="text-center">
            <h2 className="text-2xl text-blue-900 mb-8">Empowering India's Youth</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl text-blue-700 mb-2">50,000+</div>
                <div className="text-sm text-gray-600">Students Registered</div>
              </div>
              <div>
                <div className="text-3xl text-green-600 mb-2">5,000+</div>
                <div className="text-sm text-gray-600">Internships Available</div>
              </div>
              <div>
                <div className="text-3xl text-orange-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Partner Organizations</div>
              </div>
              <div>
                <div className="text-3xl text-purple-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Match Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm opacity-90">
            © 2024 YuvaSetu - PM Internship Scheme | Government of India | Smart India Hackathon
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WelcomeScreen;