export function Audience() {
  const groups = [
    {
      title: "Students",
      points: [
        "Prepare for technical interviews",
        "Practice coding problems with AI guidance",
        "Learn complex algorithms and data structures",
        "Get instant feedback on your solutions",
      ],
    },
    {
      title: "Developers",
      points: [
        "Brush up on coding skills",
        "Prepare for job interviews",
        "Learn new programming languages",
        "Optimize existing code solutions",
      ],
    },
    {
      title: "Career Changers",
      points: [
        "Transition into tech roles",
        "Build coding confidence",
        "Master interview-ready skills",
        "Understand complex programming concepts",
      ],
    },
  ]

  return (
    <section id="about" className="container mt-24 py-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight text-center">
        Who Is This For?
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="rounded-lg border border-border p-6">
            <h3 className="text-xl font-bold">{g.title}</h3>
            <ul className="mt-4 list-disc pl-6 text-foreground/80">
              {g.points.map((p) => (
                <li key={p} className="mt-2">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
