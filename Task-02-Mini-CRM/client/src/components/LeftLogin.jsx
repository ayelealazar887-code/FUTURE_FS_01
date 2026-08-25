import React from 'react';

const LeftHero = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center w-1/2 bg-gradient-to-br from-orange-500 via-orange-600 to-rose-600 p-16 text-white min-h-screen">
      <div className="max-w-md space-y-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md shadow-inner text-2xl font-bold">
          C
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight">
          CORE CRM
        </h1>
        <p className="text-orange-100 text-lg leading-relaxed">
          Manage client leads, track sales pipelines, monitor activities, and scale your business from one unified platform.
        </p>
      </div>
    </div>
  );
};

export default LeftHero;