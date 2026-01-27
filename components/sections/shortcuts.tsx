import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { CpuArchitecture } from './cpu-architecture';

interface Command {
  title: string;
  description: string;
  keys: (string | { type: 'arrows' })[];
}

const commandsData: Command[] = [
  {
    title: "Take screenshot",
    description: "",
    keys: ["Cmd/Ctrl", "+", "H"],
  },
  {
    title: "Process screenshots with AI",
    description: "",
    keys: ["Cmd/Ctrl", "+", "Enter"],
  },
  {
    title: "Reset screenshot queue",
    description: "",
    keys: ["Cmd/Ctrl", "+", "R"],
  },
  {
    title: "Toggle window visibility",
    description: "",
    keys: ["Cmd/Ctrl", "+", "B"],
  },
  {
    title: "Move window position",
    description: "",
    keys: ["Cmd/Ctrl", "+", { type: 'arrows' }],
  },
  {
    title: "Adjust opacity",
    description: "",
    keys: ["Cmd/Ctrl", "+", "Z/X"],
  },
];

const Shortcuts = () => {
  return (
    <section className="py-24 px-6 bg-black text-white relative">
      {/* CPU Architecture Background with Logo - More Visible */}
      <div className="absolute inset-0 opacity-30">
        <CpuArchitecture
          className="w-full h-full text-primary"
          showLogo={true}
          animateLines={true}
          animateMarkers={true}
          animateText={true}
        />
      </div>

      {/* Black shadow overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Simplified dot background */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-[radial-gradient(#ffffff33_1px,transparent_1px)]",
          "[background-size:20px_20px]"
        )}
      />

      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-500/10 to-yellow-300/10 border border-yellow-500/20 rounded-full text-sm text-yellow-300 font-medium mb-4 sm:mb-6">
            Core Shortcuts
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight">
            Keyboard <span className="text-yellow-500">Shortcuts</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#959595] max-w-2xl mx-auto leading-relaxed mb-6">
            Master Invisly with these essential shortcuts. Works on both Windows (Ctrl) and Mac (Cmd).
          </p>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {commandsData.map((command, index) => (
            <div
              key={command.title}
              className="flex flex-col gap-y-4 md:flex-row justify-between items-start md:items-center w-full pb-6 last:pb-0"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-medium">{command.title}</h3>
              </div>
              <div className="flex flex-row gap-3 items-center shrink-0">
                {command.keys.map((key, index) => {
                  if (typeof key === 'string') {
                    switch (key) {
                      case 'Cmd/Ctrl':
                        return (
                          <div key={index} className="bg-yellow-500 text-black px-4 py-2 flex items-center justify-center font-bold rounded-lg h-12 min-w-[100px] border-b-4 border-yellow-600 shadow-lg active:border-b-0 active:translate-y-1 transition-all">
                            Cmd/Ctrl
                          </div>
                        );
                      case '+':
                        return <span key={index} className="text-xl">+</span>;
                      default:
                        return (
                          <div key={index} className={`bg-neutral-900 text-white px-4 py-2 flex items-center justify-center font-bold rounded-lg w-12 h-12 ${key.length > 1 ? 'px-4' : 'px-3'} border-b-4 border-neutral-950 shadow-lg active:border-b-0 active:translate-y-1 transition-all`}>
                            {key}
                          </div>
                        );
                    }
                  } else if (key.type === 'arrows') {
                    return (
                      <div key={index} className="flex flex-row gap-2">
                        <div className="bg-neutral-900 text-white p-2 flex items-center justify-center font-bold rounded-lg w-12 h-12 border-b-4 border-neutral-950 shadow-lg active:border-b-0 active:translate-y-1 transition-all">
                          <ArrowUp className="w-4 h-4" />
                        </div>
                        <div className="bg-neutral-900 text-white p-2 flex items-center justify-center font-bold rounded-lg w-12 h-12 border-b-4 border-neutral-950 shadow-lg active:border-b-0 active:translate-y-1 transition-all">
                          <ArrowDown className="w-4 h-4" />
                        </div>
                        <div className="bg-neutral-900 text-white p-2 flex items-center justify-center font-bold rounded-lg w-12 h-12 border-b-4 border-neutral-950 shadow-lg active:border-b-0 active:translate-y-1 transition-all">
                          <ArrowLeft className="w-4 h-4" />
                        </div>
                        <div className="bg-neutral-900 text-white p-2 flex items-center justify-center font-bold rounded-lg w-12 h-12 border-b-4 border-neutral-950 shadow-lg active:border-b-0 active:translate-y-1 transition-all">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shortcuts;