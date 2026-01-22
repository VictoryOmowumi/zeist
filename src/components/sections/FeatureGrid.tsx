import { Section1 } from "./feature-sections/Section1"
import { Section2 } from "./feature-sections/Section2"
import { Section3 } from "./feature-sections/Section3"

export function FeatureGrid() {
  return (
    <section className="border-y border-white/10 bg-background">
      <Section1 />
      <Section2 />
      <Section3 />
    </section>
  )
}