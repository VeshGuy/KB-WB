

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-line py-12">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col items-center justify-center text-center">
        <div className="flex items-center mb-4 group cursor-pointer">
          <span className="font-serif text-2xl font-semibold tracking-tight text-ink">kaybi</span>
        </div>
        <p className="text-muted text-base max-w-[320px] leading-relaxed mb-8">
          The Operations Context Layer for AI.
        </p>
        
        <div className="w-24 h-px bg-line mb-8"></div>
        
        <p className="text-faint text-sm">
          © {new Date().getFullYear()} Kaybi Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
