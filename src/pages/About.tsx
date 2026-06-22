import AboutHero from "../components/layout/About/AboutHero";
import OriginStory from "../components/layout/About/OriginStory";
import CoreValues from "../components/layout/About/CoreValues";
import FinalCTA from "../components/layout/About/FinalCTA";

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <AboutHero />
      <OriginStory />
      <CoreValues />
      <FinalCTA />
    </div>
  );
}
