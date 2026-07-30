import { useEffect, useState } from 'react';
import { BookOpen } from 'lucide-react';

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
    <div key={key} className="w-full aspect-video rounded-2xl bg-white relative overflow-hidden flex items-center justify-center border border-line">
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
          <pattern id="dotGridSmall" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#e2e8f0" />
          </pattern>
          <filter id="nodeShadowSmall" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#1e293b" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Dotted Grid */}
        <rect width="100%" height="100%" fill="url(#dotGridSmall)" />

        {/* Existing Edges */}
        <g stroke="#a5b4fc" strokeWidth="1.5">
          <line x1="100" y1="80" x2="220" y2="160" />
          <line x1="120" y1="260" x2="220" y2="160" />
          <line x1="500" y1="90" x2="400" y2="200" />
          <line x1="480" y1="270" x2="400" y2="200" />
        </g>

        {/* Animated Edges (shooting FROM 300, 170 to existing nodes) */}
        <line x1="300" y1="170" x2="220" y2="160" 
          stroke="#10b981" strokeWidth="2" 
          strokeDasharray="100" strokeDashoffset="100"
          className="animate-draw-line animate-glow"
          style={{ animationDelay: '0.6s' }}
        />
        <line x1="300" y1="170" x2="400" y2="200" 
          stroke="#10b981" strokeWidth="2" 
          strokeDasharray="120" strokeDashoffset="120"
          className="animate-draw-line animate-glow"
          style={{ animationDelay: '0.8s' }}
        />
        <line x1="300" y1="170" x2="120" y2="260" 
          stroke="#10b981" strokeWidth="2" 
          strokeDasharray="250" strokeDashoffset="250"
          className="animate-draw-line animate-glow"
          style={{ animationDelay: '1.0s' }}
        />
        <line x1="300" y1="170" x2="500" y2="90" 
          stroke="#10b981" strokeWidth="2" 
          strokeDasharray="250" strokeDashoffset="250"
          className="animate-draw-line animate-glow"
          style={{ animationDelay: '1.2s' }}
        />
        <line x1="300" y1="170" x2="100" y2="80" 
          stroke="#10b981" strokeWidth="2" 
          strokeDasharray="250" strokeDashoffset="250"
          className="animate-draw-line animate-glow"
          style={{ animationDelay: '1.4s' }}
        />

        {/* Structural Joints */}
        <g stroke="#a5b4fc" strokeWidth="1.5" fill="white">
          <circle cx="220" cy="160" r="3" />
          <circle cx="400" cy="200" r="3" />
        </g>

        {/* Existing Logo Nodes */}
        <g filter="url(#nodeShadowSmall)">
          {/* Salesforce */}
          <g transform="translate(100, 80)">
            <circle cx="0" cy="0" r="16" fill="white" />
            <image href="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" x="-8" y="-8" width="16" height="16" />
          </g>
          {/* Notion */}
          <g transform="translate(120, 260)">
            <circle cx="0" cy="0" r="16" fill="white" />
            <image href="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" x="-8" y="-8" width="16" height="16" />
          </g>
          {/* Slack */}
          <g transform="translate(500, 90)">
            <circle cx="0" cy="0" r="16" fill="white" />
            <image href="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" x="-8" y="-8" width="16" height="16" />
          </g>
          {/* Google Sheets */}
          <g transform="translate(480, 270)">
            <circle cx="0" cy="0" r="16" fill="white" />
            <image href="https://cdn.simpleicons.org/googlesheets/34A853" x="-8" y="-8" width="16" height="16" />
          </g>
        </g>

        {/* Central Animated Node */}
        <g className="animate-node-pop" style={{ transformOrigin: '300px 170px', opacity: 0 }}>
          <circle cx="300" cy="170" r="28" fill="white" filter="url(#nodeShadowSmall)" />
          <circle cx="300" cy="170" r="28" fill="none" stroke="#10b981" strokeWidth="2" className="animate-glow" />
        </g>
      </svg>
      {/* Kaybi Logo overlay for the central node */}
      <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
        <div className="animate-node-pop flex items-center justify-center text-[#10b981]" style={{ opacity: 0 }}>
          <BookOpen className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
