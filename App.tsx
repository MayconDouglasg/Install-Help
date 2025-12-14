import React, { useState, useEffect } from 'react';
import { PROFILES, PROFILE_DEFAULTS, SOFTWARE_CATALOG, TRANSLATIONS } from './constants';
import { Category, ProfileType, UserSelection, Language, SoftwareItem } from './types';
import AppGrid from './components/AppGrid';
import { getAiRecommendations, getAppExplanation } from './services/geminiService';
import { 
  Search, 
  Wand2, 
  Download,
  Cpu,
  Loader2,
  LayoutTemplate,
  Moon,
  Sun,
  Globe,
  X,
  ExternalLink,
  ChevronRight,
  FileJson,
  Check,
  Sparkles
} from 'lucide-react';

export default function App() {
  // Theme & Language State
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [language, setLanguage] = useState<Language>('pt'); 
  
  // App State - Initialized from LocalStorage
  const [selection, setSelection] = useState<UserSelection>(() => {
    const saved = localStorage.getItem('installH_selection');
    return saved ? JSON.parse(saved) : {};
  });
  
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  
  // Checklist State (Visual only, not persistent)
  const [downloadedStatus, setDownloadedStatus] = useState<Record<string, boolean>>({});

  // AI Info Modal State
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [infoApp, setInfoApp] = useState<SoftwareItem | null>(null);
  const [infoText, setInfoText] = useState('');
  const [isInfoLoading, setIsInfoLoading] = useState(false);

  const t = TRANSLATIONS[language];

  // Theme Effect
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Persistence Effect
  useEffect(() => {
    localStorage.setItem('installH_selection', JSON.stringify(selection));
  }, [selection]);

  // Handlers
  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  const applyPreset = (p: ProfileType) => {
    // Apply defaults
    const defaults = PROFILE_DEFAULTS[p];
    const newSelection: UserSelection = {};
    defaults.forEach(id => newSelection[id] = true);
    setSelection(newSelection);
  };

  const toggleApp = (id: string) => {
    setSelection(prev => {
      return { ...prev, [id]: !prev[id] };
    });
  };

  const handleAiSearch = async () => {
    if (!aiPrompt.trim()) return;
    setIsAiLoading(true);
    try {
      // 1. Get IDs from AI
      const suggestedIds = await getAiRecommendations(aiPrompt);
      
      // 2. Select matching ones in catalog
      const newSelection = { ...selection };
      let foundCount = 0;
      
      suggestedIds.forEach(id => {
        // Try to find exact match or partial match in catalog
        const found = SOFTWARE_CATALOG.find(app => 
            app.id.toLowerCase() === id.toLowerCase() || 
            app.name.toLowerCase().includes(id.toLowerCase())
        );
        if (found) {
            newSelection[found.id] = true;
            foundCount++;
        }
      });
      
      setSelection(newSelection);
      
      if (foundCount === 0) {
          alert(language === 'pt' ? 'Nenhum app exato encontrado no catálogo para esta busca.' : 'No exact apps found in catalog for this search.');
      }

    } catch (error) {
      console.error(error);
    } finally {
      setIsAiLoading(false);
      setAiPrompt('');
    }
  };

  const handleAppInfo = async (app: SoftwareItem) => {
    setInfoApp(app);
    setShowInfoModal(true);
    setIsInfoLoading(true);
    setInfoText('');
    
    const text = await getAppExplanation(app.name, language);
    setInfoText(text);
    setIsInfoLoading(false);
  };

  const openDownloadModal = () => {
    setDownloadedStatus({}); // Reset status on open? Or keep it? Keeping it reset for fresh session feel.
    setShowDownloadModal(true);
  };

  const markAsDownloaded = (id: string) => {
    setDownloadedStatus(prev => ({ ...prev, [id]: true }));
  };

  const handleExportConfig = () => {
    const selectedAppsList = SOFTWARE_CATALOG.filter(app => selection[app.id]);
    
    // Create Winget-compatible JSON structure (simplified)
    const wingetConfig = {
      "$schema": "https://aka.ms/winget-settings.schema.json",
      "creationDate": new Date().toISOString(),
      "description": "Exported from install.H",
      "Sources": [
        {
          "Packages": selectedAppsList.map(app => ({
            "PackageIdentifier": app.id
          }))
        }
      ]
    };

    const blob = new Blob([JSON.stringify(wingetConfig, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'install_H_config.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const selectedCount = Object.values(selection).filter(Boolean).length;
  const selectedAppsList = SOFTWARE_CATALOG.filter(app => selection[app.id]);

  return (
    <div className="min-h-screen bg-brand-50 dark:bg-dark-bg text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="text-brand-600 dark:text-brand-400" size={24} />
            <h1 className="text-xl font-bold bg-gradient-to-r from-brand-600 to-brand-800 dark:from-brand-300 dark:to-brand-500 bg-clip-text text-transparent">
              install.H
            </h1>
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium transition-colors"
              title="Change Language"
            >
              <Globe size={16} />
              <span>{language === 'en' ? 'EN' : 'PT-BR'}</span>
            </button>

            <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-1"></div>

            <div className="flex items-center gap-2">
               <span className="bg-brand-600 text-white px-2 py-0.5 rounded-md text-xs font-mono">{selectedCount}</span>
               <span className="hidden sm:inline text-slate-500 dark:text-slate-400">{t.title}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 relative">
        
        <div className="animate-fade-in flex flex-col md:flex-row gap-8">
            
            {/* Sidebar Controls */}
            <aside className="w-full md:w-64 flex-shrink-0 space-y-6">
               
               {/* AI Assistant */}
               <div className="bg-white dark:bg-transparent dark:bg-gradient-to-br dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-4 border border-indigo-100 dark:border-indigo-500/20 shadow-sm dark:shadow-none">
                 <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-300">
                    <Wand2 size={16} />
                    <span className="font-semibold text-sm">{t.aiTitle}</span>
                 </div>
                 <div className="flex gap-2">
                   <input 
                      type="text"
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      placeholder={t.aiPlaceholder}
                      className="w-full bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1.5 text-sm focus:border-indigo-500 focus:outline-none placeholder:text-slate-400"
                      onKeyDown={(e) => e.key === 'Enter' && handleAiSearch()}
                   />
                   <button 
                      onClick={handleAiSearch}
                      disabled={isAiLoading}
                      className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-md px-2 flex items-center justify-center disabled:opacity-50"
                   >
                     {isAiLoading ? <Loader2 size={14} className="animate-spin" /> : <Search size={14} />}
                   </button>
                 </div>
               </div>

               {/* Quick Presets */}
               <div className="bg-white dark:bg-dark-card rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none">
                 <h3 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-3 flex items-center gap-2">
                    <LayoutTemplate size={14} /> {t.presets}
                 </h3>
                 <div className="grid grid-cols-2 gap-2">
                    {PROFILES.map(p => (
                        <button
                            key={p.id}
                            onClick={() => applyPreset(p.id)}
                            className="text-xs font-medium px-2 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-brand-100 dark:hover:bg-brand-900/40 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors text-center truncate"
                            title={p.description}
                        >
                            {(t as any)[p.labelKey] || p.labelKey}
                        </button>
                    ))}
                 </div>
               </div>

               {/* Categories */}
               <div className="bg-white dark:bg-dark-card rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none">
                 <h3 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-3">{t.categories}</h3>
                 <div className="space-y-1">
                   {['All', 'Browsers', 'Development', 'Gaming', 'Multimedia', 'Creative', 'Utilities', 'Drivers', 'Communication'].map((cat) => (
                     <button
                        key={cat}
                        onClick={() => setActiveCategory(cat as any)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          activeCategory === cat 
                            ? 'bg-brand-500/10 text-brand-600 dark:text-brand-300 border border-brand-500/30 font-medium' 
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                     >
                       {cat === 'All' ? t.all : 
                        cat === 'Development' ? t.dev :
                        cat === 'Browsers' ? t.browsers :
                        cat === 'Gaming' ? t.gaming :
                        cat === 'Multimedia' ? t.multimedia :
                        cat === 'Creative' ? t.creative :
                        cat === 'Utilities' ? t.utilities :
                        cat === 'Drivers' ? t.drivers :
                        cat === 'Communication' ? t.communication : cat
                       }
                     </button>
                   ))}
                 </div>
               </div>
               
               <div className="sticky top-24 space-y-3">
                 <button 
                  onClick={openDownloadModal}
                  disabled={selectedCount === 0}
                  className="w-full bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <Download />
                  {t.downloadButton}
                </button>
                
                {selectedCount > 0 && (
                  <button 
                    onClick={handleExportConfig}
                    className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <FileJson size={14} />
                    {t.exportButton}
                  </button>
                )}

                <p className="text-center text-xs text-slate-500 mt-2">
                  {t.downloadSub}
                </p>
               </div>
            </aside>

            {/* Main Grid */}
            <div className="flex-1">
               <div className="mb-6 flex gap-4">
                 <div className="relative flex-1">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                   <input 
                      type="text" 
                      placeholder={t.searchPlaceholder}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition-all text-slate-800 dark:text-slate-200 placeholder:text-slate-400"
                   />
                 </div>
               </div>

               <AppGrid 
                 catalog={SOFTWARE_CATALOG}
                 selection={selection}
                 onToggle={toggleApp}
                 onInfo={handleAppInfo}
                 filterCategory={activeCategory}
                 searchTerm={searchTerm}
               />
            </div>
          </div>

      </main>

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-dark-card w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 max-h-[80vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Download className="text-brand-500" size={24} />
                  {t.modalTitle}
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t.modalDesc}</p>
              </div>
              <button 
                onClick={() => setShowDownloadModal(false)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-400 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {selectedAppsList.map(app => {
                const isDownloaded = !!downloadedStatus[app.id];
                return (
                  <div key={app.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-700 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 p-1.5 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                        <img src={app.icon} alt={app.name} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{app.name}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-500">{app.category}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <a 
                        href={app.downloadUrl || app.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => markAsDownloaded(app.id)}
                        className={`
                          flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                          ${isDownloaded 
                            ? 'bg-green-600 text-white shadow-none' 
                            : app.downloadUrl 
                              ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/20' 
                              : 'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200'
                          }
                        `}
                      >
                        {isDownloaded ? (
                          <>
                            <Check size={14} />
                            {t.downloaded}
                          </>
                        ) : app.downloadUrl ? (
                          <>
                            <Download size={14} />
                            {t.downloadNow}
                          </>
                        ) : (
                          <>
                            <ExternalLink size={14} />
                            {t.openPage}
                          </>
                        )}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30 rounded-b-2xl flex justify-end">
              <button 
                onClick={() => setShowDownloadModal(false)}
                className="px-6 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {t.modalClose}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* AI Info Modal */}
      {showInfoModal && infoApp && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
           <div className="bg-white dark:bg-dark-card w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col relative overflow-hidden">
             
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

             <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-50 dark:bg-slate-800 p-2 border border-slate-100 dark:border-slate-700 flex-shrink-0">
                    <img src={infoApp.icon} alt={infoApp.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">{infoApp.name}</h3>
                    <div className="flex items-center gap-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                      <Sparkles size={12} />
                      {t.aiInfoTitle}
                    </div>
                  </div>
                </div>

                <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed min-h-[60px] bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                   {isInfoLoading ? (
                     <div className="flex items-center gap-2 text-slate-400">
                       <Loader2 size={16} className="animate-spin" />
                       {t.aiInfoLoading}
                     </div>
                   ) : (
                     infoText
                   )}
                </div>

                <div className="mt-6 flex justify-end">
                   <button 
                      onClick={() => setShowInfoModal(false)}
                      className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors"
                   >
                     {t.close}
                   </button>
                </div>
             </div>
           </div>
         </div>
      )}

    </div>
  );
}