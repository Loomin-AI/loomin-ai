import HeroSection from "@/components/Hero/HeroSection";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/night-background.webp"
        alt="Night sky background"
        fill
        priority
        className="absolute inset-0 object-cover z-0"
      />

      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 100% at 10% 0%, rgba(226, 232, 240, 0.15), transparent 65%), rgba(0, 0, 0, 0.3)",
        }}
      />

      <div className="absolute inset-0 bg-black/20 z-20" />

      {/* Header */}
      <div className="relative z-30">
        <Header />
      </div>

      {/* Hero Section */}
      <main className="relative z-30">
        <HeroSection />
      </main>
    </div>
  );
}
