"use client";

import Link from 'next/link';

export const BhadraTigerReserveSection = () => {
  return (
    <section className="w-full bg-black relative -mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          {/* Paint Background Image Container - Increased size to fit content better */}
          <div className="relative w-full h-[700px] md:h-[900px] rounded-3xl overflow-hidden">
            <img
              src="paintbackground.png"
              alt="Paint Background"
              className="w-full h-full object-cover"
              loading="lazy"
              style={{
                transform: 'scale(1.5)',
                transformOrigin: 'center'
              }}
            />

            {/* Content Overlay - Moved content slightly downward */}
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6" style={{ transform: 'translateY(-5%)' }}>
              <div className="max-w-3xl text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/30 mb-4 sm:mb-6">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg> */}
                </div>
                
                <h2 className="abril-fatface-regular text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-black drop-shadow-md text-shadow-md text-red-600">
                  Important Platform Disclaimer
                </h2>
                
                <div className="savate-regular text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-wide text-black">
                  <div className="mb-4 sm:mb-6">
                    <p className="mb-3 sm:mb-4">
                      This platform is designed for <span className="text-yellow-700 font-bold">educational purposes only</span>. 
                      It is intended to help users practice and improve their coding skills in a safe environment.
                    </p>
                    <p className="font-bold text-yellow-800 text-base sm:text-lg md:text-xl">
                      Users are responsible for ensuring ethical use during interviews and coding assessments. 
                      Always follow your institution's academic integrity policies.
                    </p>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 text-left max-w-2xl mx-auto">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-yellow-500/60 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M18 6L6 18"></path>
                            <path d="M6 6l12 12"></path>
                          </svg>
                        </div>
                      </div>
                      <p className="ml-2 sm:ml-3 text-black/90 text-xs sm:text-sm">
                        <span className="font-bold text-yellow-800">Not for unauthorized use:</span> Do not use this tool to gain unfair advantages in real interviews, exams, or assessments without explicit permission.
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-yellow-500/60 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M18 6L6 18"></path>
                            <path d="M6 6l12 12"></path>
                          </svg>
                        </div>
                      </div>
                      <p className="ml-2 sm:ml-3 text-black/90 text-xs sm:text-sm">
                        <span className="font-bold text-yellow-800">User responsibility:</span> By using this platform, you acknowledge that you are fully responsible for how you use the information and tools provided.
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-yellow-500/60 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M18 6L6 18"></path>
                            <path d="M6 6l12 12"></path>
                          </svg>
                        </div>
                      </div>
                      <p className="ml-2 sm:ml-3 text-black/90 text-xs sm:text-sm">
                        <span className="font-bold text-yellow-800">No liability:</span> The creators of this platform are not responsible for any consequences arising from the misuse of this tool.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-black/20">
                    <p className="text-black/80 text-xs sm:text-sm">
                      For complete information about your rights and responsibilities, please review our 
                      <Link href="/privacy" className="text-yellow-800 hover:text-yellow-900 font-medium underline ml-1">Privacy Policy</Link> and 
                      <Link href="/terms" className="text-yellow-800 hover:text-yellow-900 font-medium underline ml-1">Terms of Service</Link>.
                    </p>
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