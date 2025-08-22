
interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md px-4 py-10 flex flex-col items-center text-center">
      <div className="mb-3 text-3xl">{icon}</div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

