import React, { useEffect, useRef } from 'react';

const MarketingAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const elements = [];

    // Marketing-themed icons and elements
    const icons = [
      // Social Media
      { symbol: '❤️', category: 'like' },
      { symbol: '👍', category: 'thumbs' },
      { symbol: '💬', category: 'comment' },
      { symbol: '📱', category: 'mobile' },
      { symbol: '📸', category: 'camera' },
      { symbol: '🎬', category: 'video' },
      { symbol: '✨', category: 'sparkle' },
      { symbol: '⭐', category: 'star' },
      { symbol: '📈', category: 'growth' },
      { symbol: '🎯', category: 'target' },
      { symbol: '💡', category: 'idea' },
      { symbol: '🚀', category: 'rocket' },
      { symbol: '🔥', category: 'trending' },
      { symbol: '📊', category: 'analytics' },
      { symbol: '💭', category: 'thought' },
      { symbol: '✏️', category: 'content' },
      { symbol: '🎨', category: 'design' },
      { symbol: '📢', category: 'megaphone' },
      // Numbers for engagement
      { symbol: '1K', category: 'number' },
      { symbol: '10K', category: 'number' },
      { symbol: '+99', category: 'number' },
      { symbol: '↑', category: 'arrow' },
    ];

    class FloatingElement {
      constructor() {
        const icon = icons[Math.floor(Math.random() * icons.length)];
        this.symbol = icon.symbol;
        this.category = icon.category;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 15;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.4 + 0.3;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

        // Keep within bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        ctx.font = `${this.size}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Add subtle glow
        ctx.shadowColor = 'rgba(255, 255, 255, 0.3)';
        ctx.shadowBlur = 10;
        
        ctx.fillText(this.symbol, 0, 0);
        ctx.restore();
      }
    }

    // Initialize elements
    for (let i = 0; i < 25; i++) {
      elements.push(new FloatingElement());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      elements.forEach(element => {
        element.update();
        element.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default MarketingAnimation;
