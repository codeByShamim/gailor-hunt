import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Navigation data structure
  const navItems = [
    {
      title: "Practice Areas",
      children: [
        {
          title: "Separation & Divorce",
          children: [
            "How to Prepare",
            "Separation",
            "Divorce Process",
            "Collaborative Divorce",
            "Prenuptial Agreements",
            "Alimony & Spousal Support",
            "Alimony",
            "Adultery"
          ]
        },
        {
          title: "Children",
          children: [
            "Custody",
            "Child Support",
            "Parenting Coordinators",
            "Grandparents' Rights"
          ]
        },
        {
          title: "Property Division",
          children: [
            "Property Division",
            "Separation and Property Settlement Agreements"
          ]
        },
        "Domestic Violence",
        "Family Law Appeals",
        "Family Law Services in Raleigh, NC",
        "Alienation of Affection",
        "Criminal Conversation",
        "Spousal Defamation",
        "Breach of Fiduciary Duty/Fraud",
        "Transmission of Disease",
        "Emotional Distress",
        "Invasion of Privacy",
        {
          title: "Settlement Outside of Court",
          children: [
            "Separation Agreements",
            "Postnuptial Agreements"
          ]
        },
        "Mediation & Arbitration"
      ]
    },
    {
      title: "About Us",
      children: [
        "Our Firm",
        "Meet Our Team",
        "Firm News"
      ]
    },
    {
      title: "Resources",
      children: [
        "Podcasts",
        "Videos",
        "New Book by Jaime Davis - Available Now!",
        "FAQs"
      ]
    },
    { title: "Blog", href: "#blog" },
    { title: "Contact", href: "#contact" }
  ];

  // Render desktop dropdown
  const renderDesktopDropdown = (items) => (
    <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-xl overflow-hidden z-50 border border-gray-100 transition-all duration-300 transform origin-top">
      <div className="py-3 max-h-[70vh] overflow-y-auto custom-scroll">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {typeof item === 'string' ? (
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block px-5 py-3 text-gray-700 hover:bg-[#f0f2ff] hover:text-[#2D336B] transition-colors"
              >
                {item}
              </a>
            ) : (
              <div className="border-t border-gray-100 first:border-t-0">
                <div className="px-5 py-3 font-semibold text-[#2D336B] bg-gray-50">
                  {item.title}
                </div>
                {item.children.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-7 py-3 text-gray-700 hover:bg-[#f0f2ff] hover:text-[#2D336B] transition-colors"
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  // Render mobile dropdown
  const renderMobileDropdown = (items) => (
    <div className="pl-4 mt-1 border-l-2 border-gray-200 ml-4">
      {items.map((item, index) => (
        <div key={index}>
          {typeof item === 'string' ? (
            <a
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="block py-3 text-gray-700 hover:text-[#2D336B]"
              onClick={closeMobileMenu}
            >
              {item}
            </a>
          ) : (
            <div className="py-1">
              <div className="py-2 font-semibold text-[#2D336B]">
                {item.title}
              </div>
              <div className="pl-4">
                {item.children.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-2 text-gray-700 hover:text-[#2D336B]"
                    onClick={closeMobileMenu}
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <img
  src="/logo.png"
  alt="GH Law Logo"
  className="h-12 w-auto"
/>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.children ? (
                  <div className="relative">
                    <button
                      className={`flex items-center text-gray-700 hover:text-[#2D336B] transition-colors font-medium ${
                        activeDropdown === item.title ? 'text-[#2D336B]' : ''
                      }`}
                      onClick={() => toggleDropdown(item.title)}
                    >
                      {item.title}
                      {activeDropdown === item.title ? (
                        <ChevronUp className="ml-1 w-4 h-4" />
                      ) : (
                        <ChevronDown className="ml-1 w-4 h-4" />
                      )}
                    </button>
                    {activeDropdown === item.title && renderDesktopDropdown(item.children)}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-[#2D336B] transition-colors font-medium"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:919-832-8488"
              className="flex items-center space-x-2 text-[#2D336B] hover:text-[#7886C7] transition-colors group"
            >
              <div className="bg-[#f0f2ff] p-2 rounded-full group-hover:bg-[#e4e7ff] transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-medium">(919) 832-8488</span>
            </a>
            <button className="bg-gradient-to-r from-[#2D336B] to-[#3a428a] text-white px-6 py-2 rounded-lg hover:from-[#3a428a] hover:to-[#4a54a8] transition-all flex items-center space-x-2 shadow-md hover:shadow-lg">
              <Calendar className="w-4 h-4" />
              <span>Schedule Consultation</span>
            </button>
            <button className="border border-[#2D336B] text-[#2D336B] px-6 py-2 rounded-lg hover:bg-[#2D336B] hover:text-white transition-colors shadow-sm hover:shadow-md">
              Pay Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#2D336B]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2D336B]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-2">
                  {item.children ? (
                    <div>
                      <button
                        className={`flex items-center w-full text-left py-4 text-gray-700 font-medium ${
                          activeDropdown === item.title ? 'text-[#2D336B]' : ''
                        }`}
                        onClick={() => toggleDropdown(item.title)}
                      >
                        {item.title}
                        {activeDropdown === item.title ? (
                          <ChevronUp className="ml-auto w-4 h-4" />
                        ) : (
                          <ChevronDown className="ml-auto w-4 h-4" />
                        )}
                      </button>
                      {activeDropdown === item.title && renderMobileDropdown(item.children)}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-4 text-gray-700 hover:text-[#2D336B] font-medium"
                      onClick={closeMobileMenu}
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}

              <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200 mt-2">
                <a
                  href="tel:919-832-8488"
                  className="flex items-center space-x-3 text-[#2D336B] hover:text-[#7886C7] transition-colors py-3 px-4 bg-[#f0f2ff] rounded-lg"
                >
                  <div className="bg-white p-2 rounded-full">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Call Us Now</div>
                    <div className="font-bold text-lg">(919) 832-8488</div>
                  </div>
                </a>
                <button className="bg-gradient-to-r from-[#2D336B] to-[#3a428a] text-white px-6 py-4 rounded-lg hover:from-[#3a428a] hover:to-[#4a54a8] transition-all flex items-center justify-center space-x-2 shadow-md">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">Schedule Consultation</span>
                </button>
                <button className="border border-[#2D336B] text-[#2D336B] px-6 py-4 rounded-lg hover:bg-[#2D336B] hover:text-white transition-colors font-medium">
                  Pay Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      {/* Custom scrollbar style */}
      <style jsx>{`
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #c5cae9;
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: #9fa8da;
        }
      `}</style>
    </header>
  );
};

export default Header;