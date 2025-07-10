import React from 'react';
import { ArrowRight, ChevronRight, Check, BookOpen, Shield, Calendar, CheckCircle, Star, TrendingUp } from 'lucide-react';

const Hero = () => {
  // Stats data
  const stats = [
    { number: '30+', label: 'Years Experience', icon: Calendar, color: 'text-[#2D336B]' },
    { number: '1,500+', label: 'Cases Resolved', icon: CheckCircle, color: 'text-[#4C6EF5]' },
    { number: '95%', label: 'Client Satisfaction', icon: Star, color: 'text-[#A9B5DF]' },
    { number: '$50M+', label: 'Assets Protected', icon: TrendingUp, color: 'text-[#7886C7]' }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#1a1f4d] to-[#2D336B]">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-10"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-[#ffffff05] rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-[#ffffff03] rounded-full"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 grid grid-cols-6 gap-8 opacity-10">
          {[...Array(18)].map((_, i) => (
            <div key={i} className="h-32 border border-white/10 rounded-lg"></div>
          ))}
        </div>
      </div>
      
      {/* Rest of the component remains unchanged */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-gradient-to-r from-[#a8b1ff] to-[#7886C7] text-white px-4 py-2 rounded-full mb-6 transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <Shield className="w-5 h-5 mr-2" />
              <span className="font-bold tracking-wide">Trusted Family Law Experts</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Protecting Your Family's <span className="bg-gradient-to-r from-[#a8b1ff] to-[#4C6EF5] text-transparent bg-clip-text">Future</span> with Compassion & Expertise
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Gailor Hunt Family Law provides exceptional legal representation in divorce, child custody, and family law matters. Our dedicated Raleigh attorneys fight for your rights while guiding you through challenging times.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-[#4C6EF5] to-[#7886C7] text-white px-8 py-4 rounded-lg hover:from-[#3a5ae4] hover:to-[#6778b8] transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl font-bold text-lg transform hover:-translate-y-1 duration-300">
                <Calendar className="w-5 h-5" />
                <span>Schedule Free Consultation</span>
              </button>
              
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all font-bold flex items-center justify-center space-x-2 text-lg transform hover:-translate-y-1 duration-300">
                <BookOpen className="w-5 h-5" />
                <span>View Practice Areas</span>
              </button>
            </div>
            
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-r from-[#4C6EF5] to-[#7886C7] p-1 rounded-full mr-3">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-200 font-medium">100+ Cases Successfully Resolved</span>
              </div>
              
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-r from-[#4C6EF5] to-[#7886C7] p-1 rounded-full mr-3">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-200 font-medium">Award-Winning Legal Team</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Card */}
          <div className="bg-gradient-to-br from-white to-[#f0f4ff] rounded-2xl shadow-2xl p-1 max-w-lg mx-auto lg:mx-0 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
            <div className="relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2D336B] rounded-bl-full z-0"></div>
              <div className="relative z-10 p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-[#4C6EF5] to-[#7886C7] p-3 rounded-lg mr-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D336B]">Free Case Evaluation</h3>
                </div>
                <p className="mb-6 text-gray-700">Get personalized advice from our experienced attorneys. Complete the form and we'll contact you within 24 hours.</p>
                
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full px-4 py-3 rounded-lg bg-white text-[#2D336B] placeholder-[#2D336B]/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4C6EF5] shadow-sm"
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full px-4 py-3 rounded-lg bg-white text-[#2D336B] placeholder-[#2D336B]/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4C6EF5] shadow-sm"
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full px-4 py-3 rounded-lg bg-white text-[#2D336B] placeholder-[#2D336B]/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4C6EF5] shadow-sm"
                    />
                  </div>
                  
                  <div>
                    <select className="w-full px-4 py-3 rounded-lg bg-white text-[#2D336B] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4C6EF5] shadow-sm appearance-none">
                      <option value="" disabled selected>Select Practice Area</option>
                      <option value="divorce">Divorce & Separation</option>
                      <option value="custody">Child Custody</option>
                      <option value="support">Spousal Support</option>
                      <option value="property">Property Division</option>
                      <option value="domestic">Domestic Violence</option>
                    </select>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#4C6EF5] to-[#7886C7] text-white px-6 py-3 rounded-lg font-bold hover:from-[#3a5ae4] hover:to-[#6778b8] transition-colors mt-2 flex items-center justify-center shadow-lg transform hover:-translate-y-1 duration-300"
                  >
                    Submit Request
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-[#f0f4ff] to-[#e6ebff] border-t border-gray-200">
              <h4 className="font-bold text-[#2D336B] mb-3 flex items-center">
                <div className="bg-gradient-to-r from-[#4C6EF5] to-[#7886C7] p-1 rounded-full mr-2">
                  <Check className="w-4 h-4 text-white" />
                </div>
                What to Expect:
              </h4>
              <ul className="space-y-2 pl-7">
                <li className="text-gray-700 flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#4C6EF5] rounded-full mr-2"></div>
                  Confidential consultation with an attorney
                </li>
                <li className="text-gray-700 flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#4C6EF5] rounded-full mr-2"></div>
                  Honest assessment of your legal options
                </li>
                <li className="text-gray-700 flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#4C6EF5] rounded-full mr-2"></div>
                  No obligation to hire our firm
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all transform hover:-translate-y-2 duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 mx-auto">
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
                  <p className="text-gray-200 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;