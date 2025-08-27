import Card from "../../molecules/Card/Card";

export default function HowItWorks() {
  const steps = [
    {
      icon: <span className="text-6xl lg:text-7xl xl:text-8xl">✓</span>,
      title: "Você cadastra seus dados",
      description: "Preencha o formulário com suas informações"
    },
    {
      icon: <span className="text-6xl lg:text-7xl xl:text-8xl">🔍</span>,
      title: "Fazemos análise e vistoria",
      description: "Avaliamos seu veículo e documentação"
    },
    {
      icon: <span className="text-6xl lg:text-7xl xl:text-8xl">🚗</span>,
      title: "KM coloca seu carro para rodar",
      description: "Gerenciamos a locação do seu veículo"
    },
    {
      icon: <span className="text-6xl lg:text-7xl xl:text-8xl">💰</span>,
      title: "E você recebe o seu rendimento mensal",
      description: "Receba seus lucros mensalmente"
    }
  ];

  return (
    <section id="how-it-works" className="bg-slate-50 py-16 lg:py-18 xl:py-20">
      <div className="container mx-auto mt-7 px-4 lg:px-8 xl:px-12">
        <h2 className="text-4xl lg:text-5lg font-bold text-primary mb-12 lg:mb-13 xl:mb-15 font-oxygen text-center">
          Como funciona?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-12">
          {steps.map((step, index) => (
            <Card
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
