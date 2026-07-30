import { ShieldAlert, CheckCircle2, MousePointer2 } from 'lucide-react';

export default function MockApprovedCard() {
  return (
    <div className="w-full max-w-[90%] bg-paper border border-line rounded-xl shadow-sm flex flex-col overflow-hidden text-left mx-auto hover:shadow-md transition-shadow relative">
      <style>{`
        @keyframes mouseMoveApprove {
          0%, 15% { transform: translate(120px, 80px); opacity: 0; }
          20% { transform: translate(120px, 80px); opacity: 1; }
          33% { transform: translate(0px, 0px); opacity: 1; }
          37% { transform: translate(0px, 0px) scale(0.85); opacity: 1; }
          41% { transform: translate(0px, 0px) scale(1); opacity: 1; }
          45%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0; }
        }
        @keyframes buttonPressApprove {
          0%, 33% { transform: scale(1); background-color: #1c1a17; }
          37% { transform: scale(0.95); background-color: #000000; }
          41%, 100% { transform: scale(1); background-color: #1c1a17; }
        }
        @keyframes actionRowFade {
          0%, 45% { opacity: 1; pointer-events: auto; }
          50%, 92% { opacity: 0; pointer-events: none; }
          96%, 100% { opacity: 1; pointer-events: auto; }
        }
        @keyframes successRowFade {
          0%, 45% { opacity: 0; transform: translateY(4px); pointer-events: none; }
          50%, 92% { opacity: 1; transform: translateY(0); pointer-events: auto; }
          96%, 100% { opacity: 0; transform: translateY(-4px); pointer-events: none; }
        }
        
        .animate-mouse-approve {
          animation: mouseMoveApprove 4s ease-in-out infinite;
          z-index: 50;
        }
        .animate-btn-approve {
          animation: buttonPressApprove 4s ease-in-out infinite;
        }
        .animate-action-row {
          animation: actionRowFade 4s ease-in-out infinite;
        }
        .animate-success-row {
          animation: successRowFade 4s ease-in-out infinite;
        }
      `}</style>

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
      
      <div className="h-[60px] border-t border-line bg-surface relative overflow-hidden">
        {/* Action Row */}
        <div className="absolute inset-0 p-3 flex gap-2 animate-action-row">
          <button className="flex-1 bg-white border border-line text-ink font-semibold text-xs py-2 rounded-lg transition-colors">
            Edit
          </button>
          
          <div className="flex-1 relative">
            <button className="w-full h-full bg-ink text-white font-semibold text-xs py-2 rounded-lg transition-colors animate-btn-approve shadow-md">
              Approve
            </button>
            <div className="absolute left-1/2 top-1/2 -mt-1 -ml-1 pointer-events-none animate-mouse-approve text-ink origin-top-left">
              <MousePointer2 className="w-5 h-5 fill-white drop-shadow-md" />
            </div>
          </div>
          
          <button className="flex-1 bg-white border border-line text-ink font-semibold text-xs py-2 rounded-lg transition-colors">
            Reject
          </button>
        </div>

        {/* Success Row */}
        <div className="absolute inset-0 p-3 flex items-center justify-center gap-2 animate-success-row bg-surface">
          <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
          <span className="text-xs font-medium text-ink">Procedure approved by <span className="font-bold">Sarah J.</span></span>
        </div>
      </div>
    </div>
  );
}
