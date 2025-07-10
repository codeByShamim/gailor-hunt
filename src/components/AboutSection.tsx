import React from 'react';
import { Award, Users, Handshake, ChevronRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[#FFF2F2] bg-opacity-80"></div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
        <div className="grid grid-cols-5 gap-4">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="h-32 border border-[#2D336B]/20 rounded-lg"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D336B] mb-6">
              Gailor Hunt Raleigh <span className="text-[#7886C7] block">Divorce Team</span>
            </h2>

            <p className="text-xl text-[#2D336B] mb-8 max-w-2xl leading-relaxed">
              Welcome to one of the leading North Carolina divorce and family law firms. Since 1994, our family lawyers have leveraged compassion and resilience to protect our clients.
            </p>

            <p className="text-lg text-[#2D336B]/90 mb-10 max-w-2xl leading-relaxed">
              Gailor Hunt Davis Taylor & Gibbs, PLLC is one of North Carolina's most accomplished divorce law firms. We bring a custom approach to advocacy, meeting our clients' needs at every stage.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 gap-6 mb-10">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#2D336B]">
                <div className="flex items-start">
                  <div className="bg-[#2D336B] p-3 rounded-lg mr-4">
                    <Award className="w-6 h-6 text-[#FFF2F2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D336B] mb-2">Experienced</h3>
                    <p className="text-[#2D336B]/90">
                      Established in 1994 in Raleigh, we're one of NC's most accomplished family law firms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#7886C7]">
                <div className="flex items-start">
                  <div className="bg-[#7886C7] p-3 rounded-lg mr-4">
                    <Users className="w-6 h-6 text-[#FFF2F2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D336B] mb-2">Professional</h3>
                    <p className="text-[#2D336B]/90">
                      Our attorneys focus exclusively on family law and divorce, providing zealous advocacy.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#A9B5DF]">
                <div className="flex items-start">
                  <div className="bg-[#A9B5DF] p-3 rounded-lg mr-4">
                    <Handshake className="w-6 h-6 text-[#2D336B]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D336B] mb-2">Trusted</h3>
                    <p className="text-[#2D336B]/90">
                      Founded on the premise that families come first, we tailor services to each client's needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#2D336B] text-white hover:bg-[#7886C7] transition-all px-8 py-4 rounded-full font-bold text-lg flex items-center group">
                Learn More About Our Firm
                <ChevronRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-[#2D336B] text-[#2D336B] hover:bg-[#2D336B]/10 transition-all px-8 py-4 rounded-full font-bold text-lg">
                Meet Our Team
              </button>
            </div>
          </div>
          
          {/* Team portrait with achievements */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Main portrait */}
              <div className="relative rounded-2xl shadow-2xl overflow-hidden border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=720&q=80"
                  alt="Gailor Hunt Divorce Team"
                  className="w-full h-[500px] object-cover object-top"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2D336B] to-transparent p-6 pt-16">
                  <h3 className="text-2xl font-bold text-white">Gailor Hunt Family Law</h3>
                  <p className="text-[#A9B5DF]">Raleigh, NC • Since 1994</p>
                </div>
              </div>

              {/* Achievement badges as images */}
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="bg-white p-4 rounded-xl shadow-lg w-36 text-center">
                  <img
                    src="super-lawyers.png"
                    alt="Super Lawyers Badge"
                    className="mx-auto mb-2"
                  />
                  <span className="font-bold text-[#2D336B]">Super Lawyers</span>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-lg w-36 text-center">
                  <img
                    src="best-lawyers.jpg"
                    alt="Best Law Firms Badge"
                    className="mx-auto mb-2"
                  />
                  <span className="font-bold text-[#2D336B]">Best Law Firms</span>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-lg w-36 text-center">
                  <img
                    src="legal-elite.jpg"
                    alt="AV Rated Badge"
                    className="mx-auto mb-2"
                  />
                  <span className="font-bold text-[#2D336B]">Legal Elite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
