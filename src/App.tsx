import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import Home from './pages/Home';
import Tournaments from './pages/Tournaments';
import SquadFinder from './pages/SquadFinder';
import Clips from './pages/Clips';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard';
import Guilds from './pages/Guilds';
import Chat from './pages/Chat';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <Router>
      <AppShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/squads" element={<SquadFinder />} />
          <Route path="/clips" element={<Clips />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/guilds" element={<Guilds />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </AppShell>
      <Toaster position="top-center" richColors />
    </Router>
  );
}

export default App;
