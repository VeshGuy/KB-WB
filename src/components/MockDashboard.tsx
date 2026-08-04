import { Image as ImageIcon, ClipboardList, ShieldAlert, RefreshCw } from 'lucide-react';

export default function MockDashboard({ activeStep }: { activeStep: number }) {
  return (
    <div className="w-full h-full min-h-[540px] md:min-h-[440px] rounded-xl border border-line bg-surface shadow-xl font-sans text-left overflow-hidden flex flex-col relative bg-[#faf9f7]">
      
      {/* Step 0: Upload Files */}
      <div className={`absolute inset-0 transition-opacity duration-700 flex flex-col overflow-y-auto overflow-x-hidden ${activeStep === 0 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'}`}>
        <div className="bg-paper border-b border-line px-5 py-4 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-ink">Knowledge Base</h3>
            <p className="text-xs text-muted">Ingesting source files</p>
          </div>
          <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded animate-pulse">Uploading 4 items</span>
        </div>
        <div className="p-5 space-y-3">
           <div className="border border-line rounded-lg bg-white p-3 flex items-center gap-3">
              <div className="bg-red-50 p-2 rounded flex items-center justify-center">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" alt="PDF" className="w-5 h-5" />
              </div>
              <div className="flex-1">
                 <div className="text-sm font-medium text-ink">Alliance Vendor SLA</div>
                 <div className="text-xs text-muted">Extracting text & vectors...</div>
              </div>
              <RefreshCw className="w-4 h-4 text-blue-400 animate-spin shrink-0" />
           </div>
           
           <div className="border border-line rounded-lg bg-white p-3 flex items-center gap-3 opacity-75">
              <div className="bg-blue-50 p-2 rounded flex items-center justify-center">
                 <img src="https://cdn.simpleicons.org/confluence/0052CC" alt="Confluence" className="w-5 h-5" />
              </div>
              <div className="flex-1">
                 <div className="text-sm font-medium text-ink">Routing Guidelines</div>
                 <div className="text-xs text-muted">Queued</div>
              </div>
           </div>
           
           <div className="border border-line rounded-lg bg-white p-3 flex items-center gap-3 opacity-50">
              <div className="bg-slate-50 p-2 rounded flex items-center justify-center">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" alt="Notion" className="w-5 h-5" />
              </div>
              <div className="flex-1">
                 <div className="text-sm font-medium text-ink">Dispatch Playbook</div>
                 <div className="text-xs text-muted">Queued</div>
              </div>
           </div>
           
           <div className="border border-line rounded-lg bg-white p-3 flex items-center gap-3 opacity-40">
              <div className="bg-emerald-50 p-2 rounded flex items-center justify-center">
                 <ImageIcon className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="flex-1">
                 <div className="text-sm font-medium text-ink">Gate Check Photo</div>
                 <div className="text-xs text-muted">Queued</div>
              </div>
           </div>
        </div>
      </div>

      {/* Step 1: Ingest Live Data */}
      <div className={`absolute inset-0 transition-opacity duration-700 flex flex-col overflow-y-auto overflow-x-hidden ${activeStep === 1 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'}`}>
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
                    <img src="https://cdn.simpleicons.org/zendesk/03363D" alt="Zendesk" className="w-5 h-5" />
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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" className="w-7 h-5 object-contain" />
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

           <div className="border border-line rounded-lg bg-white p-4 flex flex-col gap-3 opacity-75">
              <div className="flex justify-between items-center">
                 <div className="flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" alt="Slack" className="w-5 h-5" />
                    <span className="text-sm font-medium text-ink">Slack Workspace</span>
                 </div>
                 <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">INDEXING</span>
              </div>
              <div className="w-full bg-surface h-1.5 rounded-full overflow-hidden">
                 <div className="bg-amber-500 w-1/3 h-full animate-[pulse_2s_ease-in-out_infinite]" />
              </div>
              <div className="text-[11px] text-muted flex justify-between">
                 <span>Reading #support...</span>
                 <span>33%</span>
              </div>
           </div>
        </div>
      </div>

      {/* Step 2: Produce Procedures */}
      <div className={`absolute inset-0 transition-opacity duration-700 flex flex-col overflow-y-auto overflow-x-hidden ${activeStep === 2 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'}`}>
        <div className="bg-paper border-b border-line px-5 py-4 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-ink">Procedures</h3>
            <p className="text-xs text-muted">Generating executable flows</p>
          </div>
          <span className="text-xs font-semibold bg-purple-100 text-purple-700 px-2 py-0.5 rounded animate-pulse">Drafting logic...</span>
        </div>
        <div className="p-5 flex-1 flex flex-col gap-3">
           <div className="bg-white rounded-lg border border-line shadow-sm overflow-hidden flex-1 flex flex-col">
              <div className="p-4 border-b border-line bg-surface">
                 <div className="flex items-center gap-2 mb-1">
                   <ClipboardList className="w-4 h-4 text-purple-500 shrink-0" />
                   <span className="text-sm font-bold text-ink">Procedure: Dispatch Routing Rule</span>
                 </div>
                 <div className="flex flex-wrap items-center gap-2 mt-1">
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
              <div className="p-4 flex flex-col gap-3 flex-1 relative">
                 {/* Connecting line */}
                 <div className="absolute left-[25px] top-6 bottom-8 w-px bg-line z-0" />
                 
                 <div className="flex flex-col gap-3 relative z-10">
                    <div className="flex items-start gap-3">
                       <div className="w-5 h-5 rounded-full bg-surface border border-line flex items-center justify-center text-[10px] font-bold text-muted shrink-0 mt-1">1</div>
                       <div className="bg-surface border border-line rounded p-2.5 text-xs flex-1 shadow-sm">
                          <span className="font-medium text-ink">Trigger:</span> New load tendered to <span className="font-semibold text-ink">Alliance</span>
                       </div>
                    </div>
                    <div className="flex items-start gap-3">
                       <div className="w-5 h-5 rounded-full bg-surface border border-line flex items-center justify-center text-[10px] font-bold text-muted shrink-0 mt-1">2</div>
                       <div className="bg-surface border border-line rounded p-2.5 text-xs flex-1 shadow-sm">
                          <span className="font-medium text-ink">Condition:</span> Equipment is a <span className="font-semibold text-ink">Reefer</span> and pickup time is <span className="font-semibold text-ink">before 9:00 AM</span>
                       </div>
                    </div>
                    <div className="flex items-start gap-3 opacity-70 animate-pulse">
                       <div className="w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-[10px] font-bold text-purple-700 shrink-0 mt-1">3</div>
                       <div className="bg-purple-50 border border-purple-100 rounded p-2.5 text-xs flex-1 text-purple-800 shadow-sm">
                          <span className="font-medium">Action:</span> Block dispatch and alert manager...
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Step 3: Human Approval */}
      <div className={`absolute inset-0 transition-opacity duration-700 flex flex-col overflow-y-auto overflow-x-hidden ${activeStep === 3 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'}`}>
        <div className="bg-paper border-b border-line px-5 py-4 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-ink">Approvals</h3>
          </div>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-[11px] font-bold text-amber-700">1</span>
        </div>
        <div className="p-5 flex-1 flex flex-col">
           <div className="bg-white rounded-lg border border-line shadow-sm overflow-hidden flex-1 flex flex-col">
              <div className="p-3 border-b border-line bg-surface flex flex-col gap-1">
                 <div className="flex items-center gap-2">
                   <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
                   <span className="text-sm font-bold text-ink">Procedure: Dispatch Routing Rule</span>
                 </div>
                 <div className="flex flex-wrap items-center gap-2 mt-1 md:ml-6">
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
              
              <div className="p-4 flex flex-col gap-2 flex-1 relative bg-white">
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
               
              <div className="p-3 border-t border-line bg-surface flex gap-2">
                 <button className="flex-1 bg-white border border-line text-ink font-semibold text-xs py-2 rounded-lg hover:bg-paper transition-colors">
                   Edit
                 </button>
                 <button className="flex-1 bg-ink text-white font-semibold text-xs py-2 rounded-lg hover:bg-black transition-colors">
                   Approve
                 </button>
                 <button className="flex-1 bg-white border border-line text-ink font-semibold text-xs py-2 rounded-lg hover:bg-paper transition-colors">
                   Reject
                 </button>
              </div>
           </div>
        </div>
      </div>

      {/* Step 4: Skills Generated (Home Dashboard) */}
      <div className={`absolute inset-0 transition-opacity duration-700 flex flex-col overflow-y-auto overflow-x-hidden ${activeStep === 4 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'}`}>
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
                   <span className="text-xs font-medium text-ink truncate">Dispatch Route #8492</span>
                 </div>
                 <span className="text-[10px] text-faint shrink-0">2m ago</span>
               </div>
               <div className="px-3 py-2 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                   <span className="text-xs font-medium text-ink truncate">Driver Onboarding</span>
                 </div>
                 <span className="text-[10px] text-faint shrink-0">15m ago</span>
               </div>
               <div className="px-3 py-2 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                   <span className="text-xs font-medium text-ink truncate">Shortage Claim #CLM-9912</span>
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
