import { useEffect, useState } from 'react';
import { FileText, Database, ClipboardList, UserCheck, Code, ArrowRight } from 'lucide-react';

const steps = [
  { id: 'upload', label: '1. Upload Docs', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-100', border: 'border-blue-200' },
  { id: 'ingest', label: '2. Ingest Live Data', icon: Database, color: 'text-indigo-500', bg: 'bg-indigo-100', border: 'border-indigo-200' },
  { id: 'produce', label: '3. Produce Procedures', icon: ClipboardList, color: 'text-purple-500', bg: 'bg-purple-100', border: 'border-purple-200' },
  { id: 'approve', label: '4. Human Approval', icon: UserCheck, color: 'text-green-600', bg: 'bg-green-100', border: 'border-green-200' },
  { id: 'skills', label: '5. Skills Generated', icon: Code, color: 'text-orange-500', bg: 'bg-orange-100', border: 'border-orange-200' },
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
    <div className="relative w-full max-w-md mx-auto p-6 bg-white/80 backdrop-blur-xl rounded-3xl border border-[#e6e4df] shadow-2xl overflow-hidden">
      <div className="text-sm font-bold text-[#1c1a17] mb-6 uppercase tracking-wider">Kaybi Generation Pipeline</div>
      
      <div className="relative flex flex-col gap-4">
        {/* Connection Line */}
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200" />
        
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          const isPast = idx < activeStep;
          const Icon = step.icon;

          return (
            <div 
              key={step.id} 
              className={`relative z-10 flex items-center gap-4 transition-all duration-500 ${
                isActive ? 'opacity-100 translate-x-2' : isPast ? 'opacity-50' : 'opacity-30'
              }`}
            >
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                  isActive ? `${step.bg} ${step.border} scale-110 shadow-lg` : 'bg-gray-50 border-gray-200'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? step.color : 'text-gray-400'}`} />
              </div>
              
              <div className={`flex-1 p-3 rounded-xl border transition-all duration-500 ${
                isActive ? 'bg-white border-[#e6e4df] shadow-sm' : 'bg-transparent border-transparent'
              }`}>
                <span className={`font-semibold text-sm ${isActive ? '#1c1a17' : 'text-gray-500'}`}>
                  {step.label}
                </span>
                {isActive && (
                  <div className="mt-1 flex items-center text-xs text-gray-500 animate-fade-up">
                    Processing <ArrowRight className="w-3 h-3 ml-1 animate-pulse" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
