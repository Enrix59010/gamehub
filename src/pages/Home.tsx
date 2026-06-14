import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NEWS, DAILY_REDEEM_CODE } from '@/data/mock';
import { Gift, Bell, ChevronRight, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function Home() {
  const copyRedeemCode = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(DAILY_REDEEM_CODE);
        toast.success('Redeem code copied! Go to rewards site.');
      } else {
        throw new Error('Clipboard API not available or insecure context');
      }
    } catch (err) {
      console.warn('Clipboard error:', err);
      // Fallback for browsers that block clipboard API in iframes
      const textArea = document.createElement('textarea');
      textArea.value = DAILY_REDEEM_CODE;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      textArea.style.top = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          toast.success('Redeem code copied via fallback!');
        } else {
          toast.error('Manual copy required: ' + DAILY_REDEEM_CODE);
        }
      } catch (err) {
        toast.error('Manual copy required: ' + DAILY_REDEEM_CODE);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="relative h-48 md:h-72 rounded-2xl overflow-hidden group">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd0dcb52-9b38-4bf6-b444-f5f02bd6810f/hero-banner-b3e9269a-1781450269729.webp" 
          alt="Hero"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge className="bg-orange-500 hover:bg-orange-600 mb-2">Live Now</Badge>
          <h2 className="text-2xl md:text-3xl font-black text-white">GAMING HUB GHANA</h2>
          <p className="text-white/80 text-sm md:text-base">Join the ultimate community of Ghanaian Free Fire players.</p>
        </div>
      </div>

      {/* Redeem Code Alert */}
      <Card className="bg-orange-500/10 border-orange-500/20 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-2 opacity-10">
          <Gift size={64} className="rotate-12" />
        </div>
        <CardContent className="p-4 flex items-center justify-between gap-4 relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shrink-0">
              <Gift size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-orange-500 uppercase tracking-wider">Daily Rewards</p>
              <p className="font-bold text-lg">{DAILY_REDEEM_CODE}</p>
            </div>
          </div>
          <Button onClick={copyRedeemCode} variant="default" className="bg-orange-500 hover:bg-orange-600">
            Copy Code
          </Button>
        </CardContent>
      </Card>

      {/* News Feed */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Bell size={20} className="text-orange-500" />
            Latest Updates
          </h3>
          <Button variant="ghost" size="sm" className="text-orange-500">
            See all <ChevronRight size={16} />
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {NEWS.map((item) => (
            <Card key={item.id} className="overflow-hidden group cursor-pointer hover:border-orange-500/50 transition-colors">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-2 left-2 bg-black/60 backdrop-blur-md">
                  {item.category}
                </Badge>
              </div>
              <CardContent className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{item.date}</p>
                <h4 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm" className="gap-2">
                    Read More
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
