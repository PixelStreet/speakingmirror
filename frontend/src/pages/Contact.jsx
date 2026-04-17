import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { contactInfo } from '../data/mock';
import FloatingIcons from '../components/FloatingIcons';
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(`${API_URL}/api/contact`, formData);
      toast.success("Thank you! We'll get back to you within 24 hours.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Social Media Marketing',
    'SEO',
    'Content Creation',
    'Performance Marketing',
    'Brand Strategy',
    'Influencer Marketing',
    'Branding'
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section - Vibrant Gradient */}
      <section className="py-20 bg-gradient-to-br from-[#ff8c19] via-[#fa551e] to-[#fad24b] relative overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <FloatingIcons theme="contact" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 backdrop-blur-sm text-white border-white/30 text-sm px-6 py-2">
              Let's Connect
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Ready to start your next project? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 bg-gradient-to-br from-[#f7f5f2] via-white to-[#3dd3ee]/5 relative">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#fa551e]/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#fad24b]/10 blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="border-2 shadow-2xl bg-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-[#1e1919] mb-6">
                    Send Us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#1e1919] font-semibold">
                          Full Name <span className="text-[#fa551e]">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="border-2 focus:border-[#fa551e] h-11"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#1e1919] font-semibold">
                          Email Address <span className="text-[#fa551e]">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="border-2 focus:border-[#fa551e] h-11"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-[#1e1919] font-semibold">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="border-2 focus:border-[#fa551e] h-11"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-[#1e1919] font-semibold">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="border-2 focus:border-[#fa551e] h-11"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-[#1e1919] font-semibold">Service Interested In</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-11 px-3 py-2 border-2 rounded-md focus:border-[#fa551e] focus:outline-none focus:ring-2 focus:ring-[#fa551e]/20 bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#1e1919] font-semibold">
                        Message <span className="text-[#fa551e]">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={4}
                        required
                        className="border-2 focus:border-[#fa551e]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      data-testid="contact-submit-btn"
                      className="w-full bg-gradient-to-r from-[#fa551e] to-[#ff8c19] hover:from-[#ff8c19] hover:to-[#fad24b] text-white h-12 text-lg group shadow-xl disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={20} />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info + Offices - Right Side */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Details */}
              <Card className="border-2 border-[#fa551e] bg-gradient-to-br from-white to-[#fa551e]/5">
                <CardContent className="p-5 space-y-4">
                  <h3 className="text-xl font-bold text-[#1e1919]">Contact Information</h3>
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#fa551e] to-[#ff8c19] flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={16} />
                    </div>
                    <a href={`mailto:${contactInfo.email}`} className="text-sm text-[#736c64] hover:text-[#fa551e] transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#fad24b] to-[#ff8c19] flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={16} />
                    </div>
                    <a href={`tel:${contactInfo.phone}`} className="text-sm text-[#736c64] hover:text-[#fa551e] transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#3dd3ee] to-[#b4dc19] flex items-center justify-center flex-shrink-0">
                      <Clock className="text-white" size={16} />
                    </div>
                    <p className="text-sm text-[#736c64]">Mon - Fri: 10:30 AM - 7:30 PM</p>
                  </div>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#1e1919]">Our Offices</h3>
                {contactInfo.offices.map((office, index) => (
                  <Card 
                    key={office.city} 
                    className="hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-[#fa551e] bg-white cursor-pointer"
                    onClick={() => window.open(office.mapUrl, '_blank')}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div 
                          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            background: `linear-gradient(135deg, ${index === 0 ? '#fa551e' : index === 1 ? '#fad24b' : '#3dd3ee'} 0%, ${index === 0 ? '#ff8c19' : index === 1 ? '#ff8c19' : '#b4dc19'} 100%)`
                          }}
                        >
                          <MapPin className="text-white" size={16} />
                        </div>
                        <div>
                          <p className="font-bold text-[#1e1919] text-sm">{office.city}</p>
                          <p className="text-xs text-[#736c64] mb-1">{office.address}</p>
                          <span className="text-xs text-[#fa551e] font-semibold hover:underline">
                            View on Map
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us - Compact Cards */}
      <section className="py-4 bg-gradient-to-br from-white to-[#fad24b]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-[#1e1919] mb-3">
              Find Us
            </h2>
            <p className="text-[#736c64] text-base">
              Visit any of our offices across three cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contactInfo.offices.map((office, index) => (
              <a
                key={office.city}
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
              <Card 
                className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2 hover:border-[#fa551e]"
                style={{
                  animation: 'fadeInUp 0.8s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <div 
                  className="h-32 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${index === 0 ? '#fa551e' : index === 1 ? '#fad24b' : '#3dd3ee'} 0%, ${index === 0 ? '#ff8c19' : index === 1 ? '#ff8c19' : '#b4dc19'} 100%)`
                  }}
                >
                  <MapPin size={48} className="text-white" />
                </div>
                <CardContent className="p-5 bg-white">
                  <h3 className="text-xl font-bold text-[#1e1919] mb-2">{office.city}</h3>
                  <p className="text-sm text-[#736c64] mb-3">{office.address}</p>
                  <span className="text-sm text-[#fa551e] font-semibold hover:underline">
                    Open in Google Maps
                  </span>
                </CardContent>
              </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Subtle Gradient */}
      <section className="py-20 bg-gradient-to-br from-[#f7f5f2] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-[#1e1919] mb-16 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'What is your typical project timeline?',
                  a: 'Our engagements are typically a minimum of 6 months to year-long retainers. This allows us to build a strong foundation, execute strategies effectively, and deliver sustained, measurable results for your brand.'
                },
                {
                  q: 'How is pricing determined?',
                  a: 'Pricing is dependent on the services you choose and the scope of work involved. We tailor packages based on your specific needs — whether it\'s social media management, performance marketing, branding, or a combination. We\'ll provide a detailed proposal after understanding your requirements.'
                },
                {
                  q: 'Do you work with startups?',
                  a: 'Absolutely! We love working with startups and have special packages designed to help early-stage companies build their brand and market presence effectively.'
                },
                {
                  q: 'What industries do you specialize in?',
                  a: 'We have experience across technology, e-commerce, FMCG, finance, hospitality, food & beverage, and fashion. Our diverse portfolio allows us to bring cross-industry insights to every project.'
                }
              ].map((faq, index) => (
                <Card 
                  key={faq.q}
                  className="border-2 hover:border-[#fa551e] hover:shadow-lg transition-all"
                  style={{
                    animation: 'fadeInUp 0.8s ease-out forwards',
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-[#1e1919] mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-[#736c64] leading-relaxed">
                      {faq.a}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
