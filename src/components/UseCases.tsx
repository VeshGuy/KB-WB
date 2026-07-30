import { ArrowRight } from 'lucide-react';

export default function UseCases() {
  return (
    <section id="usecases" className="py-24 bg-paper relative">
      <div className="max-w-[1100px] mx-auto px-6">
        
        <div className="text-center animate-fade-up">
          <h2 className="text-4xl md:text-[3rem] font-bold font-serif text-ink mb-6 tracking-tight">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-ink to-teal-500">ops-heavy businesses.</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#5a5753] max-w-[800px] mx-auto leading-relaxed">
            Customer support, distribution, back-office, and field service.
          </p>
        </div>

        <div className="mt-20 text-center animate-fade-up border-t border-line pt-16">
          <h3 className="text-3xl md:text-4xl font-bold font-serif text-ink mb-8 tracking-tight">
            Want to make your operations AI-ready?
          </h3>
          <a href="https://calendly.com/kaybi/teardown" className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold bg-accent-ink text-white hover:bg-[#115e59] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-ink/20 transition-all duration-200 group">
            Book a Demo <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
