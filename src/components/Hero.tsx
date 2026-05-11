import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Zap, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Capital Privado Directo en Argentina</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
            Créditos hipotecarios <br />
            <span className="text-primary underline decoration-4 decoration-primary/20">capital privado.</span>
          </h1>

          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-md">
            Financiación en U$S bajo Sistema Francés. Rápido, seguro y sin los obstáculos de la banca tradicional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#precalificacion"
              className="px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-secondary transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
            >
              Pre-calificar ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#simulador"
              className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              Simular Crédito
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 opacity-60">
             <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-slate-900">48hs</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Aprobación</span>
             </div>
             <div className="w-px h-10 bg-slate-200" />
             <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-slate-900">100%</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Digital</span>
             </div>
             <div className="w-px h-10 bg-slate-200" />
             <div className="flex items-center gap-3 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-2xl border border-emerald-100">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-tight">Asesoría Online</span>
             </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="relative"
        >
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative border-4 border-white">
             <img
               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
               alt="Luxury Property"
               className="w-full h-full object-cover scale-105"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

             {/* Mobile Floating Badges (Framed Inside) */}
             <div className="sm:hidden">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/20 z-10"
                >
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                         <TrendingUp className="text-emerald-600 w-5 h-5" />
                      </div>
                      <div>
                         <div className="text-[10px] text-slate-500 font-bold uppercase">Tasa Fija</div>
                         <div className="text-lg font-bold text-slate-900">12% - 14%</div>
                      </div>
                   </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/20 z-10"
                >
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                         <Zap className="text-primary w-5 h-5" />
                      </div>
                      <div>
                         <div className="text-[10px] text-slate-500 font-bold uppercase">Aprobación</div>
                         <div className="text-lg font-bold text-slate-900">48hs</div>
                      </div>
                   </div>
                </motion.div>
             </div>
          </div>

          {/* Desktop Floating Badges (Overflowing) */}
          <div className="hidden sm:block">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-10 bg-white/95 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20 z-10"
            >
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
                     <TrendingUp className="text-emerald-600 w-6 h-6" />
                  </div>
                  <div>
                     <div className="text-xs text-slate-500 font-bold uppercase">Tasa Fija</div>
                     <div className="text-2xl font-bold text-slate-900">12% - 14%</div>
                  </div>
               </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -right-10 bg-white/95 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20 z-10"
            >
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                     <Zap className="text-primary w-6 h-6" />
                  </div>
                  <div>
                     <div className="text-xs text-slate-500 font-bold uppercase">Aprobación</div>
                     <div className="text-2xl font-bold text-slate-900">48hs</div>
                  </div>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
