import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PLAYERS } from '@/data/mock';
import { Trophy, Medal, Crown } from 'lucide-react';

export default function Leaderboard() {
  const sortedPlayers = [...PLAYERS].sort((a, b) => b.kills - a.kills);

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0: return <Crown className="text-yellow-500" size={24} />;
      case 1: return <Medal className="text-gray-400" size={24} />;
      case 2: return <Medal className="text-orange-700" size={24} />;
      default: return <span className="font-bold text-muted-foreground">#{index + 1}</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-center py-8 text-center bg-gradient-to-b from-orange-500/10 to-transparent rounded-3xl">
        <Trophy className="text-orange-500 mb-4 animate-bounce" size={64} />
        <h2 className="text-4xl font-black">LEADERBOARD</h2>
        <p className="text-muted-foreground">The best of the best in Ghana.</p>
      </div>

      <div className="space-y-3">
        {sortedPlayers.map((player, index) => (
          <Card key={player.id} className={`border-none shadow-md ${index === 0 ? 'bg-orange-500/5 ring-2 ring-orange-500/20' : ''}`}>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-10 flex justify-center">
                {getRankIcon(index)}
              </div>
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-inner shrink-0">
                <img src={player.avatar} alt={player.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">{player.name}</h4>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-[10px] py-0">{player.rank}</Badge>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-black text-orange-500">{player.kills.toLocaleString()}</p>
                <p className="text-[10px] uppercase text-muted-foreground font-bold">Kills</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
