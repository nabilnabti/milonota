
import React from "react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const HeroAffiliation = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Gagnez <span className="text-pink-500">50 %</span> de commissions récurrentes à vie ! <Rocket className="inline-block ml-2" />
        </h1>
        
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
          Rejoignez le programme d'affiliation Neuronote et <strong>gagnez de l'argent</strong> ! Pour chaque utilisateur qui s'abonne grâce à votre lien, vous recevez <strong>50 % de sa souscription à vie</strong>.
        </p>
        
        <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-6 text-lg">
          Rejoindre le programme d'affiliation
        </Button>
      </div>
    </section>
  );
};

export default HeroAffiliation;
