import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#2D336B] rounded-full px-8 py-3 mb-6">
            <h3 className="text-white text-2xl font-bold tracking-wider">CONTACT US</h3>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#2D336B] mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-[#2D336B] max-w-3xl mx-auto">
            Reach out for a confidential consultation with our legal team.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info Sidebar */}
            <div className="bg-[#2D336B] text-white p-12 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#A9B5DF]"></div>
              
              <div className="mb-10">
                <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-[#7886C7] p-3 rounded-xl mr-5">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Our Office</h4>
                      <p className="text-lg opacity-90">123 Legal Avenue, Suite 400<br />Raleigh, NC 27601</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#7886C7] p-3 rounded-xl mr-5">
                      <Phone className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Call Us</h4>
                      <p className="text-lg opacity-90">(919) 832-8488</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#7886C7] p-3 rounded-xl mr-5">
                      <Mail className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Email Us</h4>
                      <p className="text-lg opacity-90">contact@lawfirm.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <div className="h-1 w-20 bg-[#A9B5DF] mb-5"></div>
                <p className="text-lg opacity-90">
                  Our team is ready to assist you with your legal needs.
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="p-12">
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="bg-[#A9B5DF] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-[#2D336B]" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-[#2D336B]">Message Received!</h3>
                  <p className="text-xl text-[#7886C7]">We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-lg font-semibold text-[#2D336B] mb-2">Your Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 text-lg rounded-xl border border-[#A9B5DF] focus:outline-none focus:ring-2 focus:ring-[#7886C7]"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-semibold text-[#2D336B] mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 text-lg rounded-xl border border-[#A9B5DF] focus:outline-none focus:ring-2 focus:ring-[#7886C7]"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-lg font-semibold text-[#2D336B] mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 text-lg rounded-xl border border-[#A9B5DF] focus:outline-none focus:ring-2 focus:ring-[#7886C7]"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-semibold text-[#2D336B] mb-2">How can we assist you?</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-6 py-4 text-lg rounded-xl border border-[#A9B5DF] focus:outline-none focus:ring-2 focus:ring-[#7886C7]"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#2D336B] text-white px-8 py-5 rounded-xl font-bold hover:bg-[#3a428a] transition-colors text-xl flex items-center justify-center mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6 mr-3" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;