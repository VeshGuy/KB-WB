import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import WorkflowAnimation from './WorkflowAnimation';
import MockDashboard from './MockDashboard';
import NetworkBackground from './NetworkBackground';

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2500); // Increased to 2.5s so we can read the dashboard mockups
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-20 md:pt-28 pb-16 md:pb-32 text-center overflow-hidden">
      <NetworkBackground />
      {/* Subtle Background Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-weak/50 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1100px] mx-auto px-6 animate-fade-up">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-[5rem] max-w-[1000px] mx-auto font-bold font-serif text-ink leading-[1.15] md:leading-[1.05] tracking-tight mb-6 md:mb-8 mt-8 md:mt-12">
          The <span className="relative inline-block md:whitespace-nowrap">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-ink to-teal-400">Operations Context Layer</span>
            <svg className="hidden md:block absolute -bottom-1 left-0 w-full h-4 text-teal-400/80" viewBox="0 0 200 15" fill="none" preserveAspectRatio="none">
              <path d="M 2 12 Q 50 2 100 8 T 198 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </span>
          <br className="hidden md:block" /> your AI needs before it acts.
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted max-w-[700px] mx-auto mb-12 leading-relaxed">
          Kaybi holds your company's operations in one place,<br className="hidden sm:block" /> so your AI doesn't go <span className="text-[#10b981] font-medium">Oops!</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="https://calendly.com/kaybi/teardown" className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold bg-accent-ink text-white hover:bg-[#115e59] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-ink/20 transition-all duration-200 group">
            Book a Demo <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        {/* Hero Image Container */}
        <div className="mt-12 md:mt-24 px-4 sm:px-0">
          <div className="relative rounded-2xl border border-line-strong bg-surface p-2 shadow-2xl shadow-ink/5 mx-auto max-w-[1040px]">
            <div className="absolute inset-0 bg-gradient-to-t from-paper/40 to-transparent rounded-2xl pointer-events-none" />
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center bg-gray-50/50 p-3 sm:p-4 md:p-8 rounded-xl border border-line-strong min-h-[400px]">
              <div className="flex-1 w-full relative z-10">
                <WorkflowAnimation activeStep={activeStep} />
              </div>
              <div className="flex-[1.2] w-full min-h-[540px] md:min-h-[440px] relative z-10">
                <MockDashboard activeStep={activeStep} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
