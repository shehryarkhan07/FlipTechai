import { SectionHeader } from "@/components/section-header";
import { SocialProofTestimonials } from "@/components/testimonial-scroll";
import { siteConfig } from "@/lib/config";

const TestimonialSection = () => {
  const { testimonials } = siteConfig;

  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center w-full"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          What Our Clients Say
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
         Hear from businesses that have transformed their operations with FlipTech {`Pro's`} AI agent teams.
        </p>
      </SectionHeader>
      <SocialProofTestimonials testimonials={testimonials} />
    </section>
  );
}

export default TestimonialSection;