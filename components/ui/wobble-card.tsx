"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full bg-gradient-to-br from-black to-yellow-900/20 relative rounded-2xl overflow-hidden border border-yellow-500/10",
        containerClassName
      )}
    >
      <div
        className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(133,78,25,0.1),rgba(0,0,0,0.2))] sm:mx-0 sm:rounded-2xl overflow-hidden"
      >
        <div
          className={cn("h-full px-4 py-20 sm:px-10", className)}
        >
          <Noise />
          {children}
        </div>
      </div>
    </div>
  );
};

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundSize: "30%",
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 25 25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h25v25H0z' fill='%23ff0' opacity='0.1'/%3E%3Ccircle cx='12.5' cy='12.5' r='1' fill='%23ff0' opacity='0.1'/%3E%3C/svg%3E\")"
      }}
    ></div>
  );
};