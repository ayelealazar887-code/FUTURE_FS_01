import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutGrid,
  UserPlus,
  GitMerge,
  ClipboardList,
  Users,
  Settings,
  Sparkles,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Sales Overview', path: '/salesoverview', icon: LayoutGrid },
    { label: 'Add Leader', path: '/addleader', icon: UserPlus },
    { label: 'Sales Pipeline', path: '/salespipeline', icon: GitMerge },
    { label: 'Activities', path: '/activities', icon: ClipboardList },
    { label: 'Leads', path: '/leads', icon: Users },
    { label: 'Settings', path: '/settings', icon: Settings },
  ];

  const handleLogout = () => {
    // Add any token cleanup / auth clear logic here
    navigate('/login');
  };

  return (
    <aside className="w-64 h-screen bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-5 select-none font-sans text-slate-300">
      {/* Top Header & Navigation */}
      <div>
        {/* Brand Logo & Title */}
        <div className="flex items-center space-x-3 mb-8 px-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
            <Sparkles className="w-5 h-5 fill-current text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-wider text-white">
              CORE CRM
            </span>
            <span className="text-[10px] uppercase font-semibold text-orange-400 tracking-widest">
              Enterprise
            </span>
          </div>
        </div>

        {/* Menu Heading */}
        <div className="px-3 mb-3">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            Main Menu
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-orange-500/20 to-rose-500/10 border-l-4 border-orange-500 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? 'text-orange-400' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-sm shadow-orange-500" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout Action Footer */}
      <div className="pt-4 border-t border-slate-800/80">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors duration-200 group"
        >
          <LogOut className="w-4 h-4 text-rose-400 group-hover:translate-x-0.5 transition-transform" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;