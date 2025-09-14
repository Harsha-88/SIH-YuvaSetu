import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Star, Send, CheckCircle, MessageSquare, ThumbsUp, ThumbsDown, TrendingUp } from 'lucide-react';

interface FeedbackPageProps {
  onNavigate: (view: string) => void;
}

const FeedbackPage = ({ onNavigate }: FeedbackPageProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [platformRating, setPlatformRating] = useState({
    easeOfUse: 0,
    matchAccuracy: 0,
    userInterface: 0,
    overallSatisfaction: 0
  });

  const categories = [
    'Platform Usability',
    'Match Quality',
    'Application Process',
    'Technical Issues',
    'Feature Request',
    'General Feedback'
  ];

  const recentFeedback = [
    {
      id: 1,
      user: 'Anonymous User',
      rating: 5,
      comment: 'The AI matching is incredibly accurate! Found my dream internship in Digital India.',
      category: 'Match Quality',
      date: '2 days ago',
      helpful: 12
    },
    {
      id: 2,
      user: 'Anonymous User',
      rating: 4,
      comment: 'Great platform overall. Would love to see more filter options for location.',
      category: 'Feature Request',
      date: '1 week ago',
      helpful: 8
    },
    {
      id: 3,
      user: 'Anonymous User',
      rating: 5,
      comment: 'The multilingual support is fantastic. Interface in Hindi works perfectly.',
      category: 'Platform Usability',
      date: '2 weeks ago',
      helpful: 15
    }
  ];

  const platformStats = {
    averageRating: 4.7,
    totalReviews: 2847,
    ratingDistribution: [
      { stars: 5, count: 1892, percentage: 66 },
      { stars: 4, count: 625, percentage: 22 },
      { stars: 3, count: 228, percentage: 8 },
      { stars: 2, count: 71, percentage: 3 },
      { stars: 1, count: 31, percentage: 1 }
    ]
  };

  const handleStarClick = (starValue: number) => {
    setRating(starValue);
  };

  const handlePlatformRating = (aspect: string, value: number) => {
    setPlatformRating(prev => ({ ...prev, [aspect]: value }));
  };

  const handleSubmit = () => {
    if (rating > 0 && feedback.trim() && category) {
      // TODO: Submit feedback to API
      console.log('Submitting feedback:', {
        rating,
        feedback,
        category,
        platformRating
      });
      setSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setRating(0);
        setFeedback('');
        setCategory('');
        setPlatformRating({
          easeOfUse: 0,
          matchAccuracy: 0,
          userInterface: 0,
          overallSatisfaction: 0
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  const renderStars = (currentRating: number, onStarClick?: (value: number) => void, onHover?: (value: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-6 h-6 cursor-pointer transition-colors ${
              star <= currentRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
            onClick={() => onStarClick && onStarClick(star)}
            onMouseEnter={() => onHover && onHover(star)}
            onMouseLeave={() => onHover && onHover(0)}
          />
        ))}
      </div>
    );
  };

  const renderPlatformStars = (aspect: string, currentRating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 cursor-pointer transition-colors ${
              star <= currentRating ? 'fill-blue-400 text-blue-400' : 'text-gray-300'
            }`}
            onClick={() => handlePlatformRating(aspect, star)}
          />
        ))}
      </div>
    );
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-8">
        <Card className="max-w-md w-full bg-white/90 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-xl text-green-900 mb-2">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your feedback has been submitted successfully. We appreciate your input to help us improve YuvaSetu.
            </p>
            <Button
              onClick={() => onNavigate('recommendations')}
              className="bg-blue-700 hover:bg-blue-800"
            >
              Back to Recommendations
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl text-blue-900 mb-2">Feedback & Ratings</h1>
          <p className="text-gray-600">Help us improve YuvaSetu by sharing your experience</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Feedback Form */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-700" />
                  Submit Your Feedback
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Overall Rating */}
                <div className="space-y-3">
                  <Label>Overall Experience Rating</Label>
                  <div className="flex items-center gap-3">
                    {renderStars(
                      hoverRating || rating,
                      handleStarClick,
                      setHoverRating
                    )}
                    <span className="text-sm text-gray-600">
                      {rating > 0 && (
                        <span className="font-medium">
                          {rating === 1 && 'Poor'}
                          {rating === 2 && 'Fair'}
                          {rating === 3 && 'Good'}
                          {rating === 4 && 'Very Good'}
                          {rating === 5 && 'Excellent'}
                        </span>
                      )}
                    </span>
                  </div>
                </div>

                {/* Category Selection */}
                <div className="space-y-2">
                  <Label>Feedback Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select feedback category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Detailed Feedback */}
                <div className="space-y-2">
                  <Label>Your Feedback</Label>
                  <Textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Please share your thoughts, suggestions, or any issues you encountered..."
                    className="rounded-lg min-h-[100px]"
                    maxLength={500}
                  />
                  <p className="text-xs text-gray-500">{feedback.length}/500 characters</p>
                </div>

                {/* Platform Aspects Rating */}
                <div className="space-y-4">
                  <Label>Rate Specific Aspects</Label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Ease of Use</span>
                      {renderPlatformStars('easeOfUse', platformRating.easeOfUse)}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Match Accuracy</span>
                      {renderPlatformStars('matchAccuracy', platformRating.matchAccuracy)}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">User Interface</span>
                      {renderPlatformStars('userInterface', platformRating.userInterface)}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Overall Satisfaction</span>
                      {renderPlatformStars('overallSatisfaction', platformRating.overallSatisfaction)}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  disabled={!rating || !feedback.trim() || !category}
                  className="w-full bg-blue-700 hover:bg-blue-800 flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Feedback
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Platform Statistics & Recent Feedback */}
          <div className="space-y-6">
            {/* Platform Statistics */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-700" />
                  Platform Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-700 mb-2">
                    {platformStats.averageRating}
                  </div>
                  <div className="flex justify-center mb-2">
                    {renderStars(Math.round(platformStats.averageRating))}
                  </div>
                  <p className="text-gray-600">Based on {platformStats.totalReviews.toLocaleString()} reviews</p>
                </div>

                <Separator />

                <div className="space-y-3">
                  {platformStats.ratingDistribution.map((item) => (
                    <div key={item.stars} className="flex items-center gap-3">
                      <span className="text-sm w-6">{item.stars}★</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-12">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Feedback */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recent User Feedback</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentFeedback.map((item) => (
                  <div key={item.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {renderStars(item.rating)}
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">{item.comment}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">by {item.user}</span>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          <ThumbsUp className="w-3 h-3 mr-1" />
                          {item.helpful}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;