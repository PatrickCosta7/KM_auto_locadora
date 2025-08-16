export default function HowItWorks() {
  const steps = [
    {
      icon: "✓",
      title: "Você cadastra seus dados",
      description: "Preencha o formulário com suas informações"
    },
    {
      icon: "🔍",
      title: "Fazemos análise e vistoria",
      description: "Avaliamos seu veículo e documentação"
    },
    {
      icon: "🚗",
      title: "KM coloca seu carro para rodar",
      description: "Gerenciamos a locação do seu veículo"
    },
    {
      icon: "💰",
      title: "E você recebe o seu rendimento mensal",
      description: "Receba seus lucros mensalmente"
    }
  ];

  return (
    <section id="how-it-works" className="bg-accent py-16 lg:py-18 xl:py-20">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        <h2 className="text-4xl lg:text-5lg font-bold text-white mb-12 lg:mb-13 xl:mb-15 font-oxygen text-center">
          Como funciona?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-6 lg:p-8 xl:p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-6xl lg:text-7xl xl:text-8xl mb-4 lg:mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-primary mb-3 lg:mb-4 font-oxygen">
                {step.title}
              </h3>
              <p className="text-gray-600 font-oxygen text-base lg:text-lg xl:text-xl">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
