import { Footer } from '../components/molecules/Footer';
import { Navbar } from '../components/molecules/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}