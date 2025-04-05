
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Support = () => {
  const categories = [
    { id: "getting-started", title: "Prise en main" },
    { id: "features", title: "Fonctionnalités" },
  ];
  
  const faqItems = [
    {
      id: 1,
      category: "getting-started",
      question: "Dans quelles langues puis-je utiliser Neuronote ?",
      answer: "Neuronote est disponible en français et en anglais. Vous pouvez changer la langue dans les paramètres de votre compte."
    },
    {
      id: 2,
      category: "getting-started",
      question: "Quels formats de cours puis-je importer ?",
      answer: "Vous pouvez importer du texte, des fichiers audio (mp3, wav, etc.), enregistrer directement depuis l'application, importer des PDF, ou même fournir un lien (vidéo YouTube, PDF en ligne, etc.)."
    },
    {
      id: 3,
      category: "getting-started",
      question: "Y a-t-il une limite de taille pour les fichiers audio ou PDF ?",
      answer: "Oui, il y a une limite de 50 MB pour les fichiers audio et PDF dans la version gratuite. La version Premium vous permet d'importer des fichiers jusqu'à 200 MB."
    },
    {
      id: 4,
      category: "getting-started",
      question: "Puis-je utiliser Neuronote sur mon téléphone ou ma tablette ?",
      answer: "Oui, Neuronote est entièrement compatible avec les appareils mobiles et tablettes. Vous pouvez accéder à toutes les fonctionnalités depuis votre navigateur mobile ou télécharger notre application mobile."
    },
    {
      id: 5,
      category: "getting-started",
      question: "Comment choisir entre le thème clair et le thème sombre ?",
      answer: "Vous pouvez changer le thème dans les paramètres de l'application. Allez dans Paramètres > Apparence et sélectionnez le thème qui vous convient le mieux."
    },
    {
      id: 6,
      category: "features",
      question: "Que peut faire Neuronote une fois mon cours importé ?",
      answer: "Une fois votre cours importé, Neuronote peut générer des résumés, créer des fiches de révision, extraire les concepts clés, générer des questions-réponses pour tester vos connaissances, et bien plus encore."
    },
    {
      id: 7,
      category: "features",
      question: "Puis-je modifier les fiches de notes générées ?",
      answer: "Oui, vous pouvez modifier, ajouter ou supprimer du contenu dans toutes les fiches générées par Neuronote. Cliquez simplement sur l'icône de modification pour personnaliser vos notes."
    }
  ];
  
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  
  const filteredQuestions = faqItems.filter(item => item.category === selectedCategory);
  const selectedFaq = faqItems.find(item => item.id === selectedQuestion);
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left column - Categories */}
      <div className="w-1/4 p-6 border-r border-gray-200">
        <h1 className="text-3xl font-bold border-l-4 border-pink-500 pl-4 mb-6">Centre d'aide</h1>
        
        <Card className="mb-8">
          <CardContent className="p-4">
            <p className="text-gray-700 text-sm">
              Une question ou un problème ? Consultez notre FAQ ou contactez-nous directement via le formulaire.
              Nous sommes là pour vous aider !
            </p>
          </CardContent>
        </Card>
        
        <div className="space-y-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setSelectedQuestion(null);
              }}
              className={`w-full text-left p-3 rounded-md transition-colors ${
                selectedCategory === category.id 
                  ? "bg-gray-200 font-semibold" 
                  : "hover:bg-gray-100"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>
      
      {/* Middle column - Questions */}
      <div className="w-1/3 p-6 border-r border-gray-200 overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-6">{categories.find(c => c.id === selectedCategory)?.title}</h2>
        
        <div className="space-y-3">
          {filteredQuestions.map((item) => (
            <Card 
              key={item.id} 
              className={`hover:shadow-md transition-shadow cursor-pointer ${
                selectedQuestion === item.id ? "border-l-4 border-l-pink-500" : ""
              }`}
              onClick={() => setSelectedQuestion(item.id)}
            >
              <CardContent className="p-4 flex items-center justify-between">
                <span className="pr-4">{item.question}</span>
                <ChevronRight className="h-5 w-5 flex-shrink-0 text-gray-400" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Right column - Selected FAQ answer */}
      <div className="flex-1 p-6 overflow-y-auto">
        {selectedFaq ? (
          <div>
            <h2 className="text-2xl font-bold mb-6">{selectedFaq.question}</h2>
            <p className="text-gray-700">{selectedFaq.answer}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <p>Sélectionnez une question pour voir la réponse</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Support;
