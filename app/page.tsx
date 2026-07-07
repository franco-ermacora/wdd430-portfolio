import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'Sleep Outside E-Commerce',
    description: 'A collaborative web application built for managing outdoor and camping gear sales. It features dynamic product rendering, data fetching from JSON files, and cart management.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vite', 'GitHub Workflow'],
    link: 'https://github.com/franco/sleep-outside'
  },
  {
    title: 'Movie Meal Matcher',
    description: 'A personal web utility deployed to production that pairs perfect dinner selections based on specific cinematic genres with advanced responsive CSS layouts.',
    technologies: ['HTML', 'Advanced CSS', 'JavaScript', 'External APIs', 'GitHub Pages'],
    link: 'https://github.com/franco/movie-meal-matcher'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12 max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          My Portfolio
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Hi, I'm Franco, a student and digital illustrator learning full-stack web development. Here are some of my recent academic and personal projects.
        </p>
      </section>
      
      <div className="max-w-5xl mx-auto">
        <ProjectList projects={projects} />
      </div>
    </main>
  );
}