import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, MessageSquare } from 'lucide-react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'KojoSniper', text: 'Yo, who is down for some ranked matches?', time: '10:05 AM', self: false },
    { id: 2, sender: 'AmaRush', text: 'I am in! Just finished my session.', time: '10:06 AM', self: false },
    { id: 3, sender: 'You', text: 'Count me in too! Send the lobby code.', time: '10:07 AM', self: true },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: 'You', text: input, time: 'Now', self: true }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
          <MessageSquare size={20} />
        </div>
        <div>
          <h2 className="text-2xl font-black">Global Chat</h2>
          <p className="text-xs text-muted-foreground">142 players online</p>
        </div>
      </div>

      <Card className="flex-1 flex flex-col bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m) => (
            <div key={m.id} className={`flex flex-col ${m.self ? 'items-end' : 'items-start'}`}>
              <div className="flex items-center gap-2 mb-1 px-1">
                {!m.self && <span className="text-[10px] font-bold text-orange-500">{m.sender}</span>}
                <span className="text-[10px] text-muted-foreground">{m.time}</span>
              </div>
              <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                m.self ? 'bg-orange-500 text-white rounded-tr-none' : 'bg-muted rounded-tl-none'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
        </CardContent>
        <div className="p-4 border-t border-border bg-card">
          <div className="flex gap-2">
            <Input 
              placeholder="Type a message..." 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button className="bg-orange-500 hover:bg-orange-600" onClick={handleSend}>
              <Send size={18} />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
