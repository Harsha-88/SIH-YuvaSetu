import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import FloatingChatbot from './FloatingChatbot';
import { MapPin, Clock, Users, BookOpen, Sparkles, RefreshCw, Filter, Search, Heart, Bookmark, Award, Target, Brain, TrendingUp, CheckCircle } from 'lucide-react';

interface StudentDashboardProps {
  onLogout: () => void;
  studentName?: string;
}

const StudentDashboard = ({ onLogout, studentName = "Student" }: StudentDashboardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [savedInternships, setSavedInternships] = useState<number[]>([]);
  const [filters, setFilters] = useState({
    location: 'all',
    stipend: 'all',
    skills: 'all',
    duration: 'all'
  });
  const [searchTerm, setSearchTerm] = useState('');
  
  const recommendedInternships = [
    {
      id: 1,
      title: "Digital India Initiative - Frontend Development",
      organization: "Ministry of Electronics & IT",
      location: "New Delhi",
      duration: "6 months",
      stipend: "₹15,000",
      seats: { available: 12, total: 20 },
      matchScore: 95,
      skills: ["React", "JavaScript", "UI/UX"],
      matchReasons: [
        "Matches your React expertise (5/5)",
        "Perfect location preference (Delhi)",
        "Aligns with your UI/UX background"
      ],
      companyLogo: "🏛️",
      type: "Technical",
      urgency: "High"
    },
    {
      id: 2,
      title: "Smart Cities Mission - Data Analytics",
      organization: "Ministry of Housing & Urban Affairs",
      location: "Mumbai",
      duration: "4 months",
      stipend: "₹12,000",
      seats: { available: 5, total: 15 },
      matchScore: 88,
      skills: ["Python", "Data Science", "SQL"],
      matchReasons: [
        "Strong Python skills match (4/5)",
        "Data Science background aligns",
        "Previous analytics project experience"
      ],
      companyLogo: "🏙️",
      type: "Analytics",
      urgency: "Medium"
    },
    {
      id: 3,
      title: "Skill India - Mobile App Development",
      organization: "Ministry of Skill Development",
      location: "Bangalore",
      duration: "5 months",
      stipend: "₹18,000",
      seats: { available: 8, total: 12 },
      matchScore: 82,
      skills: ["Flutter", "Mobile Dev", "API Integration"],
      matchReasons: [
        "Mobile development interest",
        "API integration experience",
        "Bangalore tech hub preference"
      ],
      companyLogo: "📱",
      type: "Development",
      urgency: "Low"
    },
    {
      id: 4,
      title: "Digital Health Mission - AI Research",
      organization: "Ministry of Health & Family Welfare",
      location: "Chennai",
      duration: "6 months",
      stipend: "₹20,000",
      seats: { available: 3, total: 8 },
      matchScore: 78,
      skills: ["Machine Learning", "Healthcare Tech", "Python"],
      matchReasons: [
        "AI/ML coursework alignment",
        "Healthcare domain interest",
        "Research methodology skills"
      ],
      companyLogo: "🏥",
      type: "Research",
      urgency: "High"
    },
    {
      id: 5,
      title: "E-Governance Platform Enhancement",
      organization: "Ministry of Rural Development",
      location: "Hyderabad",
      duration: "4 months",
      stipend: "₹14,000",
      seats: { available: 15, total: 25 },
      matchScore: 75,
      skills: ["Full Stack", "Database", "Government Tech"],
      matchReasons: [
        "Full-stack development skills",
        "Government platform experience",
        "Database optimization knowledge"
      ],
      companyLogo: "💻",
      type: "Development",
      urgency: "Medium"
    }
  ];

  const getAvailabilityColor = (available: number, total: number) => {
    const ratio = available / total;
    if (ratio > 0.5) return "bg-green-500";
    if (ratio > 0.2) return "bg-orange-500";
    return "bg-red-500";
  };

  const handleFindMatches = () => {
    setIsLoading(true);
    // Simulate AI matching process
    setTimeout(() => {
      setIsLoading(false);
      setLastUpdated(new Date());
      // TODO: Call AI matching API to get fresh recommendations
      console.log('AI Engine: Finding new matches based on updated profile...');
    }, 2000);
  };

  const handleSaveInternship = (internshipId: number) => {
    setSavedInternships(prev => 
      prev.includes(internshipId) 
        ? prev.filter(id => id !== internshipId)
        : [...prev, internshipId]
    );
  };

  const handleApply = (internshipId: number) => {
    // TODO: Handle application submission
    console.log('Applying to internship:', internshipId);
  };

  const filteredInternships = recommendedInternships.filter(internship => {
    return (
      (filters.location === 'all' || internship.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.skills === 'all' || internship.skills.some(skill => skill.toLowerCase().includes(filters.skills.toLowerCase()))) &&
      (filters.duration === 'all' || internship.duration.includes(filters.duration)) &&
      (!searchTerm || internship.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       internship.organization.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl text-blue-900 mb-2">Hello, {studentName}! 👋</h1>
          <p className="text-gray-600">
            Your AI-powered internship recommendations are ready. Here are the best matches for your profile.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search internships, organizations, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-lg"
              />
            </div>
            <div className="flex gap-2 flex-wrap lg:flex-nowrap">
              <Select value={filters.location} onValueChange={(value) => setFilters(prev => ({ ...prev, location: value }))}>
                <SelectTrigger className="w-36 rounded-lg">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={filters.stipend} onValueChange={(value) => setFilters(prev => ({ ...prev, stipend: value }))}>
                <SelectTrigger className="w-32 rounded-lg">
                  <SelectValue placeholder="Stipend" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Stipends</SelectItem>
                  <SelectItem value="10000-15000">₹10K-15K</SelectItem>
                  <SelectItem value="15000-20000">₹15K-20K</SelectItem>
                  <SelectItem value="20000+">₹20K+</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={filters.skills} onValueChange={(value) => setFilters(prev => ({ ...prev, skills: value }))}>
                <SelectTrigger className="w-32 rounded-lg">
                  <SelectValue placeholder="Skills" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Skills</SelectItem>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="flutter">Flutter</SelectItem>
                  <SelectItem value="ml">Machine Learning</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* AI Recommendations Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-xl text-blue-900">AI-Powered Recommendations</h2>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                {filteredInternships.length} matches found
              </Badge>
            </div>
            <Button
              onClick={handleFindMatches}
              disabled={isLoading}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg"
            >
              {isLoading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Sparkles className="w-4 h-4" />
              )}
              {isLoading ? 'Finding Matches...' : 'Find New Matches'}
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mb-6">
            Personalized recommendations based on your skills, preferences, and academic background • 
            Last updated: {lastUpdated.toLocaleDateString()} at {lastUpdated.toLocaleTimeString()}
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredInternships.map((internship) => (
              <Card key={internship.id} className="relative overflow-hidden shadow-lg border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                {/* Company Logo and Match Score */}
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <Badge className={`${getUrgencyColor(internship.urgency)} text-xs`}>
                    {internship.urgency}
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
                    {internship.matchScore}% Match
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{internship.companyLogo}</div>
                    <div className="flex-1 pr-20">
                      <CardTitle className="text-lg leading-tight">{internship.title}</CardTitle>
                      <p className="text-sm text-blue-700 font-medium">{internship.organization}</p>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {internship.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Location, Duration, and Stipend */}
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {internship.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {internship.duration}
                    </div>
                    <div className="flex items-center gap-1 col-span-2">
                      <Award className="w-4 h-4 text-green-600" />
                      <span className="font-medium text-green-700">{internship.stipend}/month</span>
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
                  
                  {/* Match Explanation */}
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Why you're a great match:</span>
                    </div>
                    <ul className="text-xs text-green-700 space-y-1">
                      {internship.matchReasons.map((reason, index) => (
                        <li key={index} className="flex items-start gap-1">
                          <span>•</span>
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Seat Availability */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {internship.seats.available} of {internship.seats.total} seats available
                      </span>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${getAvailabilityColor(internship.seats.available, internship.seats.total)}`}></div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handleApply(internship.id)}
                      className="flex-1 rounded-lg bg-blue-700 hover:bg-blue-800 flex items-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      Apply Now
                    </Button>
                    <Button 
                      onClick={() => handleSaveInternship(internship.id)}
                      variant="outline"
                      className={`rounded-lg border-gray-300 hover:bg-gray-50 p-2 ${
                        savedInternships.includes(internship.id) ? 'bg-red-50 border-red-300 text-red-600' : ''
                      }`}
                    >
                      {savedInternships.includes(internship.id) ? (
                        <Heart className="w-4 h-4 fill-current" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>



        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-0 shadow-sm hover:shadow-md transition-shadow">
            <TrendingUp className="w-6 h-6 text-blue-700 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-700">15</div>
            <div className="text-sm text-gray-600">Total Applications</div>
          </Card>
          <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-0 shadow-sm hover:shadow-md transition-shadow">
            <CheckCircle className="w-6 h-6 text-green-700 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-sm text-gray-600">Shortlisted</div>
          </Card>
          <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-0 shadow-sm hover:shadow-md transition-shadow">
            <Target className="w-6 h-6 text-orange-700 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-600">87%</div>
            <div className="text-sm text-gray-600">Avg Match Score</div>
          </Card>
          <Card className="text-center p-4 bg-white/80 backdrop-blur-sm border-0 shadow-sm hover:shadow-md transition-shadow">
            <Sparkles className="w-6 h-6 text-purple-700 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">{savedInternships.length}</div>
            <div className="text-sm text-gray-600">Saved Internships</div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;