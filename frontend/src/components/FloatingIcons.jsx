import React from 'react';

const shapeConfigs = {
  story: { accent: '#fad24b', shapes: ['circle', 'ring', 'dot', 'square', 'triangle', 'cross', 'line', 'diamond'] },
  capabilities: { accent: '#fad24b', shapes: ['hexagon', 'ring', 'dot', 'cross', 'triangle', 'circle', 'line', 'square'] },
  work: { accent: '#fff', shapes: ['square', 'circle', 'ring', 'triangle', 'dot', 'diamond', 'cross', 'line'] },
  brands: { accent: '#fff', shapes: ['diamond', 'ring', 'circle', 'dot', 'cross', 'triangle', 'line', 'square'] },
  contact: { accent: '#fad24b', shapes: ['ring', 'dot', 'triangle', 'circle', 'cross', 'square', 'diamond', 'line'] },
};

const Shape = ({ type, size, color, opacity }) => {
  const s = size;
  const border = Math.max(1.5, s * 0.12);

  switch (type) {
    case 'circle':
      return <div style={{ width: s, height: s, borderRadius: '50%', backgroundColor: color, opacity }} />;
    case 'ring':
      return <div style={{ width: s, height: s, borderRadius: '50%', border: `${border}px solid ${color}`, opacity }} />;
    case 'dot':
      return <div style={{ width: s * 0.4, height: s * 0.4, borderRadius: '50%', backgroundColor: color, opacity }} />;
    case 'square':
      return <div style={{ width: s * 0.7, height: s * 0.7, border: `${border}px solid ${color}`, opacity, transform: 'rotate(15deg)' }} />;
    case 'triangle':
      return (
        <div style={{
          width: 0, height: 0,
          borderLeft: `${s * 0.35}px solid transparent`,
          borderRight: `${s * 0.35}px solid transparent`,
          borderBottom: `${s * 0.6}px solid ${color}`,
          opacity
        }} />
      );
    case 'cross':
      return (
        <div style={{ position: 'relative', width: s * 0.6, height: s * 0.6, opacity }}>
          <div style={{ position: 'absolute', top: '45%', left: 0, right: 0, height: border * 1.5, backgroundColor: color }} />
          <div style={{ position: 'absolute', left: '45%', top: 0, bottom: 0, width: border * 1.5, backgroundColor: color }} />
        </div>
      );
    case 'diamond':
      return <div style={{ width: s * 0.5, height: s * 0.5, border: `${border}px solid ${color}`, transform: 'rotate(45deg)', opacity }} />;
    case 'line':
      return <div style={{ width: s * 0.8, height: border * 1.5, backgroundColor: color, opacity, transform: `rotate(${Math.random() * 60 - 30}deg)` }} />;
    case 'hexagon':
      return (
        <div style={{ width: s * 0.6, height: s * 0.6, opacity, position: 'relative' }}>
          <div style={{
            width: '100%', height: '100%',
            backgroundColor: color,
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            opacity: 0.6
          }} />
        </div>
      );
    default:
      return <div style={{ width: s * 0.3, height: s * 0.3, borderRadius: '50%', backgroundColor: color, opacity }} />;
  }
};

const FloatingIcons = ({ theme = 'story' }) => {
  const config = shapeConfigs[theme] || shapeConfigs.story;

  const items = Array.from({ length: 24 }, (_, i) => ({
    shape: config.shapes[i % config.shapes.length],
    top: `${(i % 5) * 18 + Math.random() * 12}%`,
    left: `${(i % 8) * 12 + Math.random() * 6}%`,
    size: Math.random() * 24 + 14,
    duration: Math.random() * 8 + 10,
    delay: Math.random() * 6,
    opacity: Math.random() * 0.25 + 0.1,
    animIndex: i % 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((item, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: item.top,
            left: item.left,
            animation: `shapeFloat${item.animIndex} ${item.duration}s ease-in-out ${item.delay}s infinite`,
          }}
        >
          <Shape
            type={item.shape}
            size={item.size}
            color="white"
            opacity={item.opacity}
          />
        </div>
      ))}

      <style>{`
        @keyframes shapeFloat0 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(-22px) translateX(12px) rotate(15deg); }
          66% { transform: translateY(-10px) translateX(-8px) rotate(-10deg); }
        }
        @keyframes shapeFloat1 {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          25% { transform: translateY(-18px) translateX(-14px) scale(1.15); }
          50% { transform: translateY(-30px) translateX(6px) scale(0.9); }
          75% { transform: translateY(-12px) translateX(10px) scale(1.1); }
        }
        @keyframes shapeFloat2 {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          40% { transform: translateY(-26px) rotate(25deg) scale(1.1); }
          80% { transform: translateY(-8px) rotate(-15deg) scale(0.95); }
        }
        @keyframes shapeFloat3 {
          0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
          30% { transform: translateX(16px) translateY(-20px) rotate(12deg); }
          60% { transform: translateX(-10px) translateY(-32px) rotate(-8deg); }
          90% { transform: translateX(8px) translateY(-14px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

export default FloatingIcons;
