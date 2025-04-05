
import React from "react";
import { QuestionCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqAffiliation = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-8">
          <QuestionCircle size={18} />
          <span className="font-medium">FAQ</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Questions sur l'affiliation
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="text-xl font-medium text-left py-4">
                Comment puis-je commencer à gagner de l'argent ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                Pour commencer à gagner de l'argent, inscrivez-vous au programme d'affiliation, 
                obtenez votre lien unique et partagez-le avec votre audience. Vous recevrez une 
                commission pour chaque nouvel abonné qui s'inscrit via votre lien.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="text-xl font-medium text-left py-4">
                Y a-t-il une limite à ce que je peux gagner ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                Non, il n'y a aucune limite à vos gains. Plus vous amenez d'abonnés, plus vous 
                gagnez. Certains de nos affiliés les plus performants gagnent plusieurs milliers 
                d'euros par mois.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b border-gray-200">
              <AccordionTrigger className="text-xl font-medium text-left py-4">
                J'habite au Canada, puis-je quand même être payé ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                Oui, notre programme d'affiliation est ouvert à l'international. Nous pouvons 
                effectuer des paiements partout dans le monde via PayPal ou virement bancaire.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-b border-gray-200">
              <AccordionTrigger className="text-xl font-medium text-left py-4">
                Comment puis-je recevoir mes gains ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                Les paiements sont effectués mensuellement. Vous pouvez choisir d'être payé 
                par PayPal ou par virement bancaire. Les paiements sont traités automatiquement 
                dès que votre solde atteint 50€.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-4 font-medium transition-colors"
          >
            👉 Rejoindre le programme 👈
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqAffiliation;
