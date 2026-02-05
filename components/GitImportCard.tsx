import React from 'react';

const GitImportCard: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default GitImportCard;