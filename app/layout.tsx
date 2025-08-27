import { Footer } from '../components/organisms/Footer';
import { Navbar } from '../components/organisms/Navbar';
import './globals.css';

export const metadata = {
  title: 'KM Auto Locadora',
  description: 'Transforme seu carro extra em renda mensal com a KM Auto Locadora',
  icons: {
    icon: '/images/km_logo_favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9CTVTRVNR7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9CTVTRVNR7');
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}