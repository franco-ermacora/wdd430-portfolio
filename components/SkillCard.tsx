interface SkillCardProps {
  category: string;
  skills: string[];
  borderColor?: string;
}

export default function SkillCard({ category, skills, borderColor = 'border-blue-500' }: SkillCardProps) {
  return (
    <div className={`p-5 border-l-4 ${borderColor} bg-white rounded shadow-sm`}>
      <h4 className="font-bold text-slate-800 text-lg mb-2">{category}</h4>
      <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}