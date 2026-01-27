import { AlertTriangle, CheckCircle, Info } from "lucide-react";

export function Disclaimer() {
  return (
    <section className="container mt-24 py-12 px-6 rounded-2xl bg-black/85 backdrop-blur-md border border-white/10 shadow-2xl" aria-labelledby="disclaimer-heading">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Info className="h-8 w-8 text-yellow-400" />
          <h2 id="disclaimer-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight text-center text-white">
            Important Disclaimer
          </h2>
        </div>
        
        <div className="mt-8 space-y-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/10 shadow-lg">
            <p className="text-lg leading-relaxed text-gray-200">
              This tool is designed for practice and learning purposes only. Users are responsible for ensuring ethical use
              during interviews and coding assessments. Always follow your institution&apos;s academic integrity policies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-gradient-to-br from-green-900/30 to-black border border-green-500/20 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <h3 className="font-sentient text-xl text-green-300">Recommended Usage</h3>
              </div>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-400 flex-shrink-0"></span>
                  <span className="text-gray-200">Personal practice sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-400 flex-shrink-0"></span>
                  <span className="text-gray-200">Mock interviews with friends</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-400 flex-shrink-0"></span>
                  <span className="text-gray-200">Learning and skill development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-400 flex-shrink-0"></span>
                  <span className="text-gray-200">Code review and optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-xl bg-gradient-to-br from-red-900/30 to-black border border-red-500/20 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-red-400" />
                <h3 className="font-sentient text-xl text-red-300">Not Recommended</h3>
              </div>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-red-400 flex-shrink-0"></span>
                  <span className="text-gray-200">Undisclosed use in real interviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-red-400 flex-shrink-0"></span>
                  <span className="text-gray-200">Academic dishonesty</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-red-400 flex-shrink-0"></span>
                  <span className="text-gray-200">Violation of exam policies</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/10 text-center">
            <p className="text-gray-300 italic">
              By using this tool, you acknowledge and agree to use it ethically and in accordance with all applicable policies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}