import { FileText, Database, ClipboardList, ShieldAlert, RefreshCw } from 'lucide-react';

export default function MockDashboard({ activeStep }: { activeStep: number }) {
  return (
    <div className="w-full h-full min-h-[440px] rounded-xl border border-line bg-surface shadow-xl font-sans text-left overflow-hidden flex flex-col relative bg-[#faf9f7]">
      
      {/* Step 0: Upload Docs */}
      <div className={`absolute inset-0 transition-opacity duration-700 flex flex-col ${activeStep === 0 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'}`}>
        <div className="bg-paper border-b border-line px-5 py-4 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-ink">Knowledge Base</h3>
            <p className="text-xs text-muted">Ingesting source documents</p>
          </div>
          <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded animate-pulse">Uploading 3 items</span>
        </div>
        <div className="p-5 space-y-3">
           <div className="border border-line rounded-lg bg-white p-3 flex items-center gap-3">
              <div className="bg-blue-50 p-2 rounded">
                 <FileText className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex-1">
                 <div className="text-sm font-medium text-ink">Returns_Policy_2026.pdf</div>
                 <div className="text-xs text-muted">Extracting text & vectors...</div>
              </div>
              <RefreshCw className="w-4 h-4 text-blue-400 animate-spin shrink-0" />
           </div>
           <div className="border border-line rounded-lg bg-white p-3 flex items-center gap-3 opacity-75">
              <div className="bg-blue-50 p-2 rounded">
                 <FileText className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex-1">
                 <div className="text-sm font-medium text-ink">Carrier_SLA_Agreement.docx</div>
                 <div className="text-xs text-muted">Queued</div>
              </div>
           </div>
           <div className="border border-line rounded-lg bg-white p-3 flex items-center gap-3 opacity-50">
              <div className="bg-blue-50 p-2 rounded">
                 <FileText className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex-1">
                 <div className="text-sm font-medium text-ink">Employee_Handbook.md</div>
                 <div className="text-xs text-muted">Queued</div>
              </div>
           </div>
        </div>
      </div>

      {/* Step 1: Ingest Live Data */}
      <div className={`absolute inset-0 transition-opacity duration-700 flex flex-col ${activeStep === 1 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'}`}>
        <div className="bg-paper border-b border-line px-5 py-4 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-ink">Connections</h3>
            <p className="text-xs text-muted">Syncing live system state</p>
          </div>
          <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded animate-pulse">Syncing APIs</span>
        </div>
        <div className="p-5 space-y-3">
           <div className="border border-line rounded-lg bg-white p-4 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                 <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm font-medium text-ink">Zendesk Ticketing</span>
                 </div>
                 <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">CONNECTED</span>
              </div>
              <div className="w-full bg-surface h-1.5 rounded-full overflow-hidden">
                 <div className="bg-indigo-500 w-2/3 h-full animate-[pulse_2s_ease-in-out_infinite]" />
              </div>
              <div className="text-[11px] text-muted flex justify-between">
                 <span>Fetching ticket history...</span>
                 <span>67%</span>
              </div>
           </div>
           
           <div className="border border-line rounded-lg bg-white p-4 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                 <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm font-medium text-ink">Salesforce CRM</span>
                 </div>
                 <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">SYNCED</span>
              </div>
              <div className="w-full bg-emerald-100 h-1.5 rounded-full overflow-hidden">
                 <div className="bg-emerald-500 w-full h-full" />
              </div>
              <div className="text-[11px] text-muted flex justify-between">
                 <span>Sync complete</span>
                 <span>Just now</span>
              </div>
           </div>
        </div>
      </div>

      {/* Step 2: Produce Procedures */}
      <div className={`absolute inset-0 transition-opacity duration-700 flex flex-col ${activeStep === 2 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'}`}>
        <div className="bg-paper border-b border-line px-5 py-4 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-ink">Procedures</h3>
            <p className="text-xs text-muted">Generating executable flows</p>
          </div>
          <span className="text-xs font-semibold bg-purple-100 text-purple-700 px-2 py-0.5 rounded animate-pulse">Writing code...</span>
        </div>
        <div className="p-5 flex-1 flex flex-col gap-3">
           <div className="flex items-center gap-2 mb-1">
             <ClipboardList className="w-4 h-4 text-purple-500 shrink-0" />
             <span className="text-sm font-medium text-ink">Returns_Processor_v1</span>
           </div>
           <div className="flex-1 bg-[#1e1e1e] rounded-lg border border-[#333] p-4 font-mono text-xs overflow-hidden relative shadow-inner">
             <div className="text-[#569cd6]">function <span className="text-[#dcdcaa]">processReturn</span><span className="text-[#d4d4d4]">(ticket, policy) {'{'}</span></div>
             <div className="text-[#6a9955] ml-4 mt-1">// Auto-generated by Kaybi from Returns_Policy_2026.pdf</div>
             <div className="text-[#d4d4d4] ml-4 mt-1"><span className="text-[#c586c0]">if</span> (ticket.daysSincePurchase {'>'} policy.maxDays) {'{'}</div>
             <div className="text-[#dcdcaa] ml-8 mt-1">escalateToHuman<span className="text-[#d4d4d4]">(ticket, </span><span className="text-[#ce9178]">'Policy exceeded'</span><span className="text-[#d4d4d4]">);</span></div>
             <div className="text-[#d4d4d4] ml-4 mt-1">{'}'} <span className="text-[#c586c0]">else</span> {'{'}</div>
             <div className="text-[#dcdcaa] ml-8 mt-1">issueRefund<span className="text-[#d4d4d4]">(ticket.userId, ticket.amount);</span></div>
             
             {/* Blinking cursor effect */}
             <div className="ml-8 mt-1 flex items-center text-[#d4d4d4]">
               <span className="text-[#dcdcaa]">closeTicket</span>(ticket.id);<div className="w-1.5 h-3.5 bg-white ml-1 animate-[pulse_1s_step-end_infinite]" />
             </div>
             
             <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#1e1e1e] to-transparent pointer-events-none" />
           </div>
        </div>
      </div>

      {/* Step 3: Human Approval */}
      <div className={`absolute inset-0 transition-opacity duration-700 flex flex-col ${activeStep === 3 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'}`}>
        <div className="bg-paper border-b border-line px-5 py-4 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-ink">Approvals</h3>
            <p className="text-xs text-muted">Awaiting steward review</p>
          </div>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-[11px] font-bold text-amber-700">1</span>
        </div>
        <div className="p-5">
          <div className="bg-white rounded-lg border border-line shadow-sm overflow-hidden">
            <div className="p-4 border-b border-line">
              <div className="flex items-center gap-2 mb-1">
                <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-sm font-bold text-ink">New Procedure: Process Return</span>
              </div>
              <p className="text-xs text-muted">Kaybi drafted a new procedure based on your latest policy uploads. It requires your approval to go live.</p>
            </div>
            
            <div className="bg-surface px-4 py-3 flex flex-wrap gap-4 text-xs border-b border-line">
               <div><span className="text-faint">Trigger:</span> <span className="font-medium text-ink">Tag: #returns</span></div>
               <div><span className="text-faint">Actions:</span> <span className="font-medium text-ink">3 steps</span></div>
            </div>
            
            <div className="p-4 flex gap-3">
               <button className="flex-1 bg-ink text-white font-semibold text-sm py-2 rounded-lg hover:bg-black transition-colors">
                 Approve & Deploy
               </button>
               <button className="flex-1 bg-surface border border-line text-ink font-semibold text-sm py-2 rounded-lg hover:bg-paper transition-colors">
                 Reject
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Step 4: Skills Generated (Home Dashboard) */}
      <div className={`absolute inset-0 transition-opacity duration-700 flex flex-col ${activeStep === 4 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'}`}>
        <div className="bg-paper border-b border-line px-5 py-4 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-ink">Good to see you</h3>
            <p className="text-xs text-muted">Here's what your agent has handled.</p>
          </div>
        </div>
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
             <div className="bg-white border border-line rounded-lg p-3">
                <div className="text-[10px] font-bold text-faint mb-1 uppercase tracking-wider">Success Rate</div>
                <div className="flex items-baseline gap-2">
                   <span className="text-2xl font-bold text-emerald-600">98%</span>
                   <span className="text-[10px] text-muted">all-time</span>
                </div>
             </div>
             <div className="bg-white border border-line rounded-lg p-3">
                <div className="text-[10px] font-bold text-faint mb-1 uppercase tracking-wider">Procedures Live</div>
                <div className="flex items-baseline gap-2">
                   <span className="text-2xl font-bold text-ink">12</span>
                   <span className="text-[10px] text-muted">active</span>
                </div>
             </div>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold text-ink uppercase tracking-wider mb-2">Work done today</h4>
            <div className="bg-white border border-line rounded-lg divide-y divide-line">
               <div className="px-3 py-2 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                   <span className="text-xs font-medium text-ink truncate">Process Return #8492</span>
                 </div>
                 <span className="text-[10px] text-faint shrink-0">2m ago</span>
               </div>
               <div className="px-3 py-2 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                   <span className="text-xs font-medium text-ink truncate">Carrier Onboarding</span>
                 </div>
                 <span className="text-[10px] text-faint shrink-0">15m ago</span>
               </div>
               <div className="px-3 py-2 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                   <span className="text-xs font-medium text-ink truncate">Process Refund #REF-9912</span>
                 </div>
                 <span className="text-[10px] text-faint shrink-0">1h ago</span>
               </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
