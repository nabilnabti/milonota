
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, UserPlus, Link, DollarSign, Repeat } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-violet-100 text-violet-500 rounded-full flex items-center justify-center mx-auto mb-5">
                <UserPlus size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inscription</h3>
              <p className="text-gray-600">Rejoignez notre programme d'affiliation gratuitement</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-violet-100 text-violet-500 rounded-full flex items-center justify-center mx-auto mb-5">
                <Link size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lien unique</h3>
              <p className="text-gray-600">Recevez votre lien d'affiliation personnalisé</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-violet-100 text-violet-500 rounded-full flex items-center justify-center mx-auto mb-5">
                <UserPlus size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Recommandation</h3>
              <p className="text-gray-600">Partagez votre lien avec votre communauté</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-violet-100 text-violet-500 rounded-full flex items-center justify-center mx-auto mb-5">
                <DollarSign size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Revenus</h3>
              <p className="text-gray-600">Gagnez jusqu'à 30% sur chaque abonnement</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
