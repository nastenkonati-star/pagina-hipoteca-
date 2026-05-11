import { Mail, Phone, Instagram, Linkedin, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl">
                 <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">Hipotecas Brutti</span>
            </a>
            <p className="text-gray-500 text-lg mb-8 max-w-sm">
              Liderando la revolución del crédito hipotecario privado en Argentina con tecnología y transparencia.
            </p>
            <div className="flex gap-4">
               <a href="#" className="p-3 bg-white rounded-full text-gray-400 hover:text-primary transition-colors shadow-sm">
                  <Instagram size={24} />
               </a>
               <a href="#" className="p-3 bg-white rounded-full text-gray-400 hover:text-primary transition-colors shadow-sm">
                  <Linkedin size={24} />
               </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Compañía</h4>
            <ul className="space-y-4">
              <li><a href="#nosotros" className="text-gray-500 hover:text-primary font-medium">Nosotros</a></li>
              <li><a href="#creditos" className="text-gray-500 hover:text-primary font-medium">Tipos de Crédito</a></li>
              <li><a href="#beneficios" className="text-gray-500 hover:text-primary font-medium">Beneficios</a></li>
              <li><a href="#blog" className="text-gray-500 hover:text-primary font-medium">Noticias Inmobiliarias</a></li>
              <li><a href="#faq" className="text-gray-500 hover:text-primary font-medium">Ayuda / FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-500">
                <Mail size={18} className="text-primary" />
                hola@hipotecasbrutti.com.ar
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Phone size={18} className="text-primary" />
                +54 9 11 1234 5678
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <MapPin size={18} className="text-primary" />
                Puerto Madero, CABA.
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between gap-6 items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Hipotecas Brutti S.A. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-legal', { detail: 'privacy' }))}
              className="text-gray-400 text-sm hover:text-gray-900"
            >
              Privacidad
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-legal', { detail: 'terms' }))}
              className="text-gray-400 text-sm hover:text-gray-900"
            >
              Términos
            </button>
          </div>
        </div>
      </div>

      {/* Persistent WhatsApp CTA */}
      <a
        href="https://wa.me/5491112345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap">
           ¿Hablamos por WhatsApp?
        </span>
      </a>

      {/* Floating CTA Mobile Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-xl border-t border-gray-100 z-40">
         <a
           href="#precalificacion"
           className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2"
         >
            Precalificar ahora
         </a>
      </div>
    </footer>
  );
}
