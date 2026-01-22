import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CTASection } from "@/components/sections/CTASection";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <TrustedBy />
      <FeatureGrid />
      <CTASection />
    </div>
  );
}
