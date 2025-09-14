import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Logo from './Logo';
import { Users, Building, MapPin, TrendingUp, LogOut, Activity } from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  // Mock data for charts
  const categoryData = [
    { name: 'Technology', value: 35, color: '#1E3A8A' },
    { name: 'Healthcare', value: 20, color: '#059669' },
    { name: 'Education', value: 18, color: '#DC2626' },
    { name: 'Agriculture', value: 15, color: '#D97706' },
    { name: 'Others', value: 12, color: '#7C2D12' }
  ];

  const stateData = [
    { state: 'Maharashtra', participants: 2850 },
    { state: 'Karnataka', participants: 2340 },
    { state: 'Tamil Nadu', participants: 2100 },
    { state: 'Uttar Pradesh', participants: 1980 },
    { state: 'Gujarat', participants: 1760 },
    { state: 'West Bengal', participants: 1540 }
  ];

  const liveStats = {
    totalInternships: 4250,
    filledSeats: 3180,
    vacantSeats: 1070,
    activeStudents: 12560,
    completionRate: 87
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Administrator</p>
                <p className="text-xs text-gray-500">Ministry of Education</p>
              </div>
              <Button
                onClick={onLogout}
                variant="outline"
                className="flex items-center gap-2 rounded-lg border-gray-300"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl text-blue-900 mb-2">National Internship Monitoring Dashboard</h1>
          <p className="text-gray-600">
            Real-time insights into PM Internship Scheme allocation and performance across India
          </p>
        </div>

        {/* Live Counters */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card className="text-center p-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 shadow-lg">
            <div className="flex items-center justify-center mb-2">
              <Building className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">{liveStats.totalInternships.toLocaleString()}</div>
            <div className="text-sm opacity-90">Total Internships</div>
          </Card>
          
          <Card className="text-center p-4 bg-gradient-to-br from-green-600 to-green-700 text-white border-0 shadow-lg">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">{liveStats.filledSeats.toLocaleString()}</div>
            <div className="text-sm opacity-90">Filled Seats</div>
          </Card>
          
          <Card className="text-center p-4 bg-gradient-to-br from-orange-600 to-orange-700 text-white border-0 shadow-lg">
            <div className="flex items-center justify-center mb-2">
              <Activity className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">{liveStats.vacantSeats.toLocaleString()}</div>
            <div className="text-sm opacity-90">Vacant Seats</div>
          </Card>
          
          <Card className="text-center p-4 bg-gradient-to-br from-purple-600 to-purple-700 text-white border-0 shadow-lg">
            <div className="flex items-center justify-center mb-2">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">{liveStats.activeStudents.toLocaleString()}</div>
            <div className="text-sm opacity-90">Active Students</div>
          </Card>
          
          <Card className="text-center p-4 bg-gradient-to-br from-teal-600 to-teal-700 text-white border-0 shadow-lg">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">{liveStats.completionRate}%</div>
            <div className="text-sm opacity-90">Completion Rate</div>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Category-wise Distribution Pie Chart */}
          <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                Category-wise Seat Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* State-wise Participation Bar Chart */}
          <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                Top States by Participation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stateData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="state" type="category" width={80} />
                    <Tooltip />
                    <Bar dataKey="participants" fill="#059669" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* India Map Representation */}
        <Card className="mt-6 shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              Geographic Distribution Across India
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg">
              {/* Simplified India Map Representation */}
              <div className="relative">
                <svg width="300" height="200" viewBox="0 0 300 200" className="opacity-80">
                  {/* Simplified India outline */}
                  <path 
                    d="M80 40 C100 20, 140 25, 160 40 L170 50 C180 70, 185 90, 175 110 L170 130 C160 150, 140 160, 120 155 L100 150 C85 140, 75 120, 70 100 L65 80 C70 60, 75 50, 80 40 Z" 
                    fill="#1E3A8A" 
                    opacity="0.6"
                  />
                  {/* State indicators */}
                  <circle cx="120" cy="80" r="4" fill="#059669" />
                  <circle cx="140" cy="90" r="3" fill="#DC2626" />
                  <circle cx="110" cy="100" r="3" fill="#D97706" />
                  <circle cx="100" cy="70" r="2" fill="#7C2D12" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-xl font-bold">28</div>
                    <div className="text-xs">States Covered</div>
                  </div>
                </div>
              </div>
              <div className="ml-8 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span>High Participation (&gt;2000)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  <span>Medium Participation (1000-2000)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <span>Low Participation (&lt;1000)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;