export default function Benefits() {
  const benefits = [
    {
      title: "Renda passiva garantida",
      description: "Receba mensalmente sem se preocupar com a operação do veículo."
    },
    {
      title: "Contrato Transparente",
      description: "Termos claros e objetivos, garantindo segurança e confiança."
    },
    {
      title: "Seguro do Veículo",
      description: "Fica sob responsabilidade do investidor, protegendo seus interesses diretamente."
    },
    {
      title: "Parceria com a Abile Corretora de seguros",
      description: "Cotações competitivas e personalizadas com a confiança da Abile Corretora de seguros.",
      link: "https://abilecorretoradeseguros.com.br/"
    },
    {
      title: "Manutenção Compartilhada",
      description: "Custos divididos entre locadora e investidor, otimizando resultados."
    },
    {
      title: "Relatórios Mensais",
      description: "Acompanhe o desempenho do seu investimento com transparência."
    }
  ];

  return (
    <section id="beneficios" className="py-16 lg:py-20 xl:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        <h2 className="text-4xl lg:text-4xl xl:text-5xl font-bold text-primary mb-12 lg:mb-16 font-oxygen text-center">
          Benefícios para o investidor
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4 lg:space-x-6">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-secondary rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-dark mb-2 lg:mb-3 font-oxygen">
                  {benefit.title}
                  {benefit.link && (
                    <a 
                      href={benefit.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-secondary transition-colors ml-1"
                    >
                      Abile Corretora de seguros.
                    </a>
                  )}
                </h3>
                <p className="text-gray-600 font-oxygen leading-relaxed text-base lg:text-lg xl:text-xl">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
