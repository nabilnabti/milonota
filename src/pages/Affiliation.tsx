
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroAffiliation from "@/components/affiliation/HeroAffiliation";
import HowItWorks from "@/components/affiliation/HowItWorks";
import EarningSteps from "@/components/affiliation/EarningSteps";
import NoLimits from "@/components/affiliation/NoLimits";
import { Button } from "@/components/ui/button";

const Affiliation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <HeroAffiliation />
        <HowItWorks />
        <EarningSteps />
        <NoLimits />
        
        <section className="py-16 text-center">
          <Button 
            className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-6 text-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Rejoindre le programme d'affiliation
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Affiliation;
