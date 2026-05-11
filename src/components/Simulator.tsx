import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Calculator, Calendar, Info, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export default function Simulator() {
  const [propertyValue, setPropertyValue] = useState(250000); // USD
  const [loanAmount, setLoanAmount] = useState(112500); // 45% of 250k
  const [years, setYears] = useState(5);
  const [interestRate, setInterestRate] = useState(13);

  const formatUSD = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const monthlyPayment = useMemo(() => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = years * 12;
    if (monthlyRate === 0) return loanAmount / numberOfPayments;
    const x = Math.pow(1 + monthlyRate, numberOfPayments);
    const monthly = (loanAmount * x * monthlyRate) / (x - 1);
    return isFinite(monthly) ? monthly : 0;
  }, [loanAmount, years, interestRate]);

  const maxLoanAllowed = propertyValue * 0.45;

  return (
    <section id="simulador" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
             <span>Sistema Francés de Amortización</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Simulador de Préstamo Hipotecario
          </h2>
          <p className="text-xl text-slate-600">
            Créditos en U$S todo destino con tasa fija y máxima flexibilidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Controls */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100">
            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Valor de la Propiedad</label>
                  <span className="text-2xl font-bold text-slate-900 font-mono">{formatUSD(propertyValue)}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="1000000"
                  step="5000"
                  value={propertyValue}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setPropertyValue(val);
                    if (loanAmount > val * 0.45) setLoanAmount(val * 0.45);
                  }}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-6">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                    Monto a Solicitar (Máx 45%)
                  </label>
                  <span className="text-2xl font-bold text-primary font-mono">{formatUSD(loanAmount)}</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max={maxLoanAllowed}
                  step="1000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <p className="mt-2 text-xs text-slate-400 font-medium italic">
                  *Hasta el 45% del valor de tasación permitido.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Plazo (Años)</label>
                    <span className="text-xl font-bold text-slate-900 font-mono">{years} años</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-2 uppercase">
                    <span>1 año</span>
                    <span>10 años</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Tasa Fija Anual</label>
                    <span className="text-xl font-bold text-emerald-600 font-mono">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="14"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 flex">
            <motion.div
              layout
              className="bg-white border border-slate-100 p-10 rounded-[40px] shadow-2xl shadow-slate-200/50 relative overflow-hidden w-full flex flex-col justify-between"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                   <h3 className="text-xl font-bold text-slate-800">Cuota Mensual</h3>
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full">Sist. Francés</span>
                </div>

                <div className="mb-12">
                   <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-2">Pago Mensual en U$S</p>
                   <div className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">
                    {formatUSD(monthlyPayment)}
                  </div>
                </div>

                <div className="space-y-4 py-8 border-t border-slate-50">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-400 uppercase">Amortización</span>
                    <span className="text-lg font-bold text-slate-900">Capital + Interés</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-sm font-bold text-slate-400 uppercase">Precancelación</span>
                     <div className="flex items-center gap-2 text-emerald-600 text-sm font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                        <ShieldCheck size={14} />
                        SIN PENALIDAD*
                     </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[10px] text-slate-400 mb-6 italic leading-relaxed">
                  *Posibilidad de precancelar total o parcialmente en cualquier momento, sin penalidad a partir de los 6 meses.
                </p>
                <a
                   href="#precalificacion"
                   className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-secondary transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                   Solicitar este crédito
                   <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
