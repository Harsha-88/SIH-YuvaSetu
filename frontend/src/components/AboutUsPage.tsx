import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Target, Zap, BarChart3, ThumbsUp, Users, Brain, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutUsPageProps {
  onNavigate: (view: string) => void;
}

const AboutUsPage = ({ onNavigate }: AboutUsPageProps) => {
  const features = [
    {
      icon: Brain,
      title: 'Smart Match',
      description: 'AI-powered matching algorithm that analyzes your skills, preferences, and academic background to find the perfect internship opportunities.',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: BarChart3,
      title: 'Live Track',
      description: 'Real-time tracking of seat availability, application status, and allocation progress across all government internship programs.',
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: ThumbsUp,
      title: 'Feedback Loop',
      description: 'Continuous improvement through student and mentor feedback, ensuring the platform evolves to meet user needs effectively.',
      color: 'bg-orange-100 text-orange-700'
    },
    {
      icon: Zap,
      title: 'Auto Apply',
      description: 'Automated application submission to multiple relevant internships based on your profile, saving time and maximizing opportunities.',
      color: 'bg-purple-100 text-purple-700'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Profile Creation',
      description: 'Students create comprehensive profiles with academic details, skills, and preferences',
      icon: Users
    },
    {
      step: 2,
      title: 'AI Analysis',
      description: 'Our advanced AI engine analyzes profile data and matches with available internships',
      icon: Brain
    },
    {
      step: 3,
      title: 'Smart Recommendations',
      description: 'Personalized internship recommendations with match scores and detailed explanations',
      icon: Target
    },
    {
      step: 4,
      title: 'Seamless Application',
      description: 'One-click applications with automated document submission and status tracking',
      icon: CheckCircle
    }
  ];



  const stats = [
    { number: '50,000+', label: 'Students Registered', color: 'text-blue-700' },
    { number: '5,000+', label: 'Internships Available', color: 'text-green-700' },
    { number: '500+', label: 'Partner Organizations', color: 'text-orange-700' },
    { number: '95%', label: 'Match Accuracy', color: 'text-purple-700' },
    { number: '28', label: 'States Covered', color: 'text-red-700' },
    { number: '12+', label: 'Languages Supported', color: 'text-indigo-700' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl mb-6">About YuvaSetu</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Empowering India's youth through AI-driven smart allocation for the PM Internship Scheme
            </p>
            <div className="flex justify-center flex-wrap gap-3">
              <Badge className="bg-blue-700 text-blue-100 border-blue-600 px-4 py-2">
                Government Initiative
              </Badge>
              <Badge className="bg-purple-700 text-purple-100 border-purple-600 px-4 py-2">
                AI-Powered Platform
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl text-blue-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            YuvaSetu bridges the gap between talented students and meaningful government internship opportunities. 
            Using advanced AI technology, we ensure every student finds the right opportunity while helping 
            government organizations access the best talent efficiently and transparently.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl text-blue-900 text-center mb-12">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl text-blue-900 text-center mb-12">How YuvaSetu Works</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid lg:grid-cols-4 gap-8 relative z-10">
              {process.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="text-center bg-white border-2 border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 relative">
                        <Icon className="w-8 h-8" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {item.step}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>





        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl mb-4">Ready to Start Your Journey?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join thousands of students who have found their perfect internship through YuvaSetu's AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => onNavigate('recommendations')}
                  className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg flex items-center gap-2"
                >
                  Explore Internships
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  onClick={() => onNavigate('dashboard')}
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg"
                >
                  View Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;