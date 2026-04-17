import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { portfolioWork } from '../data/mock';
import FloatingIcons from '../components/FloatingIcons';

const TheWork = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Branding', 'Content Creation', 'Influencer Marketing', 'Performance Marketing', 'SEO & Reputation Management', 'Social Media'];

  const filteredWork = selectedCategory === 'All' 
    ? portfolioWork 
    : portfolioWork.filter(work => work.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section - Vibrant Gradient */}
      <section className="py-20 bg-gradient-to-br from-[#fa551e] via-[#ff8c19] to-[#fad24b] relative overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <FloatingIcons theme="work" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 backdrop-blur-sm text-white border-white/30 text-sm px-6 py-2">
              Portfolio
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Work
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore our portfolio of creative campaigns and successful brand transformations
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white sticky top-20 z-40 border-b shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#fa551e] to-[#ff8c19] text-white shadow-lg'
                      : 'bg-[#f7f5f2] text-[#1e1919] hover:bg-[#fa551e]/20'
                  }`}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gradient-to-br from-[#f7f5f2] via-white to-[#fad24b]/10 relative">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#fa551e]/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#fad24b]/10 blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWork.map((work, index) => (
              <div
                key={work.id}
                style={{
                  animation: 'fadeInUp 0.8s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <Link to={`/the-work/${work.id}`}>
                <Card className="group overflow-hidden border-2 hover:border-[#fa551e] transition-all hover:shadow-2xl cursor-pointer bg-white">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e1919]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <button className="bg-white text-[#1e1919] px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-[#fa551e] hover:text-white transition-colors shadow-xl">
                        <span className="font-semibold">View Details</span>
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-gradient-to-r from-[#fa551e] to-[#ff8c19] text-white">
                      {work.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-[#1e1919] mb-2 group-hover:text-[#fa551e] transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-[#736c64] text-sm mb-3">
                      {work.description}
                    </p>
                    <p className="text-xs font-semibold text-[#bbb5ae]">
                      Client: <span className="text-[#fa551e]">{work.client}</span>
                    </p>
                  </CardContent>
                </Card>
                </Link>
              </div>
            ))}
          </div>

          {filteredWork.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#736c64] text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section - Colorful */}
      <section className="py-20 bg-gradient-to-br from-[#fa551e] via-[#ff8c19] to-[#fad24b] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '200+', label: 'Happy Clients' },
              { value: '50+', label: 'Industry Awards' },
              { value: '98%', label: 'Client Satisfaction' }
            ].map((stat) => (
              <div key={stat.label} className="group">
                <h3 className="text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">{stat.value}</h3>
                <p className="opacity-90 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-white to-[#f7f5f2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-[#1e1919] mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-[#736c64] mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next big project
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-[#fa551e] to-[#ff8c19] hover:from-[#ff8c19] hover:to-[#fad24b] text-white px-12 py-7 text-xl rounded-full shadow-2xl hover:scale-105 transition-all">
              Start Your Project
              <ArrowRight className="ml-2" size={24} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TheWork;
