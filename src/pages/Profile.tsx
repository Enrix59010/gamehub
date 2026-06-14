import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Share2, Edit2, Shield, Target, Zap, TrendingUp } from 'lucide-react';

export default function Profile() {
  const stats = [
    { label: 'Kills', value: '12,450', icon: Zap, color: 'text-orange-500' },
    { label: 'Win Rate', value: '42.5%', icon: TrendingUp, color: 'text-green-500' },
    { label: 'HS Rate', value: '55.2%', icon: Target, color: 'text-red-500' },
    { label: 'KD Ratio', value: '3.45', icon: Shield, color: 'text-blue-500' },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Profile Header */}
      <div className="relative">
        <div className="h-32 md:h-48 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600" />
        <div className="px-6 -mt-12 md:-mt-16 flex flex-col md:flex-row items-end gap-6">
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl border-4 border-background overflow-hidden bg-card shadow-2xl">
              <img src="https://i.pravatar.cc/150?u=current" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-green-500 border-4 border-background" />
          </div>
          <div className="flex-1 pb-2">
            <h2 className="text-3xl font-black">KojoSniper</h2>
            <p className="text-muted-foreground">Level 72 • Grandmaster • Accra, GH</p>
          </div>
          <div className="flex gap-2 pb-2">
            <Button variant="outline" size="icon"><Settings size={18} /></Button>
            <Button variant="outline" size="icon"><Share2 size={18} /></Button>
            <Button className="bg-orange-500 hover:bg-orange-600"><Edit2 size={16} className="mr-2" /> Edit</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-none shadow-md overflow-hidden">
            <CardContent className="p-4 flex items-center gap-4">
              <div className={`p-2 rounded-xl bg-card border border-border ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase text-muted-foreground font-bold">{stat.label}</p>
                <p className="text-xl font-bold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-muted/50 p-1">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">Match History</TabsTrigger>
          <TabsTrigger value="guild">Guild</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Player Biography</h3>
              <p className="text-muted-foreground leading-relaxed">
                Competitive sniper for Team GH. Focused on tournaments and pushing rank to Regional Top 10. 
                Always looking for serious rushers to join the squad for community scrims. 
                Streaming on TikTok every Friday night! 🇬🇭🔥
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
