import React, { useEffect, useState } from 'react';
import { Star, StarHalf } from 'lucide-react';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/api/googleReviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

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

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                {/* ...existing header and rating code... */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold mr-3">
                                    {review.author_name ? review.author_name.charAt(0) : review.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-indigo-900">{review.author_name || review.name}</h3>
                                    <p className="text-xs text-gray-500">{review.relative_time_description || review.date}</p>
                                </div>
                            </div>
                            <div className="flex mb-3">{renderStars(review.rating)}</div>
                            <p className="text-gray-600 flex-grow">{review.text}</p>
                            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
                                <span className="text-xs text-gray-500">Google Review</span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* ...existing footer code... */}
            </div>
        </section>
    );
}