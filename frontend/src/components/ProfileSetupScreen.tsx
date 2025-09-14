import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import Logo from './Logo';
import { User, GraduationCap, MapPin, Briefcase, Plus, X, Sparkles } from 'lucide-react';

interface ProfileSetupScreenProps {
  onProfileComplete: () => void;
}

const ProfileSetupScreen = ({ onProfileComplete }: ProfileSetupScreenProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [profileData, setProfileData] = useState({
    // Step 1: Education
    degree: '',
    major: '',
    year: '',
    cgpa: '',
    graduationYear: '',
    
    // Step 2: Skills & Interests
    skills: [] as string[],
    interests: [] as string[],
    newSkill: '',
    newInterest: '',
    
    // Step 3: Preferences
    preferredLocation: [] as string[],
    internshipType: '',
    duration: '',
    remote: '',
    bio: ''
  });

  const predefinedSkills = [
    'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'Data Science', 'Machine Learning',
    'UI/UX Design', 'Digital Marketing', 'Content Writing', 'Project Management', 'SQL',
    'Android Development', 'iOS Development', 'Cloud Computing', 'Cybersecurity'
  ];

  const predefinedInterests = [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Environment', 'Social Impact',
    'Government Policy', 'Rural Development', 'Urban Planning', 'Renewable Energy',
    'E-governance', 'Digital India', 'Startup Ecosystem', 'Research & Development'
  ];

  const indianCities = [
    'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad',
    'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Bhopal', 'Visakhapatnam', 'Patna',
    'Vadodara', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivali'
  ];

  const updateProfileData = (field: string, value: any) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const addSkill = (skill: string) => {
    if (skill && !profileData.skills.includes(skill)) {
      updateProfileData('skills', [...profileData.skills, skill]);
      updateProfileData('newSkill', '');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    updateProfileData('skills', profileData.skills.filter(skill => skill !== skillToRemove));
  };

  const addInterest = (interest: string) => {
    if (interest && !profileData.interests.includes(interest)) {
      updateProfileData('interests', [...profileData.interests, interest]);
      updateProfileData('newInterest', '');
    }
  };

  const removeInterest = (interestToRemove: string) => {
    updateProfileData('interests', profileData.interests.filter(interest => interest !== interestToRemove));
  };

  const addLocation = (location: string) => {
    if (location && !profileData.preferredLocation.includes(location)) {
      updateProfileData('preferredLocation', [...profileData.preferredLocation, location]);
    }
  };

  const removeLocation = (locationToRemove: string) => {
    updateProfileData('preferredLocation', profileData.preferredLocation.filter(loc => loc !== locationToRemove));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete profile setup
      console.log('Profile data:', profileData);
      onProfileComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <GraduationCap className="w-12 h-12 text-blue-700 mx-auto mb-4" />
        <h2 className="text-xl text-blue-900 mb-2">Education Details</h2>
        <p className="text-gray-600">Tell us about your academic background</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="degree">Degree Level *</Label>
          <Select onValueChange={(value) => updateProfileData('degree', value)}>
            <SelectTrigger className="rounded-lg">
              <SelectValue placeholder="Select your degree" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="diploma">Diploma</SelectItem>
              <SelectItem value="bachelor">Bachelor's</SelectItem>
              <SelectItem value="master">Master's</SelectItem>
              <SelectItem value="phd">PhD</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="major">Field of Study *</Label>
          <Input
            id="major"
            placeholder="e.g., Computer Science, Mechanical Engineering"
            value={profileData.major}
            onChange={(e) => updateProfileData('major', e.target.value)}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="year">Current Year *</Label>
          <Select onValueChange={(value) => updateProfileData('year', value)}>
            <SelectTrigger className="rounded-lg">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1st Year</SelectItem>
              <SelectItem value="2">2nd Year</SelectItem>
              <SelectItem value="3">3rd Year</SelectItem>
              <SelectItem value="4">4th Year</SelectItem>
              <SelectItem value="5">5th Year</SelectItem>
              <SelectItem value="graduate">Graduate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cgpa">CGPA/Percentage</Label>
          <Input
            id="cgpa"
            placeholder="e.g., 8.5 or 85%"
            value={profileData.cgpa}
            onChange={(e) => updateProfileData('cgpa', e.target.value)}
            className="rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="graduationYear">Expected Graduation *</Label>
          <Select onValueChange={(value) => updateProfileData('graduationYear', value)}>
            <SelectTrigger className="rounded-lg">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2026">2026</SelectItem>
              <SelectItem value="2027">2027</SelectItem>
              <SelectItem value="2028">2028</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Sparkles className="w-12 h-12 text-blue-700 mx-auto mb-4" />
        <h2 className="text-xl text-blue-900 mb-2">Skills & Interests</h2>
        <p className="text-gray-600">Help us understand your strengths and passions</p>
      </div>

      {/* Skills Section */}
      <div className="space-y-4">
        <Label>Technical & Professional Skills *</Label>
        
        {/* Predefined Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {predefinedSkills.map((skill) => (
            <Badge
              key={skill}
              variant={profileData.skills.includes(skill) ? "default" : "outline"}
              className={`cursor-pointer transition-colors ${
                profileData.skills.includes(skill)
                  ? 'bg-blue-700 text-white'
                  : 'hover:bg-blue-100 border-blue-300'
              }`}
              onClick={() => profileData.skills.includes(skill) ? removeSkill(skill) : addSkill(skill)}
            >
              {skill}
              {profileData.skills.includes(skill) && <X className="w-3 h-3 ml-1" />}
            </Badge>
          ))}
        </div>

        {/* Add Custom Skill */}
        <div className="flex gap-2">
          <Input
            placeholder="Add a custom skill..."
            value={profileData.newSkill}
            onChange={(e) => updateProfileData('newSkill', e.target.value)}
            className="rounded-lg"
            onKeyPress={(e) => e.key === 'Enter' && addSkill(profileData.newSkill)}
          />
          <Button
            type="button"
            onClick={() => addSkill(profileData.newSkill)}
            className="rounded-lg bg-blue-700 hover:bg-blue-800"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Selected Skills */}
        {profileData.skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {profileData.skills.map((skill) => (
              <Badge key={skill} className="bg-blue-700 text-white">
                {skill}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 ml-1 hover:bg-blue-600"
                  onClick={() => removeSkill(skill)}
                >
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Interests Section */}
      <div className="space-y-4">
        <Label>Areas of Interest *</Label>
        
        {/* Predefined Interests */}
        <div className="flex flex-wrap gap-2 mb-4">
          {predefinedInterests.map((interest) => (
            <Badge
              key={interest}
              variant={profileData.interests.includes(interest) ? "default" : "outline"}
              className={`cursor-pointer transition-colors ${
                profileData.interests.includes(interest)
                  ? 'bg-green-600 text-white'
                  : 'hover:bg-green-100 border-green-300'
              }`}
              onClick={() => profileData.interests.includes(interest) ? removeInterest(interest) : addInterest(interest)}
            >
              {interest}
              {profileData.interests.includes(interest) && <X className="w-3 h-3 ml-1" />}
            </Badge>
          ))}
        </div>

        {/* Add Custom Interest */}
        <div className="flex gap-2">
          <Input
            placeholder="Add a custom interest..."
            value={profileData.newInterest}
            onChange={(e) => updateProfileData('newInterest', e.target.value)}
            className="rounded-lg"
            onKeyPress={(e) => e.key === 'Enter' && addInterest(profileData.newInterest)}
          />
          <Button
            type="button"
            onClick={() => addInterest(profileData.newInterest)}
            className="rounded-lg bg-green-600 hover:bg-green-700"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Selected Interests */}
        {profileData.interests.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {profileData.interests.map((interest) => (
              <Badge key={interest} className="bg-green-600 text-white">
                {interest}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 ml-1 hover:bg-green-500"
                  onClick={() => removeInterest(interest)}
                >
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Briefcase className="w-12 h-12 text-blue-700 mx-auto mb-4" />
        <h2 className="text-xl text-blue-900 mb-2">Internship Preferences</h2>
        <p className="text-gray-600">Let us know what you're looking for</p>
      </div>

      {/* Preferred Locations */}
      <div className="space-y-4">
        <Label>Preferred Locations *</Label>
        <Select onValueChange={addLocation}>
          <SelectTrigger className="rounded-lg">
            <SelectValue placeholder="Select preferred cities" />
          </SelectTrigger>
          <SelectContent>
            {indianCities.filter(city => !profileData.preferredLocation.includes(city)).map((city) => (
              <SelectItem key={city} value={city}>{city}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        {profileData.preferredLocation.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {profileData.preferredLocation.map((location) => (
              <Badge key={location} className="bg-purple-600 text-white">
                <MapPin className="w-3 h-3 mr-1" />
                {location}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 ml-1 hover:bg-purple-500"
                  onClick={() => removeLocation(location)}
                >
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Internship Preferences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="internshipType">Internship Type *</Label>
          <Select onValueChange={(value) => updateProfileData('internshipType', value)}>
            <SelectTrigger className="rounded-lg">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technical">Technical</SelectItem>
              <SelectItem value="research">Research & Development</SelectItem>
              <SelectItem value="policy">Policy & Governance</SelectItem>
              <SelectItem value="social">Social Impact</SelectItem>
              <SelectItem value="marketing">Marketing & Communications</SelectItem>
              <SelectItem value="finance">Finance & Analytics</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Preferred Duration *</Label>
          <Select onValueChange={(value) => updateProfileData('duration', value)}>
            <SelectTrigger className="rounded-lg">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-2">1-2 months</SelectItem>
              <SelectItem value="3-4">3-4 months</SelectItem>
              <SelectItem value="5-6">5-6 months</SelectItem>
              <SelectItem value="6+">6+ months</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="remote">Work Mode Preference *</Label>
        <Select onValueChange={(value) => updateProfileData('remote', value)}>
          <SelectTrigger className="rounded-lg">
            <SelectValue placeholder="Select work mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="onsite">On-site only</SelectItem>
            <SelectItem value="remote">Remote only</SelectItem>
            <SelectItem value="hybrid">Hybrid (preferred)</SelectItem>
            <SelectItem value="flexible">Flexible</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bio */}
      <div className="space-y-2">
        <Label htmlFor="bio">Brief Bio (Optional)</Label>
        <Textarea
          id="bio"
          placeholder="Tell us briefly about yourself, your goals, and what you hope to achieve through this internship..."
          value={profileData.bio}
          onChange={(e) => updateProfileData('bio', e.target.value)}
          className="rounded-lg min-h-[100px]"
          maxLength={500}
        />
        <p className="text-xs text-gray-500">{profileData.bio.length}/500 characters</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Logo className="mb-4 mx-auto" />
          <h1 className="text-2xl text-blue-900 mb-2">Complete Your Profile</h1>
          <p className="text-gray-600">Help us find the perfect internship matches for you</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    currentStep >= step
                      ? 'bg-blue-700 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 h-1 transition-colors ${
                      currentStep > step ? 'bg-blue-700' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg text-blue-900 text-center">
              Step {currentStep} of 3
            </CardTitle>
          </CardHeader>
          <CardContent>
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={handlePrevious}
                variant="outline"
                disabled={currentStep === 1}
                className="rounded-lg border-blue-700 text-blue-700 hover:bg-blue-50"
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                className="rounded-lg bg-blue-700 hover:bg-blue-800"
              >
                {currentStep === 3 ? 'Complete Profile' : 'Next'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <p className="text-xs text-gray-500 text-center mt-4">
          Your profile information helps our AI engine provide better internship recommendations
        </p>
      </div>
    </div>
  );
};

export default ProfileSetupScreen;