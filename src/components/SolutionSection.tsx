
import { Check, Mic, Youtube, FileText, RotateCcw } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with checkmark */}
        <div className="flex justify-center mb-10">
          <div className="bg-white shadow-md rounded-full px-6 py-2 flex items-center">
            <Check className="text-green-500 mr-2" size={20} />
            <span className="font-medium">La Solution</span>
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Apprend mieux et plus rapidement, avec L'IA.
        </h2>
        
        {/* Subheading */}
        <p className="text-gray-700 text-center mb-20 max-w-4xl mx-auto text-lg">
          Étudiez sans stress en transformant vos notes en quiz interactifs et flashcards pour mieux mémoriser et gagner en confiance.
        </p>

        {/* Two column layout for features */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {/* Left column - Voice recording */}
          <div>
            <div className="flex flex-col items-center mb-12">
              <div className="relative mb-4">
                <img 
                  src="/lovable-uploads/75554039-a24a-4229-9695-3eec46da769b.png" 
                  alt="Microphone" 
                  className="w-28 h-auto"
                />
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0V30M20 30L10 20M20 30L30 20" stroke="#FF69B4" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 shadow-sm mx-auto max-w-md">
              <h3 className="text-center text-xl font-semibold mb-4">Vos notes parfaitement structurées</h3>
              <div className="text-center mb-2">Présentation Générale</div>
              <ul className="list-none space-y-2">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Matière étudiée en première année de droit.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Exercice principal : la dissertation et le commentaire de texte.</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-10 mb-4">
              Arrête de prendre des notes, concentre toi sur ton cours.
            </h3>
            <p className="text-gray-600">
              Neuronote enregistre et transcrit l'audio du cours en une fiche parfaitement structurée
            </p>
          </div>

          {/* Right column - File imports */}
          <div>
            <div className="flex justify-center items-center space-x-8 mb-10">
              <div className="relative">
                <Youtube size={50} className="text-red-500" />
                <div className="absolute -right-12 top-1/2 border-t-2 border-dashed border-gray-400 w-10"></div>
              </div>
              
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                  <Mic className="text-white" size={24} />
                </div>
                <div className="absolute -right-12 top-1/2 border-t-2 border-dashed border-gray-400 w-10"></div>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-white shadow-md rounded-lg flex items-center justify-center">
                  <div className="bg-red-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">PDF</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-pink-500 border-dashed rounded-lg p-6 mx-auto max-w-md">
              <h3 className="text-center font-medium mb-2">Fiche de révision : Le nombre d'or</h3>
              <div className="border-b border-gray-200 pb-2 mb-2">
                <div className="text-pink-500">1. Définition et Propriétés</div>
                <p className="text-sm">
                  Le nombre d'or (φ) est un nombre irrationnel égal à environ 1.618. Il représente une proportion harmonieuse utilisée depuis l'Antiquité dans l'art, l'architecture et la nature.
                </p>
              </div>
              <div>
                <div className="text-pink-500">2. Histoire du Nombre d'Or</div>
                <p className="text-sm">Antiquité : Les Fondations</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-10 mb-4">
              Importe tes cours depuis YouTube, un PDF, ou un fichier audio.
            </h3>
            <p className="text-gray-600">
              Nous transformons les cours importés en une fiche de révision parfaitement structurée
            </p>
          </div>
        </div>

        {/* Second row - Quiz and Flashcards */}
        <div className="grid md:grid-cols-2 gap-12 mt-24">
          {/* Left column - Quiz */}
          <div>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img 
                  src="/lovable-uploads/364cd9d3-9fb0-46d8-9773-a0d9e38fac63.png" 
                  alt="Mathematical formula" 
                  className="w-64 h-auto border-2 border-pink-500 border-dashed rounded-lg p-2"
                />
                
                <div className="absolute -bottom-28 -left-10">
                  <div className="bg-white border-2 border-pink-500 rounded-full p-3 transform -rotate-6 max-w-xs">
                    <p className="text-sm">Qui a été le premier à mentionner le nombre d'or dans un texte écrit ?</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-24 left-48">
                  <div className="bg-white border-2 border-pink-500 rounded-full p-3 transform rotate-2 max-w-xs">
                    <p className="text-sm">Quelle relation mathématique décrit la suite de Fibonacci ?</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-48 left-16">
                  <div className="bg-white border-2 border-pink-500 rounded-full p-3 transform rotate-1 max-w-xs">
                    <p className="text-sm">Quel célèbre dessin de Léonard de Vinci illustre les proportions parfaites du corps humain ?</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-16 mb-4">
              Apprend plus vite grâce aux Quiz généré par notre IA.
            </h3>
            <p className="text-gray-600">
              Neuronote génère automatiquement des quiz pour que tu apprennes ton cours plus rapidement et de manière ludique
            </p>
          </div>

          {/* Right column - Flashcards */}
          <div>
            <div className="flex justify-center mb-8 relative">
              <div className="bg-gray-100 rounded-lg shadow-sm p-6 w-64 text-center">
                <h4 className="font-semibold mb-4">Quels sont les pouvoirs distincts dans la théorie de la séparation des pouvoirs de Montesquieu ?</h4>
                <div className="text-pink-500 mt-8">appuie pour retourner</div>
                <div className="mt-2">
                  <RotateCcw size={32} className="mx-auto text-gray-700" />
                </div>
              </div>
              
              <div className="absolute top-10 right-12 bg-gray-100 rounded-lg shadow-sm p-6 w-64 text-center transform rotate-3">
                <div className="text-pink-500 mb-4">La théorie de Montesquieu distingue le pouvoir législatif, le pouvoir exécutif, et le pouvoir judiciaire.</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-16 mb-4">
              Génère des flashcards avec notre IA.
            </h3>
            <p className="text-gray-600">
              Les flashcards, c'est comme un quiz sympa : une question d'un côté, la réponse de l'autre. Apprends vite et facilement !
            </p>
          </div>
        </div>

        {/* Final CTA section */}
        <div className="mt-32 py-16 bg-gray-100 rounded-lg">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-1 flex items-center">
              <h2 className="text-4xl font-bold">Apprend tes cours</h2>
            </div>
            
            <div className="col-span-2 flex flex-col space-y-6">
              <div className="flex items-center">
                <svg viewBox="0 0 75 30" width="75" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-orange-400 mr-4">
                  <path d="M0 15C25 0 50 30 75 15" stroke="currentColor" strokeWidth="3" />
                </svg>
                <span className="text-3xl text-gray-400">Plus efficacement</span>
                <span className="ml-2 text-gray-400">⏸</span>
              </div>
              
              <div className="flex items-center">
                <svg viewBox="0 0 75 30" width="75" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-violet mr-4">
                  <path d="M0 15C25 0 50 30 75 15" stroke="currentColor" strokeWidth="3" />
                </svg>
                <span className="text-3xl text-gray-400">Plus Rapidement</span>
                <span className="ml-2 text-gray-400">🏃</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-3xl text-purple-400">Ludiquement</span>
                <span className="ml-2 text-purple-400">🎮</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-3xl text-pink-500">Grâce à L'IA</span>
                <span className="ml-2 text-pink-500">✨</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-3xl text-gray-400">Plus efficacement</span>
                <span className="ml-2 text-gray-400">⏸</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
