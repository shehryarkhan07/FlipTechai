// const FeatureSection = dynamic(() => import("@/components/sections/feature-section"));
// const EmpowerCards = dynamic(() => import("@/components/sections/empowercard"));
const BentoSection = dynamic(() => import("@/components/sections/bento-section"));
const GrowthSection = dynamic(() => import("@/components/sections/growth-section"));
// const QuoteSection = dynamic(() => import("@/components/sections/quote-section"));
const CompanyShowcase = dynamic(() => import("@/components/sections/company-showcase"));
const PricingSection = dynamic(() => import("@/components/sections/pricing-section"));
const TestimonialSection = dynamic(() => import("@/components/sections/testimonial-section"));
const FAQSection = dynamic(() => import("@/components/sections/faq-section"));
const CTASection = dynamic(() => import("@/components/sections/cta-section"));
const FooterSection = dynamic(() => import("@/components/sections/footer-section"));
const FlipTechProcess = dynamic(() => import("@/components/sections/fliptechprocess"));

import AIAgentsSection from "@/components/AIAgentsSection";
import CaseStudiesSection from "@/components/casestudies";
import ErrorBoundary from "@/components/ErrorBoundary";
import { LazyWebGL } from "@/components/LazyWebGL";
import ContactSection from "@/components/sections/Contact";
import HeroSection from "@/components/sections/hero-section";
import DemoOne from "@/components/sections/secondAiDashboard";
import GlowCard from "@/components/ui/GlowEffectCard";
import { SavingsCalculator } from "@/components/ui/SavingCalculator";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <ErrorBoundary>
      <HeroSection />
      </ErrorBoundary>
      <ErrorBoundary>
      <CompanyShowcase />
      </ErrorBoundary>
      <ErrorBoundary>
      <BentoSection />
      </ErrorBoundary>
      {/* <QuoteSection />
      <EmpowerCards/>
      <FeatureSection /> */}
      <ErrorBoundary>
      <AIAgentsSection/>
      </ErrorBoundary>
      <ErrorBoundary>
      <DemoOne/>
      </ErrorBoundary>

      <ErrorBoundary>
        <LazyWebGL height="600px" disableOnReducedMotion={true}>
          <GlowCard/>
        </LazyWebGL>
      </ErrorBoundary>
      
      <ErrorBoundary>
      <GrowthSection />
      </ErrorBoundary>
      <ErrorBoundary>
      <FlipTechProcess/>
      </ErrorBoundary>
      <ErrorBoundary>
      <CaseStudiesSection/>
      </ErrorBoundary>
      <ErrorBoundary>
      <PricingSection />
      </ErrorBoundary>
      <ErrorBoundary>
      <SavingsCalculator/>
      </ErrorBoundary>
      <ErrorBoundary>
      <TestimonialSection />
      </ErrorBoundary>
      <ErrorBoundary>
      <ContactSection/>
      </ErrorBoundary>
      <ErrorBoundary>
      <FAQSection />
      </ErrorBoundary>
      <ErrorBoundary>
      <CTASection />
      </ErrorBoundary>
      
      <FooterSection />
    </main>
  );
}
