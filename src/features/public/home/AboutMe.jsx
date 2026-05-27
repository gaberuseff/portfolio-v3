"use client";

import { FaCompass } from "react-icons/fa6";
import SectionWrapper from "@/components/ui/SectionWrapper";

function AboutMe() {
  const values = [
    {
      no: "01",
      title: "Performance Craft",
      desc: "Optimizing bundle weight, implementing static rendering, and writing fluid CSS layouts."
    },
    {
      no: "02",
      title: "Inclusive Access",
      desc: "Upholding strict WAI-ARIA guidelines, semantic layouts, and screen reader navigation."
    },
    {
      no: "03",
      title: "Predictable State",
      desc: "Architecting clean global slices using Redux Toolkit to build robust state stores."
    }
  ];

  return (
    <SectionWrapper hasBorder={true} py="default">
      
      {/* Header Title */}
      <div className="space-y-4 mb-16">
        <div className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
          About   ·   The Journey & Values
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground font-geist leading-tight">
          My Philosophy & Story
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 items-start">
        
        {/* Left Narrative Column (spans 2 columns on desktop) */}
        <div className="lg:col-span-2 space-y-6 lg:pr-12 text-base sm:text-lg text-muted-foreground/85 leading-relaxed font-light">
          <p>
            I believe in engineering code that is as elegant under the hood as it is seamless and beautiful on the screen. My path as a Front-End Engineer is driven by a deep dedication to creating web interfaces that are not only blazingly fast and responsive, but truly inclusive and accessible to everyone.
          </p>
          <p>
            I treat UI development as a fine craft—where pixel-perfect layout spacing, clean architectural component boundaries, and simple predictable state flows converge to build outstanding user experiences. When I construct a layout, I build for scale, readability, and long-term simplicity.
          </p>
        </div>

        {/* Right Core Values Column (spans 1 column on desktop) */}
        <div className="space-y-6 lg:border-l border-zinc-200/40 dark:border-zinc-800/40 pt-8 lg:pt-0 lg:pl-10">
          <div className="flex items-center gap-2.5 mb-4">
            <FaCompass className="size-3.5 text-muted-foreground/60" />
            <h3 className="text-xs font-semibold tracking-widest uppercase text-foreground">
              Core Core Values
            </h3>
          </div>

          <ul className="space-y-6">
            {values.map((val) => (
              <li key={val.no} className="flex gap-4 items-start group">
                <span className="text-[10px] font-mono font-normal text-muted-foreground/45 pt-1 group-hover:text-primary transition-colors duration-300">
                  {val.no}
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-foreground/90 group-hover:text-primary transition-colors duration-300">
                    {val.title}
                  </h4>
                  <p className="text-xs text-muted-foreground/75 font-light leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </SectionWrapper>
  );
}

export default AboutMe;
