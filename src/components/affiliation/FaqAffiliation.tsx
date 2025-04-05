
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FaqAffiliation = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-8">
            <HelpCircle size={18} />
            <span className="font-medium">FAQ</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Questions fréquentes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vous avez des questions concernant notre programme d'affiliation ? Retrouvez ici les réponses aux questions les plus fréquentes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border bg-white rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-left font-medium py-4">
                Comment puis-je m'inscrire au programme d'affiliation ?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                Pour vous inscrire à notre programme d'affiliation, il vous suffit de remplir le formulaire d'inscription disponible sur notre site web. Une fois votre candidature approuvée, vous recevrez un email de confirmation contenant votre lien d'affiliation unique.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border bg-white rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-left font-medium py-4">
                Quand et comment suis-je payé ?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                Les paiements sont effectués mensuellement, dès que votre solde atteint 50€. Vous pouvez choisir d'être payé par virement bancaire ou PayPal. Les commissions sont calculées sur le montant des abonnements générés par vos recommandations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border bg-white rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-left font-medium py-4">
                Quel est le taux de commission ?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                Notre taux de commission est de 30% sur chaque abonnement généré par vos recommandations. Ce taux s'applique à la fois sur le premier paiement et sur tous les renouvellements d'abonnement, tant que l'utilisateur reste abonné.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border bg-white rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-left font-medium py-4">
                Y a-t-il des conditions pour rejoindre le programme ?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                Pour rejoindre notre programme d'affiliation, vous devez avoir plus de 18 ans et disposer d'un site web, blog ou présence sur les réseaux sociaux en rapport avec l'éducation, la productivité ou le développement personnel. Nous examinons chaque candidature individuellement.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border bg-white rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-left font-medium py-4">
                Combien de temps dure le cookie d'affiliation ?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                Notre cookie d'affiliation a une durée de vie de 30 jours. Cela signifie que si un utilisateur clique sur votre lien d'affiliation et s'abonne dans les 30 jours suivants, vous recevrez une commission, même s'il n'a pas acheté immédiatement.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqAffiliation;
