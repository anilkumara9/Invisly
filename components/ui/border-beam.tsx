"use client"

interface BorderBeamProps {
  className?: string
  duration?: number
  colorFrom?: string
  colorTo?: string
  borderWidth?: number
}

export const BorderBeam = ({
  className,
  duration = 3,
  colorFrom = "#ffc700",
  colorTo = "#ffaa40",
  borderWidth = 2,
}: BorderBeamProps) => {
  return (
    <>
      <style>{`
        @keyframes border-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .border-beam {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: ${borderWidth}px solid transparent;
          background: conic-gradient(from 0deg, transparent, ${colorFrom}, ${colorTo}, transparent) border-box;
          animation: border-spin ${duration}s linear infinite;
          pointer-events: none;
        }
      `}</style>
      <div className={`border-beam ${className || ""}`} />
    </>
  )
}