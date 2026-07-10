import SkillCard from '@/components/SkillCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">About Me</h2> 
      
      <p className="text-lg text-slate-300 leading-relaxed mb-8">
        I am a dedicated web development student focused on creating responsive, efficient, and accessible software solutions. In addition to programming architectures, I have a strong passion for visual communication, graphic layout, and illustrative narrative design.
      </p>

      <h3 className="text-xl font-bold text-white mb-6">Technical Specialties & Areas of Interest</h3>
      
      <div className="grid gap-6 sm:grid-cols-3">
        <SkillCard 
          category="Frontend Web" 
          skills={['JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'React.js', 'Next.js App Router']} 
          borderColor="border-blue-500"
        />
        <SkillCard 
          category="Tools & OS" 
          skills={['Git & GitHub', 'Linux Mint OS', 'Node.js & npm', 'VS Code']} 
          borderColor="border-emerald-500"
        />
        <SkillCard 
          category="Creative Practice" 
          skills={['Digital Illustration', 'Character Design', 'Visual Composition', 'Storyboarding']} 
          borderColor="border-purple-500"
        />
      </div>
    </main>
  );
}