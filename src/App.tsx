/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Simulator from "./components/Simulator";
import Benefits from "./components/Benefits";
import Prequalification from "./components/Prequalification";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Professionals from "./components/Professionals";
import Chatbot from "./components/Chatbot";
import LegalModal from "./components/Legal";
import { motion, useScroll, useSpring } from "motion/react";
import { ShieldCheck, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [legalType, setLegalType] = useState<"terms" | "privacy" | null>(null);

  useEffect(() => {
    const handleOpenLegal = (e: any) => setLegalType(e.detail);
    window.addEventListener('open-legal', handleOpenLegal);
    return () => window.removeEventListener('open-legal', handleOpenLegal);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Social Proof / Trust Banner */}
        <section className="py-12 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center md:text-left">Referentes del Mercado</span>
               <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-16 opacity-50 grayscale font-serif font-bold text-slate-400">
                  <span className="text-xl md:text-2xl tracking-tighter">BANCO HIPOTECARIO</span>
                  <span className="text-xl md:text-2xl tracking-tighter">GALICIA</span>
                  <span className="text-xl md:text-2xl tracking-tighter">MACRO</span>
                  <span className="text-xl md:text-2xl tracking-tighter">PROVINCIA</span>
               </div>
            </div>
          </div>
        </section>

        {/* Nosotros Section */}
        <section id="nosotros" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="relative"
               >
                  <div className="aspect-video rounded-[40px] overflow-hidden shadow-2xl">
                     <img 
                       src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                       alt="Fintech Office"
                       className="w-full h-full object-cover"
                       referrerPolicy="no-referrer"
                     />
                  </div>
                  <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-[32px] text-white shadow-xl hidden md:block">
                     <span className="text-4xl font-bold block mb-1">+15 años</span>
                     <span className="text-xs uppercase font-bold tracking-widest opacity-80">Experiencia en el sector</span>
                  </div>
               </motion.div>

               <div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                    Nosotros
                  </h2>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Hipotecas Brutti es el nexo entre los que necesitan un crédito hipotecario en condiciones razonables, e inversores que buscan la mejor rentabilidad de su capital con la máxima seguridad.
                  </p>
                  <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                    Nuestra misión es facilitar el acceso a la vivienda propia mediante un sistema transparente, ágil y digital, adaptado a la realidad financiera de Argentina hoy.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                           <ShieldCheck />
                        </div>
                        <span className="font-bold text-slate-800">Seguridad Jurídica</span>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                           <Zap />
                        </div>
                        <span className="font-bold text-slate-800">Agilidad Fintech</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        <Simulator />
        
        <Professionals />

        <Benefits />

        {/* Call to Action Banner */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-primary rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
               <div className="relative z-10 max-w-2xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
                    ¿Listo para dar el paso hacia tu nueva vida?
                  </h2>
                  <p className="text-xl text-white/70 mb-10">
                    Agenda una reunión con uno de nuestros asesores expertos y despejá todas tus dudas.
                  </p>
                  <button className="px-10 py-5 bg-white text-primary rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl">
                    Agendar reunión ahora
                  </button>
               </div>
            </div>
          </div>
        </section>

        <Prequalification />
        
        <FAQ />
        
        <Blog />
      </main>

      <Footer />
      <Chatbot />
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </div>
  );
}
