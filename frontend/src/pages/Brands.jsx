import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { brands } from '../data/mock';
import FloatingIcons from '../components/FloatingIcons';

const Brands = () => {
  const industries = [
    { name: 'Technology & Startups', color: '#3dd3ee' },
    { name: 'E-commerce & Retail', color: '#fad24b' },
    { name: 'FMCG & Consumer Goods', color: '#fa551e' },
    { name: 'Finance & Banking', color: '#b4dc19' },
    { name: 'Hospitality & Travel', color: '#ff8c19' },
    { name: 'Fashion & Lifestyle', color: '#c8aff0' },
    { name: 'Food & Beverage', color: '#78286e' },
    { name: 'Corporate & Industrial Houses', color: '#3dd3ee' }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section - Vibrant */}
      <section className="py-20 bg-gradient-to-br from-[#fad24b] via-[#ff8c19] to-[#fa551e] relative overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <FloatingIcons theme="brands" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 backdrop-blur-sm text-white border-white/30 text-sm px-6 py-2">
              Trusted By Leading Brands
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Brands We Work With
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Proud to partner with innovative brands across diverse industries
            </p>
          </div>
        </div>
      </section>

      {/* Brand Logos - Auto-scrolling Marquee */}
      <section className="py-20 bg-gradient-to-br from-[#f7f5f2] via-white to-[#fad24b]/5 overflow-hidden">
        <div className="relative">
          <div 
            className="flex items-center gap-20"
            style={{
              animation: 'autoScrollBrands 30s linear infinite',
              width: 'max-content'
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex-shrink-0 flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="w-28 h-28 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-[#736c64] group-hover:text-[#fa551e] transition-colors whitespace-nowrap">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Compact Tags */}
      <section className="py-14 bg-[#1e1919] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#fa551e]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#fad24b]/10 blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Industries We Serve
            </h2>
            <p className="text-white/40 text-sm mb-10">
              Expertise across multiple sectors
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group relative px-6 py-3 rounded-full border border-white/15 hover:border-transparent cursor-default transition-all duration-300 hover:-translate-y-1"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    animationDelay: `${index * 0.07}s`,
                    opacity: 0
                  }}
                >
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, ${industry.color}30, ${industry.color}10)` }}
                  />
                  <div className="relative flex items-center gap-2.5">
                    <div 
                      className="w-2.5 h-2.5 rounded-full transition-transform duration-300 group-hover:scale-125"
                      style={{ backgroundColor: industry.color }}
                    />
                    <span className="text-white/80 font-medium text-sm group-hover:text-white transition-colors">
                      {industry.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Brands Choose Us - Compact Horizontal */}
      <section className="py-14 bg-[#f7f5f2] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1919] mb-10 text-center">
              Why Brands Choose Us
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Strategic Thinking', desc: 'Data-driven strategies tailored to your goals', color: '#fa551e' },
                { title: 'Creative Excellence', desc: 'Award-winning work that drives engagement', color: '#fad24b' },
                { title: 'Measurable Results', desc: 'Transparent analytics to track ROI', color: '#3dd3ee' },
                { title: 'Flexibility', desc: 'Agile teams that adapt to your evolving needs', color: '#b4dc19' },
                { title: 'Turnaround Time', desc: 'Fast, reliable delivery without compromising quality', color: '#c8aff0' },
                { title: 'Long-term Partnership', desc: 'Dedicated support for sustained growth', color: '#ff8c19' }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="group relative p-5 rounded-2xl border border-[#e8e4df] hover:border-transparent bg-white transition-all duration-300 hover:-translate-y-1 cursor-default"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    animationDelay: `${index * 0.08}s`,
                    opacity: 0
                  }}
                >
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, ${benefit.color}08, ${benefit.color}15)` }}
                  />
                  <div className="relative">
                    <div 
                      className="w-10 h-1 rounded-full mb-4 group-hover:w-14 transition-all duration-300"
                      style={{ backgroundColor: benefit.color }}
                    />
                    <h3 className="text-base font-bold text-[#1e1919] mb-1.5 group-hover:text-[#fa551e] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-[#736c64] text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Bold Gradient */}
      <section className="py-20 bg-gradient-to-br from-[#fa551e] via-[#ff8c19] to-[#fad24b] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our Growing Portfolio
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can help elevate your brand to new heights
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#fa551e] hover:bg-[#fad24b] hover:text-[#1e1919] px-12 py-7 text-xl rounded-full shadow-2xl hover:scale-105 transition-all">
              Become a Partner
              <ArrowRight className="ml-2" size={24} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Brands;
