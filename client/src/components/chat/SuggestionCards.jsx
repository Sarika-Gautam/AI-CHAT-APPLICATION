import {
  Code2,
  FileText,
  Brain,
  Briefcase,
} from "lucide-react";

const cards = [
  {
    icon: <Code2 size={28} />,
    title: "Generate Code",
    desc: "Build React, Java, Python projects",
  },
  {
    icon: <Brain size={28} />,
    title: "Learn DSA",
    desc: "Practice coding interview questions",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Placement Prep",
    desc: "Mock interviews & aptitude",
  },
  {
    icon: <FileText size={28} />,
    title: "Resume Review",
    desc: "Improve ATS score",
  },
];

function SuggestionCards() {
  return (
    <div className="grid grid-cols-2 gap-5 mt-12">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-[#141414] border border-zinc-800 rounded-2xl p-6 hover:border-cyan-400 hover:scale-105 transition-all cursor-pointer"
        >
          <div className="text-cyan-400 mb-4">{card.icon}</div>

          <h2 className="font-semibold text-lg">
            {card.title}
          </h2>

          <p className="text-zinc-400 mt-2 text-sm">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SuggestionCards;
