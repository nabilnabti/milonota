
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type BillingPeriod = "weekly" | "monthly" | "yearly";

const Premium = () => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("yearly");
  const { toast } = useToast();
  
  const handlePayment = () => {
    toast({
      title: "Paiement initié",
      description: "Le système de paiement n'est pas encore implémenté.",
    });
  };
  
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex border-l-4 border-[#925dc6] pl-4 mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Débloquez <span className="text-[#925dc6]">des notes</span> illimitées !
            </h1>
            <p className="text-gray-600">
              Enregistrements audio, notes et flashcards illimités
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-center mb-12">
          <div className="text-6xl font-bold mb-2">
            4.99€
            <span className="text-gray-400 text-lg font-normal ml-2">
              par mois, facturé annuellement
            </span>
          </div>
          
          <div className="flex gap-4 mt-8 border-b w-full">
            <button 
              className={`py-4 px-6 font-medium relative ${billingPeriod === "weekly" ? 'text-[#925dc6]' : 'text-gray-500'}`}
              onClick={() => setBillingPeriod("weekly")}
            >
              Hebdomadaire
              {billingPeriod === "weekly" && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#925dc6]"></div>
              )}
            </button>
            
            <button 
              className={`py-4 px-6 font-medium relative ${billingPeriod === "monthly" ? 'text-[#925dc6]' : 'text-gray-500'}`}
              onClick={() => setBillingPeriod("monthly")}
            >
              Mensuel
              {billingPeriod === "monthly" && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#925dc6]"></div>
              )}
            </button>
            
            <button 
              className={`py-4 px-6 font-medium relative ${billingPeriod === "yearly" ? 'text-[#925dc6]' : 'text-gray-500'}`}
              onClick={() => setBillingPeriod("yearly")}
            >
              Annuel
              {billingPeriod === "yearly" && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#925dc6]"></div>
              )}
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border border-gray-200 rounded-xl p-4">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-[#925dc6] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Enregistrements audio illimités</h3>
                  <p className="text-gray-600 mt-1">Importez ou enregistrez autant d'audio que vous voulez</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 rounded-xl p-4">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-[#925dc6] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Quiz & flashcards illimités</h3>
                  <p className="text-gray-600 mt-1">Créez autant de matériel d'étude que nécessaire</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 rounded-xl p-4">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-[#925dc6] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Apprenez 10 fois plus vite</h3>
                  <p className="text-gray-600 mt-1">Notre IA optimise votre apprentissage et votre rétention</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 rounded-xl p-4">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-[#925dc6] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Nouveau concept et généré par IA</h3>
                  <p className="text-gray-600 mt-1">Des fonctionnalités innovantes alimentées par l'intelligence artificielle</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-center">
          <Button 
            className="bg-[#925dc6] hover:bg-[#7a4ea5] text-white py-6 px-12 rounded-full text-lg font-semibold"
            onClick={handlePayment}
          >
            Paiement en un clic !
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
