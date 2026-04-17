import React from 'react';
import { Users, Target, Heart, Lightbulb, ChevronLeft, ChevronRight, Zap, Clock } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { officeImages, teamMembers } from '../data/mock';
import FloatingIcons from '../components/FloatingIcons';

const OurStory = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'We pour our hearts into every project, treating your brand as our own.',
      color: '#fa551e'
    },
    {
      icon: Lightbulb,
      title: 'Creative Excellence',
      description: 'Innovation and creativity are at the core of everything we do.',
      color: '#fad24b'
    },
    {
      icon: Target,
      title: 'Results-Focused',
      description: 'Data-driven strategies that deliver measurable business outcomes.',
      color: '#3dd3ee'
    },
    {
      icon: Zap,
      title: 'Flexibility',
      description: 'Agile teams that adapt quickly to your evolving needs and market shifts.',
      color: '#b4dc19'
    },
    {
      icon: Clock,
      title: 'Turnaround Time',
      description: 'Fast, reliable delivery without compromising on quality.',
      color: '#c8aff0'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We build lasting relationships based on trust, transparency, and success.',
      color: '#ff8c19'
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-[#f7f5f2] via-white to-[#fad24b]/10">
      {/* Hero Section with Gradient */}
      <section className="py-20 bg-gradient-to-br from-[#fa551e] via-[#ff8c19] to-[#fad24b] relative overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <FloatingIcons theme="story" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30 text-sm px-6 py-2">
              About Us
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our Story
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              From a small creative studio in Kolkata to a full-scale marketing agency across three cities—we tell brand stories the way they're meant to be told.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section with Color */}
      <section className="py-12 bg-gradient-to-br from-white to-[#fa551e]/5 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#fa551e]/10 to-[#fad24b]/10 rounded-full">
                <span className="text-[#fa551e] font-semibold text-sm">Since 2017</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e1919] leading-tight">
                The Journey Begins
              </h2>
              <div className="space-y-3 text-[#736c64] leading-relaxed text-base">
                <p>
                  Founded in 2017, Speaking Mirror was built on a simple belief: every brand has a story worth telling—authentically and creatively.
                </p>
                <p>
                  What started as a two-person team in a small Kolkata office has today grown into a powerhouse agency, with <span className="font-bold text-[#fa551e]">25+ talented professionals</span> across Kolkata, Mumbai, and Dubai.
                </p>
                <p>
                  Over the years, we've had the privilege of working with <span className="font-bold text-[#fa551e]">500+ brands</span> across industries—helping startups find their voice and enabling established companies to redefine their narrative.
                </p>
                <p>
                  Our journey is driven by creativity, backed by strategy, and rooted in an unwavering commitment to delivering results that truly matter.
                </p>
                <p className="font-semibold text-[#1e1919] italic">
                  Because we don't just tell stories—we tell them the way they're meant to be told.
                </p>
              </div>
            </div>
            
            {/* Scrollable Photo Carousel */}
            <div className="relative group/carousel">
              <div 
                id="story-carousel"
                className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-[8%]"
                style={{ scrollBehavior: 'smooth' }}
              >
                {officeImages.map((image, index) => (
                  <div
                    key={image}
                    className="flex-shrink-0 w-[80%] h-[420px] snap-center rounded-2xl overflow-hidden shadow-xl transition-all duration-500"
                  >
                    <img
                      src={image}
                      alt={`Office ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>

              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

              {/* Left Arrow */}
              <button
                onClick={() => {
                  const el = document.getElementById('story-carousel');
                  el.scrollBy({ left: -el.offsetWidth * 0.8, behavior: 'smooth' });
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#fa551e] hover:text-white transition-all z-20 border border-gray-100"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => {
                  const el = document.getElementById('story-carousel');
                  el.scrollBy({ left: el.offsetWidth * 0.8, behavior: 'smooth' });
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#fa551e] hover:text-white transition-all z-20 border border-gray-100"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Colorful */}
      <section className="py-12 bg-gradient-to-br from-[#fad24b]/20 via-white to-[#3dd3ee]/10 relative">
        {/* Floating Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#fa551e]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#3dd3ee]/10 blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1919] mb-3">
              Our Values
            </h2>
            <p className="text-[#736c64] text-base max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="group"
                style={{
                  animation: 'fadeInUp 0.8s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <Card className="text-center h-full hover:shadow-2xl transition-all hover:-translate-y-2 border-2 hover:border-[#fa551e] bg-white">
                  <CardContent className="p-6">
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                      style={{ 
                        background: `linear-gradient(135deg, ${value.color} 0%, ${value.color}80 100%)`,
                        boxShadow: `0 10px 30px ${value.color}40`
                      }}
                    >
                      <value.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1e1919] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[#736c64] leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Vibrant */}
      <section className="py-12 bg-gradient-to-br from-[#fa551e] via-[#ff8c19] to-[#fad24b] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Meet The Team
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto">
              The creative minds behind Speaking Mirror
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="group"
                style={{
                  animation: 'fadeInUp 0.8s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <Card className="group hover:shadow-2xl transition-all hover:-translate-y-3 bg-white overflow-hidden">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-[center_20%] group-hover:scale-110 transition-transform duration-700"
                      style={{
                        ...(member.name === 'Joy' ? { transform: 'scale(1.3)', objectPosition: 'center 35%' } : {}),
                        ...(member.name === 'Nilendu' ? { objectPosition: 'center 10%' } : {}),
                        ...(member.name === 'Aranya' ? { objectPosition: 'center 60%' } : {}),
                        ...(member.name === 'Rashida' ? { objectPosition: 'center 40%' } : {})
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e1919] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-base font-bold text-[#1e1919]">
                      {member.name}
                    </h3>
                    <p className="text-[#fa551e] font-semibold text-xs mt-1">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Bold Gradient */}
      <section className="py-12 bg-gradient-to-br from-[#1e1919] to-[#fa551e]/30 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#fad24b]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#3dd3ee]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              To empower brands with creative marketing solutions that not only capture attention 
              but drive meaningful connections and measurable growth. We believe in the power of 
              authentic storytelling to transform businesses and create lasting impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
