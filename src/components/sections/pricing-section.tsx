"use client";

import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const PricingSection = () => {
  // const billingCycle = "monthly"; // Or change to "yearly" if needed

  // Display price animation
  const PriceDisplay = ({
    tier,
  }: {
    tier: (typeof siteConfig.pricing.pricingItems)[0];
  }) => {
    const price = tier.price; // Or tier.yearlyPrice if you prefer

    return (
      <motion.span
        key={price}
        className="text-4xl font-semibold"
        initial={{
          opacity: 0,
          x: 10,
          filter: "blur(5px)",
        }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      >
        {price}
      </motion.span>
    );
  };

  return (
    <section
      id="pricing"
      className="flex flex-col items-center justify-center gap-10 pb-10 w-full relative"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          {siteConfig.pricing.title}
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          {siteConfig.pricing.description}
        </p>
      </SectionHeader>

      <div className="grid min-[650px]:grid-cols-2 min-[900px]:grid-cols-3 gap-4 w-full max-w-6xl mx-auto px-6">
        {siteConfig.pricing.pricingItems.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "rounded-xl grid grid-rows-[180px_auto_1fr] relative h-fit min-[650px]:h-full min-[900px]:h-fit",
              tier.isPopular
                ? "md:shadow-[0px_61px_24px_-10px_rgba(0,0,0,0.01),0px_34px_20px_-8px_rgba(0,0,0,0.05),0px_15px_15px_-6px_rgba(0,0,0,0.09),0px_4px_8px_-2px_rgba(0,0,0,0.10),0px_0px_0px_1px_rgba(0,0,0,0.08)] bg-accent"
                : "bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border"
            )}
          >
            <div className="flex flex-col gap-4 p-4">
              <p className="text-sm">
                {tier.name}
                {tier.isPopular && (
                  <span className="bg-gradient-to-b from-secondary/50 from-[1.92%] to-secondary to-[100%] text-white h-6 inline-flex w-fit items-center justify-center px-2 rounded-full text-sm ml-2 shadow-[0px_6px_6px_-3px_rgba(0,0,0,0.08),0px_3px_3px_-1.5px_rgba(0,0,0,0.08),0px_1px_1px_-0.5px_rgba(0,0,0,0.08),0px_0px_0px_1px_rgba(255,255,255,0.12)_inset,0px_1px_0px_0px_rgba(255,255,255,0.12)_inset]">
                    Popular
                  </span>
                )}
              </p>
              <div className="flex items-baseline mt-2">
                <PriceDisplay tier={tier} />
                <span className="ml-2">/month</span>
              </div>
              <p className="text-sm mt-2">{tier.description}</p>
            </div>

            <div className="flex flex-col gap-2 p-4">
              <button
                className={`h-10 w-full flex items-center justify-center text-sm font-normal tracking-wide rounded-full px-4 cursor-pointer transition-all ease-out active:scale-95 ${
                  tier.isPopular
                    ? `${tier.buttonColor} shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)]`
                    : `${tier.buttonColor} shadow-[0px_1px_2px_0px_rgba(255,255,255,0.16)_inset,0px_3px_3px_-1.5px_rgba(16,24,40,0.24),0px_1px_1px_-0.5px_rgba(16,24,40,0.20)]`
                }`}
              >
                {tier.buttonText}
              </button>
            </div>

            <hr className="border-border dark:border-white/20" />
            <div className="p-4">
              {tier.name !== "Basic" && (
                <p className="text-sm mb-4">
                  Everything in {tier.name === "Pro" ? "Basic" : "Pro"} +
                </p>
              )}
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div
                      className={cn(
                        "size-5 rounded-full border border-primary/20 flex items-center justify-center",
                        tier.isPopular && "bg-muted-foreground/40 border-border"
                      )}
                    >
                      <div className="size-3 flex items-center justify-center">
                        <svg
                          width="8"
                          height="7"
                          viewBox="0 0 8 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="block dark:hidden"
                        >
                          <path
                            d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                            stroke="#101828"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <svg
                          width="8"
                          height="7"
                          viewBox="0 0 8 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="hidden dark:block"
                        >
                          <path
                            d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                            stroke="#FAFAFA"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;