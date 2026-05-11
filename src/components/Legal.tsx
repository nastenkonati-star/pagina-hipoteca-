import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShieldAlert, Scale, Lock } from "lucide-react";

interface LegalModalProps {
  type: "terms" | "privacy" | null;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl max-h-[80vh] bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                {type === "terms" ? <Scale size={24} /> : <ShieldAlert size={24} />}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {type === "terms" ? "Términos y Condiciones" : "Política de Privacidad"}
                </h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hipotecas Brutti • Última actualización May 2026</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-400 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-10 prose prose-slate max-w-none">
            {type === "terms" ? (
              <div className="space-y-8">
                <section>
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-primary rounded-full" />
                    1. Aceptación de los Términos
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Al acceder y utilizar el sitio web de Hipotecas Brutti, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro portal ni solicitar nuestros servicios financieros.
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-primary rounded-full" />
                    2. Naturaleza del Servicio
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Hipotecas Brutti opera como un facilitador de créditos hipotecarios de capital privado. La aprobación de cualquier crédito está sujeta a la evaluación patrimonial, jurídica y de riesgo de la propiedad ofrecida en garantía, así como a la solvencia del solicitante.
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-primary rounded-full" />
                    3. Responsabilidad del Usuario
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    El usuario garantiza que toda la información proporcionada en los formularios de pre-calificación es veraz y actual. La falsificación de datos personales o financieros constituye una falta grave que resultará en el rechazo inmediato de la solicitud.
                  </p>
                </section>

                <section className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <p className="text-xs text-slate-500 italic">
                    Nota: Los préstamos están garantizados mediante hipotecas de primer grado inscritas ante el Registro de la Propiedad Inmueble correspondiente.
                  </p>
                </section>
              </div>
            ) : (
              <div className="space-y-8">
                <section>
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-primary rounded-full" />
                    1. Recolección de Datos
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Recopilamos datos personales (Nombre, DNI, Email, Teléfono) y datos patrimoniales con el único fin de evaluar la pre-calificación crediticia. Estos datos son tratados bajo estrictas normas de seguridad digital.
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-primary rounded-full" />
                    2. Uso de la Información
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Su información no será vendida ni cedida a terceros con fines publicitarios. Solo será compartida con los inversores o entes jurídicos necesarios para concretar la operación hipotecaria solicitada.
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-primary rounded-full" />
                    3. Seguridad de los Datos
                  </h4>
                  <div className="flex items-center gap-4 bg-emerald-50 p-6 rounded-3xl border border-emerald-100 mb-4">
                    <Lock className="text-emerald-600" />
                    <p className="text-sm font-bold text-emerald-800">Encriptación de punto a punto (AES-256)</p>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración.
                  </p>
                </section>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex justify-end">
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all"
            >
              Entendido
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
