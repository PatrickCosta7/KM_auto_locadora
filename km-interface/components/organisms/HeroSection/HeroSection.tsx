import { Button } from '../../atoms/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[560px] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/images/banner_img.jpg')",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-300/50 to-gray-50/50 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-20">
        <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-6 lg:mb-8 font-oxygen leading-tight">
            Transforme seu carro extra em renda mensal com a KM Auto Locadora
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 lg:mb-12 text-gray-700 font-oxygen leading-relaxed">
            Ganhe até 3% ao mês com investimento seguro, contrato garantido e total transparência.
          </p>
          <Button 
            href="#contato" 
            className="main-button text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-5 inline-block"
          >
            Quero ser investidor
          </Button>
        </div>
      </div>
    </section>
  );
}