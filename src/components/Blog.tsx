import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "La estabilidad cambiaria impulsa la compraventa de inmuebles en CABA",
    excerpt: "El sector inmobiliario en Argentina muestra señales de recuperación en la compraventa de inmuebles, con aumentos del 17,8% en la Ciudad Autónoma de Buenos Aires.",
    category: "Noticias",
    date: "May 15, 2024",
    image: "https://images.unsplash.com/photo-1449156001935-d2863cb32f30?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Crecieron las escrituras en CABA y PBA: el rol de los créditos hipotecarios",
    excerpt: "El mercado inmobiliario mostró en marzo un punto de inflexión con más de 16.000 operaciones. La vuelta del crédito es clave para el sector.",
    category: "Mercado",
    date: "May 10, 2024",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Mercado inmobiliario: proyecciones para los precios en 2026",
    excerpt: "Mientras en CABA las escrituras de compraventa registraron una mejora, el mercado comienza a proyectar un 2026 de franca recuperación.",
    category: "Tendencias",
    date: "May 05, 2024",
    image: "https://images.unsplash.com/photo-1460472178825-e5240623abe5?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Blog Hipotecas Brutti</h2>
            <p className="text-xl text-slate-600">Educación financiera y novedades del mercado inmobiliario argentino.</p>
          </div>
          <button className="px-8 py-4 border border-slate-200 rounded-2xl font-bold text-slate-900 hover:bg-slate-50 flex items-center gap-2 group transition-all">
            Ver todas las notas
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-[32px] overflow-hidden mb-6 relative">
                 <img
                   src={post.image}
                   alt={post.title}
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest">
                       {post.category}
                    </span>
                 </div>
              </div>
              <div className="text-sm text-gray-400 font-bold mb-3 uppercase tracking-widest">{post.date}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 font-bold text-primary group-hover:underline">
                 Leer más
                 <ArrowUpRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
