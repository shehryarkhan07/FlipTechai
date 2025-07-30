// import { HeroVideoSection } from "@/components/sections/hero-video-section";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { LiquidButton } from "../ui/Liquid-button";

const HeroSection = () => {
  const { hero } = siteConfig;

  return (
    <section id="hero" className="w-full relative">
      <div className="relative flex flex-col items-center w-full px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-[600px] md:h-[800px] w-full animated-bg rounded-b-xl" />

        </div>
        <div className="relative z-10 pt-32 max-w-3xl mx-auto h-full w-full flex flex-col gap-10 items-center justify-center">
          {/* <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2">
            {hero.badgeIcon}
            {hero.badge}
          </p> */}
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center text-primary">
              {hero.title}
            </h1>
            <p className="text-base md:text-lg text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
              {hero.description}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center mb-2 cursor-pointer">
            <Link href={"#"}>
            <LiquidButton>Try for free</LiquidButton>
            </Link>
            <Link href={"#"}>
              <LiquidButton>Log in</LiquidButton>
            </Link>
          </div>
        </div>
      </div>
      {/* <HeroVideoSection /> */}
    </section>
  );
}

export default HeroSection;