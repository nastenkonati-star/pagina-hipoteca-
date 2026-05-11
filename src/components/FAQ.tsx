import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Cuáles son los requisitos básicos y el scoring?",
    answer: "Principalmente, requerimos un título de propiedad como garantía (o la propiedad a adquirir). En cuanto al scoring, somos mucho más flexibles que la banca tradicional: evaluamos tu capacidad de pago real y la solidez de la garantía. No es excluyente figurar en el Veraz si la situación es subsanable o está debidamente justificada.",
  },
  {
    question: "¿Qué documentación debo presentar?",
    answer: "Solo pedimos el Título de Propiedad (falla o fotocopia), DNI de los titulares, y comprobantes de ingresos (aunque sean informales o monostributo). Nuestro foco está en la agilidad: menos trámites, más soluciones.",
  },
  {
    question: "¿Qué monto máximo puedo solicitar?",
    answer: "Financiamos hasta el 45% del valor de tasación de la propiedad. Este margen garantiza la máxima seguridad tanto para el tomador del crédito como para el inversor.",
  },
  {
    question: "¿Cómo funciona el Sistema Francés?",
    answer: "Es un sistema donde las cuotas son fijas en dólares. Se pagan cuotas de capital e interés sobre saldos, lo que permite una amortización previsible desde el primer mes.",
  },
  {
    question: "¿En qué moneda se otorgan los créditos?",
    answer: "Todos nuestros créditos se otorgan y cancelan en Dólares Estadounidenses (U$S), brindando estabilidad en el mediano plazo a tasa fija (12% a 14%).",
  },
  {
    question: "¿Puedo cancelar el crédito antes de tiempo?",
    answer: "Sí, tenés la posibilidad de precancelar total o parcialmente en cualquier momento. A partir de los 6 meses, no existe ningún tipo de penalidad por precancelación.",
  },
  {
    question: "¿Cuánto tiempo demora el proceso?",
    answer: "La preaprobación es digital e instantánea. La tasación física se realiza en 48hs y la firma de la hipoteca ante escribano puede concretarse en unos 15 días.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Preguntas Frecuentes</h2>
          <p className="text-xl text-slate-600 font-medium">Todo lo que necesitás saber sobre nuestros créditos privados.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center group"
              >
                <span className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-all ${openIndex === index ? "bg-primary text-white" : "bg-gray-50 text-gray-400"}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-600 text-lg leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
