export function ContactSection() {
  return (
    <section id="contact" className="container mt-24 py-12">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-500/10 to-yellow-300/10 border border-yellow-500/20 rounded-full text-sm text-yellow-300 font-medium mb-4 sm:mb-6">
          Get In Touch
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight">
          Get in Touch
        </h2>
        <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-6">
          Have questions or need help? We're here for you
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full mt-6"></div>
      </div>
      
      <div className="max-w-2xl mx-auto rounded-2xl border border-border/50 bg-background/30 backdrop-blur-sm p-8 text-center">
        <p className="text-lg text-foreground/80">
          Email us at{" "}
          <a 
            className="text-primary underline hover:text-primary/80 transition-colors" 
            href="mailto:educationalpro6@gmail.com"
          >
            educationalpro6@gmail.com
          </a>
        </p>
        <p className="mt-4 text-foreground/60">
          We typically respond within 24 hours
        </p>
      </div>
    </section>
  )
}