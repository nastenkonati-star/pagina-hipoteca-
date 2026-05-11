import { motion } from "motion/react";
import { 
  Users, 
  Coins, 
  ArrowRight, 
  Building2, 
  TrendingUp, 
  Handshake, 
  ShieldCheck, 
  Zap, 
  ChevronRight,
  Gem,
  Construction,
  Download,
  Calculator,
  MessageCircle,
  FileText,
  Star,
  Flame,
  LayoutDashboard
} from "lucide-react";

export default function Professionals() {
  return (
    <section id="profesionales" className="py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Ecosistema <span className="text-primary italic">Brutti</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Conectamos capital inteligente con proyectos sólidos, garantizando la seguridad en cada eslabón de la cadena.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          {/* 1. AGENTES INMOBILIARIOS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
            className="group relative flex flex-col p-10 rounded-[48px] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-500"
          >
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-[20px] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
              <Handshake size={32} />
            </div>

            <span className="text-emerald-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">Para Agentes</span>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
              Cerrá más ventas. <span className="text-emerald-600">Nosotros financiamos</span> a tus clientes.
            </h3>
            
            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
              Tus compradores tienen la propiedad perfecta pero no el crédito. Somos el aliado financiero que cierra operaciones que otros bancos rechazan. Aprobación rápida y comisiones directas.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                { icon: Coins, text: "Comisión del 0.5% por operación cerrada" },
                { icon: Zap, text: "Pre-aprobación en 24-48hs reales" },
                { icon: TrendingUp, text: "90% de aprobación histórica" },
                { icon: LayoutDashboard, text: "Kit de ventas premium (brochures y scripts)" },
                { icon: MessageCircle, text: "Gerente dedicado 24/7 vía WhatsApp" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <item.icon size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-slate-600 text-[13px] font-medium leading-normal">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mb-10 p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100">
              <p className="text-[10px] font-bold uppercase text-emerald-600 tracking-widest mb-2">Ejemplo Real de Ganancia</p>
              <div className="flex justify-between items-end">
                <div>
                   <p className="text-slate-400 text-[10px]">Venta de U$S 150k</p>
                   <p className="text-lg font-bold text-slate-900">U$S 750 extra</p>
                </div>
                <div className="text-right">
                   <p className="text-slate-400 text-[10px]">10 ventas/año</p>
                   <p className="text-lg font-bold text-emerald-600">+U$S 7,500</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/20 transition-all group-hover:scale-[1.02]">
                Convertite en Partner <ArrowRight size={18} />
              </button>
              <button className="w-full py-4 text-emerald-600 border border-emerald-200 rounded-2xl font-bold text-sm hover:bg-emerald-50 transition-all flex items-center justify-center gap-2">
                Ver casos de éxito <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* 2. INVERSORES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
            transition={{ delay: 0.1 }}
            className="group relative flex flex-col p-10 rounded-[48px] bg-slate-900 text-white shadow-2xl shadow-primary/30 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
            
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-[20px] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10">
              <Gem size={32} />
            </div>

            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 relative z-10">Inversores</span>
            <h3 className="text-3xl font-extrabold text-white mb-6 leading-tight relative z-10">
              Tu plata en ladrillos. <span className="text-primary">Riesgo controlado,</span> flujo real.
            </h3>
            
            <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow relative z-10">
              Diversificá tu portafolio con activos tangibles respaldados por garantías hipotecarias de primer grado. Generamos flujo mensual dolarizado con scoring riguroso.
            </p>

            <ul className="space-y-4 mb-10 relative z-10">
              {[
                { icon: TrendingUp, text: "Retorno anual: 12% - 14% en U$S" },
                { icon: ShieldCheck, text: "Garantía hipotecaria de 1er grado" },
                { icon: FileText, text: "Flujo mensual predecible desde mes 1" },
                { icon: LayoutDashboard, text: "Dashboard en tiempo real 24/7" },
                { icon: Zap, text: "Liquidez trimestral garantizada" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <item.icon size={16} className="text-primary mt-1 shrink-0" />
                  <span className="text-white/80 text-[13px] font-medium leading-normal">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mb-10 p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm relative z-10">
              <div className="flex justify-between items-center mb-4">
                 <p className="text-[10px] font-bold uppercase text-primary tracking-widest">Ejemplo de Inversión</p>
                 <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[8px] font-bold text-emerald-500 uppercase">Activo</span>
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                   <p className="text-white/30 text-[9px]">U$S 50k Invertidos</p>
                   <p className="text-lg font-bold text-white">U$S 520 / mes</p>
                </div>
                <div className="text-right">
                   <p className="text-white/30 text-[9px]">Garantía Real LTV</p>
                   <p className="text-lg font-bold text-white">U$S 120,000</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-8 relative z-10">
               <div className="flex-1 flex flex-col items-center p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[8px] text-white/40 uppercase font-bold mb-1">Riesgo</span>
                  <span className="text-xs font-bold text-white">A- (Moody's)</span>
               </div>
               <div className="flex-1 flex flex-col items-center p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[8px] text-white/40 uppercase font-bold mb-1">Recupero</span>
                  <span className="text-xs font-bold text-white">100% Histórico</span>
               </div>
            </div>

            <div className="space-y-3 relative z-10">
              <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-secondary hover:shadow-lg hover:shadow-primary/20 transition-all group-hover:scale-[1.02]">
                Simular mi Inversión <Calculator size={18} />
              </button>
              <button className="w-full py-4 text-white border border-white/10 rounded-2xl font-bold text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                Descargar Prospecto <Download size={16} />
              </button>
            </div>
          </motion.div>

          {/* 3. DESARROLLADORES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
            transition={{ delay: 0.2 }}
            className="group relative flex flex-col p-10 rounded-[48px] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-500"
          >
            <div className="w-16 h-16 bg-slate-100 text-slate-900 rounded-[20px] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
              <Building2 size={32} />
            </div>

            <span className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-4">Desarrolladores</span>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
              Financiamos tus obras <span className="text-primary italic">sin vender </span> tu futuro.
            </h3>
            
            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
              Líneas de crédito flexibles para avance de obra sin comprometer tu equity. Transformamos tu preventa en liquidez inmediata para acelerar la construcción.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                { icon: ShieldCheck, text: "Hasta el 70% del LTV (Loan-to-Value)" },
                { icon: Zap, text: "Desembolsos ágiles por hitos de obra" },
                { icon: TrendingUp, text: "Tasa preferencial: 8% - 10% anual" },
                { icon: Users, text: "Financiación directa a tus compradores" },
                { icon: Coins, text: "Sin penalización por pre-cancelación" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <item.icon size={16} className="text-slate-900 mt-1 shrink-0" />
                  <span className="text-slate-600 text-[13px] font-medium leading-normal">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mb-10 p-5 bg-slate-50 rounded-2xl border border-slate-100">
               <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-3">Caso de Éxito: Obra Belgrano</p>
               <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                     <span className="text-slate-400">Financiación:</span>
                     <span className="font-bold text-slate-900">U$S 280,000</span>
                  </div>
                  <div className="flex justify-between text-xs">
                     <span className="text-slate-400">Ahorro en multa:</span>
                     <span className="font-bold text-emerald-600">U$S 0 (Cancelación anticipada)</span>
                  </div>
               </div>
            </div>

            <div className="space-y-3 mt-auto">
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 transition-all group-hover:scale-[1.02]">
                Consultar mi Proyecto <ArrowRight size={18} />
              </button>
              <button className="w-full py-4 text-slate-900 border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Ver Portfolio <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Requirements Section for Developers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[40px] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <FileText size={120} />
           </div>
           
           <div className="relative z-10">
              <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                 <FileText className="text-primary" />
                 Requisitos básicos para Desarrolladores
              </h4>
              <div className="grid md:grid-cols-4 gap-8">
                 {[
                   "Proyecto con factibilidad aprobada",
                   "30% de equity ya invertido",
                   "Plan de obra certificado",
                   "Tasación terreno + proyecto"
                 ].map((req, idx) => (
                   <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                      <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold mb-4">{idx + 1}</div>
                      <p className="text-xs font-bold text-slate-700">{req}</p>
                   </div>
                 ))}
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
