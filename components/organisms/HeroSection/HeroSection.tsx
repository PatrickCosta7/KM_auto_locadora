import { Button } from '../../atoms/Button';
import { ArrowRight, BarChart2, ShieldCheck, Clock } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
      {/* Background grid pattern - more visible */}
      <div className="absolute inset-0 z-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="6" height="6" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="6" height="6" fill="none" stroke="#fff" strokeWidth="0.6" opacity="0.25" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      {/* Car image overlay - right side, purple overlay, higher opacity */}
      <div className="absolute right-0 top-0 h-full w-full md:w-1/2 z-0 opacity-20 md:opacity-30 bg-purple-900/70">
        <img src="/images/banner_img.jpg" alt="Car" className="w-full h-full object-cover object-center opacity-60" />
      </div>
      <div className="container mt-10 mx-auto px-4 py-24 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left content */}
          <div className="md:w-3/5 flex flex-col justify-center mb-12 md:mb-0 md:pr-12">
            <div className="bg-indigo-700/50 backdrop-blur-sm rounded-full w-56 py-2 mb-8 border-2 border-indigo-400 shadow-lg flex items-center justify-start">
                <span className="font-oxygen font-bold text-white px-4 py-1">
                Investimento Inteligente
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Transforme seu{' '}
              <span className="text-orange-400">carro extra</span> em renda mensal garantida
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">
              Ganhe até{' '}
              <span className="font-extrabold text-orange-400">3% ao mês</span> com investimento seguro, contrato garantido e total transparência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-primary text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl">
                Quero ser investidor
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#how-it-works" className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 border-2 border-white/40 text-white font-bold py-4 px-8 rounded-full text-lg transition-all">
                Como funciona
              </a>
            </div>
            {/* Features */}
            <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-12 mt-4">
              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-full mr-3">
                  <BarChart2 className="w-6 h-6 text-orange-400" />
                </div>
                <span className="text-base">Até 3% de retorno mensal</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-full mr-3">
                  <ShieldCheck className="w-6 h-6 text-orange-400" />
                </div>
                <span className="text-base">Investimento seguro</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-full mr-3">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <span className="text-base">Contrato garantido</span>
              </div>
            </div>
          </div>
          {/* Right content - Simulator */}
          <div className="md:w-2/5 flex items-center justify-center relative">
            <div className="w-full max-w-md bg-purple-900/80 backdrop-blur-md rounded-3xl p-8 border-2 border-purple-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Simulador de Rendimento</h3>
              <div className="space-y-6 mb-8">
                <div className="bg-white/10 p-5 rounded-xl">
                  <p className="text-base mb-1">Valor do veículo</p>
                  <p className="text-3xl font-extrabold">R$ 50.000</p>
                </div>
                <div className="bg-white/10 p-5 rounded-xl">
                  <p className="text-base mb-1">Rendimento mensal (3%)</p>
                  <p className="text-3xl font-extrabold text-orange-400">R$ 1.500</p>
                </div>
                <div className="bg-white/10 p-5 rounded-xl">
                  <p className="text-base mb-1">Rendimento anual</p>
                  <p className="text-3xl font-extrabold">R$ 18.000</p>
                </div>
              </div>
              <Button
                // href="#contact"
                className="block w-full font-bold lg:text-xl px-5 lg:px-8 lg:px-12 py-2 lg:py-5 inline-block"
              >
                Simular meu veículo
              </Button>
            </div>
            {/* Decorative blurred circles */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-indigo-500/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-indigo-900 to-transparent"></div>
    </section>
  );
}