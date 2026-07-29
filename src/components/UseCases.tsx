import { Headset, Briefcase, RefreshCcw } from 'lucide-react';

const useCases = [
  {
    icon: <Headset className="w-7 h-7" />,
    title: 'Customer Support Ops',
    description: 'Refunds, escalations, and entitlement checks follow your policy exactly, with a sign-off gate on anything risky.'
  },
  {
    icon: <RefreshCcw className="w-7 h-7" />,
    title: 'B2B Returns & RMA Management',
    description: 'Turn complex 18-brand manufacturer-routing lookup tables into executable agent instructions. Automate exception handling with built-in financial approval gates.'
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    title: 'Logistics & Carrier Onboarding',
    description: 'Vet carriers against 6-month authority rules and cargo minimums securely. Automatically collect and verify W-9s and COIs without risking a compliance breach.'
  }
];

export default function UseCases() {
  return (
    <section id="usecases" className="py-32 bg-paper relative">
      <div className="max-w-[1100px] mx-auto px-6">
        
        <div className="text-center mb-24 animate-fade-up">
          <h2 className="text-4xl md:text-[3rem] font-bold font-serif text-ink mb-6 tracking-tight">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-ink to-teal-500">ops-heavy businesses.</span>
          </h2>
          <p className="text-lg text-muted max-w-[650px] mx-auto leading-relaxed">
            Perfect for environments where every step matters and consistency is critical.
          </p>
        </div>
        
        <div className="max-w-[840px] mx-auto flex flex-col gap-8">
          {useCases.map((useCase, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col sm:flex-row gap-6 sm:gap-8 items-start bg-surface p-8 rounded-2xl border border-line shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-accent-weak text-accent-ink flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:bg-accent-ink group-hover:text-white transition-all duration-300 shadow-inner">
                {useCase.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif text-ink mb-3 group-hover:text-accent-ink transition-colors">{useCase.title}</h3>
                <p className="text-muted text-lg leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
