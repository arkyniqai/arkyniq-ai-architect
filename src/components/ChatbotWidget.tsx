import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const scrollRef = useRef<HTMLDivElement>(null);

  const WEBHOOK_URL = 'https://arham-tech.app.n8n.cloud/webhook/lead-query';

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    setMessages(prev => [
      ...prev,
      { role: 'assistant', content: 'Loading response…', timestamp: new Date() },
    ]);

    try {
      const conversationHistory = [...messages, userMessage].map(msg => ({
        role: msg.role,
        content: msg.content,
      }));

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_message: userMessage.content,
          session_id: sessionId,
          conversation_history: conversationHistory,
        }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      const assistantReply = data.assistant_reply || 'Sorry, I could not process your request.';

      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = {
          role: 'assistant',
          content: assistantReply,
          timestamp: new Date(),
        };
        return newMessages;
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          <button
            onClick={() => setIsOpen(true)}
            className="h-14 w-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            style={{
              background: 'hsl(188, 100%, 50%)',
              color: 'hsl(215, 28%, 7%)',
              boxShadow: '0 0 20px hsla(188, 100%, 50%, 0.5)',
            }}
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed bottom-6 right-6 z-[9999] flex flex-col overflow-hidden animate-slide-in-up"
          style={{
            width: '380px',
            height: '600px',
            maxHeight: '80vh',
            background: 'hsl(215, 28%, 10%)',
            border: '1px solid hsl(215, 20%, 20%)',
            borderRadius: '12px',
            boxShadow: '0 10px 40px -10px hsla(0, 0%, 0%, 0.5)',
          }}
        >
          {/* Header */}
          <div
            className="p-4 flex items-center justify-between"
            style={{
              background: 'linear-gradient(90deg, hsl(188, 100%, 50%) 0%, hsl(245, 100%, 69%) 100%)',
            }}
          >
            <h3 className="text-lg font-semibold" style={{ color: 'hsl(215, 28%, 7%)', fontFamily: "'Space Grotesk', sans-serif" }}>
              Ark AI Assistant
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 flex items-center justify-center rounded hover:bg-white/20 transition-colors"
              style={{ color: 'hsl(215, 28%, 7%)' }}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4" style={{ scrollBehavior: 'smooth' }}>
            <div className="space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-8" style={{ color: 'hsl(0, 0%, 48%)' }}>
                  <MessageCircle className="h-12 w-12 mx-auto mb-3" style={{ color: 'hsla(188, 100%, 50%, 0.5)' }} />
                  <p className="text-sm">Start a conversation with Ark AI Assistant</p>
                </div>
              )}
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className="max-w-[80%] px-4 py-2.5"
                    style={{
                      borderRadius: message.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      background: message.role === 'user' ? 'hsl(188, 100%, 50%)' : 'hsl(215, 20%, 20%)',
                      color: message.role === 'user' ? 'hsl(215, 28%, 7%)' : 'hsl(0, 0%, 100%)',
                    }}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4" style={{ borderTop: '1px solid hsl(215, 20%, 20%)', background: 'hsl(215, 28%, 10%)' }}>
            <div className="flex gap-2">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 h-10 px-3 rounded-md text-sm outline-none"
                style={{
                  background: 'hsl(215, 20%, 15%)',
                  border: '1px solid hsl(215, 20%, 20%)',
                  color: 'hsl(0, 0%, 100%)',
                }}
              />
              <button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="h-10 w-10 rounded-md flex items-center justify-center transition-colors disabled:opacity-50"
                style={{
                  background: 'hsl(188, 100%, 50%)',
                  color: 'hsl(215, 28%, 7%)',
                  boxShadow: '0 0 20px hsla(188, 100%, 50%, 0.5)',
                }}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
