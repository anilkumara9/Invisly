"use client";

import React from 'react';

const CreationFeaturesSection = () => {
  const features = [
    {
      title: 'Copy to Figma',
      description: 'Download designs you like or copy it straight into Figma with our new',
      link: { href: '/figma', text: 'Figma plugin' },
      videoSrc: 'https://bytescale.mobbin.com/FW25bBB/video/assets/videos/lp_features_copy_to_figma.mp4?mute=true&f=mp4-h264&a=%2Fvideo.mp4&w=800&sh=90&q=7&fps=60',
      videoBgClass: 'bg-[#2A292D]',
    },
    {
      title: 'Save to collections',
      description: 'Collect your favorite designs and upload your own screenshots into one place.',
      videoSrc: 'https://bytescale.mobbin.com/FW25bBB/video/assets/videos/lp_features_save_to_collections.mp4?mute=true&f=mp4-h264&a=%2Fvideo.mp4&w=800&sh=90&q=7&fps=60',
      videoBgClass: 'bg-card',
    },
    {
      title: 'Leave comments',
      description: 'Take notes upon saving so you\'ll never forget the context in the future.',
      videoSrc: 'https://bytescale.mobbin.com/FW25bBB/video/assets/videos/lp_features_comments.mp4?mute=true&f=mp4-h264&a=%2Fvideo.mp4&w=800&sh=90&q=7&fps=60',
      videoBgClass: 'bg-card',
    },
  ];

  return (
    <section className="grid place-items-center bg-background px-5 py-16 md:px-6 md:py-20 xl:py-24">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight ">
          From inspiration to  <span className="text-yellow-500">creation.</span>
        </h2>
      <div className="mt-12 grid w-full max-w-[var(--max-content-width)] grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="grid grid-rows-[auto_1fr] rounded-3xl bg-gray-100 p-5 lg:p-8">
            <div role="figure" className={`group relative overflow-hidden rounded-xl ${feature.videoBgClass}`}>
              <video
                className="aspect-[1.33] h-full w-full object-cover transition ease-out group-hover:scale-110"
                autoPlay
                loop
                muted
                playsInline
                key={feature.videoSrc}
              >
                <source src={feature.videoSrc} type="video/mp4; codecs=hvc1" />
                <source src={feature.videoSrc} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col pt-4 lg:pt-6">
              <h3 className="text-body-bold">{feature.title}</h3>
              <p className="pt-1 text-compact text-muted-foreground">
                {feature.description}
                {feature.link && (
                  <>
                    {' '}
                    <a href={feature.link.href} className="underline hover:text-foreground">
                      {feature.link.text}
                    </a>
                    .
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreationFeaturesSection;