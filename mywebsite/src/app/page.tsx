import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { HeroSec } from "@/components/hero-section";
import {ProjectSections} from "@/components/project-sections";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br via-pink-50 to-purple-50"> 
      <Navigation />
      <HeroSec />
      <ProjectSections />

    </div>

    /*
    Build the Static Layout ("The Scaffolding"). Just focus on the page structure correctly

    */

  );
}
