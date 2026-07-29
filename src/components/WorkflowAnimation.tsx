import { useEffect, useState } from 'react';
import { FileText, Database, ClipboardList, UserCheck, Code, ArrowRight } from 'lucide-react';

const steps = [
  { id: 'upload', label: 'Upload Docs', icon: FileText, badgeTone: 'blue', badgeText: 'running' },
  { id: 'ingest', label: 'Ingest Live Data', icon: Database, badgeTone: 'indigo', badgeText: 'running' },
  { id: 'produce', label: 'Produce Procedures', icon: ClipboardList, badgeTone: 'purple', badgeText: 'generating' },
  { id: 'approve', label: 'Human Approval', icon: UserCheck, badgeTone: 'amber', badgeText: 'pending' },
  { id: 'skills', label: 'Skills Generated', icon: Code, badgeTone: 'emerald', badgeText: 'publishing' },
];

export default function WorkflowAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1500); // 1.5 seconds per step
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto rounded-xl border border-line bg-surface shadow-xl font-sans text-left overflow-hidden">
      {/* MVP Style Header */}
      <div className="bg-paper border-b border-line px-5 py-4 flex items-center justify-between shrink-0">
        <div>
          <h3 className="font-bold text-ink">Pipeline Status</h3>
          <p className="text-xs text-muted">Real-time generation workflow</p>
        </div>
      </div>
      
      <div className="relative flex flex-col p-6">
        {/* Connection Line: Centered precisely at 1.5rem (left-6) + 24px (half of w-12) - 1px (half of line width) = 23px */}
        <div className="absolute left-[47px] top-10 bottom-10 w-0.5 bg-line z-0" />
        
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          const isPast = idx < activeStep;
          const Icon = step.icon;

          // Color logic without CSS opacity (so line doesn't bleed through)
          const circleBg = isActive ? 'bg-white shadow-md border-ink' : isPast ? 'bg-surface border-line' : 'bg-surface border-transparent';
          const iconColor = isActive ? 'text-ink' : isPast ? 'text-muted' : 'text-faint';
          const textColor = isActive ? 'text-ink font-semibold' : isPast ? 'text-muted' : 'text-faint';

          return (
            <div 
              key={step.id} 
              className={`relative z-10 flex items-center gap-4 transition-all duration-500 py-3 ${isActive ? 'translate-x-1' : ''}`}
            >
              {/* Circle */}
              <div 
                className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${circleBg} ${isActive ? 'scale-105' : ''}`}
              >
                <Icon className={`w-5 h-5 transition-colors duration-500 ${iconColor}`} />
              </div>
              
              {/* Content */}
              <div className={`flex-1 flex items-center justify-between transition-all duration-500`}>
                <span className={`text-sm ${textColor} transition-colors duration-500`}>
                  {step.label}
                </span>
                
                {/* MVP Style Badge for active state */}
                <div className={`transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 overflow-hidden h-0'}`}>
                  {isActive && (
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-700 animate-pulse`}>
                      {step.badgeText}
                    </span>
                  )}
                </div>
                
                {/* Completed Check for past states */}
                {isPast && (
                  <span className="text-[11px] font-semibold text-muted">
                    done
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
