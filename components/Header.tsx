import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[rgba(11,12,16,0.7)] backdrop-blur-[16px] border-b border-white/10 px-4 h-12 flex items-center justify-between shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="text-white hover:opacity-80 transition-opacity cursor-pointer flex items-center">
          <svg fill="none" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 20L12 16L22 20L12 2Z" fill="#ffffff"></path>
          </svg>
        </div>
        <span className="text-gray-700 text-sm font-light select-none">/</span>
        <button className="flex items-center gap-2 group px-2 py-1 rounded hover:bg-white/5 transition-all border border-transparent hover:border-white/10">
          <span className="text-xs font-semibold tracking-tight text-white">Team Apollo</span>
          <span className="px-1.5 py-0.5 rounded border border-gray-700 text-[10px] font-medium text-gray-400 leading-none bg-black/20">Hobby</span>
          <span className="material-symbols-outlined text-gray-500 text-[16px] group-hover:text-white transition-colors">expand_more</span>
        </button>
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
  );
};

export default Header;