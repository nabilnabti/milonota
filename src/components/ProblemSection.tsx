
import { FileText, Brain, Frown, Search } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="bg-white shadow-md rounded-full px-6 py-2 mb-6 flex items-center">
          <span className="text-red-500 mr-2">📕</span>
          <span className="font-medium">Le Problème</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-4xl">
          70 % des étudiants perdent du temps avec des méthodes inefficaces
        </h2>
        
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Submergés d'informations, les étudiants peinent à retenir l'essentiel, accumulent du stress et s'épuisent avec des méthodes de révision dépassées.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10">
        <div className="border-r border-gray-200 pr-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full mb-6 text-red-500">
              <FileText size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Mauvaise gestion des notes</h3>
            <p className="text-gray-600">
              Les étudiants croulent sous des piles de notes, ayant du mal à les organiser et à les réviser efficacement.
            </p>
          </div>
        </div>
        
        <div className="pl-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full mb-6 text-violet-500">
              <Brain size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Faible rétention des informations</h3>
            <p className="text-gray-600">
              Malgré des heures passées à réviser, de nombreux étudiants constatent qu'ils ne retiennent qu'une fraction des informations.
            </p>
          </div>
        </div>
        
        <div className="border-r border-gray-200 pr-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full mb-6 text-green-500">
              <Frown size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Des révisions interminables</h3>
            <p className="text-gray-600">
              Et si la clé était d'apprendre mieux, pas plus ?
            </p>
          </div>
        </div>
        
        <div className="pl-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full mb-6 text-orange-500">
              <Search size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Absence de suivi des progrès</h3>
            <p className="text-gray-600">
              Sans outils pour suivre leurs progrès, les étudiants ignorent s'ils s'améliorent, ce qui limite leur efficacité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
