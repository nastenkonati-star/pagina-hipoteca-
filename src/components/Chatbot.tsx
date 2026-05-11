import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, X, Bot, User } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "¡Hola! Soy Brutti Bot. ¿En qué puedo ayudarte hoy?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: "user", text: input }]);
    const userInput = input.toLowerCase();
    setInput("");

    // Simple simulated logic
    setTimeout(() => {
      let response = "Interesante. Te gustaría que te derive con un asesor humano para hablar específicamente sobre eso?";
      if (userInput.includes("tasa") || userInput.includes("interés")) {
        response = "Manejamos tasas fijas en dólares entre el 12% y 14% anual. ¿Te gustaría simular un crédito?";
      } else if (userInput.includes("requisito")) {
        response = "Los requisitos principales son una propiedad como garantía y demostrar ingresos básicos. ¿Tenés propiedad propia?";
      } else if (userInput.includes("plazo")) {
        response = "Ofrecemos plazos de hasta 10 años, adaptados a tu capacidad de pago.";
      }
      
      setMessages(prev => [...prev, { role: "bot", text: response }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-24 right-8 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] bg-white rounded-[32px] shadow-2xl border border-slate-100 overflow-hidden flex flex-col"
          >
            <div className="bg-primary p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="font-bold">Asistente Virtual</div>
                  <div className="text-[10px] uppercase font-bold text-white/60 tracking-widest">Hipotecas Brutti</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-6 space-y-4 bg-slate-50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                    m.role === "user" 
                      ? "bg-primary text-white rounded-tr-none" 
                      : "bg-white text-slate-600 rounded-tl-none border border-slate-100"
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Escribe tu consulta..."
                className="flex-1 px-4 py-2 bg-slate-50 rounded-xl outline-none text-sm"
              />
              <button 
                onClick={handleSend}
                className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-secondary"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center relative"
      >
        <MessageSquare size={28} />
        {!isOpen && (
           <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 border-4 border-slate-50 rounded-full" />
        )}
      </motion.button>
    </div>
  );
}
