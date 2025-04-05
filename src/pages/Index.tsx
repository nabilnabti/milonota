
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import UniversityLogos from "@/components/UniversityLogos";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <UniversityLogos />
        <ProblemSection />
        <SolutionSection />
        <FeatureShowcase />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
