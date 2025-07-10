import React from 'react';
import { Heart, Users, Home, FileText, Shield, Scale, Handshake, TrendingUp, Briefcase, Phone, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const practiceAreas = [
  {
    title: 'Divorce & Separation',
    icon: Heart,
    description: 'Navigate your divorce with confidence. From uncontested to complex high-asset cases.',
    color: 'from-red-500 to-pink-500',
    features: ['Uncontested Divorce', 'Complex Litigation', 'High-Asset Cases', 'Military Divorce']
  },
  {
    title: 'Child Custody & Support',
    icon: Users,
    description: 'Protect your children\'s future with strategic custody and support arrangements.',
    color: 'from-blue-500 to-cyan-500',
    features: ['Joint Custody', 'Sole Custody', 'Visitation Rights', 'Support Modifications']
  },
  {
    title: 'Alimony & Spousal Support',
    icon: Briefcase,
    description: 'Secure fair financial support for your post-divorce life and future.',
    color: 'from-green-500 to-emerald-500',
    features: ['Temporary Support', 'Permanent Alimony', 'Rehabilitative Support', 'Modifications']
  },
  {
    title: 'Property Division',
    icon: Home,
    description: 'Ensure equitable distribution of all marital assets and property.',
    color: 'from-purple-500 to-violet-500',
    features: ['Real Estate', 'Business Valuation', 'Retirement Accounts', 'Investment Portfolios']
  },
  {
    title: 'Prenuptial Agreements',
    icon: Shield,
    description: 'Protect your assets and financial future before you say "I do".',
    color: 'from-orange-500 to-red-500',
    features: ['Asset Protection', 'Business Interests', 'Inheritance Rights', 'Debt Allocation']
  },
  {
    title: 'Domestic Violence',
    icon: Scale,
    description: 'Immediate protection and legal support for domestic violence survivors.',
    color: 'from-indigo-500 to-purple-500',
    features: ['Protective Orders', 'Emergency Relief', 'Safety Planning', 'Court Representation']
  }
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-20 lg:py-32 bg-gradient-to-b from-[#f0f2ff] to-[#e4e7ff] relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#2D336B] rounded-full opacity-10"></div>
        <div className="absolute top-1/4 right-20 w-40 h-40 bg-[#7886C7] rounded-full opacity-10"></div>
        <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-[#2D336B] rounded-full opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#7886C7] rounded-full opacity-10"></div>
      </motion.div>
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#7886C7] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="inline-block bg-gradient-to-r from-[#2D336B] to-[#7886C7] text-white px-8 py-3 rounded-full text-sm font-black mb-8 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            HOW CAN WE REPRESENT YOU?
          </motion.div>
          <motion.h2 
            className="text-5xl lg:text-7xl font-black text-[#2D336B] mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Practice <span className="bg-gradient-to-r from-[#7886C7] to-[#2D336B] bg-clip-text text-transparent">Areas</span>
          </motion.h2>
          <motion.p 
            className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Comprehensive family law services designed to protect your rights and secure your future
          </motion.p>
        </motion.div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Animated Circle */}
                <motion.div 
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${area.color} rounded-full -mt-10 -mr-10 opacity-20`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 10 }}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-black text-[#2D336B] mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#2D336B] group-hover:to-[#7886C7] group-hover:bg-clip-text transition-all duration-300">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                    {area.description}
                  </p>
                  
                  <div className="space-y-3">
                    {area.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <motion.div 
                          className={`w-2 h-2 bg-gradient-to-r ${area.color} rounded-full`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                        />
                        <motion.span 
                          className="text-lg text-gray-700 font-semibold"
                          whileHover={{ x: 5 }}
                        >
                          {feature}
                        </motion.span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="bg-[#1a365d] rounded-3xl p-8 lg:p-12 text-white text-center overflow-hidden border-4 border-blue-200/50 glow">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-300/20 rounded-full blur-2xl"></div>
            
            {/* Animated Rings */}
            <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full border-4 border-white/20 pulse-ring"></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full border-4 border-white/25 pulse-ring-delayed"></div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl lg:text-4xl xl:text-5xl font-black mb-6 tracking-tight"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Ready to Protect Your Future?
              </motion.h3>
              
              <motion.p 
                className="text-lg lg:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Don't wait to secure your rights. Every day matters in family law. Schedule your free consultation 
                and take the first step toward resolution.
              </motion.p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="tel:919-832-8488"
                  className="shine-effect flex items-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl transition-all duration-300 font-bold text-lg shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-6 h-6" />
                  <span>Call (919) 832-8488</span>
                </motion.a>
                
                <motion.button 
                  className="shine-effect flex items-center space-x-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 font-bold text-lg shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Schedule Free Consultation</span>
                </motion.button>
              </div>
              
              <motion.div 
                className="mt-8 text-blue-200 text-base font-medium flex flex-wrap justify-center gap-4 lg:gap-6"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-300" /> No Obligation
                </span>
                <span className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-300" /> 100% Confidential
                </span>
                <span className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-300" /> Same-Day Response
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <style jsx global>{`
        .glow {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
        }
        
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        
        .shine-effect::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(30deg);
          animation: shine 3s infinite;
        }
        
        @keyframes shine {
          0% {
            transform: rotate(30deg) translateX(-100%);
          }
          100% {
            transform: rotate(30deg) translateX(100%);
          }
        }
        
        .pulse-ring {
          transform: translate(-50%, -50%);
          animation: pulse-ring 4s infinite ease-in-out;
        }
        
        .pulse-ring-delayed {
          transform: translate(-50%, -50%);
          animation: pulse-ring 5s infinite ease-in-out;
          animation-delay: 0.5s;
        }
        
        @keyframes pulse-ring {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.4; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
        }
        
        .shine-effect:hover::before {
          animation: shine 1s;
        }
      `}</style>
    </section>
  );
};

export default PracticeAreas;