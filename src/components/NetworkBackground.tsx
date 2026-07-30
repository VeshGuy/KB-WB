

export default function NetworkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-white">
      <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#e2e8f0" />
          </pattern>
          <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1e293b" floodOpacity="0.08" />
          </filter>
          <radialGradient id="centerMaskGlow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="black" stopOpacity="0" />
            <stop offset="25%" stopColor="black" stopOpacity="0" />
            <stop offset="70%" stopColor="black" stopOpacity="1" />
            <stop offset="100%" stopColor="black" stopOpacity="1" />
          </radialGradient>
          <mask id="centerMask">
            <rect width="100%" height="100%" fill="url(#centerMaskGlow)" />
          </mask>
        </defs>

        <g mask="url(#centerMask)">
          {/* Dotted Grid Background */}
          <rect width="100%" height="100%" fill="url(#dotGrid)" />

        <g stroke="#a5b4fc" strokeWidth="1.5" fill="none">
          {/* Main web connecting joints */}
          <line x1="300" y1="300" x2="500" y2="250" />
          <line x1="500" y1="250" x2="800" y2="350" />
          <line x1="800" y1="350" x2="950" y2="600" />
          <line x1="950" y1="600" x2="700" y2="700" />
          <line x1="700" y1="700" x2="450" y2="650" />
          <line x1="450" y1="650" x2="300" y2="300" />
          <line x1="500" y1="250" x2="700" y2="100" />

          {/* Lines to Logo Nodes */}
          {/* Top Left Area */}
          <line x1="300" y1="300" x2="150" y2="180" />
          <line x1="300" y1="300" x2="100" y2="400" />
          <line x1="500" y1="250" x2="400" y2="100" />
          
          {/* Top Right Area */}
          <line x1="700" y1="100" x2="900" y2="120" />
          <line x1="800" y1="350" x2="1050" y2="280" />
          
          {/* Bottom Right Area */}
          <line x1="800" y1="350" x2="1100" y2="450" />
          <line x1="950" y1="600" x2="1050" y2="700" />
          <line x1="700" y1="700" x2="800" y2="850" />

          {/* Bottom Left Area */}
          <line x1="450" y1="650" x2="250" y2="750" />
          <line x1="450" y1="650" x2="150" y2="550" />
        </g>

        {/* Structural Joints (Small hollow circles) */}
        <g stroke="#a5b4fc" strokeWidth="1.5" fill="white">
          <circle cx="300" cy="300" r="5" />
          <circle cx="500" cy="250" r="5" />
          <circle cx="800" cy="350" r="5" />
          <circle cx="950" cy="600" r="5" />
          <circle cx="700" cy="700" r="5" />
          <circle cx="450" cy="650" r="5" />
          <circle cx="700" cy="100" r="5" />
        </g>

        {/* Logo Nodes */}
        <g filter="url(#nodeShadow)">
          {/* Notion */}
          <g transform="translate(150, 180)">
            <circle cx="0" cy="0" r="28" fill="white" />
            <image href="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" x="-14" y="-14" width="28" height="28" />
          </g>
          {/* Jira */}
          <g transform="translate(400, 100)">
            <circle cx="0" cy="0" r="28" fill="white" />
            <image href="https://cdn.simpleicons.org/jira/0052CC" x="-14" y="-14" width="28" height="28" />
          </g>
          {/* Google Sheets */}
          <g transform="translate(900, 120)">
            <circle cx="0" cy="0" r="28" fill="white" />
            <image href="https://cdn.simpleicons.org/googlesheets/34A853" x="-14" y="-14" width="28" height="28" />
          </g>
          {/* Confluence */}
          <g transform="translate(1050, 280)">
            <circle cx="0" cy="0" r="28" fill="white" />
            <image href="https://cdn.simpleicons.org/confluence/0052CC" x="-14" y="-14" width="28" height="28" />
          </g>
          {/* Slack */}
          <g transform="translate(1100, 450)">
            <circle cx="0" cy="0" r="28" fill="white" />
            <image href="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" x="-14" y="-14" width="28" height="28" />
          </g>
          {/* Microsoft Teams */}
          <g transform="translate(1050, 700)">
            <circle cx="0" cy="0" r="28" fill="white" />
            <image href="https://cdn.simpleicons.org/microsoftteams/6264A7" x="-14" y="-14" width="28" height="28" />
          </g>
          {/* Zendesk */}
          <g transform="translate(250, 750)">
            <circle cx="0" cy="0" r="28" fill="white" />
            <image href="https://cdn.simpleicons.org/zendesk/03363D" x="-14" y="-14" width="28" height="28" />
          </g>
          {/* Salesforce */}
          <g transform="translate(100, 400)">
            <circle cx="0" cy="0" r="28" fill="white" />
            <image href="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" x="-14" y="-14" width="28" height="28" />
          </g>
          {/* Asana */}
          <g transform="translate(150, 550)">
            <circle cx="0" cy="0" r="28" fill="white" />
            <image href="https://cdn.simpleicons.org/asana/F06A6A" x="-14" y="-14" width="28" height="28" />
          </g>
        </g>
        </g>
      </svg>
    </div>
  );
}
