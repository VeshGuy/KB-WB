import { MousePointer2, CheckCircle2 } from 'lucide-react';

export default function MockConflictCard() {
  return (
    <div className="w-full max-w-[95%] bg-white border border-line rounded-xl shadow-sm flex flex-col text-left mx-auto relative overflow-hidden">
      <style>{`
        @keyframes mouseMoveConflict {
          0%, 15% { transform: translate(100px, 80px); opacity: 0; }
          20% { transform: translate(100px, 80px); opacity: 1; }
          33% { transform: translate(10px, 5px); opacity: 1; }
          37% { transform: translate(10px, 5px) scale(0.85); opacity: 1; }
          41% { transform: translate(10px, 5px) scale(1); opacity: 1; }
          45%, 100% { transform: translate(10px, 5px) scale(1); opacity: 0; }
        }
        @keyframes buttonPressConflict {
          0%, 33% { transform: scale(1); background-color: #0d9488; } /* teal-600 */
          37% { transform: scale(0.95); background-color: #0f766e; } /* teal-700 */
          41%, 100% { transform: scale(1); background-color: #0d9488; }
        }
        @keyframes conflictContentFade {
          0%, 45% { opacity: 1; filter: blur(0px); pointer-events: auto; }
          50%, 92% { opacity: 0; filter: blur(4px); pointer-events: none; }
          96%, 100% { opacity: 1; filter: blur(0px); pointer-events: auto; }
        }
        @keyframes conflictSuccessFade {
          0%, 45% { opacity: 0; transform: scale(0.95); pointer-events: none; }
          50%, 92% { opacity: 1; transform: scale(1); pointer-events: auto; }
          96%, 100% { opacity: 0; transform: scale(0.95); pointer-events: none; }
        }
        
        .animate-mouse-conflict {
          animation: mouseMoveConflict 5s ease-in-out infinite;
          z-index: 50;
        }
        .animate-btn-conflict {
          animation: buttonPressConflict 5s ease-in-out infinite;
        }
        .animate-conflict-content {
          animation: conflictContentFade 5s ease-in-out infinite;
        }
        .animate-conflict-success {
          animation: conflictSuccessFade 5s ease-in-out infinite;
        }
      `}</style>

      {/* Main Conflict Content */}
      <div className="p-5 flex flex-col gap-3 animate-conflict-content relative z-10">
        <div className="flex gap-2 items-center">
          <span className="px-2 py-1 rounded bg-orange-50 text-orange-700 text-[10px] font-semibold border border-orange-100">Contradicts a fact</span>
          <span className="px-2 py-1 rounded bg-surface text-muted text-[10px] font-semibold border border-line">high confidence</span>
        </div>
        
        <p className="text-sm font-bold text-ink leading-snug pr-4">
          New memo contradicts the active return policy
        </p>
        
        <p className="text-xs text-muted leading-relaxed">
          The newly uploaded memo states that all returns require a restocking fee. The active SOP states that returns are always free. The AI will give contradictory answers to customers if this is not resolved.
        </p>
        
        <div className="bg-[#faf9f7] rounded-md p-3 mt-1 border border-line text-[11px] text-ink leading-relaxed">
          <span className="font-bold">Recommendation to avoid confusion</span>
          <br />
          Replace the old SOP rule with the new restocking fee policy to ensure the AI gives correct information.
        </div>
        
        <div className="flex gap-3 mt-2">
          <div className="relative">
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-sm animate-btn-conflict transition-colors">
              Approve and replace old
            </button>
            <div className="absolute top-1/2 left-1/2 pointer-events-none animate-mouse-conflict origin-top-left">
              <MousePointer2 className="w-5 h-5 fill-black text-white drop-shadow-md" />
            </div>
          </div>
          <button className="bg-white text-ink border border-line px-4 py-2 rounded-lg text-xs font-semibold hover:bg-surface transition-colors">
            Reject new
          </button>
        </div>
      </div>

      {/* Success Overlay */}
      <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-6 animate-conflict-success z-20">
        <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-3">
          <CheckCircle2 className="w-6 h-6 text-teal-600" />
        </div>
        <p className="text-sm font-bold text-ink text-center">Conflict Resolved</p>
        <p className="text-xs text-muted text-center mt-1">The old return policy has been replaced. The AI will now enforce the restocking fee.</p>
      </div>
    </div>
  );
}
