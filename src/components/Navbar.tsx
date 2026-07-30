

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-line">
      <div className="max-w-[1100px] mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center cursor-pointer hover:animate-nav-pop group">
          <span className="font-serif text-2xl font-semibold tracking-tight text-ink">kaybi</span>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <a href="#features" className="text-sm font-semibold text-muted hover:text-ink transition-colors duration-200">
            Features
          </a>
          <a href="#usecases" className="text-sm font-semibold text-muted hover:text-ink transition-colors duration-200">
            Use Cases
          </a>
          <a href="https://calendly.com/kaybi/teardown" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-accent-ink text-white hover:bg-[#115e59] hover:-translate-y-[1px] hover:shadow-lg transition-all duration-200 shadow shadow-accent-ink/20">
            Book a Demo
          </a>
        </div>
      </div>
    </header>
  );
}
