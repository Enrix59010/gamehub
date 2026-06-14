import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Trophy, Users, Play, User, LayoutGrid, MessageSquare, Shield } from 'lucide-react';

export const Navbar = () => {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/tournaments', icon: Trophy, label: 'Tournaments' },
    { to: '/squads', icon: Users, label: 'Squads' },
    { to: '/clips', icon: Play, label: 'Clips' },
    { to: '/chat', icon: MessageSquare, label: 'Chat' },
    { to: '/guilds', icon: Shield, label: 'Guilds' },
    { to: '/leaderboard', icon: LayoutGrid, label: 'Leaderboard' },
    { to: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border h-14 flex items-center px-4 justify-between">
        <h1 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          GameHub GH
        </h1>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
            <span className="text-xs font-bold">GH</span>
          </div>
        </div>
      </header>

      {/* Bottom Nav for Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t border-border h-16 safe-area-pb lg:hidden">
        <div className="flex items-center justify-around h-full max-w-md mx-auto">
          {navItems.slice(0, 5).map((item) => (
             <NavLink
               key={item.to}
               to={item.to}
               className={({ isActive }) =>
                 `flex flex-col items-center justify-center gap-1 min-w-[64px] transition-colors ${
                   isActive ? 'text-orange-500' : 'text-muted-foreground'
                 }`
               }
             >
               <item.icon size={20} />
               <span className="text-[10px] font-medium">{item.label}</span>
             </NavLink>
           ))}
        </div>
      </nav>

      {/* Sidebar for Desktop */}
      <nav className="hidden lg:flex fixed left-0 top-14 bottom-0 w-64 bg-card border-r border-border flex-col p-4 gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive 
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                  : 'text-muted-foreground hover:bg-muted'
              }`
            }
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
};
