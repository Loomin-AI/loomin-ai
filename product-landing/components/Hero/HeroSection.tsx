import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
          <AnimatedGroup variants={transitionVariants}>
            <Link
              href="#waitlist"
              className="hover:bg-black/40 bg-black/30 group mx-auto flex w-fit items-center gap-4 rounded-full border border-white/40 p-1 pl-4 shadow-lg backdrop-blur-md transition-colors duration-300"
            >
              <span className="text-white text-sm font-medium">
                {"We're building something different ✨"}
              </span>
              <span className="block h-4 w-0.5 border-l border-white/50"></span>
              <div className="bg-white/20 group-hover:bg-white/30 size-6 overflow-hidden rounded-full duration-500">
                <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                  <span className="flex size-6">
                    <ArrowRight className="m-auto size-3 text-white" />
                  </span>
                  <span className="flex size-6">
                    <ArrowRight className="m-auto size-3 text-white" />
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedGroup>

          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h1"
            className="mx-auto mt-8 max-w-4xl text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5rem] text-white font-normal"
          >
            Bringing Humanity Back To Hiring
          </TextEffect>

          <TextEffect
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.5}
            as="p"
            className="mx-auto mt-8 max-w-2xl text-balance text-lg text-gray-200 leading-relaxed"
          >
            {
              "We're tired of hiring being broken. Candidates deserve better than black holes. Recruiters deserve better than endless screening. So we're building an HRMS that puts people first."
            }
          </TextEffect>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row"
          >
            <div className="bg-white/20 rounded-[calc(var(--radius-xl)+0.125rem)] border border-white/30 p-0.5 backdrop-blur-md">
              <Link
                href="#waitlist"
                className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm bg-white text-black hover:bg-gray-100 h-12 rounded-xl px-8 text-base "
              >
                <span className="text-nowrap">Join the Waitlist</span>
              </Link>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
