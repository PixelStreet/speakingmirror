import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { services } from '../data/mock';
import FloatingIcons from '../components/FloatingIcons';
import { 
  Share2, 
  Search, 
  FileText, 
  TrendingUp, 
  Compass, 
  Users, 
  Palette 
} from 'lucide-react';

const Capabilities = () => {
  const serviceIcons = {
    'Social Media': Share2,
    'SEO': Search,
    'Content Creation': FileText,
    'Performance Marketing': TrendingUp,
    'Brand Strategy': Compass,
    'Influencer Marketing': Users,
    'Branding': Palette
  };

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Deep dive into your brand, audience, and business goals',
      color: '#fa551e'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Crafting data-driven marketing strategies tailored to your needs',
      color: '#fad24b'
    },
    {
      number: '03',
      title: 'Creation',
      description: 'Bringing ideas to life with compelling creative execution',
      color: '#3dd3ee'
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and refinement for maximum impact',
      color: '#ff8c19'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section - Vibrant Gradient */}
      <section className="py-20 bg-gradient-to-br from-[#fa551e] via-[#ff8c19] to-[#fad24b] relative overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <FloatingIcons theme="capabilities" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 backdrop-blur-sm text-white border-white/30 text-sm px-6 py-2">
              Full-Service Agency
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our Capabilities
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Comprehensive marketing solutions designed to elevate your brand and drive business growth
            </p>
          </div>
        </div>
      </section>

      {/* Services - Dark Brand Gradient Grid */}
      <section className="py-20 bg-gradient-to-br from-[#1e1919] via-[#2a1f1f] to-[#1e1919] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#fa551e]/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#fad24b]/12 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#ff8c19]/8 blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
              {services.map((service, index) => {
                const IconComponent = serviceIcons[service.title];
                const isLast = index === services.length - 1 && services.length % 3 === 1;
                return (
                  <div
                    key={service.id}
                    className={`group relative rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 cursor-default w-full ${isLast ? 'lg:col-start-2' : ''}`}
                    style={{
                      background: `linear-gradient(135deg, ${service.color}10, transparent)`,
                      animation: 'fadeInUp 0.5s ease-out forwards',
                      animationDelay: `${index * 0.07}s`,
                      opacity: 0
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ 
                          background: `linear-gradient(135deg, ${service.color}, ${service.color}80)`,
                          boxShadow: `0 4px 16px ${service.color}30`
                        }}
                      >
                        {IconComponent && <IconComponent size={18} className="text-white" />}
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Colorful */}
      <section className="py-20 bg-gradient-to-br from-[#fad24b]/20 via-white to-[#fa551e]/10 relative">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#fa551e]/10 blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1e1919] mb-4">
              Our Process
            </h2>
            <p className="text-[#736c64] text-xl max-w-2xl mx-auto">
              A proven methodology that delivers consistent results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                style={{
                  animation: 'fadeInUp 0.8s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <Card className="text-center h-full hover:shadow-2xl transition-all hover:-translate-y-2 bg-white border-2 hover:border-[#fa551e]">
                  <CardContent className="p-8">
                    <div 
                      className="text-7xl font-bold mb-4"
                      style={{ 
                        background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}80 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1e1919] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#736c64] leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Brand Gradient */}
      <section className="py-20 bg-gradient-to-br from-[#fa551e] via-[#ff8c19] to-[#fad24b] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Ready to take your marketing to the next level? Our team is here to help.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#fa551e] hover:bg-[#fad24b] hover:text-[#1e1919] px-12 py-7 text-xl rounded-full shadow-2xl hover:scale-105 transition-all">
              Get In Touch
              <ArrowRight className="ml-2" size={24} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Capabilities;
