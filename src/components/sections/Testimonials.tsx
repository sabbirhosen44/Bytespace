import { DesignStage } from "@/components/ui/DesignStage";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

const blobs = [
  "radial-gradient(500px 400px at 1100px 100px, rgba(212,251,32,0.15), transparent)",
  "radial-gradient(300px 220px at 760px 190px, rgba(212,251,32,0.45), transparent)",
  "radial-gradient(240px 200px at 1420px 330px, rgba(212,251,32,0.35), transparent)",
  "radial-gradient(300px 260px at 60px 720px, rgba(40,114,255,0.28), transparent)",
].join(",");

export function Testimonials() {
  return (
    <DesignStage
      className="bg-[#f9f9fa]"
      innerClassName="relative flex flex-col gap-8 px-5 py-16 md:px-10 lg:block lg:h-[784px] lg:p-0"
    >
      <div
        aria-hidden
        style={{ backgroundImage: blobs }}
        className="pointer-events-none absolute inset-0"
      />

      <h2 className="relative z-10 font-heading text-heading-s font-semibold text-black md:text-heading-m lg:absolute lg:left-[118px] lg:top-[114px]">
        Discover What Our
        <br className="hidden lg:block" /> Community Is Saying
      </h2>

      <p className="relative z-10 font-body text-body-m text-neutral-600 lg:absolute lg:left-[738px] lg:top-[75px] lg:w-[600px] lg:text-body-l">
        At ByteSpace, our vibrant community of learners and creators is at the
        <br className="hidden lg:block" /> heart of what we do. Hear directly from those who have experienced the
        <br className="hidden lg:block" /> transformative journey of learning and creating on our platform. Explore
        <br className="hidden lg:block" /> testimonials that reflect the diverse perspectives of enthusiastic learners
        <br className="hidden lg:block" /> and accomplished creators.
      </p>

      <div className="relative z-10 grid items-start gap-6 sm:grid-cols-2 lg:absolute lg:left-[118px] lg:top-[291px] lg:w-[1204px] lg:grid-cols-3 lg:gap-[41px]">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} t={t} />
        ))}
      </div>
    </DesignStage>
  );
}