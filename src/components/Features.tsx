import { FileCode2, Workflow, ShieldCheck, TerminalSquare } from 'lucide-react';

const features = [
  {
    icon: <FileCode2 />,
    title: 'Deterministic execution.',
    description: 'Transform ambiguous agent goals into hard-coded skill sets. Kaybi restricts the agent to pre-approved APIs, preventing hallucinated actions.'
  },
  {
    icon: <ShieldCheck />,
    title: 'Human-in-the-loop.',
    description: 'High-risk operations automatically pause for manual review. Your compliance team signs off before the database is ever touched.'
  },
  {
    icon: <Workflow />,
    title: 'Visual process mapping.',
    description: 'Map out your standard operating procedures visually. Kaybi compiles these workflows into strict constraints for the LLM.'
  },
  {
    icon: <TerminalSquare />,
    title: 'Cryptographic audit trails.',
    description: 'Every action is logged immutably. Export SOC2 and ISO compliant reports detailing exactly why an agent took an action.'
  }
];

export default function Features() {
  return (
    <section className="py-32 px-6 bg-white relative">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-[#1c1a17] mb-24 text-center">
          Operations, secured.
        </h2>
        
        <div className="flex flex-col gap-32">
          {features.map((feature, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col md:flex-row gap-16 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#f0eee9] text-[#1c1a17] flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-[#1c1a17]">{feature.title}</h3>
                  <p className="text-lg text-[#5a5753] leading-relaxed max-w-md">
                    {feature.description}
                  </p>
                </div>

                {/* Screenshot Placeholder */}
                <div className="flex-1 w-full relative group">
                  <div className="w-full aspect-video rounded-2xl border-2 border-dashed border-[#d1cec7] bg-[#faf9f7] flex items-center justify-center transition-all duration-300 group-hover:bg-[#f0eee9] group-hover:border-[#1c1a17]/20">
                    <div className="text-[#a8a49c] font-mono text-sm uppercase tracking-widest font-semibold">
                      [ Screenshot: {feature.title.replace('.', '')} ]
                    </div>
                  </div>
                  {/* Decorative glow behind placeholder */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/5 to-yellow-500/5 rounded-[2rem] blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
