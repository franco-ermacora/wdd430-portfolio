export default function Footer() {  
  return (
    <footer className="bg-slate-950 text-slate-400 py-6 mt-12">
      <div className="container mx-auto text-center text-sm">
        <p>Copyright &copy; {new Date().getFullYear()} | Franco | All rights reserved</p>
      </div>
    </footer>
  );
}