import React from 'react';

export default function NetworkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 opacity-[0.35]">
      <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.4" />
          </linearGradient>
          
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Paths */}
        <path id="path1" d="M 100 150 C 200 150, 250 100, 350 100 C 500 100, 600 200, 750 200 C 850 200, 900 150, 950 150" fill="none" stroke="url(#grad1)" strokeWidth="1.5" strokeDasharray="4,4" />
        <path id="path2" d="M 50 450 C 150 450, 250 500, 350 450 C 450 400, 550 400, 650 450 C 750 500, 850 450, 950 400" fill="none" stroke="url(#grad1)" strokeWidth="1.5" strokeDasharray="4,4" />
        <path id="path3" d="M 150 300 C 250 200, 350 300, 450 300 C 550 300, 600 200, 750 200" fill="none" stroke="url(#grad1)" strokeWidth="1.5" strokeDasharray="4,4" />

        {/* Animated Pulses along paths */}
        <circle r="4" fill="#0ea5e9" filter="url(#glow)">
          <animateMotion dur="8s" repeatCount="indefinite" path="M 100 150 C 200 150, 250 100, 350 100 C 500 100, 600 200, 750 200 C 850 200, 900 150, 950 150" />
        </circle>
        <circle r="4" fill="#14b8a6" filter="url(#glow)">
          <animateMotion dur="10s" repeatCount="indefinite" path="M 50 450 C 150 450, 250 500, 350 450 C 450 400, 550 400, 650 450 C 750 500, 850 450, 950 400" />
        </circle>
        <circle r="4" fill="#6366f1" filter="url(#glow)">
          <animateMotion dur="7s" repeatCount="indefinite" path="M 150 300 C 250 200, 350 300, 450 300 C 550 300, 600 200, 750 200" />
        </circle>
        
        {/* Nodes Path 1: File -> Notion -> Info -> Salesforce */}
        <g transform="translate(100, 150)">
          <circle r="20" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <circle r="20" fill="none" stroke="#0ea5e9" strokeWidth="1.5" className="animate-ping" style={{ animationDuration: '4s' }}/>
          <image href="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" x="-10" y="-10" width="20" height="20" />
        </g>
        <g transform="translate(350, 100)">
          <circle r="20" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <image href="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" x="-10" y="-10" width="20" height="20" />
        </g>
        <g transform="translate(750, 200)">
          <circle r="20" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <rect x="-6" y="-6" width="12" height="12" rx="2" fill="#94a3b8" />
        </g>
        <g transform="translate(950, 150)">
          <circle r="20" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <image href="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" x="-10" y="-10" width="20" height="20" />
        </g>

        {/* Nodes Path 2: Zendesk -> Confluence -> Info -> Slack */}
        <g transform="translate(50, 450)">
          <circle r="20" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <circle r="20" fill="none" stroke="#14b8a6" strokeWidth="1.5" className="animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }}/>
          <image href="https://cdn.simpleicons.org/zendesk/03363D" x="-10" y="-10" width="20" height="20" />
        </g>
        <g transform="translate(350, 450)">
          <circle r="20" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <image href="https://cdn.simpleicons.org/confluence/0052CC" x="-10" y="-10" width="20" height="20" />
        </g>
        <g transform="translate(650, 450)">
          <circle r="20" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <circle r="6" fill="#94a3b8" />
        </g>
        <g transform="translate(950, 400)">
          <circle r="20" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <image href="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" x="-10" y="-10" width="20" height="20" />
        </g>

        {/* Nodes Path 3 */}
        <g transform="translate(150, 300)">
          <circle r="20" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <circle r="20" fill="none" stroke="#6366f1" strokeWidth="1.5" className="animate-ping" style={{ animationDuration: '4.5s', animationDelay: '2s' }}/>
          <image href="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" x="-10" y="-10" width="20" height="20" />
        </g>
        <g transform="translate(450, 300)">
          <circle r="20" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <polygon points="-6,-6 6,-6 0,6" fill="#94a3b8" />
        </g>
      </svg>
    </div>
  );
}
