
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Support = () => {
  const faqItems = [
    {
      id: 1,
      question: "Dans quelles langues puis-je utiliser Neuronote ?",
      link: "#"
    },
    {
      id: 2,
      question: "Quels formats de cours puis-je importer ?",
      link: "#",
      answer: "Vous pouvez importer du texte, des fichiers audio (mp3, wav, etc.), enregistrer directement depuis l'application, importer des PDF, ou même fournir un lien (vidéo YouTube, PDF en ligne, etc.)."
    },
    {
      id: 3,
      question: "Y a-t-il une limite de taille pour les fichiers audio ou PDF ?",
      link: "#"
    },
    {
      id: 4,
      question: "Puis-je utiliser Neuronote sur mon téléphone ou ma tablette ?",
      link: "#"
    },
    {
      id: 5,
      question: "Comment choisir entre le thème clair et le thème sombre ?",
      link: "#"
    },
    {
      id: 6,
      question: "Que peut faire Neuronote une fois mon cours importé ?",
      link: "#"
    },
    {
      id: 7,
      question: "Puis-je modifier les fiches de notes générées ?",
      link: "#"
    }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold border-l-4 border-pink-500 pl-4 mb-6">Centre d'aide</h1>
      
      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-gray-700 mb-4">
            Une question ou un problème ? Consultez notre FAQ ou contactez-nous directement via le formulaire.
            Nous sommes là pour vous aider !
          </p>
        </CardContent>
      </Card>
      
      <h2 className="text-xl font-bold mb-4">Prise en main</h2>
      
      {faqItems.map((item) => (
        <Card key={item.id} className="mb-4 hover:shadow-sm transition-shadow">
          <CardContent className="p-0">
            <Button 
              variant="ghost" 
              className="w-full justify-between text-left p-4 rounded-none h-auto"
              asChild
            >
              <a href={item.link} className="flex items-center justify-between">
                <span>{item.question}</span>
                <ChevronRight className="h-5 w-5" />
              </a>
            </Button>
            
            {item.answer && (
              <div className="px-4 pb-4">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
      
      <h2 className="text-xl font-bold mb-4 mt-8">Fonctionnalités</h2>
      
      <Card className="mb-4 hover:shadow-sm transition-shadow">
        <CardContent className="p-0">
          <Button 
            variant="ghost" 
            className="w-full justify-between text-left p-4 rounded-none h-auto"
            asChild
          >
            <a href="#" className="flex items-center justify-between">
              <span>Que peut faire Neuronote une fois mon cours importé ?</span>
              <ChevronRight className="h-5 w-5" />
            </a>
          </Button>
        </CardContent>
      </Card>
      
      <Card className="mb-4 hover:shadow-sm transition-shadow">
        <CardContent className="p-0">
          <Button 
            variant="ghost" 
            className="w-full justify-between text-left p-4 rounded-none h-auto"
            asChild
          >
            <a href="#" className="flex items-center justify-between">
              <span>Puis-je modifier les fiches de notes générées ?</span>
              <ChevronRight className="h-5 w-5" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Support;
