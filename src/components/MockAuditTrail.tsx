import { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

export default function MockAuditTrail() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Loop the animation
    const interval = setInterval(() => {
      setExpanded(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto rounded-xl border border-line bg-surface shadow-xl overflow-hidden font-sans text-left">
      {/* Header */}
      <div className="bg-paper border-b border-line px-5 py-4 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-ink">Activity log</h3>
          <p className="text-xs text-muted">Every action, step, and approval.</p>
        </div>
      </div>

      {/* Row 1 (Expanding) - Success */}
      <div>
        <div className="flex items-center gap-3 px-5 py-3.5 hover:bg-paper cursor-default transition-colors">
          <ChevronRight className={`w-4 h-4 text-faint transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`} />
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium text-ink">
              Process Return #RMA-8492
            </div>
            <div className="text-xs text-faint mt-0.5">
              returns_handler · v1.2 · 842ms
            </div>
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-700">
            success
          </span>
          <span className="w-12 text-right text-xs text-faint">2m ago</span>
        </div>

        {/* Expanded Content (Faster animation) */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-line bg-paper px-6 py-4">
            <ol className="space-y-3">
              <li className="flex gap-3 text-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface border border-line text-[11px] font-semibold text-muted">
                  1
                </span>
                <div className="min-w-0">
                  <div className="text-ink font-medium">Extract RMA details from email</div>
                  <div className="text-xs text-faint mt-0.5">tool_call · success</div>
                </div>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface border border-line text-[11px] font-semibold text-muted">
                  2
                </span>
                <div className="min-w-0">
                  <div className="text-ink font-medium">Verify policy entitlement (30 days)</div>
                  <div className="text-xs text-faint mt-0.5">tool_call · success</div>
                </div>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface border border-line text-[11px] font-semibold text-muted">
                  3
                </span>
                <div className="min-w-0">
                  <div className="text-ink font-medium">Generate refund authorization</div>
                  <div className="text-xs text-faint mt-0.5">tool_call · success</div>
                </div>
              </li>
            </ol>
            <div className="mt-4 border-t border-line pt-3 text-xs font-medium text-emerald-600 flex items-center">
              <CheckCircle2 className="w-3 h-3 mr-1" /> Procedure approved by Sarah J.
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 (Static) - Escalated */}
      <div className="border-t border-line">
        <div className="flex items-center gap-3 px-5 py-3.5 hover:bg-paper cursor-default">
          <ChevronRight className="w-4 h-4 text-faint" />
          <AlertCircle className="w-4 h-4 text-amber-500" />
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium text-ink">
              Process Refund #REF-9912
            </div>
            <div className="text-xs text-faint mt-0.5">
              support_escalation · v1.5 · 1.4s
            </div>
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-700">
            escalated
          </span>
          <span className="w-12 text-right text-xs text-faint">15m ago</span>
        </div>
      </div>

      {/* Row 3 (Static) - Failed */}
      <div className="border-t border-line">
        <div className="flex items-center gap-3 px-5 py-3.5 hover:bg-paper cursor-default">
          <ChevronRight className="w-4 h-4 text-faint" />
          <XCircle className="w-4 h-4 text-red-500" />
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium text-ink">
              Vet Carrier MC# 839201
            </div>
            <div className="text-xs text-faint mt-0.5">
              carrier_onboarding · v2.0 · 302ms
            </div>
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-red-100 text-red-700">
            failed
          </span>
          <span className="w-12 text-right text-xs text-faint">1h ago</span>
        </div>
      </div>
    </div>
  );
}
