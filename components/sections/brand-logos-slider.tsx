import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur';

export function BrandLogosSlider() {
  // Official assets will be added to `/public/brand-logos/`.
  // Until then, we include a robust config and a safe fallback.
  const logos = [
    { name: 'LeetCode', src: '/brand-logos/leetcode.svg', height: 48, invert: false },
    { name: 'CodeChef', src: '/brand-logos/codechef.svg', height: 44, invert: false },
    { name: 'HackerRank', src: '/brand-logos/hackerrank.svg', height: 44, invert: false },
    { name: 'Codeforces', src: '/brand-logos/codeforces.svg', height: 48, invert: false },
    { name: 'GeeksforGeeks', src: '/brand-logos/geeksforgeeks.svg', height: 48, invert: false },
    { name: 'HackerEarth', src: '/brand-logos/hackerearth.svg', height: 44, invert: false },
  ] as const;

  return (
    <section className="overflow-hidden py-16 pt-20">
      <div className="group relative m-auto max-w-7xl px-6">
        {/* Title section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-500/10 to-yellow-300/10 border border-yellow-500/20 rounded-full text-sm text-yellow-300 font-medium mb-6 sm:mb-8">
            Try It Out
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
            Try On Different <span className="text-yellow-500">Coding</span> <span className="text-yellow-500">Platforms</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10">
            Seamlessly works across popular coding platforms and competitive programming sites
          </p>
        </div>

        <div className="flex flex-col items-center md:flex-row animate-fade-in-up">
          <div
            className="relative py-8 w-full mx-auto"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
            <InfiniteSlider
              speed={56}
              speedOnHover={56}
              gap={128}
              direction="left"
            >
              {logos.map((logo) => (
                <div key={logo.name} className="flex flex-col items-center">
                  <img
                    className={[
                      'mx-auto w-fit',
                      logo.invert ? 'dark:invert' : '',
                    ].join(' ')}
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    height={logo.height}
                    width={Math.round(logo.height * 4)}
                    style={{ height: `${logo.height}px` }}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (target.dataset.fallbackApplied) return;
                      target.dataset.fallbackApplied = 'true';
                      target.src = '/generic-brand-logo.png';
                      target.classList.remove('dark:invert');
                      target.alt = `${logo.name} logo placeholder`;
                    }}
                  />
                  <span className="mt-3 text-sm font-medium text-muted-foreground">
                    {logo.name}
                  </span>
                </div>
              ))}
            </InfiniteSlider>

            {/* Side fades and blurs removed as requested to reveal more logos at the edges */}
          </div>
        </div>
      </div>
    </section>
  );
}