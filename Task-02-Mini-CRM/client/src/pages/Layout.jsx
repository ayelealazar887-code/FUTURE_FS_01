import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from '../components/Sidebar'

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 lg:flex">
      <Sidebar isMenuOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />

      <main className="min-w-0 flex-1 overflow-y-auto p-4 pt-20 sm:p-6 sm:pt-20 lg:p-8">
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          className="fixed left-4 top-4 z-30 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-orange-300 hover:text-orange-600 lg:hidden"
        >
          <span className="sr-only">Open navigation menu</span>
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;