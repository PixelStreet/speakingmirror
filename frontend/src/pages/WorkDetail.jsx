import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Play, ExternalLink } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { portfolioWork } from '../data/mock';

const WorkDetail = () => {
  const { id } = useParams();
  const work = portfolioWork.find(w => String(w.id) === id);
  const currentIndex = portfolioWork.findIndex(w => String(w.id) === id);
  const prevWork = currentIndex > 0 ? portfolioWork[currentIndex - 1] : null;
  const nextWork = currentIndex < portfolioWork.length - 1 ? portfolioWork[currentIndex + 1] : null;

  if (!work) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-[#f7f5f2]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1e1919] mb-4">Project Not Found</h1>
          <Link to="/the-work">
            <Button className="bg-gradient-to-r from-[#fa551e] to-[#ff8c19] text-white rounded-full px-8 py-3">
              Back to The Work
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-[#f7f5f2]">
      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={work.image}
          alt={work.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1919] via-[#1e1919]/40 to-transparent" />

        {/* Back Button */}
        <Link to="/the-work" className="absolute top-6 left-6 z-10">
          <Button
            data-testid="back-to-work-btn"
            className="bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-[#1e1919] rounded-full px-5 py-2 border border-white/30"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Work
          </Button>
        </Link>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-5xl">
            <Badge className="bg-gradient-to-r from-[#fa551e] to-[#fad24b] text-white mb-4 text-sm px-4 py-1.5">
              {work.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
              {work.title}
            </h1>
            <p className="text-white/70 text-base">
              Client: <span className="text-[#fad24b] font-semibold">{work.client}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#1e1919] mb-4">About This Project</h2>
                <div className="text-[#736c64] text-lg leading-relaxed space-y-4">
                  {(work.longDescription || work.description).split('\n\n').map((para, i) => (
                    <p key={i}>
                      {para.split(/(\*\*.*?\*\*)/g).map((segment, j) => {
                        if (segment.startsWith('**') && segment.endsWith('**')) {
                          return <strong key={j} className="text-[#1e1919] block mb-1">{segment.slice(2, -2)}</strong>;
                        }
                        return segment.split('\n').map((line, k, arr) => (
                          <span key={`${j}-${k}`}>{line}{k < arr.length - 1 && <br />}</span>
                        ));
                      })}
                    </p>
                  ))}
                </div>
              </div>

              {/* Episodes / Reels - Priority Position */}
              {work.episodes && work.episodes.length > 0 && (
                <div>
                  {/* YouTube Embeds */}
                  {!work.episodes[0].url.includes('instagram') && (
                    <div className="space-y-6">
                      {work.episodes.map((ep) => {
                        const videoId = ep.url.includes('youtu.be/') 
                          ? ep.url.split('youtu.be/')[1].split('?')[0]
                          : ep.url.includes('v=') 
                            ? ep.url.split('v=')[1].split('&')[0]
                            : '';
                        return (
                          <div key={ep.url} className="rounded-2xl overflow-hidden shadow-xl bg-black">
                            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                              <iframe
                                className="absolute inset-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={ep.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Instagram Reel Embeds */}
                  {work.episodes[0].url.includes('instagram') && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {work.episodes.map((ep) => {
                        const reelId = ep.url.includes('/reel/') ? ep.url.split('/reel/')[1].split('/')[0] : '';
                        return (
                          <a
                            key={ep.url}
                            href={ep.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                          >
                            <div className="relative w-full overflow-hidden" style={{ paddingBottom: '120%' }}>
                              <iframe
                                className="absolute w-full border-0 pointer-events-none"
                                style={{ top: '-70px', left: 0, height: 'calc(100% + 140px)', width: '100%' }}
                                src={`https://www.instagram.com/reel/${reelId}/embed/`}
                                title={ep.title}
                                frameBorder="0"
                                scrolling="no"
                              />
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* Case Study Sections */}
              {work.caseStudySections && work.caseStudySections.length > 0 && (
                <div className="space-y-6">
                  {work.caseStudySections.map((section) => (
                    <div key={section.title} className="border-l-4 border-[#fa551e] pl-5">
                      <h3 className="text-lg font-bold text-[#1e1919] mb-2">{section.title}</h3>
                      <p className="text-[#736c64] leading-relaxed">{section.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Highlights */}
              {work.highlights && work.highlights.length > 0 && (
                <div>
                  {work.turningPointIntro && (
                    <div>
                      <h2 className="text-2xl font-bold text-[#1e1919] mb-4">The Turning Point</h2>
                      <p className="text-[#1e1919] font-semibold text-lg mb-4">{work.turningPointIntro}</p>
                    </div>
                  )}
                  <ul className="space-y-3">
                    {work.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-[#fa551e] to-[#ff8c19] flex-shrink-0" />
                        <span className="text-[#1e1919] font-bold text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Ongoing Work */}
              {work.ongoingWork && work.ongoingWork.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1e1919] mb-4">Where Things Stand Today</h2>
                  <p className="text-[#736c64] mb-4">The work didn't end with suppression. We continue to:</p>
                  <ul className="space-y-3 mb-4">
                    {work.ongoingWork.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-[#3dd3ee] to-[#b4dc19] flex-shrink-0" />
                        <span className="text-[#1e1919] font-medium text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {work.ongoingNote && (
                    <p className="text-[#736c64] italic font-medium">{work.ongoingNote}</p>
                  )}
                </div>
              )}

              {/* Insight Quote */}
              {work.insightQuote && (
                <div>
                  <h2 className="text-2xl font-bold text-[#1e1919] mb-4">The Insight</h2>
                  <div className="bg-gradient-to-br from-[#fa551e]/5 to-[#fad24b]/10 rounded-2xl p-6 border border-[#fa551e]/15">
                    <p className="text-[#1e1919] text-lg font-medium italic leading-relaxed">
                      "{work.insightQuote}"
                    </p>
                  </div>
                </div>
              )}

              {/* Project Images / Brand Identity */}
              {(() => {
                if (work.highlights) return null;
                if (work.gallery && work.gallery.length > 0) {
                  return (
                    <div>
                      <h2 className="text-2xl font-bold text-[#1e1919] mb-4">Brand Identity</h2>
                      <div className="space-y-6">
                        {work.gallery.map((img) => (
                          <div key={img} className="rounded-2xl overflow-hidden shadow-xl">
                            <img
                              src={img}
                              alt={`${work.title}`}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                );
              })()}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#fad24b]/20">
                <h3 className="text-lg font-bold text-[#1e1919] mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-[#736c64] uppercase tracking-wider mb-1">Client</p>
                    <p className="text-[#1e1919] font-semibold">{work.client}</p>
                  </div>
                  <div className="border-t border-[#f0ede9] pt-4">
                    <p className="text-xs text-[#736c64] uppercase tracking-wider mb-1">Category</p>
                    <Badge className="bg-gradient-to-r from-[#fa551e] to-[#ff8c19] text-white">
                      {work.category}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#fa551e] to-[#ff8c19] rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Like what you see?</h3>
                <p className="text-white/80 text-sm mb-4">Let's create something amazing for your brand too.</p>
                <Link to="/contact">
                  <Button className="w-full bg-white text-[#fa551e] hover:bg-[#fad24b] hover:text-[#1e1919] rounded-full font-semibold">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex justify-between items-center">
            {prevWork ? (
              <Link to={`/the-work/${prevWork.id}`} className="group flex items-center gap-3 hover:text-[#fa551e] transition-colors">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="text-xs text-[#736c64]">Previous</p>
                  <p className="font-semibold text-[#1e1919] group-hover:text-[#fa551e] transition-colors">{prevWork.title}</p>
                </div>
              </Link>
            ) : <div />}

            {nextWork ? (
              <Link to={`/the-work/${nextWork.id}`} className="group flex items-center gap-3 text-right hover:text-[#fa551e] transition-colors">
                <div>
                  <p className="text-xs text-[#736c64]">Next</p>
                  <p className="font-semibold text-[#1e1919] group-hover:text-[#fa551e] transition-colors">{nextWork.title}</p>
                </div>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkDetail;
