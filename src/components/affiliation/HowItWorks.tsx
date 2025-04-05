
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-8">
          <HelpCircle size={18} />
          <span className="font-medium">Comment ça marche ?</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Gagnez de l'argent avec Neuronote<br />
          en 4 étapes simples
        </h2>
      </div>
    </section>
  );
};

export default HowItWorks;
