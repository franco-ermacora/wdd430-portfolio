import "./globals.css";
import { Inter } from 'next/font/google'; // 👈 AGREGÁ ESTA LÍNEA
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Configuración de la fuente
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Franco | Portfolio',
  description: 'My personal web development portfolio built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-950 text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}