import styles from './Card.module.css';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className={`${styles.card} rounded-lg shadow-xl px-4 py-11 flex flex-col items-center text-center`}>
      <div className={`${styles.cardImage} mb-3 text-3xl`}>{icon}</div>
      <h2 className={`${styles.cardTitle} text-xl text-primary font-bold my-2`}>{title}</h2>
      <p className={`${styles.cardBody} text-gray-700`}>{description}</p>
    </div>
  );
};
