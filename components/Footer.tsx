import React from 'react';

const Footer: React.FC = () => {
  return (
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
          <button className="flex items-center justify-center h-6 w-7 rounded-sm bg-[#30363d] text-white transition-all shadow-sm">
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
  );
};

export default Footer;