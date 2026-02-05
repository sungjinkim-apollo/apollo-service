import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GitImportCard from './components/GitImportCard';
import GameTemplateCard from './components/GameTemplateCard';
import FilterBadge from './components/FilterBadge';
import { GameTemplate, GAME_TEMPLATES } from './types';

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <>
      <Header />
      
      <main className="flex-1 flex flex-col pt-24 px-6 pb-2 max-w-[1440px] w-full mx-auto h-full overflow-y-auto">
        <div className="mb-2">
          <h1 className="text-3xl font-bold tracking-tight mb-1">New Project</h1>
          <p className="text-text-secondary text-base">Launch your next gaming experience from code or a template.</p>
        </div>

        {/* Import Bar */}
        <div className="mb-6 relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
            <svg aria-hidden="true" className="w-5 h-5 text-text-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.44 5.865 20.181 9.839 21.504C10.339 21.595 10.522 21.286 10.522 21.018C10.522 20.78 10.512 19.99 10.506 19.093C6.753 19.91 5.961 18.232 5.961 18.232C5.506 17.078 4.851 16.771 4.851 16.771C3.626 15.933 4.944 15.95 4.944 15.95C6.299 16.045 7.012 17.342 7.012 17.342C8.216 19.406 10.171 18.81 10.938 18.463C11.06 17.589 11.41 16.993 11.797 16.655C8.801 16.315 5.653 15.156 5.653 9.982C5.653 8.509 6.179 7.307 7.035 6.368C6.897 6.027 6.435 4.654 7.167 2.798C7.167 2.798 8.3 2.435 10.88 4.183C11.956 3.884 13.111 3.735 14.262 3.74C15.412 3.735 16.568 3.884 17.646 4.183C20.224 2.435 21.356 2.798 21.356 2.798C22.09 4.654 21.629 6.027 21.491 6.368C22.349 7.307 22.873 8.509 22.873 9.982C22.873 15.168 19.721 16.311 16.719 16.645C17.206 17.065 17.641 17.892 17.641 19.157C17.641 20.966 17.625 22.427 17.625 21.018C17.625 21.291 17.805 21.603 18.312 21.503C22.283 20.178 26.147 16.438 26.147 12.017C26.147 6.484 21.67 2 16.147 2H12Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <input 
            className="w-full h-12 pl-12 pr-36 rounded-xl bg-surface-dark border border-border-dark text-white placeholder-text-secondary/60 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all shadow-sm text-sm" 
            placeholder="Import from URL (e.g. https://github.com/username/project)" 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 right-1.5 flex items-center">
            <button className="bg-white hover:bg-gray-200 text-[#0B0C10] font-bold text-xs h-9 px-4 rounded-lg transition-colors shadow-md">
                Import
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          {/* Left Sidebar */}
          <aside className="lg:w-[30%] flex flex-col border-r border-white/10 pr-6">
            <GitImportCard />
          </aside>

          {/* Main Grid */}
          <section className="lg:w-[70%] flex flex-col">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
              <h3 className="text-xl font-bold text-white">Start with a Game Template</h3>
              <div className="flex flex-wrap items-center gap-2">
                <FilterBadge label="All" isActive={activeFilter === 'All'} onClick={() => setActiveFilter('All')} />
                <FilterBadge label="FPS" isActive={activeFilter === 'FPS'} onClick={() => setActiveFilter('FPS')} />
                <FilterBadge label="RPG" isActive={activeFilter === 'RPG'} onClick={() => setActiveFilter('RPG')} />
                <FilterBadge label="Survival" isActive={activeFilter === 'Survival'} onClick={() => setActiveFilter('Survival')} />
                <FilterBadge label="Racing" isActive={activeFilter === 'Racing'} onClick={() => setActiveFilter('Racing')} />
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/5 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">more_horiz</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-5">
              {GAME_TEMPLATES.map((template) => (
                <GameTemplateCard key={template.title} template={template} />
              ))}
            </div>

            <button className="group w-full h-12 border border-border-dark rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:border-primary active:scale-[0.99] bg-transparent">
              <span className="material-symbols-outlined text-text-secondary group-hover:text-primary transition-colors">grid_view</span>
              <span className="text-text-secondary group-hover:text-primary font-semibold transition-colors text-sm">Explore all 274+ game templates</span>
              <span className="material-symbols-outlined text-text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
            </button>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default App;