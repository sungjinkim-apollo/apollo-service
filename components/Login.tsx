import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // Navigate to the dashboard (New Project Zero State)
    navigate('/dashboard');
  };

  return (
    <div className="font-display antialiased bg-[#0B0C10] text-white">
      <div className="relative flex h-screen w-full flex-col overflow-hidden">
        <header className="absolute top-0 left-0 p-8 z-20">
          <div aria-label="Spear Logo" className="text-white">
            <svg
              fill="none"
              height="32"
              viewBox="0 0 24 24"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 20L12 16L22 20L12 2Z" fill="#ffffff"></path>
            </svg>
          </div>
        </header>
        <main className="flex flex-1 flex-col items-center justify-center optical-center px-4">
          <div className="w-full max-w-[360px] flex flex-col items-center text-center gap-8">
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-bold text-white tracking-tight">
                Log in to F-1
              </h1>
              <p className="text-sm text-gray-400 font-normal leading-relaxed">
                Deploy your game to the global edge.
              </p>
            </div>
            <div className="w-full">
              <button
                onClick={handleGoogleLogin}
                className="relative flex w-full cursor-pointer items-center justify-center gap-3 rounded-md bg-white px-4 py-3 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-[#0B0C10]"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  ></path>
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>
          </div>
        </main>
        <footer className="absolute bottom-0 w-full pb-8">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
            <a
              className="hover:text-gray-400 transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <span className="text-gray-700">•</span>
            <a
              className="hover:text-gray-400 transition-colors"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Login;