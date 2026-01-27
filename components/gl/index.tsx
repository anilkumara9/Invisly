import { Effects } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useControls } from "leva"
import { Particles } from "./particles"
import { VignetteShader } from "./shaders/vignetteShader"

export const GL = ({ hovering }: { hovering: boolean }) => {
  const {
    speed,
    focus,
    aperture,
    size,
    noiseScale,
    noiseIntensity,
    timeScale,
    pointSize,
    opacity,
    planeScale,
    vignetteDarkness,
    vignetteOffset,
    useManualTime,
    manualTime,
    showParticles,
  } = useControls("Particle System", {
    speed: { value: 1.0, min: 0, max: 2, step: 0.01 },
    noiseScale: { value: 0.6, min: 0.1, max: 5, step: 0.1 },
    noiseIntensity: { value: 0.52, min: 0, max: 2, step: 0.01 },
    timeScale: { value: 1, min: 0, max: 2, step: 0.01 },
    focus: { value: 3.8, min: 0.1, max: 20, step: 0.1 },
    aperture: { value: 1.79, min: 0, max: 2, step: 0.01 },
    pointSize: { value: 10.0, min: 0.1, max: 10, step: 0.01 },
    opacity: { value: 0.3, min: 0, max: 1, step: 0.01 }, // Reduced opacity to allow background to show through
    planeScale: { value: 10.0, min: 0.1, max: 10, step: 0.1 },
    size: {
      value: 256, // Reduced default size for better performance
      options: [256, 512, 1024],
    },
    showDebugPlane: { value: false },
    vignetteDarkness: { value: 0.5, min: 0, max: 2, step: 0.1 }, // Further reduced vignette darkness
    vignetteOffset: { value: 0.4, min: 0, max: 2, step: 0.1 },
    useManualTime: { value: false },
    manualTime: { value: 0, min: 0, max: 50, step: 0.01 },
    showParticles: { value: false }, // Option to show/hide particles - default to false to show background
  })
  
  // If particles are disabled, don't render anything
  if (!showParticles) {
    return (
      <div id="webgl" aria-hidden="true" role="presentation" className="absolute inset-0">
        {/* Empty div when particles are disabled to show background image */}
      </div>
    )
  }
  
  return (
    <div id="webgl" aria-hidden="true" role="presentation" className="absolute inset-0">
      <Canvas
        camera={{
          position: [1.2629783123314589, 2.664606471394044, -1.8178993743288914],
          fov: 50,
          near: 0.01,
          far: 300,
        }}
        style={{ background: 'transparent' }}
      >
        {/* <Perf position="top-left" /> */}
        {/* Removed the black background color to allow the background image to show through */}
        <Particles
          speed={speed}
          aperture={aperture}
          focus={focus}
          size={size}
          noiseScale={noiseScale}
          noiseIntensity={noiseIntensity}
          timeScale={timeScale}
          pointSize={pointSize}
          opacity={opacity}
          planeScale={planeScale}
          useManualTime={useManualTime}
          manualTime={manualTime}
          introspect={hovering}
        />
        <Effects multisamping={0} disableGamma>
          <shaderPass
            args={[VignetteShader]}
            uniforms-darkness-value={vignetteDarkness}
            uniforms-offset-value={vignetteOffset}
          />
        </Effects>
      </Canvas>
    </div>
  )
}