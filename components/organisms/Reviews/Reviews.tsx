import React from 'react';
import { Star, StarHalf } from 'lucide-react';

export default function Reviews() {
    const reviews = [{
        name: 'Ricardo Oliveira',
        rating: 5,
        text: 'Excelente oportunidade de investimento! Meu carro estava parado na garagem e agora gera uma renda mensal consistente. O processo foi simples e a equipe da KM Auto Locadora é extremamente profissional.',
        date: '2 meses atrás'
    }, {
        name: 'Fernanda Santos',
        rating: 5,
        text: 'Estou muito satisfeita com o rendimento mensal que tenho recebido. A transparência no processo e os relatórios mensais me deixam tranquila sobre o meu investimento. Recomendo!',
        date: '3 meses atrás'
    }, {
        name: 'Carlos Mendes',
        rating: 4.5,
        text: 'Inicialmente estava receoso, mas após 6 meses como investidor, posso afirmar que foi uma das melhores decisões financeiras que tomei. O contrato é claro e o retorno é pontual todo mês.',
        date: '5 meses atrás'
    }, {
        name: 'Juliana Costa',
        rating: 5,
        text: 'A KM Auto Locadora transformou meu carro ocioso em uma fonte de renda passiva. O atendimento é excelente e o processo de vistoria foi rápido. Muito satisfeita com os resultados!',
        date: '1 mês atrás'
    }];

    // Function to render stars based on rating
    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={`star-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
        }
        if (hasHalfStar) {
            stars.push(<StarHalf key="half-star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
        }
        return stars;
    };
    return <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="Google Logo" className="h-6 mr-2" />
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 inline-block">
                        O que nossos investidores dizem
                    </h2>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <span className="ml-2 text-xl font-bold">4.9/5</span>
                    <span className="ml-2 text-gray-500">(32 avaliações)</span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reviews.map((review, index) => <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
                    <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold mr-3">
                            {review.name.charAt(0)}
                        </div>
                        <div>
                            <h3 className="font-bold text-indigo-900">{review.name}</h3>
                            <p className="text-xs text-gray-500">{review.date}</p>
                        </div>
                    </div>
                    <div className="flex mb-3">{renderStars(review.rating)}</div>
                    <p className="text-gray-600 flex-grow">{review.text}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="Google Review" className="h-4 mr-2" />
                        <span className="text-xs text-gray-500">Google Review</span>
                    </div>
                </div>)}
            </div>
            <div className="mt-10 text-center">
                <a href="#" className="inline-flex items-center text-indigo-700 font-bold hover:text-indigo-800 transition-colors">
                    Ver todas as avaliações no Google
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    </section>;
}