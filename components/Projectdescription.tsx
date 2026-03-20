const projects = [
  {
    icon: "📚",
    title: "Resource Distribution",
    description:
      "Provide 500 textbooks and 50 tablets to five target schools. Introduce offline digital libraries to overcome connectivity challenges.",
    color: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-600",
  },
  {
    icon: "🎓",
    title: "Teacher Training",
    description:
      "Conduct workshops to train digital skills, importance of digital literacy, resource utilization, and inclusive teaching strategies.",
    color: "bg-gray-50 border-gray-200",
    iconBg: "bg-gray-800",
  },
  {
    icon: "🤝",
    title: "Community Engagement",
    description:
      "Organize parent-teacher forums to strengthen community support for education. Launch awareness campaigns promoting girls' education and student retention.",
    color: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-600",
  },
];

export default function ProjectDescription() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-amber-600 text-xs font-bold tracking-widest uppercase">What We Do</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-3">
            Project <span className="text-amber-600">Description</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Our three-pillar approach ensures sustainable, community-driven impact across schools in Kisii, Kenya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl border p-8 ${p.color} transition-transform hover:-translate-y-1 duration-200`}
            >
              <div className={`w-12 h-12 ${p.iconBg} rounded-xl flex items-center justify-center text-xl mb-5 shadow-md`}>
                {p.icon}
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-3">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        {/* SDG callout */}
        <div className="mt-14 bg-gray-900 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div>
            <p className="text-amber-400 font-bold text-sm">Aligned with Global Goals</p>
            <p className="text-white text-lg font-semibold mt-1">
              Join us and make an impact
            </p>
          </div>
          <a
            href="#donate"
            className="shrink-0 bg-amber-600 hover:bg-amber-500 text-white font-bold px-6 py-3 rounded-full transition-colors text-sm"
          >
            Support Our Work
          </a>
        </div>
      </div>
    </section>
  );
}