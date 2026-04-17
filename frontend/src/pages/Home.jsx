import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MapPin, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { heroData, services, portfolioWork, testimonials, newsFeatures, officeImages } from '../data/mock';
import MarketingAnimation from '../components/ParticleBackground';
import RaceIntro from '../components/RaceIntro';

const CounterCard = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const duration = 1500;
    const steps = 60;
    const increment = stat.target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.target) {
        setCount(stat.target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [hasStarted, stat.target]);

  return (
    <div 
      ref={ref}
      className="group relative"
      style={{ 
        animation: 'fadeInUp 0.8s ease-out forwards',
        animationDelay: `${index * 0.1}s`,
        opacity: 0
      }}
    >
      <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
        <h3 className="text-5xl font-bold text-[#1e1919] mb-2 group-hover:scale-110 transition-transform duration-300">
          {count}{stat.suffix}
        </h3>
        <p className="text-[#736c64] text-sm tracking-wide">{stat.label}</p>
      </div>
    </div>
  );
};

const AutoScrollEffect = ({ targetId }) => {
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const interval = setInterval(() => {
      if (window.__owCarouselPaused) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 420, behavior: 'smooth' });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [targetId]);
  return null;
};

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const featuredWork = useMemo(() => portfolioWork.filter(w => [11, 10, 8].includes(w.id)), []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f5f2]">
      {/* Race Intro Animation */}
      {showIntro && <RaceIntro onComplete={handleIntroComplete} />}

      {/* Cinematic Hero with Particles */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fa551e] via-[#ff8c19] to-[#fad24b] opacity-90">
          <div className="absolute inset-0 bg-[#1e1919] mix-blend-multiply opacity-30" />
        </div>

        {/* Marketing Animation - Social Media Theme */}
        <MarketingAnimation />

        {/* Floating Orbs with Parallax */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-[#fa551e] opacity-20 blur-3xl animate-pulse"
          style={{
            top: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full bg-[#fad24b] opacity-30 blur-3xl animate-pulse"
          style={{
            bottom: '20%',
            right: '15%',
            transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`,
            animationDelay: '1s',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full bg-[#ff8c19] opacity-15 blur-3xl animate-pulse"
          style={{
            top: '50%',
            right: '30%',
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            animationDelay: '0.5s',
            animation: 'float 7s ease-in-out infinite'
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-44">
          <div className="space-y-12 animate-fade-in">
            {/* Minimal Badge */}
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-sm font-medium text-white tracking-wide">Award-Winning Agency</span>
            </div>

            {/* Cinematic Typography */}
            <div className="space-y-8">
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight">
                <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">S</span>
                <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">p</span>
                <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">e</span>
                <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">a</span>
                <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">k</span>
                <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">i</span>
                <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">n</span>
                <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">g</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fad24b] to-white inline-block animate-gradient">
                  Mirror
                </span>
              </h1>
              
              <p className="text-2xl text-white/80 max-w-3xl mx-auto font-light tracking-wide">
                Transforming brands through creative storytelling
              </p>
            </div>

            {/* Minimal CTA */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-[#fa551e] hover:bg-white/90 px-12 py-7 text-lg rounded-full group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Start Journey
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#fa551e] to-[#ff8c19] opacity-0 group-hover:opacity-20 transition-opacity" />
                </Button>
              </Link>
              
              <Link to="/the-work">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-[#fa551e] px-12 py-7 text-lg rounded-full backdrop-blur-sm"
                >
                  View Work
                </Button>
              </Link>
            </div>

            {/* Locations with animation */}
            <div className="flex items-center justify-center space-x-3 text-white pt-4">
              {['Kolkata', 'Mumbai', 'Dubai'].map((city, index) => (
                <span 
                  key={city}
                  className="hover:scale-110 transition-all duration-300 cursor-default font-semibold text-lg"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                  }}
                >
                  {city}
                  {index < 2 && <span className="mx-3 text-white/80">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60" size={32} />
        </div>
      </section>

      {/* Stats - Minimalist Floating Cards with Counter */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { target: 500, suffix: '+', label: 'Brands', color: 'from-[#fa551e] to-[#ff8c19]' },
              { target: 1000, suffix: '+', label: 'Campaigns', color: 'from-[#ff8c19] to-[#fad24b]' },
              { target: 10, suffix: '+', label: 'Awards', color: 'from-[#fad24b] to-[#3dd3ee]' },
              { target: 98, suffix: '%', label: 'Satisfaction', color: 'from-[#3dd3ee] to-[#fa551e]' }
            ].map((stat, index) => (
              <CounterCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Image Carousel - Cinematic */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-[#1e1919] to-[#fa551e]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
                Our World
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-50" />
              <p className="text-white/60 text-lg mt-6">Team, offices & creative spaces</p>
            </div>

            {/* Scrollable Carousel with Auto-scroll + Arrows */}
            <div className="relative">
              <div 
                id="our-world-carousel"
                className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
                onMouseEnter={() => { window.__owCarouselPaused = true; }}
                onMouseLeave={() => { window.__owCarouselPaused = false; }}
              >
                {officeImages.map((image, idx) => (
                  <div 
                    key={image}
                    className="group relative flex-shrink-0 w-[400px] h-[500px] snap-center"
                  >
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                      <img 
                        src={image}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Auto-scroll effect */}
              <AutoScrollEffect targetId="our-world-carousel" />

              {/* Left Arrow */}
              <button
                onClick={() => {
                  const el = document.getElementById('our-world-carousel');
                  el.scrollBy({ left: -420, behavior: 'smooth' });
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-[#fa551e] hover:text-white transition-all z-10 text-[#1e1919]"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => {
                  const el = document.getElementById('our-world-carousel');
                  el.scrollBy({ left: 420, behavior: 'smooth' });
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-[#fa551e] hover:text-white transition-all z-10 text-[#1e1919]"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#fad24b]/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-[#fa551e]/10 blur-3xl" />
      </section>

      {/* Services - Minimal & Cinematic */}
      <section className="py-20 relative bg-[#1e1919] overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#fa551e]/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#fad24b]/8 blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-none tracking-tight mb-2">
                What We Do
              </h2>
              <p className="text-white/40 text-sm">Seven ways we transform brands</p>
            </div>

            {/* Compact Service Grid */}
            <div className="flex flex-wrap justify-center gap-3">
              {services.map((service, index) => (
                <Link
                  to="/capabilities"
                  key={service.id}
                  className="group relative px-7 py-4 rounded-full border border-white/10 hover:border-transparent transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  style={{
                    animation: 'fadeInUp 0.5s ease-out forwards',
                    animationDelay: `${index * 0.06}s`,
                    opacity: 0
                  }}
                >
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, ${service.color}25, ${service.color}08)` }}
                  />
                  <div className="relative flex items-center gap-3">
                    <div 
                      className="w-2 h-2 rounded-full group-hover:scale-150 transition-transform duration-300"
                      style={{ backgroundColor: service.color }}
                    />
                    <span className="text-white/70 font-semibold text-sm group-hover:text-white transition-colors whitespace-nowrap">
                      {service.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Link to="/capabilities">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#fa551e] via-[#ff8c19] to-[#fad24b] hover:from-[#ff8c19] hover:via-[#fad24b] hover:to-[#fa551e] text-white px-10 py-5 text-base rounded-full shadow-2xl hover:shadow-[#fa551e]/50"
                >
                  Explore All
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work - Vibrant Dark Theme */}
      <section className="py-24 relative bg-gradient-to-br from-[#fa551e] via-[#1e1919] to-[#ff8c19] overflow-hidden">
        {/* Strong Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#fad24b]/40 to-[#fa551e]/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#3dd3ee]/40 to-[#b4dc19]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-[#ff8c19]/30 to-[#fa551e]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Bold Header */}
            <div className="mb-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-none tracking-tight">
                  Featured Work
                </h2>
                <p className="text-white/80 text-base mt-3">Projects that made an impact</p>
              </div>
              <Link to="/the-work">
                <Button className="bg-white text-[#fa551e] hover:bg-[#fad24b] hover:text-[#1e1919] px-10 py-4 text-base rounded-full shadow-2xl hover:scale-105 transition-all">
                  View All
                </Button>
              </Link>
            </div>

            {/* Artistic Grid */}
            <div className="space-y-20">
              {featuredWork.map((work, index) => (
                <Link to={`/the-work/${work.id}`} key={work.id}>
                <div 
                  className={`group relative ${index % 2 === 0 ? 'lg:pr-24' : 'lg:pl-24'} cursor-pointer`}
                  style={{
                    animation: 'fadeInUp 0.8s ease-out forwards',
                    animationDelay: `${index * 0.2}s`,
                    opacity: 0
                  }}
                >
                  <div className="relative">
                    {/* Image with colored overlay */}
                    <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/10">
                      <img 
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1e1919]/60 via-transparent to-transparent" />
                    </div>

                    {/* Content Overlay with Strong Gradient */}
                    <div className={`absolute ${index % 2 === 0 ? 'bottom-6 left-6' : 'bottom-6 right-6'} z-10`}>
                      <div className="bg-white p-5 rounded-xl shadow-2xl max-w-xs transform transition-all duration-500 group-hover:-translate-y-4 border border-[#fad24b]/30">
                        <Badge className="bg-gradient-to-r from-[#fa551e] to-[#fad24b] text-white mb-2 text-xs px-2 py-0.5 shadow-lg">
                          {work.category}
                        </Badge>
                        <h3 className="text-lg font-bold text-[#1e1919] mb-1 tracking-tight">
                          {work.title}
                        </h3>
                        <p className="text-[#736c64] text-sm mb-2 line-clamp-2">
                          {work.longDescription ? work.longDescription.split('\n\n')[0] : work.description}
                        </p>
                        <div className="flex items-center space-x-2 text-[#fa551e] font-semibold text-xs">
                          <span>View Project</span>
                          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Vibrant Number */}
                    <div 
                      className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'top-0 left-0'} text-[7rem] font-bold leading-none pointer-events-none`}
                      style={{
                        background: 'linear-gradient(135deg, rgba(250,210,75,0.3) 0%, rgba(250,85,30,0.3) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Vibrant & Energetic */}
      <section className="py-16 relative bg-gradient-to-br from-[#fad24b]/40 via-[#ff8c19]/20 to-[#3dd3ee]/30 overflow-hidden">
        {/* Large Quote Mark with Strong Gradient */}
        <div className="absolute top-8 left-10 text-[8rem] font-serif leading-none pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(250,85,30,0.2) 0%, rgba(250,210,75,0.2) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          "
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 right-10 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#fa551e]/20 to-[#ff8c19]/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#3dd3ee]/20 to-[#b4dc19]/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e1919] leading-none tracking-tight mb-2">
                Testimonials
              </h2>
              <p className="text-[#736c64] text-sm">What our clients say about us</p>
            </div>

            {/* Scrollable Testimonial Cards */}
            <div className="relative">
              <div 
                id="testimonial-carousel"
                className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-[8%]"
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="flex-shrink-0 w-[320px] snap-center"
                  >
                    <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-[#fa551e]/20 transition-all duration-500 border border-[#fad24b]/30 h-full flex flex-col justify-between">
                      <p className="text-sm font-light text-[#1e1919] leading-relaxed italic mb-4">
                        "{testimonial.quote}"
                      </p>
                      <div className="pt-3 border-t" style={{ borderImage: 'linear-gradient(90deg, #fa551e 0%, #ff8c19 50%, #fad24b 100%) 1' }}>
                        <p className="text-xs font-bold text-[#1e1919]">{testimonial.author}</p>
                        <p className="text-xs text-[#736c64]">{testimonial.role}</p>
                        {testimonial.company && (
                          <p className="text-xs font-bold bg-gradient-to-r from-[#fa551e] to-[#fad24b] bg-clip-text text-transparent mt-0.5">{testimonial.company}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Left Arrow */}
              <button
                onClick={() => {
                  const el = document.getElementById('testimonial-carousel');
                  el.scrollBy({ left: -340, behavior: 'smooth' });
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#fa551e] hover:text-white transition-all z-10 border border-gray-100"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => {
                  const el = document.getElementById('testimonial-carousel');
                  el.scrollBy({ left: 340, behavior: 'smooth' });
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#fa551e] hover:text-white transition-all z-10 border border-gray-100"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Cinematic Finale */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1919] via-[#fa551e] to-[#1e1919]">
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => (
              <div
                key={`star-${i}`}
                className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center space-y-8 px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Let's Create
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fad24b] to-white">
              Together
            </span>
          </h2>
          
          <div className="pt-4">
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-white text-[#1e1919] hover:bg-white/90 px-12 py-6 text-lg rounded-full group"
            >
              Get Started
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
            </Button>
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
