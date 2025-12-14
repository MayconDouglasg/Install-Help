import React from 'react';
import { SoftwareItem, UserSelection, Category } from '../types';
import { Check, Download, ExternalLink, Info } from 'lucide-react';

interface AppGridProps {
  catalog: SoftwareItem[];
  selection: UserSelection;
  onToggle: (id: string) => void;
  onInfo: (app: SoftwareItem) => void;
  filterCategory: Category | 'All';
  searchTerm: string;
}

const AppGrid: React.FC<AppGridProps> = ({ catalog, selection, onToggle, onInfo, filterCategory, searchTerm }) => {
  
  const filteredApps = catalog.filter(app => {
    const matchesCategory = filterCategory === 'All' || app.category === filterCategory;
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          app.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {filteredApps.map((app) => {
        const isSelected = !!selection[app.id];
        return (
          <div 
            key={app.id}
            className={`
              relative group border rounded-xl p-4 transition-all duration-200
              flex flex-col gap-3
              ${isSelected 
                ? 'bg-brand-50 border-brand-500 dark:bg-brand-900/20 shadow-[0_0_15px_rgba(14,165,233,0.15)]' 
                : 'bg-white dark:bg-dark-card border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-dark-hover'
              }
            `}
          >
            {/* Click area for selection */}
            <div 
              className="absolute inset-0 cursor-pointer z-0" 
              onClick={() => onToggle(app.id)}
            />

            <div className="flex justify-between items-start z-10 pointer-events-none">
              <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-white/5 p-2 flex items-center justify-center overflow-hidden border border-slate-100 dark:border-transparent">
                <img src={app.icon} alt={app.name} className="w-full h-full object-contain" onError={(e) => {
                   // Fallback if image fails
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.parentElement!.innerText = app.name[0];
                }} />
              </div>
              <div className="flex gap-2 pointer-events-auto">
                 {/* AI Info Button */}
                 <button 
                   onClick={(e) => { e.stopPropagation(); onInfo(app); }}
                   className="w-6 h-6 rounded-full flex items-center justify-center text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                   title="AI Info"
                 >
                   <Info size={14} />
                 </button>
                 {/* External Link Button */}
                 <a 
                   href={app.website} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="w-6 h-6 rounded-full flex items-center justify-center text-slate-400 hover:text-brand-600 dark:hover:text-brand-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                   title="Visit Official Website"
                   onClick={(e) => e.stopPropagation()}
                 >
                   <ExternalLink size={14} />
                 </a>
                 {/* Selection Checkbox/Icon */}
                 <div 
                   onClick={() => onToggle(app.id)}
                   className={`
                    w-6 h-6 rounded-full flex items-center justify-center transition-colors cursor-pointer
                    ${isSelected ? 'bg-brand-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-400 group-hover:bg-slate-300 dark:group-hover:bg-slate-600'}
                  `}
                 >
                   {isSelected ? <Check size={14} /> : <Download size={14} />}
                 </div>
              </div>
            </div>
            
            <div className="pointer-events-none z-10">
              <h3 className="font-semibold text-slate-800 dark:text-slate-100">{app.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{app.description}</p>
            </div>

            <div className="mt-auto pt-2 flex items-center gap-2 pointer-events-none z-10">
               <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold bg-slate-100 dark:bg-slate-800/50 px-2 py-0.5 rounded border border-slate-200 dark:border-transparent">
                 {app.category}
               </span>
               {app.popular && (
                 <span className="text-[10px] uppercase tracking-wider text-amber-600 dark:text-amber-500 font-bold bg-amber-100 dark:bg-amber-900/20 px-2 py-0.5 rounded border border-amber-500/30">
                   Hot
                 </span>
               )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AppGrid;