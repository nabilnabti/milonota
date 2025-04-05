
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FaqSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium uppercase mb-2">FAQ</p>
          <h2 className="text-4xl font-bold mb-8">Foire aux Questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full mb-12">
          <AccordionItem value="item-1" className="border-t border-gray-200">
            <AccordionTrigger className="text-lg font-medium py-6">
              C'est Gratuit ?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Oui, Neuronote propose une version gratuite avec des fonctionnalités essentielles. Des options premium sont disponibles pour un accès à des fonctionnalités avancées.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-t border-gray-200">
            <AccordionTrigger className="text-lg font-medium py-6">
              Comment ça fonctionne ?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Neuronote utilise l'intelligence artificielle pour analyser et traiter vos notes de cours. Vous pouvez importer des cours depuis diverses sources, enregistrer des cours en direct, ou créer vos propres notes. L'application organise ensuite vos informations et génère des quiz et des fiches de révision personnalisés.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-t border-gray-200">
            <AccordionTrigger className="text-lg font-medium py-6">
              Puis-je annuler mon abonnement ?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Absolument. Vous pouvez annuler votre abonnement à tout moment depuis votre compte. Une fois annulé, vous pourrez continuer à utiliser les services premium jusqu'à la fin de votre période de facturation.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-t border-gray-200">
            <AccordionTrigger className="text-lg font-medium py-6">
              Avez-vous un programme d'affiliation ?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Oui, nous proposons un programme d'affiliation attractif. Partagez Neuronote avec vos amis et gagnez des mois d'abonnement gratuit ou des commissions sur leurs abonnements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-t border-b border-gray-200">
            <AccordionTrigger className="text-lg font-medium py-6">
              Puis-je utiliser Neuronote sur mon téléphone ?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Oui, Neuronote est disponible sur tous les appareils - ordinateurs, tablettes et smartphones. Vous pouvez accéder à vos notes et réviser où que vous soyez.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="bg-gray-100 p-8 rounded-xl flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="font-medium text-lg mb-1">Des questions ? Notre équipe est là pour vous aider ! 😊</p>
            <p className="text-gray-600 text-sm">Contactez notre équipe pour toute question ou assistance.</p>
          </div>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6 py-5 mt-4 md:mt-0">
            Contactez-nous
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
