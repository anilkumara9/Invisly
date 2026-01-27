import { TiltedScroll } from "@/components/ui/tilted-scroll"

export function TiltedScrollDemo() {
  const customItems = [
    { id: "1", text: "Feature One" },
    { id: "2", text: "Feature Two" },
    { id: "3", text: "Feature Three" },
    { id: "4", text: "Feature Four" },
    { id: "5", text: "Feature Five" },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Tilted Scroll Demo</h2>
        <p className="text-muted-foreground mb-8">3D skewed scrolling animation with hover effects</p>
      </div>
      <div className="flex justify-center">
        <TiltedScroll 
          items={customItems}
          className="mt-8"
        />
      </div>
    </div>
  )
}