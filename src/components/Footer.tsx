import { ShieldCheck, Mail, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-line pt-20 pb-10">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-6 h-6 text-accent-ink" />
              <span className="text-xl font-bold font-serif text-ink tracking-tight">Kaybi</span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              The control layer for AI agents. Approved procedures in, audit trail out.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-faint hover:text-accent-ink transition-colors"><Mail className="w-5 h-5" /></a>
              <a href="#" className="text-faint hover:text-accent-ink transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="#" className="text-faint hover:text-accent-ink transition-colors"><Globe className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold font-serif text-ink mb-6">Product</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-muted text-sm hover:text-accent-ink transition-colors">Features</a></li>
              <li><a href="#" className="text-muted text-sm hover:text-accent-ink transition-colors">Use Cases</a></li>
              <li><a href="#" className="text-muted text-sm hover:text-accent-ink transition-colors">Security & Audit</a></li>
              <li><a href="#" className="text-muted text-sm hover:text-accent-ink transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold font-serif text-ink mb-6">Resources</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-muted text-sm hover:text-accent-ink transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted text-sm hover:text-accent-ink transition-colors">API Reference</a></li>
              <li><a href="#" className="text-muted text-sm hover:text-accent-ink transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted text-sm hover:text-accent-ink transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-serif text-ink mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-muted text-sm hover:text-accent-ink transition-colors">About</a></li>
              <li><a href="#" className="text-muted text-sm hover:text-accent-ink transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted text-sm hover:text-accent-ink transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted text-sm hover:text-accent-ink transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-faint text-sm">
            © {new Date().getFullYear()} Kaybi Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2 text-sm text-faint">
              <span className="w-2 h-2 rounded-full bg-ok"></span> Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
