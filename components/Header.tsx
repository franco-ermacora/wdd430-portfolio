import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-950 text-white py-4 shadow-md">
      <nav className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight text-white">Franco | Portfolio</div>
        <ul className="flex gap-6 font-medium">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}