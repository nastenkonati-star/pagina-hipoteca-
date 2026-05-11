import { motion } from "motion/react";
import { ShieldCheck, Zap, HeartHandshake, Rocket, Landmark, Key } from "lucide-react";

const benefits = [
  {
    title: "Aprobación Veloz",
    description: "Recibí una respuesta preliminar en menos de 24 horas hábiles.",
    icon: Zap,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Sistema Francés",
    description: "Cuotas fijas en dólares con amortización de capital e interés sobre saldos.",
    icon: Landmark,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "100% Digital",
    description: "Gestioná toda tu solicitud desde la comodidad de tu casa.",
    icon: Rocket,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Seguridad Jurídica",
    description: "Operaciones respaldadas por marcos legales sólidos y escribanos de primer nivel.",
    icon: ShieldCheck,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Asesoramiento VIP",
    description: "Un experto dedicado te acompañará en cada paso del proceso.",
    icon: HeartHandshake,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Entrega de Llaves",
    description: "Procesos optimizados para que te mudes lo antes posible.",
    icon: Key,
    color: "bg-rose-100 text-rose-600",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              ¿Por qué elegir un crédito <br />
              <span className="text-primary underline decoration-primary/20">privado con nosotros?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              En Argentina, el acceso al crédito hipotecario tradicional es complejo. Hipotecas Brutti nace para romper esa barrera, uniendo capital privado con familias que buscan su primer hogar o inversión.
            </p>

            <div className="space-y-6">
               <div className="p-6 rounded-3xl bg-surface border border-gray-100 flex gap-6">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shrink-0">
                     <ShieldCheck className="text-white" />
                  </div>
                  <div>
                     <h4 className="font-bold text-lg mb-1">Confianza Garantizada</h4>
                     <p className="text-gray-600">Más de 500 familias ya confiaron en nuestro modelo de inversión segura.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[32px] bg-surface hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all border border-transparent hover:border-gray-100 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
