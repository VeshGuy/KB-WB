import { Link, AlertCircle, UserCheck, History } from 'lucide-react';
import MockAuditTrail from './MockAuditTrail';
import NetworkUpdateAnimation from './NetworkUpdateAnimation';
import MockApprovedCard from './MockApprovedCard';
import MockConflictCard from './MockConflictCard';

const features = [
  {
    icon: <Link />,
    title: 'One connected layer.',
    description: 'Change once and it updates everywhere it applies.'
  },
  {
    icon: <AlertCircle />,
    title: 'Always updated.',
    description: 'It flags outdated and conflicting procedures instead of letting your AI follow the wrong version.'
  },
  {
    icon: <UserCheck />,
    title: 'Approved by a human.',
    description: 'A manager approves each procedure once. Nothing goes live on a guess.'
  },
  {
    icon: <History />,
    title: 'Full audit trail.',
    description: 'Every action is logged. See exactly which procedure was used, which version, and who approved it.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 bg-white relative">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-[#1c1a17] mb-24 text-center">
          How Kaybi keeps your operations on track
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
                  {feature.title === 'Full audit trail.' ? (
                    <div className="w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                      <MockAuditTrail />
                    </div>
                  ) : feature.title === 'One connected layer.' ? (
                    <div className="w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                      <NetworkUpdateAnimation />
                    </div>
                  ) : feature.title === 'Approved by a human.' ? (
                    <div className="w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                      <MockApprovedCard />
                    </div>
                  ) : feature.title === 'Always updated.' ? (
                    <div className="w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                      <MockConflictCard />
                    </div>
                  ) : (
                    <div className="w-full aspect-video rounded-2xl border-2 border-dashed border-[#d1cec7] bg-[#faf9f7] flex items-center justify-center transition-all duration-300 group-hover:bg-[#f0eee9] group-hover:border-[#1c1a17]/20">
                      <div className="text-[#a8a49c] font-mono text-sm uppercase tracking-widest font-semibold">
                        [ Screenshot: {feature.title.replace('.', '')} ]
                      </div>
                    </div>
                  )}
                  {/* Decorative glow behind placeholder */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/5 to-accent-ink/5 rounded-[2rem] blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
