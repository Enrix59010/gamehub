import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TOURNAMENTS } from '@/data/mock';
import { Trophy, Calendar, Users, MapPin, DollarSign } from 'lucide-react';
import { toast } from 'sonner';

export default function Tournaments() {
  const handleRegister = (title: string) => {
    toast.success(`Registered for ${title}! Check your email for details.`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black">TOURNAMENTS</h2>
          <p className="text-muted-foreground text-sm">Join competitions and win big prizes.</p>
        </div>
        <Trophy className="text-orange-500 hidden md:block" size={48} />
      </div>

      <div className="grid gap-6">
        {TOURNAMENTS.map((t) => (
          <Card key={t.id} className="overflow-hidden flex flex-col md:flex-row border-none bg-card shadow-xl">
            <div className="md:w-72 h-48 md:h-auto relative">
              <img src={t.image} alt={t.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4">
                <Badge className={t.status === 'Ongoing' ? 'bg-red-500 animate-pulse' : 'bg-orange-500'}>
                  {t.status}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">{t.title}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                      <DollarSign size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-muted-foreground font-bold">Prize Pool</p>
                      <p className="font-bold text-sm text-green-500">{t.prizePool}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-muted-foreground font-bold">Date</p>
                      <p className="font-bold text-sm">{t.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                      <Users size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-muted-foreground font-bold">Slots</p>
                      <p className="font-bold text-sm">{t.participants}/{t.maxParticipants}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-muted-foreground font-bold">Format</p>
                      <p className="font-bold text-sm">Squad BR</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button className="flex-1 bg-orange-500 hover:bg-orange-600 py-6" onClick={() => handleRegister(t.title)}>
                  Register Squad
                </Button>
                <Button variant="outline" className="py-6">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
