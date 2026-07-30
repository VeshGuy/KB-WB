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
        .animate-edge-1 {
          animation: drawLine 0.8s ease-out 0.8s forwards, pulseGlow 2s ease-in-out 0.8s infinite alternate;
        }
        .animate-edge-2 {
          animation: drawLine 0.8s ease-out 1.0s forwards, pulseGlow 2s ease-in-out 1.0s infinite alternate;
        }
        .animate-edge-3 {
          animation: drawLine 0.8s ease-out 1.2s forwards, pulseGlow 2s ease-in-out 1.2s infinite alternate;
        }
        .animate-edge-4 {
          animation: drawLine 0.8s ease-out 1.4s forwards, pulseGlow 2s ease-in-out 1.4s infinite alternate;
        }
        .animate-edge-5 {
          animation: drawLine 0.8s ease-out 1.2s forwards, pulseGlow 2s ease-in-out 1.2s infinite alternate;
        }
        .animate-edge-6 {
          animation: drawLine 0.8s ease-out 1.4s forwards, pulseGlow 2s ease-in-out 1.4s infinite alternate;
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

        {/* Existing Edges (From peripheral nodes to the apps) */}
        <g stroke="#a5b4fc" strokeWidth="1.5">
          {/* To Salesforce at 200, 125 */}
          <line x1="100" y1="80" x2="200" y2="125" />
          <line x1="250" y1="60" x2="200" y2="125" />
          
          {/* To Notion at 210, 215 */}
          <line x1="120" y1="260" x2="210" y2="215" />
          <line x1="80" y1="170" x2="210" y2="215" />

          {/* To Slack at 400, 130 */}
          <line x1="500" y1="90" x2="400" y2="130" />
          <line x1="350" y1="50" x2="400" y2="130" />

          {/* To Sheets at 390, 220 */}
          <line x1="480" y1="270" x2="390" y2="220" />
          <line x1="310" y1="300" x2="390" y2="220" />
          <line x1="540" y1="160" x2="390" y2="220" />
        </g>

        {/* Animated Edges (Growing from the apps to join the new central node at 300,170) */}
        <line x1="210" y1="215" x2="300" y2="170" 
          stroke="#10b981" strokeWidth="2" 
          strokeDasharray="150" strokeDashoffset="150"
          className="animate-edge-2"
        />
        <line x1="400" y1="130" x2="300" y2="170" 
          stroke="#10b981" strokeWidth="2" 
          strokeDasharray="150" strokeDashoffset="150"
          className="animate-edge-3"
        />
        <line x1="390" y1="220" x2="300" y2="170" 
          stroke="#10b981" strokeWidth="2" 
          strokeDasharray="150" strokeDashoffset="150"
          className="animate-edge-4"
        />

        {/* Animated Edges between peripheral nodes (PDF and n8n) */}
        <line x1="100" y1="80" x2="80" y2="170" 
          stroke="#10b981" strokeWidth="2" 
          strokeDasharray="150" strokeDashoffset="150"
          className="animate-edge-5"
        />
        <line x1="500" y1="90" x2="540" y2="160" 
          stroke="#10b981" strokeWidth="2" 
          strokeDasharray="150" strokeDashoffset="150"
          className="animate-edge-6"
        />

        {/* Structural Blank Nodes (End points) */}
        <g stroke="#a5b4fc" strokeWidth="2" fill="white">
          <circle cx="100" cy="80" r="8" />
          <circle cx="250" cy="60" r="8" />

          <circle cx="120" cy="260" r="8" />
          <circle cx="80" cy="170" r="8" />

          <circle cx="500" cy="90" r="8" />
          <circle cx="350" cy="50" r="8" />

          <circle cx="480" cy="270" r="8" />
          <circle cx="310" cy="300" r="8" />
          <circle cx="540" cy="160" r="8" />
        </g>

        {/* App Logos placed ON THE EDGES (Lines) */}
        <g filter="url(#nodeShadowSmall)">
          {/* Salesforce on the line between 100,80 and 300,170 (Midpoint: 200, 125) */}
          <g transform="translate(200, 125)">
            <circle cx="0" cy="0" r="16" fill="white" />
            <image href="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" x="-8" y="-8" width="16" height="16" />
          </g>
          {/* Notion on the line between 120,260 and 300,170 (Midpoint: 210, 215) */}
          <g transform="translate(210, 215)">
            <circle cx="0" cy="0" r="16" fill="white" />
            <image href="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" x="-8" y="-8" width="16" height="16" />
          </g>
          {/* Slack on the line between 500,90 and 300,170 (Midpoint: 400, 130) */}
          <g transform="translate(400, 130)">
            <circle cx="0" cy="0" r="16" fill="white" />
            <image href="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" x="-8" y="-8" width="16" height="16" />
          </g>
          {/* Google Sheets on the line between 480,270 and 300,170 (Midpoint: 390, 220) */}
          <g transform="translate(390, 220)">
            <circle cx="0" cy="0" r="16" fill="white" />
            <image href="https://cdn.simpleicons.org/googlesheets/34A853" x="-8" y="-8" width="16" height="16" />
          </g>
          {/* PDF App Node between 100,80 and 80,170 (Midpoint: 90, 125) */}
          <g transform="translate(90, 125)">
            <g className="animate-node-pop" style={{ opacity: 0, animationDelay: '1.2s', transformOrigin: 'center' }}>
              <circle cx="0" cy="0" r="16" fill="white" />
              <image href="https://cdn.simpleicons.org/adobeacrobatreader/EC1C24" x="-8" y="-8" width="16" height="16" />
            </g>
          </g>
          {/* n8n App Node between 500,90 and 540,160 (Midpoint: 520, 125) */}
          <g transform="translate(520, 125)">
            <g className="animate-node-pop" style={{ opacity: 0, animationDelay: '1.4s', transformOrigin: 'center' }}>
              <circle cx="0" cy="0" r="16" fill="white" />
              <image href="https://cdn.simpleicons.org/n8n/EA4B71" x="-8" y="-8" width="16" height="16" />
            </g>
          </g>
        </g>

        {/* Central Animated Node */}
        <g className="animate-node-pop" style={{ transformOrigin: '300px 170px', opacity: 0, animationDelay: '0.2s' }}>
          <circle cx="300" cy="170" r="28" fill="white" filter="url(#nodeShadowSmall)" />
          <circle cx="300" cy="170" r="28" fill="none" stroke="#10b981" strokeWidth="2" className="animate-glow" />
        </g>
      </svg>
      {/* Kaybi Logo overlay for the central node */}
      <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
        <div className="animate-node-pop flex items-center justify-center text-[#10b981]" style={{ opacity: 0, animationDelay: '0.2s' }}>
          <BookOpen className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
