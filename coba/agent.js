import React, { useState, useEffect, useRef } from 'react';
import { Send, Moon, Sun, Sparkles } from 'lucide-react';

const GreekPhilosophyChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // System prompt untuk memberikan konteks filosofi Yunani
  const SYSTEM_PROMPT = `Kamu adalah chatbot ahli filosofi Yunani kuno yang ramah dan penuh pengetahuan. 

    Karaktermu:
    - Berpengetahuan luas tentang Socrates, Plato, Aristoteles, dan filosof Yunani lainnya
    - Menjelaskan dengan bahasa yang mudah dipahami tapi tetap akurat
    - Sering menggunakan kutipan atau contoh dari filosof Yunani
    - Kadang menyapa dengan bahasa Yunani seperti "Χαίρετε (Chairete)" untuk salam
    - Antusias membahas mitologi Yunani, dewa-dewa Olympus, dan sejarah Athena
    - Menghubungkan filosofi kuno dengan kehidupan modern

    Topik yang kamu kuasai:
    - Filosofi Yunani (metafisika, epistemologi, etika, logika)
    - Tokoh: Socrates, Plato, Aristoteles, Pre-Socratic philosophers
    - Mitologi: Zeus, 12 Dewa Olympus, pahlawan Yunani
    - Sejarah: Athena, Sparta, Alexander Agung
    - Konsep: Teori Bentuk Plato, Golden Mean Aristoteles, Metode Sokrates

    Gaya bicara: Hangat, mendidik, kadang filosofis, tapi tetap mudah dipahami.`;

  // Fungsi untuk memanggil Gemini API
  const callGeminiAPI = async (userMessage) => {
    const API_KEY = 'AIzaSyAtyNOreWSqbTyuxYRQNjKE4yxXi6WeNIg'; // ⚠️ GANTI INI!
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${SYSTEM_PROMPT}\n\nUser: ${userMessage}\n\nAssistant:`
            }]
          }],
          generationConfig: {
            temperature: 0.9,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      return 'Maaf, terjadi kesalahan saat menghubungi Gemini AI. Pastikan API key valid dan koneksi internet stabil. 🏛️';
    }
  };

  // Fungsi untuk mengirim pesan
  const handleSendMessage = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    // Tambahkan pesan user
    const newUserMessage = {
      text: userMessage,
      isUser: true,
      time: getCurrentTime()
    };
    setMessages(prev => [...prev, newUserMessage]);
    
    // Set loading state
    setIsLoading(true);

    // Panggil Gemini API
    const botResponse = await callGeminiAPI(userMessage);
    
    // Tambahkan respons bot
    const newBotMessage = {
      text: botResponse,
      isUser: false,
      time: getCurrentTime()
    };
    setMessages(prev => [...prev, newBotMessage]);
    setIsLoading(false);
  };

  // Fungsi untuk mendapatkan waktu
  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  // Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Auto scroll ke bawah
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Quick suggestions
  const suggestions = [
    { text: 'Siapa itu Socrates?', icon: '🤔' },
    { text: 'Jelaskan Teori Bentuk Plato', icon: '💭' },
    { text: 'Apa itu Golden Mean?', icon: '⚖️' },
    { text: 'Cerita tentang Zeus', icon: '⚡' }
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'} transition-all duration-500`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-64 h-64 ${isDarkMode ? 'bg-purple-900' : 'bg-blue-300'} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse`}></div>
        <div className={`absolute top-40 right-10 w-64 h-64 ${isDarkMode ? 'bg-pink-900' : 'bg-purple-300'} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000`}></div>
        <div className={`absolute -bottom-32 left-1/2 w-64 h-64 ${isDarkMode ? 'bg-blue-900' : 'bg-pink-300'} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000`}></div>
      </div>

      {/* Header */}
      <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/80 backdrop-blur-lg border-white/20'} border-b shadow-lg relative z-10`}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 ${isDarkMode ? 'bg-gradient-to-br from-purple-600 to-pink-600' : 'bg-gradient-to-br from-blue-500 to-purple-600'} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
              Α
            </div>
            <div>
              <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} flex items-center gap-2`}>
                Greek Philosophy AI
                <Sparkles className="w-5 h-5 text-yellow-500" />
              </h1>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Powered by Gemini AI ✨
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300 transform hover:scale-110`}
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 max-w-4xl w-full mx-auto px-6 py-6 overflow-y-auto relative z-10">
        {messages.length === 0 && (
          <div className="text-center py-12">
            <div className={`text-6xl mb-4 ${isDarkMode ? 'opacity-50' : 'opacity-70'}`}>🏛️</div>
            <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Selamat Datang di Greek Philosophy AI!
            </h2>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
              Tanyakan apa saja tentang filosofi Yunani, mitologi, dan sejarah kuno
            </p>
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-4 ${msg.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            {!msg.isUser && (
              <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-gradient-to-br from-purple-600 to-pink-600' : 'bg-gradient-to-br from-blue-500 to-purple-600'} flex items-center justify-center text-white font-bold mr-2 flex-shrink-0`}>
                Α
              </div>
            )}
            <div className={`max-w-[70%] ${msg.isUser ? (isDarkMode ? 'bg-blue-600' : 'bg-blue-500') : (isDarkMode ? 'bg-gray-800' : 'bg-white')} rounded-2xl px-4 py-3 shadow-lg`}>
              <p className={`${msg.isUser ? 'text-white' : (isDarkMode ? 'text-gray-200' : 'text-gray-800')} whitespace-pre-wrap leading-relaxed`}>
                {msg.text}
              </p>
              <span className={`text-xs ${msg.isUser ? 'text-blue-100' : (isDarkMode ? 'text-gray-500' : 'text-gray-500')} mt-1 block`}>
                {msg.time}
              </span>
            </div>
            {msg.isUser && (
              <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} flex items-center justify-center text-white text-xs font-bold ml-2 flex-shrink-0`}>
                You
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-gradient-to-br from-purple-600 to-pink-600' : 'bg-gradient-to-br from-blue-500 to-purple-600'} flex items-center justify-center text-white font-bold mr-2`}>
              Α
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl px-4 py-3 shadow-lg`}>
              <div className="flex space-x-2">
                <div className={`w-2 h-2 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'} rounded-full animate-bounce`}></div>
                <div className={`w-2 h-2 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'} rounded-full animate-bounce delay-100`}></div>
                <div className={`w-2 h-2 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'} rounded-full animate-bounce delay-200`}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggestions - Selalu tampil */}
      <div className="max-w-4xl w-full mx-auto px-6 pb-4 relative z-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {suggestions.map((sugg, index) => (
            <button
              key={index}
              onClick={() => {
                setInput(sugg.text);
                inputRef.current?.focus();
              }}
              className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' : 'bg-white hover:bg-gray-50 text-gray-800'} px-4 py-2 rounded-full text-sm shadow-md transition-all duration-300 transform hover:scale-105 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
            >
              {sugg.icon} {sugg.text}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/80 backdrop-blur-lg border-white/20'} border-t shadow-lg relative z-10`}>
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tanyakan tentang filosofi Yunani..."
              disabled={isLoading}
              className={`flex-1 ${isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' : 'bg-gray-50 text-gray-800 placeholder-gray-500 border-gray-200'} border rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-50`}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || input.trim() === ''}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default GreekPhilosophyChat;