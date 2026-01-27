import { DottedMap } from "@/components/ui/dotted-map";

export default function StatsSection() {
    return (
        <section className="py-12 md:py-20 bg-black relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <DottedMap
                    width={300}
                    height={150}
                    mapSamples={5000}
                    dotRadius={0.5}
                    dotColor="#FFFFFF"
                    className="w-full h-full opacity-30"
                />
            </div>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 relative z-10">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-500/10 to-yellow-300/10 border border-yellow-500/20 rounded-full text-sm text-yellow-300 font-medium mb-4 sm:mb-6">
                        By The Numbers
                    </div>
                    <h2 className="text-4xl font-bold lg:text-5xl text-white">Invisly <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">in numbers</span></h2>
                    <p>Invisly is helping students ace their technical interviews and navigate proctored exams with confidence.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent text-glow">95%</div>
                        <p className="text-foreground/80">Success Rate</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent text-glow">500+</div>
                        <p className="text-foreground/80">Practice Problems</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent text-glow">24/7</div>
                        <p className="text-foreground/80">AI Support</p>
                    </div>
                </div>
            </div>
        </section>
    )
}