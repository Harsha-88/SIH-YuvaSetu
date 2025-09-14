import React from 'react';
import { Separator } from './ui/separator';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-medium mb-4">YuvaSetu</h3>
            <p className="text-blue-100 mb-4 leading-relaxed">
              Smart Allocation Engine for PM Internship Scheme, connecting India's youth 
              with government internship opportunities through intelligent matching and seamless allocation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors">About YuvaSetu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Internship Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Student Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="font-medium mb-4">Legal & Compliance</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Protection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
              <li><a href="#" className="hover:text-white transition-colors">RTI Guidelines</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-blue-800" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <div className="text-blue-100 text-sm text-center">
            <p>© 2024 YuvaSetu - PM Internship Scheme | Government of India</p>
          </div>
        </div>

        {/* Government Disclaimer */}
        <div className="mt-6 p-4 bg-blue-800 rounded-lg">
          <p className="text-xs text-blue-100 text-center leading-relaxed">
            <strong>Government Disclaimer:</strong> This platform is designed to facilitate internship allocation 
            under the PM Internship Scheme. All data is processed in compliance with government privacy standards. 
            For official queries, contact the Ministry of Skill Development and Entrepreneurship.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;