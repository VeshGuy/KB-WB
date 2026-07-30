import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function MockApprovedCard() {
  return (
    <div className="w-full max-w-[90%] bg-paper border border-line rounded-xl shadow-sm flex flex-col overflow-hidden text-left mx-auto hover:shadow-md transition-shadow">
      <div className="p-3 border-b border-line bg-surface flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
          <span className="text-sm font-bold text-ink">Procedure: Dispatch Routing Rule</span>
        </div>
        <div className="flex items-center gap-2 mt-1 ml-6">
          <span className="text-xs text-muted mr-1">Source:</span>
          <div className="flex items-center gap-1.5 bg-white border border-line px-2 py-0.5 rounded text-[10px] font-medium text-ink shadow-sm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" className="w-3 h-3" alt="PDF" />
            Alliance Vendor SLA
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-line px-2 py-0.5 rounded text-[10px] font-medium text-ink shadow-sm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" className="w-3 h-3" alt="Notion" />
            Dispatch Playbook
          </div>
        </div>
      </div>
      
      <div className="p-4 flex flex-col gap-2 relative bg-white">
        <div className="absolute left-[25px] top-4 bottom-4 w-px bg-line z-0" />
        <div className="flex flex-col gap-2 relative z-10">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-surface border border-line flex items-center justify-center text-[10px] font-bold text-muted shrink-0 mt-0.5">1</div>
            <div className="bg-surface border border-line rounded p-2 text-xs flex-1 shadow-sm">
              <span className="font-medium text-ink">Trigger:</span> New load tendered to <span className="font-semibold text-ink">Alliance</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-surface border border-line flex items-center justify-center text-[10px] font-bold text-muted shrink-0 mt-0.5">2</div>
            <div className="bg-surface border border-line rounded p-2 text-xs flex-1 shadow-sm">
              <span className="font-medium text-ink">Condition:</span> Equipment is a <span className="font-semibold text-ink">Reefer</span> and pickup time is <span className="font-semibold text-ink">before 9:00 AM</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-surface border border-line flex items-center justify-center text-[10px] font-bold text-muted shrink-0 mt-0.5">3</div>
            <div className="bg-surface border border-line rounded p-2 text-xs flex-1 shadow-sm">
              <span className="font-medium text-ink">Action:</span> Block dispatch and alert manager (avoids $1,200 fine)
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-3 border-t border-line bg-surface flex items-center justify-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
        <span className="text-xs font-medium text-ink">Procedure approved by <span className="font-bold">Sarah J.</span></span>
      </div>
    </div>
  );
}
