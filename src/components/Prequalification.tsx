import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, Send, CheckCircle2 } from "lucide-react";

export default function Prequalification() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyValue: "",
    requestedAmount: "",
    income: "",
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="precalificacion" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Precalificá <br />
              <span className="text-primary italic text-gradient">sin compromiso.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Completá tus datos básicos y obtené una estimación de tu capacidad crediticia. Un paso más cerca de tu propiedad.
            </p>

            <div className="space-y-8">
               <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-primary font-bold">01</div>
                  <p className="text-lg text-gray-300">Completá el formulario en 2 minutos.</p>
               </div>
               <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-primary font-bold">02</div>
                  <p className="text-lg text-gray-300">Nuestro algoritmo analiza tu perfil.</p>
               </div>
               <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-primary font-bold">03</div>
                  <p className="text-lg text-gray-300">Te contactamos con una propuesta.</p>
               </div>
            </div>
          </div>

          <div className="bg-white text-gray-900 p-8 md:p-12 rounded-[40px] shadow-2xl relative">
            {!isSubmitted ? (
               <form onSubmit={handleSubmit}>
                  <div className="mb-8 flex justify-between items-center">
                     <div className="flex gap-2">
                        {[1, 2, 3].map(i => (
                           <div
                             key={i}
                             className={`h-1.5 w-8 rounded-full transition-all ${step >= i ? "bg-primary" : "bg-gray-100"}`}
                           />
                        ))}
                     </div>
                     <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Paso {step} de 3</span>
                  </div>

                  <AnimatePresence mode="wait">
                     {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                           <h4 className="text-2xl font-bold mb-6">Datos de contacto</h4>
                           <div>
                              <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Nombre Completo</label>
                              <input
                                required
                                type="text"
                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                placeholder="Ej: Juan Pérez"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              />
                           </div>
                           <div>
                              <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Email Corporativo/Personal</label>
                              <input
                                required
                                type="email"
                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                placeholder="example@gmail.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              />
                           </div>
                           <button
                             type="button"
                             onClick={nextStep}
                             className="w-full py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2"
                           >
                              Continuar <ArrowRight className="w-5 h-5" />
                           </button>
                        </motion.div>
                     )}

                     {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                           <h4 className="text-2xl font-bold mb-6">Detalles del crédito</h4>
                           <div>
                              <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Valor de la propiedad (USD)</label>
                              <input
                                required
                                type="number"
                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                placeholder="U$D 150.000"
                                value={formData.propertyValue}
                                onChange={(e) => setFormData({ ...formData, propertyValue: e.target.value })}
                              />
                           </div>
                           <div>
                              <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Monto solicitado (USD)</label>
                              <input
                                required
                                type="number"
                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                placeholder="U$D 80.000"
                                value={formData.requestedAmount}
                                onChange={(e) => setFormData({ ...formData, requestedAmount: e.target.value })}
                              />
                           </div>
                           <div className="flex gap-4">
                              <button
                                type="button"
                                onClick={prevStep}
                                className="flex-1 py-5 bg-gray-100 text-gray-900 rounded-2xl font-bold flex items-center justify-center gap-2"
                              >
                                 <ArrowLeft className="w-5 h-5" /> Volver
                              </button>
                              <button
                                type="button"
                                onClick={nextStep}
                                className="flex-[2] py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2"
                              >
                                 Continuar <ArrowRight className="w-5 h-5" />
                              </button>
                           </div>
                        </motion.div>
                     )}

                     {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                           <h4 className="text-2xl font-bold mb-6">Finalizar solicitud</h4>
                           <div>
                              <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Teléfono / WhatsApp</label>
                              <input
                                required
                                type="tel"
                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                placeholder="+54 9 11 ..."
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              />
                           </div>
                           <div>
                              <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Ingresos Mensuales Estimados (ARS)</label>
                              <input
                                required
                                type="text"
                                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                placeholder="$800.000+"
                                value={formData.income}
                                onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                              />
                           </div>
                           <div className="flex gap-4">
                              <button
                                type="button"
                                onClick={prevStep}
                                className="flex-1 py-5 bg-gray-100 text-gray-900 rounded-2xl font-bold flex items-center justify-center gap-2"
                              >
                                 <ArrowLeft className="w-5 h-5" /> Volver
                              </button>
                              <button
                                type="submit"
                                className="flex-[2] py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/20"
                              >
                                 Enviar solicitud <Send className="w-5 h-5" />
                              </button>
                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </form>
            ) : (
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="text-center py-12"
               >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                     <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-3xl font-bold mb-4">¡Solicitud recibida!</h4>
                  <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                     Gracias {formData.fullName}. Un asesor de Hipotecas Brutti te contactará en las próximas 24hs hábiles para darte una preventa personalizada.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setStep(1); }}
                    className="px-8 py-4 border border-gray-200 rounded-2xl font-bold text-gray-500 hover:bg-gray-50"
                  >
                     Volver a simular
                  </button>
               </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
