import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Logo from './Logo';
import { MapPin, Clock, Users, BookOpen, Search, TrendingUp, Building, UserCheck, ArrowRight } from 'lucide-react';

interface MainDashboardProps {
  onExploreClick: () => void;
}

const MainDashboard = ({ onExploreClick }: MainDashboardProps) => {
  const sampleInternships = [
    {
      id: 1,
      title: "Digital India Initiative - Frontend Development",
      organization: "Ministry of Electronics & IT",
      location: "New Delhi",
      duration: "6 months",
      seats: { available: 12, total: 20 },
      tag: "Best Match",
      skills: ["React", "JavaScript", "UI/UX"]
    },
    {
      id: 2,
      title: "Smart Cities Mission - Data Analytics",
      organization: "Ministry of Housing & Urban Affairs",
      location: "Mumbai",
      duration: "4 months",
      seats: { available: 5, total: 15 },
      tag: "High Demand",
      skills: ["Python", "Data Science", "SQL"]
    },
    {
      id: 3,
      title: "Skill India - Mobile App Development",
      organization: "Ministry of Skill Development",
      location: "Bangalore",
      duration: "5 months",
      seats: { available: 8, total: 12 },
      tag: "Featured",
      skills: ["Flutter", "Mobile Dev", "API Integration"]
    },
    {
      id: 4,
      title: "Make in India - IoT Solutions",
      organization: "Department of Science & Technology",
      location: "Hyderabad",
      duration: "6 months",
      seats: { available: 15, total: 18 },
      tag: "New",
      skills: ["IoT", "Arduino", "Cloud Computing"]
    },
    {
      id: 5,
      title: "Digital Agriculture - Farm Tech",
      organization: "Ministry of Agriculture",
      location: "Pune",
      duration: "4 months",
      seats: { available: 0, total: 10 },
      tag: "Full",
      skills: ["AgriTech", "Sensors", "Machine Learning"]
    },
    {
      id: 6,
      title: "Clean Energy - Solar Analytics",
      organization: "Ministry of New & Renewable Energy",
      location: "Chennai",
      duration: "5 months",
      seats: { available: 7, total: 12 },
      tag: "Trending",
      skills: ["Solar Tech", "Data Analysis", "Sustainability"]
    }
  ];

  const platformStats = {
    totalInternships: 2847,
    seatsFilled: 1952,
    studentsRegistered: 8340,
    successRate: 94
  };

  const getAvailabilityColor = (available: number, total: number) => {
    if (available === 0) return "bg-gray-400";
    const ratio = available / total;
    if (ratio > 0.5) return "bg-green-500";
    if (ratio > 0.2) return "bg-orange-500";
    return "bg-red-500";
  };

  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'best match': return "bg-gradient-to-r from-green-500 to-green-600";
      case 'featured': return "bg-gradient-to-r from-blue-500 to-blue-600";
      case 'trending': return "bg-gradient-to-r from-purple-500 to-purple-600";
      case 'new': return "bg-gradient-to-r from-orange-500 to-orange-600";
      case 'high demand': return "bg-gradient-to-r from-red-500 to-red-600";
      case 'full': return "bg-gray-500";
      default: return "bg-blue-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Logo />
              <nav className="hidden md:flex items-center gap-6">
                <a href="#internships" className="text-gray-600 hover:text-blue-700 transition-colors">Internships</a>
                <a href="#about" className="text-gray-600 hover:text-blue-700 transition-colors">About</a>
                <a href="#stats" className="text-gray-600 hover:text-blue-700 transition-colors">Impact</a>
              </nav>
            </div>
            <Button 
              onClick={onExploreClick}
              className="bg-blue-700 hover:bg-blue-800 rounded-lg"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Welcome to YuvaSetu – Bridging Youth with Opportunities
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-powered platform to match students with PM Internship Scheme opportunities across India. 
            Connecting talent with purpose through intelligent allocation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={onExploreClick}
              size="lg" 
              className="bg-blue-700 hover:bg-blue-800 rounded-lg px-8 py-3 flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              Explore Internships
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-lg px-8 py-3 border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* AI Recommended Internships Section */}
      <section id="internships" className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-3xl text-blue-900">AI-Powered Internship Recommendations</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our intelligent matching system analyzes student profiles and recommends the most suitable 
              internship opportunities across various government initiatives.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sampleInternships.map((internship) => (
              <Card key={internship.id} className="relative overflow-hidden shadow-lg border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all hover:-translate-y-1">
                {/* Tag Badge */}
                <div className="absolute top-3 right-3">
                  <Badge className={`${getTagColor(internship.tag)} text-white border-0 shadow-sm`}>
                    {internship.tag}
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight pr-16">{internship.title}</CardTitle>
                  <p className="text-sm text-blue-700 font-medium">{internship.organization}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Location and Duration */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {internship.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {internship.duration}
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-1">
                    {internship.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-blue-100 text-blue-800 border-0">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Seat Availability */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {internship.seats.available > 0 
                          ? `${internship.seats.available} of ${internship.seats.total} seats available`
                          : 'Application closed'
                        }
                      </span>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${getAvailabilityColor(internship.seats.available, internship.seats.total)}`}></div>
                  </div>
                  
                  {/* View Details Button */}
                  <Button 
                    className="w-full rounded-lg bg-blue-700 hover:bg-blue-800 flex items-center gap-2"
                    disabled={internship.seats.available === 0}
                  >
                    <BookOpen className="w-4 h-4" />
                    {internship.seats.available > 0 ? 'View Details' : 'Waitlist'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Stats Section */}
      <section id="stats" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-blue-900 mb-4">Platform Impact & Scale</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              YuvaSetu is transforming how students connect with government internship opportunities across India
            </p>
          </div>

          {/* Live Stats Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 shadow-xl">
              <div className="flex items-center justify-center mb-3">
                <Building className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-1">{platformStats.totalInternships.toLocaleString()}+</div>
              <div className="text-sm opacity-90">Total Internships</div>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-to-br from-green-600 to-green-700 text-white border-0 shadow-xl">
              <div className="flex items-center justify-center mb-3">
                <UserCheck className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-1">{platformStats.seatsFilled.toLocaleString()}+</div>
              <div className="text-sm opacity-90">Seats Filled</div>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-to-br from-orange-600 to-orange-700 text-white border-0 shadow-xl">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-1">{platformStats.studentsRegistered.toLocaleString()}+</div>
              <div className="text-sm opacity-90">Students Registered</div>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-to-br from-purple-600 to-purple-700 text-white border-0 shadow-xl">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-1">{platformStats.successRate}%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </Card>
          </div>

          {/* India Map Visualization */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-center text-blue-900 flex items-center justify-center gap-2">
                <MapPin className="w-6 h-6" />
                Nationwide Coverage & Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-8">
                {/* Simplified India Map */}
                <div className="relative">
                  <svg width="320" height="220" viewBox="0 0 320 220" className="opacity-90">
                    {/* India outline */}
                    <path 
                      d="M80 40 C100 20, 140 25, 160 40 L170 50 C180 70, 185 90, 175 110 L170 130 C160 150, 140 160, 120 155 L100 150 C85 140, 75 120, 70 100 L65 80 C70 60, 75 50, 80 40 Z" 
                      fill="#1E3A8A" 
                      opacity="0.8"
                      className="drop-shadow-lg"
                    />
                    {/* State indicators with animation */}
                    <circle cx="120" cy="80" r="5" fill="#059669" className="animate-pulse" />
                    <circle cx="140" cy="90" r="4" fill="#DC2626" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <circle cx="110" cy="100" r="4" fill="#D97706" className="animate-pulse" style={{ animationDelay: '1s' }} />
                    <circle cx="100" cy="70" r="3" fill="#7C2D12" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                    <circle cx="130" cy="110" r="3" fill="#059669" className="animate-pulse" style={{ animationDelay: '2s' }} />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold">28</div>
                      <div className="text-sm opacity-90">States Covered</div>
                    </div>
                  </div>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-sm text-gray-600">Tier 2/3 Cities</div>
                  </div>
                  <div className="p-4">
                    <div className="text-2xl font-bold text-blue-600">120+</div>
                    <div className="text-sm text-gray-600">Partner Organizations</div>
                  </div>
                  <div className="p-4">
                    <div className="text-2xl font-bold text-orange-600">15</div>
                    <div className="text-sm text-gray-600">Industry Sectors</div>
                  </div>
                  <div className="p-4">
                    <div className="text-2xl font-bold text-purple-600">72hrs</div>
                    <div className="text-sm text-gray-600">Avg. Match Time</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm opacity-80"></div>
              </div>
              <div>
                <h3 className="font-bold">YuvaSetu</h3>
                <p className="text-sm opacity-80">Powered by AI & Digital India</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm opacity-80">
              <span>Ministry of Education</span>
              <span>•</span>
              <span>Government of India</span>
              <span>•</span>
              <span>2024</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainDashboard;