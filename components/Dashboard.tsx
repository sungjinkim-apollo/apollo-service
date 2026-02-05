import React, { useState } from 'react';
import TeamSwitcher from './TeamSwitcher';
import TemplateCard from './TemplateCard';
import { Team, GameTemplate } from '../types';

// Mock Data
const TEAMS: Team[] = [
  {
    id: 'apollo',
    name: 'Apollo',
    initial: 'A',
    projects: [
      { id: 'p1', name: 'f1-moba-server', icon: 'sports_esports', iconColorClass: 'text-emerald-500', iconBgClass: 'bg-emerald-500/20 border-emerald-500/20', isActive: true },
      { id: 'p2', name: 'react-dashboard', icon: 'dashboard', iconColorClass: 'text-amber-500', iconBgClass: 'bg-amber-500/20 border-amber-500/20', status: 'Dev', statusColorClass: 'text-text-secondary' },
      { id: 'p3', name: 'godot-export-test', icon: 'folder_zip', iconColorClass: 'text-gray-400', iconBgClass: 'bg-gray-700/50 border-gray-600/50', status: 'Staging', statusColorClass: 'text-text-secondary' },
      { id: 'p4', name: 'api-gateway', icon: 'cloud_circle', iconColorClass: 'text-sky-500', iconBgClass: 'bg-sky-500/20 border-sky-500/20' },
      { id: 'p5', name: 'payment-service', icon: 'credit_card', iconColorClass: 'text-rose-500', iconBgClass: 'bg-rose-500/20 border-rose-500/20', status: 'Error', statusColorClass: 'text-red-400' },
    ]
  },
  {
    id: 'devops',
    name: 'DevOps Inc',
    initial: 'D',
    projects: [
      { id: 'd1', name: 'billing-system', icon: 'credit_card', iconColorClass: 'text-rose-500', iconBgClass: 'bg-rose-500/20 border-rose-500/20' },
      { id: 'd2', name: 'infrastructure-api', icon: 'cloud_circle', iconColorClass: 'text-sky-500', iconBgClass: 'bg-sky-500/20 border-sky-500/20', status: 'Dev', statusColorClass: 'text-primary' },
    ]
  }
];

const TEMPLATES: GameTemplate[] = [
  { 
    id: 't1', 
    title: 'Cyber Arena', 
    category: 'FPS / Multiplayer / Sci-Fi', 
    description: 'Fast-paced futuristic shooter.', 
    icon: 'memory', 
    bgGradient: 'from-indigo-950 via-purple-900 to-indigo-800', 
    patternClass: 'circuit-pattern', 
    hoverColorClass: 'group-hover:text-primary', 
    hoverBorderClass: 'hover:border-primary/50', 
    shadowClass: 'hover:shadow-[0_0_40px_rgba(58,191,248,0.1)]' 
  },
  { 
    id: 't2', 
    title: 'Mystic Lands', 
    category: 'MMORPG / Open World', 
    description: 'Open world fantasy adventure.', 
    icon: 'auto_awesome', 
    bgGradient: 'from-red-950 via-red-900 to-orange-950', 
    patternClass: 'runic-pattern', 
    hoverColorClass: 'group-hover:text-red-400', 
    hoverBorderClass: 'hover:border-red-500/50', 
    shadowClass: 'hover:shadow-[0_0_40px_rgba(239,68,68,0.1)]' 
  },
  { 
    id: 't3', 
    title: 'Block Survivor', 
    category: 'Voxel / Survival / Crafting', 
    description: 'Voxel-based survival game.', 
    icon: 'grid_view', 
    bgGradient: 'from-emerald-950 via-emerald-900 to-teal-950', 
    patternClass: 'grid-pattern', 
    hoverColorClass: 'group-hover:text-emerald-400', 
    hoverBorderClass: 'hover:border-emerald-500/50', 
    shadowClass: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]' 
  },
  { 
    id: 't4', 
    title: 'Space Racer', 
    category: 'Simulation / Racing / Galaxy', 
    description: 'High-speed space racing.', 
    icon: 'rocket_launch', 
    bgGradient: 'from-blue-950 via-blue-900 to-cyan-950', 
    patternClass: 'hex-pattern', 
    hoverColorClass: 'group-hover:text-blue-400', 
    hoverBorderClass: 'hover:border-blue-500/50', 
    shadowClass: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]' 
  },
  { 
    id: 't5', 
    title: 'Pixel Dungeon', 
    category: '2D RPG / Roguelike', 
    description: 'Retro roguelike dungeon crawler.', 
    icon: 'castle', 
    bgGradient: 'from-yellow-900 via-orange-900 to-yellow-950', 
    patternClass: 'visual-pattern', 
    hoverColorClass: 'group-hover:text-yellow-400', 
    hoverBorderClass: 'hover:border-yellow-500/50', 
    shadowClass: 'hover:shadow-[0_0_40px_rgba(234,179,8,0.1)]' 
  },
  { 
    id: 't6', 
    title: 'Sky Wars', 
    category: 'Battle Royale / PVP', 
    description: 'Aerial combat battle royale.', 
    icon: 'air', 
    bgGradient: 'from-cyan-950 via-teal-900 to-cyan-900', 
    patternClass: 'visual-pattern', 
    hoverColorClass: 'group-hover:text-cyan-400', 
    hoverBorderClass: 'hover:border-cyan-500/50', 
    shadowClass: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]' 
  },
];

