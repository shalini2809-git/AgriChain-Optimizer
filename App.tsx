
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { ViewType } from './types';

function App() {
  const [activeView, setActiveView] = useState<ViewType>('Dashboard');

  return (
    <div className="flex h-screen bg-slate-100 font-sans">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <Dashboard activeView={activeView} />
      </main>
    </div>
  );
}

export default App;
