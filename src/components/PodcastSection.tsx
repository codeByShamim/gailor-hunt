import React from 'react';
import { Play, Headphones, ArrowRight } from 'lucide-react';

const PodcastSection = () => {
  return (
    <section className="py-20 bg-[#2D336B] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="grid grid-cols-5 gap-8">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="h-48 border border-[#A9B5DF]/20 rounded-lg"></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="lg:w-1/2 text-white">
            <div className="inline-flex items-center bg-[#FFF2F2] text-[#2D336B] px-6 py-2 rounded-full mb-8">
              <Headphones className="w-5 h-5 mr-2" />
              <span className="font-bold tracking-wider">LISTEN TO OUR PODCAST</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="block">A Year and a Day:</span>
              <span className="block text-[#FFF2F2] mt-2">Divorce Without Destruction</span>
            </h2>
            
            <p className="text-xl text-[#A9B5DF] mb-8 max-w-2xl leading-relaxed">
              Getting a divorce will change your life, but it doesn't have to destroy it. Join North Carolina Divorce Attorney Jaime Davis as she interviews experts to help you navigate this challenging phase with grace.
            </p>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4">Featured Episodes:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Play className="w-5 h-5 text-[#7886C7] mr-3 mt-1 flex-shrink-0" />
                  <span>Reclaiming Power After Betrayal with Lora Cheadle</span>
                </li>
                <li className="flex items-start">
                  <Play className="w-5 h-5 text-[#7886C7] mr-3 mt-1 flex-shrink-0" />
                  <span>Overcoming Divorce Trauma with Dawn Wiggins</span>
                </li>
                <li className="flex items-start">
                  <Play className="w-5 h-5 text-[#7886C7] mr-3 mt-1 flex-shrink-0" />
                  <span>The Financial Playbook for Divorce with Victoria Kirilloff</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#FFF2F2] text-[#2D336B] hover:bg-[#A9B5DF] transition-all px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center">
                <Play className="w-6 h-6 mr-3" />
                Stream Latest Episode
              </button>
              
              <button className="bg-transparent border-2 border-[#FFF2F2] text-white hover:bg-[#FFF2F2]/10 transition-all px-8 py-4 rounded-lg font-bold text-lg">
                Browse All Episodes
              </button>
            </div>
          </div>
          
          {/* Enhanced Attorney image section */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Improved Image frame */}
              <div className="border-8 border-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-xl mx-auto bg-white">
                <div className="relative">
                  <img
                    src="/Jaime-Davis.webp"
                    alt="Jaime Davis - Divorce Attorney"
                    className="w-full h-auto object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-end">
                      <div className="bg-white rounded-full p-1 -mb-6 mr-4">
                        <img 
                          src="/Jaime-Davis.webp" 
                          alt="Jaime Davis"
                          className="w-16 h-16 rounded-full object-cover border-4 border-white"
                        />
                      </div>
                      <div>
                        <p className="text-white font-bold text-xl">Jaime Davis</p>
                        <p className="text-[#A9B5DF]">North Carolina Divorce Attorney</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="inline-flex items-center bg-[#2D336B] text-white px-4 py-2 rounded-full">
                    <Headphones className="w-4 h-4 mr-2" />
                    <span className="font-medium">Podcast Host</span>
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <Play className="w-5 h-5 text-[#2D336B]" />
                    <span className="font-medium text-[#2D336B]">Now Playing: Episode 12 - Healing After Divorce</span>
                  </div>
                </div>
              </div>
              
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;