const Dashboard: React.FC = () => {
  const [currentTeam, setCurrentTeam] = useState<Team>(TEAMS[0]);

  return (
    <div className="bg-background-dark text-white antialiased selection:bg-primary/30 selection:text-primary min-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-header border-b border-white/10 px-4 h-12 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3 relative">
          <div className="text-white hover:opacity-80 transition-opacity cursor-pointer flex items-center">
            <svg fill="none" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 20L12 16L22 20L12 2Z" fill="#ffffff"></path>
            </svg>
          </div>
          <span className="text-gray-700 text-sm font-light select-none">/</span>
          <TeamSwitcher currentTeam={currentTeam} allTeams={TEAMS} onTeamSelect={setCurrentTeam} />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all text-[11px]">
              <span>Find...</span>
              <span className="text-[9px] bg-white/10 px-1 rounded font-mono">⌘K</span>
            </button>
            <div className="h-3 w-px bg-white/10"></div>
            <button className="text-[11px] font-medium text-gray-400 hover:text-white transition-colors">Feedback</button>
            <div className="h-3 w-px bg-white/10"></div>
            <button className="relative text-gray-400 hover:text-white transition-colors flex items-center">
              <span className="material-symbols-outlined text-[18px]">notifications</span>
              <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 bg-red-500 rounded-full border border-[#0B0C10]"></span>
            </button>
            <button className="text-gray-400 hover:text-white transition-colors flex items-center">
              <span className="material-symbols-outlined text-[18px]">help</span>
            </button>
          </div>
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border border-primary/30 flex items-center justify-center text-[9px] font-bold text-white shadow-inner cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
            TA
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col pt-24 px-6 pb-2 max-w-[1440px] w-full mx-auto h-full overflow-y-auto">
        <div className="mb-2">
          <h1 className="text-3xl font-bold tracking-tight mb-1">New Project</h1>
          <p className="text-text-secondary text-base">Launch your next gaming experience from code or a template.</p>
        </div>

        {/* Input Field */}
        <div className="mb-6 relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
            <svg aria-hidden="true" className="w-5 h-5 text-text-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.44 5.865 20.181 9.839 21.504C10.339 21.595 10.522 21.286 10.522 21.018C10.522 20.78 10.512 19.99 10.506 19.093C6.753 19.91 5.961 18.232 5.961 18.232C5.506 17.078 4.851 16.771 4.851 16.771C3.626 15.933 4.944 15.95 4.944 15.95C6.299 16.045 7.012 17.342 7.012 17.342C8.216 19.406 10.171 18.81 10.938 18.463C11.06 17.589 11.41 16.993 11.797 16.655C8.801 16.315 5.653 15.156 5.653 9.982C5.653 8.509 6.179 7.307 7.035 6.368C6.897 6.027 6.435 4.654 7.167 2.798C7.167 2.798 8.3 2.435 10.88 4.183C11.956 3.884 13.111 3.735 14.262 3.74C15.412 3.735 16.568 3.884 17.646 4.183C20.224 2.435 21.356 2.798 21.356 2.798C22.09 4.654 21.629 6.027 21.491 6.368C22.349 7.307 22.873 8.509 22.873 9.982C22.873 15.168 19.721 16.311 16.719 16.645C17.206 17.065 17.641 17.892 17.641 19.157C17.641 20.966 17.625 22.427 17.625 21.018C17.625 21.291 17.805 21.603 18.312 21.503C22.283 20.178 26.147 16.438 26.147 12.017C26.147 6.484 21.67 2 16.147 2H12Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <input className="w-full h-12 pl-12 pr-36 rounded-xl bg-surface-dark border border-border-dark text-white placeholder-text-secondary/60 focus:ring-1 focus:ring-primary focus:border-primary transition-all shadow-sm text-sm" placeholder="Import from URL (e.g. https://github.com/username/project)" type="text" />
          <div className="absolute inset-y-0 right-1.5 flex items-center">
            <button className="bg-white hover:bg-gray-200 text-[#0B0C10] font-bold text-xs h-9 px-4 rounded-lg transition-colors shadow-md">
              Import
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 pb-8">
          {/* Sidebar - Git Import */}
          <aside className="lg:w-[30%] flex flex-col border-r border-white/10 pr-6">
            <h3 className="text-xl font-bold text-white mb-4">Import Git Repository</h3>
            <div className="h-full bg-transparent border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center">
              <div className="mb-4 transition-transform hover:scale-110">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.44 5.865 20.181 9.839 21.504C10.339 21.595 10.522 21.286 10.522 21.018C10.522 20.78 10.512 19.99 10.506 19.093C6.753 19.91 5.961 18.232 5.961 18.232C5.506 17.078 4.851 16.771 4.851 16.771C3.626 15.933 4.944 15.95 4.944 15.95C6.299 16.045 7.012 17.342 7.012 17.342C8.216 19.406 10.171 18.81 10.938 18.463C11.06 17.589 11.41 16.993 11.797 16.655C8.801 16.315 5.653 15.156 5.653 9.982C5.653 8.509 6.179 7.307 7.035 6.368C6.897 6.027 6.435 4.654 7.167 2.798C7.167 2.798 8.3 2.435 10.88 4.183C11.956 3.884 13.111 3.735 14.262 3.74C15.412 3.735 16.568 3.884 17.646 4.183C20.224 2.435 21.356 2.798 21.356 2.798C22.09 4.654 21.629 6.027 21.491 6.368C22.349 7.307 22.873 8.509 22.873 9.982C22.873 15.168 19.721 16.311 16.719 16.645C17.206 17.065 17.641 17.892 17.641 19.157C17.641 20.966 17.625 22.427 17.625 21.018C17.625 21.291 17.805 21.603 18.312 21.503C22.283 20.178 26.147 16.438 26.147 12.017C26.147 6.484 21.67 2 16.147 2H12Z" fillRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Connect Git</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-[90%] mx-auto">
                Access your repositories to deploy projects instantly from GitHub.
              </p>
              <button className="flex items-center justify-center gap-2 px-6 py-2.5 w-full rounded-lg bg-[#24292f] hover:bg-[#2c333a] text-white text-sm font-bold transition-all border border-border-dark shadow-xl active:scale-95 h-auto min-h-[44px]">
                <span className="whitespace-normal leading-tight">Connect with GitHub</span>
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </button>
            </div>
          </aside>

          {/* Main Content Area */}
          <section className="lg:w-[70%] flex flex-col">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
              <h3 className="text-xl font-bold text-white">Start with a Game Template</h3>
              <div className="flex flex-wrap items-center gap-2">
                <button className="px-4 py-1.5 rounded-full text-[11px] font-bold bg-primary text-background-dark shadow-[0_0_20px_rgba(58,191,248,0.3)]">All</button>
                <button className="px-4 py-1.5 rounded-full text-[11px] font-bold bg-surface-dark border border-border-dark text-text-secondary hover:text-white hover:border-gray-500 transition-all">FPS</button>
                <button className="px-4 py-1.5 rounded-full text-[11px] font-bold bg-surface-dark border border-border-dark text-text-secondary hover:text-white hover:border-gray-500 transition-all">RPG</button>
                <button className="px-4 py-1.5 rounded-full text-[11px] font-bold bg-surface-dark border border-border-dark text-text-secondary hover:text-white hover:border-gray-500 transition-all">Survival</button>
                <button className="px-4 py-1.5 rounded-full text-[11px] font-bold bg-surface-dark border border-border-dark text-text-secondary hover:text-white hover:border-gray-500 transition-all">Racing</button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/5 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">more_horiz</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-5">
              {TEMPLATES.map((template) => (
                <TemplateCard key={template.id} template={template} />
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

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-[#0B0C10] py-3 px-6 mt-auto flex items-center justify-between z-50 relative">
        <div className="flex items-center gap-4">
          <div className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
            <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 20L12 16L22 20L12 2Z" fill="#6B7280"></path>
            </svg>
          </div>
          <nav className="flex items-center gap-4 text-xs text-gray-500 font-medium">
            <a className="hover:text-white transition-colors" href="#">Home</a>
            <a className="hover:text-white transition-colors" href="#">Docs</a>
            <a className="hover:text-white transition-colors" href="#">Blog</a>
            <button className="flex items-center gap-0.5 hover:text-white transition-colors group">
              SDKs <span className="material-symbols-outlined text-[14px] text-gray-600 group-hover:text-white transition-colors">expand_more</span>
            </button>
            <a className="hover:text-white transition-colors" href="#">Help</a>
            <a className="hover:text-white transition-colors" href="#">Contact</a>
            <button className="flex items-center gap-0.5 hover:text-white transition-colors group">
              Legal <span className="material-symbols-outlined text-[14px] text-gray-600 group-hover:text-white transition-colors">expand_more</span>
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 group cursor-default">
            <div className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary shadow-[0_0_6px_rgba(56,189,248,0.8)]"></span>
            </div>
            <span className="text-[9px] font-bold text-primary tracking-tight uppercase">All systems normal</span>
          </div>
          <div className="flex bg-white/5 p-0.5 rounded border border-white/10 shadow-inner">
            <button className="flex items-center justify-center h-6 w-7 rounded-sm text-gray-500 hover:text-white transition-all active bg-white/10">
              <span className="material-symbols-outlined text-[14px]">monitor</span>
            </button>
            <button className="flex items-center justify-center h-6 w-7 rounded-sm text-gray-500 hover:text-white transition-all">
              <span className="material-symbols-outlined text-[14px]">light_mode</span>
            </button>
            <button className="flex items-center justify-center h-6 w-7 rounded-sm text-gray-500 hover:text-white transition-all">
              <span className="material-symbols-outlined text-[14px]">dark_mode</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;