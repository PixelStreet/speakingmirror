import React, { useState, useEffect } from 'react';

const RaceIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState('countdown'); // countdown, racing, winning, fadeout
  const [countdown, setCountdown] = useState(3);
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    if (skipped) return;

    // Countdown: 3, 2, 1, GO
    const countdownTimer = setTimeout(() => {
      if (countdown > 1) {
        setCountdown(prev => prev - 1);
      } else if (countdown === 1) {
        setCountdown(0); // GO
        setTimeout(() => setPhase('racing'), 600);
      }
    }, 800);

    return () => clearTimeout(countdownTimer);
  }, [countdown, skipped]);

  useEffect(() => {
    if (skipped) return;
    let timer;
    if (phase === 'racing') {
      timer = setTimeout(() => setPhase('winning'), 4000);
    } else if (phase === 'winning') {
      timer = setTimeout(() => setPhase('fadeout'), 2500);
    } else if (phase === 'fadeout') {
      timer = setTimeout(() => onComplete(), 1000);
    }
    return () => { if (timer) clearTimeout(timer); };
  }, [phase, skipped, onComplete]);

  const handleSkip = () => {
    setSkipped(true);
    onComplete();
  };

  const cars = [
    { 
      name: 'Speaking Mirror', 
      color: 'linear-gradient(135deg, #fa551e, #ff8c19, #fad24b)', 
      lane: 0, 
      isWinner: true,
      icons: ['#', '@', '~'],
      delay: 0
    },
    { 
      name: 'Agency B', 
      color: 'linear-gradient(135deg, #6b7280, #9ca3af)', 
      lane: 1, 
      isWinner: false,
      icons: ['?', '!', '.'],
      delay: 0.3
    },
    { 
      name: 'Agency C', 
      color: 'linear-gradient(135deg, #3b82f6, #60a5fa)', 
      lane: 2, 
      isWinner: false,
      icons: ['+', '-', '='],
      delay: 0.6
    },
    { 
      name: 'Agency D', 
      color: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', 
      lane: 3, 
      isWinner: false,
      icons: ['*', '&', '%'],
      delay: 0.5
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        opacity: phase === 'fadeout' ? 0 : 1,
        transition: 'opacity 1s ease-out'
      }}
    >
      {/* Skip Button */}
      <button
        onClick={handleSkip}
        data-testid="skip-intro-btn"
        className="absolute top-6 right-8 z-50 px-5 py-2 text-sm font-semibold text-white/60 hover:text-white border border-white/20 hover:border-white/50 rounded-full transition-all hover:bg-white/10"
      >
        Skip
      </button>

      {/* Starfield Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.6 + 0.2,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + 's'
            }}
          />
        ))}
      </div>

      {/* Countdown Phase */}
      {phase === 'countdown' && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div 
            className="text-center"
            key={countdown}
            style={{
              animation: 'countPulse 0.8s ease-out'
            }}
          >
            {countdown > 0 ? (
              <span 
                className="text-[12rem] font-black"
                style={{
                  background: 'linear-gradient(135deg, #fa551e, #fad24b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 40px rgba(250,85,30,0.5))'
                }}
              >
                {countdown}
              </span>
            ) : (
              <span 
                className="text-[8rem] font-black tracking-wider"
                style={{
                  background: 'linear-gradient(135deg, #fa551e, #ff8c19, #fad24b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 60px rgba(250,85,30,0.6))'
                }}
              >
                GO!
              </span>
            )}
          </div>
        </div>
      )}

      {/* Race Track */}
      {(phase === 'racing' || phase === 'winning' || phase === 'fadeout') && (
        <div className="absolute inset-0 flex flex-col justify-center z-20">
          {/* Track Title */}
          <div className="text-center mb-8">
            <p className="text-white/40 text-sm tracking-[0.3em] uppercase font-semibold">The Brand Race</p>
          </div>

          {/* Race Lanes */}
          <div className="relative w-full px-8">
            {/* Finish Line */}
            <div 
              className="absolute right-[15%] top-0 bottom-0 w-1 z-10"
              style={{
                background: 'repeating-linear-gradient(180deg, #fff 0px, #fff 12px, #000 12px, #000 24px)',
                opacity: 0.6,
                height: `${cars.length * 90 + 20}px`
              }}
            />
            <div 
              className="absolute right-[15%] top-[-20px] z-10 text-white/50 text-xs font-bold tracking-widest"
              style={{ transform: 'translateX(50%)' }}
            >
              FINISH
            </div>

            {/* Cars */}
            {cars.map((car, index) => (
              <div 
                key={index} 
                className="relative h-[80px] mb-2 flex items-center"
              >
                {/* Lane Line */}
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/10" />

                {/* Car */}
                <div
                  className="absolute flex items-center gap-3 z-20"
                  style={{
                    left: phase === 'countdown' ? '2%' : 'auto',
                    animation: phase === 'racing' || phase === 'winning' || phase === 'fadeout'
                      ? `${car.isWinner ? 'raceWinner' : 'raceLoser'} ${car.isWinner ? '4s' : '4s'} cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`
                      : 'none',
                    animationDelay: `${car.delay}s`
                  }}
                >
                  {/* Speed Lines */}
                  <div className="absolute -left-16 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-0"
                    style={{
                      animation: phase !== 'countdown' ? 'speedLines 0.3s ease-out 1s forwards' : 'none'
                    }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i} 
                        className="h-[2px] bg-gradient-to-l from-white/40 to-transparent"
                        style={{ width: 20 + Math.random() * 30 + 'px' }}
                      />
                    ))}
                  </div>

                  {/* Car Body */}
                  <div 
                    className="relative flex items-center rounded-lg px-4 py-2 shadow-2xl"
                    style={{ 
                      background: car.color,
                      minWidth: car.isWinner ? '180px' : '140px',
                      height: car.isWinner ? '50px' : '42px',
                      boxShadow: car.isWinner 
                        ? '0 0 30px rgba(250,85,30,0.5), 0 0 60px rgba(250,85,30,0.2)' 
                        : '0 4px 15px rgba(0,0,0,0.3)'
                    }}
                  >
                    {/* Car Icons */}
                    <div className="flex gap-2 text-white/80 text-xs font-bold">
                      {car.isWinner ? (
                        <>
                          <span className="bg-white/20 rounded px-1.5 py-0.5">SM</span>
                          <span className="bg-white/20 rounded px-1.5 py-0.5">500+</span>
                          <span className="bg-white/20 rounded px-1.5 py-0.5">1K+</span>
                        </>
                      ) : (
                        car.icons.map((icon, i) => (
                          <span key={i} className="bg-white/15 rounded px-1.5 py-0.5 text-white/50">{icon}</span>
                        ))
                      )}
                    </div>

                    {/* Wheels */}
                    <div 
                      className="absolute -bottom-2 left-4 w-5 h-5 rounded-full bg-[#333] border-2 border-[#666]"
                      style={{ animation: phase !== 'countdown' ? 'spin 0.3s linear infinite' : 'none' }}
                    >
                      <div className="absolute inset-1 rounded-full border border-[#888]" />
                    </div>
                    <div 
                      className="absolute -bottom-2 right-4 w-5 h-5 rounded-full bg-[#333] border-2 border-[#666]"
                      style={{ animation: phase !== 'countdown' ? 'spin 0.3s linear infinite' : 'none' }}
                    >
                      <div className="absolute inset-1 rounded-full border border-[#888]" />
                    </div>

                    {/* Exhaust for winner */}
                    {car.isWinner && phase === 'racing' && (
                      <div className="absolute -left-6 top-1/2 -translate-y-1/2">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-3 h-3 rounded-full bg-white/20"
                            style={{
                              animation: `exhaust ${0.5 + Math.random() * 0.5}s ease-out infinite`,
                              animationDelay: `${i * 0.1}s`,
                              top: `${(Math.random() - 0.5) * 20}px`
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Car Label */}
                  {car.isWinner && (
                    <span className="text-white font-bold text-sm whitespace-nowrap ml-2 drop-shadow-lg">
                      Speaking Mirror
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Winning Message */}
          {phase === 'winning' && (
            <div 
              className="text-center mt-12 z-30"
              style={{ animation: 'fadeInUp 0.8s ease-out forwards' }}
            >
              {/* Confetti */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-3 rounded-sm"
                    style={{
                      background: ['#fa551e', '#ff8c19', '#fad24b', '#3dd3ee', '#b4dc19', '#fff'][i % 6],
                      left: `${Math.random() * 100}%`,
                      top: '-10px',
                      animation: `confetti ${2 + Math.random() * 2}s ease-in forwards`,
                      animationDelay: `${Math.random() * 0.5}s`,
                      transform: `rotate(${Math.random() * 360}deg)`
                    }}
                  />
                ))}
              </div>

              <p className="text-white/50 text-sm tracking-[0.3em] uppercase mb-3">Winner</p>
              <h2 
                className="text-4xl md:text-6xl font-black mb-3"
                style={{
                  background: 'linear-gradient(135deg, #fa551e, #ff8c19, #fad24b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 30px rgba(250,85,30,0.4))'
                }}
              >
                Speaking Mirror
              </h2>
              <p className="text-white/60 text-lg">Your brand deserves to be #1</p>
            </div>
          )}
        </div>
      )}

      {/* Inline Styles for Animations */}
      <style>{`
        @keyframes countPulse {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes raceWinner {
          0% { left: 2%; }
          30% { left: 35%; }
          60% { left: 55%; }
          80% { left: 70%; }
          100% { left: 78%; }
        }

        @keyframes raceLoser {
          0% { left: 2%; }
          30% { left: 25%; }
          60% { left: 40%; }
          80% { left: 50%; }
          100% { left: 55%; }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes exhaust {
          0% { opacity: 0.4; transform: translateX(0) scale(1); }
          100% { opacity: 0; transform: translateX(-30px) scale(2); }
        }

        @keyframes speedLines {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }

        @keyframes confetti {
          0% { 
            top: -10px; 
            opacity: 1; 
            transform: translateX(0) rotate(0deg); 
          }
          100% { 
            top: 100vh; 
            opacity: 0; 
            transform: translateX(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 100}px) rotate(${Math.random() * 720}deg); 
          }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default RaceIntro;
