
import React, { useState, useRef, useEffect } from 'react';
import { 
  X, Bot, User, Briefcase, 
  Cpu, Send, Zap, AlertCircle
} from 'lucide-react';
import { aiService } from '../services/gemini';
import { Message } from '../types';

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: `Systems online. I'm Peter's AI Agent. How can I assist with your project or recruitment needs today?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsReady(aiService.isConfigured());
  }, []);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(scrollToBottom, 100);
      return () => clearTimeout(timer);
    }
  }, [messages, isOpen]);

  const handleSend = async (customMsg?: string) => {
    const userMsg = (customMsg || input).trim();
    if (!userMsg || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await aiService.sendMessage(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const handleQuickAction = (action: string) => {
    if (action === 'recruiter') {
      handleSend("Give me a high-impact professional pitch for a recruiter.");
    } else if (action === 'stack') {
      handleSend("What is your core technical stack?");
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Floating Toggle Button - Apple Pill Style */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-14 h-14 bg-white text-black rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-500 border border-white/20"
        >
          <Bot className="relative z-10" size={24} />
          {!isReady && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 rounded-full border-[3px] border-black flex items-center justify-center">
              <AlertCircle size={10} className="text-white" />
            </div>
          )}
          {isReady && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-[3px] border-black"></div>
          )}
        </button>
      )}

      {/* Main Chat Interface - macOS Window Style */}
      {isOpen && (
        <div className="flex flex-col fixed bottom-6 right-6 left-6 md:static w-auto md:w-[400px] h-[75vh] md:h-[580px] bg-[#1d1d1f]/95 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-bottom-8 duration-500">
          
          {/* Header - Apple Clean */}
          <div className="p-6 flex justify-between items-center bg-white/5 border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-black">
                <Bot size={22} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white tracking-tight">AI Concierge</h4>
                <p className="text-[10px] text-[#a1a1a6] font-bold uppercase tracking-widest mt-0.5">
                  {isReady ? 'System Online' : 'Standby'}
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#a1a1a6] hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Messages Body - iMessage Style */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2 duration-500`}>
                <div className={`max-w-[85%] p-4 px-5 rounded-[1.5rem] text-[14px] leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-white text-black font-medium rounded-tr-md' 
                    : 'bg-[#2c2c2e] text-white rounded-tl-md'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-start">
                <div className="bg-[#2c2c2e] p-4 px-6 rounded-[1.5rem] rounded-tl-md flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-[#a1a1a6] rounded-full animate-bounce [animation-duration:0.8s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#a1a1a6] rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:-0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#a1a1a6] rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:-0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Interaction Zone - Clean Input */}
          <div className="p-6 bg-black/30 border-t border-white/5 space-y-4">
            {/* Quick Actions - Apple Chips */}
            {isReady && !isLoading && messages.length < 5 && (
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                <button 
                  onClick={() => handleQuickAction('recruiter')}
                  className="flex-shrink-0 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#a1a1a6] hover:bg-white hover:text-black transition-all duration-500"
                >
                  Recruiter Pitch
                </button>
                <button 
                  onClick={() => handleQuickAction('stack')}
                  className="flex-shrink-0 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#a1a1a6] hover:bg-white hover:text-black transition-all duration-500"
                >
                  Tech Stack
                </button>
              </div>
            )}

            {/* Input Box - Apple Minimalist */}
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                disabled={!isReady}
                placeholder={isReady ? "Ask anything..." : "System restricted"}
                className="w-full bg-[#2c2c2e] border border-white/5 rounded-2xl py-4 pl-5 pr-14 focus:outline-none focus:border-white/20 text-white placeholder:text-[#a1a1a6] transition-all text-sm disabled:opacity-50"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading || !isReady}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center transition-all hover:scale-105 disabled:opacity-0 shadow-lg"
              >
                <Send size={18} />
              </button>
            </div>
            
            <p className="text-center text-[9px] font-bold text-[#424245] uppercase tracking-widest">
              AI Core Powered by Gemini
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
