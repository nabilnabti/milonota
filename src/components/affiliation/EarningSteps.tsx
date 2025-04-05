
import React from "react";
import { Button } from "@/components/ui/button";

const EarningSteps = () => {
  return (
    <section className="pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Étape 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
          <div className="order-2 md:order-1">
            <img 
              src="/lovable-uploads/4b43f8d7-4808-4d85-8917-30bff511fa4f.png" 
              alt="Inscrivez-vous en quelques secondes" 
              className="max-w-full rounded-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center justify-center h-10 w-10 bg-pink-100 text-pink-500 font-bold rounded-full mb-4">1</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Inscrivez-vous en quelques secondes</h3>
            <p className="text-gray-600 mb-6">Inscription simple et rapide, pas de formulaires compliqués.</p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
              S'inscrire - c'est gratuit
            </Button>
          </div>
        </div>

        {/* Étape 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
          <div>
            <div className="inline-flex items-center justify-center h-10 w-10 bg-pink-100 text-pink-500 font-bold rounded-full mb-4">2</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Partagez votre lien</h3>
            <p className="text-gray-600 mb-6">Publiez votre lien unique sur les réseaux sociaux, partagez-le avec vos amis ou ajoutez-le à votre blog. Nous vous donnerons des idées si vous manquez d'inspiration !</p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
              Rejoindre le programme
            </Button>
          </div>
          <div>
            <img 
              src="/lovable-uploads/37fe308b-ee57-48cb-98b2-08dabf38eb53.png" 
              alt="Partagez votre lien" 
              className="max-w-full rounded-lg"
            />
          </div>
        </div>

        {/* Étape 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
          <div className="order-2 md:order-1">
            <img 
              src="/lovable-uploads/8f0883d4-7d8b-48f9-8186-b90caf00570f.png" 
              alt="Recevez votre paiement" 
              className="max-w-full rounded-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center justify-center h-10 w-10 bg-pink-100 text-pink-500 font-bold rounded-full mb-4">3</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Recevez votre paiement</h3>
            <p className="text-gray-600 mb-6">Gagnez 50 % de commissions récurrentes chaque fois qu'un utilisateur s'abonne à un plan payant via votre lien. 🎉 Oui, c'est aussi simple que ça !</p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
              Gagnez sans attendre
            </Button>
          </div>
        </div>

        {/* Étape 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center justify-center h-10 w-10 bg-pink-100 text-pink-500 font-bold rounded-full mb-4">4</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Devenez un ambassadeur Neuronote</h3>
            <p className="text-gray-600 mb-6">En tant qu'affilié performant, vous pouvez rejoindre notre programme VIP et devenir un ambassadeur officiel ⭐. Accédez à des opportunités uniques : événements, collaborations et commissions encore plus élevées 📊!</p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
              Rejoindre le programme
            </Button>
          </div>
          <div>
            <img 
              src="/lovable-uploads/9c380083-c4ff-4a32-be85-86472d2e847c.png" 
              alt="Devenez un ambassadeur Neuronote" 
              className="max-w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningSteps;
