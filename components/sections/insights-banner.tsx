import Image from "next/image";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export const InsightsBanner = () => {
  return (
    <section className="flex flex-col items-center bg-black relative overflow-hidden">
      {/* Background image with opacity */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/hand.avif')" }}></div>
      {/* Subtle gradient overlay for professional look */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20 pointer-events-none"></div>

      <div className="relative w-full max-w-[1400px] px-6 pt-[100px] pb-[100px] max-md:pt-12 max-md:pb-12 z-10">
        <div
          className="group relative block overflow-hidden rounded-[30px] bg-gradient-to-br from-background/40 to-background/20 backdrop-blur-lg border border-white/10 shadow-2xl"
        >
          <FlickeringGrid
            className="absolute inset-0 z-0 rounded-[30px]"
            squareSize={4}
            gridGap={6}
            color="#fbbf24"
            maxOpacity={0.3}
            flickerChance={0.15}
          />
          <div className="flex flex-col md:flex-row items-center relative z-10 p-6 md:p-8">
            <div className="md:w-2/3 md:order-2 p-6 flex justify-end">
              <div className="relative">
                <div className="absolute -inset-8 bg-black/60 blur-2xl rounded-3xl"></div>
                <div className="absolute -inset-4 bg-yellow-500/40 blur-3xl rounded-full"></div>
                <div className="absolute inset-0 bg-black/30 rounded-2xl z-5"></div>
                <div className="relative z-10">
                  <Image
                    src="/assets/new photo.jpg"
                    alt="Anil Kumar Meda - Professional Developer"
                    width={600}
                    height={400}
                    className="h-auto w-full max-w-[400px] object-contain mx-auto rounded-2xl border-2 border-yellow-500/30 shadow-2xl"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/3 md:order-1 p-8 md:p-12">
              <div className="space-y-6">
                <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                  Featured Developer
                </h2>
                <blockquote className="text-white text-2xl md:text-3xl font-medium italic border-l-4 border-yellow-500 pl-6 py-4">
                  "I am open to work and eager to contribute my skills to innovative projects. If you're impressed by my work, let's connect at anilkumarmeda6@gmail.com"
                </blockquote>
                <div className="pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-px bg-white/30 flex-grow"></div>
                    <span className="text-yellow-500 font-bold text-xl">Anil Kumar Meda</span>
                    <div className="h-px bg-white/30 flex-grow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};