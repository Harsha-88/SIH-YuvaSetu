import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Activity, TrendingUp, Users, MapPin, Clock, RefreshCw, AlertCircle, CheckCircle, Eye } from 'lucide-react';

interface LiveDashboardPageProps {
  userType: 'student' | 'admin';
}

const LiveDashboardPage = ({ userType }: LiveDashboardPageProps) => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isLive, setIsLive] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (isLive) {
        setLastUpdated(new Date());
      }
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [isLive]);

  // Mock data for charts
  const seatAvailabilityData = [
    { state: 'Delhi', available: 1250, total: 1500, percentage: 83 },
    { state: 'Mumbai', available: 980, total: 1200, percentage: 82 },
    { state: 'Bangalore', available: 850, total: 1000, percentage: 85 },
    { state: 'Chennai', available: 720, total: 900, percentage: 80 },
    { state: 'Kolkata', available: 650, total: 800, percentage: 81 },
    { state: 'Hyderabad', available: 560, total: 700, percentage: 80 },
    { state: 'Pune', available: 480, total: 600, percentage: 80 },
    { state: 'Ahmedabad', available: 390, total: 500, percentage: 78 }
  ];

  const allocationTrendsData = [
    { date: '2024-01-01', applications: 1200, allocations: 850, pending: 350 },
    { date: '2024-01-02', applications: 1350, allocations: 950, pending: 400 },
    { date: '2024-01-03', applications: 1100, allocations: 780, pending: 320 },
    { date: '2024-01-04', applications: 1450, allocations: 1020, pending: 430 },
    { date: '2024-01-05', applications: 1600, allocations: 1150, pending: 450 },
    { date: '2024-01-06', applications: 1800, allocations: 1280, pending: 520 },
    { date: '2024-01-07', applications: 2000, allocations: 1450, pending: 550 }
  ];

  const departmentDistribution = [
    { name: 'Technology', value: 35, color: '#1E3A8A' },
    { name: 'Finance', value: 20, color: '#059669' },
    { name: 'Policy', value: 15, color: '#DC2626' },
    { name: 'Research', value: 12, color: '#7C3AED' },
    { name: 'Social Impact', value: 10, color: '#EA580C' },
    { name: 'Others', value: 8, color: '#6B7280' }
  ];

  const skillDemandData = [
    { skill: 'Python', demand: 450, growth: 15 },
    { skill: 'Data Science', demand: 380, growth: 12 },
    { skill: 'React', demand: 320, growth: 18 },
    { skill: 'Machine Learning', demand: 290, growth: 22 },
    { skill: 'Digital Marketing', demand: 250, growth: 8 },
    { skill: 'UI/UX Design', demand: 220, growth: 14 },
    { skill: 'Java', demand: 200, growth: 5 },
    { skill: 'Cloud Computing', demand: 180, growth: 25 }
  ];

  const realTimeStats = {
    totalStudents: 52847,
    activeInternships: 4836,
    todayApplications: 1247,
    successfulMatches: 3928,
    averageMatchScore: 87.3,
    systemUptime: 99.8
  };

  const stateWiseData = [
    { state: 'Uttar Pradesh', students: 8500, internships: 650, completion: 78 },
    { state: 'Maharashtra', students: 7200, internships: 580, completion: 85 },
    { state: 'Tamil Nadu', students: 6100, internships: 520, completion: 82 },
    { state: 'Karnataka', students: 5800, internships: 480, completion: 88 },
    { state: 'West Bengal', students: 4900, internships: 420, completion: 75 },
    { state: 'Gujarat', students: 4200, internships: 380, completion: 80 },
    { state: 'Rajasthan', students: 3800, internships: 340, completion: 77 },
    { state: 'Telangana', students: 3500, internships: 320, completion: 86 }
  ];

  const toggleLiveUpdates = () => {
    setIsLive(!isLive);
  };

  const refreshData = () => {
    setLastUpdated(new Date());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl text-blue-900 mb-2">
              {userType === 'admin' ? 'Admin Dashboard' : 'Live Analytics Dashboard'}
            </h1>
            <p className="text-gray-600">Real-time insights into YuvaSetu platform performance</p>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1h">Last Hour</SelectItem>
                <SelectItem value="24h">Last 24 Hours</SelectItem>
                <SelectItem value="7d">Last 7 Days</SelectItem>
                <SelectItem value="30d">Last 30 Days</SelectItem>
              </SelectContent>
            </Select>
            
            <Button
              onClick={toggleLiveUpdates}
              variant={isLive ? "default" : "outline"}
              size="sm"
              className="flex items-center gap-2"
            >
              <Activity className={`w-4 h-4 ${isLive ? 'animate-pulse' : ''}`} />
              {isLive ? 'Live' : 'Paused'}
            </Button>
            
            <Button onClick={refreshData} variant="outline" size="sm">
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                <span className="text-sm font-medium">
                  {isLive ? 'Live Updates Active' : 'Updates Paused'}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200">
              System Uptime: {realTimeStats.systemUptime}%
            </Badge>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-4 text-center">
              <Users className="w-6 h-6 text-blue-700 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-700">{realTimeStats.totalStudents.toLocaleString()}</div>
              <div className="text-xs text-gray-600">Total Students</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-4 text-center">
              <Activity className="w-6 h-6 text-green-700 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-700">{realTimeStats.activeInternships.toLocaleString()}</div>
              <div className="text-xs text-gray-600">Active Internships</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-6 h-6 text-orange-700 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-700">{realTimeStats.todayApplications.toLocaleString()}</div>
              <div className="text-xs text-gray-600">Today's Applications</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-6 h-6 text-purple-700 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-700">{realTimeStats.successfulMatches.toLocaleString()}</div>
              <div className="text-xs text-gray-600">Successful Matches</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-4 text-center">
              <Eye className="w-6 h-6 text-indigo-700 mx-auto mb-2" />
              <div className="text-2xl font-bold text-indigo-700">{realTimeStats.averageMatchScore}%</div>
              <div className="text-xs text-gray-600">Avg Match Score</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 text-red-700 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-700">{realTimeStats.systemUptime}%</div>
              <div className="text-xs text-gray-600">System Uptime</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Allocation Trends */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-700" />
                Allocation Trends (Last 7 Days)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={allocationTrendsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tickFormatter={(value) => new Date(value).getDate().toString()} />
                  <YAxis />
                  <Tooltip
                    labelFormatter={(value) => new Date(value).toLocaleDateString()}
                    formatter={(value, name) => [value, name === 'applications' ? 'Applications' : name === 'allocations' ? 'Allocations' : 'Pending']}
                  />
                  <Area type="monotone" dataKey="applications" stackId="1" stroke="#1E3A8A" fill="#1E3A8A" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="allocations" stackId="1" stroke="#059669" fill="#059669" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="pending" stackId="1" stroke="#EA580C" fill="#EA580C" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Department Distribution */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-700" />
                Internships by Department
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={departmentDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {departmentDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* State-wise Seat Availability */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-700" />
              Real-time Seat Availability by State
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={seatAvailabilityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="state" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="available" fill="#059669" name="Available Seats" />
                <Bar dataKey="total" fill="#E5E7EB" name="Total Seats" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skill Demand Analysis */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-700" />
                Top Skills in Demand
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillDemandData.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{skill.skill}</span>
                        <span className="text-sm text-gray-600">{skill.demand} positions</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(skill.demand / 500) * 100}%` }}
                        />
                      </div>
                    </div>
                    <Badge className="ml-3 bg-green-100 text-green-800 border-green-200">
                      +{skill.growth}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Geographic Distribution */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-700" />
                State-wise Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stateWiseData.slice(0, 6).map((state, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">{state.state}</span>
                        <span className="text-sm text-gray-600">{state.completion}% completion</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        {state.students.toLocaleString()} students • {state.internships} internships
                      </div>
                    </div>
                    <div className="ml-3">
                      <div className={`w-3 h-3 rounded-full ${
                        state.completion >= 85 ? 'bg-green-500' :
                        state.completion >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LiveDashboardPage;