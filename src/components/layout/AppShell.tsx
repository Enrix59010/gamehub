import React from 'react';
import { Navbar } from './Navbar';

export const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-14 pb-20 lg:pb-0 lg:pl-64 min-h-screen">
        <div className="max-w-screen-xl mx-auto p-4 md:p-6 lg:p-8 animate-in fade-in duration-500">
          {children}
        </div>
      </main>
    </div>
  );
};
