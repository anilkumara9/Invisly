export function Stats() {
  const stats = [
    { value: "500+", label: "Problem patterns recognized" },
    { value: "95%", label: "Accuracy in solution generation" },
    { value: "< 3s", label: "Average analysis time" },
  ]

  return (
    <section className="container mt-20 py-12" aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">
        Statistics
      </h2>
      <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
        {stats.map((s, index) => (
          <div 
            key={s.label} 
            className="rounded-2xl border border-border/50 bg-background/30 backdrop-blur-sm p-8 text-center transition-all duration-300 hover:border-primary/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
          >
            <div className="text-4xl md:text-5xl font-sentient text-primary mb-4">0{index + 1}</div>
            <div className="text-3xl font-sentient mb-2">{s.value}</div>
            <div className="font-mono text-foreground/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}