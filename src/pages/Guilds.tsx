import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Users, Trophy, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const GUILDS = [
  { name: 'Team GH', members: 45, level: 10, region: 'Accra', points: 15400, logo: 'GH' },
  { name: 'Black Stars', members: 30, level: 8, region: 'Kumasi', points: 12100, logo: 'BS' },
  { name: 'Ga Warriors', members: 20, level: 5, region: 'Tema', points: 8900, logo: 'GW' },
];

export default function Guilds() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-black uppercase tracking-tight">Guild Finder</h2>
        <p className="text-muted-foreground text-sm">Join the top Free Fire guilds in Ghana.</p>
      </div>

      <div className="grid gap-4">
        {GUILDS.map((guild) => (
          <Card key={guild.name} className="overflow-hidden hover:border-orange-500/50 transition-colors">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-black text-2xl shadow-lg">
                {guild.logo}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">{guild.name}</h3>
                  <Badge variant="outline" className="text-[10px]">Level {guild.level}</Badge>
                </div>
                <div className="flex gap-4 mt-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Users size={12} /> {guild.members}/50 Members</span>
                  <span className="flex items-center gap-1"><Shield size={12} /> {guild.region}</span>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <p className="font-bold text-orange-500">{guild.points.toLocaleString()}</p>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Points</p>
              </div>
              <Button size="sm" onClick={() => toast.success(`Applied to join ${guild.name}!`)}>Apply</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
