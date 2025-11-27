import React from "react";

function HeroSection({ video }) {
  return (
    <section className="relative w-full h-56 md:h-72 lg:h-162 overflow-hidden mb-6 rounded-none">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
     

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-8 text-white">
        <h2 className="text-xl md:text-4xl font-semibold mb-2">
          Streetwear for the new generation
        </h2>
        <p className="text-xs md:text-xl max-w-md text-slate-100">
          ThreadEx is a clothing project focused on minimal, oversized fits and
          everyday essentials. Designed for comfort, made to stand out.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;