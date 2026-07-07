import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col justify-between">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}