import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mic, Smile, Paperclip, X, Bot, Clock, CheckCircle2 } from "lucide-react";

interface Message {
  id: number;
  sender: "ai" | "user";
  text: string;
  time: string;
  status?: "sending" | "sent" | "delivered";
}

interface ChatInterfaceProps {
  onClose?: () => void;
}

export default function ChatInterface({ onClose }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      sender: "ai", 
      text: "Hello! I'm your AI mental health assistant. How are you feeling today?", 
      time: "10:00 AM",
      status: "delivered"
    },
    { 
      id: 2, 
      sender: "user", 
      text: "I'm feeling a bit stressed about my upcoming exams.", 
      time: "10:01 AM",
      status: "delivered"
    },
    { 
      id: 3, 
      sender: "ai", 
      text: "I understand that exam stress can be overwhelming. That's completely normal! Would you like to try some breathing exercises or discuss what specifically is causing you the most anxiety?", 
      time: "10:02 AM",
      status: "delivered"
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (input.trim() === "") return;
    const newMsg: Message = {
      id: messages.length + 1,
      sender: "user",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      status: "sending"
    };
    
    setMessages([...messages, newMsg]);
    setInput("");
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        sender: "ai",
        text: "I understand how you're feeling. That's a valid concern. Let me help you work through this. What specific aspect would you like to focus on?",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        status: "delivered"
      };
      
      setMessages(prev => [...prev.map(msg => 
        msg.id === newMsg.id ? { ...msg, status: "delivered" as const } : msg
      ), aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col w-full max-w-4xl h-[80vh] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <header className="flex items-center justify-between p-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/20 rounded-2xl">
              <Bot className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">AI Mental Health Assistant</h1>
              <div className="flex items-center space-x-2 text-sm opacity-90">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Online • Confidential & Secure</span>
              </div>
            </div>
          </div>
          {onClose && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-3 hover:bg-white/20 rounded-2xl transition-colors"
            >
              <X className="h-6 w-6" />
            </motion.button>
          )}
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex items-start space-x-3 max-w-2xl ${msg.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                  <div className={`p-3 rounded-2xl ${
                    msg.sender === "user" 
                      ? "bg-indigo-600 text-white" 
                      : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-lg border border-gray-200 dark:border-gray-700"
                  }`}>
                    {msg.sender === "ai" && (
                      <div className="flex items-center space-x-2 mb-2">
                        <Bot className="h-4 w-4 text-indigo-600" />
                        <span className="text-xs font-semibold text-indigo-600">AI Assistant</span>
                      </div>
                    )}
                    <p className="text-base leading-relaxed">{msg.text}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-1 text-xs opacity-70">
                        <Clock className="h-3 w-3" />
                        <span>{msg.time}</span>
                      </div>
                      {msg.sender === "user" && (
                        <div className="flex items-center space-x-1">
                          {msg.status === "sending" && (
                            <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
                          )}
                          {msg.status === "sent" && (
                            <CheckCircle2 className="h-3 w-3 text-white/70" />
                          )}
                          {msg.status === "delivered" && (
                            <div className="flex space-x-0.5">
                              <CheckCircle2 className="h-3 w-3 text-white/70" />
                              <CheckCircle2 className="h-3 w-3 text-white/70 -ml-1" />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="flex items-start space-x-3 max-w-2xl">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <Bot className="h-4 w-4 text-indigo-600" />
                    <span className="text-xs font-semibold text-indigo-600">AI Assistant</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input */}
        <div className="p-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl transition-colors"
            >
              <Smile className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl transition-colors"
            >
              <Paperclip className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </motion.button>
            <div className="flex-1 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message here..."
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              disabled={!input.trim()}
              className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              <Send className="h-5 w-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl transition-colors"
            >
              <Mic className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
