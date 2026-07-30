import { useEffect, useState } from 'react';

export default function NetworkUpdateAnimation() {
  const [key, setKey] = useState(0);

  // Re-trigger animation every 5 seconds to loop it
  useEffect(() => {
    const interval = setInterval(() => {
      setKey(k => k + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div key={key} className="w-full aspect-video rounded-2xl border-2 border-line-strong bg-paper relative overflow-hidden flex items-center justify-center">
      <style>{`
        @keyframes popIn {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(16, 185, 129, 0.4)); }
          50% { filter: drop-shadow(0 0 12px rgba(16, 185, 129, 0.9)); }
        }
        .animate-node-pop {
          animation: popIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-draw-line {
          animation: drawLine 0.8s ease-out forwards;
        }
        .animate-glow {
          animation: pulseGlow 2s ease-in-out infinite alternate;
        }
      `}</style>
      
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 340">
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Existing Edges */}
        <line x1="100" y1="80" x2="220" y2="160" stroke="#ddd6c9" strokeWidth="2" />
        <line x1="120" y1="260" x2="220" y2="160" stroke="#ddd6c9" strokeWidth="2" />
        <line x1="500" y1="90" x2="400" y2="200" stroke="#ddd6c9" strokeWidth="2" />
        <line x1="480" y1="270" x2="400" y2="200" stroke="#ddd6c9" strokeWidth="2" />

        {/* Animated Edges (shooting to 300, 170) */}
        {/* From 220,160 -> dist approx 80 */}
        <line x1="220" y1="160" x2="300" y2="170" 
          stroke="#10b981" strokeWidth="3" 
          strokeDasharray="100" strokeDashoffset="100"
          className="animate-draw-line animate-glow"
          style={{ animationDelay: '0.6s' }}
        />
        {/* From 400,200 -> dist approx 100 */}
        <line x1="400" y1="200" x2="300" y2="170" 
          stroke="#10b981" strokeWidth="3" 
          strokeDasharray="120" strokeDashoffset="120"
          className="animate-draw-line animate-glow"
          style={{ animationDelay: '0.8s' }}
        />
        {/* From 120,260 -> dist approx 200 */}
        <line x1="120" y1="260" x2="300" y2="170" 
          stroke="#10b981" strokeWidth="3" 
          strokeDasharray="250" strokeDashoffset="250"
          className="animate-draw-line animate-glow"
          style={{ animationDelay: '1.0s' }}
        />
        {/* From 500,90 -> dist approx 220 */}
        <line x1="500" y1="90" x2="300" y2="170" 
          stroke="#10b981" strokeWidth="3" 
          strokeDasharray="250" strokeDashoffset="250"
          className="animate-draw-line animate-glow"
          style={{ animationDelay: '1.2s' }}
        />
        
        {/* From 100,80 -> dist approx 220 */}
        <line x1="100" y1="80" x2="300" y2="170" 
          stroke="#10b981" strokeWidth="3" 
          strokeDasharray="250" strokeDashoffset="250"
          className="animate-draw-line animate-glow"
          style={{ animationDelay: '1.4s' }}
        />

        {/* Existing Nodes */}
        <circle cx="100" cy="80" r="20" fill="transparent" stroke="#1c1a17" strokeWidth="3" />
        <circle cx="120" cy="260" r="20" fill="transparent" stroke="#1c1a17" strokeWidth="3" />
        <circle cx="220" cy="160" r="26" fill="transparent" stroke="#1c1a17" strokeWidth="3" />
        <circle cx="500" cy="90" r="20" fill="transparent" stroke="#1c1a17" strokeWidth="3" />
        <circle cx="480" cy="270" r="24" fill="transparent" stroke="#1c1a17" strokeWidth="3" />
        <circle cx="400" cy="200" r="26" fill="transparent" stroke="#1c1a17" strokeWidth="3" />

        {/* Central Animated Node */}
        <g className="animate-node-pop" style={{ transformOrigin: '300px 170px', opacity: 0 }}>
          <circle cx="300" cy="170" r="50" fill="url(#nodeGlow)" />
          <circle cx="300" cy="170" r="32" fill="#10b981" stroke="#1c1a17" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}
