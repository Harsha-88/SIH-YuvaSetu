import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { MessageCircle, Send, Bot, User, Globe, Mic, MicOff } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  language?: string;
}

const ChatbotPanel = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m YuvaSetu AI Assistant. I can help you find internships, answer questions about the PM Internship Scheme, and guide you through the application process. How can I assist you today?',
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const languages = [
    { value: 'english', label: 'English', flag: '🇺🇸' },
    { value: 'hindi', label: 'हिन्दी', flag: '🇮🇳' },
    { value: 'bengali', label: 'বাংলা', flag: '🇮🇳' },
    { value: 'tamil', label: 'தமிழ்', flag: '🇮🇳' },
    { value: 'telugu', label: 'తెలుగు', flag: '🇮🇳' },
    { value: 'marathi', label: 'मराठी', flag: '🇮🇳' },
  ];

  const sampleQuestions = [
    'What internships are available in Delhi?',
    'How do I apply for a tech internship?',
    'What are the eligibility criteria?',
    'Show me AI/ML opportunities',
  ];

  const botResponses = {
    'delhi': 'I found 15 government internships in Delhi including Digital India Initiative, Smart Cities Mission, and E-Governance projects. Would you like me to show you the ones that match your profile?',
    'tech': 'For tech internships, you can apply through the YuvaSetu platform. Popular tech roles include Frontend Development, Data Analytics, Mobile App Development, and AI/ML projects with various government ministries.',
    'eligibility': 'Eligibility criteria include: (1) Currently enrolled in college/university, (2) Indian citizen with valid Aadhaar, (3) Age 18-25 years, (4) Minimum 60% academic score. Some programs may have additional requirements.',
    'ai': 'Great choice! We have AI/ML internships with DRDO, C-DAC, and various Smart Cities projects. These typically require Python, Machine Learning, and Data Science skills. Your profile shows 95% match for AI roles!',
    'default': 'I understand you\'re looking for information about internships. Let me connect you with relevant opportunities based on your profile. You can also try asking about specific locations, skills, or types of internships.'
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    if (message.includes('delhi')) return botResponses.delhi;
    if (message.includes('tech') || message.includes('technology')) return botResponses.tech;
    if (message.includes('eligib') || message.includes('criteria')) return botResponses.eligibility;
    if (message.includes('ai') || message.includes('ml') || message.includes('machine learning')) return botResponses.ai;
    return botResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
      language: selectedLanguage,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSampleQuestion = (question: string) => {
    setInputText(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
    // TODO: Implement Web Speech API for voice input
    console.log('Voice input feature - TODO: Implement Web Speech API');
  };

  return (
    <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-xl border-0">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <CardTitle className="text-lg">YuvaSetu AI</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-green-100 text-green-800 border-green-200">
              <Globe className="w-3 h-3 mr-1" />
              Multilingual
            </Badge>
          </div>
        </div>
        
        {/* Language Selector */}
        <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.value} value={lang.value}>
                <span className="flex items-center gap-2">
                  <span>{lang.flag}</span>
                  {lang.label}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="p-0">
        {/* Chat Messages */}
        <ScrollArea className="h-64 px-4">
          <div className="space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-2 ${
                  message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'user' 
                    ? 'bg-blue-700 text-white' 
                    : 'bg-gray-200 text-gray-700'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="w-3 h-3" />
                  ) : (
                    <Bot className="w-3 h-3" />
                  )}
                </div>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  message.sender === 'user'
                    ? 'bg-blue-700 text-white rounded-br-sm'
                    : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                  <Bot className="w-3 h-3" />
                </div>
                <div className="bg-gray-100 p-3 rounded-lg rounded-bl-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Sample Questions */}
        <div className="px-4 py-3 border-t border-gray-200">
          <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
          <div className="flex flex-wrap gap-1">
            {sampleQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleSampleQuestion(question)}
                className="text-xs h-7 px-2 border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                {question}
              </Button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex gap-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Ask about internships in ${languages.find(l => l.value === selectedLanguage)?.label}...`}
              className="flex-1 rounded-lg"
            />
            <Button
              onClick={toggleVoiceInput}
              variant="outline"
              size="sm"
              className={`p-2 rounded-lg ${isListening ? 'bg-red-100 border-red-300' : 'border-gray-300'}`}
            >
              {isListening ? <MicOff className="w-4 h-4 text-red-600" /> : <Mic className="w-4 h-4" />}
            </Button>
            <Button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="p-2 rounded-lg bg-blue-700 hover:bg-blue-800"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatbotPanel;