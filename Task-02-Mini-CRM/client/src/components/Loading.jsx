import React from 'react';

const LoadingPage = ({ message = "Loading CRM Dashboard..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full bg-slate-50 relative overflow-hidden font-sans">
      
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col items-center space-y-6 z-10">

        {/* Logo */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-500 to-rose-600 animate-ping opacity-20" />

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-500 to-rose-600 flex items-center justify-center text-white text-3xl font-extrabold shadow-lg shadow-orange-500/25">
            C
          </div>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden relative">
          <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-orange-500 to-rose-600 rounded-full animate-[loading_1.5s_infinite_ease-in-out]" />
        </div>

        {/* Message */}
        <div className="text-center space-y-1">
          <p className="text-slate-800 font-semibold text-sm tracking-wide">
            {message}
          </p>

          <p className="text-xs text-slate-400">
            Please wait a moment...
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoadingPage;