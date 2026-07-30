import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-line pt-20 pb-10">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-6 group cursor-pointer w-fit">
            <div className="w-10 h-10 rounded-xl bg-accent-weak flex items-center justify-center text-accent-ink group-hover:bg-accent-ink group-hover:text-white transition-colors duration-300">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="font-serif text-2xl font-semibold tracking-tight text-ink">kaybi</span>
          </div>
          <p className="text-muted text-base max-w-[320px] leading-relaxed">
            The playbook your AI runs on. Approved procedures in, every action logged.
          </p>
        </div>
        
        <div className="pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-faint text-sm">
            © {new Date().getFullYear()} Kaybi Inc. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
