// pages/api/googleReviews.ts
import type { NextApiRequest, NextApiResponse } from 'next';



const mockReviews = [
  {
    author_name: "Maria Silva",
    text: "Ótimo atendimento e carros novos!",
    rating: 5,
    relative_time_description: "há 2 semanas"
  },
  {
    author_name: "João Souza",
    text: "Preço justo e serviço rápido.",
    rating: 4,
    relative_time_description: "há 1 mês"
  },
  {
    author_name: "Ana Lima",
    text: "Recomendo! Muito confiável.",
    rating: 5,
    relative_time_description: "há 3 dias"
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(mockReviews);
}


// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const placeId = 'YOUR_PLACE_ID';
//   const apiKey = 'YOUR_GOOGLE_API_KEY';
//   const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

//   const response = await fetch(url);
//   const data = await response.json();

//   res.status(200).json(data.result.reviews || []);
// }