import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { HeroSec } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import {ProjectSections} from "@/components/project-sections";

export default function Portfolio() {
  return (
    <div className="min-h-screen"> 
      <Navigation />
            <div>
              <HeroSec />
            </div>
      <div className="bg-gray-50">
        <ProjectSections />
      </div>
      <div className="bg-white">
        <AboutSection />
      </div>
    </div>

    /*
    Build the Static Layout ("The Scaffolding"). Just focus on the page structure correctly

    */

  );
}
