import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Symbol - Bridge with AI elements */}
      <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl shadow-lg">
        {/* Bridge structure */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="relative z-10">
          {/* Bridge base */}
          <path d="M4 20h24c0-4-4-8-12-8s-12 4-12 8z" fill="white" fillOpacity="0.9"/>
          {/* Bridge pillars */}
          <rect x="7" y="16" width="2" height="8" fill="white" fillOpacity="0.7"/>
          <rect x="23" y="16" width="2" height="8" fill="white" fillOpacity="0.7"/>
          {/* AI nodes */}
          <circle cx="10" cy="18" r="1.5" fill="white"/>
          <circle cx="16" cy="16" r="1.5" fill="white"/>
          <circle cx="22" cy="18" r="1.5" fill="white"/>
          {/* Connection lines */}
          <path d="M10 18l6-2m0 0l6 2" stroke="white" strokeWidth="0.5" strokeOpacity="0.6"/>
        </svg>
        {/* Graduation cap overlay */}
        <div className="absolute top-1 right-1 w-3 h-3 bg-orange-400 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-blue-900 tracking-tight">YuvaSetu</h1>
        <p className="text-xs text-gray-600 -mt-1">AI-Powered Internship Platform</p>
      </div>
    </div>
  );
};

export default Logo;