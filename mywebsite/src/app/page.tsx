import Image from "next/image";
import { HeroSec } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import {ProjectSections} from "@/components/project-sections";

export default function Portfolio() {
  return (
    <div className="min-h-screen home-page">
      <main>
        <HeroSec />
        <ProjectSections />
        <AboutSection />
      </main>
    </div>
  );
}
