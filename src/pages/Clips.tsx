import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CLIPS } from '@/data/mock';
import { Heart, MessageCircle, Share2, Play, Eye } from 'lucide-react';

export default function Clips() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black">COMMUNITY CLIPS</h2>
          <p className="text-muted-foreground text-sm">Best kills, funny moments, and pro plays from GH.</p>
        </div>
        <Button className="bg-orange-500">Upload Clip</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {CLIPS.map((clip) => (
          <Card key={clip.id} className="overflow-hidden bg-card border-none shadow-lg group">
            <div className="aspect-video relative overflow-hidden bg-black flex items-center justify-center">
              <img src={clip.thumbnail} alt={clip.title} className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform shadow-xl cursor-pointer">
                  <Play size={32} fill="currentColor" />
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-black/60 backdrop-blur-md">02:15</Badge>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-1 text-white text-xs bg-black/40 px-2 py-1 rounded-full">
                <Eye size={12} /> {clip.views}
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">{clip.title}</h3>
                <p className="text-sm text-orange-500 font-medium">@{clip.author}</p>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-4 mt-4">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-muted-foreground hover:text-red-500 transition-colors">
                    <Heart size={18} />
                    <span className="text-sm font-medium">{clip.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-muted-foreground hover:text-blue-500 transition-colors">
                    <MessageCircle size={18} />
                    <span className="text-sm font-medium">42</span>
                  </button>
                </div>
                <Button variant="ghost" size="icon">
                  <Share2 size={18} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
