import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PLAYERS, Player } from '@/data/mock';
import { Search, MessageSquare, UserPlus, Zap, Target, Shield } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

export default function SquadFinder() {
  const [filter, setFilter] = useState({
    rank: 'all',
    style: 'all',
  });

  const filteredPlayers = PLAYERS.filter(p => {
    if (filter.rank !== 'all' && p.rank !== filter.rank) return false;
    if (filter.style !== 'all' && p.playStyle !== filter.style) return false;
    return true;
  });

  const getStyleIcon = (style: Player['playStyle']) => {
    switch (style) {
      case 'Rush': return <Zap size={14} />;
      case 'Sniper': return <Target size={14} />;
      case 'Support': return <Shield size={14} />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-black">SQUAD FINDER</h2>
        <p className="text-muted-foreground text-sm">Find teammates who match your playstyle and rank.</p>
      </div>

      <Card className="p-4 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input className="pl-10" placeholder="Search by name..." />
        </div>
        <div className="flex gap-2">
          <Select onValueChange={(v) => setFilter({...filter, rank: v})}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Rank" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ranks</SelectItem>
              <SelectItem value="Heroic">Heroic</SelectItem>
              <SelectItem value="Diamond">Diamond</SelectItem>
              <SelectItem value="Grandmaster">Grandmaster</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(v) => setFilter({...filter, style: v})}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Styles</SelectItem>
              <SelectItem value="Rush">Rush</SelectItem>
              <SelectItem value="Sniper">Sniper</SelectItem>
              <SelectItem value="Support">Support</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredPlayers.map((player) => (
          <Card key={player.id} className="overflow-hidden hover:border-orange-500/50 transition-colors">
            <CardContent className="p-0">
              <div className="bg-muted h-24 relative">
                <div className="absolute -bottom-10 left-4 border-4 border-card rounded-2xl overflow-hidden w-20 h-20 bg-card">
                  <img src={player.avatar} alt={player.name} className="w-full h-full object-cover" />
                </div>
                <Badge className="absolute top-4 right-4 bg-orange-500">
                  {player.rank}
                </Badge>
              </div>
              <div className="pt-12 p-4">
                <h4 className="text-xl font-bold">{player.name}</h4>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary" className="gap-1">
                    {getStyleIcon(player.playStyle)}
                    {player.playStyle}
                  </Badge>
                  <Badge variant="outline">{player.language}</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="bg-muted p-2 rounded-lg text-center">
                    <p className="text-[10px] uppercase text-muted-foreground font-bold">Win Rate</p>
                    <p className="font-bold">{player.winRate}</p>
                  </div>
                  <div className="bg-muted p-2 rounded-lg text-center">
                    <p className="text-[10px] uppercase text-muted-foreground font-bold">HS Rate</p>
                    <p className="font-bold">{player.headshotRate}</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-6">
                  <Button className="flex-1 bg-orange-500 hover:bg-orange-600" onClick={() => toast.success(`Request sent to ${player.name}`)}>
                    <UserPlus size={16} className="mr-2" /> Invite
                  </Button>
                  <Button variant="outline" size="icon">
                    <MessageSquare size={16} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
