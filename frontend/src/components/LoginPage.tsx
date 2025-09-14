import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import Logo from './Logo';

interface LoginPageProps {
  onLogin: (userType: 'student' | 'admin', name?: string, email?: string) => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOTP = () => {
    if (email) {
      setOtpSent(true);
    }
  };

  const handleVerifyOTP = (userType: 'student' | 'admin') => {
    if (otp) {
      // Extract name from email (simple demo approach)
      const name = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      onLogin(userType, name, email);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center p-4">
      {/* Logo Header */}
      <div className="mb-8 flex flex-col items-center">
        <Logo className="mb-4" />
        <h2 className="text-xl text-gray-700 text-center max-w-md">
          Welcome to YuvaSetu – Bridging Youth with Opportunities
        </h2>
        <p className="text-sm text-gray-500 mt-2 text-center">
          Connecting students with government internship programs through AI-powered matching
        </p>
      </div>

      {/* Login Card */}
      <Card className="w-full max-w-md shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-lg text-blue-900">Sign In to Continue</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100">
              <TabsTrigger value="student" className="text-sm">Student Login</TabsTrigger>
              <TabsTrigger value="admin" className="text-sm">Admin Login</TabsTrigger>
            </TabsList>
            
            <TabsContent value="student" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="student-email">Email Address</Label>
                <Input
                  id="student-email"
                  type="email"
                  placeholder="student@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg"
                />
              </div>
              
              {otpSent && (
                <div className="space-y-2">
                  <Label htmlFor="student-otp">Enter OTP</Label>
                  <Input
                    id="student-otp"
                    type="text"
                    placeholder="123456"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                    className="rounded-lg"
                  />
                </div>
              )}
              
              {!otpSent ? (
                <Button onClick={handleSendOTP} className="w-full rounded-lg bg-blue-700 hover:bg-blue-800">
                  Send OTP
                </Button>
              ) : (
                <Button onClick={() => handleVerifyOTP('student')} className="w-full rounded-lg bg-green-600 hover:bg-green-700">
                  Verify & Sign In
                </Button>
              )}
            </TabsContent>
            
            <TabsContent value="admin" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-email">Official Email</Label>
                <Input
                  id="admin-email"
                  type="email"
                  placeholder="admin@gov.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg"
                />
              </div>
              
              {otpSent && (
                <div className="space-y-2">
                  <Label htmlFor="admin-otp">Enter OTP</Label>
                  <Input
                    id="admin-otp"
                    type="text"
                    placeholder="123456"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                    className="rounded-lg"
                  />
                </div>
              )}
              
              {!otpSent ? (
                <Button onClick={handleSendOTP} className="w-full rounded-lg bg-blue-700 hover:bg-blue-800">
                  Send OTP
                </Button>
              ) : (
                <Button onClick={() => handleVerifyOTP('admin')} className="w-full rounded-lg bg-green-600 hover:bg-green-700">
                  Verify & Sign In
                </Button>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <p className="text-xs text-gray-500 mt-6 text-center max-w-md">
        Secure authentication powered by government-grade security protocols
      </p>
    </div>
  );
};

export default LoginPage;