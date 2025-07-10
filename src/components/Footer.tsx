import React from 'react';
import { Phone, MapPin, Mail, ArrowRight, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0d1530] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1a2a5f] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2a3d8c] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#1a2a5f] rounded-full blur-2xl opacity-20"></div>
      </div>
      
      {/* Top Pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#7886C7] via-[#2D336B] to-[#7886C7]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              {/* Logo Container */}
              <div className="bg-[#1a2a5f] p-3 rounded-xl mr-4 border border-[#2a3d8c]">
                <div className="bg-white p-2 rounded-lg">
                  {/* Actual logo image - replace with your logo */}
                  <div className="flex items-center justify-center w-12 h-12">
                    <div className="text-[#2D336B] font-bold text-xl tracking-tighter">
                        {/* Logo */}
          <img
  src="/logo.png"
  alt="GH Law Logo"
  className="h-12 w-auto"
/>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center">
                  {/* Actual logo text - replace with your logo */}
                  <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#7886C7] via-white to-[#7886C7] bg-clip-text text-transparent">
                    GAILOR HUNT
                  </h2>
                </div>
                <p className="text-[#A9B5DF] mt-1 text-sm font-medium tracking-wide">
                  Divorce Lawyers
                </p>
              </div>
            </div>
            
            <p className="text-[#A9B5DF] leading-relaxed max-w-lg text-sm">
              One of North Carolina's most accomplished divorce law firms, providing expert legal counsel with compassion and discretion.
            </p>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-3 rounded-l-lg bg-[#1a2a5f] text-white focus:outline-none w-full placeholder-[#7886C7] border border-[#2a3d8c]"
                />
                <button className="bg-gradient-to-r from-[#7886C7] to-[#2D336B] hover:from-[#2D336B] hover:to-[#7886C7] transition-all px-4 py-3 rounded-r-lg flex items-center">
                  <ArrowRight size={20} className="text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-[#7886C7] inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Blog', 'Podcast', 'Pay Your Bill', 'Careers'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center text-[#A9B5DF] hover:text-white transition-colors group">
                    <ArrowRight size={16} className="mr-2 text-[#7886C7] group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-[#7886C7] inline-block">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-[#1a2a5f] to-[#2a3d8c] p-2 rounded-lg mr-3">
                  <MapPin className="w-5 h-5 text-[#7886C7]" />
                </div>
                <div>
                  <p className="font-medium">Our Office</p>
                  <p className="text-[#A9B5DF] mt-1 text-sm">1101 Haynes St. #201<br />Raleigh, NC 27604</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-[#1a2a5f] to-[#2a3d8c] p-2 rounded-lg mr-3">
                  <Phone className="w-5 h-5 text-[#7886C7]" />
                </div>
                <div>
                  <a href="tel:919-832-8488" className="font-medium hover:text-[#7886C7] transition-colors">
                    (919) 832-8488
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-[#1a2a5f] to-[#2a3d8c] p-2 rounded-lg mr-3">
                  <Mail className="w-5 h-5 text-[#7886C7]" />
                </div>
                <div>
                  <a href="mailto:info@divorceistough.com" className="font-medium hover:text-[#7886C7] transition-colors">
                    info@divorceistough.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center mt-6 space-x-3">
                {[
                  {icon: Twitter, color: 'hover:bg-[#1DA1F2]'},
                  {icon: Facebook, color: 'hover:bg-[#4267B2]'},
                  {icon: Instagram, color: 'hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#C13584] hover:to-[#F77737]'},
                  {icon: Linkedin, color: 'hover:bg-[#0077B5]'}
                ].map((social, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className={`bg-[#1a2a5f] p-2.5 rounded-lg transition-all duration-300 ${social.color} hover:text-white border border-[#2a3d8c]`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links and Copyright */}
        <div className="border-t border-[#1a2a5f] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-6">
              {['Disclaimer', 'Privacy Policy', 'Terms of Service', 'Accessibility'].map((item, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-[#7886C7] hover:text-white transition-colors text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <p className="text-[#7886C7] text-sm text-center">
              © 2025 Gailor Hunt Davis Taylor & Gibbs, PLLC. All rights reserved.
            </p>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-[#7886C7] text-xs max-w-3xl mx-auto">
              Contacting Gailor Hunt does not establish an attorney-client relationship and sensitive information 
              should not be sent or shared until an attorney-client relationship has been established.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;