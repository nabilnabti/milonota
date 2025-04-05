
import { Card, CardContent } from "@/components/ui/card";

const Guide = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold border-l-4 border-pink-500 pl-4 mb-6">Commencez en 1 minute</h1>
      <p className="text-gray-600 mb-8">Comprendre Neuronote en 1 minute facilement</p>
      
      <div className="w-full aspect-video rounded-lg overflow-hidden mb-12">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="Démarrer avec Neuronote rapidement" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      
      <Card className="p-4">
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold mb-4">Comment ça marche?</h2>
          <ol className="list-decimal pl-5 space-y-4">
            <li>Importez votre contenu audio, vidéo, ou texte</li>
            <li>Notre IA analyse et organise l'information</li>
            <li>Recevez des fiches de révision personnalisées</li>
            <li>Étudiez plus efficacement avec des quiz générés automatiquement</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default Guide;
