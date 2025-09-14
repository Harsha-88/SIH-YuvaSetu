import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import Logo from './Logo';
import { ArrowLeft, Eye, EyeOff, CheckCircle } from 'lucide-react';

interface SignupScreenProps {
  onSignupComplete: (name?: string, email?: string) => void;
  onBackToWelcome: () => void;
}

const SignupScreen = ({ onSignupComplete, onBackToWelcome }: SignupScreenProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    state: '',
    university: '',
    acceptTerms: false,
    acceptPrivacy: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Phone number must be 10 digits';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.state) newErrors.state = 'State selection is required';
    if (!formData.university.trim()) newErrors.university = 'University/College name is required';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms and conditions';
    if (!formData.acceptPrivacy) newErrors.acceptPrivacy = 'You must accept the privacy policy';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Call signup API
      console.log('Signup data:', formData);
      const fullName = `${formData.firstName} ${formData.lastName}`;
      onSignupComplete(fullName, formData.email);
    }
  };

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh',
    'Lakshadweep', 'Puducherry'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col">
      {/* Header */}
      <div className="p-4">
        <Button
          onClick={onBackToWelcome}
          variant="ghost"
          className="flex items-center gap-2 text-blue-700 hover:text-blue-800 hover:bg-blue-50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Welcome
        </Button>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <Logo className="mb-4 mx-auto" />
            <h1 className="text-2xl text-blue-900 mb-2">Create Your Account</h1>
            <p className="text-gray-600">
              Join thousands of students in finding the perfect internship opportunity
            </p>
          </div>

          {/* Signup Form */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900 text-center">Student Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      className={`rounded-lg ${errors.firstName ? 'border-red-500' : ''}`}
                    />
                    {errors.firstName && <p className="text-xs text-red-600">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      className={`rounded-lg ${errors.lastName ? 'border-red-500' : ''}`}
                    />
                    {errors.lastName && <p className="text-xs text-red-600">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="student@university.edu"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className={`rounded-lg ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className={`rounded-lg ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
                </div>

                {/* Password Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password *</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => updateFormData('password', e.target.value)}
                        className={`rounded-lg pr-10 ${errors.password ? 'border-red-500' : ''}`}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                    {errors.password && <p className="text-xs text-red-600">{errors.password}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                        className={`rounded-lg pr-10 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                    {errors.confirmPassword && <p className="text-xs text-red-600">{errors.confirmPassword}</p>}
                  </div>
                </div>

                {/* Location and Education */}
                <div className="space-y-2">
                  <Label htmlFor="state">State/UT *</Label>
                  <Select onValueChange={(value) => updateFormData('state', value)}>
                    <SelectTrigger className={`rounded-lg ${errors.state ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {indianStates.map((state) => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.state && <p className="text-xs text-red-600">{errors.state}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="university">University/College *</Label>
                  <Input
                    id="university"
                    type="text"
                    placeholder="Enter your university or college name"
                    value={formData.university}
                    onChange={(e) => updateFormData('university', e.target.value)}
                    className={`rounded-lg ${errors.university ? 'border-red-500' : ''}`}
                  />
                  {errors.university && <p className="text-xs text-red-600">{errors.university}</p>}
                </div>

                {/* Aadhaar Integration Placeholder */}
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 text-xs font-bold">🆔</span>
                    </div>
                    <h4 className="font-medium text-blue-900">Aadhaar Integration</h4>
                    <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 text-xs">
                      Coming Soon
                    </Badge>
                  </div>
                  <p className="text-sm text-blue-700">
                    Future integration with Aadhaar for seamless identity verification and auto-filling of personal details.
                    This will ensure secure, government-verified student registration.
                  </p>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="acceptTerms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => updateFormData('acceptTerms', checked as boolean)}
                      className={errors.acceptTerms ? 'border-red-500' : ''}
                    />
                    <div className="text-sm">
                      <Label htmlFor="acceptTerms" className="cursor-pointer">
                        I accept the <span className="text-blue-700 underline">Terms and Conditions</span> of YuvaSetu platform *
                      </Label>
                      {errors.acceptTerms && <p className="text-xs text-red-600 mt-1">{errors.acceptTerms}</p>}
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="acceptPrivacy"
                      checked={formData.acceptPrivacy}
                      onCheckedChange={(checked) => updateFormData('acceptPrivacy', checked as boolean)}
                      className={errors.acceptPrivacy ? 'border-red-500' : ''}
                    />
                    <div className="text-sm">
                      <Label htmlFor="acceptPrivacy" className="cursor-pointer">
                        I accept the <span className="text-blue-700 underline">Privacy Policy</span> and consent to data processing *
                      </Label>
                      {errors.acceptPrivacy && <p className="text-xs text-red-600 mt-1">{errors.acceptPrivacy}</p>}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full rounded-lg bg-blue-700 hover:bg-blue-800 flex items-center gap-2 py-3"
                >
                  <CheckCircle className="w-5 h-5" />
                  Create Account
                </Button>
              </form>
            </CardContent>
          </Card>

          <p className="text-xs text-gray-500 text-center mt-4">
            By creating an account, you agree to participate in the government's PM Internship Scheme program
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;