import { CheckCircle } from 'lucide-react';

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
    <section id="beneficios" className="py-16 lg:py-20 xl:py-24 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        <h2 className="text-4xl lg:text-5lg font-bold text-primary mb-12 lg:mb-16 font-oxygen text-center">
          Benefícios para o investidor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4 lg:space-x-6">
              <div className="flex-shrink-0">
                <div className="flex-shrink-0 mt-1 bg-orange-500 rounded-full p-1">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-primary mb-2 lg:mb-3 font-oxygen">
                  {benefit.title}
                  {benefit.link && (
                    <a
                      href={benefit.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-accent transition-colors ml-1"
                    >
                      Abile Corretora de seguros.
                    </a>
                  )}
                </h3>
                <p className="text-gray-600 font-oxygen leading-relaxed text-base lg:text-lg">
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
