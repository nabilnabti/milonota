
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import UniversityLogos from "@/components/UniversityLogos";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <UniversityLogos />
        <ProblemSection />
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>© 2025 Neuronote. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Index;
