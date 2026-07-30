import { useEffect, useState } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import WorkflowAnimation from './WorkflowAnimation';
import MockDashboard from './MockDashboard';

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2500); // Increased to 2.5s so we can read the dashboard mockups
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 pb-32 text-center overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-weak/50 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1100px] mx-auto px-6 animate-fade-up">
        
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface border border-line-strong mb-8 text-sm font-semibold text-muted shadow-sm hover:shadow-md transition-shadow cursor-default">
          <span className="text-accent-ink mr-2">Now in private beta</span>
          <span className="text-faint mx-2">|</span>
          <span>Built for ops-heavy teams</span>
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-[5rem] max-w-[900px] mx-auto font-bold font-serif text-ink leading-[1.05] tracking-tight mb-8">
          One trusted source of operations for your AI to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-ink to-teal-400">work from</span>.
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted max-w-[650px] mx-auto mb-12 leading-relaxed">
          Your AI follows your approved procedures step by step instead of improvising. And you can see exactly what it did.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="https://calendly.com/kaybi/teardown" className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-base font-semibold bg-accent-ink text-white hover:bg-[#115e59] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-ink/20 transition-all duration-200">
            Book a Teardown <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a href="mailto:hello@kaybi.com" className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-base font-semibold bg-surface text-ink border border-line-strong hover:bg-paper hover:border-muted shadow-sm hover:shadow-md transition-all duration-200">
            <PlayCircle className="w-5 h-5 mr-2 text-muted" /> Watch Demo
          </a>
        </div>

        {/* Not a chatbot beat */}
        <div className="mt-8 text-sm text-muted font-medium bg-surface/50 border border-line-strong inline-block px-5 py-2.5 rounded-xl">
          A chatbot answers questions when asked. Kaybi makes sure the work runs the right way, whether anyone asks or not.
        </div>
        
        {/* Hero Image Container */}
        <div className="mt-24 px-4 sm:px-0">
          <div className="relative rounded-2xl border border-line-strong bg-surface p-2 shadow-2xl shadow-ink/5 mx-auto max-w-[1040px]">
            <div className="absolute inset-0 bg-gradient-to-t from-paper/40 to-transparent rounded-2xl pointer-events-none" />
            <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50/50 p-8 rounded-xl border border-line-strong min-h-[400px]">
              <div className="flex-1 w-full relative z-10">
                <WorkflowAnimation activeStep={activeStep} />
              </div>
              <div className="flex-[1.2] w-full h-[440px] relative z-10">
                <MockDashboard activeStep={activeStep} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
