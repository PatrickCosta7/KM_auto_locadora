import { Button } from '../../atoms/Button';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className="relative min-h-[560px] flex items-center justify-center overflow-hidden pt-30 pb-5">
      {/* Card Container */}
      <div className="relative z-20 w-full flex justify-center">
        <div
          className={styles.heroCard + ' w-[85vw] h-[65vh] max-w-8xl'}
          style={{
            backgroundImage: "url('/images/banner_img.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
          }}
        >
          {/* Overlay */}
          <div className={`${styles.heroCardOverlay}`}></div>
          {/* Content */}
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 text-center">
            <h1 className="text-[1.9rem] md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-6 lg:mb-8 font-oxygen leading-tight">
              Transforme seu carro extra em renda mensal com a KM Auto Locadora
            </h1>
            <p className="text-1xl md:text-2xl lg:text-3xl mb-8 lg:mb-12 text-gray-900 font-oxygen font leading-relaxed">
              Ganhe até 3% ao mês com investimento seguro, contrato garantido e total transparência.
            </p>
            <Button
              href="#contato"
              className="text-md lg:text-xl px-5 lg:px-8 lg:px-12 py-2 lg:py-5 inline-block"
            >
              Quero ser investidor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}